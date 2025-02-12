const os = require('os')
// console.log(os)
console.log(os.freemem()/(1024*1024*1024)) //Just some memeory
console.log(os.totalmem()/(1024*1024*1024)) //Shows the totla memory in the system.

// Now, checking the HOSTName
console.log(os.hostname())
console.log(os.platform())

console.log(os.userInfo())