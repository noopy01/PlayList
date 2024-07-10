const express = require("express");
const cors = require("cors");

const products = require("./products"); // products 데이터를 가져오는 부분

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API!");
});

app.get('/products', (req, res) => {
  res.json(products); // 올바르게 JSON 데이터 반환
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



/*const express = require("express");
const cors = require("cors");

//const cartItems = require("./products");
const products = require("./products"); // products 데이터를 가져오는 부분 수정

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API!");
});

app.get("/cartItems", (req, res) => {
  res.send(cartItems);
});

app.get('/products', (req, res) => {
  res.json(products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


/*const express = require("express");
const cors = require("cors");

const cartItems = require("./cartItems");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API!");
});

app.get("/cartItems", (req, res) => {
  res.send(cartItems);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
*/