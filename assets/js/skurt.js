$(document).ready(function() {

  var phone;

        $('#submit').on('click', function() {

            phone = $('#phoneNumber').val();
            if(phone != "") {
              $.ajax({
                method: "POST",
                url: "https://www.skurt.com/api/sendLink",
                data: { "linkId": "default", "phone": phone }
              })
                .done(function(response) {
                  console.log(response);
                  $('#phoneNumber').val("");
                });
              } else {
                alert("enter proper phone number");
              }
        });



});
