var request = require('superagent');
var authToken = process.env.API_TOKEN;

request
.post('https://api.real-debrid.com/rest/1.0/unrestrict/link')
.type('form')
.set('Authorization', 'Bearer ' + authToken)
.send({link: 'http://uptobox.com/qlifxq1rkkbb'})
.end(function(err, res) {
  if (err) {
    console.log("ERROR");
    console.log(err);
    return err;
  } else {
    var data = res.body
    console.log("EXTENSION : " + data.filename.substr(data.filename.lastIndexOf('.') + 1));
    console.log("LINK : " +  data.download);
  }
});
