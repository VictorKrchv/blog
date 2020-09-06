const {body} = require("express-validator")
const User = require("../models/User")

exports.registerValidators = [
    body("email")
    .isEmail().withMessage("Введите корректный email")
    .custom(async (value, {req}) => {
        try {
            const user = await User.findOne({email: value})
            if (user) return Promise.reject('Такой email уже занят')
        } catch (e) {
            console.log("e", e)
        }
    })
    .normalizeEmail(),
    body('password', 'Пароль должен быть минимум 6 символов')
    .isLength({min: 6, max: 56})
    .isAlphanumeric()
    .trim(),
    body('confirmPassword', "Пароли должны совпадать")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
            throw new Error('Password Confirmation does not match password');
       }
       return true;
  })
]