const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide the name of the book'],
        unique:[true, 'The name already exists'],
    },
    genre:{
        type:String,
        required:[true, 'Please provide book genre'],
        enum:{values:['action', 'horror', 'sci-fi', 'fiction', 'non-fiction', 'spirituality', 'romance', 'thriller'],
                message:'The genre is not supported'}
    },
    price:{
        type:Number,
        required:[true, 'Please provide book price'],
        maxLength:4
    },
    author:{
        type:String,
        required:[true, 'Please provide the name of the author'],
        

    },
    published:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('BooksDirectory_v2', schema)