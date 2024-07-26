require('dotenv').config()

const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req , res) => {
    res.send('hiteshdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Hey Aastha, Its login page</h1>')
})

app.get('/youtube' , (re, res) => {
    res.send('<h1>Chai Or Code </h1>')
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})