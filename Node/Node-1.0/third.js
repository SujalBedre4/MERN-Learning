var x = 20;
if(x === 20){
    console.log("matched");
}

// Here, we are using the "===", for the "Strict Equality":
// In the abovre it got matched and the answer is "matched"

// Now, if we compare the String with value then it doesn't give an answer:

var y = '229';
if(y === 229){
    console.log("Matched");
}
else{
    console.log("Not matched");
}

// Here, answer is - "not matched" because we are comparing that one for the Strict equality

var z = 30;
if(z == '39'){
    console.log("Done");
}
// The above one doesn't give an answer
console.log(z == '39'); //Here, value is compared and give an answer in the comparision form.

console.log(5 == '54');


console.log(5 == '5'); // true (number 5 is converted to string '5')
console.log(true == 1); // true (boolean true is converted to number 1)
console.log(null == undefined); // true (null and undefined are considered equal)
console.log([1, 2] == '1,2'); // true (array is converted to string '1,2')
