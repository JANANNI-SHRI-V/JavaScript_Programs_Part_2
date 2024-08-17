// Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  
let num1 = prompt("enter number1:");
let num2 = prompt("enter number2:");
function largerNumber(num1, num2) {

    if (num1 > num2) {
        alert(num1 ," is larger.");
        } else if (num2 > num1) {
            alert(num2 ," is larger.");
            } else {
                alert("Both numbers are equal.");
                }
                }
largerNumber();

/* --------------------------------------------------------------------------------- */