const express = require('express');
const userController = require('../controller/userController');
const renderController = require('../controller/renderController');
const router = express.Router();

//frontend routes
router.get('/profile', userController.getProfile);
router.get('/about', renderController.renderAbout);
router.get('/competitions', renderController.renderCompetitions);
router.get('/workshops', renderController.renderWorkshops);
router.get('/guestlectures', renderController.renderGuestLectures);
router.get('/exhibits', renderController.renderExhibits);
router.get('/initiatives', renderController.renderInitiatives);
router.get('/highlights', renderController.renderHighlights);
router.get('/team', renderController.renderTeam);
router.get('/sponsors', renderController.renderSponsors);
router.get('/contact', renderController.renderContact);


//individual competition routes

//individual workshop routes

//posting a query in contact

module.exports = router;