const Book = require("../models/bookModels");

module.exports = {
    
    getSaved: async (req, res) => {
        console.log("got the books");

        try {
          const allBooks = await Book.find();
          res.json(allBooks);
        } catch (err) {
          console.log("oh no, get books err", err);
          res.send("couldn't get books", err);
        }
    
    },
};