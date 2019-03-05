const express = require('express')
const morgan = require('morgan')
const contactRoute = require('./api/routes/contacts')
const bodyParser = require('body-parser')


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/contacts', contactRoute)

//home init
app.get('/', function(req, res){
	res.send('Hello World')
});

app.listen(3000, function(){
	console.log('server is started in localhost 3000')
});
