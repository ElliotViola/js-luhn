console.log("Hello, welcome to Elliot's Luhn Algorithm! Let's check the below credit card:")
// First, we need to define the card number.

//let validCardNumber = "5204 4080 8656 6492"
let validCardNumber = "5204 4080 8656 6492"
let invalidCardNumber = "4417 1234 5668 9113"
console.log(validCardNumber)
//because the number is a string, we need to remove white spaces - or only process the numbers!
let spaceStrippedCardNumber = ""
for (let i = 0; i < validCardNumber.length; i++) {
//    console.log(i, validCardNumber[i]);
    //only add to the spaceStrippedCardNumber characters that are not "" empty
    const currentCharacter = validCardNumber[i];
    if (currentCharacter != " "){
    spaceStrippedCardNumber = spaceStrippedCardNumber+currentCharacter
    }
}console.log("Here is your card number without any spaces written in it:") 
console.log(spaceStrippedCardNumber)
//correct up to here. Good job us!


let finalValue = 0;

for (let j = 0; j < spaceStrippedCardNumber.length; j++) {
    const currentCharacter = spaceStrippedCardNumber[j];
    let currentDigit = parseInt(currentCharacter);
    // console.log(currentCharacter)
    if (currentDigit % 2 == 0) {
        let doubledDigit = (currentDigit * 2).toString();
        let newDigit = 0;
        for (let k = 0; k < doubledDigit.length; k++) {
            newDigit = newDigit + parseInt(doubledDigit[k]);
        }
console.log(newDigit)
        currentDigit = newDigit;
    }
console.log(currentDigit)
// processed numbers to sum should be: 1204 8070 7616 3492
    finalValue = finalValue + currentDigit;
}
console.log(finalValue);

console.log(finalValue % 10 === 0);
// (skip 16, check 15, skip 14, check 13)

//Next, we need to double every second digit, working backwards


//Then, we need to subtract 9 from any number larger than 9 

//after that, we sum every number together

//finally, we use a modulo % on the final summed total, and if % = 0 then the number is valid