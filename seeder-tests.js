Items = new Mongo.Collection('items');

Items.attachSchema(new SimpleSchema({
    title: {
        type: String,
        max: 20,
        seeder: 'lorem.sentence'
    },
    color: {
        type: String,
        seeder: 'internet.color'
    },
    rating: {
        type: Number,
        max: 30
    },
    active: {
        type: Boolean,
        defaultValue: true
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: [Date]
    }
}));

Tinytest.add('Seeder - Creates Expected Number of Entries', function (test) {
	new Seeder({
		collection: Items,
		total: 5
	});

	var count = Items.find().count();
	test.equal(count, 5);
});

Tinytest.add('Seeder - Throws error if config is wrong', function (test) {
	test.throws(function () {
		new Seeder({
			total: 5
		});
	}, Meteor.Error);
});
