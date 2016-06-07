import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
