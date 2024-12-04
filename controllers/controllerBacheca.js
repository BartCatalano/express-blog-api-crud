// importo la lista dati
const bachecaList = require("../data/data");


// index
const index = (req, res) => {
    res.json({
        data: bachecaList,
        count: bachecaList.length
    });
};

// show
const show = (req, res) => {
    let food = null;
    for (let i = 0; i < bachecaList.length; i++) {
        const curElem = bachecaList[i];
        if (curElem.id === parseInt(req.params.id)) {
            food = curElem;
        } else {
        res.json(curElem);
    }
    }};

    // create
    const create = (req, res) => {
        res.json('creiamo un nuovo elemento');
    };

    // update
    const update = (req, res) => {
        const curId = req.params.id;
        res.json('modifichiamo i dati di uno specifico elemento' + curId);
    }

    // modify
    const modify = (req, res) => {
        const curId = req.params.id;
        res.json('modifichiamo gli specifici dati uno specifico elemento' + curId);
    }

    // Destroy
    const destroy = (req, res) => {
        const curId = req.params.id;
        // trovo index corrente
        const curIndex = bachecaList.findIndex((curFood) => curFood.id === curId);
        if (curIndex === -1) {
            res.statusCode = 404;
            res.json({
                error: true,
                message: "Piatto non trovato"
                
            })
         }else {
            bachecaList.splice(curIndex, 1);
            res.json('eliminiamo un elemento' + curId);
         }
        
    }

    module.exports = {
        index,
        show,
        create,
        update,
        modify,
        destroy
    }