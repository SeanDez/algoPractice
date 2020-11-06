/*
  Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()
*/

/*
Problem
returns result of base to exponent

Algorithm
the below base case 2 ** 0 returns 0
This is handled via guard clause

the actual base case 2 ** 1 returns 2
2 ** 2 === 4
2 ** 3 === 16

base case, exp 1, returns 2
exp 2 returns 2 & base
exp 3 returns 3 & exp 2


*/


/*
  Returns the power of the base to the exponent
*/
function power(base: number, exponent: number): number {
  if (exponent === 0) { return 1; }
  if (exponent === 1) { return base; }

  return (base * power(base, exponent - 1));
}


// TEST CASES
// console.log(power(2,0), // 1
//   power(2, 2), // 4
//   power(2, 4), // 16
//   power(2, 8), // 256
//   power(2, 10), // 1024
// );

// =============================================================================

/*
 which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 
*/



function factorial(n: number): number {
   // base case: 1. return 1
   if (n === 1) { return 1; }

  // recursive stack. multiply n by result of all previous smaller
  return n * factorial(n - 1); // all smaller n's until 1
}

// console.log(
//   factorial(1), // 1
//   factorial(2), // 2 // + 1
//   factorial(3), // 6. + 3
//   factorial(4), // 24 + 18
//   factorial(5), // 120 + 102
//   factorial(6), // 72-
//   factorial(7), // 5040
// );


/**
 * Returns product of all array items
 * 
 */

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

/**
 * For each number, multiple by previous numbers
 * base case of length 1. return numbers[0] * numbers
 * case 2: 2 * 1
 * case 3: 3 * 2
 * case 4: 4 * 6
 */


function productOfArray(numbers: number[]): number {
  // base case of 1
  if (numbers.length === 0) { return 1; }

  const firstNumber = numbers.shift();
  return firstNumber! * productOfArray(numbers);
}

// console.log(
//   productOfArray([1,2,3]), // 6
//   productOfArray([1,2,3,10]) // 60
// );

// ============================================================


/**
 * 0 = 0
 * 1 = 1
 * 2 + 1 = 3
 * 3 + 2 + 1 = 6
 * 4 = 10
 * 5 = 15
 * 6 = 21
 */


function recursiveRange(n: number): number {
   if (n === 0) { return 0; }
   if (n === 1) { return 1; }

   return n + recursiveRange(n - 1);
}

// SAMPLE INPUT/OUTPUT
console.log(
  // recursiveRange(6), // 21
  // recursiveRange(10), // 55 
)

// ================================================




function fib(n: number): number {
  if (n <= 2) { return 1; }

  return fib(n - 1) + fib(n - 2);
}

console.log(
  fib(4), // 3
  fib(10), // 55
  fib(28), // 317811
  fib(35), // 9227465
)









