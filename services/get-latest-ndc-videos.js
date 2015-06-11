const vimeo = new (require('vimeo').Vimeo)(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.ACCESS_TOKEN
);

module.exports = (callback) => {
  vimeo.request({
    path: '/users/ndcconferences/videos',
    query: {
      page: 1,
      per_page: 10
    }
  }, function(error, body) {
    callback(error, body.data);
  });
};
