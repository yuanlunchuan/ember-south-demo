import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('patient');
  },
  actions: {
    delete(patient){
      let confirmation = confirm('您确定删除?');
      if(confirmation){
        patient.destroyRecord();
      }
    }
  }
});
