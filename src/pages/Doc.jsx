import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Grid, Column, Breadcrumb, BreadcrumbItem } from "@carbon/react";

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function stripFrontmatter(s) {
  return s.replace(/^---[\s\S]*?---\s*/, "");
}
function stripLeadingH1(s, title) {
  if (!s) return s;
  // If we know the title, remove an exact-matching top-level H1
  if (title) {
    const re = new RegExp(`^\\s*#\\s+${escapeRegExp(title)}\\s*\\n+`, "i");
    if (re.test(s)) return s.replace(re, "");
  }
  // Otherwise, conservatively remove just the very first H1 if present
  return s.replace(/^\s*#\s+.+\n+/, "");
}

export default function Doc() {
  const { letter, slug } = useParams();
  const [md, setMd] = useState("# Loading…");
  const [meta, setMeta] = useState(null);

  // Use Vite base so it works under /reading-notes in dev & prod
  const base = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    // Load meta first so we can match/remove duplicate H1 accurately
    fetch(`${base}docs/index.json`)
      .then((r) => r.json())
      .then((idx) => idx.entries.find((e) => e.letter === letter && e.slug === slug))
      .then((m) => {
        setMeta(m || null);
        return fetch(`${base}docs/${letter}/${slug}.md`);
      })
      .then((r) => r.text())
      .then((raw) => {
        const withoutFM = stripFrontmatter(raw);
        const cleaned = stripLeadingH1(withoutFM, meta?.title);
        setMd(cleaned);
      })
      .catch(() => setMd("# Not found"));
  }, [letter, slug, base]);

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
          {meta?.authors || meta?.year ? (
            <p className="doc-meta">
              {meta?.authors}
              {meta?.year ? ` (${meta.year})` : ""}
              {meta?.venue ? ` — ${meta.venue}` : ""}
              {meta?.doi ? ` · DOI: ${meta.doi}` : ""}
            </p>
          ) : null}
          <hr className="doc-separator" />
        </div>

        <div className="carbon-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
        </div>
      </Column>
    </Grid>
  );
}