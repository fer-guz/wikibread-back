const itemsCtrl = {};

const Item = require('../models/Item');

const fs = require('fs');


itemsCtrl.getItems = async (req, res) => {
    const item = await Item.find().sort( { created_at: -1 } );
    res.json(item);
};

itemsCtrl.createItem = async (req, res) => {
    
    //fs.unlinkSync(require('../img/uploads/162b0843-61cc-44f0-9e3b-f30f19f3ea16.png'));
    const { title, country, category, content, date } = req.body;
    // console.log(req.body);
    // console.log(req.file);
    // console.log(process.env.HOST)
    const newItem = new Item({
        name: title,
        country: country,
        category: category,
        content: content,
        created_at: date,
        filename: req.file.filename,
        //imgurl: process.env.HOST + ':' + process.env.PORT + '/img/uploads/' + req.file.filename,
        imgurl: process.env.HOST + '/img/uploads/' + req.file.filename,
        
        
    });
    //console.log(newItem);
    await newItem.save();
    res.json('New Item added');
};

itemsCtrl.getItem = async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.json(item);
}

itemsCtrl.updateItem = async (req, res) => {
    // console.log(req.body);
    const { title,category, country, content } = req.body;
    await Item.findOneAndUpdate({ _id: req.params.id }, {
        name: title,
        category,
        country,
        content,
    });
    res.json('Item Updated');
}

// itemsCtrl.deleteItem = async (req, res) => {
//     await Item.findByIdAndDelete(req.params.id);
//     res.json({message: 'item deleted'})
// };



module.exports = itemsCtrl;