var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('index', { title: 'Favolista: Temukan Inspirasi Favoritmu' });
});

router.get('/about', async (req, res, next) => {
  res.render('about', { title: 'Tentang Kami - Favolista' });
});

module.exports = router;
