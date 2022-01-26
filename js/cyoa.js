class CYOA {
  constructor(onIdChanged, choiceElement, choices) {
    this.choices = choices;
    this.choiceElement = choiceElement;
    this.#setupListener(onIdChanged);
  }

  #setupListener(onIdChanged) {
    onIdChanged(this.render);
  }

  render(id) {
    CYOA.log(`id set to ${id}`);
    // todo: actually render a thing
  }

  static log(msg) {
    console.log(`${new Date().toISOString()} - ${CYOA.name}: ${msg}`);
  }
}

CYOA.log("scripts loaded");
