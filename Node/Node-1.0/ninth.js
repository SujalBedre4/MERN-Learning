// Now, we are printing the name of the directory where we are performing these operations:
console.log(__dirname) //The output is the: /home/keren/Code/Node-1.0

// Another way to create a write file:
const gs = require('fs').writeFileSync
gs("Sunny.txt","She is no. one for just")