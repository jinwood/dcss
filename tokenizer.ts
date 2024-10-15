enum State {
  Start,
  Selector,
  OpenBrace,
  PropertyName,
  Colon,
  PropertyValue,
  Semicolon,
  CloseBrace,
  Accept,
  Reject,
}

export class CSSRuleParserStateMachine {
  private state: State = State.Start;
  private currentToken: string = "";
  private selector: string = "";
  private properties: { [key: string]: string } = {};
  private currentProperty = "";

  // parse each char of input and attempt to transition
  // set state accordingly
  parse(input: string): boolean {
    for (const char of input) {
      this.transition(char);
      if (this.state === State.Reject) {
        return false;
      }
    }

    return this.state === State.Accept;
  }

  // state transition logic based on current state
  // and given character
  private transition(char: string): void {
    switch (this.state) {
      case State.Start:
        if (char.trim() !== "") {
          this.state = State.Selector;
          this.currentToken += char;
        }
        break;
      default:
        this.state = State.Reject;
    }
  }

  // return typed object based off input
  getParseResult(): {
    selector: string;
    properties: { [key: string]: string };
  } {
    return {
      selector: this.selector,
      properties: this.properties,
    };
  }
}
