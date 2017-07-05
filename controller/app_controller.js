var express = require("express");

var router = express.Router();

var path = require("path");
var User = require("./../models/User.js")

router.get("/", function(req, res) {
    res.send("index.html");
});

router.get("/Fitness", function(req, res) {
    // User.find({}, function(error, doc) {
    //     if (error) {
    //         res.send(error);
    //     } else {
    //         res.send(doc);

    //     }
    // });
    res.sendFile(path.join(__dirname, "../public/Fitness.html"));
});

router.post("/Fitness", function(req, res) {

    var newUser = new User(req.body);


    newUser.save(function(error, doc) {
        // send an error to the browser
        if (error) {
            res.send(error);
        }
        // or send the doc to our browser
        else {
          res.sendFile(path.join(__dirname, "../public/Fitness.html"));
            console.log(doc);

        }
    });
});

router.get("/Handbook", function(req, res) {
    User.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});
router.get("/FirmDirectory", function(req, res) {
    User.find({}, function(error, doc) {
        if (error) {
            res.send(error);
        } else {
            res.send(doc);
        }
    });
});


router.get("/reactIndex", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/ReactIndex.html"));
});

module.exports = router;