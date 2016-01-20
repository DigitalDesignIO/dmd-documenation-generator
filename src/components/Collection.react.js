var React = require('react');

var PageItemText = require('./PageItemText.react');


var Collection = React.createClass({
  getDefaultProps: function () {
    return {
      pageItems: []
    };
  },

  createPageItems: function() {
    var items = this.props.pageItems.map(
      function(item, index) {
        console.log(index);
        return (<PageItemText content={item.content}/>);
      }, 
      this // bind
    );
    return items;
  },

  render: function () {
    return (
      <div className="row">
        {this.createPageItems()}
      </div>
    );
  } 
});

module.exports = Collection;