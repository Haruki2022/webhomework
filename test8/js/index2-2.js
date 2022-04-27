/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-14 16:41:42
 * @version $Id$
 */
 document.querySelector("div.g-index").addEventListener("click",function(e) {
 	if(e.target.className == 'g-menu') {
	var item = e.target;
	var d = document.getElementsByTagName("div");
 	for(var i=0;i<d.length;i++)if(d[i]===e.target)index=i;
	document.querySelectorAll("div.g-menu")[0].style.backgroundColor="white";
	document.querySelectorAll("div.g-menu")[1].style.backgroundColor="white";
	document.querySelectorAll("div.g-menu")[2].style.backgroundColor="white";
	document.querySelectorAll("div.g-menu")[0].style.borderBottom="2px solid black";
	document.querySelectorAll("div.g-menu")[1].style.borderBottom="2px solid black";
	document.querySelectorAll("div.g-menu")[2].style.borderBottom="2px solid black";
	item.style.backgroundColor="#c0c0c0";
	item.style.borderBottom="2px solid #c0c0c0";
	document.querySelector("div.m-bd").innerHTML=index;
	}
});