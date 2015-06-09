const React = require('react');

const Video = require('./Video.jsx');

const App = React.createClass({
  propTypes: {
    videos: React.PropTypes.array.isRequired
  },

  render() {
    let videos = this.props.videos.map((video, i) => {
      return (
        <Video
          key={i}
          name={video.name}
          description={video.description}
          picture={video.pictures.sizes[1].link}
        />
      );
    });

    return <ul>{videos}</ul>;
  }
});

module.exports = App;
