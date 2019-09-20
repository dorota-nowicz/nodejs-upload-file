var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET upload page. */
router.get('/uploadfile', function(req, res, next) {
	 res.render('uploadfile', { title: 'Upload File Test' });

});

/* POST file. */
router.post('/uploadfile', function(req, res, next) {
	 var form = new formidable.IncomingForm();

	 form.parse(req, function (err, fields, files) {
		 var oldpath = files.filetoupload.path;
		 console.log(oldpath);
		 var newpath = './public/uploades/' + files.filetoupload.name;
		 fs.rename(oldpath, newpath, function (err) {
			if (err) throw err;
			res.render('uploadfile', { title: 'Upload File Test' , msg: 'File uploaded and moved!'})
		 });
	 });
					
});


module.exports = router;
