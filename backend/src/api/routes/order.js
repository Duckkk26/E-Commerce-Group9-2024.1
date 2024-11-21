import express from "express";
import OrderModel from "../../db/model/Order.js";
import { fetchUser } from "../middleware/fetchUserFromToken.js";
import UserModel from "../../db/model/User.js";
import ProductModel from "../../db/model/Product.js";

const router = express.Router();

// API for get an Order by ID
router.get("/get/:id", fetchUser, async (req, res) => {
  try {
    const order = await OrderModel.findById(req.params.id);
    // If orders are not found, send a 404 response
    if (!order) {
      return res.status(404).json({
        success: 0,
        message: "Order does not exist",
      });
    }

    const user = await UserModel.findById(req.user.id);
    // If user is not an admin or userId is wrong, send a 404 response
    if (user.role !== "admin" && !user._id.equals(order.user_id)) {
      return res.status(404).json({
        success: 0,
        message: "User not authorized or incorrect user ID",
      });
    }

    // Get name of each product in order and total cost of order
    let oldTotal = 0;
    let total = 0;
    const orderProducts = await Promise.all(
      order.products.map(async (product) => {
        oldTotal += product.old_price * product.quantity;
        total += product.new_price * product.quantity;
        try {
          const orderProduct = await ProductModel.findOne({
            id: product.productId,
          });
          return {
            ...product.toObject(),
            name: orderProduct ? orderProduct.name : "Unknown product",
          };
        } catch (productError) {
          console.error("Error fetching product details:", productError);
          return {
            ...product.toObject(),
            name: "Error fetching product details",
          };
        }
      })
    );

    res.status(200).json({
      success: 1,
      order: {
        ...order.toObject(),
        products: orderProducts,
        old_total: oldTotal,
        total: total,
      },
    });
  } catch (error) {
    console.error("Error fetching orders:", error);

    // Send a 500 status code if there's a server error
    res.status(500).send({ error: "Internal server error." });
  }
});

export { router };
