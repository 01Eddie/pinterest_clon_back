const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('Pagina de inicio');
});

router.get('/upload', (req, res) => {
    //res.send('Forma de subir');//Esto tan solo es una prueba si funciona la pag
    //res.render('upload');
    res.render('upload');
});

  

router.post('/upload', (req, res)=>{
    console.log(req.file);
    
    res.send('Subido (Uploaded)');
});

router.get('/image/:id', (req,res) => {
    res.send('Imagen de perfil(Profile image)');

})

router.get('/image/:id/delete', (req,res) => {
    res.send('Imagen Borrada (image deleted)');
});


module.exports = router;
