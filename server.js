const app = require('./app.js');

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening to PORT - ${PORT}`);
})