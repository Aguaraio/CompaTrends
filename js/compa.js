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

//category selection
 $('.categoryOpt').on('mouseup',(event)=>{
   var optStr = $(event.target).text().toLowerCase().replace(/ /g,'');
   $('.'+ optStr).show(300);
   $('.rowModal:not(.'+ optStr +')').hide(300);
   showFilter(optStr);
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
   showFilter(classTarget);
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

 ///////////////////HANDLERS///////////////////////////
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
///////////////////FUNCTIONS/////////////////////////

//new contains function for search
  jQuery.expr[':'].icontains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
  };


//add filter
  function showFilter(optStr){
    $('#gridContainer').addClass('col-md-10 col-sm-10 col-xs-10');
    $('#leftBar').remove();
    var htmlFilter ='';
    if (optStr == 'coffee') {
      htmlFilter =    '<div class="col-md-2 col-sm-2 col-xs-2" id="leftBar">'+
                        '<div class="filterOpt">'+
                          '<h5 class="filterTitle">Flavor</h5>'+
                          '<select class="form-control srch" id="srchFlavor">'+
                            '<option>All</option>'+
                            '<option>Cinnamon</option>'+
                            '<option>cherry and chocolate</option>'+
                            '<option>Pure</option>'+
                          '</select>'+
                          '<h5 class="filterTitle">Type</h5>'+
                          '<select class="form-control srch" id="srchType">'+
                            '<option>All</option>'+
                            '<option>Arabica</option>'+
                            '<option>Robusta</option>'+
                            '<option>Mixed</option>'+
                          '</select>'+
                        '</div>'+
                      '</div>';
    }else if (optStr == 'instantcameras'){
      htmlFilter = '<div class="col-md-2 col-sm-2 col-xs-2" id="leftBar">'+
        '<div class="filterOpt">'+
          '<h5 class="filterTitle">Battery Life</h5>'+
          '<select class="form-control srch" id="srchBat">'+
            '<option >All</option>'+
            '<option >50 shots</option>'+
            '<option >100 shots</option>'+
            '<option >300 shots</option>'+
            '<option >400 shots</option>'+
          '</select>'+

          '<h5 class="filterTitle">Develop Time</h5>'+
          '<div class="container" id="developTimeInput">30 min</div>'+
          '<input class="mdl-slider mdl-js-slider" id="developTimeSlider" type="range" min="0" max="30" value="30" step="5" tabindex="0"/>'+

          '<table>'+
            '<h5 class="filterTitle">Film Type</h5>'+
            '<tr>'+
              '<label for="InstaxMini" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">'+
                '<input type="checkbox" id="InstaxMini" value="InstaxMini" class="mdl-checkbox__input">'+
                '<span class="mdl-checkbox__label">Instax Mini</span>'+
              '</label>'+
              '<label for="InstaxWide" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">'+
                '<input type="checkbox" id="InstaxWide" value="InstaxWide"  class="mdl-checkbox__input">'+
                '<span class="mdl-checkbox__label">Instax Wide</span>'+
              '</label>'+
              '<label for="Impossible600" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">'+
                '<input type="checkbox" id="Impossible600" value="Impossible600"  class="mdl-checkbox__input">'+
                '<span class="mdl-checkbox__label">Imposible 600</span>'+
              '</label>'+
              '<label for="Zink" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">'+
                '<input type="checkbox" id="Zink" value="Zink"  class="mdl-checkbox__input">'+
                '<span class="mdl-checkbox__label">Zink</span>'+
              '</label>'+
            '</tr>'+
          '</table>'+
        '</div>'+
      '</div>';
    }else if (optStr == 'headphones') {
      htmlFilter = '<div class="col-md-2 col-sm-2 col-xs-2" id="leftBar">'+
        '<div class="filterOpt">'+
          '<h5 class="filterTitle">Type</h5>'+
          '<select class="form-control srch" id="srchType">'+
            '<option >All</option>'+
            '<option >Over-ear</option>'+
            '<option >On-Ear</option>'+
            '<option >In-Ear</option>'+
          '</select>'+

          '<h5 class="filterTitle">Connection</h5>'+
          '<tr>'+
            '<label for="Wired" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxConn">'+
              '<input type="checkbox" id="Wired" value="Wired" class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Wired</span>'+
            '</label>'+
            '<label for="Bluetooth" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxConn">'+
              '<input type="checkbox" id="Bluetooth" value="Bluetooth"  class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Bluetooth</span>'+
            '</label>'+
            '<label for="Bluetooth-NFC" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxConn">'+
              '<input type="checkbox" id="Bluetooth-NFC" value="Bluetooth-NFC"  class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Bluetooth-NFC</span>'+
            '</label>'+
            '<label for="Wireless-RF" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxConn">'+
              '<input type="checkbox" id="Wireless-RF" value="Wireless-RF"  class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Wireless-RF</span>'+
            '</label>'+
            '<label for="Wired-Bluetooth" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxConn">'+
              '<input type="checkbox" id="Wired-Bluetooth" value="Wired-Bluetooth"  class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Wired-Bluetooth</span>'+
            '</label>'+
          '</tr>'+
          '<h5 class="filterTitle">Category</h5>'+
          '<tr>'+
            '<label for="Enthusiast" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxCat">'+
              '<input type="checkbox" id="Enthusiast" value="Enthusiast" class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Enthusiast</span>'+
            '</label>'+
            '<label for="Normal" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxCat">'+
              '<input type="checkbox" id="Normal" value="Normal"  class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Normal</span>'+
            '</label>'+
            '<label for="Sport" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxCat">'+
              '<input type="checkbox" id="Sport" value="Sport"  class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Sport</span>'+
            '</label>'+
            '<label for="Audiophile" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkboxCat">'+
              '<input type="checkbox" id="Audiophile" value="Audiophile"  class="mdl-checkbox__input">'+
              '<span class="mdl-checkbox__label">Audiophile</span>'+
            '</label>'+
          '</tr>'+
        '</div>'+
      '</div>';
    }else if (optStr == "coffeemachines") {
      htmlFilter = '<div class="col-md-2 col-sm-2 col-xs-2" id="leftBar">'+
        '<div class="filterOpt">'+

        '</div>'+
      '</div>';
    }
    $('#bodyContainer').prepend(htmlFilter);
    $('#leftBar').hide().show(300);
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

//
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
