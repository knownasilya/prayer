import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    markAnswered: function () {
      var model = this.get('model');

      if (model) {
        model.set('dateAnswered', new Date());
      }
    }
  }
});
