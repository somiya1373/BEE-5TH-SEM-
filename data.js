// assignment 
// write data in file using fs module, but input data should be taken using terminal 

const fs=require("fs");

// method of shifting. Shift removes the elements from the starting index.
process.argv.shift();
process.argv.shift();
let str= process.argv.toString().replace(/,/g, " ");
fs.writeFile("./assign", str, function(err){
    if(err) return console.log(err);
    console.log("Done");
})