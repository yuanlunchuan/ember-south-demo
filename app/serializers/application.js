import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    //return Ember.String.decamelize(attr);
    return attr;
  },
  keyForRelationship(key) {
    return Ember.String.underscore(key);
  }
});
