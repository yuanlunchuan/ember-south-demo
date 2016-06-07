import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  mrno: attr('string'),
  hspid: attr('string'),
  idCardNo: attr('string'),
  insurancecode: attr('string'),
  patname: attr('string'),
  acromym: attr('string'),
  genderid: attr('string'),
  birthday: attr('string'),
  address: attr('string'),
  zipcode: attr('string'),
  phoneno: attr('string'),
  mobileno: attr('string'),
  email: attr('string')
});
