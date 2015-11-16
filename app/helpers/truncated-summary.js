import Ember from 'ember';

export function truncatedSummary([text], hash) {
  var size = hash.size || 200;
  var postfix = hash.postfix || '...';

  if (text) {
    var isBigger = text.length >= size;

    return text.slice(0, isBigger ? size : text.length - 1) + (isBigger ? postfix : '');
  }
}

export default Ember.Helper.helper(truncatedSummary);
