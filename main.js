$(document).ready(function() {
    $('#subscribe-index').click(function() {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var errorMessage = $('#error-message');

        if (name === "" || email === "") {
            errorMessage.text("Please fill in all fields.").show();
        } else {
            errorMessage.hide();
            $('#subscribeModal').modal('show');
        }
    });

    $('#subscribe-cont').click(function() {
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var errorMessage = $('#error-message');

        if (name === "" || email === "") {
            errorMessage.text("Please fill in all fields.").show();
        } else {
            errorMessage.hide();
            $('#subscribeModal').modal('show');
        }
    });

    $('#subscribe-about').click(function() { // Updated selector for About page
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var errorMessage = $('#error-message');

        if (name === "" || email === "") {
            errorMessage.text("Please fill in all fields.").show();
        } else {
            errorMessage.hide();
            $('#subscribeModal').modal('show');
        }
    });

    $('#contact-kontak').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        var firstName = $('#firstName').val().trim();
        var lastName = $('#lastName').val().trim();
        var email = $('#email').val().trim();
        var message = $('#floatingTextarea2').val().trim();

        if (firstName === "" || lastName === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else {
            $('#contactSuccessModal').modal('show');
        }
    });
});
