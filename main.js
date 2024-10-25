$(document).ready(function() {
    $('#subscribe').click(function() {
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
});
