const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Docker')
})

app.listen(port, () => {
  console.log(`Server is running on http:127.0.0.1:${port}`)
})