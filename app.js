const express = require ('express');
const mongoose = require ('mongoose');
const dotenv = require ('dotenv');
const app = express();
const path = require('path');
const fileUpload = require ('express-fileupload');

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on port no ${PORT}`);
})