const express = require('express');
require('./database/db');
const router = require('./routes/router');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router)


app.listen(3035, () => {
    console.log('Server is up and running on 3030!!!')
})