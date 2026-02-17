const http=require("node:http");
const fs =require("node:fs");
const server=http.createServer((req,res)=>{
    const name="ajna";
    res.writeHead(200,{"Content-Type": "text/html"});
    let html=fs.readFileSync("./index.html","utf-8")
    html=html.replace("{{name}}",name);
    res.end(html);
});
server.listen(8030,()=>{
    console.log("server is crested");
});
