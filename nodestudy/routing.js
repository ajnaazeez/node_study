const http =require("node:http");
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-TYpe":"text/plain"});
        res.end("home page");
    }else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("about page");
    }else if(req.url==="/api"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.parse({
            "firstname":"ajna",
            "lastname":"azeez"

        }))
    }else{
       res.writeHead(404);
       res.end("page not fount") ;
    }
});
server.listen(8080,()=>{
    console.log("server created")
});