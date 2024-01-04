import mongoose from "mongoose";
import Product from "../models/product.js";
import products from "./data.js";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/shopit");

    await Product.deleteMany();
    console.log("Products are Deleted");

    await Product.insertMany(products);
    console.log("Products are Added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
