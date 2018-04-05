import DS from 'ember-data';

export default DS.Model.extend({
  codepoint: DS.attr('number'),
  emojiIcon: DS.attr('string')
});
