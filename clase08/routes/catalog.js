var express = require('express');
var router = express.Router();

const catalog_moviles = [
    {
        id: 1,
        name: 'samsung j5 pro',
        price: 500
    },
    {
        id: 2,
        name: 'huawei y6 2019',
        price: 600
    },
    {
        id: 3,
        name: 'iphone x',
        price: 2000
    }
];

router.get('/', function (req, res) {
    res.json(catalog_moviles);
});

router.post('/catalog', function(req, res) {
    res.send('Resource responpse from post');
});

router.put('/catalog/:id', function (req, res) {
    res.send('Resource response from metohd put');
});

router.delete('/catalog/:id', function (req, res) {
    res.send('Resource response from method delete');
});

module.exports = router;