//Loop that produces !12 (12 factorial)
var solution = 1;

for (var x = 1; x < 13; x++){
   solution *= x;
}

console.log(solution);

// Theatre seats
// A loop to produce all seat numbers. 0-25 rows with 0-99 seats in each
//outputs 0-0 0-1 0-2 ... 25-98 25-99
for (var r = 0; r < 26; r++){
    for (var s = 0; s < 100; s++){
        console.log(r + "-" + s);
    }
}