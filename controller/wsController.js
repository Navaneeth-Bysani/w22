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

exports.android = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("android", {participant : user});
    } else {
        res.render("android", {participant : false});
    }
});

exports.fullstack = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("fullstack", {participant : user});
    } else {
        res.render("fullstack", {participant : false});
    }
});

exports.ml = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("ml", {participant : user});
    } else {
        res.render("ml", {participant : false});
    }
});

exports.ethicalHacking = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("ethicalHacking", {participant : user});
    } else {
        res.render("ethicalHacking", {participant : false});
    }
});

exports.automobile = catchAsync(async(req,res,next) => {
    if(req.user) {
        const user = await User.findOne({email : req.user.emails[0].value});
        res.render("automobile", {participant : user});
    } else {
        res.render("automobile", {participant : false});
    }
});