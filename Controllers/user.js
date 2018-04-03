const express = require("express");
const router = express.Router();
const User = require('../Models/user');

router.post("/authenticate", (request, response) => {
    //find whether user exists
    //if user doesn't exist, save their credentials in DB first, then immediately redirect user to another page to get their full name
    //of user exists but pw wrong, shake the form while showing the red cursor  
});

module.exports = router;