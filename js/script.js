/* global $ */

$(document).ready(function() {
    
    function answerLength(a1,a2,a3){
        var score1= a1.length;
        var score2= a2.length;
        var score3= a3.length;
        return score1 + score2 + score3;
    }
    
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = answerLength(q1Result,q2Result,q2Result);
    });

});
