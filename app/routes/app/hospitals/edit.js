import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findRecord('hospital', '~');
  },
  actions: {
    save(hospital){
      var self = this;
      hospital.save().then(function(model){
        alert('修改成功');
        self.transitionTo('app.hospitals.index');
      });
    }
  }
});
