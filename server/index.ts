import express from "express"

import path from "path"
import fs from "fs"

let app = express()

app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) =>
{
	fs.readFile(path.join(__dirname, '../build', 'index.html'), (err, data) =>
	{
		res.send(data.toString('utf8'))
	})
})

let PORT = process.env.DUCOR_FRONT_PORT

console.log('starting front server')
app.listen(PORT, () =>
{
	console.log('front server started')
})