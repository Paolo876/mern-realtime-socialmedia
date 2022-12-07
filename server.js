// const app = require("express")
// const cors = require("cors");
// const next = require("next")
// require("dotenv").config();

// const app = express(); //init express
// app.use(express.json());    // allow json data in req.body

const express = require('express')
const app = express()
const next = require('next')
const cors = require("cors");
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()
const connectDB = require("./utilsServer/connectDb")
require("dotenv").config();

connectDB()
const PORT = process.env.port || 3000
app.use(express.json());


nextApp.prepare()
.then(() => {

  app.get('*', (req, res) => {
    return handle(req, res)
  })

  app.listen(PORT, (err) => {
    if (err) throw err
    console.log("running on port:".yellow.bold, PORT)
  })
})
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})
