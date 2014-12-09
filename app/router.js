import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PrayerENV.locationType
});

Router.map(function() {
  this.resource('prayers', function () {
    this.route('new');
  });

  this.resource('prayer', { path: 'prayers/:prayer_id' }, function () {
    this.route('answer');
  });
});

export default Router;
