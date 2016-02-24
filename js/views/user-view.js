var app = app || {};

(function ($) {
    'use strict';

    // View for rendering a single user
    app.UserView = Backbone.View.extend({
        tagName: "li",
        className: "user-container",
        template: $('#user-template').html(),
        events: {
            "click": "onSelect"
        },
        render: function() {
            var tmpl = _.template(this.template);
            this.$el.html(tmpl(this.model.toJSON()));
            return this;
        },
        onSelect: function(e) {
            $('.user-container').removeClass("selected");
            $(e.currentTarget).addClass("selected");
        }

    });

})(jQuery);