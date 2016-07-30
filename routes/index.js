var express = require('express');
var router = express.Router();

var configTableController = require('../server/config-table/config-table-controller');
_configTableController = new configTableController();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/config',_configTableController.load);


module.exports = router;