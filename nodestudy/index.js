const EventEmitter =require("node:events");
const emitter = new EventEmitter()
emitter.on("order placede",(size,topping)=>{
    console.log(`order recieved prepiring ${size}pizza with ${topping}`);
});
emitter.on("order placede",(size)=>{
    if(size === "large"){
        console.log("adding drings");
    }
});
emitter.emit("order placede","large","mashroom")