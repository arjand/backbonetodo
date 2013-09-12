/*global backbonetodo, Backbone, JST*/

/**
 * Individual view for an item in the todo list 
 */
backbonetodo.Views = backbonetodo.Views || {};

(function () {
    'use strict';

    backbonetodo.Views.TodoView = Backbone.View.extend({

    		tagName: 'li',
    		events: {
    			'click input': 'toggleTodo'
    		},    		

        template: JST['app/scripts/templates/todo.ejs'],

        initialize: function(){
        	this.listenTo(this.model, "change", this.render);
        	this.listenTo(this.model, "change:checked", this.toggleChecked);
        },

        render: function() {
        	this.$el.html( this.template( this.model.toJSON()));
        	return this;
        },

        toggleTodo: function(e) {        	
        	this.model.set({"checked" : !this.model.get("checked")});
        },

        // this.$el.toggleClass("todoCompleted");
    });

})();
