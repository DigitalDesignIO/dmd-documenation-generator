'use strict';

var _ = require('lodash');
var async = require('async');
var React = require('react');

var endsWith = require('../utils/string').endsWith;

var Header = require('./Header.react');
var Navigation = require('./Navigation.react');
var Collection = require('./Collection.react');


var Application = React.createClass({
  getInitialState: function () {
    return {
      structure: {},
      content: [],
      pages: [],
      currentPage: {},
      currentPageContent: []
    };
  },

  componentDidMount: function() {
    var that = this;
    async.waterfall([
        function(doneOne) { that.loadStructure(doneOne) },
        function(structure, doneTwo) {
          that.loadContent(structure, doneTwo);
        },
      ],
      function(err, structure, content) {
        console.log(structure);
        console.log("loaded pageItems count:", content.length);
        if (that.isMounted()) {
          var pages = _.filter(content, _.matches({fileName: 'title.txt'}));
          that.setState({
            structure: structure,
            content: content,
            pages: pages
          });
          that.setCurrentPage(pages[0]);
          that.setDocumentTitle(structure.course+" - "+structure.student);
        }
      }
    );
  },

  loadStructure: function(done) {
    $.get('./structure.json')
    .done(function(data) {
      done(null, data);
    })
    .fail(function() {
      console.error("Can't parse or load structure.json");
      done(new Error());
    });
  },

  loadContent: function(structure, done) {
    // create flat structure to hold all dynamic pageItems
    var allPageItems = [];
    var pageNames = _.keys(structure.pages);
    _.each(pageNames, function(pageName) {
      var pageItems = structure.pages[pageName];
      _.each(pageItems, function(fileName, index) {
        allPageItems.push({
          pageName: pageName,
          subPageIndex: index,
          fileName: fileName,
          content: null
        });
      });
    });
    // load content of all pageItems
    var reqests = _.map(allPageItems, function(pageItem){
      var path = './content/' + pageItem.pageName +'/'+ pageItem.fileName;
      var shouldLoadContent = endsWith(pageItem.fileName, '.txt');
      return function(cb){
        if (shouldLoadContent) {
          $.get(path)
            .done(function(data) {
              pageItem.content = data;
              cb(null, pageItem)
            })
            .fail(function() {
              console.error("Can't load", path);
              cb(new Error());
            });
        } else {
          cb(null, pageItem);
        }
      };
    });
    async.parallel(reqests, function(err, results) {
      if (err) done(err);
      else done(null, structure, results);
    });
  },

  setCurrentPage: function(page) {    
    this.setState({
      currentPage: page,
      currentPageContent: _.filter(this.state.content, _.matches({pageName: page.pageName}))
    });
  },

  setDocumentTitle: function(title) {
    document.title = title;
  },

  render: function () {
    return (
      <div>
        <Header 
          school={this.state.structure.school}
          semester={this.state.structure.semester}
          teacher={this.state.structure.teacher}
          course={this.state.structure.course}
          student={this.state.structure.student} />
        <div className="container">
          <Navigation
            pages={this.state.pages}
            currentPage={this.state.currentPage}
            setCurrentPage={this.setCurrentPage} />
          <Collection pageItems={this.state.currentPageContent} />
        </div>
      </div>
    );
  }
});

module.exports = Application;