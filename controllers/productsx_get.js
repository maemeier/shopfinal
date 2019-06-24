// Database
const db = require('../db')

module.exports = (req, res) => {
	// console.log('request', req.prams.id);
	db.query(`SELECT * FROM products WHERE category = ${req.params.id}`, (err, result) => {
		if (err) {
			console.log('err', err)
		} else {
			res.send(result.rows)
		}
	})
}

// module.exports = (req, res) => {
// 	db.query(`SELECT * FROM categories`, (err, result) => {
// 		if (err) {
// 			console.log('err', err)
// 		} else {
// 			res.send(result.rows)
// 		}
// 	})
// }
