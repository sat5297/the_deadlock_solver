var c1 = (Math.floor(Math.random()*6)+1);
var c2 = (Math.floor(Math.random()*6)+1);

document.lastElementChild.lastElementChild.firstElementChild.lastElementChild.lastElementChild.setAttribute("src","images/dice"+ c1 + ".png");

document.lastElementChild.lastElementChild.firstElementChild.getElementsByClassName("dice")[0].getElementsByClassName("img1")[0].setAttribute("src","images/dice"+ c2 +".png");


if(c1 < c2){
	document.firstElementChild.lastElementChild.getElementsByClassName("container")[0].firstElementChild.innerHTML = "Player1 Wins";
}
else if(c1 > c2){
	document.firstElementChild.lastElementChild.getElementsByClassName("container")[0].firstElementChild.innerHTML = "Player2 Wins";
}
else{
	document.firstElementChild.lastElementChild.getElementsByClassName("container")[0].firstElementChild.innerHTML = "Draw";

}