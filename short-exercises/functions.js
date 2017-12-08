// Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.
function laugh(){
    var haha = "hahahahahahahahahaha!";
    return haha;
}

console.log(laugh());

/* Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 
Note:
 make sure your the final character is an exclamation mark ("!")
 */
var laughing = "";

function laugh(num){
    for (var i = 1; i <= num; i++){
        laughing += "ha";
    }
     return laughing + "!";
}

console.log(laugh(18));