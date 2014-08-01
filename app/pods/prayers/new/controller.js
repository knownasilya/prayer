import Ember from 'ember';


var PrayersNewController = Ember.ObjectController.extend({
  actions: {
    save: function (prayer) {
      var self = this;
      var model = this.get('model');
      var firstLineIsTitle = this.get('firstLineIsTitle');

      if (firstLineIsTitle) {
        var prayerSplit = prayer.split('\n');
        var title = prayerSplit.length ? prayerSplit[0] : '';
        var prayerWithoutTitle = prayerSplit.slice(1).join('\n');

        model.setProperties({
          title: title,
          prayer: prayerWithoutTitle
        });
      }
      else {
        model.set('prayer', prayer); 
      }
      
      model.set('dateCreated', new Date());

      model.save().then(function () {
        self.transitionToRoute('prayers');
      });
    }
  }
});

export default PrayersNewController;
