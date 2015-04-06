import Ember from "ember";
 
export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user');
  },
  actions: {
    save: function(){
      return this.get('currentModel').save()
      .then(function(){
        alert("Flawless Victory!");
      })
      .catch(function(e){
        alert("Fatality");
      });
    }
  }
});