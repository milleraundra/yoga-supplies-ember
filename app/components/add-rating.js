import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addRating() {
      var params = {
        stars: this.get('stars') ? parseFloat(this.get('stars')) : 5,
        explanation: this.get('explanation') ? this.get('explanation') : "No Explanation Given",
        date: new Date(),
        item: this.get('item')
      };
      console.log(params.stars);
      this.sendAction('addRating', params);
      this.set('explanation', "");
    }
  }
});
