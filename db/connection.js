const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://jaskaranSingh:Jaskaran70870@cluster0.41sr1.mongodb.net/?retryWrites=true&w=majority';

const connect = ()=>{
    return new mongoose.connect(connectionString,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
      
        autoIndex: true, //make this also true
    })
}

module.exports  = connect