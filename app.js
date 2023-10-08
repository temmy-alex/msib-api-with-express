require('dotenv').config();

const express = require('express');
const app = express();
const router = require('./routes');
const errorHandler = require('./middlewares/error-handler');
const port = process.env.PORT || 8050;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/v1', router);
app.use(errorHandler);

if (process.env.APP_ENV != "test") {
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    });
}