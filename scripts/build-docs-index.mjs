// Build a docs index from frontmatter in public/docs/**/*.md
// Run: npm run build:docs-index
import { promises as fs } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, "public", "docs");
const OUT_FILE = path.join(DOCS_DIR, "index.json");

async function walk(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((d) => {
      const res = path.resolve(dir, d.name);
      return d.isDirectory() ? walk(res) : res;
    })
  );
  return files.flat();
}

function extractFrontmatter(md) {
  const m = md.match(/^---\s*([\s\S]*?)\s*---/);
  if (!m) return {};
  const yaml = m[1];
  // very light YAML parser (enough for simple key: value pairs)
  const out = {};
  yaml.split(/\r?\n/).forEach((line) => {
    const mm = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!mm) return;
    const key = mm[1].trim();
    let val = mm[2].trim();
    // strip surrounding quotes if present
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  });
  return out;
}

function toSlug(filename) {
  return filename.replace(/\.md$/i, "");
}

function letterFromPath(absPath) {
  const parts = absPath.split(path.sep);
  const idx = parts.lastIndexOf("docs");
  // expect .../public/docs/<Letter>/<file>
  return idx >= 0 && parts[idx + 1] ? parts[idx + 1] : "";
}

(async () => {
  try {
    const all = await walk(DOCS_DIR);
    const mdFiles = all.filter((p) => p.toLowerCase().endsWith(".md"));
    const entries = [];
    for (const f of mdFiles) {
      const raw = await fs.readFile(f, "utf8");
      const fm = extractFrontmatter(raw);
      const letter = letterFromPath(f);
      const slug = toSlug(path.basename(f));
      entries.push({
        letter,
        slug,
        path: `/docs/${letter}/${slug}.md`,
        title: fm.title || slug,
        authors: fm.authors || "",
        year: fm.year || "",
        venue: fm.journal || fm.booktitle || "",
        doi: fm.doi || "",
        url: fm.url || ""
      });
    }
    // sort by author then year desc, fall back to title
    entries.sort((a, b) => {
      const an = a.authors.toLowerCase();
      const bn = b.authors.toLowerCase();
      if (an !== bn) return an < bn ? -1 : 1;
      return (b.year || "").localeCompare(a.year || "");
    });

    // group by letter for quick rendering
    const grouped = entries.reduce((acc, e) => {
      acc[e.letter] ||= [];
      acc[e.letter].push(e);
      return acc;
    }, {});

    await fs.writeFile(OUT_FILE, JSON.stringify({ updatedAt: new Date().toISOString(), entries, grouped }, null, 2));
    console.log(`Wrote ${OUT_FILE} with ${entries.length} entries.`);
  } catch (err) {
    console.error("Failed to build docs index:", err);
    process.exit(1);
  }
})();