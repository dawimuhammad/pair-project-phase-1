const routes = require('express').Router()
const path = require('path')
const models = require('../models/')
const User = models.User

routes.get('/register', (req, res) => {
    let errorMessage = ''
    res.render('register', {errorMessage: errorMessage})
})

routes.post('/register', (req, res, next) => {
    User.findAll({ where: { email: req.body.email } })
    .then(findEmailDuplicate => {
        if (findEmailDuplicate.length >= 1) {
              let errorMessage = 'Email yang anda input sudah dipakai!'
              res.render('register', {errorMessage: errorMessage})
              console.log('-------> duplicate email')
        } else {
            next()
        }
    })
    .catch(err => {
      let errorMessage = err.message
      res.render('register', {errorMessage: errorMessage})
    })
}, (req, res) => {
    User.create({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
    })
    .then(
        res.send('success'))
    .catch(
        res.send('failed'))
})

module.exports = routes
