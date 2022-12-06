// const app = require("express")
// const cors = require("cors");
// const next = require("next")
// require("dotenv").config();

// const app = express(); //init express
// app.use(express.json());    // allow json data in req.body

const app = require('express')
const next = require('next')
const cors = require("cors");
const dev = process.env.NODE_ENV !== 'production'
const next = next({ dev })
const handle = next.getRequestHandler()
const connectDB = require("./utilsServer/connectDb")
require("dotenv").config();
connectDB()
const PORT = process.env.port || 3000

next.prepare()
.then(() => {
  const server = app()
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log("running on port:".yellow.bold, PORT)
  })
})
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})
