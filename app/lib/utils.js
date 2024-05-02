import mongoose from "mongoose";

const connectToDB = async() => {

    const connection = {};
    try {        
        if(connection.isConnected) return;
        const db = await mongoose.connect("mongodb+srv://thilinas:1Byy2BHQUWxU3vsO@cluster0.0cddue7.mongodb.net/Admindashboard?retryWrites=true&w=majority&appName=Cluster0")
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        throw new Error(error)
    }
}

export default connectToDB;


