import mongoose from "mongoose";

const Electronics = async (req, res) => {
  try {
    const products = await mongoose.connection.db
      .collection("electronics")
      .find()
      .toArray();

    res.status(200).json(products);
  } catch (err) {
    console.error(err);
  }
};

export default Electronics;
