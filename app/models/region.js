import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  regId: attr(),
  regName: attr(),
  regType: attr(),
  seq: attr(),
  parRegId: attr(),
  comments: attr()
});
