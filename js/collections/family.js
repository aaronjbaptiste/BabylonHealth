var app = app || {};

(function () {
    'use strict';

    app.Family = Backbone.Collection.extend({
        model: app.User,

        // Local storage backend for the prototype. 
        localStorage: new Backbone.LocalStorage('users-backbone'),

        // This is how backbone would get data if a server was implemented
        // url: '/family'
    });

})();