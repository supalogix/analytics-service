var Promise = require("promise");

modules.exports = {
	days: days,
	months: months,
	years: years
};

function days() {
}

function months() {
}

function years() {
	return new Promise( function(fulfill, reject) {
		setTimeout(function() {
			var data = yearsData();
			fulfill(data);
		}, 1000);
	});
}

function yearsData() {
	return [
		{
			year: "2015",
			items: [
				{
					name: "item 1",
					value: 2000
				},
				{
					name: "item 2",
					value: 2000
				},
				{
					name: "item 3",
					value: 2000
				},
				{
					name: "item 4",
					value: 2000
				},
			]
		},
		{
			year: "2014",
			items: [
				{
					name: "item 1",
					value: 2000
				},
				{
					name: "item 2",
					value: 2000
				},
				{
					name: "item 3",
					value: 2000
				},
				{
					name: "item 4",
					value: 2000
				},
			]
		},
		{
			year: "2013",
			items: [
				{
					name: "item 1",
					value: 2000
				},
				{
					name: "item 2",
					value: 2000
				},
				{
					name: "item 3",
					value: 2000
				},
				{
					name: "item 4",
					value: 2000
				},
			]
		}
	];
}
