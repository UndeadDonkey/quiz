/* global $ */

$(document).ready(function() {
    
    function answerLength(a1,a2,a3){
        var score1= a1.length;
        var score2= a2.length;
        var score3= a3;
        return score1 + score2 + parseInt(score3,10);
    }
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = answerLength(q1Result, q2Result, q3Result);
        console.log(totalScore);
        if(totalScore >= 8 && totalScore < 10) {
            $("#final").text("Big Pear");
        }
        else if(totalScore >=10 && totalScore < 12) {
            $("#final").text("Evil Pear");
        }
        else if(totalScore >=12 && totalScore < 14) {
            $("#final").text("Cold Pear");
        }
        else if(totalScore >=14 && totalScore < 16) {
            $("#final").text("Cooked Pear");
        }
        else if(totalScore >=16 && totalScore < 18) {
            $("#final").text("Pear with a door");
        }
        else if(totalScore >=18 && totalScore < 20) {
            $("#final").text("Giant Pear");
        }
        else if(totalScore >=20 && totalScore < 22) {
            $("#final").text("Sad Pear");
        }
        else if(totalScore >=8 && totalScore < 10) {
            $("#final").text("Good Pear");
        }
        else if(totalScore >=8 && totalScore < 10) {
            $("#final").text("Troll Pear");
        }
        else if(totalScore >=8 && totalScore < 10) {
            $("#final").text("Normal Pear");
        }else {
            $("#final").text("Small Pear");
        }
    });
});
