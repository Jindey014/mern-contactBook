const mongoose = require("mongoose")

const Connection = async (URI) => {
    try {
        await mongoose.connect(URI)
        console.log("Connection established with database")
    }
    catch (err) {
        console.log("Error in connection with database", err)
    }
}

module.exports = Connection
