var request = require('superagent');
var authToken = process.env.API_TOKEN;

console.log("API_TOKEN");
console.log(authToken);

request
.get('https://api.real-debrid.com/rest/1.0/user?auth_token=' + authToken)
.set('Accept', 'application/json')
.end(function(err, res) {
  if (err) {
    console.log("ERROR");
    console.log(err);
    return err;
  } else {
    var data = res.body
    console.log(data);
  }
});

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
    console.log(data);
  }
});
