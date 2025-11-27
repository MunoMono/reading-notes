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

// Category tag colors
function categoryTag(category) {
  if (!category) return null;
  
  // Color mapping based on category prefix
  let type = "gray";
  if (category.startsWith("1.1")) type = "blue";
  else if (category.startsWith("1.2")) type = "cyan";
  else if (category.startsWith("2.1")) type = "teal";
  else if (category.startsWith("2.2")) type = "green";
  else if (category.startsWith("3.1")) type = "magenta";
  else if (category.startsWith("3.2")) type = "purple";
  else if (category.startsWith("3.3")) type = "red";
  else if (category.startsWith("4.1")) type = "cool-gray";
  else if (category.startsWith("4.2")) type = "warm-gray";
  else if (category.startsWith("4.3")) type = "high-contrast";
  else if (category.startsWith("5.1")) type = "blue";
  else if (category.startsWith("5.2")) type = "cyan";
  else if (category.startsWith("6.1")) type = "teal";
  else if (category.startsWith("6.2")) type = "green";
  else if (category.startsWith("7.1")) type = "magenta";
  else if (category.startsWith("7.2")) type = "purple";
  else if (category.startsWith("7.3")) type = "red";
  
  return <Tag type={type}>{category}</Tag>;
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
