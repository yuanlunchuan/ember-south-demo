import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  reqId: attr(),
  examId: attr(),
  statusId: attr(),
  filedValue: attr(),
  optTime: attr(),
  optUser: attr(),
  optIp: attr()
});
