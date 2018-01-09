const express           = require('express')
const mongoose          = require('mongoose')
const passport          = require('passport')
const flash             = require('connect-flash')
const morgan            = require('morgan')
const cookieParser      = require('cookie-parser')
const hbs               = require('express-handlebars')
const parser            = require('body-parser')
const methodOverride    = require('method-override')
const session           = require('express-session')

const dataController    = require('./config/routes')

const app               = express()

mongoose.connect('mongodb://localhost/bankingqa')

app.use(morgan('dev'))
app.use(cookieParser())
app.use(parser())

app.set('port', process.env.PORT || 4100)
app.set('view engine', 'hbs')
app.engine(".hbs", hbs({
    extname:        '.hbs',
    partialsDir:    'views/',
    layoutsDir:     'views/',
    defaultLayout:  'layout'
}))

app.use(session({ secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS' })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./config/passport')(passport);

require('./config/passport')(passport);

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

var routes = require('./config/routes');
app.use(routes);

app.use(methodOverride('_method'))
app.use(parser.urlencoded({ extended: true }))
app.use('/', dataController)

app.listen(app.get('port'), () => console.log('Live on 4100'))
