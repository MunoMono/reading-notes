// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Column, Tag } from "@carbon/react";
import SearchBox from "../components/SearchBox";

export default function Home() {
  const [data, setData] = useState({ entries: [], grouped: {}, updatedAt: null });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    fetch(`${base}docs/index.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => setData(json))
      .catch((e) => console.error("Failed to load /docs/index.json", e));
  }, []);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  // filter entries by query (use displayTitle + fields)
  const filteredEntries = useMemo(() => {
    if (!query.trim()) return data.entries || [];
    const q = query.toLowerCase();
    return (data.entries || []).filter((e) =>
      [e.displayTitle, e.title, e.authors, e.journal, e.year, e.doi, e.citation_key]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [data.entries, query]);

  // regroup after filtering
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

  return (
    <Grid className="cds--grid cds--grid--narrow">
      <Column lg={12} md={8} sm={4}>
        <h2>Reading Notes</h2>
        <p className="cds--type-helper-text">
          {total} entries · from <code>public/docs</code>
          {lastUpdated ? <> · updated {lastUpdated}</> : null}
        </p>

        <SearchBox query={query} setQuery={setQuery} />

        <div className="pill-row" style={{ marginTop: "0.5rem" }}>
          {letters.map((L) => (
            <a className="pill" key={L} href={`#${L}`}>
              {L} <Tag type="gray">{(filteredGrouped[L] || []).length}</Tag>
            </a>
          ))}
        </div>

        {letters.map((L) => {
          const items = filteredGrouped[L] || [];
          if (!items.length) return null;
          return (
            <section key={L} id={L} style={{ marginTop: "1rem" }}>
              <h3>{L}</h3>
              <ul className="entry-list">
                {items.map((e) => (
                  <li key={`${e.letter}/${e.slug}`}>
                    <Link to={`/docs/${e.letter}/${e.slug}`}>
                      {e.authors && <strong>{e.authors}</strong>}
                      {e.year ? ` (${e.year})` : ""}
                      {e.title ? `. ${e.title}` : ""}
                      {e.journal ? <> — <em>{e.journal}</em></> : null}
                    </Link>
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