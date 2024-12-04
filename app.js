const express = require("express");
const app = express();
const port = 3000;

// richiamo le route
const postsRouters = require("./routers/crug");

app.use("/crug", postsRouters);

// creo route di base
app.get("/", (req, res)=>{
    res.send("sono route di base");
    
});


// creo route di listening
app.listen(port, ()=>{
    console.log("server pronto");
    
});