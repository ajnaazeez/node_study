const fs =require("node:fs");
const zlib =require("node:zlib");
const gzip =zlib.creategzip();
const readable=fs.createReadStream("./file.txt",{
   encoding: "utf-8",
   highWaterMark:2,
});
readable
.pipe(gzip) 
.pipe(fs.createWriteStream("./pipe.txt.gz"));
const writable=fs.createWriteStream("./stream.txt");
readable.pipe(writable);
// readable.on("data",(chunk)=>{
//     console.log(chunk);
//     writable.write(chunk);
// });