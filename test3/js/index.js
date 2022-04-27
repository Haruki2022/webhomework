/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-09 10:12:21
 * @version $Id$
 */

color = (e) => {
	alert("1");
	e.style.color="red";
}


day = () =>{
	alert("2");
	var h1 = document.querySelector("h1");
	var today = new Date();
	var y = today.getFullYear();
	var m = today.getMonth()+1;
	var d = today.getDate();
	m=check(m);
	d=check(d);
	h1.innerHTML=y+"-"+m+"-"+d;
}
function check(i){
	if(i<10){
		i="0"+i;
	}
	return i;
}


add = () =>{
	alert("3");
	for (var i=1; i<=8; i++)
	document.querySelector(".m-item:nth-child("+i+")").classList.add("fn-active");
}
p4 = () =>{
	alert("4");
    var x = document.getElementById("p8");
    x.parentNode.removeChild(x);
}
p5 = () =>{
	alert("5");
    window.open("https://www.taobao.com/");
}
p6 = () =>{
	alert("6");
    var para=document.createElement("li");
    var node=document.createTextNode("p9");
    para.appendChild(node);
    var element=document.querySelector("ul");
    element.appendChild(para);
    para.addEventListener("click", function(){ alert("9"); });
}
p7 = () =>{
	alert("7");
	var x = document.querySelector("div.m-box");
	var y = window.innerWidth;
	x.style.width=y;
}

