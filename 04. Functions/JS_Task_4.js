// Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.

// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    
function Longest_Country_Name(countryList) {
    let longestCountry = "";
    for (let country of countryList) {
        if (country.length > longestCountry.length) {
            longestCountry = country;
            }
            }
            return longestCountry;
            }
let userinput = prompt("Enter the name of countries, separated by commas : ");
let countryList = userinput.split(",");
Longest_Country_Name(countryList);



/* --------------------------------------------------------------------------------- */