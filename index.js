const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Request accepted')
})
app.listen(port, () => {
    console.log(`This is port ${port}`);
})