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

// Themenlisten sind kommagetrennt, damit Begriffe auch Leerzeichen enthalten dürfen.
// Auch hier gilt: Reihenfolge nicht ändern.
const list = (text) => text.split(/[,\n]/).map((w) => w.trim()).filter(Boolean);

const THEMES = {
  klassisch: { name: 'Klassisch', words: WORDS },

  tiere: { name: 'Tiere', words: list(`
    Hund, Katze, Maus, Pferd, Kuh, Schwein, Schaf, Ziege, Huhn, Hahn,
    Ente, Gans, Truthahn, Esel, Kaninchen, Hamster, Meerschweinchen, Papagei, Wellensittich, Goldfisch,
    Löwe, Tiger, Leopard, Gepard, Jaguar, Panther, Luchs, Wolf, Fuchs, Bär,
    Eisbär, Panda, Koala, Känguru, Zebra, Giraffe, Elefant, Nashorn, Nilpferd, Kamel,
    Lama, Alpaka, Gorilla, Schimpanse, Orang-Utan, Faultier, Gürteltier, Ameisenbär, Igel, Maulwurf,
    Eichhörnchen, Biber, Otter, Dachs, Waschbär, Stinktier, Fledermaus, Hirsch, Reh, Elch,
    Rentier, Wildschwein, Steinbock, Murmeltier, Adler, Falke, Eule, Rabe, Taube, Spatz,
    Specht, Storch, Flamingo, Pinguin, Strauß, Pfau, Kolibri, Möwe, Pelikan, Schwan,
    Hai, Wal, Delfin, Robbe, Walross, Krake, Qualle, Seestern, Seepferdchen, Hummer,
    Krabbe, Muschel, Schnecke, Frosch, Kröte, Salamander, Schildkröte, Krokodil, Schlange, Chamäleon,
    Biene, Wespe, Hummel, Ameise, Spinne, Marienkäfer, Schmetterling, Raupe, Libelle, Mücke,
    Fliege, Heuschrecke, Skorpion, Regenwurm, Tintenfisch, Kuckuck, Hyäne, Erdmännchen, Lemur, Yak
  `) },

  fantasy: { name: 'Fantasy', words: list(`
    Drache, Elf, Zwerg, Ork, Troll, Riese, Zauberer, Hexe, Ritter, Prinzessin,
    König, Königin, Burg, Turm, Verlies, Schatz, Krone, Thron, Schwert, Schild,
    Bogen, Axt, Lanze, Rüstung, Helm, Zauberstab, Amulett, Ring, Kristall, Rune,
    Schriftrolle, Zauberbuch, Trank, Kessel, Elixier, Fluch, Prophezeiung, Orakel, Einhorn, Phönix,
    Greif, Pegasus, Basilisk, Hydra, Chimäre, Kobold, Gnom, Fee, Nymphe, Zentaur,
    Minotaurus, Zyklop, Golem, Gargoyle, Vampir, Werwolf, Geist, Skelett, Zombie, Nekromant,
    Dämon, Engel, Wald, Sumpf, Höhle, Gebirge, Vulkan, Portal, Brücke, Taverne,
    Barde, Dieb, Assassine, Paladin, Druide, Schamane, Mönch, Söldner, Held, Abenteuer,
    Landkarte, Drachenei, Hort, Seeschlange, Krake, Nebel, Mond, Pfeil, Banner, Festung,
    Mauer, Kerker, Galgen, Dolch, Kelch, Spiegel, Labyrinth, Hexenkessel, Wolfsrudel, Sirene,
    Meerjungfrau, Zauberspruch, Mantel, Fackel, Laterne, Pferd, Lindwurm, Irrlicht, Wichtel, Kristallkugel
  `) },

  harrypotter: { name: 'Harry Potter', words: list(`
    Hogwarts, Gryffindor, Slytherin, Hufflepuff, Ravenclaw, Zauberstab, Quidditch, Schnatz, Quaffel, Klatscher,
    Sucher, Hüter, Besen, Nimbus, Muggel, Dementor, Horkrux, Hauself, Patronus, Animagus,
    Irrwicht, Werwolf, Riese, Troll, Drache, Phönix, Basilisk, Zentaur, Kobold, Hippogreif,
    Harry, Hermine, Ron, Ginny, Neville, Luna, Draco, Dumbledore, Snape, Voldemort,
    Hagrid, McGonagall, Sirius, Lupin, Tonks, Moody, Bellatrix, Lucius, Umbridge, Lockhart,
    Quirrell, Trelawney, Slughorn, Filch, Peeves, Dobby, Kreacher, Hedwig, Krätze, Krummbein,
    Fawkes, Seidenschnabel, Fluffy, Aragog, Norbert, Gringotts, Askaban, Hogsmeade, Winkelgasse, Nokturngasse,
    Fuchsbau, Ligusterweg, Gleis, Butterbier, Schokofrosch, Heuler, Tarnumhang, Denkarium, Vielsafttrank, Zeitumkehrer,
    Feuerkelch, Stein der Weisen, Sprechender Hut, Karte des Rumtreibers, Heiligtümer, Galleone, Narbe, Brille, Blitz, Eule,
    Kessel, Zaubertränke, Verwandlung, Kräuterkunde, Wahrsagen, Alraune, Peitschende Weide, Verbotener Wald, Kammer, Ministerium,
    Auror, Todesser, Phönixorden, Tagesprophet, Klitterer, Spiegel, Expelliarmus, Lumos, Accio, Avada Kedavra,
    Duell, Hauspokal, Großer Saal, Bibliothek, Turnier, Weihnachtsball, Weasley, Malfoy, Potter, Ollivander
  `) },

  essen: { name: 'Essen & Trinken', words: list(`
    Apfel, Banane, Birne, Kirsche, Erdbeere, Himbeere, Traube, Zitrone, Orange, Ananas,
    Mango, Melone, Kiwi, Pflaume, Pfirsich, Kokosnuss, Tomate, Gurke, Karotte, Kartoffel,
    Zwiebel, Knoblauch, Paprika, Brokkoli, Spinat, Salat, Kürbis, Pilz, Mais, Erbse,
    Bohne, Linse, Reis, Nudel, Brot, Brötchen, Brezel, Croissant, Toast, Butter,
    Käse, Quark, Joghurt, Milch, Sahne, Ei, Honig, Marmelade, Zucker, Salz,
    Pfeffer, Senf, Ketchup, Essig, Öl, Suppe, Eintopf, Pizza, Lasagne, Burger,
    Pommes, Döner, Bratwurst, Schnitzel, Frikadelle, Steak, Schinken, Speck, Salami, Hähnchen,
    Lachs, Thunfisch, Sushi, Taco, Curry, Kuchen, Torte, Keks, Muffin, Waffel,
    Pfannkuchen, Eis, Pudding, Schokolade, Bonbon, Gummibär, Popcorn, Chips, Nuss, Mandel,
    Kaffee, Tee, Kakao, Saft, Limonade, Wasser, Bier, Wein, Sekt, Cocktail,
    Gabel, Messer, Löffel, Teller, Tasse, Pfanne, Topf, Ofen, Grill, Picknick
  `) },

  weltraum: { name: 'Weltraum & Sci-Fi', words: list(`
    Sonne, Mond, Erde, Mars, Venus, Merkur, Jupiter, Saturn, Uranus, Neptun,
    Pluto, Komet, Asteroid, Meteor, Galaxie, Nebel, Stern, Supernova, Schwarzes Loch, Milchstraße,
    Umlaufbahn, Rakete, Raumschiff, Raumstation, Satellit, Teleskop, Astronaut, Alien, Ufo, Roboter,
    Android, Cyborg, Laser, Lichtschwert, Plasma, Hyperraum, Wurmloch, Zeitreise, Klon, Teleporter,
    Kapsel, Raumanzug, Schwerelosigkeit, Krater, Mondlandung, Countdown, Funkspruch, Signal, Antenne, Radar,
    Sonde, Rover, Kolonie, Planet, Exoplanet, Sonnenwind, Polarlicht, Finsternis, Schwerkraft, Atom,
    Reaktor, Energie, Schutzschild, Hologramm, Drohne, Computer, Code, Virus, Mutant, Invasion,
    Imperium, Rebellen, Kommandant, Brücke, Cockpit, Treibstoff, Triebwerk, Antimaterie, Quasar, Pulsar,
    Sternbild, Orion, Urknall, Lichtjahr, Kosmos, Strahlung, Schleuse, Kälteschlaf, Außerirdisch, Mission,
    Bodenstation, Startrampe, Meteorit, Sternschnuppe, Ringe, Mondbasis, Gravitation, Raumpatrouille, Flotte, Kristall
  `) },

  sport: { name: 'Sport', words: list(`
    Fußball, Tor, Ball, Elfmeter, Abseits, Schiedsrichter, Trainer, Stadion, Pokal, Medaille,
    Olympia, Marathon, Sprint, Staffel, Hürde, Hochsprung, Weitsprung, Speer, Diskus, Kugel,
    Tennis, Schläger, Netz, Volleyball, Basketball, Korb, Handball, Hockey, Eishockey, Puck,
    Golf, Boxen, Ring, Judo, Karate, Ringen, Fechten, Schwimmen, Becken, Tauchen,
    Surfen, Segeln, Rudern, Kanu, Radrennen, Helm, Ski, Snowboard, Schlitten, Bob,
    Biathlon, Eiskunstlauf, Klettern, Seil, Turnen, Barren, Reck, Trampolin, Yoga, Tischtennis,
    Badminton, Darts, Billard, Bowling, Schach, Reiten, Hindernis, Rennwagen, Boxenstopp, Zielflagge,
    Trikot, Fan, Tribüne, Halbzeit, Verlängerung, Rekord, Doping, Kapitän, Mannschaft, Weltmeister,
    Pfiff, Rote Karte, Ecke, Freistoß, Torwart, Stürmer, Verteidiger, Bank, Stoppuhr, Startschuss,
    Ziel, Podest, Turnschuh, Hantel, Fitness, Joggen, Skateboard, Inliner, Rasen, Umkleide
  `) },
};

if (typeof module !== 'undefined') module.exports = { WORDS, THEMES };
