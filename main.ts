import { CSSRuleParserStateMachine } from "./tokenizer.ts";

const rule = `
    .example {
    color: red;
    font-size: 16px;
    margin: 10px 5px;
  }
`;

const parser = new CSSRuleParserStateMachine();

console.log(parser.parse(rule));
console.log(parser.getParseResult());
