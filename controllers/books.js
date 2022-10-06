const schema = require('../models/schema')

const getAllBooks = async(req, res)=>{
    try{
        const book = await schema.find({})
        res.status(200).json(book)
    }
    catch(error){
        res.send(error)
    }
}

const createBook = async(req, res)=>{
    try{
        const book = await schema.create(req.body)
        res.status(201).json({book})
    } 
    catch(error){
        res.status(400).json({msg:error.message})
    } 
}

const getBook = async(req, res)=>{
    try{
       const id = req.params.id
      
        const book = await schema.findOne({_id:id})
        res.status(200).json(book)
    }
    catch(error){
        res.send(404).json(error)
    }
}

const updateBook = async(req,res)=>{
    try{
        const id = req.params.id
        const book = await schema.findOneAndUpdate({_id:id}, req.body)    
        res.status(200).json(book)          
    }
    catch(error){
        res.status(400).json({msg:error})
    }
}

const deleteBook =async(req,res)=>{
    try{
        const id = req.params.id
        const book = await schema.findOneAndDelete({_id:id})  

        if(book){
            res.status(200).json({msg:'Book Deleted'})  
        }
        else{
            res.status(400).json({msg:'No such book in the directory'})
        }      
    }
    catch(error){
        res.status(400).json({msg:error})
    }
}

module.exports = {getAllBooks, createBook, getBook, updateBook,deleteBook}