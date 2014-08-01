import Ember from 'ember';

var Router = Ember.Router.extend({
  location: PrayerENV.locationType
});

Router.map(function() {
  this.resource('prayers', function () {
    this.route('new');
  });
});

export default Router;
