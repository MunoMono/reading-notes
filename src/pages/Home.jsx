import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Column, Tag, Dropdown, DatePicker, DatePickerInput, Button } from "@carbon/react";
import { Filter } from "@carbon/icons-react";
import SearchBox from "../components/SearchBox";
import "../styles/pages/_home.scss"; // custom page styles

const DATE_PRESETS = [
  { id: "this-month", label: "This month" },
  { id: "last-month", label: "Last month" },
  { id: "last-30", label: "Last 30 days" },
  { id: "this-year", label: "This year" },
  { id: "phd-year-2", label: "PhD Year 2" },
];

const PHD_YEAR_2_RANGE = {
  start: new Date(2026, 8, 1),
  end: new Date(2027, 7, 31),
};

function fmtDateInput(d) {
  if (!d) return "";
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function fmtDateSummary(d) {
  if (!d) return "";
  return d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text, query) {
  if (!query?.trim() || !text) return text;
  const re = new RegExp(`(${escapeRegExp(query.trim())})`, "gi");
  const parts = String(text).split(re);
  return parts.map((part, i) =>
    re.test(part) ? <mark key={i}>{part}</mark> : <React.Fragment key={i}>{part}</React.Fragment>
  );
}

// Category tag colors
function categoryTag(category) {
  if (!category) return null;

  // Map strand-style categories (e.g., S1, S2, S3) and fall back to gray
  let type = "gray";
  const trimmed = category.trim();

  if (trimmed.startsWith("S1")) type = "blue";
  else if (trimmed.startsWith("S2")) type = "teal";
  else if (trimmed.startsWith("S3")) type = "magenta";

  return (
    <Tag type={type} title={category}>
      {category}
    </Tag>
  );
}

export default function Home() {
  const [data, setData] = useState({ entries: [], grouped: {}, updatedAt: null });
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);
  const [noteDateRange, setNoteDateRange] = useState([null, null]);
  const [dateInputValues, setDateInputValues] = useState(["", ""]);
  const [activePreset, setActivePreset] = useState(null);
  const [datePickerKey, setDatePickerKey] = useState(0);

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

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredEntries = useMemo(() => {
    let entries = data.entries || [];
    const [startDate, endDate] = noteDateRange;

    if (query.trim()) {
      const q = query.toLowerCase();
      entries = entries.filter((e) =>
        [e.title, e.authors, e.venue, e.year, e.doi, e.category]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    if (categoryFilter) {
      entries = entries.filter((e) => e.category === categoryFilter);
    }

    if (startDate || endDate) {
      const startMs = startDate ? new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate(), 0, 0, 0, 0).getTime() : null;
      const endMs = endDate
        ? new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59, 999).getTime()
        : null;

      entries = entries.filter((e) => {
        const raw = Number(e.noteDateMs ?? e.mtimeMs);
        if (!Number.isFinite(raw)) return false;
        if (startMs !== null && raw < startMs) return false;
        if (endMs !== null && raw > endMs) return false;
        return true;
      });
    }

    return entries;
  }, [data.entries, query, categoryFilter, noteDateRange]);

  const filteredGrouped = useMemo(() => {
    return filteredEntries.reduce((acc, e) => {
      (acc[e.letter] ||= []).push(e);
      return acc;
    }, {});
  }, [filteredEntries]);

  const total = filteredEntries.length;
  const lastUpdated = data.updatedAt
    ? new Date(data.updatedAt).toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : null;

  const categoryOptions = useMemo(() => {
    const cats = new Set(["All"]);
    (data.entries || []).forEach((e) => {
      if (e.category) cats.add(e.category);
    });
    return Array.from(cats).sort((a, b) => {
      if (a === "All") return -1;
      if (b === "All") return 1;
      return a.localeCompare(b);
    });
  }, [data.entries]);

  const dateFilterSummary = useMemo(() => {
    const [startDate, endDate] = noteDateRange;
    if (!startDate && !endDate) return null;

    if (startDate && endDate) {
      return `${total} notes from ${fmtDateSummary(startDate)} to ${fmtDateSummary(endDate)}`;
    }

    if (startDate) {
      return `${total} notes from ${fmtDateSummary(startDate)} onward`;
    }

    return `${total} notes up to ${fmtDateSummary(endDate)}`;
  }, [noteDateRange, total]);

  function clearDateFilter() {
    setNoteDateRange([null, null]);
    setDateInputValues(["", ""]);
    setActivePreset(null);
    setDatePickerKey((k) => k + 1);
  }

  function applyPreset(id) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let start = null;
    let end = null;

    if (id === "this-month") {
      start = new Date(today.getFullYear(), today.getMonth(), 1);
      end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    } else if (id === "last-month") {
      start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      end = new Date(today.getFullYear(), today.getMonth(), 0);
    } else if (id === "last-30") {
      end = today;
      start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 29);
    } else if (id === "this-year") {
      start = new Date(today.getFullYear(), 0, 1);
      end = new Date(today.getFullYear(), 11, 31);
    } else if (id === "phd-year-2") {
      start = PHD_YEAR_2_RANGE.start;
      end = PHD_YEAR_2_RANGE.end;
    }

    setNoteDateRange([start, end]);
    setDateInputValues([fmtDateInput(start), fmtDateInput(end)]);
    setActivePreset(id);
  }

  return (
    <Grid className="cds--grid cds--grid--narrow home-page">
      <Column lg={12} md={8} sm={4}>
        <h2 className="home-heading">Reading notes</h2>
        <p className="cds--type-helper-text home-meta">
          {total} entries · from <code>public/docs</code>
          {lastUpdated ? <> · updated {lastUpdated}</> : null}
        </p>

        {/* Search bar */}
        <div className="home-search">
          <SearchBox query={query} setQuery={setQuery} />
        </div>

        {/* Category filter directly below */}
        <div className="home-filter">
          <Filter size={20} />
          <Dropdown
            id="category-filter"
            label="Filter by category"
            items={categoryOptions}
            selectedItem={categoryFilter || "All"}
            onChange={({ selectedItem }) =>
              setCategoryFilter(selectedItem === "All" ? null : selectedItem)
            }
          />
        </div>

        <div className="home-date-tools">
          <div className="home-date-filter">
            <DatePicker
              key={datePickerKey}
              datePickerType="range"
              dateFormat="Y-m-d"
              onChange={(dates, dateStr) => {
                const next = [dates?.[0] || null, dates?.[1] || null];
                setNoteDateRange(next);
                if (dateStr) {
                  const [startText = "", endText = ""] = String(dateStr).split(" to ");
                  setDateInputValues([startText, endText]);
                } else {
                  setDateInputValues([fmtDateInput(next[0]), fmtDateInput(next[1])]);
                }
                setActivePreset(null);
              }}
            >
              <DatePickerInput
                id="note-date-start"
                labelText="Note date from"
                placeholder="yyyy-mm-dd"
                value={dateInputValues[0]}
              />
              <DatePickerInput
                id="note-date-end"
                labelText="Note date to"
                placeholder="yyyy-mm-dd"
                value={dateInputValues[1]}
              />
            </DatePicker>
            <Button
              kind="ghost"
              size="sm"
              onClick={clearDateFilter}
            >
              Clear
            </Button>
          </div>

          <div className="home-date-presets" aria-label="Date presets">
            {DATE_PRESETS.map((preset) => (
              <button
                type="button"
                key={preset.id}
                className={`preset-chip ${activePreset === preset.id ? "is-active" : ""}`}
                onClick={() => applyPreset(preset.id)}
              >
                {preset.label}
              </button>
            ))}
          </div>

          {dateFilterSummary ? (
            <p className="cds--type-helper-text home-date-summary">{dateFilterSummary}</p>
          ) : null}
        </div>

        {/* A–Z navigation pills */}
        <div className="pill-row">
          {letters.map((L) => (
            <a className="pill" key={L} href={`#${L}`}>
              {L} <Tag type="gray">{(filteredGrouped[L] || []).length}</Tag>
            </a>
          ))}
        </div>

        {/* Entry list */}
        {letters.map((L) => {
          const items = filteredGrouped[L] || [];
          if (!items.length) return null;
          return (
            <section key={L} id={L} className="alpha-section">
              <h3>{L}</h3>
              <ul className="entry-list">
                {items.map((e) => (
                  <li key={`${e.letter}/${e.slug}`}>
                    <Link to={`/docs/${e.letter}/${e.slug}`}>
                      <strong>{highlight(e.authors, query)}</strong>
                      {e.year ? <> ({highlight(e.year, query)})</> : null}.{" "}
                      {highlight(e.title, query)}
                      {e.venue ? <em> — {highlight(e.venue, query)}</em> : null}
                    </Link>{" "}
                    {categoryTag(e.category)}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Column>
    </Grid>
  );
}
