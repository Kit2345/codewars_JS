/* Description */

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

/* Solution */

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  let expo = a;
  if (b === 0) {
    return 1;
  } else if (b === 1) {
    return a;
  } else {
    for (let i = 2; i <= b; i++) {
      expo *= a;
    }
  }
  return expo;
}

function subt(a, b) {
  return a - b;
}
