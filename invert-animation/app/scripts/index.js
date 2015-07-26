var React = require('react');
var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          Hello world!AB
        </h2>
      </div>
    );
  }
});

React.render(
  <Comment  url="comments.json"/>,
  document.querySelector('.content')
);