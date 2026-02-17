const fs=require("node:fs/promises");
fs.readFile("./greet.txt","utf-8")
.then((data) =>console.log(data))
.catch((err)=>console.log(err));

async function readfile(){
    try{
        const data = await fs.readFile("./file.txt","utf-8")
        console.log(data);
    }catch{
        console.log(err)
    }
}
readfile();