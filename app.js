const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello Get!')
})

app.put('/', (req, res) => {
    res.send('Hello put!')
})
  
app.post('/', (req, res) => {
    res.send('Hello post!')
})
  
app.delete('/', (req, res) => {
    res.send('Hello delete!')
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})