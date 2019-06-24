// Database
const db = require('../../db')

module.exports = (req, res) => {
	let query = `SELECT * FROM shop.products `
	if (req.params.category) {
		query += `WHERE shop.category = ${req.params.category}`
	}
	db.query(query, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
