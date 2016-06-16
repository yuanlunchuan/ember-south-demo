export default function() {
  this.get('/regions', function(){
    return {
      data: [{
        id: 1,
        type: 'regions',
        attributes: {
          regId: 1,
          regName: '中国',
          regType: 1,
          seq: 1,
          parRegId: 0,
          comments: ""
        }
      },{
        id: 2,
        type: 'regions',
        attributes: {
          regId: 2,
          regName: '美国',
          regType: 1,
          seq: 2,
          parRegId: 0,
          comments: ''
        }
      },{
        id: 3,
        type: 'regions',
        attributes: {
          regId: 3,
          regName: '德国',
          regType: 1,
          seq: 3,
          parRegId: 0,
          comments: ''
        }
      }]
    };
  });

  this.post('/caseHistories', function(){
    return {
      data: {
        id: 1,
        type: 'case_histories',
        attributes: {
          name: 'zhangsan',
          age: 123
        }
      }
    };
  });

  this.get('/books', function(){
    return {
      data: [{
        id: 1,
        type: 'book',
        attributes: {
          bookName: 'zhangsan'
        }
      },{
        id: 2,
        type: 'book',
        attributes: {
          bookName: 'lisi'
        }
      },{
        id: 3,
        type: 'book',
        attributes: {
          bookName: 'wanger'
        }
      }]
    };
  });

  this.get('/inspectionApplyDynamics', function(){
    return {
      data: [{
        type: 'inspection-apply-dynamics',
        id: 1,
        attributes:{
          firstName: 'zhang',
          lastName: 'san',
          birthday: '2015-2-3'
        }
      }]
    };
  });

  this.get('/inspectionApplies', function(){
    return {
      data: [{
        type: 'inspection-applies',
        id: 1,
        attributes: {
          reqId: '123',
          hspId: '234',
          mrNo: '231',
          caseNo: '456',
          reqDoctorId: '456',
          reqdoctorname: 'zhangsan',
          reqTime: '2015-02-23',
          deptId: '789',
          deptName: 'xindian',
          examId: '0989',
          admType: 'finish',
          source: 'lai zi haha',
          areaId: '2341',
          bedId: '0976',
          pacemaker: '',
          reason: 'you have nothing.',
          diaId: '0765',
          diaName: 'diaName',
          diaDesc: 'this is diaDesc',
          report: 'report',
          statusId: 'finish'
        }
      }]
    };
  });

  this.post('/patients', function(db, request) {
    var patient = JSON.parse(request.requestBody).data;
    patient = db.patients.insert(patient);
    return {data: patient};
  });

  this.delete('/patients/:patient_id', function(db, request){
    var id = request.params.patient_id;
    return {data: db.patients.find(id)};
  });

  this.get('/patients/:patient_id', function(db, request){
    var id = request.params.patient_id;
    return {data: db.patients.find(id)};
  });

  this.patch('/patients/:patient_id', function(db, request){
    var id = request.params.patient_id;
    return {data: db.patients.find(id)};
  });

  this.patch('/hospitals/:hospital_id', function(db, request){
    return {
      data: {
        type: 'hospital',
        id: 1,
        attributes: {
          code: '2342',
          hspname: '四川长江医院',
          acronym: 'sccjyy',
          comments: '医院设有普外科、骨外科、心血管内科、中医针灸、痔漏、口腔、呼吸内分泌内科、五官、皮肤、眼科、耳鼻咽喉科、妇产科等临床科室和急诊室。另有放射科、心电图室、彩色超声波室、胃镜室、检验科、B超室等辅助科室。 '
        }
      }
    };
  });

  this.get('/hospitals/:hospital_id', function(){
    return {
      data: {
        type: 'hospital',
        id: 1,
        attributes: {
          code: '2342',
          hspname: '四川长江医院',
          acronym: 'sccjyy',
          comments: '医院设有普外科、骨外科、心血管内科、中医针灸、痔漏、口腔、呼吸内分泌内科、五官、皮肤、眼科、耳鼻咽喉科、妇产科等临床科室和急诊室。另有放射科、心电图室、彩色超声波室、胃镜室、检验科、B超室等辅助科室。 '
        }
      }
    };
  });

  this.get('/patients', function(db, request) {
    return {
      data: db.patients
    };
  });
}
