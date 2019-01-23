$(document).ready(function(){
  $("form#survey").submit(function(event){
    event.preventDefault();
    var unluckyResponses = [];
    var luckyResponses = [];
    $("input:checkbox[name=lucky]:checked").each(function(){
        var lucky = $(this).val();
        luckyResponses.push(lucky);
      });
    $("input:checkbox[name=unlucky]:checked").each(function(){
        var unlucky = $(this).val();
        unluckyResponses.push(unlucky);
      });
      if (luckyResponses.length > unluckyResponses.length) {
        $("#lucky").show();
        $("#unlucky").hide();
        $("#static").hide();
      }
      else if (luckyResponses.length < unluckyResponses.length) {
        $("#unlucky").show();
        $("#lucky").hide();
        $("#static").hide();
      }
      else {
        $("#static").show();
        $("#lucky").hide();
        $("#unlucky").hide();
      }

  });
});
