# JavaScript Function with Potential Null Value Handling Bug

This repository demonstrates a JavaScript function with a potential bug related to handling null values and provides a solution.

## Bug Description

The `foo` function attempts to handle null values by returning 0 if either `a` or `b` is null. However, it does not explicitly handle other falsy values, which might lead to incorrect calculations.  The function's behavior with falsy values is undefined and could produce unexpected results depending on the context.

## Bug Solution

The solution presented in `bugSolution.js` either explicitly checks for all falsy values (0, "", false, undefined, NaN) or throws an error, providing more robust handling of unexpected input.

## How to Run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Execute the functions to observe their behavior with various inputs, including null and other falsy values.
