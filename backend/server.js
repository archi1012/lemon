const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const productroutes = require("./routes/productroutes");


dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/products", productroutes);


// 1️⃣ CONNECT DATABASE
connectDB();

// 2️⃣ ROUTES (APIs)

// Home route
app.get("/", (req, res) => {
  res.send("Backend is working 🍋");
});

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "API route is working" });
});

// 👉 ADD THIS ROUTE HERE 👇
app.get("/api/create-product", async (req, res) => {
  try {
    const product = await Product.create({
      name: "Lemon Oversized Tee",
      price: 999,
      category: "MEN",
      image: "https://example.com/tshirt.jpg",
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/api/seed-products", async (req, res) => {
  try {
    const Product = require("./models/Product");

    await Product.deleteMany(); // clear old data

    const products = await Product.insertMany([
      {
        name: "Lemon Oversized Tee",
        price: 999,
        category: "MEN",
        image: "https://source.unsplash.com/400x500/?tshirt",
      },
      {
        name: "Women Hoodie",
        price: 1499,
        category: "WOMEN",
        image: "https://source.unsplash.com/400x500/?hoodie",
      },
      {
        name: "Street Sneakers",
        price: 2499,
        category: "SNEAKERS",
        image: "https://source.unsplash.com/400x500/?sneakers",
      },
    ]);

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// 3️⃣ START SERVER (ALWAYS LAST)
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});
