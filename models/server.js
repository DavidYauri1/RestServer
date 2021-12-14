const express = require('express')
const cors = require('express')

class server{
    constructor(){
        this.app = express();

        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';
        this.middleware();
       
        this.router();

        
    }

    middleware() {

        //Lectura de Json 

        this.app.use(express.json());

        this.app.use.Json

        //Cors
        this.app.use( cors());

        //Directorio Publico
        this.app.use( express.static('public') );
    }


    router(){         
       this.app.use(this.usuarioPath, require('../routes/user'))
    }

    listen() {
        this.app.listen( this.port , () => {
            console.log("Port :"+this.port);
        } )
    }


}


module.exports = server;