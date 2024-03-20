import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb_uri, {
      dbName: "Portfolio",
    });
    console.log("connected");
  } catch (error) {
    console.log(error);
    console.log("error", error);
  }
};

export default connectDB;
