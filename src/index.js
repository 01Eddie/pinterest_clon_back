const express = require('express');
const path = require('path');
const  morgan = require('morgan');
const multer = require('multer')
//Initializations
const app = express(); 

//Settings

app.set('puerto', process.env.PORT || 3000);
app.set('vistas', path.join(__dirname,'views'));
app.set('motor de busqueda','ejs');

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(multer({dest: path.join(__dirname,'public/img/uploads')}).single('image')); //La palabra image viene de la etiqueta name como es un archivo entonces viene de input:File


//Global variables



//Routes
app.use(require('./routes/index'));



//Static files



//Start the server
app.listen(app.get('puerto'), () => {
    console.log(`Puerto de servicio ${app.get('puerto')}`); 
})