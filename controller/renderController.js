const mysql = require('mysql');

const conn = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'Navaneeth1@',
    database : 'wissenaire_22'
});

exports.renderAbout = (req, res) => {
  //render About
  console.log("hi");
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

exports.renderProfile = (req, res) => {
  if(req.user) {
    let sql = `SELECT * from user WHERE email = '${req.user.emails[0].value}';`;
    conn.query(sql, (err, rows) => {
        if(err) throw err;
        console.log(rows);
    })
    res.render('profile', {participant : rows[0]});
  } else {
      res.send('profile', {participant : false});
  }
};

exports.renderHome = (req,res) => {
  if(req.user) {
    const qr = ("SELECT * from user where email ='" + req.user.emails[0].value + "';");
    conn.query(qr, (err, rows) => {
      if(err) throw err;
      res.render('index', {participant : rows[0]});
    })
  } else {
    res.render("index", {participant:false});
  }
  
}
