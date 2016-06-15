import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  dicId: attr(),
  hspId: attr(),
  acronym: attr(),
  itemId: attr(),
  itemName: attr(),
  seq: attr(),
  remark: attr()
});
