const fs = require('fs')
// fs.writeFileSync("apple.txt","This is an apple.txt file") //-> It creates a file with given text

// Now, we are creating a 10 - 15 filse at a time:
const path = require('path')
// Now, we are taking the path

// const dirPath = path.join(__dirname) //This gives me the path of the directorie's where code is running.
// -> Here, we are getting a Path of the current directory. 

// console.warn(dirPath) 

const dirPath = path.join(__dirname, 'files') //Here, we are getting the path of 
// // console.log(dirPath)

// for (i = 0; i < 5; i++) {
//     // fs.writeFileSync("apple.txt","A simple text file through the loop ")
//     // The above is executed at least 5 times and it overwrite again and again same fies
//     // Now, we are creating a Dynamic file.
//     // fs.writeFileSync("apple" + i + ".txt", "A simple text file through the loop ")
//     // Or use the given below syntax:
//     // fs.writeFileSync(`apple${i}.txt`, "A simple text file through the loop ")
//     // Here, we are running the code in the same directory that's why we didn't give the dirctorie's path.
//     //fs.unlinkSync(`apple${i}.txt`, "A simple text file through the loop ") //Here, we are deleting those files.

//     // Now, we are creating files in the Particular directorie's path:
//     // fs.writeFileSync(dirPath, "apple" + i + ".txt", "A simple text file through the loop ")
//     // fs.writeFileSync(dirPath + `apple${i}.txt`, "A simple text file through the loop ")

//     const filePath = path.join(dirPath, `apple${i}.txt`)
//     fs.writeFileSync(filePath, "A simple text file through the loop")

// }

// Now, we are reading the file's content:
fs.readdir(dirPath, (err, files) => {
    // console.warn(files); //Here, we are getting a files in the format of an array. What if you just want a single file.\
    files.forEach((item) => {
        console.log("File name is:",item);
    })
})

