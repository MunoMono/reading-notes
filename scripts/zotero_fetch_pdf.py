#!/usr/bin/env python3
import json, os, pathlib, urllib.request, urllib.error

uid=os.environ["ZOTERO_USER_ID"].strip()
key=os.environ["ZOTERO_API_KEY"].strip()
item=os.environ["ZOTERO_ITEM_KEY"].strip()
out=pathlib.Path("tmp/zotero-source")
out.mkdir(parents=True, exist_ok=True)

def get_json(url):
    req=urllib.request.Request(url,headers={"Zotero-API-Key":key,"Zotero-API-Version":"3","Accept":"application/json","User-Agent":"reading-notes-zotero-source-fetch/1.0"})
    with urllib.request.urlopen(req,timeout=60) as r:
        return json.loads(r.read().decode("utf-8"))

children=get_json(f"https://api.zotero.org/users/{uid}/items/{item}/children?limit=100")
pdfs=[]
for row in children:
    d=row.get("data",{})
    if d.get("itemType")=="attachment" and d.get("contentType")=="application/pdf":
        pdfs.append(d)
if not pdfs:
    raise SystemExit("No PDF attachment found for Zotero item "+item)
# Prefer stored/imported attachment; otherwise first PDF.
pdfs.sort(key=lambda d:(0 if d.get("linkMode") in ("imported_file","imported_url") else 1,d.get("title","")))
att=pdfs[0]
att_key=att["key"]
meta={"parent_item_key":item,"attachment_key":att_key,"title":att.get("title"),"filename":att.get("filename"),"linkMode":att.get("linkMode"),"contentType":att.get("contentType")}
(out/"metadata.json").write_text(json.dumps(meta,indent=2),encoding="utf-8")
req=urllib.request.Request(f"https://api.zotero.org/users/{uid}/items/{att_key}/file",headers={"Zotero-API-Key":key,"Zotero-API-Version":"3","User-Agent":"reading-notes-zotero-source-fetch/1.0"})
with urllib.request.urlopen(req,timeout=120) as r:
    data=r.read()
(out/"source.pdf").write_bytes(data)
print(f"Fetched Zotero PDF attachment {att_key}; {len(data)} bytes.")
