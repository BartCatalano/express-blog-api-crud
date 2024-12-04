const express = require("express");
const router = express.Router();
// importo dati da lista dati
const bacheca = require("../data/data");

// index
router.get("/", (req, res)=>{
    res.json(bacheca);
});

// show
router.get("/:id", (req,res)=>{
    const curId = req.params.id;
    res.json("vedo id specifico" + curId);

});
// create
router.post("/", (req,res)=>{
    res.json("creo");
})
// modify
router.put("/:id",(req,res)=>{
    const curId = req.params.id;
    res.json("qui modifico tutto l'elemento dell' id" + curId);
})

// modify dettail
router.patch("/:id",(req, res)=> {
    const curId = req.params.id;
    res.json("qui modifico solo un parte dell'elemento" + curId);
})
// delete
router.delete("/:id",(req,res) => {
const curId = req.params.id;
req.json("qui elimino elemenco con id" + curId);
});

module.exports = router;