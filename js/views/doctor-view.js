var app = app || {};

(function ($) {
    'use strict';

    // View for rendering a single doctor
    app.DoctorView = Backbone.View.extend({
        tagName: "option",
        template: $('#doctor-template').html(),

        events: {
          "click": "selectDoctor"
        },

        render: function() {
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        },

        selectDoctor: function(e) {
          
          // A template would have been better here
          $('#current-doctor').html(
            this.model.get("title") + " " +
            this.model.get("firstName") + " " +
            this.model.get("lastName") +
            "<span>" + this.model.get("type") + "</span"
          );

          // hacky way to close the dialog, wasn't sure how the
          // material design plugin worked. jQuery-ui would have been $('.dialog').close();
          $('#doctor-dialog').find("button").click();
        }

    });

})(jQuery);