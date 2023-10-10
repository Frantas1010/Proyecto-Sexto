const obtenerTitulos = require('./obCuentos');


exports.inicio = (req, res) => {
    obtenerTitulos((error,titulos)=> {
        if(error){
            console.log('Error', error);
        }else{
            mostrarRecuadro = false;
            res.render("home", { tit: "", cont: "", mostrarRecuadro,  info : titulos });
        }
    })
};

exports.form = (req, res) => {
    res.render("formulario");
};
