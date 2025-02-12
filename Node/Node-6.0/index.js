// console.log("Start time...")

// console.log("Logic time...") 
// Now, we are using to execute our program delay


// Here, we are using a setTimeout();

// setTimeout(() => {
//     console.log("logic time...")
// }, 2000) //Here, 2000 is a mili second.

// console.log("Complete time...")

// Now, for the Drawback, we are working on that thing

let a = 10
let b = 0

// Now, we are handling the excptions to get an exact output that we want. So, we are using Promise to solve this..


// This Promise wait for a particular result and then it executes an output.
let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        b = 30;
        resolve(30); //Here, we can pass other data - types also like Array, Variables, and Strings
    }, 2000)
})

waitingData.then((data) => {
    b = data;
    console.log(a + b)
})
