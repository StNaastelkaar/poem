const choices = [
  { id: "undefined",
    title: "You dun goofed",
    body: "'t huidige id is 'undefined', je hebt dus iets verkeerd gedaan..."
  }, {
    id: "START",
    title: "WELKOM NIEUWE SPELER",
    body: "Klik \"START\" om een nieuw spel te beginnen.",
    options: [
      { id: "intro-001", name: "START" }
    ]
  }, {
    id: "intro-001",
    title: "Tutorial",
    body: "Toen Darius dit spel tot zich nam <br> schrok hij zich een hoedje-lam. <br> Toen hij twee keuzes voor zich zag,",
    options: [
      { id: "intro-002", name: "verscheen er bij hem een brede lach!" },
      { id: "intro-003", name: "raakte hij toch wat van slag!" }
    ]
  }, {
    id: "intro-002",
    title: "",
    body: "\"Dit is leuk\", zij hij, \"dit is uniek\"!",
    options: [
      { id: "intro-004", name: "vertelde hij aan zijn publiek" }
    ]
  }, {
    id: "intro-003",
    title: "",
    body: "Hij naam een diepe ademteug en bedaarde snel,",
    options: [
      { id: "intro-004", name: "en begon met goede moet aan zijn nieuwe spel." }
    ]
  }, {
    id: "intro-004",
    title: "",
    body: "TO BE CONTINUED"
  }
]
