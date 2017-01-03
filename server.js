console.log(process.env);
require('dotenv').config();
var express = require('express'),
    bodyParser = require('body-parser'),
    webhook = require('./modules/webhook'),
    app = express();

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
