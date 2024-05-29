var buttonlist=["red", "blue", "green", "yellow"];
 var gamePattern=[];
var  userClickedPattern=[];
var level=0;
var start=false;
$(document).keypress(function(){
        if(!start)
        {$("h1").text("Level"+" " + level);
        nextsequence();
        start=true;}
       
});
function nextsequence(){
       userClickedPattern=[];
       $("#level-title").text("Level " + level);
       level++;
        var random=Math.floor(Math.random()*4);
        var randomChosenColour=buttonlist[random];

 gamePattern.push(randomChosenColour);
 $("#" + randomChosenColour ).delay(100).fadeOut().fadeIn('slow');
//$("#" + randomChosenColour).click(function(){

//playSound(randomChosenColour);

//});
}
$(".btn").click(function(){
        var userChosenColour=$(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);

        });
       

       function playSound(name){
                var value=new Audio("sounds/" + name +".mp3");
                value.play();}

            function  animatePress(currentColour){
           $("#" + currentColour).addClass("pressed");
           setTimeout(function() {
                $("#" + currentColour).removeClass("pressed");
            }, 100);
            }
        function checkAnswer(currentLevel){
if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
if(userClickedPattern.length===gamePattern.length){
setTimeout(function(){
        nextsequence();
},1000);

        }}
else
{
        playSound("wrong");
        $("body").addClass("game-over");
       setTimeout(function(){
        $("body").removeClass("game-over");
       },200);
       $("h1").text("Game over,Press any key to restart");
       $(document).click(function(){
       startover();});

}}
function startover(){
        level=0;
        gamePattern=[];
        start=false;
}
