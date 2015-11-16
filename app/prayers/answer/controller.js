import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(answer) {
      var self = this;
      var model = this.get('model');

      model.set('prayer', answer);
      model.set('dateAnswered', new Date());

      model.save().then(function () {
        self.transitionToRoute('index');
      });
    }
  }
});
