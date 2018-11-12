/**
 * Without modifying the cities object,
 * fix the code from errors and make it match the expected end result.
 * 
 * End result should be:
 * - If Oulu has districts, print the first district
 * - If not, show an error with message "Error!"
 */

// DO NOT EDIT THIS OBJECT
const cities = {
    "Oulu": {
        population: 199526,
        districts: null
    },
    "Tampere": {
        population: 226696,
        districts: [
            "Osmonmäki", "Ruotula", "Hakametsä" // and so on
        ]
    }
};

let oulu = Cities.oulu;

if (typeof oulu.districts === "object") {
    let firstDistrict = oulu.districts[0];
    console.log(firstDistrict);
} else {
    console.error("Error!");
}