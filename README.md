# Codenames Koop

Kooperative Codenames-Variante für ein Team am selben Tisch, als statische Seite für GitHub Pages.

- Alle geben dieselbe **Raumnummer** ein. Sie ist der Zufalls-Seed, daher sehen alle Geräte dasselbe Spielfeld, ohne Verbindung untereinander.
- **Geheimdienstchef** sieht die Farben (9 Agenten, 2 Attentäter, 14 Passanten), **Ermittler** nicht.
- Aufgedeckt wird per Doppeltipp (auswählen, nochmal tippen). Jedes Gerät führt seinen Spielstand lokal; abgeglichen wird mündlich.
- „Nächstes Spiel“ wechselt zur nächsten Raumnummer.

Lokal starten: `python3 -m http.server` und http://localhost:8000 öffnen.

Hinweis: Die Wortliste (`words.js`) und `SEED_VERSION` (`game.js`) bestimmen das Spielfeld. Änderungen daran erzeugen für alle Raumnummern neue Felder.
