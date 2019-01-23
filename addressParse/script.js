// 1. Create variables and a formatted address block.
let firstName = "Michael";
let lastName = "Hoffman";
let streetAddress = "4672 Eastern Av. N";
let city = "Seattle";
let state = "WA";
let zipCode = "98103";

// Address block format:
// firstName lastName
// streetAddress
// city, state zip
let addressBlock = firstName + " " + lastName + "\n" + streetAddress + "\n" + city + ", " + state + " " + zipCode;


// 2. Given an address string in format:
// firstName lastName  (no space in either)
// streetAddress
// city, state zip (city and state can have a space)
// eg: 
// let myAddr = 'Matt Schneider\n111 2nd Ave. W\nSeattle, WA 98199'

// get all the string up to the first space
// extract that string into vars.
// use any of: indexOf(), slice(), substring(), 
// "split is much easier"

let addrParts = addressBlock.split('\n');
let fullName = addrParts[0];
console.log("fullName: ", fullName);
let streetAddr = addrParts[1];
console.log("streetAddr: ", streetAddr);
let cityStateZip = addrParts[2];
console.log("cityStateZip: ", cityStateZip);

let firstNm = fullName.substring(0, fullName.indexOf(' '));
console.log("firstNm: ", firstNm);
let lastNm = fullName.substring(fullName.indexOf(' '), fullName.length);
console.log("lastNm: ", lastNm);


let cityResult = cityStateZip.substring(0, cityStateZip.indexOf(' '));
console.log("cityResult: ", cityResult);
let stateResult = cityStateZip.substring(cityStateZip.indexOf(' '), cityStateZip.length);
console.log("stateResult: ", stateResult);
let zipResult = cityStateZip.substring(cityStateZip.indexOf(' '), cityStateZip.length);
console.log("zipResult: ", zipResult);

// Matt's solution:
//"Matt".indexOf('M');

// his nonarray approach:
//let address = 'Matt Schneider\n111 2nd Ave. W\nSeattle, WA 98199';
//const space1Index = address.index(' ');
//let myFirstName = address.slice(0, space1Index);
//const endOfLineIndex = address.indexOf('\n');
//let myLastName = address.slice(space1Index + 1, endOfLineIndex);


// from Zoom Group Chat:
//var fullAddress = `${firstName} ${lastName}
//  ${streetAddress}
//  ${city}, ${state} ${zipCode}`;
//
// fullName = `${firstName} ${lastName}`; // ` backtick
//let mailingAddress = `${fullName}\n${address}`;
//console.log(mailingAddress);


// 3. find the middle date: 

