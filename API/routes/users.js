const express = require('express');
const router = express.Router();

const users = [
    {id: 1, email: "shay@gmail.com" ,first_name: "shay", last_name: "andy", password: "sandy123", phoneNumber: "0702123456", address: "nairobi", is_admin: "false"},
    { id: 2, email: "girl@gmail.com", first_name: "girl", last_name: "lady", password: "girl456", phoneNumber: "0712456789", address: "kigali", is_admin: "false" },
    { id: 3, email: "boy@gmail.com", first_name: "felix", last_name: "kavinsky", password: "vins123", phoneNumber: "0713012345", address: "nairobi", is_admin: "true" },
    { id: 4, email: "man@gmail.com", first_name: "gentle", last_name: "man", password: "many123", phoneNumber: "0714678901", address: "kigali", is_admin: "true" },
];

router.get('/',  (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = {
        id: users.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        is_admin: req.body.is_admin,
        
    };
    users.push(user);
    res.send(user);
});

router.put('/:id', async (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');

    const { error } = validateUser(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    user.first_name = req.body.first_name,
    user.last_name = req.body.last_name,
    user.email = req.body.email,
    user.phoneNumber = req.body.phoneNumber,
    user.address = req.body.address,
    user.res.send(user);
});

router.delete('/:id',  (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('The user with the given ID was not found.');

    const index = users.indexOf(user);
    users.splice(index, 1);

    res.send(user);
});

router.get('/:id', (req, res) => {
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) return res.statuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laborore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco labors(404).send('The user with the given ID was not found.');
    res.send(user);
});

function validateUser(user) {
    const schema = {
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required(),
    };

    return Joi.validate(user, schema);
}

module.exports = router; 