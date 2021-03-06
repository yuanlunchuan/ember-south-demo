import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('patient');
  },
  actions: {
    save(patient){
      var self = this;
      patient.save().then(function(model){
        self.transitionTo('app.patients.index');
      });
    }
  }
});
