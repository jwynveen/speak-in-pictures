'use strict';

module.exports = {
  'get /': 'HomeController.index',
  'get /kitchen-sink': 'HomeController.kitchenSink',
  'get /modern-browser': 'HomeController.modernBrowser',
  'get /meaning/:id': 'MeaningController.detail',
};
