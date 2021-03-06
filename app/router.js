import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('signup');
  this.route('todos', function(){
  	this.route('index', {path: '/'});
  	this.route('active');
  	this.route('completed');
  });
});
