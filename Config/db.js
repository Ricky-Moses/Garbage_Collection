import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.info(conn.connection.host);
  } catch (err) {
    console.error(`Failed to fetch from database ${err.message}`);
  }
};

export default ConnectDB