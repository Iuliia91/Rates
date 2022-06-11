const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const app = express()
const PORT = config.get('serverPort')
const corsMiddleWare = require('../Server/middleware/core.middleware')

app.use(corsMiddleWare)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(config.get('dbUrl'))
    app.listen(PORT, () => {
      console.log('Sever started on port', PORT)
    })
  } catch (e) {
    console.log('same error')
  }
}

start()
