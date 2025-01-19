# Unexpected Null Return in JavaScript Addition Function

This repository demonstrates a subtle bug in a JavaScript addition function that arises from the use of loose equality (`==`) instead of strict equality (`===`).

## Bug Description
The `foo` function is intended to add two numbers. However, it unexpectedly returns `null` if either input is loosely equal to `null` (such as 0, "", or false), not just strictly equal to `null`.

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js` using a JavaScript interpreter (e.g., Node.js).
3. Observe the unexpected `null` outputs.

## Solution
The solution involves replacing the loose equality checks (`==`) with strict equality checks (`===`). This ensures that the function only returns `null` when the inputs are explicitly `null`.

## License
MIT