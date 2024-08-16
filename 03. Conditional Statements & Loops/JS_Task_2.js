// Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
 function checknumber(number){
    if(number > 0){
        return "The number is positive";
 }
 else if(number < 0){
    return "The number is negative";
 }
 else{
    return "The number is zero";
    }
    }
    let number = prompt("Enter a number:"); 
    let result = checknumber((number));
    alert(checknumber(number));


/* --------------------------------------------------------------------------------- */


