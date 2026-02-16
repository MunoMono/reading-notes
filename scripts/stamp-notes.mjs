// scripts/stamp-notes.mjs
import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, "public", "docs");

// Format like: "29 Aug 2025, 07:52" (24h, D Mon YYYY)
function fmtDate(d) {
  const mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][d.getMonth()];
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${dd} ${mon} ${d.getFullYear()}, ${hh}:${mm}`;
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && p.endsWith(".md")) yield p;
  }
}

function updateFrontmatter(raw, stampLine) {
  const fmRe = /^---\s*([\s\S]*?)\s*---\s*\n?/;
  const m = raw.match(fmRe);

  if (m) {
    const fm = m[1];
    let newFm;
    if (/^last_updated\s*:/m.test(fm)) {
      newFm = fm.replace(/^last_updated\s*:.*/m, stampLine);
    } else {
      newFm = fm.trimEnd() + `\n${stampLine}\n`;
    }
    return raw.replace(fmRe, `---\n${newFm}---\n`);
  } else {
    return `---\n${stampLine}\n---\n\n${raw}`;
  }
}

// --------------------
// Lint (page-cite gate)
// --------------------
function lintNote(raw) {
  const issues = [];
  // Ignore the baked-in constraint line so we only catch real TODO placeholders.
  const sanitized = raw
    .replace(/No page cite \u2192 write TODO \(needs page\)/gi, "")
    .replace(/If unsure: TODO \(needs page\)/gi, "");

  // hard fails: placeholder pages + explicit “needs page”
  if (/\bp\.\s*X\b/.test(sanitized)) issues.push(`Found placeholder page ref "p. X"`);
  if (/TODO\s*\(needs page\)/i.test(sanitized)) issues.push(`Found "TODO (needs page)"`);

  // optional: catch any remaining TODOs (comment out if you want TODOs allowed outside evidence)
  // if (/\bTODO\b/.test(raw)) issues.push(`Found "TODO"`);

  // evidence line still using placeholder cite
  // e.g. **Evidence ...** ``[@Citekey, p. X]``
  const evidencePlaceholder = /Evidence\s*\(quote\/paraphrase\s*\+\s*page\):\s*``\[@[^\]]+,\s*p\.\s*X\]``/i;
  if (evidencePlaceholder.test(raw)) issues.push(`Evidence line still has placeholder cite ``[@…, p. X]```);

  return issues;
}

async function stampOne(file, { lint = false } = {}) {
  const stat = await fs.stat(file);
  const stamp = fmtDate(stat.mtime);
  const stampLine = `last_updated: "${stamp}"`;

  const raw = await fs.readFile(file, "utf8");

  // Run lint first so you can fail fast (without rewriting) if desired.
  if (lint) {
    const issues = lintNote(raw);
    if (issues.length) {
      const rel = path.relative(ROOT, file);
      const msg =
        `\n✗ LINT FAIL: ${rel}\n` +
        issues.map((s) => `  - ${s}`).join("\n") +
        `\n`;
      // Throw so the process exits non-zero when linting is enabled.
      throw new Error(msg);
    }
  }

  const updated = updateFrontmatter(raw, stampLine);
  if (updated !== raw) {
    await fs.writeFile(file, updated, "utf8");
    console.log("Stamped:", path.relative(ROOT, file));
    return true;
  }
  return false;
}

(async () => {
  const args = process.argv.slice(2);

  // enable lint with:
  //   node scripts/stamp-notes.mjs --lint <file>
  // or env:
  //   LINT_NOTES=1 node scripts/stamp-notes.mjs <file>
  const lint =
    args.includes("--lint") ||
    /^(1|true|yes)$/i.test(process.env.LINT_NOTES || "");

  const paths = args.filter((a) => a !== "--lint").map((p) => path.resolve(p));
  let changed = 0;

  try {
    if (paths.length) {
      for (const f of paths) {
        try {
          const did = await stampOne(f, { lint });
          if (did) changed++;
        } catch (e) {
          // ignore non-existent files passed by watcher races
          // but DO NOT ignore lint failures
          if (String(e?.message || "").includes("LINT FAIL")) throw e;
        }
      }
    } else {
      for await (const f of walk(DOCS_DIR)) {
        const did = await stampOne(f, { lint });
        if (did) changed++;
      }
    }
  } catch (e) {
    console.error(String(e.message || e));
    process.exit(1);
  }

  console.log(`Stamped ${changed} file(s) using file mtimes.`);
})();
