/* global $ */

$(document).ready(function() {
    
    function answerLength(a1,a2,a3){
        var score1= a1.length;
        var score2= a2.length;
        var score3= a3;
        return score1 + score2 + parseInt(score3,10);
    }
    $("button").click(function() {
        console.log("works");
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = answerLength(q1Result, q2Result, q3Result);
        console.log("this is work",totalScore);
        if(totalScore < 2.2) {
            $("final").text("sadasdasdas");
        }
        else if(totalScore < 4.4 && totalScore >= 2.2) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore < 6.6 && totalScore >= 4.4) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore < 8.8 && totalScore >= 6.6) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore < 11 && totalScore >= 8.8) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore < 13.2 && totalScore >= 11) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore < 15.4 && totalScore >= 13.2) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore < 17.6 && totalScore >= 15.4) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore < 19.8 && totalScore >= 17.6) {
            $("#final").text("sadasdasdas");
        }
        else if(totalScore <= 22 && totalScore >= 19.8) {
            $("#final").text("sadasdasdas");
        }else{
            $("#final").text("sadasdasdas");
        }
    });
});
