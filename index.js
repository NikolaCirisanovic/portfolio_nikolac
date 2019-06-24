// Config, importing the modules

const express = require('express')
const path = require('path')
const app = express()

require('dotenv').config()

// Serving every file inside of the client folder
app.use(express.static(path.join(__dirname, 'client')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/index.html'))
	console.log('__dirname', __dirname)
})

// API

app.get('/api/products', require('./client/controllers/get_products'))


// Run Server, execute the method to listen to requests on the specified port

app.listen(process.env.PORT, () => {
	console.log(`Server listening on port ${process.env.PORT}`);
	
})

