const {Schema, Types, model} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: Types.ObjectId, ref: "User"}
})

module.exports = model('Article', schema)