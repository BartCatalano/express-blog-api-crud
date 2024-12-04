const express = require("express");
const app = express();
const port = 3001;

// richiamo le route
const postsRouters = require("./routers/crug");

app.use("/crug", postsRouters);

// creo route di base
app.get("/", (req, res)=>{
    console.log("sono route di base");
    
});


// creo route di listening
app.listen(port, (req, res)=>{
    console.log("server pronto");
    
});