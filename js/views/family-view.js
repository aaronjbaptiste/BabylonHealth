var app = app || {};

(function ($) {
    'use strict';

    // View for listing family members
    app.FamilyView = Backbone.View.extend({
        el: $('#family-list'),

        events: {
          "click #add-user": "addUser"
        },

        initialize: function () {
            // grabbed from stub data in app.js
            this.collection = new app.Family(app.family);
            this.render();

            this.collection.on("add", this.renderUser, this);
        },

        render: function() {
            var that = this;

            // renders each family member
            _.each(this.collection.models, function (item) {
                that.renderUser(item);
            }, this);
        },

        renderUser: function (item) {
           var userView = new app.UserView({
               model: item
           });
           this.$el.prepend(userView.render().el);
        },

        addUser: function (e) {
            e.preventDefault();
         
            // TODO this should grab data from a new user form
            // Out of scope of the spec, so just mocking a new user instead
            this.collection.create({ firstName: "Ron", lastName: "Weasley" });
        }

    });

})(jQuery);