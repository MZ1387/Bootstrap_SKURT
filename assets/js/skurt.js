$(document).ready(function() {

    var phone;

    $('#submit').on('click', function(event) {
        event.preventDefault();
        phone = $('#phoneNumber').val();
        if (phone != "") {
            console.log(phone);
            $.ajax({
                method: "POST",
                url: "https://www.skurt.com/api/sendLink",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    "linkId": "default",
                    "phone": phone
                }
            })

            $('#phoneNumber').val('');
            
        }
    });



});
