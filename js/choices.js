const choices = [
  { id: "undefined",
    title: "You dun goofed",
    body: "'t huidige id is 'undefined', je hebt dus iets verkeerd gedaan..."
  },
  {
    id: "001-start",
    title: "START",
    body: "Toen Darius dit gedicht voor zich nam <br> schrok hij zich bijna lam. <>",
    options: [
      { id: "002-nope-im-out", name: "NOPE!" },
      { id: "003-yes-lets-go", name: "Let's GOOOO!" }
    ]
  }, {
    id: "002-nope-im-out",
    title: "Nope I'm out!",
    body: "kthnxbye"
  }, {
    id: "003-yes-lets-go",
    title: "Yes! Let's go!",
    body: "Cool :)",
    options: [
      { id: "005-id-only-test" },
      { name: "Name only test" },
      { id: "001-start" },
      { id: "003-yes-lets-go" }
    ]
  }
]
