const fs = require("node:fs");
const contents=fs.readFileSync('./file.txt','utf-8');
console.log(contents);
fs.readFile("./file.txt","Utf-8",(error,data)=>{
    if(error){
        console.log( "there is an error",error);
    }else
    console.log(data);

});