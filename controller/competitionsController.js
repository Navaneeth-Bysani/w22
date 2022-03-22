const catchAsync = require("./../utils/catchAsync");
const User = require('./../model/userModel');

const findUser = async (email) => {
    const user = await User.findOne({email : email});
    return user;
}

exports.artelligence = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("artelligence", {participant:user, isIITBBS : isIITBBS});
      } else {
        res.render("artelligence", {participant:false});
    }
});

exports.riddlegenix = catchAsync (async (req,res,next) => {
    if(req.user) {
        const user = await findUser(req.user.emails[0].value);
        let isIITBBS; 
        if(user.email.endsWith("@iitbbs.ac.in")) {
            isIITBBS = "yes";
        } else {
            isIITBBS = "no";
        }

        res.render("riddlegenix", {participant:user, isIITBBS : isIITBBS});
    } else {
        res.render("riddlegenix", {participant:false});
    }
});