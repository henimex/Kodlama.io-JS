let sectionTite = "Homeworks"
let dayInfo = "Day 2"
let detailedPrime = false;

console.log("=== Day 2 Homeworks Item 1 ===  Prime Number")
function chekcPrimeNumbersRest(...numbers) {
  
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element %2 !== 0 && element %3 !== 0 && element %5 !== 0 && element %7 !== 0 || (element === 2 || element === 3)) {
            console.log(`${element} :\tis Prime `)
        }
        if (detailedPrime) {
            if (element %2 === 0 && element !== 2) {
                console.log(`${element} \tdivided [2]. \t${element} \t: is NOT Prime `)
            } else if (element %3 === 0 && element !== 3){
                console.log(`${element} \tdivided [3]. \t${element} \t: is NOT Prime`)
            } else if (element %5 === 0 && element !== 5){
                console.log(`${element} \tdivided [5]. \t${element} \t: is NOT Prime`)
            } else if (element %7 === 0 && element !== 7){
                console.log(`${element} \tdivided [7]. \t${element} \t: is NOT Prime`)
            }
        }
  
    }
    console.log("All Numbers Checked for Prime Rest Function")
}

chekcPrimeNumbersRest(1,2,5,11,14,17,47,73,97)



console.log("\n\n=== Day 2 Homeworks Item 2 === Friend Number")

function findDividers(number){
    let dividers = [];
    for (let i = 1; i < number; i++) {

        if (number %i === 0) {
            dividers.push(i)
        }
   }
   return dividers.reduce((a,b) => a+b,0)
}


function findFriendNumber(number) {

    let unConfirmedFriend = findDividers(number)
    let recheckedDividers = findDividers(unConfirmedFriend)

    if (number === recheckedDividers && number !== unConfirmedFriend) {
        console.log(`Friend Numbers Found \nFirst Number \t\t:${number} \nFriend Number is \t:${unConfirmedFriend}`)
        return true;
    }
    
}

function searchForFriendNumbers(startNumber,endNumber) {
    let count = 0;
    console.log(`Search Started Between ${startNumber} ${endNumber} `)
    for (let i = startNumber; i <= endNumber; i++) {
        if (findFriendNumber(i)) {
            count++;
        }
    }
    console.log(`Search Completed Total : ${count/2} Unique Friend Numbers Fouund`)
}

function areTheeseNumbersAreFriends(number1,number2){
    if (findDividers(number1) === number2){
        console.log(`${number1} and ${number2} are Friends`)
    } else {
        console.log(`${number1} and ${number2} are NOT Friends`)
    }
}

searchForFriendNumbers(200,2925)
areTheeseNumbersAreFriends(220,285)

console.log("\n\n=== Day 2 Homeworks Item 3 === Perfect Number")

function perfectNumber(number) {
    let tempPerfect = 0;

    for (let i = 0; i <= number; i++) {
       if (number %i === 0) {
           tempPerfect +=i
       }
    }

    if (tempPerfect === number * 2) {
        console.log(`${number} is a Perfect Number`)
    } 
}

function findPerfectNumbers(startNumber, endNumber) {
    for (let i = startNumber; i <= endNumber; i++){
        perfectNumber(i)
    }
}

perfectNumber(12)
findPerfectNumbers(1,1000)

console.log("\n\n=== Day 2 Homeworks Item 4 === Prime Number Example")

function randeDetermer(startNumber,endNumber) {
    let numbersArray = [];
    for (let i = startNumber; i <= endNumber; i++) {
        numbersArray.push(i)
    }
    return numbersArray
}

function chekcPrimeNumbersArray(numbers) {
  
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];

        if (element %2 !== 0 && element %3 !== 0 && element %5 !== 0 && element %7 !== 0 || (element === 2 || element === 3)) {
            console.log(`${element} :\tis Prime `)
        }
        if (detailedPrime) {
            if (element %2 === 0 && element !== 2) {
                console.log(`${element} \tdivided [2]. \t${element} \t: is NOT Prime `)
            } else if (element %3 === 0 && element !== 3){
                console.log(`${element} \tdivided [3]. \t${element} \t: is NOT Prime`)
            } else if (element %5 === 0 && element !== 5){
                console.log(`${element} \tdivided [5]. \t${element} \t: is NOT Prime`)
            } else if (element %7 === 0 && element !== 7){
                console.log(`${element} \tdivided [7]. \t${element} \t: is NOT Prime`)
            }
        }
  
    }
    console.log("All Numbers Checked for Prime")
}

chekcPrimeNumbersArray(randeDetermer(1,1000))
