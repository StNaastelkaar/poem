const CYOA = function CYOA(onIdChanged, choiceElement, choices) {
  const self = this;
  self.choices = choices;
  self.choiceElement = choiceElement;
  self.choicesDict = choices.reduce((prev, curr) => {
    prev[curr.id] = curr;
    return prev;
  } , {})

  self.render = function(id) {
    id = decodeURIComponent(id);
    CYOA.log(`id set to ${id}`);

    const title = self.choiceElement.getElementsByClassName("title")[0];
    const body = self.choiceElement.getElementsByClassName("body")[0];
    const options = self.choiceElement.getElementsByClassName("options")[0];

    const choice = self.choicesDict[id];

    title.innerHTML = choice.title;
    body.innerHTML = choice.body;
    options.innerHTML = (choice.options || []).map(createChoiceOption).join("\n");
  }

  const createChoiceOption = (option) => {
    return `<li><a href="#${encodeURIComponent(option.id) || ""}">${option.name || option.id}</a></li>`;
  }

  const setupListener = (onIdChanged) => onIdChanged(self.render);
  setupListener(onIdChanged);
}

CYOA.log = (msg) => console.log(`${new Date().toISOString()} - ${CYOA.name}: ${msg}`);

CYOA.log("scripts loaded");
