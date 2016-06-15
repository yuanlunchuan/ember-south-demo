import Ember from 'ember';
import DS from 'ember-data';

//host: 'http://192.168.190.132:3000',
export default DS.JSONAPIAdapter.extend({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  pathForType(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
