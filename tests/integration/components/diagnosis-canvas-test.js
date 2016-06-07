import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('diagnosis-canvas', 'Integration | Component | diagnosis canvas', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{diagnosis-canvas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#diagnosis-canvas}}
      template block text
    {{/diagnosis-canvas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
