const { Router } = require("express");
const User = require("../models/User");
const router = Router();
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkToken = require('../middlewares/checkToken')
//api/auth/me

router.get("/me", checkToken, async (req, res) => {
  console.log("/me");
  try {
    const user = await User.findOne({ _id: req.user.userId });
    res.json({userId: user._id, email: user.email})
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Что-то пошло не так" });
  }
});

//api/auth/login
router.post("/login", async (req, res) => {
  console.log("LOGIN");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Данного пользователя не существует" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Неверный пароль" });
    const token = jwt.sign({ userId: user._id }, config.get("jwtSecret"), {
      expiresIn: "10h",
    });
    res.status(200).json({ token, userId: user._id, email: user.email });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Что-то пошло не так" });
  }
});

//api/auth/register
router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: "Такой пользователь уже существует"})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        await user.save()
        res.status(200).json({message: "Пользователь создан"})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Что-то пошло не так'})
    }
})

module.exports = router;
