/*global describe, it */
'use strict';
(function () {
	describe('Backbone todo application', function () {

		it('should have the backbonetodo namespace', function () {      	
			should.exist(backbonetodo);      	
		});

		it('should have the backbonetodo Collections', function () {			
			should.exist(backbonetodo.Collections);
		});

		it('should have the backbonetodo Views', function () {
			should.exist(backbonetodo.Views);
		});

	});
})();
