$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var contentInput = $("input#content").val ();
    $(".content").text(contentInput);

    $("#story").show();



    event.preventDefault();
  });
});
