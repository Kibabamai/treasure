 let map = document.getElementsByClassName("map")[0]
 let pirate = document.getElementsByClassName ("pirate")[0]
 let newGame = document.getElementsByClassName("newGame")[0]
 let box = document.getElementsByClassName("box")[0]
 let steps = 0
 let treasureX = Math.random()*400+50
 let treasureY = Math.random()*400+50
 let hints = document.getElementsByTagName("h3")[0]
 
 console.log(treasureX,treasureY);
 map.onclick = function (event){
   steps = steps + 1;
    console.log(event.offsetX,event.offsetY);
    // для того, чтобы пират стоял ровно на курсоре
    let pirateX=event.offsetX-20
    let pirateY=event.offsetY-40
    pirate.style.left=pirateX+"px"
    pirate.style.top=pirateY+"px"
    let X = treasureX - pirateX
    let Y = treasureY - pirateY
    let distance =Math.sqrt( X*X + Y*Y )
    console.log(distance);
    if(distance < 15){
      hints.innerHTML = "You win  " + "it took you  " + steps + "  steps"
      map.style.pointerEvents = "none";
      box.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"
    }
    else if(distance < 30){
      hints.innerHTML = "Hotter than a sun"
    }
    else if(distance < 80){
      hints.innerHTML = "Burning lava"
    }
    else if(distance < 125){
      hints.innerHTML = "Hot"
    }
    else if(distance < 175){
      hints.innerHTML = "Warm pasta"
    }
    else if(distance < 220){
      hints.innerHTML = "Windy"
    }
    else if(distance < 250){
      hints.innerHTML = "Cold"
    }
    else if(distance < 310){
      hints.innerHTML = "Ice"
    }
    else{
      hints.innerHTML = "Antarctica"
    }
  }

  
    newGame.onclick = function (event){
      map.style.pointerEvents = "auto";
      hints.innerHTML = "Good luck"
      pirate.style.left= 70 +"px"
      pirate.style.top= 10 +"px"
      treasureX = Math.random()*400+50
      treasureY = Math.random()*400+50
      steps = 0
      box.style.transform = "translate(-50%,-50%) scale(0) rotate(1080deg)"
    }
