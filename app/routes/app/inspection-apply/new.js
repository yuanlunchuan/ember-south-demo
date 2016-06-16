import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      regions: this.store.findAll('region'),
      patient: this.store.createRecord('patient')  
    });
  },
  setupController(controller, models){
    this._super(...arguments);
    controller.set('patient', models.patient);
    controller.set('regions', models.regions)
  }
});
