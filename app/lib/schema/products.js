import mongoose from "mongoose";
const productschema = new mongoose.Schema({
    name:String,
    class:String
});
export const Products = mongoose.models.products || mongoose.model("products",productschema);