import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model(param) {
    return Ember.RSVP.hash({
      item: this.store.findRecord('item', param.item_id),
      ratings: this.store.findAll('rating')
    })
    return
  },
  actions: {
    addRating(params) {
      var newRating = this.store.createRecord('rating', params);
      var item = params.item;
      item.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        item.save();
      });
      this.transitionTo('single-item');
    },
    addToCart(item) {
      console.log(item);
      this.get('shoppingCart').add(item);
    }
  }
});
