//import Mirage from 'ember-cli-mirage';
import Mirage, { faker } from 'ember-cli-mirage';

var patient = {
  type: 'patients',
  attributes: {
    mrno: '123',
    hspid: '123',
    idcardno: '234',
    insurancecode: '7878',
    patname: '张三',
    acromym: 'zs',
    genderid: '1',
    birthday: '1992-02-15',
    address: '武侯区五大花园',
    zipcode: '610077',
    phoneno: '13551031965',
    mobileno: '9888888',
    email: '799652013@qq.com'
  }
};

export default Mirage.Factory.extend(patient);
