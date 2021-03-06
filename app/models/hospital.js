import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  hspId: attr(),
  code: attr(),
  hspName: attr(),
  acronym: attr(),
  comments: attr()
});
