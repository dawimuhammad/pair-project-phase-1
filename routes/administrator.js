const routes = require('express').Router()
const path = require('path')
const models = require('../models/')
const Destination = models.Destination
const Guide = models.Guide
const sequelize = require('sequelize')


routes.get('/', (req, res) => {
    res.render('administrator-page')
})

routes.get('/destinations', (req, res) => {
    Destination.findAll({include: [Guide]})
    .then(destinations => {
        res.render('destinations', {destinations: destinations})
        // res.send(JSON.stringify(destinations))
    })
    .catch(err => {
        res.send(err)
    })
})

routes.get('/destination-add', (req, res) => {
    let errorMessage = ''
    res.render('destination-add', {errorMessage: errorMessage})
})

routes.post('/destination-add', (req, res) => {
    Destination.create({
        name: req.body.name,
        price: req.body.price,
        city: req.body.city,
        description: req.body.description,
        image: req.body.image,
        maps: req.body.maps
    })
    .then(() => {
        res.redirect('/administrator/destinations')
    })
    .catch(err => {
        res.render('destination-add', {errorMessage: err.message})
    })
})

routes.get('/:destinationId/guides', (req, res) => {
    Destination.findAll()
    .then(destination => {
      Guide.findAll({where: {
          DestinationId: req.params.destinationId
      }}, {include: [Destination]}, {order: ['id', 'asc']})
      .then(guides => {
          res.render('guides', {guides: guides, destinationId: req.params.destinationId})
        })
      .catch(err => {
          console.log(err)
      })
    })
})

routes.get('/:destinationId/guide-add', (req, res) => {
    let errorMessage = ''
    res.render('guide-add', {errorMessage: errorMessage, destinationId: req.params.destinationId})
    // res.send('success')
})

routes.post('/:destinationId/guide-add', (req, res) => {
    Guide.create({
        name: req.body.name,
        kuota: req.body.kuota,
        schedule: req.body.schedule,
        DestinationId: req.params.destinationId
    })
    .then(
        res.redirect('/administrator/destinations'))
    .catch(err => {
        console.log(err)
    })
})

routes.get('/:guideId/guide-edit', (req, res) => {
    let errorMessage = ''
    Guide.findOne({
        where: {id: req.params.guideId}
    })
    .then(guideFind => {
        res.render('guide-edit', {guide: guideFind, errorMessage: errorMessage})
    })
    .catch(err => {
        console.log(err)
    })
})

routes.post('/:guideId/guide-edit', (req, res) => {
    Guide.update({
        name: req.body.name,
        kuota: req.body.kuota,
        schedule: req.body.schedule,
    }, {
      where: {id: req.params.guideId}})
    .then(
        res.redirect('/administrator/destinations')
    )
    .catch(err => {
        console.log(err)
    })
})

routes.get('/:guideId/guide-delete', (req, res) => {
    Guide.destroy({
        where: {id: req.params.guideId}
    })
    .then(
        res.redirect('/administrator/destinations')
    )
    .catch(err => {
        console.log(err)
    })
})


module.exports = routes

























//
