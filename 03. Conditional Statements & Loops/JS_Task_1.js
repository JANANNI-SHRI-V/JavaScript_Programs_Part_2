// Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function check(input){
    const char = input.toString().charAt(0);
    const ascii = char.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
        return "Number";
}
else if (ascii >= 65 && ascii <= 90) {
    return "Uppercase Letter";
}
else if (ascii >= 97 && ascii <= 122) {
    return "Lowercase Letter";
}
else {
    return "Neither";
    }
    }
    console.log(check("A"));
    console.log(check('a'));
    console.log(check('1'));
    console.log(check('@'));
/* --------------------------------------------------------------------------------- */


