class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data)=>{
         gameState = data.val();

        })
    }

    update(state){
        // / means main database
        database.ref("/").update({
            gameState:state
        })
    }
   

   async start(){
        if(gameState === 0){
     player = new Player();
     form = new Form();
     form.display()
        }
    }
}