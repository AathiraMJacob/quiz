class Quiz {
  constructor(){
    
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    


    //write code to change the background color here
   if( this.button.mousePressed()){
     background("yellow");
   }
    //write code to show a heading for showing the result of Quiz
   if (allContestants !== undefined){
    fill("black")
    textSize(40);
    text("RESULTS",350,0);
   }
    //call getContestantInfo( ) here
     getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined){
      fill("blue")
      textSize(20);
      text("NOTE:Contestants who answered correct are hishlighted in green",130,230);
     }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns='2';
      if (correctAns===allContestants[plr].answer){
        fill("green");
      }else(
        fill("red")
      )
    }
    
  }

}
