const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const moment = require('moment');
const http = require('http');
const rateLimit = require('express-rate-limit')
const app = express();
const path = require('path')
const Cron = require('./functions/Crons');
new Cron();

app.use(cors());        

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(helmet());
app.use(express.static(__dirname + '/public'));
app.use('/documentation', express.static(__dirname + '/docs'));

app.set('view engine', 'ejs');
app.set('views', [path.join(__dirname, 'views')]);
// express session middleware
app.use(session({
    secret: 's3cr3t',
    resave: true,
    saveUninitialized: true
}));

// const limiter = rateLimit({
//     windowMs: 1 * 60 * 1000, // 1 minute
//     max: 5, // 5 requests,
// })
// app.use(limiter)


// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// api routes
let adminApi = require('./routes/admin');
let farmerApi = require('./routes/farmer')
let BookingApi = require('./routes/booking')
let genericApi = require('./routes/generic')
let farmManagerApi =  require('./routes/aggregationOfficer')
let driverApi = require('./routes/driver')
let ussdApi = require('./routes/ussd')
let businessApi = require('./routes/businessOwner')
let storeKeeperApi = require('./routes/storeKeeper')

app.use('/api/v1', adminApi,genericApi,farmerApi,BookingApi,farmManagerApi,driverApi,ussdApi,businessApi, storeKeeperApi);



// set port
const port = process.env.PORT || 9900;

//const server = http.createServer(app);
// start server
app.listen(port, function(){
    console.log(`Server started on port ${port}...`);
});
