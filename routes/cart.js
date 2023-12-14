const express = require('express');
const router = express.Router();

router.get("/cart",(req,res) => {
    res.send("I am the cart");
});


module.exports = router;