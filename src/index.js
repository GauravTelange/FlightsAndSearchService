const express = require("express");

const setupandAndStartServer = async () =>  {

    const app = express();
    const PORT = 3000;

    app.listen(PORT, ()  => {
        console.log(`Server Started with Port ${PORT}`);

    });

}

setupandAndStartServer();

