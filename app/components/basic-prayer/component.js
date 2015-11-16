import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',

  actions: {
    markAnswered: function () {
      var model = this.get('model');

      if (model) {
        model.set('dateAnswered', new Date());
      }
    }
  }
});
