const router = require("express").Router();
const { getSaved, saveBook } = require("../controllers/booksController");

router.get("/", getSaved);
router.post("/", saveBook);

module.exports = router;

