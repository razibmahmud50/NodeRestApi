const express = require('express')
const morgan = require('morgan')
const contactRoute = require('./api/routes/contacts')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/api/contacts', contactRoute)


//home init
app.get('/', function(req, res){
	res.send('Hello World')
});



const db = mongoose.connection
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

db.on('error', () => {
	console.log(err)
})
db.once('open', () => {
	console.log('database connection estalished')
})


const Schema = mongoose.Schema;
  let demoSchema = new Schema({
    name: {
	   type: String,
	   required: true,
	},
	phone: {
		type: String,
		required: true,
		minlength: 3,
	 }
  });


const Demo = mongoose.model('Demo', demoSchema)
app.get('/demo', function(req, res){
	const demo = new Demo({
		name: 'razib',
		phone: '39449494994'
	})
	demo.save()
	.then(data => {
		res.json({data})
	})
	.catch(err => console.log(err))
});


app.listen(3000, function(){
	console.log('server is started in localhost:3000')
});
