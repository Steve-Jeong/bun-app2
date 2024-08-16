// require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res)=> {
  console.log('HOST_PORT : ', process.env.HOST_PORT)
  console.log('req.ip : ', req.ip)
	res.send('Hello World 1234')
})
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
	console.log(`Server is running at port ${PORT}`)
})