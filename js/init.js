const onIdChanged = (cb) => {
  window.addEventListener("hashchange", () => cb(document.location.hash.substring(1)));
}

const choiceElement = document.getElementById("current-choice");

const cyoa = new CYOA(onIdChanged, choiceElement, choices);

const hash = document.location.hash.substring(1) || "001-start";
document.location.hash = `#${hash}`;
cyoa.render(hash);

CYOA.log("initialized");
