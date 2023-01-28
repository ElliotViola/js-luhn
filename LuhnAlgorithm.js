// First, we need to define the card number.

//let validCardNumber = "5204 4080 8656 6492"
let validCardNumber = "4417 1234 5678 9113"
let invalidCardNumber = "4417 1234 5668 9113"

//because the number is a string, we need to remove white spaces - or only process the numbers!
let spaceStrippedCardNumber = ""
for (let i = 0; i < invalidCardNumber.length; i++) {
    // console.log(i, validCardNumber[i]);
    //only add to the spaceStrippedCardNumber characters that are not "" empty
    const currentCharacter = invalidCardNumber[i];
    if (currentCharacter != " "){
    spaceStrippedCardNumber = spaceStrippedCardNumber+currentCharacter
    }
}console.log(spaceStrippedCardNumber)
//correct up to here

let finalValue = 0;
for (let i = 0; i < spaceStrippedCardNumber.length; i++) {
    const currentCharacter = spaceStrippedCardNumber[i];
    let currentDigit = parseInt(currentCharacter);
    if (currentDigit % 2 == 0) {
        let doubledDigit = (currentDigit * 2).toString();
        let newDigit = 0;
        for (let j = 0; j < doubledDigit.length; j++) {
            newDigit = newDigit + parseInt(doubledDigit[j]);
        }
console.log(newDigit)
        currentDigit = newDigit;
    }
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