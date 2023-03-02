const express=require('express');
// const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
app.use(cookieParser());
app.use(express.urlencoded());
const db=require('./config/mongoose');
app.set('view engine' , 'ejs');
app.set('views', './views');
app.use(express.static('assets'));
app.use('/', require('./routes'));

// app.use(bodyParser.json());



app.listen(port,function(err){
    if(err){
        console.log(`ERROR: ${err}`);
    }

    console.log('running on port');
})
