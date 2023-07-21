import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()


const DBConnection = async()=>{
    try{
        await mongoose.connect(process.env.URI_DB,{
            useNewUrlParser:true
         })
         console.log("database connected succesfully");
    }
    catch(err){
        console.log("error while connection database",err.message)
    }
}
export default DBConnection;