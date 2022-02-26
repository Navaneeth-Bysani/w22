const app = require('./app.js');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening to PORT - ${PORT}`);
})