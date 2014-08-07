/* global moment */
import DS from 'ember-data';

var attr = DS.attr;

var PrayerModel = DS.Model.extend({
  title: attr('string'),
  prayer: attr('string'),
  dateCreated: attr('date'),
  dateAnswered: attr('date'),

  created: momentize('dateCreated'),
  answered: momentize('dateAnswered'),

  summary: function () {
    var prayer = this.get('prayer');

    if (prayer) {
      var isBigger = prayer.length >= 200;
      return prayer.slice(0, isBigger ? 200 : prayer.length - 1) + (isBigger ? '...' : '');
    }
  }.property('prayer')
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

function momentize(attr) {
  return function () {
    var rawDate = this.get(attr);

    if (!rawDate) {
      return;
    }

    var now = moment();
    var created = moment(rawDate);
    var createdWeek = created.week();
    var nowWeek = now.week();

    return createdWeek < nowWeek ? created.format('MMMM Do') : created.format('dddd, MMMM Do');
  }.property(attr);
}
