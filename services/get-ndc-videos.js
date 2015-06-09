const { Vimeo } = require('vimeo-api');

const lib = new Vimeo(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.ACCESS_TOKEN
);

module.exports = (page, perPage, callback) => {
  lib.request({
    path: '/users/ndcconferences/videos',
    query: {
      page: page || 0,
      per_page: perPage || 10
    }
  }, function(error, body) {
    callback(error, body.data);
  });
};
