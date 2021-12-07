const express = require('express');
//const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const path = require('path');



// intializations
const app = express();


// settings
app.set('port', process.env.PORT || 4000);


// middlewares
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended: false}));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        // console.log('holaaaaaaaaaaaaaaaaa')
        // console.log(file);
        // console.log(process.env.HOST)
        cb(null, uuidv4() + path.extname(file.originalname));
    }
}) 
app.use(multer({storage}).single('image'));

// Global variables
// app.use((req, res, next) => {
//     app.locals.format = format;
//     next();
// });



// routes
//app.use('/api/users', require('./routes/users'));
app.use('/api/items', require('./routes/items'));

// static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;