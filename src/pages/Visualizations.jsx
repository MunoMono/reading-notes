import React, { useEffect, useMemo, useState } from "react";
import { Grid, Column, Breadcrumb, BreadcrumbItem, Button, Tag } from "@carbon/react";
import { Download } from "@carbon/icons-react";
import { Link } from "react-router-dom";
import "../styles/pages/_visualizations.scss";

const STRAND_DEFS = [
  {
    id: "S1",
    title: "Historicising contested design knowledge",
    accent: "#8a3ffc",
  },
  {
    id: "S2",
    title: "Recording, organising, and obscuring traces",
    accent: "#0f62fe",
  },
  {
    id: "S3",
    title: "Surfacing and reactivating traces computationally",
    accent: "#198038",
  },
];

function inferStrand(entry) {
  if (entry.model_strand) return entry.model_strand;

  const category = String(entry.category || "").toLowerCase();
  if (category.startsWith("s1") || category.includes("historicising contested design knowledge")) {
    return "S1";
  }
  if (category.startsWith("s2") || category.includes("recording, organising, and obscuring traces")) {
    return "S2";
  }
  if (category.startsWith("s3") || category.includes("surfacing and reactivating traces computationally")) {
    return "S3";
  }
  return "";
}

function formatPct(value, total) {
  if (!total) return "0%";
  return `${Math.round((value / total) * 100)}%`;
}

function getEntryTimestamp(entry) {
  const value = Number(entry.noteDateMs || entry.mtimeMs || 0);
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function formatMonthLabel(timestamp) {
  const date = new Date(timestamp);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getBalanceState(count, target, tolerance) {
  if (!target) {
    return { label: "near-balance", tone: "green" };
  }

  if (count > target + tolerance) {
    return { label: "overweight", tone: "red" };
  }

  if (count < target - tolerance) {
    return { label: "underweight", tone: "magenta" };
  }

  return { label: "near-balance", tone: "green" };
}

export default function Visualizations() {
  const [data, setData] = useState({ entries: [] });

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const ver = import.meta.env?.VITE_BUILD_ID || "";
    const url = `${base}docs/index.json${ver ? `?v=${ver}` : ""}`;

    fetch(url, { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => setData(json))
      .catch((e) => {
        console.error("Failed to load docs index", { url, error: e });
      });
  }, []);

  const analysis = useMemo(() => {
    const entries = data.entries || [];
    const byStrand = new Map(
      STRAND_DEFS.map((strand) => [
        strand.id,
        { ...strand, count: 0, subclusters: new Map(), sourceTypes: new Map() },
      ])
    );
    const unclassified = [];

    for (const entry of entries) {
      const strandId = inferStrand(entry);
      if (!strandId || !byStrand.has(strandId)) {
        unclassified.push(entry);
        continue;
      }

      const bucket = byStrand.get(strandId);
      bucket.count += 1;

      const subcluster = entry.model_subcluster || "Unspecified sub-cluster";
      bucket.subclusters.set(subcluster, (bucket.subclusters.get(subcluster) || 0) + 1);

      const sourceType = entry.source_type || "Unspecified source type";
      bucket.sourceTypes.set(sourceType, (bucket.sourceTypes.get(sourceType) || 0) + 1);
    }

    const strands = Array.from(byStrand.values()).map((strand) => ({
      ...strand,
      percentage: entries.length ? strand.count / entries.length : 0,
      subclusterRows: Array.from(strand.subclusters.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([label, count]) => ({ label, count })),
      sourceRows: Array.from(strand.sourceTypes.entries())
        .sort((a, b) => b[1] - a[1])
        .map(([label, count]) => ({ label, count })),
    }));

    const sourceTypeMatrix = Array.from(
      new Set(strands.flatMap((strand) => strand.sourceRows.map((row) => row.label)))
    )
      .sort((a, b) => a.localeCompare(b))
      .map((label) => ({
        label,
        counts: strands.map((strand) => strand.sourceTypes.get(label) || 0),
      }));

    const classifiedTotal = entries.length - unclassified.length;
    const targetPerStrand = classifiedTotal ? classifiedTotal / STRAND_DEFS.length : 0;
    const tolerance = targetPerStrand ? Math.max(1, Math.round(targetPerStrand * 0.12)) : 0;

    const timelineMap = new Map();
    for (const entry of entries) {
      const timestamp = getEntryTimestamp(entry);
      const strandId = inferStrand(entry);
      if (!timestamp || !strandId || !byStrand.has(strandId)) {
        continue;
      }

      const monthDate = new Date(timestamp);
      const monthKey = `${monthDate.getFullYear()}-${String(monthDate.getMonth() + 1).padStart(2, "0")}`;
      if (!timelineMap.has(monthKey)) {
        timelineMap.set(monthKey, {
          key: monthKey,
          label: formatMonthLabel(new Date(monthDate.getFullYear(), monthDate.getMonth(), 1).getTime()),
          counts: Object.fromEntries(STRAND_DEFS.map((strand) => [strand.id, 0])),
          total: 0,
        });
      }

      const row = timelineMap.get(monthKey);
      row.counts[strandId] += 1;
      row.total += 1;
    }

    const timeline = Array.from(timelineMap.values())
      .sort((a, b) => a.key.localeCompare(b.key))
      .map((row) => ({
        ...row,
        segments: STRAND_DEFS.map((strand) => ({
          ...strand,
          count: row.counts[strand.id] || 0,
          percentage: row.total ? (row.counts[strand.id] || 0) / row.total : 0,
        })),
      }));

    return {
      total: entries.length,
      classified: classifiedTotal,
      unclassified,
      strands,
      sourceTypeMatrix,
      targetPerStrand,
      tolerance,
      timeline,
    };
  }, [data.entries]);

  const downloadCSV = () => {
    const rows = [
      ["Strand", "Label", "Count", "Percentage"],
      ...analysis.strands.map((strand) => [
        strand.id,
        strand.title,
        String(strand.count),
        formatPct(strand.count, analysis.total),
      ]),
    ];

    const csvContent = rows
      .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `strand-balance-${new Date().toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Grid className="cds--grid cds--grid--narrow visualizations-page">
      <Column lg={16} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>Visualizations</BreadcrumbItem>
        </Breadcrumb>

        <h2 className="page-heading">Stream balance</h2>
        <p className="cds--type-body-long visualizations-intro">
          This view normalizes the collection into the three main thesis streams so you can see
          whether the literature is balanced, where it is over-weighted, and which source types
          cluster inside each stream.
        </p>

        <div className="overview-strip">
          <div className="overview-card">
            <span className="label">Total notes</span>
            <strong>{analysis.total}</strong>
          </div>
          <div className="overview-card">
            <span className="label">Classified notes</span>
            <strong>{analysis.classified}</strong>
          </div>
          <div className="overview-card">
            <span className="label">Unclassified</span>
            <strong>{analysis.unclassified.length}</strong>
          </div>
          <div className="overview-actions">
            <Button kind="tertiary" renderIcon={Download} onClick={downloadCSV}>
              Download strand CSV
            </Button>
          </div>
        </div>

        <section className="chart-section balance-section">
          <h3>Main stream balance</h3>
          <p className="cds--type-helper-text">
            A quick reading of the whole collection across S1, S2, and S3.
          </p>

          <div className="balance-bar" aria-label="Main stream balance bar">
            {analysis.strands.map((strand) => (
              <div
                key={strand.id}
                className="balance-segment"
                style={{ width: `${strand.percentage * 100}%`, backgroundColor: strand.accent }}
                title={`${strand.id}: ${strand.count} notes`}
              />
            ))}
          </div>

          <div className="strand-grid">
            {analysis.strands.map((strand) => (
              <article className="strand-card" key={strand.id}>
                <div className="strand-card-head">
                  <span className="strand-swatch" style={{ backgroundColor: strand.accent }} />
                  <div>
                    <div className="strand-id">{strand.id}</div>
                    <h4>{strand.title}</h4>
                  </div>
                </div>

                <div className="strand-metrics">
                  <div>
                    <span className="label">Notes</span>
                    <strong>{strand.count}</strong>
                  </div>
                  <div>
                    <span className="label">Share</span>
                    <strong>{formatPct(strand.count, analysis.total)}</strong>
                  </div>
                  <div>
                    <span className="label">Balance state</span>
                    <Tag type={getBalanceState(strand.count, analysis.targetPerStrand, analysis.tolerance).tone}>
                      {getBalanceState(strand.count, analysis.targetPerStrand, analysis.tolerance).label}
                    </Tag>
                  </div>
                </div>

                <div className="strand-progress">
                  <div
                    className="strand-progress-fill"
                    style={{ width: `${strand.percentage * 100}%`, backgroundColor: strand.accent }}
                  />
                </div>

                <div className="strand-breakdown">
                  <div>
                    <h5>Sub-clusters</h5>
                    <ul>
                      {strand.subclusterRows.map((row) => (
                        <li key={row.label}>
                          <span>{row.label}</span>
                          <strong>{row.count}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5>Source types</h5>
                    <div className="tag-cluster">
                      {strand.sourceRows.map((row) => (
                        <Tag key={`${strand.id}-${row.label}`} type="cool-gray">
                          {row.label}: {row.count}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="chart-section timeline-section">
          <h3>Balance Over Time By Note Date</h3>
          <p className="cds--type-helper-text">
            Each row shows the monthly mix of notes by stream, so you can see when recent reading starts to lean too heavily toward one strand.
          </p>

          <div className="timeline-legend" aria-label="Timeline legend">
            {STRAND_DEFS.map((strand) => (
              <div className="timeline-legend-item" key={`legend-${strand.id}`}>
                <span className="strand-swatch" style={{ backgroundColor: strand.accent }} />
                <span>{strand.id}</span>
              </div>
            ))}
          </div>

          <div className="timeline-table" role="table" aria-label="Monthly stream balance by note date">
            {analysis.timeline.map((row) => (
              <div className="timeline-row" role="row" key={row.key}>
                <div className="timeline-label" role="rowheader">
                  <strong>{row.label}</strong>
                  <span>{row.total} notes</span>
                </div>
                <div className="timeline-bar" role="cell" aria-label={`${row.label} stream balance`}>
                  {row.segments.map((segment) => (
                    <div
                      key={`${row.key}-${segment.id}`}
                      className="timeline-segment"
                      style={{ width: `${segment.percentage * 100}%`, backgroundColor: segment.accent }}
                      title={`${segment.id}: ${segment.count} notes`}
                    />
                  ))}
                </div>
                <div className="timeline-stats" role="cell">
                  {row.segments.map((segment) => (
                    <span key={`${row.key}-count-${segment.id}`}>
                      {segment.id} {segment.count}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="chart-section matrix-section">
          <h3>Source Type Mix Across Streams</h3>
          <p className="cds--type-helper-text">
            Useful for checking whether one stream has accumulated mostly bridge texts while
            another has more core or methodological material.
          </p>

          <div className="source-matrix" role="table" aria-label="Source type by stream">
            <div className="matrix-row matrix-head" role="row">
              <span role="columnheader">Source type</span>
              {analysis.strands.map((strand) => (
                <span key={strand.id} role="columnheader">
                  {strand.id}
                </span>
              ))}
            </div>
            {analysis.sourceTypeMatrix.map((row) => (
              <div className="matrix-row" role="row" key={row.label}>
                <span role="cell">{row.label}</span>
                {row.counts.map((count, index) => (
                  <span role="cell" key={`${row.label}-${analysis.strands[index].id}`}>
                    {count}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {analysis.unclassified.length ? (
          <section className="chart-section unclassified-section">
            <h3>Needs Classification</h3>
            <p className="cds--type-helper-text">
              These notes are not currently mappable to one of the three main streams from the indexed metadata.
            </p>
            <ul className="unclassified-list">
              {analysis.unclassified.map((entry) => (
                <li key={`${entry.letter}/${entry.slug}`}>
                  <Link to={`/docs/${entry.letter}/${entry.slug}`}>{entry.displayTitle || entry.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Column>
    </Grid>
  );
}
