const express = require('express')
const app = express()
const router = require('./routes/route')
const connect = require('./db/connection')

//Middleware
app.use(express.json())


app.use('/api/v1', router)

const port = 3000
const start = async ()=>{
    try{
        await connect()
        app.listen(port, ()=>{
            console.log('Server is listening')
        })
        
    }
    catch(error){
        console.log(error)
    }
}
start()