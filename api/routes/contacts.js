const express = require('express')
const router = express.Router()

// Get
router.get('/', (req, res, next)=> {
   res.status(200).json({
       message: 'hello I am contact get route'
   })
});

//Post
router.post('/', (req, res, next)=> {
    const name = req.body.name
    const email = req.body.email
    res.status(201).json({
        message: 'hello I am contact post route',
        name,
        email
    })
 });

// Get
router.get('/:id', (req, res, next)=> {
    res.json({
        message: 'I am a single get route'
    })
 });

// Put
router.put('/:id', (req, res, next)=> {
    res.json({
        message: 'I am a put route'
    })
 });

// Delete
router.delete('/:id', (req, res, next)=> {
    res.json({
        message: 'I am a delete route'
    })
 });

module.exports = router