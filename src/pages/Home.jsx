import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Column, Tag, Dropdown } from "@carbon/react";
import { Filter } from "@carbon/icons-react";
import SearchBox from "../components/SearchBox";
import "../styles/pages/_home.scss"; // custom page styles

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

// Zotero-based category definitions
// Parent folders (not applicable as tags per user requirement):
// 1 Design methods, design science and epistemic drift
// 2 Archives, infrastructure and classification
// 3 Computational archives and AI
// 4 DDR history and primary sources
// 5 Practice-led and cybernetic design research
// 6 Research methods
// 7 Source classification

const ZOTERO_CATEGORIES = {
  // Group 1: Design methods - use blue family
  "1.1": { label: "1.1 Canonical methods texts", color: "blue" },
  "1.2": { label: "1.2 Critiques/anti-method/drift", color: "red" },
  "1.3": { label: "1.3 Historical accounts", color: "cyan" },
  // Group 2: Archives - use purple family
  "2.1": { label: "2.1 Archives infrastructure", color: "purple" },
  "2.2": { label: "2.2 Classification/schema", color: "magenta" },
  "2.3": { label: "2.3 Linked data", color: "teal" },
  // Group 3: Computational - use green family
  "3.1": { label: "3.1 Computational archives", color: "green" },
  "3.2": { label: "3.2 XAI/RAG", color: "high-contrast" },
  // Group 4: DDR history - use warm tones
  "4.1": { label: "4.1 DDR history", color: "warm-gray" },
  "4.2": { label: "4.2 DDR primary sources", color: "outline" },
  // Group 5: Practice-led - use distinct colors
  "5.1": { label: "5.1 Practice-led research", color: "teal" },
  "5.2": { label: "5.2 Cybernetics", color: "cyan" },
  // Group 6: Research methods - use blue/purple
  "6.1": { label: "6.1 General methods", color: "blue" },
  "6.2": { label: "6.2 Interpretive methods", color: "purple" },
  // Group 7: Source classification - use neutral tones
  "7.1": { label: "7.1 Background/supporting", color: "gray" },
  "7.2": { label: "7.2 Secondary sources", color: "cool-gray" },
  "7.3": { label: "7.3 Primary sources", color: "green" },
};

// Category tag colors (supports both old and new categories)
function categoryTag(category) {
  // Check if it's a new Zotero-based category
  if (category && ZOTERO_CATEGORIES[category]) {
    const cat = ZOTERO_CATEGORIES[category];
    return <Tag type={cat.color}>{cat.label}</Tag>;
  }
  // Legacy categories for backward compatibility
  switch (category) {
    case "Dataset":
      return <Tag type="teal">{category}</Tag>;
    case "Critique":
      return <Tag type="red">{category}</Tag>;
    case "Context":
      return <Tag type="purple">{category}</Tag>;
    default:
      return null;
  }
}

export default function Home() {
  const [data, setData] = useState({ entries: [], grouped: {}, updatedAt: null });
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(null);

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

    return entries;
  }, [data.entries, query, categoryFilter]);

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

  // Build category options with proper display labels
  const categoryOptions = [
    { id: "All", label: "All" },
    ...Object.entries(ZOTERO_CATEGORIES).map(([key, val]) => ({ 
      id: key, 
      label: val.label 
    })),
    // Legacy categories (can be removed after migration)
    { id: "Dataset", label: "Dataset (legacy)" },
    { id: "Critique", label: "Critique (legacy)" }, 
    { id: "Context", label: "Context (legacy)" }
  ];

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
            itemToString={(item) => (item ? item.label : "")}
            selectedItem={categoryOptions.find((c) => c.id === (categoryFilter || "All"))}
            onChange={({ selectedItem }) =>
              setCategoryFilter(selectedItem?.id === "All" ? null : selectedItem?.id)
            }
          />
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
