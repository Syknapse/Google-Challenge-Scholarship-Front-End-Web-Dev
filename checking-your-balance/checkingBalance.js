// checking ATM for balance
var checkBalance = true;
var isActive = true;
var balance = 50;

// A- check balance?
if (checkBalance === true){
    // A- Yes - GO TO B
    // B- account active & balance > 0?
    if (isActive === true && balance > 0){
        // B- Yes. PRINT "Your balance is $" + balance + "."
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else {
        // B- No - GO TO C
        // C- account NOT active?
        if (isActive !== true){
            // C- Yes. PRINT "Your account is no longer active."
            console.log("Your account is no longer active.");
        } else {
            // C- No - GO TO D
            // D- balance = 0?
            if (balance === 0){
                // D- Yes. PRINT "Your account is empty."
                console.log("Your account is empty.");
            } else {
                // D- No. PRINT "Your balance is negative. Please contact the bank."
                console.log("Your balance is negative. Please contact bank.");
            }

        }
    }
} else {
    // A- No. PRINT "Thank you. Have a nice day!"
    console.log("Thank you. Have a nice day!");
}


