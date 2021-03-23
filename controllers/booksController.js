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
    saveBook: async (req, res) => {
        console.log("saved your book");
    
        try {
          const newBook = new Book({
            title: req.title,
            authors: req.authors,
            description: req.description,
            image: req.image,
            link: req.link,
          });
    
          const successSave = await newBook.save();
          console.log(successfulSave);
          return true;
        } catch (err) {
          console.log("error saving book ", err);
          return false;
        }
      },
    
};