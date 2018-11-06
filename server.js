const express = require('express');
const cors = require('cors');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();

app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(cors());
app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => console.log(`Museum Print Vuer is running on ${app.get('port')}.`));