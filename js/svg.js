var snapper = Snap('#svg');
var activeSlice = [];
var assocSlices = [];
var pulseHasHappened;
Snap.load('svgs/chart3-m2.svg', function (loadedFragment) {
  var layer0 = loadedFragment.select('#talent');
  snapper.append(layer0);
  $.each(layer0.selectAll('.slice'), function () {
    var sliceId = this.node.id.toString();
    assocSlices[sliceId] = this;
  });



});

function unhightlight() {
      var currentSlice = assocSlices[activeSlice[0].node.id];

      activeSlice.shift();
      $("#" + currentSlice.node.id).attr("class", "unhightlight slice");
      $("#" + currentSlice.node.id).attr("style", "fill: #000000;");
      $(".ring-peices").find('path').attr("class", "");
      $(".ring-peices").find('circle').attr("class", "");
      $(".ring-peices").find('text').attr("class", "");
}

function highlight(clickedObject) {
  if (activeSlice.length > 0) {
    unhightlight();
  }
  clickedObject = assocSlices[clickedObject];

  if (clickedObject.node.id != 's-home') {
    clickedObject.parent().append(clickedObject);

        if (clickedObject.node.id == "s-ongoing-dialog") {
       
          $(".ring-peices").find('path').attr("class", "highlight");
          $(".ring-peices").find('circle').attr("class", "highlight");
          $(".ring-peices").find('text').attr("class", "highlight");
        }

        $("#" + clickedObject.node.id).attr("class", "highlight");


    $("#" + clickedObject.node.id).attr("style", "fill: #FFFFFF;");

    activeSlice[0] = clickedObject;

  }

}
  function pulse() {
   var listOfSlices = ["s-goal-setting","s-mid-year-review","s-career-development", "s-year-end-review","s-ongoing-dialog"]
     for(var i = 0; i < listOfSlices.length; i++) {
      setTimeout(function(y) {
      $("#" + listOfSlices[y]).find("path").attr("class", "pulseMe");
       
    },  i * 150, i);
}
  setTimeout(function() {
       pulseHasHappened = true;
       $(".slice").find('path').attr('class', "");
  }, 2000);
  pulseHasHappened = true;

  

  }
$(document).ready(function(){
     if (window.location.href.substring(window.location.href.length-2) == "#/") {
        setTimeout(function() {
            pulse();
        }, 1000);
  }
   
});

