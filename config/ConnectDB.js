

const mongoose= require ("mongoose")


// fonction 
const connectDB= async ()=> {

    try {
        // have a prob in mongo 
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db is conncted")
    } catch (error) {
        console.log({msg:"db is not connected", error})
    }
}

module.exports= connectDB