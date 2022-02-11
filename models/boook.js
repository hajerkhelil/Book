const  mongoose= require ('mongoose')

const BookSchema= new mongoose.Schema({

    name: {type: String, required:true},
    images: {type: String, required:true},
    author: {type: String, required: true},
    description:{type: String, required: true},
    Genre:{type: String, required: true},
    price:{type: Number, required: true},
    qty:{type:Number, default:0},
    userId: {types: mongoose.Schema.Types.ObjectId}, // jointure entre user et book  // norbet des schemas mab3adhhom 
    // bech nhez des info men el user schema w neste3melhom fil book schema 

})

// (esem el collection , schema li sna3neha )
module.exports= mongoose.model('book', BookSchema)