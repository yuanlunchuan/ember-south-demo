export default function() {
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
