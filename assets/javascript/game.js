

function reset() {


    var score = 0;
    var button = 0;
    score = parseInt(button) + parseInt(score);
    var rand = Math.floor(Math.random() * (60 - 40) + 40);
    var goalValue = $("#goal").text("Goal: " + rand);
    
    $("#pochettino").val(Math.floor(Math.random() * 11));
    console.log("P: " + $("#pochettino").attr("value"))
    
    $("#klopp").val(Math.floor(Math.random() * 11));
    console.log("K: " + $("#klopp").attr("value"));
    
    $("#emery").val(Math.floor(Math.random() * 11));
    console.log("E: " + $("#emery").attr("value"));
    
    $("#guardiola").val(Math.floor(Math.random() * 11));
    console.log("G: " + $("#guardiola").attr("value"));

    $("#score").val(score);
    $("#score").text("Total Score: " + $("#score").val());

  
 
};




