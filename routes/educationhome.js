var express = require('express');
var router = express.Router();

//This is the findings page.
router.get('/', function(req, res, next) {
    res.render('education_home', { title: 'Education'});
});

module.exports = router;
