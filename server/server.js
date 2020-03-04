const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

//Settings
app.set('port', process.env.APP_SERVER_PORT || 3000);

// add cors headers
app.use(cors());
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

//Middlewares
app.use(bodyParser.json());

// use routes
app.use('/', routes);

app.listen(app.get('port'),() => {
  console.log("Start server on port " + app.get('port'))
})