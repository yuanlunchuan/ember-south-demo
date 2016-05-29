import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  mrNo: attr('string'),
  hspId: attr('string'),
  idCardNo: attr('string'),
  insuranceCode: attr('string'),
  patName: attr('string'),
  acromym: attr('string'),
  genderId: attr('string'),
  birthday: attr('string'),
  address: attr('string'),
  zipcode: attr('string'),
  phoneNo: attr('string'),
  mobileNo: attr('string'),
  email: attr('string')
});
