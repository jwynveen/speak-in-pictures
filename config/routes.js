'use strict';

module.exports = {
  'get /': 'HomeController.index',
  'get /kitchen-sink': 'HomeController.kitchenSink',
  'get /modern-browser': 'HomeController.modernBrowser',
  'get /search': 'SearchController.index',
  'get /meaning/:id': 'MeaningController.detail',
};
