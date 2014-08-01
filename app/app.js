import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'prayer', // TODO: loaded via config
  podModulePrefix: 'prayer/pods',
  Resolver: Resolver
});

loadInitializers(App, 'prayer');

export default App;
