import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width','height'],
  didInsertElement: function() {
    // var cans = this.get('element').getContext('2d')

    // cans.moveTo(20,30);
    // cans.lineTo(120,90);
    // cans.lineTo(220,60);
    // cans.lineWidth=3;
    // cans.strokeStyle = 'red';
    // cans.stroke();
    this.set('ctx', this.get('element').getContext('2d'));
    this._empty();
    this.draw();
  },

  draw: function() {
    this._empty();
    var ctx = this.get('ctx');
    ctx.strokeStyle = '#red';
    console.log(this.get('data'));
    ctx.strokeText(this.get('data'), this.get('width')/4, this.get('height')/2);
 
    // draw some stars yo
    this._star(40, 40);
    this._star(300, 300);
    this._star(123, 250);
    this._star(320, 90);
  }.observes('data'),
 
  _empty: function() {
    var ctx = this.get('ctx');
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, this.get('width'), this.get('height'));
  },
 
  _star: function(x, y) {
    var radius = 20;
    var points = 5;
    var inset = 0.5;
    var ctx = this.get('ctx');
 
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#FAFF66';
    ctx.translate(x, y);
    ctx.moveTo(0,0-radius);
    for (var i = 0; i < points; i++) {
      ctx.rotate(Math.PI / points);
      ctx.lineTo(0, 0 - (radius*inset));
      ctx.rotate(Math.PI / points);
      ctx.lineTo(0, 0 - radius);
    }
    ctx.fill();
    ctx.restore();
  }
});
