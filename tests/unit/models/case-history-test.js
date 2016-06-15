import { moduleForModel, test } from 'ember-qunit';

moduleForModel('case-history', 'Unit | Model | case history', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
