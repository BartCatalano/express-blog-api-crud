const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
// richiamo le route
const postsRouters = require("./routers/posts");
// inserisco handles error 
const handleError = require("./middleware/handleError");

app.use("/posts", postsRouters);

// creo route di base
app.get("/", (req, res)=>{
    res.send("sono route di base");
    
});

// Dopo tutte le rotte inseriamo il moddleware che gestisce errore
app.use(handleError);

// creo route di listening
app.listen(port, ()=>{
    console.log("server pronto");
    
});