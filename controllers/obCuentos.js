const Post = require('../models/myModels');


let obtenerTitulos = (callback) => {
    Post.find({}, 'titulo', (error, posts) => {
        if (error) {
            console.error('Error al obtener los posts:', error);
            callback(error, null);
        } else {
            const titulos = posts.map(post => post.titulo);
            callback(null, titulos);
        }
    });
};

module.exports = obtenerTitulos;