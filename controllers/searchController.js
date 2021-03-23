const Book = require("../models/bookModels");
const axios = require("axios");

module.exports = {
    searchBooks: async (req, res) => {
        console.log("searched books");
        const searchParam = req.body.searchInput;
        const Key = process.env.API_KEY;
    }
};