const axios = require('axios');


module.exports = {
    read: (request, response) => {
        console.log("haha")
        const dbInstance = request.app.get('db')
        dbInstance.get_houses()
        .then(houses => response.status(200).send(houses))   
        .catch( (err) => {
            response.status(500).send(err)
        });
    },

    create: (request, response) => {
        const dbInstance = request.app.get('db')
        const {name, address, city, state, zip} = request.body

        dbInstance.create_house([name, address, city, state, zip])
            .then( () => response.status(200).send("all good") )
            .catch( (err) => {
                console.log(err)
                res.status(500).send(err) 
            })
    },

    update: (request,response) => {
        let id = request.params.id
        let dbInstance = request.app.get('db')
        let {name, address, city, state, zip} = request.body

        dbInstance.update_house([id, name, address, city, state, zip]).then(results => {
            response.send(results)
        })
    },

    delete: (request, response) => {
        let id = request.params.id
        let dbInstance = request.app.get('db')

        dbInstance.delete_house([id]).then(() => {
            response.sendStatus(200)
        })
    }
}