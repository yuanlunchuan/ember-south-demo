import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('patient', params.patient_id);
  },
  actions: {
    save(patient){
      var self = this;
      patient.save().then(function(mode){
        self.transitionTo('app.patients.index');
      });
    }
  }
});
