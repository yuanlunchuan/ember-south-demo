import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  bookName: attr('string'),
  fullName: Ember.computed('bookname', function() {
    return `fullName: ${this.get('bookname')}`;
  })
});
