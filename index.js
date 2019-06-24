// Config, importing the modules

const express = require('express')
const path = require('path')
const app = express()

// Serving every file inside of the client folder
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/index.html'))
	console.log('__dirname', __dirname)
})

// API

app.get('/api/products', require('./client/controllers/get_products.js'))


// Run Server, execute the method to listen to requests on the specified port

app.listen(3300, () => {
	console.log('Server listening on port 3300');
})

