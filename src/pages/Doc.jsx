import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Grid, Column, Breadcrumb, BreadcrumbItem } from "@carbon/react";

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\s*([\s\S]*?)\s*---/);
  if (!m) return {};
  const block = m[1];
  const out = {};
  block.split(/\r?\n/).forEach((line) => {
    const mm = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*(.*)\s*$/);
    if (!mm) return;
    const k = mm[1];
    let v = mm[2] || "";
    v = v.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
    out[k] = v;
  });
  return out;
}

function stripFrontmatter(raw) {
  return raw.replace(/^---[\s\S]*?---\s*/, "");
}

function stripLeadingH1(s, title) {
  if (!s) return s;
  if (title) {
    const re = new RegExp(`^\\s*#\\s+${escapeRegExp(title)}\\s*\\n+`, "i");
    if (re.test(s)) return s.replace(re, "");
  }
  return s.replace(/^\s*#\s+.+\n+/, "");
}

function formatUpdated(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return "";
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString(undefined, { month: "short" });
  const year = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${year}, ${hh}:${mm}`;
}

export default function Doc() {
  const { letter, slug } = useParams();
  const [md, setMd] = useState("# Loading…");
  const [meta, setMeta] = useState(null);
  const [updatedFromMd, setUpdatedFromMd] = useState("");

  const base = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    let titleFromMeta = "";

    fetch(`${base}docs/index.json`, { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`index ${r.status}`))))
      .then((idx) => idx?.entries?.find((e) => e.letter === letter && e.slug === slug))
      .then((m) => {
        setMeta(m || null);
        titleFromMeta = m?.title || "";
        return fetch(`${base}docs/${letter}/${slug}.md`, { cache: "no-cache" });
      })
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`md ${r.status}`))))
      .then((raw) => {
        const fm = parseFrontmatter(raw);
        const ts = fm.last_updated || fm.lastUpdated || "";
        setUpdatedFromMd(ts);

        const withoutFM = stripFrontmatter(raw);
        const cleaned = stripLeadingH1(withoutFM, titleFromMeta);
        setMd(cleaned || "# Not found");
      })
      .catch((err) => {
        console.error("Doc load failed:", err);
        setMd("# Not found");
      });
  }, [letter, slug, base]);

  const updatedPretty =
    formatUpdated(updatedFromMd) || formatUpdated(meta?.last_updated);

  return (
    <Grid className="cds--grid cds--grid--narrow">
      <Column lg={12} md={8} sm={4}>
        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={{ pathname: "/", hash: `#${letter}` }}>{letter}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>{meta?.title || slug}</BreadcrumbItem>
        </Breadcrumb>

        <div className="doc-header">
          <h2>{meta?.title || slug}</h2>

          {(meta?.authors || meta?.year || meta?.venue || meta?.doi) && (
            <p className="doc-meta">
              {meta?.authors}
              {meta?.year ? ` (${meta.year})` : ""}
              {meta?.venue ? ` — ${meta.venue}` : ""}
              {meta?.doi ? ` · DOI: ${meta.doi}` : ""}
            </p>
          )}

          {updatedPretty && (
            <p className="doc-meta doc-revision">
              Last revision: {updatedPretty}
            </p>
          )}

          <hr className="doc-separator" />
        </div>

        <div className="carbon-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </div>
      </Column>
    </Grid>
  );
}