var express = require('express')
var router = express.Router()
const { ListHead, ListItem } = require('../models')

router.get('/', function(req, res, next) {
  return ListHead.all()
    .then(listHeads => {
        res.render('lists/index',
            {listHeads: listHeads})
    })
    .catch(error =>
        res.status(500).send(error))
})

router.get('/:listHeadId', async (req, res, next) => {
    let listHeadId = req.params.listHeadId
    listHead = await ListHead.find({where: {id: listHeadId}})
    listItems = await ListItem.findAll({where: {listHeadId: listHeadId}, order: ['position']})
    res.render('lists/show', {listHead, listItems})
        //   res.status(500).send(error))
  })
  
module.exports = router
