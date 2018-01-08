const express           = require('express')
const hbs               = require('express-handlebars')

const topicController   = require('./config/routes')

const app = express()


app.set('port', process.env.PORT || 4100);
app.set('view engine', 'hbs');
app.engine(".hbs", hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
}));

app.use('/', topicController)

app.listen(app.get('port'), () => console.log('Live on 4100'))
