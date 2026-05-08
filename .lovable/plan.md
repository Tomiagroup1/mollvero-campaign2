## Problém

Edge na desktope už zobrazuje nový favicon, ale Safari a Chrome na desktope stále ukazujú staré Lovable logo. Mobil je v poriadku.

**Príčina:** Desktopové prehliadače (hlavne Safari a Chrome) si automaticky pýtajú súbor `/favicon.ico` z root cesty — aj keď v HTML naň nie je odkaz. Tento súbor sme v predchádzajúcom kroku zmazali, takže prehliadač dostane 404 a použije svoju starú **cache verziu** Lovable favicony, ktorú má uloženú niekedy aj mesiace. Verzionovanie cez `?v=2` na PNG súbore tomuto nezabráni, pretože sa týka iného súboru.

Mobilné prehliadače sa správajú inak — riadia sa `apple-touch-icon` linkom v HTML, preto tam nový logo funguje.

## Riešenie

1. **Znovu vygenerovať `public/favicon.ico`** z aktuálneho čierneho Mollvero stromu (multi-resolution: 16, 32, 48 px), aby požiadavka prehliadača na `/favicon.ico` vrátila nový logo namiesto 404.
2. **Pridať explicitný link v `index.html`:**
   ```html
   <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
   ```
   Query string `?v=3` prinúti Safari a Chrome stiahnuť novú verziu namiesto použitia cache.
3. **Posunúť verziu aj na PNG linkoch** na `?v=3` pre konzistenciu.

## Po nasadení

Klikni **Publish → Update**. Potom v Safari/Chrome:
- Buď počkaj pár minút a daj **Cmd+Shift+R** (hard refresh).
- Alebo otvor stránku v **inkognito okne**, kde nie je cache — tam uvidíš novú ikonku okamžite.

V už otvorenej karte sa favicon často nezmení, kým kartu nezatvoríš a neotvoríš znova (Safari je obzvlášť tvrdohlavé).

## Technické detaily

- Vstup: `public/favicon-mollvero-v2.png` (256×256 čierny strom).
- Nástroj: ImageMagick — `convert favicon-mollvero-v2.png -define icon:auto-resize=48,32,16 favicon.ico`.
- Zmeny súborov: vytvorí sa `public/favicon.ico`, upraví sa `index.html` (3 riadky `<link>`).