/**
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) 
 * returns the first and last element of that pair. 
 * For example, car(cons(3, 4)) returns 3, 
 * and cdr(cons(3, 4)) returns 4.
 * 
 * Given this implementation of cons:
 * 
 * def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
 *
 * Implement car and cdr.
 */

/**
 *
 * Assumption: Specs mention "last element",
 * but it's really the "second element".
 *
 * Overview:
 * Cons() returns a "passthru" function
 * that gets executed by Car and Cdr
 * and returns one of it's elements.
 */

// From specs.
export function Cons(a, b) {
  return function Pair(f) {
    return f(a, b);
  };
}

// Return first element.
export function Car(cons) {
  return cons((a, b) => a);
}

// Return second element.
export function Cdr(cons) {
  return cons((a, b) => b);
}
