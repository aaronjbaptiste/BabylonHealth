var app = app || {};

(function () {
    'use strict';

    app.User = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            photo: 'img/user.png'
            // would also need a family id
        },

        // This is how backbone would get data if a server was implemented
        // urlRoot: '/user'
    });

})();