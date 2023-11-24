const express = require('express')
const mongoose = require('mongoose')
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello BLOG, My name is Nishara')
})

app.listen(3000, ()=>{
    console.log('Node API app is running on port 3000')
})

mongoose.
connect('mongodb+srv://admin:Nish@ndt21@cluster0.3qwq8bs.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(()=>{
    console.log('Connected to MongoDB')
}).catch((error) => {
    console.log(error)
})
