/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-14 15:51:44
 * @version $Id$
 */
$(init) 
function init() {
$(".g-menu").each(function(i){
  $(this).on("click",function(){
  	$(".g-menu").css("background-color","white")
  	$(".g-menu").css("border-bottom","2px solid black");
  	$(this).css("background-color","#c9c9c9");
  	$(".m-bd").text($(this).index()+1);
  	$(this).css("border-bottom","2px solid #c9c9c9");
  });
});
}