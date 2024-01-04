import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter Product Name"],
      maxLength: [200, "Product Name cannot exceed 200 characters"],
    },
    price: {
      type: Number,
      required: [true, "Please enter Product Price"],
      maxLength: [5, "Product Price cannot exceed 5 digits"],
    },
    description: {
      type: String,
      required: [true, "Please enter Product Description"],
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "Please enter Product Category"],
      enum: {
        values: [
          "Electronics",
          "Cameras",
          "Laptops",
          "Accessories",
          "Headphones",
          "Food",
          "Books",
          "Sports",
          "Outdoor",
          "Home",
        ],
        message: "Please Select Correct Category",
      },
    },
    seller: {
      type: String,
      required: [true, "Please Enter Product Seller"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter Product Seller"],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
