const express = require('express')
const app = express()
const cors = require('cors')
const port = 500;

app.use(cors());

app.get('/', (req, res) => {
    res.send('this is server')
})

app.listen(port, () => {
    console.log('this is port', port);
})