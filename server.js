console.log(process.env);
require('dotenv').config();
var express = require('express'),
    bodyParser = require('body-parser'),
    webhook = require('./modules/webhook'),
    path = require('path'),
    pgp = require('pg-promise'),
    app = express(),
    db = pgp('postgres://qasytzcgbmpbhj:873dfc28dd02790ee007216f213c5e5a4fec821cec8e39788b402dad5b3eb22d@ec2-184-72-249-88.compute-1.amazonaws.com:5432/dfv2bfstc4a302?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory');

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());

app.get('/webhook', webhook.handleGet);
app.post('/webhook', webhook.handlePost);

app.get('/privacy', function(req, res) {
    res.sendFile(path.join(__dirname + '/privacy.html'));
});
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
