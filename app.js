const express = require('express');
const path = require('path');
const app = express();

const renderServer = require('./render/server');

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', renderServer);

app.listen(process.env.PORT || 3000);
