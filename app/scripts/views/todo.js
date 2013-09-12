/*global backbonetodo, Backbone, JST*/

/**
 * Individual view for an item in the todo list 
 */
backbonetodo.Views = backbonetodo.Views || {};

(function () {
    'use strict';

    backbonetodo.Views.TodoView = Backbone.View.extend({

    		tagName: 'li',
    		arj: "foo",

        template: JST['app/scripts/templates/todo.ejs'],

        initialize: function(){
        	this.listenTo(this.model, "change", this.render);
        },

        render: function() {
        	this.$el.html( this.template( this.model.toJSON()));
        	return this;
        }

    });

})();
