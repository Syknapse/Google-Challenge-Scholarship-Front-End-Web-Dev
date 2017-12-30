// A function to return true if array is 7 or longer, false otherwise

/*
function hasEnoughPlayers(arr){
    if(arr.length >= 7){
        return true;
    }else {
        return false;
    }
}
*/
/*
// simpler    
function hasEnoughPlayers(arr){
    return arr.length >= 7 ? true : false;
}
*/

// simplest
function hasEnoughPlayers(arr){
    return arr.length >= 7;
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

console.log(hasEnoughPlayers(team));

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// forEach() ************

// example
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});
// Prints:
// Word 0 in cat,in,hat is cat
// Word 1 in cat,in,hat is in
// Word 2 in cat,in,hat is hat

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// add 100 to each of the values of array test if the value is divisible by 3.
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(number, index, array){
    if (number % 3 === 0){
        array[index] = number += 100;
    }
}); 

console.log(test);

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// take the array of bill amounts, and create a second array of numbers called totals that shows the bill amounts with a 15% tip added, max 2 decimals.
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(bill){
    var tip = bill * 0.15;
    total = bill += tip;
    return Number(total.toFixed(2));
});

console.log(totals);

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// replace all of the values of array numbers that are divisible by 2 (even numbers) with the string "even" and all other numbers with the string "odd".

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

/*
function oddOrEven(){
    for(var row = 0; row < numbers.length; row++){
        for(var column = 0; column < numbers[row].length; column++){
            if(numbers[row][column] % 2 === 0){
                numbers[row][column] = "even";
            } else {
                numbers[row][column] = "odd";
            }
        }
    }
}

oddOrEven();
console.log(numbers);
*/

// simpler
for(var row = 0; row < numbers.length; row++){
    for(var column = 0; column < numbers[row].length; column++){
        numbers[row][column] = numbers[row][column] % 2 === 0 ? "even" : "odd";
    }
}

console.log(numbers);