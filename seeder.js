Seeder = function (config) {
	var schema = null;

	var options = _.extend({
		collection: null,
		total: 1
	}, config);

	if (!(options.collection instanceof Mongo.Collection) || !_.isFunction(options.collection.simpleSchema)) {
		throw new Meteor.Error('Seeder config error', 'config Must contain a valid mongo collection');
	}

	schema = options.collection.simpleSchema();
	if (!schema || !_.isFunction(schema.schema)) {
		throw new Meteor.Error('Seeder config error', 'collection does not have a valid SimpleSchema');
	}

	schema = schema.schema();

	// From StackOverflow - http://stackoverflow.com/a/22129960/1079478
	function getFaker (method, safe) {
	    return method.split('.').reduce(function(prev, curr) {
	        return !safe ? prev[curr] : (prev ? prev[curr] : undefined)
	    }, faker || self);
	}

	function dataFor (field) {
		var type = new field.type;

		if (_.has(field, 'seeder')){
			return getFaker(field.seeder, true)();
		}

		// some fallbacks in case seeder is not set.
		if (_.isString(type)) {
			var str = faker.lorem.sentence(field.max);

			if (field.max)
				return str.substr(field.max);

			return str;
		}

		if (_.isNumber(type)) {
			var max = field.max || 1000,
				min = field.min || 1;

			return _.random(min, max);
		}

		if (_.isBoolean(type)) {
			return (_.random(1, 1000) % 2) == 0;
		}

		if (_.isDate(type)) {
			return faker.date.past();
		}
	}

	_(options.total).times(function (n) {
		var data = {};
		_.each(_.keys(schema), function (property) {
			data[property] = dataFor(schema[property]);
		});
	});
}

SimpleSchema.extendOptions({
	seeder: Match.Optional(String)
});