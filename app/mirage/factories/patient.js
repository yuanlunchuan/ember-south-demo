//import Mirage from 'ember-cli-mirage';
import Mirage, { faker } from 'ember-cli-mirage';

var patient = {
  type: 'patients',
  attributes: {
    mrNo: 'zhangsan',
    hspId: 'zhangsan',
    idCardNo: 'zhangsan',
    insuranceCode: 'zhangsan',
    patName: 'zhangsan',
    acromym: 'zhangsan',
    genderId: 'zhangsan',
    birthday: 'zhangsan',
    address: 'zhangsan',
    zipcode: 'zhangsan',
    phoneNo: 'zhangsan',
    mobileNo: 'zhangsan',
    email: 'zhangsan'
  }
};

export default Mirage.Factory.extend(patient);
