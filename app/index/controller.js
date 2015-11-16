import Ember from 'ember';

const { computed } = Ember;

export default Ember.Controller.extend({
  answeredPrayers: computed('model.@each.answered', {
    get() {
      var model = this.get('model');

      if (model) {
        return model.filter(function (item) {
          return item.get('answered');
        });
      }
    }
  }),

  unansweredPrayers: computed('model.@each.answered', {
    get() {
      var model = this.get('model');

      if (model) {
        return model.filter(function (item) {
          return !item.get('answered');
        });
      }
    }
  })
});
