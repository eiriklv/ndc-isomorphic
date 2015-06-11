const React = require('react');
const getNdcVideos = require('../services/get-latest-ndc-videos');

const App = require('../components/App.jsx');

module.exports = (req, res) => {
  getNdcVideos((err, videos) => {
    if (err) return res.send(err);

    let appMarkup = React.renderToString(
      <App videos={videos} />
    );

    let markup = `
      <html>
        <body>
          <div id="app">${appMarkup}</div>
          <script>window.__appData = ${JSON.stringify(videos)};</script>
          <script type="text/javascript" src="/bundle.js"></script>
        </body>
      </html>
    `;

    res.send(markup);
  });
};
