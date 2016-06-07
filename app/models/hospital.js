import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  code: attr(),
  hspname: attr(),
  acronym: attr(),
  comments: attr()
});
