const choices = [
  { id: "undefined",
    title: "You dun goofed",
    body: "'t huidige id is 'undefined', je hebt dus iets verkeerd gedaan..."
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
    body: "\"Maar wacht toch eens een momentje even\", <br> dacht Darius, \"ben ik mijn doel niet voorbij aan het streven?\" <br> Een gedachte ontname hem wat van zijn stoom <br> Want <i>hit<\i> zo'n stressvol spel niet wat te <i>close to home!?<\i>?<br>\"Wat is dit spel mijn humeur doet verzuren!?\"",
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
    body: "Oh wat zal iedereen dan vieren <br> met slingers, taarten, dansjes en zwieren,<br> met aapjes en lachen en zingen en bloemen,",
    options: [
      {id: "thesis-END", name:"en men hem dan eindelijk Doctor Darius kan noemen!"}
    ]
  }, {
    id: "thesis-END", title: "",
    body: "Oh. Uhm. Darius besefte zich dat, in zijn haast, <br> hij bijna langs het spel heen was geraasd. <br> Na een moment van rust en wat bezinnen, ",
    options: [
      {id: "intro-01", name:"besloot Darius weer van te beginnen."},
      {id: "END", name:"zou hij toch eindelijk aan het spel beginnen!"}
    ]
  }, {
    id: "apoc-01", title: "TBC",
    body: ""
  }, {
    id: "cbs-01", title: "TBC",
    body: ""
  }, {
    id: "play-01", title: "TBC",
    body: ""
  }, {
    id: "END", title: "DIT IS HET EINDE",
    body: "Wacht, je dacht toch niet dat dit je cadeau was? Pak Stanley's cadeau maar. <br> En zoek een hobby o zo. <br> Of begin opnieuw, ik ben je baas niet.", 
    options: [
      {id: "START", name:"Restart"}
    ]
  }
]
