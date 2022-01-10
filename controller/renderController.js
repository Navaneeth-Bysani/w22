exports.renderAbout = (req, res) => {
  //render About
  res.render("about");
};

exports.renderCompetitions = (req, res) => {
  //render Competitions
  res.render("competitions");
};

exports.renderWorkshops = (req, res) => {
  //render Workshops
  console.log("req");
  res.render("workshop");
};

exports.renderGuestLectures = (req, res) => {
  //render Guest Lectures
  res.render("guestlectures");
};

exports.renderExhibits = (req, res) => {
  //render Exhibits
  res.render("initiatives");
};

exports.renderInitiatives = (req, res) => {
  //render Initiatives
  res.render("initiatives");
};

exports.renderHighlights = (req, res) => {
  //render Highlights
  res.render("highlights");
};

exports.renderTeam = (req, res) => {
  //render Team
  res.render("team");
};

exports.renderSponsors = (req, res) => {
  //render Sponsors
  res.render("sponsors");
};

exports.renderContact = (req, res) => {
  //render Contact
  res.render("contact");
};

exports.renderUser = (req, res) => {
  res.render("profile.ejs");
};

exports.getMainPage = (req, res) => {
  res.render("index");
};
