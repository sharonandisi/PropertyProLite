const Joi = require('Joi');
const types = require('./routes/type');
const express = require("express");
const app = express();

app.use(express.json());
app.use('/api/types', types);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));