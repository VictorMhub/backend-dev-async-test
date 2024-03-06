const express = require('express');
const app = express();
let nextId = 3;
const users = [
  {
    userId: 1,
    userName: 'Vitu',
    userPassword: 'chaewon127845!'
  },
  {
    userId: 2,
    userName: 'Taisy',
    userPassword: 'euamoqueijo'
  } 
]

const products = [
  {
    name: "Xiaomi Redmi 9",
    brand: "Xiaomi",
    model: "Redmi 9",
    price:  10000,
    color: "red"
 },
]

app.get('/', (req, res) => res.status(200).json({message: 'Home'}));

app.use(express.json());

//REGISTER
app.get('/signup', (req, res) => res.status(200).json(users))
app.post('/signup', (req, res) => {
  const requiredProperties = ['userName', 'userPassword'];
  if (requiredProperties.every((property) => property in req.body)) {
    const user = { id: nextId, ...req.body };
    users.push(user);
    nextId += 1;
    res.status(201).json(user);
  } else {
    res.status(400).json({message: "A parameter must be provided"});
  }
});

//PRODUCT
app.get('/products', (req, res) => res.status(200).json(products))


module.exports = app;