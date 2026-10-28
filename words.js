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
Bremse Brett Bulle Büro Chor Code Dampf Degen Diener Domino Donner Draht Drucker Düne Eimer
Eisen Erbe Essig Farbe Feige Fels Ferien Festung Feuerwehr Figur Filter Flamme Flocke Flut Form
Frack Frost Garage Gast Gebirge Geier Geige Gelee Gips Gitter Gletscher Gnom Gorilla Graf Grill
Gruft Gummi Gurke Hafen Haken Halle Harz Heizung Henne Herd Hering Hirn Hobel Hummer Hupe
Hütte Hydrant Jet Kabel Kaktus Kamel Kammer Kanu Kapelle Karotte Karussell Kater Keks Kerker Kittel
Klinge Knochen Knoten Kobold Kolben Konzert Kopie Koralle Korken Kralle Kreide Krokodil Krug Küche Kuppel
Kutsche Labor Lack Lanze Laterne Lava Lawine Leim Lift Lineal Locke Lotto Lunge Magnet Mais
Mammut Marmor Matrose Medaille Melone Mikrofon Minze Mixer Modell Moor Mörser Mosaik Münze Museum Nashorn
Nudel Ochse Öl Orden Palme Panzer Papier Park Pech Pedal Perle Pinsel Plakat Pokal Pol
Pony Presse Pudel Puls Pulver Punkt Quark Rabe Rahmen Rätsel Raum Riegel Rinde Rost Rubin
Rüssel Saft Säge Sattel Säule Schachtel Schale Schaukel Scheibe Schlitten Schmied Schnecke Schrank Schwamm Schwert
Sense Sieb Silber Sofa Spaten Speer Spritze Stachel Stempel Stecker Steuer Stier Strumpf Sumpf Takt
Tanz Tastatur Teppich Thron Tinte Toaster Trommel Trompete Tuba Tunnel Uniform Ventil Vorhang Waffel Wagen
Walze Wappen Weste Wiege Wippe Wurzel Würfel Zauberer Zepter Ziegel Zinn Zopf Zentrale Wecker Kaiser
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
    Fliege, Heuschrecke, Skorpion, Regenwurm, Tintenfisch, Kuckuck, Hyäne, Erdmännchen, Lemur, Yak,
    Pudel, Dackel, Mops, Kater, Fohlen, Kalb, Ferkel, Lamm, Küken, Bulle,
    Ochse, Stier, Pony, Maultier, Büffel, Bison, Antilope, Gazelle, Gnu, Okapi,
    Tapir, Warzenschwein, Mungo, Wiesel, Marder, Iltis, Hermelin, Nerz, Siebenschläfer, Hase,
    Ratte, Wühlmaus, Chinchilla, Stachelschwein, Pavian, Mandrill, Gibbon, Puma, Ozelot, Schneeleopard,
    Wildkatze, Kojote, Schakal, Polarfuchs, Dingo, Wombat, Schnabeltier, Ameisenigel, Opossum, Kakadu,
    Uhu, Geier, Kondor, Bussard, Habicht, Kranich, Reiher, Ibis, Tukan, Albatros,
    Kormoran, Fasan, Wachtel, Amsel, Meise, Fink, Rotkehlchen, Nachtigall, Lerche, Schwalbe,
    Elster, Krähe, Star, Emu, Kiwi, Seelöwe, Seekuh, Narwal, Orca, Pottwal,
    Rochen, Aal, Hecht, Karpfen, Forelle, Barsch, Hering, Sardine, Kugelfisch, Clownfisch,
    Piranha, Schwertfisch, Seeigel, Koralle, Garnele, Languste, Nacktschnecke, Blutegel, Tausendfüßler, Assel,
    Zecke, Floh, Laus, Motte, Glühwürmchen, Käfer, Hirschkäfer, Grille, Gottesanbeterin, Termite,
    Hornisse, Leguan, Gecko, Waran, Alligator, Kobra, Python, Klapperschlange, Viper, Blindschleiche,
    Eidechse, Molch, Axolotl, Kaulquappe, Pfeilgiftfrosch, Ziesel, Hyänenhund, Elefantenrobbe, Pinscher, Dalmatiner
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
    Meerjungfrau, Zauberspruch, Mantel, Fackel, Laterne, Pferd, Lindwurm, Irrlicht, Wichtel, Kristallkugel,
    Magier, Hexenmeister, Zauberin, Lich, Banshee, Ghul, Harpyie, Mantikor, Leviathan, Sphinx,
    Medusa, Titan, Baumhirte, Dryade, Wyvern, Feuerdrache, Eisdrache, Drachenreiter, Drachentöter, Halbling,
    Goblin, Oger, Poltergeist, Gespenst, Mumie, Seher, Alchemist, Schmied, Knappe, Prinz,
    Herzog, Kaiser, Hofnarr, Wächter, Waldläufer, Krieger, Bogenschütze, Ritterorden, Gilde, Königreich,
    Zitadelle, Ruine, Grabkammer, Katakombe, Gruft, Tempel, Altar, Ritual, Beschwörung, Pentagramm,
    Siegel, Bann, Segen, Heiltrank, Gift, Mana, Magie, Illusion, Verwandlung, Unsichtbarkeit,
    Teleportation, Feuerball, Blitz, Schatten, Licht, Dunkelheit, Unterwelt, Elfenreich, Zwergenmine, Gold,
    Edelstein, Rubin, Smaragd, Saphir, Mithril, Artefakt, Relikt, Zepter, Streitkolben, Morgenstern,
    Hellebarde, Armbrust, Kettenhemd, Umhang, Kapuze, Stiefel, Zauberhut, Besen, Schatzkarte, Rätsel,
    Prüfung, Duell, Turnier, Belagerung, Schlacht, Armee, Schuppe, Klaue, Flügel, Feuer,
    Asche, Glut, Sternenstaub, Mondstein, Wunschbrunnen, Zauberwald, Feenring, Trollbrücke, Wolkenschloss, Rabe,
    Eule, Kröte, Fledermaus, Einsiedler, Prophet, Thronfolger, Verräter, Pirat, Händler, Wirt,
    Met, Laute, Harfe, Ballade, Legende, Sage, Chronik, Bibliothek, Gelehrter, Fluss,
    Kutsche, Zelt, Lagerfeuer, Horn, Glocke, Kerze, Schlüssel, Truhe, Tür, Grab
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
    Duell, Hauspokal, Großer Saal, Bibliothek, Turnier, Weihnachtsball, Weasley, Malfoy, Potter, Ollivander,
    Albus, Lily, James, Petunia, Vernon, Dudley, Fred, George, Percy, Charlie,
    Bill, Molly, Arthur, Fleur, Krum, Cedric, Cho, Dean, Seamus, Lavender,
    Parvati, Oliver, Colin, Crabbe, Goyle, Narzissa, Fenrir, Wurmschwanz, Grindelwald, Flitwick,
    Sprout, Binns, Hooch, Pomfrey, Firenze, Grawp, Fudge, Kingsley, Aberforth, Myrte,
    Fast Kopfloser Nick, Graue Dame, Blutiger Baron, Flamel, Tom Riddle, Nagini, Thestral, Niffler, Grindeloh, Wassermensch,
    Acromantula, Inferius, Veela, Kniesel, Wichtel, Hornschwanz, Feuerblitz, Portschlüssel, Flohpulver, Apparieren,
    Kamin, Erinnermich, Spickoskop, Verschwindekabinett, Raum der Wünsche, Astronomieturm, Krankenflügel, Gemeinschaftsraum, Kerker, Eberkopf,
    Drei Besen, Honigtopf, Heulende Hütte, Godrics Hollow, Grimmauldplatz, Durmstrang, Beauxbatons, Hogwarts-Express, Bertie Botts Bohnen, Kürbissaft,
    Zaubererschach, Elderstab, Diadem, Medaillon, Tagebuch, Becher, Schwert, Unbrechbarer Schwur, Felix Felicis, Amortentia,
    Veritaserum, Alohomora, Wingardium Leviosa, Expecto Patronum, Stupor, Crucio, Imperio, Obliviate, Riddikulus, Sectumsempra,
    Nox, Dunkles Mal, Halbblutprinz, Auserwählter, Prophezeiung, ZAG, Vertrauensschüler, Nachsitzen, Zauberkunst, Astronomie,
    Squib, Okklumentik, Eulerei, Brief, Kröte, Ratte, Katze, Gespenst, Gefangener, Rumtreiber,
    Hauselfen-Befreiung, Trimagisches Turnier, Goldenes Ei, See, Wahrheitstrank, Zauberstabkern, Einhornhaar, Phönixfeder, Drachenherz, Zauberei
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
    Gabel, Messer, Löffel, Teller, Tasse, Pfanne, Topf, Ofen, Grill, Picknick,
    Avocado, Aubergine, Zucchini, Sellerie, Lauch, Radieschen, Rote Bete, Blumenkohl, Rosenkohl, Sauerkraut,
    Rotkohl, Spargel, Artischocke, Olive, Ingwer, Chili, Basilikum, Petersilie, Schnittlauch, Dill,
    Minze, Zimt, Vanille, Oregano, Rosmarin, Muskat, Feige, Dattel, Granatapfel, Grapefruit,
    Mandarine, Limette, Papaya, Maracuja, Heidelbeere, Johannisbeere, Brombeere, Rhabarber, Aprikose, Rosine,
    Erdnuss, Walnuss, Haselnuss, Pistazie, Kastanie, Sesam, Haferflocken, Müsli, Mehl, Hefe,
    Teig, Baguette, Knäckebrot, Bagel, Donut, Berliner, Strudel, Käsekuchen, Tiramisu, Crêpe,
    Praline, Lebkuchen, Stollen, Marzipan, Lakritz, Kaugummi, Lutscher, Zuckerwatte, Karamell, Sirup,
    Mayonnaise, Soße, Pesto, Hummus, Falafel, Burrito, Nachos, Paella, Risotto, Ravioli,
    Spaghetti, Gnocchi, Spätzle, Knödel, Maultasche, Kartoffelsalat, Rührei, Spiegelei, Omelett, Currywurst,
    Leberkäse, Weißwurst, Gulasch, Roulade, Braten, Gans, Hackfleisch, Kotelett, Fischstäbchen, Hering,
    Garnele, Hummer, Muschel, Tintenfisch, Kaviar, Auster, Tofu, Ramen, Frühlingsrolle, Wok,
    Stäbchen, Glühwein, Apfelschorle, Cola, Milchshake, Smoothie, Espresso, Cappuccino, Schnaps, Whisky,
    Rum, Champagner, Radler, Sprudel, Eiswürfel, Strohhalm, Schüssel, Nudelholz, Schneebesen, Mixer,
    Toaster, Mikrowelle, Kühlschrank, Herd, Kochbuch, Rezept, Speisekarte, Kellner, Trinkgeld, Restaurant,
    Imbiss, Buffet, Frühstück, Mittagessen, Abendbrot, Nachtisch, Vorspeise, Diät, Hunger, Gewürz
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
    Bodenstation, Startrampe, Meteorit, Sternschnuppe, Ringe, Mondbasis, Gravitation, Raumpatrouille, Flotte, Kristall,
    Sonnensystem, Universum, Raumzeit, Paralleluniversum, Dimension, Zwergplanet, Titan, Europa, Ganymed, Andromeda,
    Großer Wagen, Polarstern, Sirius, Roter Riese, Weißer Zwerg, Neutronenstern, Sonnenfleck, Sonnensturm, Kernfusion, Dunkle Materie,
    Lichtgeschwindigkeit, Warp, Ionenantrieb, Sonnensegel, Raumfähre, Shuttle, Mondfähre, Raumsonde, Hubble, Apollo,
    Sputnik, Laika, Gagarin, Armstrong, NASA, Kontrollzentrum, Wiedereintritt, Hitzeschild, Fallschirm, Andockmanöver,
    Weltraumspaziergang, Helm, Visier, Sauerstoff, Tank, Raumnahrung, Sternwarte, Planetarium, Fernrohr, Spiegel,
    Spektrum, Infrarot, Röntgen, Funkteleskop, Sternkarte, Tierkreis, Sternzeichen, Neumond, Vollmond, Halbmond,
    Gezeiten, Meteoritenschauer, Asteroidengürtel, Staub, Wasserstoff, Helium, Eis, Replikant, Mutation, Nanobot,
    Exoskelett, Kampfroboter, Strahlenkanone, Blaster, Traktorstrahl, Tarnvorrichtung, Kraftfeld, Sprungantrieb, Künstliche Intelligenz, Matrix,
    Simulation, Virtuelle Realität, Cyberspace, Hacker, Chip, Implantat, Telepathie, Telekinese, Gestaltwandler, Parasit,
    Schleim, Tentakel, Mutterschiff, Kreuzer, Jäger, Raumpirat, Kopfgeldjäger, Schmuggler, Raumhafen, Terraforming,
    Biosphäre, Kuppel, Generationenschiff, Arche, Erstkontakt, Botschafter, Föderation, Allianz, Koordinaten, Logbuch,
    Sternzeit, Zeitmaschine, Zeitparadoxon, Dystopie, Utopie, Apokalypse, Wüstenplanet, Eisplanet, Gasriese, Ozeanplanet,
    Doppelstern, Notruf, Selbstzerstörung, Alarm, Rettungskapsel, Raumkadett, Pilot, Offizier, Wissenschaftler, Ingenieur,
    Labor, Experiment, Monitor, Konsole, Knopf, Hebel, Batterie, Solarzelle, Generator, Funk,
    Mondgestein, Sternhaufen, Raumschlacht, Laserpistole, Saturnring, Zentrifuge, Bordcomputer, Sternenflotte, Weltraumschrott, Marsmensch
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
    Ziel, Podest, Turnschuh, Hantel, Fitness, Joggen, Skateboard, Inliner, Rasen, Umkleide,
    Formel 1, Rallye, Motocross, Motorrad, Kart, Mountainbike, BMX, Triathlon, Zehnkampf, Stabhochsprung,
    Dreisprung, Hammerwurf, Kugelstoßen, Langlauf, Skispringen, Abfahrt, Slalom, Rodeln, Curling, Eisschnelllauf,
    Schlittschuh, Eisbahn, Rugby, Football, Baseball, Cricket, Polo, Wasserball, Synchronschwimmen, Turmspringen,
    Sprungturm, Kraulen, Brustschwimmen, Rückenschwimmen, Badekappe, Schwimmbrille, Neoprenanzug, Kitesurfen, Windsurfen, Wasserski,
    Rafting, Paddel, Regatta, Bergsteigen, Gipfel, Karabiner, Bouldern, Fallschirmspringen, Paragliding, Bungee,
    Parkour, Breakdance, Tanz, Ballett, Gymnastik, Ringe, Pferd, Bodenturnen, Schwebebalken, Sprungbrett,
    Matte, Kickboxen, Taekwondo, Kung Fu, Sumo, Gürtel, Handschuh, Mundschutz, Knockout, Runde,
    Gong, Sandsack, Seilspringen, Liegestütz, Klimmzug, Kniebeuge, Muskel, Muskelkater, Training, Aufwärmen,
    Dehnen, Ausdauer, Sieg, Niederlage, Unentschieden, Finale, Halbfinale, Liga, Tabelle, Aufstieg,
    Abstieg, Derby, Transfer, Kader, Einwechslung, Gelbe Karte, Foul, Schwalbe, Handspiel, Videobeweis,
    Linienrichter, Anstoß, Einwurf, Kopfball, Fallrückzieher, Hattrick, Eigentor, Latte, Pfosten, Flanke,
    Dribbling, Konter, Taktik, Aufstellung, Mittelfeld, Maskottchen, Hymne, Fackel, Siegerehrung, Lorbeerkranz,
    Champion, Profi, Amateur, Verein, Sportplatz, Turnhalle, Laufbahn, Zielgerade, Kurve, Überholen,
    Windschatten, Gelbes Trikot, Tour de France, Bundesliga, Champions League, Weltmeisterschaft, Super Bowl, Wimbledon, Aufschlag, Ass,
    Satz, Tiebreak, Federball, Dunking, Dreier, Freiwurf, Golfball, Loch, Caddy, Abschlag,
    Bunker, Minigolf, Kegeln, Strike, Queue, Dartscheibe, Bullseye, Stollen, Schienbeinschoner, Sporttasche
  `) },
  geografie: { name: 'Geografie & Reisen', words: list(`
    Deutschland, Frankreich, Italien, Spanien, Portugal, England, Irland, Schottland, Island, Norwegen,
    Schweden, Finnland, Dänemark, Holland, Belgien, Schweiz, Österreich, Polen, Ungarn, Griechenland,
    Türkei, Kroatien, Russland, Ägypten, Marokko, Kenia, Südafrika, Madagaskar, Indien, China,
    Japan, Korea, Thailand, Vietnam, Australien, Neuseeland, Kanada, Amerika, Mexiko, Kuba,
    Brasilien, Argentinien, Chile, Peru, Grönland, Hawaii, Arktis, Antarktis, Afrika, Asien,
    Berlin, Hamburg, München, Köln, Wien, Zürich, Paris, London, Rom, Venedig,
    Madrid, Barcelona, Lissabon, Amsterdam, Prag, Moskau, Istanbul, Athen, Kairo, Dubai,
    Tokio, Peking, Bangkok, Sydney, New York, Las Vegas, Hollywood, Rio, Hongkong, Singapur,
    Eiffelturm, Kolosseum, Big Ben, Freiheitsstatue, Chinesische Mauer, Pyramide, Taj Mahal, Akropolis, Stonehenge, Machu Picchu,
    Brandenburger Tor, Neuschwanstein, Schiefer Turm, Mount Everest, Kilimandscharo, Matterhorn, Zugspitze, Niagarafälle, Grand Canyon, Golden Gate,
    Sphinx, Vatikan, Nil, Amazonas, Rhein, Donau, Themse, Mississippi, Sahara, Alpen,
    Anden, Himalaya, Pazifik, Atlantik, Mittelmeer, Nordsee, Ostsee, Totes Meer, Karibik, Bodensee,
    Regenwald, Savanne, Steppe, Tundra, Wüste, Oase, Dschungel, Vulkan, Gletscher, Fjord,
    Insel, Halbinsel, Küste, Strand, Bucht, Lagune, Riff, Klippe, Düne, Schlucht,
    Tal, Gipfel, Hügel, Höhle, Wasserfall, Geysir, See, Fluss, Delta, Quelle,
    Moor, Wald, Eisberg, Äquator, Nordpol, Südpol, Breitengrad, Zeitzone, Kontinent, Ozean,
    Grenze, Hauptstadt, Metropole, Dorf, Hafen, Reisepass, Visum, Koffer, Rucksack, Flughafen,
    Flugzeug, Bordkarte, Zoll, Ticket, Bahnhof, Zug, Schlafwagen, Kreuzfahrt, Fähre, Schiff,
    Wohnmobil, Zelt, Camping, Hotel, Jugendherberge, Ferienhaus, Rezeption, Minibar, Reiseführer, Landkarte,
    Kompass, Navi, Stadtplan, Postkarte, Souvenir, Kamera, Sonnencreme, Sonnenbrille, Liegestuhl, Sonnenschirm,
    Strandkorb, Jetlag, Urlaub, Rundreise, Roadtrip, Tourist, Reiseleiter, Museum, Altstadt, Markt,
    Basar, Währung, Euro, Dollar, Dolmetscher, Sprache, Heimweh, Fernweh, Abenteuer, Expedition,
    Safari, Pilger, Weltreise, Globus, Atlas, Flagge, Stau, Autobahn, Raststätte, Tankstelle,
    Taxi, U-Bahn, Seilbahn, Gondel, Skilift, Leuchtturm, Pier, Vulkaninsel, Oktoberfest, Karneval,
    Mallorca, Sizilien, Kreta, Bali, Malediven, Sibirien, Toskana, Provence, Lappland, Schwarzwald
  `) },
};

if (typeof module !== 'undefined') module.exports = { WORDS, THEMES };
