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


 //////////////////////////////////////////////////////
///////////////////HANDLERS///////////////////////////

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

//btncompare change css and add/delete item to/from imodal
 $('.imgCompare').bind('mousedown', (event)=>{
   var btn ='#'+ $(event.target.id)['selector'];
   $(btn).removeClass('button-1');
   $(btn).addClass('pressedOut-1');

 }).on('mouseup', (event)=>{
   var container = $(event.target).closest('.rowModal');
   var idTarget = $(container).attr('id');
   var classTarget = idTarget.replace(/\d+/g, '');
   var imgContainer = $(container).find('.imgAmazon').html();
   var btn ='#'+ $(event.target.id)['selector'];

   $(btn).removeClass('pressedOut-1');
   $(btn).addClass('button-1');
   $(btn).toggleClass('botonToggle');
   if ($(btn).hasClass('botonToggle')) {
     $(btn).text("DESELECT");
   }else {
     $(btn).text("COMPARE");
   }

   $('.'+ classTarget).show(300);
   $('.rowModal:not(.'+ classTarget +')').hide(300);
   //showFilter(classTarget);
   handleiModal(imgContainer,btn,idTarget);
 });

//AMAZON btn change css
 $('.btnToAmazon').bind('mousedown', (event)=>{
   var btn ='#'+ $(event.target.id)['selector'];
   $(btn).removeClass('button-2');
   $(btn).addClass('pressedOut-2');
 }).on('mouseup', (event)=>{
   var btn ='#'+ $(event.target.id)['selector'];
   $(btn).removeClass('pressedOut-2');
   $(btn).addClass('button-2');
 });

//handle "glyphicon-remove", imodals delete button
 $(document).on('click','.glyphicon-remove',(event)=>{
   var target = $(event.target).closest('.imodalItem');
   //delete from iModal
   target.remove();
   //change button css
   var btnToChange = $(target).attr('id').substring(9);
   var btn ='#btnCompare' + btnToChange;
   $(btn).toggleClass('botonToggle');
   if ($(btn).hasClass('botonToggle')) {
     $(btn).text("DESELECT");
   }else {
     $(btn).text("COMPARE");
   }

   //hide iModal
   if ($(btn).hasClass('botonToggle')) {
     contiModalItem += 1;
   }else{
     contiModalItem -= 1;
   }
   if (contiModalItem > 0) {
     $('#selectedItemsModal').removeClass('hidden');
     $('#selectedItemsModal').addClass('visible');
   }
   if(contiModalItem == 0) {
     $('#selectedItemsModal').removeClass('visible');
     $('#selectedItemsModal').addClass('hidden');
   }
 });

//slide show from imodal
  var view = $("#listItems");
  var move = "200px";
  var sliderLimit = -750
  $("#rightArrow").click(function(){
      var currentPosition = parseInt(view.css("left"));
      if (currentPosition >= sliderLimit){
        view.stop(false,true).animate({left:"-="+move},{ duration: 400});
      }
  });
  $("#leftArrow").click(function(){
      var currentPosition = parseInt(view.css("left"));
      if (currentPosition < 0) view.stop(false,true).animate({left:"+="+move},{ duration: 400})
  });

  //handle imgCompareHere
  $('#imgCompareHere').click(()=>{
      addtoCompareModal();
  });

 //click out off modalItems makes compare Modal hide
 $('#containerContainerModal').on('click', function(e) {
    if (e.target !== this)
      return;
    $('#flipFlop').modal('hide');
  });

  //click on hover div to go amazon
  $(document).on('click','.hoverDiv',(event)=>{
    $(event.target).closest('.rowModal').find('.card-title .imgAmazon a img').click();
  })
 ///////////////////HANDLERS///////////////////////////
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
///////////////////FUNCTIONS/////////////////////////

//new contains function for search
  jQuery.expr[':'].icontains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
  };

//add item to iModal
var contiModalItem = 0;

function handleiModal(imgContainer,btn,idTarget){
 //obtenemos el id del tile seleccionado
 //var idTile = container.substring(4);

 if ($(btn).hasClass('botonToggle')) {
   contiModalItem += 1;
   //se agrega tile al modal
   //console.log(idTile);
   addtoiModal(imgContainer,idTarget);
 }else{
   contiModalItem -= 1;
   //se elimina el tile seleccionado
   removefromiModal(idTarget);
 }
 if (contiModalItem > 0) {
   $('#selectedItemsModal').removeClass('hidden');
   $('#selectedItemsModal').addClass('visible');
 }
 if(contiModalItem == 0) {
   $('#selectedItemsModal').removeClass('visible');
   $('#selectedItemsModal').addClass('hidden');
 }

};

//generate modal
function addtoiModal(imgContainer,idTarget) {
  var generatedDiv;
  generatedDiv ='<div class="imodalItem" id="modalItem'+idTarget+'">'+
                  '<div class="demo-card-square mdl-cardiModal mdl-shadow--2dp">'+
                    '<div class="iModalImg">'+ imgContainer +'</div>'+  /*IMAGE*/
                    '<div class="btnClose">'+
                      '<span class="glyphicon glyphicon-remove"></span>'+
                    '</div>'+
                  '</div>'+
                '</div>';
  $('#listItems').append(generatedDiv);
}

//eliminate Modal
function removefromiModal(idTarget) {
 var tile = $('#listItems').find('#modalItem'+ idTarget);
 $(tile).remove();
}
function eliminateModal(idTile){
 var tile = $('#containerModal').find('#modalItem'+ idTile);
 $(tile).remove();
}

//add to compa
function addtoCompareModal(){
  //get items list from iModal
  var arr = $("#listItems > div").map(function() {
    return this.id.substring(9)
  });
  generateCompareModal(arr.get());

};

//add items from imodal to Modal compare
function generateCompareModal(idTiles){
  //delete all the cards from containerModal
  $('#containerModal').children().remove();
  var generatedDiv,cardTitle,cardSpecs;
  for (var i = 0; i < idTiles.length; i++) {
    cardTitle = $('#'+idTiles[i]).find('.card-title').html();
    cardSpecs = $('#'+idTiles[i]).find('.allSpecs').html();
    generatedDiv = '<div class="col-md-4 col-sm-6 col-xs-12 modalmargin" id="modalItem'+ idTiles[i] +'">'+
                      '<div class="demo-card-square mdl-card modal-card mdl-shadow--2dp modal-dialog" style="border:5px solid #000">'+
                        '<div class="card-title">'+ cardTitle +'</div>'+
                        '<div class="mdl-card__supporting-text">'+ cardSpecs +'</div>'+
                      '</div>'+
                    '</div>';
    $('#containerModal').append(generatedDiv);
  }
};
///////////////////FUNCTIONS/////////////////////////
//////////////////////////////////////////////////////


});
