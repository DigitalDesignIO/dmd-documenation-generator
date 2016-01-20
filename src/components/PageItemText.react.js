var React = require('react');

var PageItemText = React.createClass({
  getDefaultProps: function () {
    return {
      content: "text"
    };
  },

  render: function () {
    return (
      <div className="col-sm-6 middle-col col-sm-offset-3">
        <p>
          Latin placeholder: nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod
        </p>
        <p>
          Latin placeholder: nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod
        </p>
      </div>
    );
  } 
});

module.exports = PageItemText;