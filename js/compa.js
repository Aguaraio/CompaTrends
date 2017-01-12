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

});
