
/**
 const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}
 **/

function generaAleat(){
    const myTimeout1 =  setTimeout(retardo, 300)
    const myTimeout2 =  setTimeout(retardo, 500)
    const myTimeout3 =  setTimeout(retardo, 700)
    const myTimeout4 =  setTimeout(retardo, 900)
    const myTimeout5 =  setTimeout(retardo, 1100)
    const myTimeout6 =  setTimeout(retardo, 1300)
    const myTimeout7 =  setTimeout(retardo, 1500)
    const myTimeout8 =  setTimeout(retardo, 1800)
    const myTimeout9 =  setTimeout(retardo, 2100)
    const myTimeout10 =  setTimeout(retardo, 2400)
    
}



function retardo(){
       lance= Math.floor(Math.random()*6+1);
        switch(lance){
            case 1:
                document.getElementById("dado-img").src="./one.png";
            break;
            case 2:
                document.getElementById("dado-img").src="./two.png";
            break;
            case 3:
            document.getElementById("dado-img").src="./three.png";
            break;
            case 4:
            document.getElementById("dado-img").src="./four.png";
            break;
            case 5:
            document.getElementById("dado-img").src="./five.png";
            break;
            case 6:
            document.getElementById("dado-img").src="./six.png";
            break;
        }
    
  }

 