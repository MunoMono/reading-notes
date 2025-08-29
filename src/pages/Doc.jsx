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
  if (title) {
    const re = new RegExp(`^\\s*#\\s+${escapeRegExp(title)}\\s*\\n+`, "i");
    if (re.test(s)) return s.replace(re, "");
  }
  return s.replace(/^\s*#\s+.+\n+/, "");
}

export default function Doc() {
  const { letter, slug } = useParams();
  const [md, setMd] = useState("# Loading…");
  const [meta, setMeta] = useState(null);

  // Works under /reading-notes/ in both dev & prod
  const base = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    let titleFromMeta = "";

    // 1) Load meta first (for breadcrumbs + title matching)
    fetch(`${base}docs/index.json`, { cache: "no-cache" })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`index ${r.status}`))))
      .then((idx) => idx?.entries?.find((e) => e.letter === letter && e.slug === slug))
      .then((m) => {
        setMeta(m || null);
        titleFromMeta = m?.title || "";
        // 2) Fetch the raw markdown; guard against GH Pages 404 HTML
        return fetch(`${base}docs/${letter}/${slug}.md`, { cache: "no-cache" });
      })
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(`md ${r.status}`))))
      .then((raw) => {
        const withoutFM = stripFrontmatter(raw);
        const cleaned = stripLeadingH1(withoutFM, titleFromMeta);
        setMd(cleaned || "# Not found");
      })
      .catch((err) => {
        console.error("Doc load failed:", err);
        setMd("# Not found");
      });
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
          {(meta?.authors || meta?.year || meta?.venue || meta?.doi) && (
            <p className="doc-meta">
              {meta?.authors}
              {meta?.year ? ` (${meta.year})` : ""}
              {meta?.venue ? ` — ${meta.venue}` : ""}
              {meta?.doi ? ` · DOI: ${meta.doi}` : ""}
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