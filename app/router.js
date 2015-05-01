import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('prayers', function () {
    this.route('new');
    this.route('view', { path: ':prayer_id' });
    this.route('answer', { path: ':prayer_id/answer' });
  });
});
