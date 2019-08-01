const express = require('express');
const router = express.Router();


//MODELS
const Book = require("../models/Book");


//DATA ADDING-----------------------------------------
router.post('/new', function(req, res, next) {

    const book = new Book({
       tags: ["a","b"]


    // const book = new Book({
    //     title: "PythonBook",
    //     published: false,
    //     published: false,
    //     comments: [{ message: "Acayip bi şey"}],
    //     meta: {
    //         votes: 90,
    //         favs: 340
    //     }

    });

    book.save((err,data) => {
        if (err)
            console.log(err);
        res.json(data);
    });
});

//QUERY------------------------------------------------
router.get("/search" , (req,res) => {
    Book.find({ published: false } , "title" , (err , data) => {
        res.json(data);
    });
});

//SINGULAR QUERY------------------------------------------------
router.get("/searchOne" , (req,res) => {
    Book.findOne({ title: "NodeJSBook" } , (err , data) => {
        res.json(data);
    });
});

//ID QUERY------------------------------------------------
router.get("/searchID" , (req,res) => {
    Book.findById("5d21cb8b0559d028606d2408" , (err , data) => {
        res.json(data);
    });
});

//UPDATE------------------------------------------------
router.put("/searchupdate" , (req,res) => {
    Book.update({ published: false } , { published: true} , (err , data) => {
        res.json(data);
    });
});
//ID-UPDATE------------------------------------------------
router.put("/searchIDupdate" , (req,res) => {
    Book.findByIdAndUpdate( "5d21cb8b0559d028606d2408" , { published: false } , (err , data) => {
        res.json(data);
    });
});

//DELETE------------------------------------------------
router.delete("/delete" , (req,res) => {
    Book.findById( "5d2723043d868f3168a18ddb" , (err , book) => {
        book.remove((err , data) => {
            res.json(data);
        });
    });
});

//SORT------------------------------------------------
router.get("/sort" , (req,res) => {
    Book.find({ } , (err , data) => {
        res.json(data);
    }).sort({ "meta.favs": 1 });
});

//QUERY------------------------------------------------
router.post("/query" , (req,res) => {

    const checkarray = ["y","j"];
    regex = checkarray.join("|");


    Book.find({ title: { "$regex": regex , "$options": "i"} } , "title" , (err , data) => {
        res.json(data);
    });
});

//QUERY 2 ------------------------------------------------
router.post("/querytwo" , (req,res) => {

    Book.find( { tags: { $all: [ "ekin", "iau" ]}} , "tags" , (err , data) => {
        res.json(data);
    });
});
//---------------------------------------------------------


module.exports = router;
