const express = require('express');
const router = express.Router();

//item model
const Item = require('../../models/Item');

// @route GET api/items
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
        
});

// @route POST api/items
router.post('/', (req, res) => {
    const newItem = new Item({
        title: req.body.title
    });
    
    newItem.save().then(item => res.json(item));
});


module.exports = router;