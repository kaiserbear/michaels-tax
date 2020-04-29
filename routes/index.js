var express = require("express");
const middleware = require("../middleware");
var router  = express.Router();

var title = "Michaels - We make tax simple."
var ogImage = '';
var ogDescription = 'Accountants & Tax Advisors'


//root route
router.get("/", function(req, res){
    res.render("landing", {
        title: title,
        ogImage: ogImage,
        ogDesc: ogDescription,
        env: middleware.isLocal()
    });
});


module.exports = router;