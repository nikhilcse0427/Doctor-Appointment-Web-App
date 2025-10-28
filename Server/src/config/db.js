import mongoose from 'mongoose'
export const connectDb = async ()=>{
  try{
    const connectInstance = await mongoose.connect(process.env.MONGODB_URI);
    // console.log(`MONGODB URI: ${process.env.MONGODB_URI}`)
    console.log("✅ Mongodb successfully connected !!")
    process.exit(0) // means "success" no error
  }catch(error){
    console.log("❌ Mongodb connection failed: ", error.message) // show only property of message error is object contain many properties, error.message is just the human-readable string describing what went wrong.
    //If MongoDB connection fails (wrong URI, DB down, network issue), the app logs the error and immediately stops with process.exit(1).
    process.exit(1) //shows "failure" error occured
  }
}