var $ = require('jquery');
var models = require('./models');
var views = require('./views');

$(function() {
  var view = new views.PostView();

  console.warn('form', $('.form'));

  $(document).on('posts:fetched', function(event, posts) {
    view.showPosts(posts);
  });

  models.Post.fetch();

  $('.form').on("submit", function(event) {
    event.preventDefault();
    $(document).trigger('create:post', [{
      title: "Cool",
      body: "Cool"
    }]);
  });

});
