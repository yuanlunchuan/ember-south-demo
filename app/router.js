import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sessions', function() {
    this.route('new');
  });

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
    this.route('dictionaries', function() {
      this.route('new');
    });

    this.route('sessions', function() {
      this.route('new');
    });
    this.route('diagnosis', function() {});
    this.route('inspection-apply', function() {});
  });
});

export default Router;
