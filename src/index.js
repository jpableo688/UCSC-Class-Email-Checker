var scraper = require('./scraper');
var emailer = require('./email');
var url = 'https://andromeda.miragespace.net/slugsurvival/tracking/latestOne?termId=2190&courseNum=41379';

function checkAvailability(){
  scraper.$get(url, (resp) => {
    if(resp.available != 0){
      emailer.sendEmail();
      clearInterval(interval);
      return true;
    }
    else{
      console.log(resp.available);
      return false;
    }
  });
}

var interval = setInterval(checkAvailability, 300000);
