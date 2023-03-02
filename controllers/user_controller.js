
const User = require('../models/user');

module.exports.profile = function (req, res) {

    if (req.cookies.user_id) {
        let id = req.cookies.user_id;
        User.findById(id).then(function (user) {
            console.log(user);
            return res.render('home', {
                title: user.name,
                user: user
            })
        })
    }
    else {
        return res.redirect('/users/signIn');
    }
}


module.exports.signUp = function (req, res) {
    return res.render('user_sign_up', {
        title: 'Codial | signUp'
    })
}

module.exports.signIn = function (req, res) {
    return res.render('user_sign_in', {
        title: 'Codial | signIn'
    })
}

module.exports.create = function (req, res) {

    if (req.body.password != req.body.confirmPassword) {
        return res.redirect('back');
    }
    User.findOne({ email: req.body.email }).then(function (user, err) {
        if (err) {
            console.log(err);
        }
        if (!user) {
            User.create(req.body);
        }
        res.redirect('/users/signIn');
    })
}

module.exports.createSession = function (req, res) {
    //find the user 

    User.findOne({ email: req.body.email }).then(function (user) {
        //handle if user
        if (user) {
            //handle if pass is different     
            if (user.password != req.body.password) {
                return res.redirect('back');
            }
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');
        }
        else {
            return res.redirect('back');
        }
    })
}