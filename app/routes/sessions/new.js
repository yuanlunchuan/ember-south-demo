import Ember from 'ember';

export default Ember.Route.extend({
  activate: function () {
    this._super();
  },

  actions: {
    loginbutton(){
      $('.user-name').addClass('hidden');
    },
    loading: function(transition, route) {
      console.info("------------line 6");

      return true; // Bubble the loading event
    }
  }
});
