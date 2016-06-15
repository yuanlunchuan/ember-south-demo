import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  reqId: attr(),
  fieldId: attr(),
  fieldValue: attr(),
  optTime: attr(),
  optUser: attr(),
  optIp: attr()
});
