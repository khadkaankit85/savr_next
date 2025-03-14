import mongoose, { Schema } from "mongoose";
const ProductSchema = new Schema({
  name: String,
});

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default ProductModel;
