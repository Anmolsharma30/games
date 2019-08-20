
var button = document.getElementById("button");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var div = document.getElementById("div");
var h1 = document.getElementsByTagName('h1')[0];
var seconds=0;minutes=0;hours=0;
var t;
//define pro
var onClick = false;

button.addEventListener("click",toggle);
showP2();
showH1();
function toggle() {
	onClick = !onClick;
	console.log(onClick);
	changebackground();
	changetext();
	hideP1();
	showP2();
	hideH1();
	showH1();
	timer();

}
//change text of button
function changetext() {
	if(onClick) {
		button.innerHTML = "Hide-Discription";
	}
	else {
		button.innerHTML = "Show-Discription";
	}
}
// hide p1
function hideP1() {
	if(onClick) {
		p1.style.display = "none";
	}
	else {
		p1.style.display = "block";
	}
}
//hidep2
function showP2() {
	if(onClick) {
		p2.style.display = "block";
	}
	else {
		p2.style.display = "none";
	}
}
//change background color 
function changebackground() {
	if(onClick){
		div.style.background = "lightgrey";
	}else{
		div.style.background = "none";
	}
}
//timer hide and show
function hideH1(){
	if(onClick){
		h1.style.display = "none";
	}else{
		h1.style.display = "block";
	}
}
function showH1() {
	if(onClick) {
		h1.style.display = "block";
	}
	else {
		h1.style.display = "none";
	}
}
function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
	if (onClick){
		t = setTimeout(add, 1000);
	} else{
		h1.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
	}
	
}

