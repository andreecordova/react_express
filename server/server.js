const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

// add cors headers
app.use(cors());

//Middlewares
app.use(bodyParser.json());

// use routes
app.use('/', routes);

app.listen(app.get('port'),() => {
  console.log("Start server on port "+app.get('port'))
})