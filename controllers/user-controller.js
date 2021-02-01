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

    create2(req, res) {
        let userInfo = req.body;

        if(userDataValidator(userInfo)) {
            userModel.findOne({ email: userInfo.email }).then((userWithEmail) => {
                if(userWithEmail) {
                    res.send({
                        success: false,
                        message: 'Email duplicated'
                    });
                }
            }).catch(() => {
                res.send({
                    success: false,
                    message: ''
                });
            })
            userModel.findOne({ username: userInfo.username }).then((userWithUsername) => {
                if(userWithUsername) {
                    res.send({
                        success: false,
                        message: 'Username duplicated'
                    });
                } else {
                    userModel.create(userInfo).then((user) => {
                        res.send({
                            success: true,
                            user: user
                        });
                    }).catch(() => {
                        res.send({
                            success: false,
                            message: 'the user was not created'
                        });
                    })

                }
            }).catch(() => {
                res.send({
                    success: false,
                    message: 'error'
                });
            })

        } else {
            res.send({
                success: false,
                message: 'something wrong with the body'
            });
        }
    },

    async create(req, res) {
        let userInfo = req.body;

        if(userDataValidator(userInfo)) {
            let userWithEmail = await userModel.findOne({ email: userInfo.email })
            let userWithUsername = await userModel.findOne({ username: userInfo.username })

            if(userWithEmail) {
                res.send({
                    success: false,
                    message: 'Email duplicated'
                });
            } else if (userWithUsername) {
                res.send({
                    success: false,
                    message: 'Username duplicated'
                });
            } else {
                let user = await userModel.create(userInfo)
                res.send({
                    success: true,
                    user: user
                });
            }
        } else {
            res.send({
                success: false,
                message: 'something wrong with the body'
            });
        }
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
