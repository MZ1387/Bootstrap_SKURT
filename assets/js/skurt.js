$(document).ready(function() {

  var phone;

        $('#submit').on('click', function(event) {
            event.preventDefault();
            phone = $('#phoneNumber').val();
            if(phone != "") {
              console.log(phone);
              $.ajax({
                method: "POST",
                url: "https://www.skurt.com/api/sendLink",
                "headers": {"content-type": "application/x-www-form-urlencoded"},
                data: { "linkId": "default", "phone": phone }
              }).success(function(response) {
                  console.log(response);
                  $('#phoneNumber').val('');
                }).fail(function(error) {
                  console.log("FAILURE");
                  console.log(error);
                });
              } else {
                alert("enter proper phone number");
              }
        });



});
