const Book = require("../models/bookModels");
const axios = require("axios");

module.exports = {
    searchBooks: async (req, res) => {
      console.log("searched books");
      const searchParam = req.body.searchInput;
      const KEY = process.env.API_KEY;
      try {
        const searching = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchParam}&key=${KEY}&maxResults=20`
        );
      } 
    },
  };
  