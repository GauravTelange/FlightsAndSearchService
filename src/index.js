const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require('./config/serverConfig');
const APIRoutes = require('./routes/index');



const setupandAndStartServer = async () =>  {

    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', APIRoutes);


    app.listen(PORT, ()  => {
        console.log(`Server Started with Port ${PORT}`);
        console.log(process.env);

    });

}

setupandAndStartServer();

