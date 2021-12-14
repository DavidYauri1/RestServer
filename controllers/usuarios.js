const { request , response } = require('express');


const UsuariosGet =  (req =request, res = response) => {

    const  { q , nombre  = "No Name" , apikey} = req.query;
    res.json({
        msg: 'get Api-Control',
        q,
        nombre,
        apikey
    });
};

const UsuariosPost = function (req , res = response) {
    const { nombre, edad} = req.body;
    res.json({
        msg: 'get Post-Contro',
        nombre,
        edad
    })
}
const UsuariosPut = function (req, res = response) {

    const {id} = req.params;   

    res.json({
        msg: 'get Put-Contro',
        id
        
    })
}
const UsuariosDelete = function (req, res = response) {
    res.json({
        msg: 'get Delete-Contro'
    })
}
const UsuariosPatch = function (req, res = response) {
    res.json({
        msg: 'get Patch-Contro'
    })
}





module.exports = {
    UsuariosGet,
    UsuariosPost,
    UsuariosPut,
    UsuariosDelete,
    UsuariosPatch
}