import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('app', function() {
    this.route('patients', function() {
      this.route('new');
      this.route('edit', {
        path: ':patient_id/edit'
      });
    });
    this.route('hospitals', function() {
      this.route('edit');
    });
    this.route('dictionaries', function() {});
  });
});

export default Router;
