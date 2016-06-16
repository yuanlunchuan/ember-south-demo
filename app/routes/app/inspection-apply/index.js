import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      inspectionApplies: this.store.findAll('inspection-apply'),
      inspectionApplyDynamics: this.store.findAll('inspection-apply-dynamic')
    });
  },
  setupController(controller, models) {
    this._super(...arguments);
    controller.set('inspectionApplies', models.inspectionApplies);
    controller.set('inspectionApplyDynamics', models.inspectionApplyDynamics);
  }
});
