import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

mongoose.connection.on("connected", () => {
  console.log("DB connect successfully ✅");
});

mongoose.connection.on("error", (err) => {
  console.error("connection error ❌:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});
async function connectDB() {
  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
    });
  } catch (err) {
    process.exit(1);
  }
}

export default connectDB;
