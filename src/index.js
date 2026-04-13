const express = require("express");
const bodyParser = require("body-parser");


const { PORT } = require('./config/serverConfig');
const APIRoutes = require('./routes/index');

const db  = require('./models/index');
const {Airplane} = require('./models/index');
//const { City, Airport } = require('./models/index');
const { where } = require("sequelize");
const setupandAndStartServer = async () =>  {

    const app = express();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.use('/api', APIRoutes);


    app.listen(PORT, async ()  => {
        console.log(`Server Started with Port ${PORT}`);
        console.log(process.env);
        // if(process.env.SYNC_DB) {
        //     await db.sequelize.sync({ alter: true });
            
        // }
        // await Airplane.create({
        //     modelNumber: 'VIshjit 420',
            
        // });


        
      

    });
 
}

setupandAndStartServer();

