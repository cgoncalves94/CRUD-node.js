// Importing express and creating the router
const express = require('express');
const router = express.Router();

// Importing the Post model
const Post = require('../models/Post');

// POST (create data)
router.post('/', async (req, res) => {

    const postData = new Post({
        user:req.body.user,
        title:req.body.title,
        text:req.body.text,
        hashtag:req.body.hashtag,
        location:req.body.location,
        url:req.body.url,
    });
    // try to insert...
    try{
        const savedPost = await postData.save();
        res.send(savedPost);
    }
    catch(err){
        res.send({message: err});
    }
});

// GET (read all data)
router.get('/', async (req, res) => {
    try{
        const getPosts = await Post.find.limit(10);
        res.send(getPosts);
    }
    catch(err){
        res.json({message: err});
    }
});

// GET (read by ID)
router.get('/:postId', async (req, res) => {
    try{
        const getPostByID = await Post.findById(req.params.postId);
        res.send(getPostByID);
    }
    catch(err){
        res.json({message: err});
    }
});

// PATCH (update data)
router.patch('/:postId', async (req, res) => {
    try{
        const updatePost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: 
                {
                    user:req.body.user,
                    title:req.body.title,
                    text:req.body.text,
                    hashtag:req.body.hashtag,
                    location:req.body.location,
                    url:req.body.url,
                }
            }
        );
        res.send(updatePost);
    }
    catch(err){
        res.send({message: err});
    }
});

// DELETE (delete data)
router.delete('/:postId', async (req, res) => {
    try{
        const deletePostbyID = await Post.deleteOne({_id: req.params.postId});
        res.send(deletePostbyID);
    }
    catch(err){
        res.send({message: err});
    }
});


router.post('/', async (req, res) => {
    console.log(req.body);
});

module.exports = router;
