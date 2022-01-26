const onIdChanged = (cb) => {
  window.addEventListener("hashchange", () => cb(document.location.hash.substring(1)));
}

const choiceElement = document.getElementById("current-choice");

const cyoa = new CYOA(onIdChanged, choiceElement, [
  {
    id: "001-start",
    title: "Welkom!",
    text: "Dit is het begin van dit kies-je-eigen-avontuur",
    options: [
      { id: "002-nope-im-out", name: "NOPE!" },
      { id: "003-yes-lets-go", name: "Let's GOOOO!" }
    ]
  }, {
    id: "002-nope-im-out",
    title: "Nope I'm out!",
    text: "kthnxbye"
  }, {
    id: "003-yes-lets-go",
    title: "Yes! Let's go!",
    text: "Cool :)",
    options: [
      { id: "005-id-only-test" },
      { name: "Name only test" },
      {}
    ]
  }
]);

CYOA.log("initialized");
