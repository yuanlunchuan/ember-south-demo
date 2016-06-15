import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  mrNo: attr('string'),
  hspId: attr('string'),
  idCardNo: attr('string'),
  insuranceCode: attr('string'),
  patName: attr('string'),
  acromym: attr('string'),
  birthday: attr('string'),
  nationalId: attr('string'),
  nationalityId: attr('string'),
  provinceId: attr('string'),
  cityId: attr('string'),
  countyId: attr('string'),
  townId: attr('string'),
  address: attr('string'),
  zipcode: attr('string'),
  phoneNo: attr('string'),
  mobileNo: attr('string'),
  email: attr('string'),
  btId: attr('string'),
  msId: attr('string'),
  raceId: attr('string'),
  genderId: attr('string')
});
