const React = require('react');

const Video = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    description: React.PropTypes.string,
    picture: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      name: 'No name',
      description: 'No description',
      picture: 'http://placehold.it/350x150'
    }
  },

  render() {
    return (
      <li>
        <img src={this.props.picture} />
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
      </li>
    );
  }
});

module.exports = Video;
