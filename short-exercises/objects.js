// writing methods open() and close()

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function(){
        if (umbrella.isOpen === false){
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};

console.log(umbrella.close());

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// a breakfast object

var breakfast = {
    name: "The Lumberjack",
    price: 9.95,
    ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

// add a printAccountSummary() method that returns a message with the balance and interest rate:

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function accountSummary(){
        return `Welcome!
        Your balance is currently $${this.balance} and your interest rate is ${this.interestRatePercent}%.`;
    }
};

console.log(savingsAccount.printAccountSummary());

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

var facebookProfile = {
    name: "Syk Houdeib",
    friends: 400,
    posts: ["2017 almost done", "loading 2018, 12 hours remaining"],
    postMessage: function addMessage(message){
        facebookProfile.posts.unshift(message);
    },
    deleteMessage: function removeMessage(index){
        facebookProfile.posts.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends += 1;
    },
    removeFriend: function(){
        facebookProfile.friends -= 1;
        
    }
};

///////////////\\\\\\\\\\\\\\\\\\\////////////////////

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(donut){
    var summary = `${donut.type} donuts cost $${donut.cost} each`;
    console.log(summary);
});

