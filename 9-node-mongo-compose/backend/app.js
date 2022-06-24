const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

//DATABASE
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

//TESTE
server.get("/", (req, res, next) => res.send("Backend"))

//MIDLEWARES
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())

//ODM
const Client = restful.model('Client', {
    name: {type: String, required: true}
})

Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true})

//ROUTES
Client.register(server, '/clients')

// STAR SERVER
server.listen(3000)

