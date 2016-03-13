var fs = require('fs'),
	webdriver = require('selenium-webdriver');

var server = require('../server.js');

var firefox = new webdriver.Builder().forBrowser('firefox').build();

describe('WebVRApp', function () {

	var browser;

	afterEach( function (done) {
		// take a screenshot of the page:
		browser.takeScreenshot().then( function (data) {
			var base64Data = data.replace(/^data:image\/png;base64,/, "");
			var filepath = 'test/screenshots/it_opens.png';
			fs.writeFileSync(filepath, base64Data, 'base64');
			console.log('wrote %s', filepath);
			done();
		} );
	} );

	it('opens in Firefox', function () {
		browser = firefox;
		browser.get(server.URL);
		console.log('it opens in Firefox!');
	});

});
