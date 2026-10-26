# Codenames Koop

Kooperative Codenames-Variante für ein Team am selben Tisch, als statische Seite für GitHub Pages.

- Alle geben dieselbe **Raumnummer** ein. Sie ist der Zufalls-Seed, daher sehen alle Geräte dasselbe Spielfeld, ohne Verbindung untereinander.
- **Thema** wählbar (Klassisch, Tiere, Fantasy, Harry Potter, Essen & Trinken, Weltraum & Sci-Fi, Sport). Raumnummer + Thema ergeben zusammen das Spielfeld, daher müssen alle dasselbe Thema wählen.
- **Geheimdienstchef** sieht die Farben (9 Richtige, 2 Fallen, 14 Falsche), **Ermittler** nicht.
- Aufgedeckt wird per Doppeltipp (auswählen, nochmal tippen). Jedes Gerät führt seinen Spielstand lokal; abgeglichen wird mündlich.
- „Nächstes Spiel“ wechselt zur nächsten Raumnummer.

Lokal starten: `python3 -m http.server` und http://localhost:8000 öffnen.

Neues Thema: in `words.js` einen Eintrag zu `THEMES` hinzufügen (mindestens 25 Begriffe, besser 100+).

Hinweis: Die Wortlisten (`words.js`) und `SEED_VERSION` (`game.js`) bestimmen das Spielfeld. Änderungen daran erzeugen für alle Raumnummern neue Felder.
