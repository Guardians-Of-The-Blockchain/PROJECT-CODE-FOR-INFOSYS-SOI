const express = require('express')
const app = express()
const port = 8000

app.use(express.static(__dirname))
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.get('/api/posts', (req, res) => {
  res.json([
    {id: 1, content: 'foo'},
    {id: 1, content: 'bar'},
  ])
})
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})