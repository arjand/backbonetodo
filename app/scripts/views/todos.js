/*global backbonetodo, Backbone, JST*/

backbonetodo.Views = backbonetodo.Views || {};

(function () {
    'use strict';

    backbonetodo.Views.TodosView = Backbone.View.extend({
    		el: '#backbonetodo',
    		events: {
    			'click #add-todo': 'createTodo'
    		},
        template: JST['app/scripts/templates/todos.ejs'],

        initialize: function() {
        	this.$input = $('form input');
        	this.$todos = $('#todos');

        	this.listenTo(this.collection, 'add', this.addTodo);
        },

        render: function() {

        	var todos = this.model.get('todos');

        	
        	_.each(todos, function(todo){

        		// For each of the todos, create a new TodoView
        		var todoView = new backbonetodo.Views.TodoView({
        			model: todo
        		});

        		// render the individual todoview and append it to the
        		// list of todos
      			this.$el.append(todoView.render().el);

        	});

        	return this;
        },

        /**
         * Retreive the todo information from the HTML of the page         
         * @return object that 
         */
        flushFromDom: function() {
        	return { checked: false,
        					 text: this.$input.val().trim()
        					};
        },
        /**
         * Create a new todo item         
         */
        createTodo: function(e) {
        	e.preventDefault(); // prevent form from submitting normally
        	
        	this.collection.add(this.flushFromDom());
        	
        	// todo created, empty input field
        	this.$input.val('');
        },

        addTodo: function(todo) {
        	console.log('add called');
        	var todoView = new backbonetodo.Views.TodoView({
        			model: todo
        		});
        	this.$todos.append(todoView.render().el);
        }
    });

})();
