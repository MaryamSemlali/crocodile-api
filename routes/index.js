const userController = require('./../controllers/user-controller');


module.exports = (server) => {

    /**
     * Users Routes
     */
    server.get('/users', userController.readAll);

    server.get('/users/:id', userController.read);

    server.post('/users', userController.create2);

    server.delete('/users/:id', userController.delete);

    server.put('/users/:id', userController.update);

};
