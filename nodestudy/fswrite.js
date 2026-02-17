const fs = require("node:fs");

const result= fs.writeFileSync("./greet.txt","hello world");
console.log(result);
fs.writeFile("./greeting/file.txt","hello write fs",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file written");
    }
});