import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    console.info("------------result: "+JSON.stringify(this.store.findAll('patient')));
    return this.store.findAll('patient');
  }
});
