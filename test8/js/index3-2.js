/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-17 17:56:33
 * @version $Id$
 */

 document.querySelector("div.g-index").addEventListener("click",function(e) {
 	if(e.target.innerHTML == 'Delete') {
 		e.target.parentNode.parentNode.removeChild(e.target.parentNode);
 		var d = document.getElementsByTagName("div");
 		for(var i=1;i<d.length;i++)document.querySelectorAll(".m-tab")[i-1].innerHTML=i;
 	}
 	if(e.target.nodeName == 'BUTTON') {
 		var child = document.querySelector("div.m-index");
 		var par = document.querySelector("div.g-index");
		var newlist = document.createElement("div");
		var sp1 = document.createElement("span");
		var node1 = document.createTextNode("1");
		var em = document.createElement("em");
		var sp2 = document.createElement("span");
		var node2 = document.createTextNode("Delete");
		sp1.appendChild(node1);
		sp2.appendChild(node2);
		sp1.classList.add("m-tab");
		newlist.appendChild(sp1);
		newlist.appendChild(em);
		newlist.appendChild(sp2);
		newlist.classList.add("m-index");
		par.insertBefore(newlist,child);
		var d = document.getElementsByTagName("div");
		for(var i=1;i<d.length;i++)document.querySelectorAll(".m-tab")[i-1].innerHTML=i;
 	}
 });