var express = require('express');
var router = express.Router();
var request = require('superagent');
var wget = require('wget-improved');
var authToken = process.env.API_TOKEN;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

function unrestrict(link) {
  request
  .post('https://api.real-debrid.com/rest/1.0/unrestrict/link')
  .type('form')
  .set('Authorization', 'Bearer ' + authToken)
  .send({link: link})
  .end(function(err, res) {
    if (err) {
      console.log("ERROR");
      console.log(err);
      return err;
    } else {
      var data = res.body
      console.log("EXTENSION : " + data.filename.substr(data.filename.lastIndexOf('.') + 1));
      console.log("LINK : " +  data.download);
      var output = './output';
      download(data.download, output, {})
    }
  });
}

function download(link, output, options) {
  var download = wget.download(link, output, options);
  download.on('error', function(err) {
      console.log(err);
  });
  download.on('start', function(fileSize) {
      console.log(fileSize);
  });
  download.on('end', function(output) {
      console.log(output);
      return output;
  });
  download.on('progress', function(progress) {
    console.log(progress);
  });
}
