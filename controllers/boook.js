

const BookSchema = require('../models/boook')


exports.AddBook=async(req,res)=>{
   
const {name,images,author,description,Genre,price}=req.body

try {
   
    const newbook = new BookSchema(req.body)
    console.log(req.user)
    
    if (!req.user.role=="admin")
     {return res.send('can not add a book' )}
    
   await newbook.save()
    res.status(200).send({msg:'book registered successfully', newbook  })

} catch (error) {
    res.status(500).send({errors: [{msg: "book could not register"},error]})
}
}


exports.AllBooks= async(req,res) =>{
    try {
 // const books= await BookSchema.find({userId: req.user._id}).populate("userId");

        const books= await BookSchema.find();
        res.status(200).send({msg: "list of books", books });
    } catch (error) {
        res.status(500).send({msg:"could not get books", error})

    }
}


exports.OneBook= async(req,res) => {

    const {id}= req.params
    try {
        const foundbook= await  BookSchema.findById(id)
        res.status(200).send({msg:"Book found", foundbook})

    } catch (error) {
        res.status(500).send("could not get book")

    }
}


exports.DeleteBook= async(req,res) =>{
    const {id}= req.params
    try {
           const  deleted= await  BookSchema.findByIdAndDelete(id)
           res.status(200).send({msg:"Book deleted" , deleted})
    } catch (error) {
           res.status(500).send("could not delete book")
    
        }
    }



 exports.UpdateBook = async  (req,res)=>{
        const {id}= req.params
        try {
            const updated= await BookSchema.findByIdAndUpdate(id, {$set: {...req.body}})
            res.status(200).send({msg:"book updated" , updated})
        } catch (error) {
            res.status(500).send("could not update book")
        }
    }



