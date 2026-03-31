const express = require("express");
require('dotenv').config()

const setupandAndStartServer = async () =>  {

    const app = express();
    const PORT = 3000;

    app.listen(PORT, ()  => {
        console.log(`Server Started with Port ${PORT}`);
        console.log(process.env);

    });

}

setupandAndStartServer();

