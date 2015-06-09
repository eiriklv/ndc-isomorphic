const React  = require('react');

const App = require('../components/App.jsx');

document.addEventListener('DOMContentLoaded', (event) => {
  let videos = window.__appData || [];

  React.render(
    <App videos={videos} />,
    document.querySelector('#app')
  );
});
