const http=require("node:http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello node");
});
server.listen(8080,()=>{
    console.log("server is created on port 6000")
});