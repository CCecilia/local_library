const express = require('express');
const router = express.Router();

//  Homepage
router.get('/', function(req, res){
    res.send('Wiki Homepage');
});

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

module.exports = router;