/**
 * A sorted array-like data structure. Use this module by importing from
 * `@sirpepe/shed/SortedArray` or `@sirpepe/shed`.
 *
 * @module
 */

export class SortedArray<T> {
  #array: T[] = [];
  #compare: (a: T, b: T) => number;

  constructor(array: T[], compare: (a: T, b: T) => number) {
    this.#compare = compare;
    if (array.length > 0) {
      this.insert(...array);
    }
  }

  public insert(...elements: T[]): void {
    if (elements.length === 0) {
      return;
    }

    const [element, ...rest] = elements;
    let high = this.#array.length - 1;
    let low = 0;
    let pos = -1;
    let index, ordering;

    while (high >= low) {
      index = ((high + low) / 2) >>> 0;
      ordering = this.#compare(this.#array[index], element);
      if (ordering < 0) {
        low = index + 1;
      } else if (ordering > 0) {
        high = index - 1;
      } else {
        pos = index;
        break;
      }
    }

    if (pos === -1) {
      pos = high; // if element was not found, high < low
    }

    // Ensures insertion order for equal elements
    pos++;
    high = this.#array.length - 1;
    while (pos < high && this.#compare(element, this.#array[pos]) === 0) {
      pos++;
    }

    index = this.#array.length;
    this.#array.push(element);
    while (index > pos) {
      this.#array[index] = this.#array[--index];
    }
    this.#array[pos] = element;

    if (rest.length > 0) {
      this.insert(...rest);
    }
  }

  public search(element: T): number {
    let high = this.#array.length - 1;
    let low = 0;
    let index, ordering;

    while (high >= low) {
      index = ((high + low) / 2) >>> 0;
      ordering = this.#compare(this.#array[index], element);
      if (ordering < 0) {
        low = index + 1;
      } else if (ordering > 0) {
        high = index - 1;
      } else {
        return index;
      }
    }

    return -1;
  }

  public remove(element: T): void {
    const index = this.search(element);
    if (index !== -1) {
      this.#array.splice(index, 1);
    }
  }

  public toArray(): T[] {
    return Array.from(this.#array);
  }

  public [Symbol.iterator](): Iterator<T> {
    return this.#array[Symbol.iterator]();
  }

  public get length(): number {
    return this.#array.length;
  }

  public shift(): T | undefined {
    return this.#array.shift();
  }
}
