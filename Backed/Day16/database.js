const mongoose = require("mongoose");

async function main() {
    await mongoose.connect('mongodb+srv://dhrubarajroy123_db_user:Iwanttolearn123@learnmongo.7v6xrk0.mongodb.net/BookStore?appName=LearnMongo')
    
}

module.exports = main;