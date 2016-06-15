import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  dicId: attr(),
  groupId: attr(),
  groupName: attr()
});
