

const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {
   getYoutubersData,
   getPodcastData,
} = require('./controller')

app.get('/youtubers', getYoutubersData)
app.get('/podcasts', getPodcastData)
// app.get('voices/influencers', getIndviduals)

app.get('/', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})
app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.css'))
})
app.get('/js', (req,res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/index.js'))

})




app.listen(4000, console.log('App Running on 4000'))