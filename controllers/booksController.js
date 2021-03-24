const Book = require("../models/bookModels");

module.exports = {
    
    getSaved: async (req, res) => {
        try {
          const allBooks = await Book.find();
          res.json(allBooks);
        } catch (err) {
          console.log("oh no, get books err", err);
          res.send("couldn't get books", err);
        }
    },
    saveBook: async (req, res) => {
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
    deleteBook: async (req, res) => {    
        try {
          const delBook = await Book.findById({ _id: req.params.id })
            .then((book) => book.remove())
            .then((book) => res.json(book));
        } catch (err) {
          res.send(err);
        }
      },
      updateOne: async (req, res) => {
        try {
          const foundBookPost = await Book.findById(req.params.id);
          const { title, text } = req.body;
    
          if (title) foundBookPost.title = title;
          if (text) foundBookPost.text = text;
    
          res.json(await foundBookPost.save());
        } catch (err) {
          res.json(err);
        }
      },
};