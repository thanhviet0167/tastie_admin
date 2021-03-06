require("dotenv").config();

const express = require('express')
const app = express()
const port = 3010
const bodyParser = require('body-parser')

// cors
const cors = require('cors')

// morgan

const morgan = require('morgan');
const routesAdmin = require("./routes");


app.use(morgan('combined'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json())


app.use(cors());



// init app

app.get('/', (req, res) => res.send("Hello Tastie"))

// router account service

routesAdmin(app)





// Listen port
// `` : type script

app.listen(port, () => console.log(`Connect sucessfully node js with express, port default : ${port}`))

