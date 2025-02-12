console.log("Code"); //It only run in the console
// Nnow, we are just want some infromation about files of this program,
// First is NodeJS's file's location and where the File of the Node JS is getting saved.

console.log(process.argv); //argv = It means "argument vector"

// Now, we can take the paricular input as an an input 
// By running the "node file_name.js argument"
// E.g.: node index.js Hello -> It will give an input.
// Try this one command also:
// node index.js Hello Hi
console.log(process.argv[2]);


