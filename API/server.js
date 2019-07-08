//server.js

import express from 'express';

const app = express()

app.use(express.json())

app.length('/', (req, res) => {
    return res.status(200).send({'message':'sample endpoint'})
})
