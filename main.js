let number = prompt("Enter Number in between 1 and 999");
let ten = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let tenWords = ["", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine"];
let btwTenAndTwenty = ["", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"];
let btwTwentyAndHundred = ["", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety"];


let numberArray = number.split("")

test();
function hundred() {
    let finalNumber = "";
    let numberArray = number.split("")
    //First boucle pour les hundrerd
    for (i = 0; i < 11; i++) {
        if (ten[i] === numberArray[0]) {
            finalNumber = tenWords[i] + " hundred";
            i = 11;
        }
    }
    console.log(finalNumber)
    // SI modulo = 0 alors c'est 20 30 40 50 60 70 etc...
    if (number % 10 === 0) {
        for (y = 0; y < 11; y++) {
            if (ten[y] === numberArray[1]) {
                finalNumber = finalNumber + btwTwentyAndHundred[y];
                y = 11;
            }
        }
        console.log(finalNumber)
    }
    //SInon si = 1 alors c'est 11 12 13 14 15 16 17 etc...
    else if (number[1] == 1) {
        for (j = 0; j < 11; j++) {
            if (ten[j] === numberArray[2]) {
                finalNumber = finalNumber + btwTenAndTwenty[j];
                j = 11;
            }
        }
        console.log(finalNumber)
    }
    //Sinon c'est le reste
    else {
        console.log("im in ")
        for (k = 0; k < 11; k++) {
            if (ten[k] === numberArray[1]) {
                finalNumber = finalNumber + btwTwentyAndHundred[k];
                k = 11;
            }
        }
        for (u = 0; u < 11; u++) {
            if (ten[u] === numberArray[2]) {
                finalNumber = finalNumber + tenWords[u];
                u = 11;
            }
        }
    }
    return finalNumber;
}

function deuxChiffre() {
    let finalNumber = "";
    let numberArray = number.split("")
    // SI modulo = 0 alors c'est 20 30 40 50 60 70 etc...
    if (number % 10 === 0) {
        for (y = 0; y < 11; y++) {
            if (ten[y] === numberArray[0]) {
                finalNumber = finalNumber + btwTwentyAndHundred[y];
                y = 11;
            }
        }
        console.log(finalNumber)
    }
    //SInon si = 1 alors c'est 11 12 13 14 15 16 17 etc...
    else if (number[0] == 1) {
        for (j = 0; j < 11; j++) {
            if (ten[j] === numberArray[1]) {
                finalNumber = finalNumber + btwTenAndTwenty[j];
                j = 11;
            }
        }
        console.log(finalNumber)
    }
    //Sinon c'est le reste
    else {
        console.log("im in ")
        for (k = 0; k < 11; k++) {
            if (ten[k] === numberArray[0]) {
                finalNumber = finalNumber + btwTwentyAndHundred[k];
                k = 11;
            }
        }
        for (u = 0; u < 11; u++) {
            if (ten[u] === numberArray[1]) {
                finalNumber = finalNumber + tenWords[u];
                u = 11;
            }
        }
    }
    return finalNumber;
}

function single() {
    let finalNumber = "";
    let numberArray = number.split("")
    for (i = 0; i < 11; i++) {
        if (ten[i] === numberArray[0]) {
            finalNumber = tenWords[i];
            i = 11;
        }
    }
    return finalNumber;
}

function test() {
    if (numberArray.length === 3) {
        alert(hundred());
    }
    else if (numberArray.length === 2) {
        alert(deuxChiffre());
    }
    else {
        alert(single());
    }

    number = prompt("Give me un number")
    test();
}

