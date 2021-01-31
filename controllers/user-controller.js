const userModel = require('./../models/users');
const userDataValidator = require('./../helpers/userDataValidator');

function myFunction(name) {
    let mr = name;
    console.log(mr);
}

module.exports = {
    readAll(req, res) {

        userModel.find({})

            .then((response) => {

            })

            .catch((error) => {
            res.json({
                success: false,
                message: error
            });
        });

        res.json({
            success: true,
            users: req,
        });
    },

    read(req, res) {

        userModel.findById(req.params.id)

            .then((response) => {
                if (response) {
                    res.send({
                        success: true,
                        user: response
                    });
                } else {
                    res.send({
                        success: false,
                        message: 'There is no user with the following ID: ' + req.params.id
                    });
                }
            })

            .catch((err) => {
                res.send({
                    success: false,
                    message: err
                });
            });
    },


    async create(req, res) {

    },


    delete(req, res) {

        userModel.findByIdAndRemove(req.params.id)
            .then((response) => {
                res.send({
                    success: true,
                    message: response.username + ' deleted successfully!',
                    user: response
                });
            })

            .catch((err) => {
                res.send({
                    success: false,
                    message: err
                });
            });
    },

    update(req, res) {

        userModel.findOneAndUpdate(
            req.params.id,
            req.body
        )
            .then((response) => {
                res.send({
                    success: true,
                    message: response.username + ' updated successfully!',
                    modified: req.body,

                });
            })

            .catch((err) => {
                res.send({
                    success: false,
                    message: err
                });
            });
    },

    /*update(req, res) {

        userModel.findByIdAndUpdate(req.params.id)
            .then((response) => {
                res.send({
                    success: true,
                    message: response.username + ' updated successfully!',
                });
            })

            .catch((err) => {
                res.send({
                    success: false,
                    message: err
                });
            });
    },*/

};
