Navrhujem upraviť favicon tak, aby bol čitateľný aj v malom rozmere v Chrome tabe. Aktuálny súbor `public/favicon.png` je čierne logo na bielom pozadí, ale v tabe je logo príliš jemné/malé, takže používateľsky pôsobí ako biely prázdny štvorček.

Plán:
1. Vytvoriť novú favicon verziu z dodaného čierneho loga s výraznejším výrezom:
   - odstrániť zbytočné biele okraje,
   - ponechať biele pozadie kvôli viditeľnosti v tmavých aj svetlých témach,
   - logo zväčšiť v rámci štvorca, aby bolo viditeľné v 16×16/32×32 pixeloch.
2. Pridať aj samostatný `/favicon.ico`, pretože niektoré prehliadače alebo bookmarky stále automaticky pýtajú práve `/favicon.ico` a môžu ignorovať len PNG link.
3. Upraviť `index.html` tak, aby explicitne odkazoval na obe verzie:
   - `/favicon.ico` pre klasické prehliadače/bookmarky,
   - `/favicon.png` ako PNG fallback,
   - `/apple-touch-icon.png` pre Apple zariadenia.
4. Overiť výsledok vizuálne na výslednom súbore favicon, či už v malom náhľade nepôsobí ako biely prázdny štvorček.

Po schválení to upravím priamo v projekte. Potom bude treba publikovanú verziu aktualizovať cez Publish → Update; favicon sa v prehliadači môže ešte chvíľu cacheovať, takže kontrola je najspoľahlivejšia v anonymnom okne alebo po otvorení `/favicon.ico` a `/favicon.png` priamo.