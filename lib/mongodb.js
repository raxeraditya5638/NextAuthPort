import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri, {
      dbName: "Portfolio",
      socketTimeoutMS: 500,
    });
    console.log("connected");
  } catch (error) {
    console.log(error);
    console.log("error", error);
  }
};

export default connectDB;
