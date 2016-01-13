$(function(){
  $("form#info").submit(function(event) {

    var myAge = parseInt($("input#age").val());
    var myGender = $("select#gender").val();
    var myMusic = $("select#music").val();
    var janJack = ("Janet Jackson");
    var gCloon = ("George Clooney");
    var tSwift = ("Taylor Swift");
    var rih = ("Rihanna");
    var eminem = ("Marshal Mathers");
    var cAtkins = ("Chet Atkins");

    if(myAge < 18) {
      alert("You are not old enough to see the results");
    };
    if(myAge > 50 && myGender === "male" && myMusic === "hiphop") {
      $("#celeb").empty().append(janJack);
      $("#result").show();
    };
    if(myAge > 50 && myGender === "female" && myMusic === "hiphop") {
      $("#celeb").empty().append(gCloon);
      $("#result").show();
    };
    if(myAge < 50 && myGender === "male" && myMusic === "country") {
      $("#celeb").empty().append(tSwift);
      $("#result").show();
    };
    if(myAge < 50 && myGender === "female" && myMusic === "country") {
      $("#celeb").empty().append(cAtkins);
      $("#result").show();
    };
    if(myAge < 50 && myGender === "male" && myMusic === "hiphop") {
      $("#celeb").empty().append(rih);
      $("#result").show();
    };
    if(myAge > 50 && myGender === "female" && myMusic === "hiphop") {
      $("#celeb").empty().append(eminem);
      $("#result").show();
    };
    if(myAge && myGender === "female" && myMusic === "hiphop") {
      $("#celeb").empty().append(eminem);
      $("#result").show();
    };

    event.preventDefault();
  });
});
