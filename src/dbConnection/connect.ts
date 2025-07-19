import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!); // Ensure MONGODB_URI is correctly set in your environment variables

    const connection = mongoose.connection; // ✅ Get the actual connection instance

    connection.on("connected", () => {
      console.log("DB Connected");
    });

    connection.on("error", (err) => {
      console.error("DB Connection Error:", err);
    });
  } catch (error) {
    console.error("DB Connection Failed:", error);
  }
}

export default connectDB;
