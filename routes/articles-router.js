const { Router } = require("express");
const router = Router();
const checkToken = require("../middlewares/checkToken");
const Article = require("../models/Article");

//api/articles/create

router.post("/create", checkToken, async (req, res) => {
  console.log("/create");
  try {
    const { title, content } = req.body;
    const article = new Article({ title, content, author: req.user.userId });
    await article.save();
    res.status(200).json({ article });
  } catch (e) {
    console.log("create", e);
    res.status(400).json({ message: "Wrong" });
  }
});

//api/articles/

router.get("/", async (req, res) => {
  try {
      const articles = await Article.find({}).populate('author', 'email')
      res.status(200).json({articles})
  } catch (e) {
    console.log("create", e);
    res.status(400).json({ message: "Wrong" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const article = await (
      await Article.findOne({ _id: req.params.id })
    ).populate("author", "email");
    if (!article) return res.status(400).json({ message: "Wrong" });
    res.status(200).json({ article });
  } catch (e) {
    console.log("create", e);
    res.status(400).json({ message: "Wrong" });
  }
});

module.exports = router;
