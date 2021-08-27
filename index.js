
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())

const port = process.env.PORT || 3000

app.get('/api/whoami', (req, res) => {
  res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent'],
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

