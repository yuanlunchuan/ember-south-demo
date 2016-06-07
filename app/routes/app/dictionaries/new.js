import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addDictionaryItem(){
      var dictionary_item = "<div class='col-md-4'>"+
        "<div class='well'>"+
          "{{#form-field}}名称{{/form-field}}"+
          "{{#form-field}}备注{{/form-field}}"+
        "</div>"+
      "</div>";
      Ember.$("fieldset").append($(dictionary_item));
      console.info("you have click the button");
    }
  }
});
