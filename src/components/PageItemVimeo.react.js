'use strict';

var _ = require('lodash');
var React = require('react');


var PageItemVimeo = React.createClass({
  getDefaultProps: function () {
    return {
      vimeoId: ""
    };
  },
  
  createUrl: function() {
    var vimeoSrc = 'https://player.vimeo.com/video/'+ this.props.vimeoId;
    return vimeoSrc;
  },

  render: function () {
    return (
      <div className="col-sm-6 middle-col col-sm-offset-3">
        <iframe src={this.createUrl()} width="100%" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
    );
  } 
});

module.exports = PageItemVimeo;