$(document).ready(function() {

  var phone;

        // $('#submit').on('click', function() {

          phone = $('#phoneNumber').val().trim();

            $.ajax({
              method: "POST",
              url: "https://www.skurt.com/api/sendLink",
              data: { linkId: "default", phone: phone }
            })
              .done(function(response) {
                console.log(response);
              });

        // });

});
