import DS from 'ember-data';

let Todo = DS.Model.extend({
  title: DS.attr('String'),
  isCompleted: DS.attr('boolean')
});

Todo.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: "One todo to be achieved",
			isCompleted: true
		},
		{
			id: 2,
			title: "A second todo fixture",
			isCompleted: false
		}
	]
});

export default Todo;
