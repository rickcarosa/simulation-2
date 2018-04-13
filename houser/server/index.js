const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , port = 4000
    , controller = require('./controller')
    , massive = require('massive')
    , cors = require('cors')
    require('dotenv').config()


    app.use(bodyParser.json());
    app.use(cors());

    massive(process.env.connectionString).then(dbInstance => {
        app.set('db', dbInstance)
    });

    app.get('/api/houses')




    app.listen(4000, () => console.log('listening'));