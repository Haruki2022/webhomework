/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-13 12:29:06
 * @version $Id$
 */
function fade() {
	if(document.getElementById("parent").style.opacity >0.3){
	  document.getElementById("parent").style.opacity -= 0.1;
	  setTimeout(fade,30); 
	}
}
document.getElementById("parent").addEventListener("click",function(e) {
	if(e.target.nodeName == 'IMG') {
	var item = e.target;
    var hide = document.querySelector("img.m-hide");
    hide.style.display = "block";
    hide.src = item.src;
    document.getElementById("parent").style.opacity = 1;
    setTimeout(fade,30); 
    hide.addEventListener("click",function(e) {
    	hide.style.display = "none";
    	document.getElementById("parent").style.opacity = 1;
    });
	}
});