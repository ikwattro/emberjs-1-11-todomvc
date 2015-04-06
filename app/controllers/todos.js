import Ember from 'ember';

var TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			var title = this.get('newTitle');
			if (!title) { return false; }
			if (!title.trim()) { return; }

			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});

			this.set('newTitle', '');
			todo.save();
		},
		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},
	remaining: function() {
			return this.filterBy('isCompleted', false).get('length');
		}.property('@each.isCompleted'),
	inflection: function() {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining'),
	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),
	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),
	allAreDone: function(key, value) {
		if (value === undefined) {
			return this.get('hasCompleted') && this.get('remaining') === 0;
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
		}
	}.property('hasCompleted', 'remaining')
});

export default TodosController;