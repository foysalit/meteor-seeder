# Seeder

Automatically seed meteor collections with fake data using simple schema definition.

### Install
To install, simply run the following command in the root of your meteor project - 
```
meteor add foysalit:seeder
```

### Usage
The seeder is only available on the server so make sure it is placed somewhere in the ***server/*** directory or check ```Meteor.isServer``` before running the seeder.

```
new Seeder({
	collection: <CollectionVar>, // Must be a valid Mongo.Collection instance
	total: <Number of Entries> // default to 1
});
```