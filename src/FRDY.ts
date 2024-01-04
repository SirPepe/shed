/**
 * A JSON-based protocol that allows stringification and parsing of ECMAScript
 * maps and sets, in addition to everything else that's valid ECMAScript. Freddy
 * is way less universal than JSON, but that is the price for at least allowing
 * the exchange of maps and sets between ECMAScript environments. Use this
 * module by importing from `@sirpepe/shed/FRDY`.
 *
 * @module
 */

type Revivable = {
  "@@__frdy_reviver": 0;
  entries: any[];
};

function isRevivable(value: unknown): value is Revivable {
  if (
    typeof value === "object" &&
    value !== null &&
    "@@__frdy_reviver" in value
  ) {
    return true;
  }
  return false;
}

export function replacer(_: string, value: unknown): any {
  if (value instanceof Map) {
    return {
      "@@__frdy_reviver": 0,
      entries: Array.from(value.entries()),
    };
  }
  if (value instanceof Set) {
    return {
      "@@__frdy_reviver": 1,
      entries: Array.from(value.entries()),
    };
  }
  return value;
}

export function stringify(input: unknown, space?: string | number): string {
  return JSON.stringify(input, replacer, space);
}

export function reviver(_: string, value: unknown): any {
  if (isRevivable(value)) {
    if (value["@@__frdy_reviver"] === 0) {
      return new Map(value.entries);
    }
    if (value["@@__frdy_reviver"] === 1) {
      return new Set(value.entries);
    }
  }
  return value;
}

export function parse(input: string): any {
  return JSON.parse(input, reviver);
}
