//VARIABLE DECLARATIONS
// console.log(`hello world from the index, ${name}!`);

//old skool way - function scope or global scope
var name = "Jess";

//2 new declarations as of ES6 - let and const are block scope
let dog = "Sadie"; //can be reassigned, like a nickname
// console.log('dog1', dog)
dog = "Ruby";
// console.log('dog2', dog)


const cat = "Garfield"; //cannot be reassigned, like your legal name
// console.log(cat);

//---------------------------------------------------------------------
//DATA TYPES
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures

//Primitive Data Types

//1. A string is basically text
let chat = 'hello chat!'
chat = "Chat is the best!"
chat = `Chat says hi to ${dog}` //template literal - string that has variables

//2. A number is whole number (1, 25, 867) and/or a decimal
let chatScore = 500
// console.log(chatScore)
chatScore = chatScore + 3.14159
// console.log(chatScore)

//3. Boolean is true(1) or false(0)
let isChatLearning = true;

const doesJessLikeRaisins = false;
const doesLikeIRS = false;

// console.log(doesLikeIRS);

if(doesLikeIRS){
    !doesLikeIRS
} else {
    doesLikeIRS
}

//4. Null means nothing! nothing is an intention absence aka nothing on purpose - will have a typeof object due to a bug in the language
let nothing = null;
// console.log(typeof nothing) 

//5. Undefined means idk what my value is - nothing by accident, needs investigating or handled - can also be an uninitialized variable
let love; //declared but not initialized

// console.log(love);
// console.log(typeof love);

//6. Symbol is a unique and mutable identifier, primiarily for object keys (aka properties) - a mutable value can be changed without creating an entirely new value
//https://developer.mozilla.org/en-US/docs/Glossary/Mutable
    const sym1 = Symbol("description");
    const sym2 = Symbol("description");
    //console.log(sym1 === sym2); They are not the same

//7. BigInt is a built-in object to represent very large numbers, like a google, accurately
    const largeNumber = 123456789012345678901234567890n; // Appending 'n' makes it a BigInt
    // console.log(largeNumber); logs the value
    // console.log(typeof largeNumber); bingint type

//STRING CONCATENTATION & TEMPLATE LITERALS
//string concatenation is a big word for adding strings together
chat = 'chat says hi to ' + dog
chat = `Chat says hi to ${dog}` //template literal - string that has variables

//FORMATTING NUMBERS IN JAVASCRIPT (JS)
//1. Precision (Decimal Places)
    const num = 123.45678;
    const preciseNum = num.toFixed(2);
    const paddedNum = num.toFixed(5); 
    
    Math.trunc(num) //chops off the decimal and gives us a whole number

    //Rounding - Math.floor, Math.ceil, and Math.round
    //Math.round() is going to round to the nearest integer(whole number)
    Math.round(5.95), Math.round(5.5), Math.round(5.05) //6, 6, 5

    //Math.floor - round down to the nearest int
    //Math.ceil - round up to the nearest int


//2. Padding (Leading/Trailing Characters)
    const numDos = 5;
    const paddedNumDos = String(numDos).padStart(3, '0'); //"005"
    const omnomnom = parseInt(paddedNumDos); //5

//3. Alignment aka String Manipulation 
    function rightAlign(num, width) {
        const str = String(num);
        return str.padStart(width, ' ');
    }

    rightAlign(123, 10); // "       123"

//4. Internationalization and Advanced Formatting
    const number = 123456.789;

    // Currency formatting
    const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(number); // "$123,456.79"

    const germanCurrency = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR'}).format(number,)

    // Significant digits
    const significantDigits = new Intl.NumberFormat('en-US', {
        minimumSignificantDigits: 3,
        maximumSignificantDigits: 3
    }).format(number); // "123,000"