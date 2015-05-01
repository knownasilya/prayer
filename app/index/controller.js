import Ember from 'ember';

export default Ember.ArrayController.extend({
  answeredPrayers: function () {
    var content = this.get('content');

    if (content) {
      return content.filter(function (item) {
        return item.get('answered');
      });    
    }
  }.property('content.@each.answered'),
  
  unansweredPrayers: function () {
    var content = this.get('content');

    if (content) {
      return content.filter(function (item) {
        return !item.get('answered');
      });    
    }
  }.property('content.@each.answered')
});
