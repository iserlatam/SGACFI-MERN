const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/app', require('./routes/app.routes'))

// Server
app.listen(app.get('port'), () => {
    console.log(`Server is running in ${app.get('port')}`);
})