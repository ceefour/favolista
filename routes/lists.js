var express = require('express')
var router = express.Router()
const { sequelize, ListHead, ListItem } = require('../models')

router.get('/', function(req, res, next) {
  return ListHead.all()
    .then(listHeads => {
        let title = 'Daftar Surat - Favolista'
        res.render('lists/index', {title, listHeads})
    })
    .catch(error =>
        res.status(500).send(error))
})

router.get('/:listHeadId(\\d+)', async (req, res, next) => {
    let listHeadId = req.params.listHeadId
    let listHead = await ListHead.find({where: {id: listHeadId}})
    let title = `${listHead.name} - Favolista`
    let listItems = await ListItem.findAll({where: {listHeadId: listHeadId}, order: ['position']})
    res.render('lists/show', {title, listHead, listItems})
        //   res.status(500).send(error))
    })

router.get('/search', async (req, res, next) => {
    let q = req.query.q || 'Allah'
    let title = `Hasil Pencarian "${q}" - Favolista`
    let sql = `SELECT li.*, lh.name list_head_name
        FROM list_item li
        LEFT JOIN list_head lh ON li.list_head_id=lh.id
        WHERE to_tsvector('english', body_text) @@ plainto_tsquery('english', :q)
        ORDER BY list_head_id, position
        LIMIT 100`
    searchResults = await sequelize.query(sql, {replacements: {q}, type: sequelize.QueryTypes.SELECT})
    res.render('lists/search', {title, q, searchResults})
  })
  
module.exports = router
