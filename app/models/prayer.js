import DS from 'ember-data';
/* global moment */

var PrayerModel = DS.Model.extend({
  title: DS.attr('string'),
  prayer: DS.attr('string'),
  dateCreated: DS.attr('date'),

  created: function () {
    var dateCreated = this.get('dateCreated');

    if (!dateCreated) {
      return;
    }

    var now = moment();
    var created = moment(dateCreated);
    var createdWeek = created.week();
    var nowWeek = now.week();

    return createdWeek < nowWeek ? created.format('MMMM Do') : created.format('dddd, MMMM Do');
  }.property('dateCreated')
});

PrayerModel.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Help',
      prayer: 'Please help those people in Mosul and on the outskirts, amen!',
      dateCreated: moment('July 18, 2014').toDate()
    }
  ]
});

export default PrayerModel;
