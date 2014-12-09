import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function (text, options) {
  var size = options.hash.size || 200;
  var postfix = options.hash.postfix || '...';

  if (text) {
    var isBigger = text.length >= size;

    return text.slice(0, isBigger ? size : text.length - 1) + (isBigger ? postfix : '');
  }
});
