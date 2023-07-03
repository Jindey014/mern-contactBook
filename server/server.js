const express = require("express")
const cors = require("cors")
const Connection = require("./database/db")
require("dotenv").config()
const bodyparser = require("body-parser")

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5000;
const username = process.env.USERNAME
const password = process.env.PASSWORD
const URI = `mongodb+srv://contact:${password}@cluster0.k1znnlh.mongodb.net/?retryWrites=true&w=majority`

Connection(URI)

app.use("/", require("./routes/contactRoute"))

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
})