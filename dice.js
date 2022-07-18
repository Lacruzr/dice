
function generaAleat() {
    var lance= 0;
    
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

 