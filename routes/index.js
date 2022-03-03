const express = require("express");
const userController = require("../controller/userController");
const renderController = require("../controller/renderController");
const wsController = require("../controller/wsController");
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
//individual competition routes

//individual workshop routes
router.get("/workshop-blockchain", wsController.blockchain);
//posting a query in contact

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
