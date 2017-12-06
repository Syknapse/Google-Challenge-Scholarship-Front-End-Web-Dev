var x = 1;

while (x <= 20) {
    // check divisibility
    if (x % 15 === 0){
    // print Julia, James, or JuliaJames
        console.log("JuliaJames");
    } else if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0) {
        console.log("James");
    } else {
        console.log(x);
    }
    // increment x
    x++
}