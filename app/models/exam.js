import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  examId: attr(),
  hspId: attr(),
  examCatId: attr(),
  examName: attr(),
  acronym: attr(),
  collFreq: attr(),
  comments: attr()
});
