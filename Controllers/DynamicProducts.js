import mongoose from "mongoose";

const DynamicGet = async (req, res) => {
  try {
    const { collection } = req.params;
    const Model = mongoose.model(
      collection,
      new mongoose.Schema({}, { strict: false })
    );
    const data = await Model.find();
    res.status(200).json(data)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export default DynamicGet;
