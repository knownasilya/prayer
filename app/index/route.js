import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model() {
    return this.store.findAll('prayer');
  }
});

export default IndexRoute;
