import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PrayerENV.locationType
});

Router.map(function() {
  this.resource('prayers', function () {
    this.route('new');
    this.route('view', { path: ':prayer_id' });
    this.route('answer', { path: ':prayer_id/answer' });
  });
});

export default Router;
