var x = 20; // "var" can be re-declared anywhere, and it is mostly used in the global declarationn of the variables
console.log(x);
var x = 40; //Here, you can see that we are re-declaring the x = 40.
console.log(x);

// Now, let's talk about the "let":
let y = 10; //It is used in the local declaration in the functions or loops
// let y = 20; //You can't re-declare 
y = 90;        //But, you can re-assign the value to that one.
console.log(y);

// Now, "const":

const a = 80; //It is some similar to "let", but has very different properties:
// const a = 30; //Here, you can't re-declare the that const with same name again.
// a = 90; //Even though you can't re-assign the value to that same name's variable

console.log(a);

// But, you can make changes in the "object" of the "const"
const mad = {n: 1};
console.log(mad); //It gives an output - { n: 1 }
// Here, you can change the object's value -
mad.n = 3;
console.log(mad); //Here, it gaves an output { n: 3}