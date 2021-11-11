# [Node.js és Express.js tutorial](https://www.youtube.com/watch?v=Oe421EPjeBE&ab_channel=freeCodeCamp.org)

## Jegyzetek

- A [`http` modul fájlban](./12-http-module.js) az anyag szerint nem szükséges a *response*-t `if-else` struktúrába tenni a `createServer` metódusban, de anélkül hibaüzenet jön.

- `npm` parancsok

    - `npm --version` vagy `npm --v`: verziószám
    - `npm i <package név>`: csomag telepítése lokálisan (csak az aktuális projekt használhatja)
    - `npm i -g <package név>`: csomag telepítése globális (minden projekt használhatja) 
    - `npm install`: A `.gitignore` fájlnak tartalmaznia kell a `node_modules` mappát, így a `git` repo szinkronizálásakor nem töltjük fel a telepített függőségeket. Ha pedig egy friss projektet szeretnénk úgy, hogy klónozzuk a repót, akkor ezzel a paranccsal telepítünk minden függőséget, ami a `package.json`-ban listázva van.
    
- `package.json`: Manifest fájl, a projekttel és a használt csomagokkal kapcsolatos fontos infókat tartalmazza.
- Manuálisan is létrehozható a projekt root-ban.
    
- `npm init`: automatikus létrehozás
    
- `npm init -y`: automatikus létrehozás, minden beállítás default értéken marad
    
- A `description` default értéke a `README.md` első paragrafusa lesz default, ha kapcsolódunk `git` repóhoz.