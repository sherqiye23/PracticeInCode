const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()

app.get("/", (req, res) => {
    res.send("Welcome Node")
})

let ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    isSale: Boolean,
    image: String
})
let ProductModel = mongoose.model("products", ProductSchema)


mongoose.connect("mongodb+srv://serqiyequluzade:code2066@firstdb.cents.mongodb.net/")
.then(()=>{
    console.log("connected")
})

console.log("kod isleyir")
app.get("/products", async (req,res)=>{
    let products= await ProductModel.find()
    console.log(products);
})



