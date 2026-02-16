#!/usr/bin/env python3
import json
import sys
from pathlib import Path

# --- category mapping ---
CATEGORY_MAP = {
    "Archer1968StructureDesignProcesses": "Dataset",
    "Atkinson2016IntroductionDesignResearch": "Context",
    "Bowker1999SortingThingsOut": "Context",
    "BoydDavis2024DesignInterestingPhenomenon": "Critique",
    "BoydDavis2017DialogueRealworldOperational": "Critique",
    "Cross1993HistoryDesignMethodology": "Dataset",
    "Cross2007FortyYearsDesign": "Context",
    "Dorst2016DesignPracticeDesign": "Critique",
    "Fallan2010DesignHistoryUnderstanding": "Context",
    "Freire2014PedagogyOppressed30th": "Context",
    "Geertz2009InterpretationCulturesSelected": "Context",
    "Gilliland2018ArchivalRecordkeepingResearch": "Dataset",
    "Gooding2022CriticallyAddressableData": "Critique",
    "Horkheimer2002CriticalTheory": "Context",
    "King1994DesigningSocialInquiry": "Context",
    "Latour1987ScienceActionHow": "Context",
    "Williamson2018ResearchConcepts": "Critique",
}

def inject_categories(index_path: Path):
    data = json.loads(index_path.read_text(encoding="utf-8"))

    # Update entries
    for e in data.get("entries", []):
        ck = e.get("citation_key")
        if ck in CATEGORY_MAP:
            e["category"] = CATEGORY_MAP[ck]

    # Update grouped
    for letter, items in data.get("grouped", {}).items():
        for e in items:
            ck = e.get("citation_key")
            if ck in CATEGORY_MAP:
                e["category"] = CATEGORY_MAP[ck]

    # Write back
    index_path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"✅ Categories injected into {index_path}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python scripts/add_categories.py public/docs/index.json")
        sys.exit(1)

    inject_categories(Path(sys.argv[1]))
