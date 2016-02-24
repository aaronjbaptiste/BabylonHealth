var app = app || {};

(function ($) {
    'use strict';

    // View for listing family members
    app.DoctorsView = Backbone.View.extend({
        el: $('#doctor-list'),

        initialize: function () {
            // grabbed from stub data in app.js
            this.collection = new app.Doctors(app.doctors);
            this.render();
        },

        render: function() {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderDoctor(item);
            }, this);
        },

        renderDoctor: function (item) {
           var doctorView = new app.DoctorView({
               model: item
           });
           this.$el.prepend(doctorView.render().el);
        },

    });

})(jQuery);