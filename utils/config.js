require('dotenv').config();

module.exports = {
    MONGODB_URI : process.env.MONGODB_URI,
    PORT : process.env.PORT,
    NODE_ENV : process.env.NODE_ENV,
    HOST : process.env.HOST,
    EMAIL_PASSWORD : process.env.EMAIL_PASSWORD,
    EMAIL : process.env.EMAIL,
    SENDGRID_API_KEY : process.env.SENDGRID_API_KEY
}