const express = require("express");
const userController = require("../controller/userController");
const renderController = require("../controller/renderController");
const paymentController = require("../controller/paymentController");
const wsController = require("../controller/wsController");
const competitionController = require("./../controller/competitionsController");

const app = require("../app");
const router = express.Router();

function ensureAuthenticated(req, res, next) {
    if (req.user) { 
      return next();
    }
    res.redirect('/auth/google')
}

//frontend routes
router.get("/", renderController.renderHome);
router.get("/profile", ensureAuthenticated, renderController.renderProfile);
router.get("/about", renderController.renderAbout);
router.get("/competitions", renderController.renderCompetitions);
router.get("/workshops", renderController.renderWorkshops);
router.get("/guest-lectures", renderController.renderGuestLectures);
router.get("/exhibits", renderController.renderExhibits);
router.get("/initiatives", renderController.renderInitiatives);
router.get("/highlights", renderController.renderHighlights);
router.get("/teams", renderController.renderTeam);
router.get("/sponsors", renderController.renderSponsors);
router.get("/reachUs", renderController.renderContact);
router.post("/contact", userController.postContact);
router.post("/updateProfile", userController.updateProfile);
router.post("/register-competition",ensureAuthenticated, userController.registerCompetition);

//individual workshop routes
router.get("/workshop-blockchain", wsController.blockchain);
router.get("/workshop-android", wsController.android);
router.get("/workshop-fullstack", wsController.fullstack);
router.get("/workshop-ml", wsController.ml);
router.get("/workshop-ethicalhacking", wsController.ethicalHacking);
router.get("/workshop-automobile", wsController.automobile);
//posting a query in contact


//individual competition routes
router.get("/artelligence", competitionController.artelligence);
router.get("/riddlegenix", competitionController.riddlegenix);
//payment route
// router.post('/payment', paymentController.initiatePayment);
//single webpages
//1. about
//2. profile
//3. guest lectures
//4. exhibits
//5. initiatives
//6. highlights
//7. team
//8. sponsors
//9. contact

module.exports = router;
