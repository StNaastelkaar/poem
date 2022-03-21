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
    body: "Toen Darius dit start scherm zach, klikte hij snel op...",
    options: [
      { id: "intro-01", name: "START!" }
    ]
  }, {
    id: "intro-01", title: "TUTORIAL",
    body: "Darius zette zich lekker schrap, <br> een gloed nieuw spel, oh dat is geen grap! <br> En terwij hij het spel onder ogen zag,",
    options: [
      { id: "intro-02", name: "verscheen er bij hem een brede lach!" },
      { id: "intro-03", name: "raakte hij toch wat van slag!" }
    ]
  }, {
    id: "intro-02", title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"! <br> Vertelde hij aan zijn publiek. <br> En nog voor Darius zich kon vervelen,",
    options: [
      { id: "intro-04", name: "maakte hij aanstalte om het gaan te spelen." }
    ]
  }, {
    id: "intro-03", title: "",
    body: "Hij naam een diepe ademteug en bedaarde snel,",
    options: [
      { id: "intro-04", name: "en keek met goede moed naar zijn nieuwe spel." }
    ]
  }, {
    id: "intro-04", title: "",
    body: "Oh! De spanning! Oh! de mogelijkheden! <br> Maar waar zou hij zijn playthrough aan besteden? <br> \"Ik weet\", zij Darius, \"wat ik wil gamen!\"",
    options: [
      { id: "serius-01", name: "\"Een uitdagend spel, vol raadsels en problemen!\"" },
      { id: "play-01", name: "\"Een ontspannen spel, dat ik rustig kan ondernemen!\"" },
    ]
  }, {
    id: "serius-01", title: "",
    body: "Ja, van een moeijlijk spel, dat valt Darius wel goed.",
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
    body: "\"Al dat harde werk, waar doe ik het voor?\",<br>aldus Darius in zijn zachte tenor. <br> En zo mijmerde Darius even, over de dagen en nachten <br> waarin hij rekende met lading en krachten.<br> Maar beloond zal hij worden, als hij nog even door streeft,",
    options: [
      { id: "thesis-02", name: "Wanneer hij eindelijk zijn papiertje in handen heeft." },
      { id: "apoc-01", name: "Waneer de wereld voor zijn kennis beeft." }
    ]
  }, {
    id: "thesis-02", title: "",
    body: "Oh wat zal iedereen dan vieren, <br> met slingers, taarten, dansjes en zwieren,<br> met aapjes en lachen en zingen en bloemen,",
    options: [
      {id: "generic-END", name:"omdat we hem dan eindelijk Doctor Darius kunnen noemen!"}
    ]
  }, {
    id: "generic-END", title: "",
    body: "Oh. Uhm. Darius besefte zich dat, in zijn haast, <br> hij bijna langs zijn cadeau heen was geraasd. <br> Na een moment van rust en wat bezinnen, ",
    options: [
      {id: "intro-01", name:"besloot Darius weer vanaf het begin te beginnen."},
      {id: "END", name:"zou hij toch eindelijk aan het spel beginnen!"}
    ]
  }, {
    id: "play-01", title: "TBC",
    body: "Ja, hij heeft zich deze week al genoeg uitgesloofd, <br> dus hij zette zijn werk met plezier uit zijn hoofd. <br> Hoe doet hij het? Is het niet knap?",
    options: [
      { id: "dad-01", name: "Zijn werk combineren met vaderschap!"},
      { id: "gamer-01", name: "Verantwoordelijkheden combineren met 1337 gamerschap!"}
    ]
  }, {
    id: "gamer-01", title: "", 
    body: "\"Ja\", besloot Darius, \"nu ga ik er voor!\", <br> \"even ontspannen zonder kind of kantoor\", \"zonder thesis of bureau pedel\",",
    options: [
      {id: "rpg-01",   name: "\"en nu kunnen ontspannen, met een ROLLENSPEL.\""},
      {id: "board-01", name: "\"en nu kunnen ontspannen, met een BORDSPEL.\""},
      {id: "gamer-02", name: "\"en nu kunnen ontspannen, met een COMPUTERSPEL.\""}
    ] 
  }, {
    id: "rpg-01", title: "",
    body: "Oh de vriendschappen en oh de verhalen, <br> en diepe kerkers om in af te dalen. Ja, weinig dingen kunnen hem zo behagen,",
    options: [
      {id: "speler-01",   name: "om als DM de spelers uit te dagen."},
      {id: "gm-01", name: "om als speler of monsters te jagen."}
    ] 
  }, {
    id: "speler-01", title: "",
    body: "Een priester, of warlock, een kattige heks, <br> (maar die twee-voor-een krijgers waren toch wat complex) <br> een grote barbaar als koning gekleed, <br> of een jeukend figuur dat men liever vergeet. <br> Talloze heldendaden zal hij nog verrichten,",
    choices: [
      {id: "generic-END", name: "ja, als speler draagt Darius duizend gezichten!"}
    ]
  }, {
    id: "gm-01", title: "",
    body: "Met een stroke van zijn pen, en wat dobbelstenen <br> kan Darius de mooiste werelden mansplainen. <br> Zo creëert hij voor zijn vrienden wel uren aan pret, <br> met Disneyplagiaat of een privé-toilet, <br> met mythen en sagen en ambigu gelegen zee,",
    choices: [
      {id: "generic-END", name: "of econimische topics à la David G."}
    ]
  }, {
    id: "cbs-01", title: "TBC",
    body: "\"Werk ik mij niet dat in dag uit in het zweet?\" <br> \"Als hardwerkende pion van de <i>deepstate?\"</i> <br> En zo is het zeker, Darius doet ook zijn best <br> Dag in, dag uit zwoegen voor het see-bee-es. <br> Daar stuurt zijn statistische magie de politieke getijden!",
    choices: [
      {id: "good-job-01", name: "En nimmer laat hij zich tot gesjoemel verlijden."},
      {id: "aivd-01", name: "zodat hij daarmee de politiek kan misleiden."}
    ]
  }, {
    id: "board-01", title: "TBC",
    body: ""
  }, {
    id: "gamer-02", title: "TBC",
    body: ""
  }, {
    id: "dad-01", title: "TBC",
    body: ""
  }, {
    id: "apoc-01", title: "TBC",
    body: ""
  }
]
