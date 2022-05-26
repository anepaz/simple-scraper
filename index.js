const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

const url = 'https://www.ufpr.br/portalufpr/'

app.get('/', function (req, res) {
  res.json('My simple webscraper')
})

app.get('/results', (req, res) => {

  axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.orbit-caption', html).each(function () {
      const title = $(this).text()
      const url = $(this).find('a').attr('href')
      articles.push({
        title,
        url
      })
    })
    res.json(articles)
  }).catch(err => console.log(err))

})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
