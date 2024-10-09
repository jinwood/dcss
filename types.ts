export interface Rule {
  selectors: Selector[];
  declarations: Declaration[];
}

export interface AtRule {
  identifier: string;
  value: string;
}

export interface Selector {
  selector: string;
}

export interface Declaration {
  property: Property;
  value: Value;
}

export interface Property {
  property: string;
}

export interface Value {
  value: string;
}

export interface Comment {
  value: string;
}
