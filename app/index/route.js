import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('prayer');
  }
});

export default IndexRoute;