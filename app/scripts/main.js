/*global backbonetodo, $*/


window.backbonetodo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        this.Collections = new backbonetodo.Collections.TodosCollection();
        // start up the app!
        new backbonetodo.Views.TodosView(
            { collection: this.Collections });
    }
};

$(document).ready(function () {
    'use strict';
    backbonetodo.init();
});
