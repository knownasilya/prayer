import Ember from 'ember';

var PrayersNewController = Ember.Controller.extend({
  actions: {
    save: function (prayer) {
      var self = this;
      var model = this.get('model');
      var prayerSplit = prayer.split('\n');
      var title = prayerSplit.length ? prayerSplit[0] : '';
      var prayerWithoutTitle = prayerSplit.slice(1).join('\n');

      model.setProperties({
        title: title,
        prayer: prayerWithoutTitle
      });

      model.set('dateCreated', new Date());

      model.save().then(function () {
        self.transitionToRoute('index');
      });
    }
  }
});

export default PrayersNewController;
