import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  diaId: attr(),
  hspId: attr(),
  diaCode: attr(),
  diaName: attr(),
  acronym: attr(),
  comments: attr()
});
