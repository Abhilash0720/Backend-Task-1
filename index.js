const express = require('express')
const hallrouter = require('./routes/users')
const app = express()

app.use(express.json());
app.use(hallrouter)

app.listen(8008, () => console.log('server is listening to port 8008'));







