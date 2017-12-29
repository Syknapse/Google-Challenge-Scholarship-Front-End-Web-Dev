// Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.
function laugh(){
    var haha = "hahahahahahahahahaha!";
    return haha;
}

console.log(laugh());

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

/* Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 
Note:
 make sure your the final character is an exclamation mark ("!")
 */
function laugh(num){
    var laughing = "";
    for (var i = 1; i <= num; i++){
        laughing += "ha";
    }
     return laughing + "!";
}

console.log(laugh(3));

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// HOISTING: Function declarations are hoisted to the top of the current scope. Variable declarations are hoisted to the top of the current scope but not the assignment.
// Declare functions and variables at the top of the script 
// Function expressions are NOT hoisted (functions assigned to a variable)

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

/*
 * Programming Quiz: Build A Triangle: accept an input (the triangle at its widest width) and return the string representation of a triangle
 */

// create a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// build triangle function
function buildTriangle(width){
    // Triangle variable to store result of triangle building function
    var triangle = "";
    // run makeLine from 1 to given width
    for (var i = 1; i <= width; i++){
       triangle += makeLine(i);
    }
   return triangle;
}

console.log(buildTriangle(10)); // console logs a triangle with a base of 10

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s passed in as an argument

var laugh = function(num){
    var laughing = "";
    for(var i = 1; i <= num; i++){
        laughing += "ha";
    }
    return laughing + "!";
};

console.log(laugh(3));

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// a named function expression that stores the function in a variable called cry and returns "boohoo!". Call the function using the variable name, not the function name:

var cry = function startCrying(){
    return "boohoo!";
};

console.log(cry());

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// Call the emotions() function so that it prints "I am happy, haha!", but instead of passing the laugh() function as an argument, pass an inline function expression.

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// call the emotions function here and pass in an
// inline function expression
emotions("happy", function(num){
    var laughing = "";
    for(var i = 1; i <= num; i++){
        laughing += "ha";
    }
    return laughing + "!";
});