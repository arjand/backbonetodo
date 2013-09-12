/*global backbonetodo, Backbone*/

backbonetodo.Models = backbonetodo.Models || {};

(function () {
    'use strict';

    backbonetodo.Models.TodoModel = Backbone.Model.extend({

    	defaults: {
    		checked: false,
    		text: ""
    	},

    	validate: function(attrs) {
    		if( !attrs.text ){
    			return "Every todo needs text.";
    		}
    	}
    });

})();
