var app = app || {};

// stub data for demo purposes
(function ($) {

    app.family = [
        { firstName: "Aaron", lastName: "John-Baptiste" },
        { firstName: "Harry", lastName: "Potter" }
    ];

    app.doctors = [
        { firstName: "Paul", lastName: "Devis", type: "GP", title: "Dr" },
        { firstName: "Rifky", lastName: "Guirgis", type: "GP", title: "Mr" },
        { firstName: "Albus", lastName: "Dumbledore", type: "Nurse", title: "Prof" },
    ];
 
} (jQuery));

$(function () {
    'use strict';

    new app.FamilyView();
    new app.DoctorsView();
    new app.DoctorTypeView();

});