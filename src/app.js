const newsFeed = document.querySelector('#feed')

fetch('http://localhost:8000/results')
  .then(response => {return response.json()})
  .then(data => {
    data.forEach(article => {
      const articlePost = `<div><h3>` + article.title + `</h3><p>` + article.url + `</p></div>`
      newsFeed.insertAdjacentHTML("beforeend", articlePost)
    })
  })
