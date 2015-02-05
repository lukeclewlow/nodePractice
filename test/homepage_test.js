describe("homepage", function(){

	var host = 'http://localhost:9999';

	before(function(){
		casper.start(host);
	});

	// it('should say hello world', function(){
	// 	casper.then(function(){
	// 		expect('body').to.have.text("hello world");
	// 	});
	// });

	it("should greet people individually", function(){
		casper.thenOpen(host + '?name=luke', function(){
			expect('body').to.have.text('hello luke');
		});
	});

	it("shuld give me some JSON love", function(){
		casper.thenOpen(host + '/reflect.json?name=luke', function(){
			expect('body').to.have.text('{"name":"luke"}')
		});
	});	
});