var like = 0;
function liked(){
    var svg = document.getElementById('btlike')
    if(like == 0){
        var div = document.getElementById('btlike').querySelector("svg").style.fill = "red";
        var div = document.getElementById('btlike').querySelector("svg").style.stroke = "red";
        like = 1;
    } else {
        var div = document.getElementById('btlike').querySelector("svg").style.fill = "white";
        var div = document.getElementById('btlike').querySelector("svg").style.stroke = "red";
        like = 0;
    };
}