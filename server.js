const express = require('express');
const cors = require('cors');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(cors());
app.set('port', process.env.PORT || 3010);
app.get('/', (request, response) => {
  response.send('Hola!');
});

app.listen(app.get('port'));