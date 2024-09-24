/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */

class Counter {
  constructor() {
    this.map = new Map();
  }

  set(key, value) {
    this.map.set(key, value);
  }

  get(key) {
    return this.map.get(key) || 0;
  }

  has(key) {
    return this.map.has(key);
  }

  increment(key) {
    this.set(key, this.get(key) + 1);
  }

  decrement(key) {
    this.set(key, this.get(key) - 1);
  }
}

export default function nonUniqueElements(data) {
  if (
    !Array.isArray(data) ||
    !data.every((i) => typeof i === "number" && !isNaN(i))
  ) {
    return false;
  }

  const counter = data.reduce((acc, num) => {
    acc.increment(num);
    return acc;
  }, new Counter());

  return data.filter((num) => counter.get(num) > 1, {});
}

