import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  caseNo: attr(),
  hspId: attr(),
  mrNo: attr(),
  admTime: attr(),
  height: attr(),
  weight: attr(),
  bmi: attr(),
  chiefComplaint: attr(),
  presentIllenss: attr(),
  pastHistory: attr(),
  allergicHistory: attr(),
  familyHistory: attr(),
  systemReview: attr(),
  accessoryExam: attr(),
  diaId: attr(),
  medicationInpatient: attr(),
  treament: attr(),
  pastHistoryCardiopathy: attr(),
  medication: attr()
});
