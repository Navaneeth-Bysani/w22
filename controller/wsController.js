const User = require('./../model/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.blockchain = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("blockchain", {participant : user});
    } else {
        res.render("blockchain", {participant : false});
    }

});