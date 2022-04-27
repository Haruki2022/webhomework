/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-04-13 10:26:04
 * @version $Id$
 */
$(init) 
function init() {
$("img.m-hide").hide();
$("img").each(function(i){
  $(this).on("click",function(){
  	$(".g-index").fadeTo("slow",0.15);
  	$("img.m-hide").attr('src',$("img")[i].src);
  	$("img.m-hide").show();
  })
 });
$(".m-hide").on("click",function(){
  $(".g-index").fadeTo("slow",1);
  $("img.m-hide").hide();
});
}