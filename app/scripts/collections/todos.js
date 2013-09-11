/*global backbonetodo, Backbone*/

backbonetodo.Collections = backbonetodo.Collections || {};

(function () {
    'use strict';

    backbonetodo.Collections.TodosCollection = Backbone.Collection.extend({

        model: backbonetodo.Models.TodosModel

    });

})();
