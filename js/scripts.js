$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var contentInput = $("input#content").val ();
    contentInput=contentInput.toUpperCase();
    $(".content").text(contentInput);
    $("#story").show();

    event.preventDefault();
  });
});
