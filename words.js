// Deutsche Begriffe für das Spielfeld. Reihenfolge nicht ändern, sonst
// ergeben bestehende Raumnummern ein anderes Spielfeld.
const WORDS = `
Adler Affe Agent Alpen Ampel Anker Antenne Apfel Arm Arzt
Atlas Auge Auto Bach Bad Ball Bank Bar Bär Bart
Batterie Bauer Baum Becken Berg Besen Bett Biene Bier Bild
Bindung Birne Blatt Blitz Block Blume Bock Boden Bogen Bohne
Bombe Boot Börse Botschaft Brand Brille Brief Brücke Bruder Brunnen
Buch Burg Bus Butter Chip Club Dach Daumen Decke Diamant
Dieb Dino Drache Delfin Dreieck Drossel Dschungel Dusche Echo Ei
Eis Elefant Engel Ente Erde Eule Fächer Fackel Fallschirm Faden
Fahne Falke Falle Fass Feder Fee Feld Fenster Feuer Film
Finger Fisch Flasche Fleck Fliege Flöte Flügel Flugzeug Fluss Föhn
Forelle Frosch Fuchs Funke Fuß Gabel Gang Gans Garten Geist
Geld Gericht Geschenk Gesicht Gift Gipfel Gitarre Glas Glocke Glück
Gold Golf Gras Grab Grippe Gürtel Hahn Hai Hals Hammer
Hand Harfe Hase Haus Haut Heft Held Helm Hemd Herz
Hexe Himmel Hirsch Hof Höhle Holz Honig Horn Hose Hotel
Hund Hut Igel Insel Jacke Jäger Joker Kaffee Kamera Kamm
Kanal Kanone Kapitän Karte Kartoffel Käse Kasse Katze Kegel Keller
Kerze Kette Kiefer Kino Kirche Kiste Kiwi Klavier Klee Knopf
Koch Koffer Komet Kompass König Kopf Korb Krabbe Kraft Kran
Kranz Krawatte Krebs Kreuz Krieg Krone Kröte Kuchen Kugel Kuh
Kunst Kurs Laden Lager Lampe Land Laser Laster Laub Laus
Leben Leder Lehrer Leiter Licht Liebe Linie Linse Löffel Löwe
Luft Mantel Mark Maske Mast Matte Maus Meer Messer Metall
Milch Mine Mond Motor Möwe Mücke Mühle Mumie Mund Muschel
Musik Mutter Nacht Nadel Nagel Nase Nebel Nest Netz Note
Nuss Oase Ofen Ohr Oktopus Oper Orange Orgel Pass Pfanne
Pfeffer Pfeife Pfeil Pferd Pflaster Pilot Pilz Pinguin Pirat Pizza
Planet Platte Polizei Post Prinz Puppe Pyramide Quelle Rad Radar
Rakete Rasen Raupe Regen Reich Reifen Riese Ring Ritter Rock
Roboter Rolle Rose Rücken Ruder Sack Salz Sand Satellit Schach
Schal Schalter Schatten Schatz Schaum Schere Schiff Schild Schirm Schlange
Schloss Schlüssel Schnabel Schnee Schraube Schuh Schule Schwan Schwein See
Segel Seife Seil Sekt Sessel Sirene Ski Socke Sonne Spiegel
Spinne Spion Spitze Sprung Stab Stadt Stall Stamm Stern Stiefel
Stift Stock Strand Strauß Strom Stuhl Sturm Tafel Tag Tank
Tanne Tasche Taube Taucher Tee Teller Tempel Theater Tiger Tisch
Tor Torte Turm Uhr Ufer Ungeheuer Vampir Vase Vogel Vulkan
Waage Wache Wal Wald Wand Wanne Wasser Welle Welt Wespe
Wetter Wind Wolke Wolf Wurm Wurst Wüste Zahn Zange Zaun
Zebra Zelt Zeitung Zelle Ziege Ziel Zirkus Zitrone Zucker Zug
Zunge Zwerg Zwiebel Zylinder Akte Altar Anzug Apotheke Arena Asche
Atom Ast Bahn Ballon Bambus Band Bühne Beere Bein Benzin
`.trim().split(/\s+/);

if (typeof module !== 'undefined') module.exports = WORDS;
