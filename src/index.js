const express = require('express')
const morgan = require('morgan')
const taskRouter = require('./routes/tark.routes')
const cors = require('cors')

const PORT = 3000
const app=express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())//para que express entienda los json. 

app.use(taskRouter)

app.use( (error, req, res, next) => {
    return res.json({
        message: error.message
    })
})

app.listen(PORT)
console.log("Servidor escuchando puerto: " + PORT)

