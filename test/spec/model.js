/*global describe, it */
'use strict';
(function () {
    describe('Todo Model', function () {
        describe('when initialized', function () {
        	beforeEach(function() {        		
			      this.todo = new backbonetodo.Models.TodoModel();
			    })
          it('should be unchecked', function () {
          	this.todo.get('checked').should.equal(false);
          });
          it('should have blank text', function () {
          	this.todo.get('text').should.equal("");
          });
        });
    });
})();