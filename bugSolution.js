function foo(a, b) {
  if (a === null || b === null) {
    return null;
  }

  //Added explicit type checking and handling
  if(typeof a !== 'number' || typeof b !== 'number'){
    return 'Invalid input type';
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(0,2)); // 2
console.log(foo('',2)); // Invalid input type
console.log(foo(false, 2)); // Invalid input type