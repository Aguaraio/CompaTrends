$(function() {
 //////////////////////////////
//sort gridContainer
  var items = $('.nameProd').get();

  items.sort(function(x,y) {
      return $.trim($(x).text()) > $.trim($(y).text());
  });

  $('#gridContainer').empty();

  $(items).each(function() {
        $('#gridContainer').append($(this).parents('.rowModal'));
  });
 //sort gridContainer
//////////////////////////////

/////////////////
//Search section
 $('#searchInput').keypress((e)=>{
   var keycode = (e.keyCode ? e.keyCode : e.which);
   if(keycode== 13){
     var str = $("#searchInput").val();
     var divFound = $(".rowModal").find(".idbtn:icontains("+ str +")");
     var divNotFound = $(".rowModal").find(".idbtn:not(:icontains("+ str +"))");
     $(divNotFound).parents(".rowModal").hide(300);
     $(divFound).parents(".rowModal").show(300);
   }
 });
//Search section
/////////////////

/////////////////////////
//new contains function
jQuery.expr[':'].icontains = function(a, i, m) {
 return jQuery(a).text().toUpperCase()
     .indexOf(m[3].toUpperCase()) >= 0;
};
//new contains function
/////////////////////////

});
