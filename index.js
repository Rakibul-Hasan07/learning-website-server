const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors')
const coursesName = require('./data/coursesNameData.json')
const courseDetails = require('./data/coursesDetailsData.json')

app.use(cors())
app.get('/', (req, res) => {
    res.send('Request accepted')
})

app.get('/courses', (req, res)=>{
    res.send(coursesName);
})
app.get('/course', (req, res)=>{
    res.send(courseDetails);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const matchedId = courseDetails.find(course => course.id === id);
    res.send(matchedId);
})
app.listen(port, () => {
    console.log(`This is port ${port}`);
})