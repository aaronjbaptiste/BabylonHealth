var app = app || {};

(function () {
    'use strict';

    app.Doctor = Backbone.Model.extend({
        defaults: {
            firstName: '',
            lastName: '',
            type: 'GP',
            title: 'Mr',
            gender: 'M',
            // missing available time slots
        },

        // This is how backbone would get data if a server was implemented
        // urlRoot: '/doctor'
    });

})();