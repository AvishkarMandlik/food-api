import express from "express";

const app = express();
app.use(express.json());

const db = [
  {
    id: 1,
    title: "Idli",
    price: 15,
    category: "breakfast",
  },
  {
    id: 2,
    title: "Dosa",
    price: 20,
    category: "breakfast",
  },
  {
    id: 3,
    title: "Biryani",
    price: 100,
    category: "lunch",
  },
];

app.get("/all-food-items", (req, res) => {
  res.json({
    success: true,
    data: db,
    message: "All food items fetched successfully",
  });
});

app.post("/add-new-food-item", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const price = req.body.price;
  const category = req.body.category;

  const newItem = {
    id: id,
    title: title,
    price: price,
    category: category,
  };

  db.forEach((item) => {
    if (item.id === id) {
      return res.json({
        success: false,
        data: null,
        message: "Food item already exists",
      });
    }
  });

  db.push(newItem);

  res.json({
    success: true,
    data: newItem,
    message: "New food item added successfully",
  });
});

app.get("/food-item-by-id", (req, res) => {
  const id = req.query.id;

  db.forEach((item) => {
    if (item.id == id) {
      return res.json({
        success: true,
        data: item,
        message: "Food item fetched successfully",
      });
    }
  });

  res.json({
    success: false,
    data: null,
    message: "Food item not found",
  });
});

app.get("/delete-food-item-by-id", (req, res) => {
  const id = req.query.id;

  db.forEach((item, index) => {
    if (item.id == id) {
      db.splice(index, 1);
      return res.json({
        success: true,
        data: db,
        message: "Food item deleted successfully...",
      });
    }
  });

  res.json({
    success: false,
    data: null,
    message: "Food item not found",
  });
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
