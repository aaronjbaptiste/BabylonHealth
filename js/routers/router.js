var app = app || {};

(function () {
    'use strict';

    var AppRouter = Backbone.Router.extend({

        routes: {
            'book': 'book'
        },
        
        initialize: function(options) {
            this.route("route:book", function() {
                //send post or create request to book an appoinment
            });
        }

    });

    app.AppRouter = new AppRouter();
    Backbone.history.start();
})();