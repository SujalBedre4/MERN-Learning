const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname, "crud"); //It gives a path of the crud's

const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, "This is just") //This is for creating a file.

// Here, we have create a file inside the directory.


// Now, we want to read the Code:

// fs.readFile(filePath, 'utf-8', (err, item) => {
//     if (err) {
//         return console.error("Error reading files:", err);
//     }
//     console.log(item)
// })


// Now, we want to update a particular file, then here is the Code:
// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if (!err) {
//         console.log("File is updated")
//     }
// });


// Now, we are re - naming the files name:
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("Renamed file successfully")
//     } else {
//         console.error("This is an error:", err)
//     }
// })

// Now, we are deleting a particular file:
// We have changed the file's name from apple..txt -> fruits..txt. So, here is the new code of the filePath

const newPath = `${dirPath}/fruit.txt`;
fs.unlinkSync(newPath)

// This is how we perform all the basic operations on the directories.