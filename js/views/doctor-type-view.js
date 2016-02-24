var app = app || {};

(function ($) {
    'use strict';

    // View for rendering the 'doctor' types - GP, Nurse etc
    app.DoctorTypeView = Backbone.View.extend({
        el: ".doctor-types li",
        events: {
            "click": "onSelect"
        },

        onSelect: function(e) {
            //simple system for managing selected, however this should be reflected in the
            //js modal and then updated via a data binding rather than directly in the dom.
            $('.doctor-types li').removeClass("selected");
            $(e.currentTarget).addClass("selected");

        },

        filterDoctorsList: function() {
             // TODO filter doctors collection by doctor type
        }

       

    });

})(jQuery);