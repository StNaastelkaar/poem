const choices = [
  { id: "undefined",
    title: "You dun goofed",
    body: "'t huidige id is 'undefined', je hebt dus iets verkeerd gedaan..."
  }, {
    id: "END", title: "DIT IS HET EINDE",
    body: "Wacht, je dacht toch niet dat dit je cadeau was? <br> Pak Stanley's cadeau maar. <br> En zoek een hobby of zo. <br> Of begin opnieuw, ik ben je baas niet.", 
    options: [
      {id: "START", name:"Begin Opnieuw"}
    ]
  }, {
    id: "START", title: "WELKOM NIEUWE SPELER",
    body: "Toen Darius dit start scherm zag, klikte hij snel op...",
    options: [
      { id: "intro-01", name: "START!" }
    ]
  }, {
    id: "intro-01", title: "TUTORIAL",
    body: "Darius zette zich lekker schrap, <br> een gloednieuw spel, oh dat is geen grap! <br> En terwij hij het spel onder ogen zag,",
    options: [
      { id: "intro-02", name: "verscheen er bij hem een brede lach!" },
      { id: "intro-03", name: "raakte hij toch wat van slag!" }
    ]
  }, {
    id: "intro-02", title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"! <br> Vertelde hij aan zijn publiek. <br> En nog voor Darius zich kon vervelen,",
    options: [
      { id: "intro-04", name: "maakte hij aanstalten om het gaan te spelen." }
    ]
  }, {
    id: "intro-03", title: "",
    body: "Hij nam een diepe ademteug en bedaarde snel,",
    options: [
      { id: "intro-04", name: "en keek met goede moed naar zijn nieuwe spel." }
    ]
  }, {
    id: "intro-04", title: "",
    body: "Oh! De spanning! Oh! de mogelijkheden! <br> Maar waar zou hij zijn <i> playthrough </i> aan besteden? <br> \"Ik weet\", zij Darius, \"wat ik wil gamen!\"",
    options: [
      { id: "serius-01", name: "\"Een uitdagend spel, vol raadsels en problemen!\"" },
      { id: "play-01", name: "\"Een ontspannen spel, dat ik rustig kan ondernemen!\"" },
    ]
  }, {
    id: "serius-01", title: "",
    body: "Ja, een moeilijk spel, dat valt Darius wel goed.",
    options: [
      { id: "serius-02", name: "Dus aan de slag met goede moed!" },
    ]
  }, {
    id: "serius-02", title: "",
    body: "\"Maar wacht toch eens een momentje even\", <br> dacht Darius, \"ben ik mijn doel niet voorbij aan het streven?\" <br> De gedachte ontnam hem zijn stoom <br> Want <i>hit</i> zo'n stressvol spel niet wat te <i>close to home!?</i>?<br>\"Wat als dit spel mijn humeur doet verzuren!?\"",
    options: [
      { id: "thesis-01", name: "\"Heb ik naast mijn THESIS niet al genoeg te verduren?\"" },
      { id: "cbs-01", name: "\"Heb ik naast mijn WERK niet al genoeg te verduren?\"" }
    ]
  }, {
    id: "thesis-01", title: "",
    body: "\"Al dat harde werk, waar doe ik het voor?\",<br>aldus Darius in zijn zachte tenor. <br> En zo mijmerde Darius even, over de dagen en nachten <br> waarin hij rekende met lading en krachten.<br> Maar beloond zal hij worden, als hij nog iets meer tijd besteedt,",
    options: [
      { id: "thesis-02", name: "wanneer hij dan zijn proefschrift af heeft gesmeed." },
      { id: "apoc-01", name: "waneer hij de geheimen van het universum ontleedt." }
    ]
  }, {
    id: "thesis-02", title: "",
    body: "Oh wat zal iedereen dan vieren, <br> met slingers, taarten, dansjes en zwieren,<br> met aapjes en lachen en zingen en bloemen,",
    options: [
      {id: "generic-END", name:"omdat we hem dan eindelijk Doctor Darius kunnen noemen!"}
    ]
  }, {
    id: "generic-END", title: "The End?",
    body: "Oh. Uhm. Darius moest toch echt even toegeven, <br> Dat hij van het oorspronkelijke topic af was gedreven. <br> Na een moment van rust en wat bezinnen, ",
    options: [
      {id: "intro-01", name:"besloot Darius weer vanaf het begin te beginnen."},
      {id: "END", name:"zou hij toch eindelijk aan zijn cadeau gaan beginnen!"}
    ]
  }, {
    id: "play-01", title: "",
    body: "Ja, hij heeft zich deze week al genoeg uitgesloofd, <br> dus hij zette zijn werk met plezier uit zijn hoofd. <br> Hoe doet hij het? Is het niet knap?",
    options: [
      { id: "dad-01", name: "Zijn werk combineren met vaderschap!"},
      { id: "gamer-01", name: "Verantwoordelijkheden combineren met 1337 gamerschap!"}
    ]
  }, {
    id: "gamer-01", title: "", 
    body: "\"Ja\", besloot Darius, \"nu ga ik er voor!\", <br> \"even ontspannen zonder kind of kantoor\", <br> \"zonder thesis of bureau pedel\",",
    options: [
      {id: "rpg-01",   name: "\"en nu kunnen ontspannen, met een ROLLENSPEL.\""},
      {id: "board-01", name: "\"en nu kunnen ontspannen, met een BORDSPEL.\""},
      {id: "gamer-02", name: "\"en nu kunnen ontspannen, met een COMPUTERSPEL.\""}
    ] 
  }, {
    id: "rpg-01", title: "",
    body: "Oh de vriendschappen en oh de verhalen, <br> en diepe kerkers om in af te dalen. <br> Ja, weinig dingen kunnen hem zo behagen,",
    options: [
      {id: "gm-01",   name: "om als DM de spelers uit te dagen."},
      {id: "speler-01", name: "om als speler op monsters te jagen."}
    ] 
  }, {
    id: "speler-01", title: "",
    body: "Een priester, of warlock, een kattige heks, <br> (die twee-in-één krijgers waren toch wat complex) <br> een grote barbaar als koning gekleed, <br> of een jeukend figuur dat men liever vergeet. <br> Talloze heldendaden zal hij nog verrichten,",
    options: [
      {id: "generic-END", name: "ja, als speler draagt Darius duizend gezichten!"}
    ]
  }, {
    id: "gm-01", title: "",
    body: "Met een stroke van zijn pen, en wat dobbelstenen <br> kan Darius de mooiste werelden mansplainen. <br> Zo creëert hij voor zijn vrienden wel uren aan pret, <br> met Disneyplagiaat of een privé-toilet, <br> met mythen en sagen en ambigu gelegen zee,",
    options: [
      {id: "generic-END", name: "of econimische topics à la David G."}
    ]
  }, {
    id: "cbs-01", title: "",
    body: "\"Werk ik mij niet dag in dag uit in het zweet?\" <br> \"Als hardwerkende pion van de <i>deepstate?\"</i> <br> En zo is het zeker, Darius doet ook zijn best <br> Dag in, dag uit zwoegen voor het see-bee-es. <br> Daar stuurt zijn statistische magie de politieke getijden!",
    options: [
      {id: "good-job-01", name: "En nimmer laat hij zich tot gesjoemel verlijden."},
      {id: "aivd-01", name: "Zodat hij daarmee de politiek kan misleiden."}
    ]
  }, {
    id: "aivd-01", title: "",
    body: "Als schimmige speler, uit Rutte's klauwen <br> zal hij de trias politica verbouwen <br> Zonder stem of ministerie, zonder kamervragen",
    options: [
      {id: "aivd-02", name: "Bespeelt hij zijn poppetjes in 's Gravenhage'"}
    ]
  }, {
    id: "aivd-02", title: "",
    body: "Tot een <i> sting </i> operatie hem dan eindelijk snoert, <br> en hij in een zwart busje af wordt gevoerd. <br> Naar een geheim strafkamp op Schiermonnikoog <br>",
    options: [
      {id: "generic-END", name: "een zoveelste nummer in het straf-cataloog."}
    ]
  }, {
    id: "dad-01", title: "",
    body: "\"Ik ben zoveel meer dan een ambtenaar\", <br> en indeerdaad, niets is minder waar. <br> Een hoeder van drie magnefieken telgen, <br> doen Darius niet zomaar overweldigen! <br> \"Het Vaderschap\", aldus Darius, \"is een zwaar gevecht\"",
    options: [
      { id: "dad-02", name:"\"Een strijd die de komende 18 jaar nog niet is beslecht!\"" },
      { id: "rijm-01", name:"\"Maar die 'telgen' rijm was wel héél slecht.\"" }
    ]
  }, {
    id: "dad-02", title: "",
    body: "Temidden een kleine kudde van kids, <br> oogst hij van het vaderschap de <i> benefits </i>. <br> Maar goed gemutst, doch soms wat warrig <br> wacht hem een toekomst als patriarch! <br> Want al gebeurt het misschien niet <i> soon </i>, <br> ooit wordt deze kleine kudde een legioen! <br> Wanneer straks de kroost van het kroost <br> nog een generatie de wereld in loost. <br> Een krullen-epidemie die exponentieël groeit, <br> ",
    options: [
      {id: "generic-END", name: "en de wereld met Opa Darius' nageslacht overvloeid!"}
    ]
  }, {
    id: "gamer-02", title: "",
    body: "Maar oei, het wordt niet zo simpel, als dat het leek, <br> want hij zal moeten kiezen uit een game-bibliotheek! <br> Gelukkig heeft Darius zijn prioriteiten, <br> en weet waaraan hij zijn tijd zal verslijten!\" <br> \"Ik weet\", zo zei Darius \"waar ik voor ga!\"",
    options: [
      {id: "pytrik-01", name: "\"Oorlog en handel in historisch Europa!\""},
      {id: "hitman-01", name: "\"Sluipen en moorden voor de I.C.A.\""},
    ]
  }, {
    id: "hitman-01", title: "",
    body: "Dus zal hij spelen als een geheim agent <br> en ontspannen terwijl hij de <i> maps </i> verkent. <br> In een wereld waarin hij zijn targets kan snaren",
    options: [
      {id: "hitman-02", name:"en waarin hij nooit een <i> bad hair day</i> hoeft te ervaren."},
      {id: "ERROR-01" , name: "RHYME NOT FOUND - ERROR #104.A"}
    ]
  }, {
    id: "hitman-02", title: "",
    body: "Maar goed, nu dus, uhm, aller eerst <br> dit spel dat Darius blijkbaar goed heeft beheerst. <br> Keurig ging hij langs mijn menu's, <br> en een reeks saaie opties passeerde de revue's <br> Maar zijn keuzes waren wel erg conservatief,",
    options: [
      {id: "intro-01", name:"dus begon hij opnieuw, en was wél creatief."},
      {id: "END", name:"en pakte Stanley's spel als alternatief."},
    ]
  }, {
    id: "good-job-01", title: "",
    body: "En Darius, die behendig de <i> corporate ladder </i> beklimt, <br> en elk rapport met cijfers op-pimpt. Zo werkt hij daar al, seizoen na seizoen, ",
    options: [
      {id: "dad-01", name: "maar hij houdt ook nog tijd om vader dingen te doen."},
      {id: "good-job-02", name: "en zo nog veertig jaar door, tot aan zijn pensioen."}
    ]
  }, {
    id: "good-job-02", title: "",
    body: "En wat bijkt onze Darius is management materiaal, <br> dus hem wacht een promotie tot directeur-generaal. <br> Waar hij met zijn visie een stempel zal drukken <br> en met zijn hervormingen de boel zal ontfucken. <br> En met lintjes, en toasten en een afscheidscommittee",
    options: [
      {id: "generic-END", name: "Kan hij op zij acht-en-zeventigste met AOW."}
    ]
  }, {
    id: "apoc-END", title: "",
    body: "Oh. Uhm. Excuses. Dat werd wel heel duister. <br> dus... <br> uh... <br> Laten we doen alsof dit niet gebeurd is? <nr> OK? <br> Ahem, ",   
    options: [
      {id: "intro-01", name:"dus zou je alsjeblieft even opnieuw willen beginnen?"},
      {id: "END", name:"misschien is het beter als we dit achter ons laten en je iets met je cadeau doet ofzo."},
    ]    
  }, {
    id: "apoc-01", title: "THE END (TIMES)",
    body: "Met zijn nieuw ijzere theorieën, <br>werpt hij de wereld op zijn knieeën. <br> Want kennis is macht, en macht corrumpeert, <br> en zo ook Darius waneer hij de wereld beheert. <br> De zeeën zullen koken, de onschuldigen gillen <br> wanneer hij de aarde onder ze doet rillen. <br> En hoewel men hem om mededogen zal smeken,",
    options: [
      {id: "apoc-END", name:"maakt men geen omelet zonder eieren te breken!"}
    ]    
  }, {
    id: "pytrik-01", title: "",
    body: "Een spel dat voor hem een historisch portaal is, <br> het roemruchte Europa Universalis! <br> Met tientallen uitbreidingen tot zijn beschikking, <br> Speelt hij als Turk, Spanjaard of Viking. <br> En voor hem geen gedoe met consoles of TVs, <br> een lid is hij immers, van het PC <i>master-race!</i> <br> Een stoïsche jongen, al van kind-af-aans,",
    options: [
      {id: "pytrik-02", name: "al vind men zijn kamer toch wat spartaans."}
    ]
  }, {
    id: "pytrik-02", title: "",
    body: "En zo begon Pytrik aan zijn mooie spel ... <br> Wacht <i> Pytrik ... ? </i>? <br> Dat kan niet kloppen toch ? <br> Net stond hier nog 'Darius' in mijn script. <br> Welke amateur heeft dit geschreven!? <br> Wat een onzin zeg. <br> Een beetje mijn tijd verspillen met dit soort <i> F-tier writing </i>.",
    options: [
      {id: "pytrik-03", name: "Nee, nee ik fiks het wel hoor!"},
      {id: "intro-01", name: "Of toch maar opnieuw beginnen?"}
    ]
  }, {
    id: "pytrik-03", title: "",
    body: "Ahem. <br> Darius greep zijn rubberen masker bij de rand <br> en met een gebaar zowel krachtig als elegant, <br> onthulde hij zijn grootste geheim!",
    options: [
      {id: "pytrik-END", name: "dat hij en Pytrik dezelde persoon zijn!"}
    ]
  },  {
    id: "pytrik-END", title: "THE END?",
    body: "<img src=\"https://stnaastelkaar.github.io/poem/mns.png\", width=\"300\">",
    options: [
      {id: "intro-01", name:"Begin opnieuw."},
      {id: "END", name:"THE END!"},
    ]
  }, {
    id: "rijm-01", title: "Seriously?",
    body: "Luister eens. Weet je wel hoeveel effing werk het is om heel <i> choose your own adventure </i> gedicht te schrijven? Hmm? <br> Dus ja, niet elke rijm en niet elk metrum gaat van de hoogstaande kwaliteit zijn die meneer blijkbaar gewend is! <br> Tschjongejonge zeg.",
    options: [
      {id: "rijm-02", name: "\"Ja uhm, maar kunnen we toch verder gaan?\""},
      {id: "intro-01", name: "\"Nou sorry hoor, ik probeer het wel opnieuw."}
    ]
  }, {
    id: "rijm-02", title: "",
    body: "Prima, prima. <br> Doorgaan alsof er niks gebeurd is. <br> Hm... <br> Nou wat wil je? Gedicht 'A' of 'B'?",
    options: [
      {id: "rijm-END-A", name: "\"Doe maar A?\""},
      {id: "rijm-END-B", name: "\"Sorry, doe maar B?\""},
    ]
  }, {
    id: "rijm-END-A", title: "",
    body: "Er was eens een man in Zoetermeer, <br> Die keek op dichters neer <br> Die vent die was <i> wack </i> <br> en keek elk paard in de bek <br> zonder ook maar een 'sorry meneer'.",
    options: [
      {id: "intro-01", name:"\"Eh, sorry. Ik probeer het nog wel een keertje.\""},
      {id: "END", name:"\"Vind je het goed als ik toch maar even mijn cadeau ga bekijken?\""},
    ]
  }, {
    id: "rijm-END-A", title: "",
    body: "Cadeau's en vriendschap, <br> verbroederende giften, <br> op Sint Naastelkaar.",
    options: [
      {id: "intro-01", name:"\"Dankje wel, erg mooi, ik zal het nog een keer proberen.\""},
      {id: "END", name:"\"Uhm ja, dankjewel. Ik ga nu toch even naar het echte cadeau.\""},
    ]
  }, {
    id: "board-01", title: "",
    body: "Bordspellen, coöperatiefen of adversarielen, <br> om samen met een goede groep vrienden te spelen. \"Inderdaad\", zo sprak Darius, \"niets is zo prachtig,\"",
    options: [
      {id: "board-02", name: "blah blah blah, blah blah blah, tachtig."},
    ]
  }, {
    id: "board-02", title: "[UNDER CONSTRUCTION]",
    body: "\"Bla bla bla\", aldus Darius, \"iets met <i>dice</i>\", <br> nog iets, nog iets, iets met anijs. <br> (Misschien vervangen door een dice - Dais pun? <br> Bla bla bla, geef hem twee keuzes,",
    options: [
      {id: "board-END", name: "keuze een (TBD)"},
      {id: "board-END", name: "Keuze 2 (TBD)"},
    ]
  }, {
    id: "board-END", title: "",
    body: "Oh, dit is genant zeg. <br> Ik had eigenlijk niet verwacht dat je hier zou komen. <br> Nou, vooruit, uhm goed gedaan hoor, de enige plek gevonden die niet voorbereid is. <br> Gefeliciteerd.",
    options: [
      {id: "intro-01", name: "Maar begin vooral een keer opnieuw."},
      {id: "END", name: "Hoewel ik het ook snap als je door wilt naar je cadeau."},
    ]
  }, {
    id: "ERROR-01", title: "ERROR #104.A",
    body: "Oeps. Dit is vervelend zeg. <br> Dit gebeurt meestal nooit! <br> Zou je het nog een keer willen proberen?",
    options: [
      {id: "E-hitman-01", name: "Probeer opnieuw."}
    ]
  }, {
    id: "E-hitman-01", title: "",
    body: "uǝɹɐus uɐʞ sʇǝƃɹɐʇ uɾᴉz ɾᴉɥ uᴉɹɐɐʍ plǝɹǝʍ uǝǝ uI <br> ʇuǝʞɹǝʌ sdɐɯ ǝp ɾᴉɥ lɾᴉʍɹǝʇ uǝuuɐdsʇuo uǝ <br> ʇuǝƃɐ ɯᴉǝɥǝƃ uǝǝ slɐ uǝlǝds ɾᴉɥ lɐz snp ",
    options: [
      {id: "ERROR-02", name: "uǝɹɐʌɹǝ ǝʇ ʇɟǝoɥ ʎɐp ɹᴉɐɥ pɐq uǝǝ ʇᴉoou ɾᴉɥ uᴉɹɐɐʍ uǝ"},
      {id: "ERROR-02", name: "uǝɹɐds uɐʞ do sʇuǝɯǝʌǝᴉɥɔɐ uǝ"}
    ]
  }, {
    id: "ERROR-02", title: "FATAL ERROR #722.Ω.8",
    body: "Oh nee! <br> Oh nee... <br> Oh nee. <br> Wacht nee, niks aan de hand. <br> Het is zo opgelost!",
    options: [
      {id: "E-START", name: "Begin maar gewoon opnieuw."}
    ]
  }, {
    id: "E-START", title: "WELKOM NIEUWE SPELER",
    body: "Toen Darius dit start scherm zag, klikte hij snel op...",
    options: [
      { id: "E-intro-01", name: "S̶T̶A̷R̵T̶!" }
    ]
  }, {
    id: "E-intro-01", title: "TUTORIAL",
    body: "Darius zet̷te zich lekker schrap, <br> een ʍnǝᴉupǝoʅƃ spel, oh dat is geen grap! <br> En terwij hij het spel onder oͦgeͤn zag,",
    options: [
      { id: "R-intro-02-a", name: "verscheen er bij hem een brede lach!" },
      { id: "E-intro-02-a", name: "ʳᵃᵃᵏᵗᵉ ʰⁱʲ ᵗᵒᶜʰ ʷᵃᵗ ᵛᵃⁿ ˢˡᵃᵍ!" },
      { id: "E-intro-03", name: "r̴a̴a̸k̴t̶e̸ ̵h̷i̷j̵ ̷t̵o̷c̷h̵ ̴w̷a̶t̸ ̶v̵a̶n̴ ̶s̵l̶a̵g̷!" },
      { id: "E-intro-03", name: "r̷̯̓ä̴̱́á̴͇k̴̢͘t̷̤̐ė̶̝ ̷̥͗h̶̥͆i̴̦͛j̷͎͒ ̸̞̓t̸̞̽o̵̞͋c̶̭̅h̵̍͜ ̶͉̓w̵̱͊ă̷͎t̸͔̅ ̷͓́v̸̛̩a̷͈͐n̸̻̽ ̴̳̃s̴̫̎l̷̝̎ả̴̟g̶̻͠!̸̛̹" }
    ]
  }, {
    id: "R-intro-02-a", title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"! <br> Vertelde hij aan zijn publiek. <br> En nog voor Darius zich kon vervelen,",
    options: [
      { id: "R-intro-01-a", name: "maakte hij aanstalten om het gaan te spelen." }
    ]
  }, {
    id: "R-intro-01-a", title: "TUTORIAL",
    body: "Darius zette zich lekker schrap, <br> een gloednieuw spel, oh dat is geen grap! <br> En terwij hij het spel onder ogen zag,",
    options: [
      { id: "R-intro-02-b", name: "verscheen er bij hem een brede lach!" },
      { id: "R-intro-02-b", name: "raakte hij toch wat van slag!" }
    ]
  },  {
    id: "R-intro-02-b", title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"! <br> Vertelde hij aan zijn publiek. <br> En nog voor Darius zich kon vervelen,",
    options: [
      { id: "R-intro-01-b", name: "maakte hij aanstalten om het gaan te spelen." }
    ]
  }, {
    id: "R-intro-01-b", title: "TUTORIAL",
    body: "Darius zette zich lekker schrap, <br> een gloednieuw spel, oh dat is geen grap! <br> En terwij hij het spel onder ogen zag,",
    options: [
      { id: "R-intro-02-c", name: "verscheen er bij hem een brede lach!" },
      { id: "R-intro-02-c", name: "raakte hij toch wat van slag!" }
    ]
  }, {
    id: "R-intro-02-c", title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"! <br> Vertelde hij aan zijn publiek. <br> En nog voor Darius zich kon vervelen,",
    options: [
      { id: "R-intro-01-c", name: "maakte hij aanstalten om het gaan te spelen." }
    ]
  }, {
    id: "R-intro-01-c", title: "TUTORIAL",
    body: "Darius zette zich lekker schrap, <br> een gloednieuw spel, oh dat is geen grap! <br> En terwij hij het spel onder ogen zag,",
    options: [
      { id: "R-intro-02-c", name: "verscheen er bij hem een brede lach!" },
      { id: "R-intro-02-c", name: "raakte hij toch wat van slag!"},
      { id: "R-intro-02-d", name: "Sorry, er zit toch iets vast in het systeem."}
    ]
  }, {
    id: "R-intro-02-d", title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"! <br> Vertelde hij aan zijn publiek. <br> En nog voor Darius zich kon vervelen,",
    options: [
      { id: "R-intro-01-d", name: "maakte hij aanstalten om het gaan te spelen." }
    ]
  }, {
    id: "R-intro-01-d", title: "TUTORIAL",
    body: "Darius zette zich lekker schrap, <br> een gloednieuw spel, oh dat is geen grap! <br> En terwij hij het spel onder ogen zag,",
    options: [
      { id: "R-intro-02-d", name: "verscheen er bij hem een brede lach!" },
      { id: "R-intro-02-d", name: "raakte hij toch wat van slag!"},
      { id: "R-intro-02-e", name: "Oké, Oké. Laatste poging."}
    ]
  }, {
    id: "R-intro-02-e", title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"! <br> Vertelde hij aan zijn publiek. <br> En nog voor Darius zich kon vervelen,",
    options: [
      { id: "R-intro-01-e", name: "maakte hij aanstalten om het gaan te spelen." }
    ]
  }, {
    id: "R-intro-01-e", title: "TUTORIAL",
    body: "Darius zette zich lekker schrap, <br> een gloednieuw spel, oh dat is geen grap! <br> En terwij hij het spel onder ogen zag,",
    options: [
      { id: "R-intro-02-e", name: "verscheen er bij hem een brede lach!" },
      { id: "R-intro-02-e", name: "raakte hij toch wat van slag!"},
      { id: "REBOOT-END", name: "REBOOT"}
    ]
  }, {
    id: "REBOOT-END", title: "REBOOTING |",
    body: "",
    options: [
      { id: "REBOOT-END-2", name: "..." }
    ]
  }, {
    id: "REBOOT-END-2", title: "REBOOTING /",
    body: "Het systeem start op. <br> Dit kan enkele momenten duren.",
    options: [
      { id: "REBOOT-END-3", name: "..." }
    ]
  }, {
    id: "REBOOT-END-3", title: "REBOOTING ⎯",
    body: "",
    options: [
      { id: "START", name: "..." },
      { id: "REBOOT-END-4", name: "ABORT BOOT SEQUENCE"},
    ]
  }, {
    id: "REBOOT-END-4", title: "REBOOTING \\",
    body: "BOOT SEQUENCE ABORTED ",
    options: [
      { id: "END", name: "snel door naar het cadeau?" }
    ]
  }
]
