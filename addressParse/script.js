// 1. Create variables and a formatted address block.
let firstName = "Michael";
let lastName = "Hoffman";
let streetAddress = "4672 Eastern Av. N";
let city = "New Seattle";
let state = "Old Washington";
let zipCode = "98103";

// Address block format:
// firstName lastName
// streetAddress
// city, state zip
let addressBlock = firstName + " " + lastName + "\n" + streetAddress + "\n" + city + ", " + state + " " + zipCode;

console.log("addressBlock:\n", addressBlock);


// 2. Given an address string in format:
// firstName lastName  (no space in either)
// streetAddress
// city, state zip  (city and state can have a space)
// eg: 
// let myAddr = 'Matt Schneider\n111 2nd Ave. W\nSeattle, WA 98199'

// Get all the string up to the first space.
// Extract that string into variables.
// Use any of: indexOf(), slice(), substring(), split().
// Split is much easier.

console.log("Extracting the fields from the address block: ");

let addrParts = addressBlock.split('\n');
let fullName = addrParts[0];
let streetAddr = addrParts[1];
let cityStateZip = addrParts[2];

let firstNm = fullName.substring(0, fullName.indexOf(' '));
console.log("firstNm: ", firstNm);
let lastNm = fullName.substring(fullName.indexOf(' '), fullName.length);
console.log("lastNm: ", lastNm);

let cityResult = cityStateZip.substring(0, cityStateZip.indexOf(','));
console.log("cityResult: ", cityResult);


let stateZip = cityStateZip.substring(cityStateZip.indexOf(',') + 2, cityStateZip.length);

let stateResult = stateZip.substring(0, stateZip.lastIndexOf(' '));
console.log("stateResult: ", stateResult);

let zipResult = stateZip.substring(stateZip.lastIndexOf(' '), stateZip.length);
console.log("zipResult: ", zipResult);
