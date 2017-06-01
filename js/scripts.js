$(function() {
  $("button").click(function() {
    var ffood = $("#fastfood").val();
    var humanname = $("input#nombre").val();
      alert(ffood + humanname);
    });
  var flavor = $("input:radio[name=flavor]:checked").val();
  var dob = $("#born").val();
  var favoriteColor = $("#color").val();
});
