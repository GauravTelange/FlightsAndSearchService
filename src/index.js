const express = require("express");

const { PORT } = require('./config/serverConfig ');

const setupandAndStartServer = async () =>  {

    const app = express();


    app.listen(PORT, ()  => {
        console.log(`Server Started with Port ${PORT}`);
        console.log(process.env);

    });

}

setupandAndStartServer();

