const express = require("express");
const router = express.Router();
// importo dati da lista dati
const bachecaController = require("../controllers/controllerBacheca");

// index
router.get(`/`, bachecaController.index);

// show
router.get("/:id", bachecaController.show);
// create
router.post("/", bachecaController.create);
// update
router.put("/:id",bachecaController.update);

// modify 
router.patch("/:id",bachecaController.modify);
// delete
router.delete("/:id",bachecaController.destroy);

module.exports = router;