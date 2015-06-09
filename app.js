const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', require('./render/server'));

app.listen(process.env.PORT || 3000);
