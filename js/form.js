class Form{
constructor(){
    this.input=  createInput("Name")
    this.button = createButton("PLAY")
    this.greeting = createElement("h2")
    this.title = createElement("h1")
}

hide(){
    this.input.hide()  
    this.button.hide()
    this.greeting.hide()
    this.title.hide()
}

display(){
    this.title.html(" CAR RACING MULTIPLAYER GAME")
    this.title.position(displayWidth/2 -70, 0 )
    

    this.input.position(displayWidth/2 -40 ,displayHeight/2 -80);

    this.button.position(displayWidth/2 +30 , displayHeight/2);

    this.button.mousePressed(()=> {
    this.input.hide()
    this.button.hide()
    player.name = this.input.value()
    playerCount = playerCount +1;
    player.updateCount(playerCount)

    this.greeting.html("WELCOME"+ player.name)
    this.greeting.position(displayWidth/2-70, displayHeight/4);
    })
}
}