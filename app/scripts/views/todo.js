/*global backbonetodo, Backbone, JST*/

backbonetodo.Views = backbonetodo.Views || {};

(function () {
    'use strict';

    backbonetodo.Views.TodoView = Backbone.View.extend({

        template: JST['app/scripts/templates/todo.ejs']

    });

})();
