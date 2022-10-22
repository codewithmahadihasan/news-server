const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const category = require('./Data/Catagoris.json')
const news = require('./Data/News.json')

app.get('/', (req, res) => {
    res.send('Mahadi Hasan')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectNews = news.find(result => result._id === id)
    res.send(selectNews)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    if (id === '08') {
        res.send(news)
    }
    else {
        const CatagorisNews = news.filter(res => res.category_id === id)
        res.send(CatagorisNews)
    }

})

app.get('/home', (req, res) => {
    res.send(news)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})