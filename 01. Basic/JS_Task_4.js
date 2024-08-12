// Write a JavaScript program to check a pair of numbers and return true if one of the 
// numbers is 50 or if their sum is 50.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */
function checkPair(num1, num2) {
    // Check if either of the numbers is 50
    return num1 === 50 || num2 === 50 || (num1 + num2) === 50;
}
console.log(checkPair(25,25));
console.log(checkPair(50,10));
console.log(checkPair(20,10));

  

/* --------------------------------------------------------------------------------- */