import Ember from 'ember';

var PrayersNewRoute = Ember.Route.extend({
  model: function () {
    return this.store.createRecord('prayer'); 
  },

  deactivate: function () {
    var model = this.controller.get('model');    

    if (model && model.get('isDirty')) {
      model.deleteRecord();
    }
  }
});

export default PrayersNewRoute;
