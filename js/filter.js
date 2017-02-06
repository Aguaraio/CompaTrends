$(function() {
  var optStr='';
  //category selection
   $('.categoryOpt').on('mouseup',(event)=>{
     if (optStr != $(event.target).text().toLowerCase().replace(/ /g,'')) {
       //empty arrFltr
       arrFltr =[];
       optStr = $(event.target).text().toLowerCase().replace(/ /g,'');
       $('.'+ optStr).show(300);
       $('.rowModal:not(.'+ optStr +')').hide(300);

        //add onGrid class to know if divs still visible on gridContainer
       $('.'+optStr).addClass('onGrid');
       $('.rowModal:not(.'+ optStr +')').removeClass('onGrid');
       showFilter(optStr);
       //empty list of imodal items then hide imodal
       $('#listItems').empty();
       $('#selectedItemsModal').removeClass('visible');
       $('#selectedItemsModal').addClass('hidden');

     }
   });

  //btnCompare on mouse up
  $('.imgCompare').on('mouseup', (event)=>{
    var container = $(event.target).closest('.rowModal');
    var idTarget = $(container).attr('id');
    var classTarget = idTarget.replace(/\d+/g, '');
    if (optStr != classTarget) {
      optStr = classTarget;
      showFilter(optStr);
    }
  });

  //add filter
  function showFilter(category){
    //add filter bar
    $('#gridContainer').addClass('col-md-10 col-sm-10 col-xs-10');
    $('#leftBar').remove();
    var htmlParentFilter='';
    htmlParentFilter = '<div class="col-md-2 col-sm-2 col-xs-2" id="leftBar"><div class="filterOpt" id="selectFilter"></div></div>';
    $('#bodyContainer').prepend(htmlParentFilter);

    //get the special category specs
    getSpecList(category);

    //build filters from db.js's filled array
    for (var i = 0; i < filterArraylist.length; i++) {
      if (optStr == filterArraylist[i][0]) {
        for (var j = 1; j < filterArraylist[i].length; j++) {
          if (filterArraylist[i][j] == "dropdown") {
            dropDownFilter(j);
          }else if (filterArraylist[i][j] == "radiobutton") {
            radioButtonFilter(j);
          }else if(filterArraylist[i][j] == "slider"){
            sliderFilter(j,1);
          }else{
            console.log("need more data on db.js");
          }
        }
      }

    }
    $('#leftBar').hide(300).show(300);
  };


  //get all specs for selected category
  var arrayTitle = new Array();
  var arraySpec1 = new Array();
  var arraySpec2 = new Array();
  var arraySpec3 = new Array();
  function getSpecList(category){
    arrayTitle = [];
    arraySpec1 = [];
    arraySpec2 = [];
    arraySpec3 = [];
    $('.'+category).find('.titleHover').each((e,str)=>{
      var title = $(str).text();
      if ($.inArray(title,arrayTitle) == -1) {
         arrayTitle.push(title);
      }
    });

    $('.'+category).find('.hover1').each((e,str)=>{
      var spec = $(str).find('.specHover').text();
      if ($.inArray(spec,arraySpec1) == -1) {
         arraySpec1.push(spec);
      }
    });

    $('.'+category).find('.hover2').each((e,str)=>{
      var spec = $(str).find('.specHover').text();
      if ($.inArray(spec,arraySpec2) == -1) {
         arraySpec2.push(spec);
      }
    });

    $('.'+category).find('.hover3').each((e,str)=>{
      var spec = $(str).find('.specHover').text();
      if ($.inArray(spec,arraySpec3) == -1) {
         arraySpec3.push(spec);
      }
    });

  }

  //building dropDown Filter
  function dropDownFilter(numSpec){
    var titleStr ='';
    var arrayList = [];
    var indexSpec = 0;
    var strOption = '';
    if (numSpec == 1) {
      arrayList = arraySpec1;
      indexSpec = 0;
    }else if (numSpec == 2) {
      arrayList = arraySpec2;
      indexSpec = 1;
    }else if (numSpec == 3) {
      arrayList = arraySpec3;
      indexSpec = 2;
    }
    var titleStr = arrayTitle[indexSpec];
    for (var i = 0; i < arrayList.length; i++) {
      strOption += '<option>'+arrayList[i]+'</option>';
    }
    var htmlDropDown ='<h5 class="filterTitle">'+titleStr+'</h5>'+
                      '<select class="form-control selectfilter" id="dropdown'+titleStr.toLowerCase().replace(/ /g,'')+'"><option>All</option>'+strOption+'</select>';
    $('#selectFilter').append(htmlDropDown);
  };

  //building slider filter
  function sliderFilter(numSpec,stepValue){
    var titleStr ='';
    var arrayList = [];
    var indexSpec = 0;
    var strOption = '';
    if (numSpec == 1) {
      arrayList = arraySpec1;
      indexSpec = 0;
    }else if (numSpec == 2) {
      arrayList = arraySpec2;
      indexSpec = 1;
    }else if (numSpec == 3) {
      arrayList = arraySpec3;
      indexSpec = 2;
    }
    var titleStr = arrayTitle[indexSpec];
    var maxValue = 0;
    var minValue = 100;
    for (var i = 0; i < arrayList.length; i++) {
      var currentValue = parseInt(arrayList[i].replace(/\D/g,''));
      if (currentValue > maxValue) {
        maxValue = currentValue;
      }
      if (currentValue < maxValue) {
        minValue = currentValue;
      }
    }
    var htmlSlider ='<h5 class="filterTitle">'+titleStr+'</h5>'+
                        '<div class="container" id="'+titleStr.toLowerCase().replace(/ /g,'')+'Input">'+maxValue+'</div>'+
                          '<input class="mdl-slider mdl-js-slider sliderfilter" id="slider'+titleStr.toLowerCase().replace(/ /g,'')+'" type="range" min="0" max="'+maxValue+'" value="'+maxValue+'" step="'+stepValue+'" tabindex="0"/>';
    $('#selectFilter').append(htmlSlider);
  };

  //building radioButton filter
  function radioButtonFilter(numSpec){
    var titleStr ='';
    var arrayList = [];
    var indexSpec = 0;
    var strOption = '';
    if (numSpec == 1) {
      arrayList = arraySpec1;
      indexSpec = 0;
    }else if (numSpec == 2) {
      arrayList = arraySpec2;
      indexSpec = 1;
    }else if (numSpec == 3) {
      arrayList = arraySpec3;
      indexSpec = 2;
    }
    var titleStr = arrayTitle[indexSpec];
    for (var i = 0; i < arrayList.length; i++) {
    strOption += '<input type="radio" name="'+titleStr.toLowerCase().replace(/ /g,'')+'" value="'+arrayList[i].toLowerCase().replace(/ /g,'')+'"> '+arrayList[i]+'<br>';
    }
    var htmlRadioButton = '<h5 class="filterTitle">'+titleStr+'</h5><form class="radbtnfilter" id="radbtn'+titleStr.toLowerCase().replace(/ /g,'')+'">  <input type="radio" name="'+titleStr.toLowerCase().replace(/ /g,'')+'" value="all" checked > All<br>'+strOption+'</form>';
    $('#selectFilter').append(htmlRadioButton);
  }


//////////////////////////////////////////////
//FILTER FUNCTIONS
//dropdown handle
$(document).on('change','.selectfilter',(e)=>{
  var idFilter = '#'+e.target.id;
  var value = e.target.value;
  var title = idFilter.substring(9);
  if (value.toLowerCase()== "all") {
    $('.'+optStr).addClass('onGridDropDown'+title+'');
  }else{
    $('.'+optStr).find('.specDiv').each((e,str)=>{
      $(str).find('.titleHover').each((r,titlestr)=>{
        if ($(titlestr).text().toLowerCase().replace(/ /g,'') == title) {
          var rowHover = $(titlestr).parent();
          if ($(rowHover).find('.specHover').text().toLowerCase().replace(/ /g,'') == value.toLowerCase().replace(/ /g,'')) {
            $(titlestr).closest('.rowModal').addClass('onGridDropDown'+title+'');
          }else{
            $(titlestr).closest('.rowModal').removeClass('onGridDropDown'+title+'');
          }
        }
      })
    })
  }
  filterDivs(value, '.onGridDropDown'+title);
});

//slider handle
$(document).on('change','.sliderfilter',(e)=>{
  var idFilter = '#'+ e.target.id;
  var value = e.target.value;
  var title = idFilter.substring(7);
  console.log();
  $('#'+ title +'Input').text(e.target.value);
  $('.'+optStr).find('.specDiv').each((e,str)=>{
    $(str).find('.titleHover').each((r,titlestr)=>{
      if ($(titlestr).text().toLowerCase().replace(/ /g,'') == title) {
        var rowHover = $(titlestr).parent();
        if (parseInt($(rowHover).find('.specHover').text().replace(/\D/g,'')) <= parseInt(value)) {
          $(titlestr).closest('.rowModal').addClass('onGridSlider'+title+'');
        }else{
          $(titlestr).closest('.rowModal').removeClass('onGridSlider'+title+'');
        }
      }
    })
  })
    filterDivs(value,'.onGridSlider'+title);
});

//radio button handle
$(document).on('change','.radbtnfilter',(e)=>{
  var idFilter = '#'+e.currentTarget.id;
  var value = e.target.value;
  var title = idFilter.substring(7);
  if (value.toLowerCase()=="all") {
    $('.'+optStr).addClass('onGridRadbtn'+title+'');
  }else{
    $('.'+optStr).find('.specDiv').each((e,str)=>{
      $(str).find('.titleHover').each((r,titlestr)=>{
        if ($(titlestr).text().toLowerCase().replace(/ /g,'') == title) {
          var rowHover = $(titlestr).parent();
          if ($(rowHover).find('.specHover').text().toLowerCase().replace(/ /g,'') == value.toLowerCase().replace(/ /g,'')) {
            $(titlestr).closest('.rowModal').addClass('onGridRadbtn'+title+'');
          }else{
            $(titlestr).closest('.rowModal').removeClass('onGridRadbtn'+title+'');
          }
        }
      })
    })
  }
  filterDivs(value,'.onGridRadbtn'+title);
});

//funtion called to actually filter divs
  var arrFltr = new Array();
  function filterDivs(value,title){
    var classStr = '';
    if ($.inArray(title,arrFltr) == -1) {
      arrFltr.push(title);
    }
    for (var i = 0; i < arrFltr.length; i++) {
        classStr += arrFltr[i];
    }
    $('.'+optStr).hide(300);
    $(classStr).show(300);
  }




//dropDown handle
/*$(document).on('change','.selectfilter',(e)=>{
  var idFilter = '#'+e.target.id;
  var selected = $(idFilter).val();
  if (selected != "All") {
    $('.'+optStr).hide(300);

    $('.'+optStr).find('.specHover').each((e,str)=>{
      if (selected == $(str).text()) {
        $(str).closest('.rowModal').show(300);
      }
    })
  }else{
    $('.'+optStr).show(300);
  }
});

//slider handle
$(document).on('change','.sliderfilter',(e)=>{
  var idFilter = '#'+e.target.id;
  var value = e.target.value;
  var idText ='#'+ idFilter.substring(7) +'Input';
  $(idText).text(value + ' min');
  filterBySlider(value);
});

function filterBySlider(value){
  var strValue = value + ' min';
    $('.'+optStr).hide(300);
    $('.'+optStr).find('.specHover').each((e,str)=>{
      if (parseInt(value) >= parseInt($(str).text().replace(/\D/g,''))) {
        $(str).closest('.rowModal').show(300);
      }
  })
}

//radio button handle
$(document).on('change','.radbtnfilter',(e)=>{
  console.log(e.target.value);
  var value = e.target.value;
  if (value != "all") {
    $('.'+optStr).hide(300);
    $('.'+optStr).find('.specHover').each((e,str)=>{
      if (value == $(str).text().toLowerCase().replace(/ /g,'')) {
        $(str).closest('.rowModal').show(300);
      }
    })
  }else{
    $('.'+optStr).show(300);
  }
});

  function filterDivs(){

  }*/
//FILTER FUNCTIONS
//////////////////////////////////////////////



});
