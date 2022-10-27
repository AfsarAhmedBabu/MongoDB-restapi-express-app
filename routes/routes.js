const express = require('express');

const mongoose = require('mongoose');

const productModel = require('../models/model');

const router = express.Router();

router.post('/saveProduct', async (req, res) => {

    const product = new productModel({
        productName: req.body.productName,
        price: req.body.price
    })

    try {
        const savedData = await product.save();
        res.status(200).json(savedData);
    } catch(error) {
        res.status(400).json({message: error.message})
    }

})

router.get('/getProducts', async (req, res) => {

    try {
        const productsData = await productModel.find();
        res.json(productsData);
    } catch(error) {
        res.status(500).json({message: error.message});
    }

})

router.get('/getProduct/:id', async (req, res) => {

    try {
        const product = await productModel.findById(req.body.id);
        res.json(product);
    } catch(error) {
        res.status(500).json({message: error.message});
    }

})

router.delete('/delete/:id', async (req, res) => {

    try {
        const product = await productModel.findByIdAndDelete(id);
        res.send(`Document with ${product.productName} has been deleted`)
    } catch(error) {
        res.status(500).json({message: error.message});
    }

})

module.exports = router;