const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 80

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use((req, res, next) => {
	console.log(`\x1b[1m${req.method}\x1b[0m ${req.originalUrl} ${req.ip}`);
	console.log('body', req.body)
	next()
})

app.listen(port, '0.0.0.0', () => {
	console.log(`> Listening on localhost:${port}`)
})
