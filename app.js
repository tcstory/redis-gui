let express = require('express');
let app = express();

let indexCtrl = require('./controllers/index');

app.use(express.static('public'));

app.get('/', indexCtrl.index);

app.listen('6060', function () {
    console.log('App is running...')
});