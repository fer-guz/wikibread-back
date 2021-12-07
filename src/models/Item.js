const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    name: {type: String},
    category: {type: String},
    country: {type: String},
    content: {type: String},
    filename: {type: String},
    imgurl: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now()}
});

module.exports = model('Item', itemSchema);