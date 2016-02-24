var app = app || {};

(function () {
    'use strict';

    app.Doctors = Backbone.Collection.extend({
        model: app.Doctor,

        // Local storage backend for the prototype. 
        localStorage: new Backbone.LocalStorage('doctors-backbone'),

        // This is how backbone would get data if a server was implemented
        // url: '/doctors'
    });

})();