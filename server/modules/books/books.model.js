const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    image:String,
    authors:[String]
})

module.exports=mongoose.model('books',BookSchema)