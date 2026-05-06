Našiel som príčinu: v `index.html` sú momentálne dve favicon definície. Prvá ukazuje na `/favicon.png`, ale nižšie zostal ešte starý riadok:

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
```

Prehliadač si často vyberie poslednú definíciu alebo fallback `/favicon.ico`. Keďže `favicon.ico` už v projekte nie je, hosting/browser môže zobrazovať default Lovable favicon.

Plán opravy:

1. Odstránim duplicitný starý riadok s `/favicon.ico` z `index.html`.
2. Nechám iba Mollvero favicon PNG:
   ```html
   <link rel="icon" href="/favicon.png" type="image/png" />
   ```
3. Doplním aj `apple-touch-icon`, aby sa správne zobrazovala ikona pri bookmarkoch / pridávaní na mobil:
   ```html
   <link rel="apple-touch-icon" href="/favicon.png" />
   ```
4. Skontrolujem, že v `public/` ostáva iba správny `favicon.png` a už sa nikde nereferencuje `/favicon.ico`.

Po schválení to upravím priamo v kóde. Potom bude treba publikovanú verziu znova aktualizovať, pretože ide o frontend zmenu.