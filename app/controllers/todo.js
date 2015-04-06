import Ember from 'ember';

export default Ember.Controller.extend({
	isEditing: false,
	actions: {
		editTodo: function() {
			if (this.get('model.isCompleted')) {
				return;
			}
			this.set('isEditing', true);
		},
		acceptChanges: function() { 
			this.set('isEditing', false);
			if (Ember.isEmpty(this.get('model.title'))) { 
				this.send('removeTodo');
			} else { 
				this.get('model').save();
			} 
		},
		removeTodo: function () {
			var todo = this.get('model'); 
			todo.deleteRecord(); 
			todo.save();
		},
		onFocusOut: function() {
			this.set('isEditing', false);
		}
	},
	isCompleted: function(key, value) {
		var model = this.get('model');
		if (value === undefined) {
			return model.get('isCompleted');
		} else {
			model.set('isCompleted', value);
			model.save();

			return value;
		}
	}.property('model.isCompleted')
});