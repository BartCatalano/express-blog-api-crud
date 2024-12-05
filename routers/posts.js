const express = require("express");
const router = express.Router();
// importo dati da lista dati
const controllerBacheca = require("../controllers/controllerBacheca");

// index
router.get(`/`, controllerBacheca.index);

// show
router.get("/:id", controllerBacheca.show);
// create
router.post("/", controllerBacheca.create);
// update
router.put("/:id", controllerBacheca.update);

// modify 
router.patch("/:id", controllerBacheca.modify);
// delete
router.delete("/:id", controllerBacheca.destroy);

module.exports = router;