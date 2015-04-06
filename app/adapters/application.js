import DS from 'ember-data';

var ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'ikwattro-todos'
});

export default ApplicationAdapter;