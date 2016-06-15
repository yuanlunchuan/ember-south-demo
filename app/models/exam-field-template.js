import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  fieldId: attr(),
  statusId: attr(),
  fieldName: attr(),
  dataType: attr(),
  dataSource: attr(),
  defaultValue: attr(),
  regular: attr(),
  comments: attr()
});
