var http = require('https');

module.exports = {
  $get: function(url, callback){
    return http.get(url, (resp) => {
      var data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        var returnData = JSON.parse(data);
        callback({
          available: returnData.results[0].avail
        });
      });
    });
  }
}