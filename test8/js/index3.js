/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-16 20:54:17
 * @version $Id$
 */

$(init)
function init() {
$(".m-index").each(function(i){
	$(this).find("span:last").on("click",function(){
		$(this).parent().remove();
		$(".m-index").each(function(i){
	      $(this).find("span:first").text($(this).index()+1);
        });
	});
});
$("button").on("click",function(){
	var newlist = '<div class="m-index"><span>3</span><em></em><span>Delete</span></div>';
	$("button").before(newlist);
	$(".m-index").each(function(i){
	  $(this).find("span:last").on("click",function(){
		$(this).parent().remove();
		$(".m-index").each(function(i){
	      $(this).find("span:first").text($(this).index()+1);
        });
	  });
	  $(this).find("span:first").text($(this).index()+1);
    });
});
}