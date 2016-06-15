import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  reqId: attr(),
  hspId: attr(),
  mrNo: attr(),
  caseNo: attr(),
  reqDoctorId: attr(),
  reqDoctorName: attr(),
  reqTime: attr(),
  deptId: attr(),
  deptName: attr(),
  examId: attr(),
  source: attr(),
  areaId: attr(),
  bedId: attr(),
  pacemaker: attr(),
  reason: attr(),
  diaId: attr(),
  diaName: attr(),
  diaDesc: attr(),
  report: attr(),
  statusId: attr()
});
