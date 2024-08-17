// Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */   
function checkVowel() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let char = prompt("Enter any alphabet: ");
    char = char.toLowerCase();
    if (vowels.includes(char)) {
        return true;
        } else {
            return false;
            }
    }
checkVowel();
/* --------------------------------------------------------------------------------- */