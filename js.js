    document.addEventListener("keydown", key);
    //document.addEventListener("click")



var day = false;

function key(e){
    if(e.key == "d"||e.key == "D"){
        if(day){day = false; changeToNight();
        }else if(!day){day = true; changeToDay();}
    }
}


function changeToDay(){   
    let root = document.documentElement;
    root.style.setProperty('--darkbackground', "#fff");
    root.style.setProperty('--light', "#222");

 

    //document.getElementById("i").style.backgroundColor = ""
}
function changeToNight(){
    let root = document.documentElement;
    root.style.setProperty('--darkbackground', "#434343");
    root.style.setProperty('--light', "#fff");
}