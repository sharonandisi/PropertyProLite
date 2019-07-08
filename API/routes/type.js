const express = require('express');
const router = express.Router();

const types = [
    {id: 1, name: 'apartment'},
    { id: 2, name: 'villa' },
    { id: 3, name: 'massionette' },
    {id: 4, name: 'bungalow' },
    
];

router.get('/', (req, res) => {
    res.send(types);
});



router.post('/', (req, res) => {
    const { error } = validateType(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const type = {
        id: types.length + 1,
        name: req.body.name
    };
    types.push(type);
    res.send(type);
});



router.put('/:id', (req, res) => {
    const type = types.find(c => c.id === parseInt(req.params.id));
    if (!type) return res.status(404).send('The type with the given ID was not found.');

    const { error } = validateType(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    type.name = req.body.name;
    res.send(type);

});

router.delete('/:id', (req, res) => {
    const type = types.find(c => c.id === parseInt(req.params.id));
    if (!type) return res.status(404).send('The type with the given ID was not found.');

    const index = types.indexOf(type);
    types.splice(index, 1);

    res.send(type);

});

router.get('/:id', (req, res) => {
    const type = types.find(c => c.id === parseInt(req.params.id));
    if (!type) return res.status(404).send('The type with the given ID was not found.');
    res.send(type);
});

function validateType(type) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(type, schema);
}

module.exports = router;
