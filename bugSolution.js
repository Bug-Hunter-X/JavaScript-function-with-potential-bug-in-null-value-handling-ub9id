function foo(a, b) {
  // Check for null or other falsy values
  if (a === null || a === undefined || a === 0 || a === "" || isNaN(a) || b === null || b === undefined || b === 0 || b === "" || isNaN(b)) {
    // throw new Error('Invalid input: Arguments must be numbers.'); // Option 1: Throw an error
    return NaN; // Option 2: Return NaN to indicate invalid input
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN
console.log(foo(0,2)); // Output: NaN
console.log(foo(1,"")); // Output: NaN