function hideAll() {
  $("#shiba-inu-card").hide();
  $("#corgi-card").hide();
  $("#siberian-husky-card").hide();
  $("#maine-coon-card").hide();
  $("#scottish-fold-card").hide();
  $("#munchkin-cat-card").hide();
  $("#american-fuzzy-lop-card").hide();
  $("#amami-rabbit-card").hide();
  $("#bugs-bunny-card").hide();
}
$(document).ready(function() {
  $("#shiba-inu").click(function() {
    hideAll();
    $("#shiba-inu-card").show();
  });
  $("#corgi").click(function() {
    hideAll();
    $("#corgi-card").show();
  });
  $("#husky").click(function() {
    hideAll();
    $("#siberian-husky-card").show();
  });
  $("#maine-coon").click(function() {
    hideAll();
    $("#maine-coon-card").show();
  });
  $("#scottish-fold").click(function() {
    hideAll();
    $("#scottish-fold-card").show();
  });
  $("#munchkin-cat").click(function() {
    hideAll();
    $("#munchkin-cat-card").show();
  });
  $("#american-fuzzy-lop").click(function() {
    hideAll();
    $("#american-fuzzy-lop-card").show();
  });
  $("#amami-rabbit").click(function() {
    hideAll();
    $("#amami-rabbit-card").show();
  });
  $("#bugs-bunny").click(function() {
    hideAll();
    $("#bugs-bunny-card").show();
  });
});