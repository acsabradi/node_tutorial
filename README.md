# [Node.js és Express.js tutorial](https://www.youtube.com/watch?v=Oe421EPjeBE&ab_channel=freeCodeCamp.org)

## Jegyzetek

- A [`http` modul fájlban](./xx-http-module.js) az anyag szerint nem szükséges a *response*-t `if-else` struktúrába tenni a `createServer` metódusban, de anélkül hibaüzenet jön.

- `npm` parancsok

    - `npm --version` vagy `npm --v`: verziószám

    - `npm i <package név>`: csomag telepítése lokálisan (csak az aktuális projekt használhatja)

    - `npm i -g <package név>`: csomag telepítése globális (minden projekt használhatja) 

- `package.json`: Manifest fájl, a projekttel és a használt csomagokkal kapcsolatos fontos infókat tartalmazza.

    - Manuálisan is létrehozható a projekt root-ban.

    - `npm init`: automatikus létrehozás

    - `npm init -y`: automatikus létrehozás, minden beállítás default értéken marad

    - A `description` default értéke a `README.md` első paragrafusa lesz default, ha kapcsolódunk `git` repóhoz.