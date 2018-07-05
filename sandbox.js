// function timeNow() {
//   let d = new Date()
//       let h = (d.getHours()<10?'0':'') + d.getHours()
//       let m = (d.getMinutes()<10?'0':'') + d.getMinutes()
//
//
//   return h + ':' + m
// }
//
// console.log(timeNow())



// routes.get('/:destinationId/guides', (req, res) => {
      // sequelize.query("select count(*) from Destinations as Destinations left join Guides as Guides on Destinations.id = Guides.DestinationId where Destinations.id = Guides.DestinationId group by Guides.DestinationId", {
      //     type: sequelize.QueryTypes.SELECT})
      // .then(count () => {
      //     console.log(count)
      // })
      // .catch(err => {
      //     res.send(err)
      // })

      // select count(*) from "Destinations" as Destinations
      // left join "Guides" as Guides
      // on Destinations.id = Guides."DestinationId"
      // where Destinations.id = Guides."DestinationId"
      // group by Guides."DestinationId"


    // Destination.findAll()
    // .then(destination => {
    //   Guide.findAll({where: {
    //       DestinationId: req.params.destinationId
    //   }}, {include: [Destination]})
    //   .then(guides => {
    //       res.render('guides', {guides: guides})
    //       console.log(guides)
    //     })
    //   .catch(err => {
    //       console.log(err)
    //   })
    // })
// })
