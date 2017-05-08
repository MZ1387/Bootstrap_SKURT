$(document).ready(function() {

  // function functionName() {
  //   $.ajax({
  //     method: "POST",
  //     url: "https://www.skurt.com/api/sendLink",
  //     data: { linkId: "default", phone: "18184862507" }
  //   })
  //     .done(function(response) {
  //       console.log(response);
  //     });
  // }

  var phone;

        $('#submit').on('click', function() {

          phone = $('#phoneNumber').val().trim();
          // alert(typeof phone);

            $.ajax({
              method: "POST",
              url: "https://www.skurt.com/api/sendLink",
              data: { linkId: "default", phone: phone }
            })
              .done(function(response) {
                console.log(response);
              });

        });

});
