$(function() {

  var table=[];
  table[0]=["Fujifilm",'<a href="https://www.amazon.com/Fujifilm-INSTAX-Mini-Instant-Blue/dp/B00AWKJPOA/ref=as_li_ss_il?ie=UTF8&qid=1479909261&sr=8-3&keywords=fujifilm+mini+8&th=1&linkCode=li3&tag=compa0ae-20&linkId=701b881d2dafa97387c891a229e4cb60" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00AWKJPOA&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00AWKJPOA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 8","Instax Mini / http://amzn.to/2gKQJxt","2 x AA","100 shots","1/60","60mm ","f/12.7 ","Indoor light, Cloudy/Shade, Partly Sunny, or Bright Sun","November 2012","Yes","307 g (10.8 oz)","116 × × 118.3 x 68.2 mm","1 min","http://amzn.to/2fr7GtZ"];
  table[1]=["Fujifilm",'<a href="https://www.amazon.com/Fujifilm-Instax-Mini-70-Instant/dp/B015R3WUNO/ref=as_li_ss_il?ie=UTF8&qid=1479909156&sr=8-1&keywords=fujifilm+mini+70&linkCode=li3&tag=compa0ae-20&linkId=5f55c992a71a41c65492c895b0a91baa" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015R3WUNO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B015R3WUNO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 70","Instax Mini / http://amzn.to/2gKQJxt","2 X CR2","400 shots","½- to 1/400","60mm","f/12.7 ","Selfie, Auto-Exposure, Self timer with 2 shots, Macro, Hi-Key, Landscape","September 2015","Yes","281 g (9.9 oz)","99.2 × 113.7 × 53.2 mm","1 min","http://amzn.to/2fr7GtZ"];
  table[2]=["Fujifilm",'<a href="https://www.amazon.com/Fujifilm-Instax-Mini-Neo-Classic/dp/B00FR85IRK/ref=as_li_ss_il?ie=UTF8&qid=1479909124&sr=8-1&keywords=fujifilm+mini+90&linkCode=li3&tag=compa0ae-20&linkId=ce9fd460268422adb61e993e18a95aa8" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FR85IRK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00FR85IRK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 90","Instax Mini / http://amzn.to/2gKQJxt","Lithium Ion","100 shots","½- to 1/400","60mm ","f/12.7 ","Dark, Normal, Light, Macro","September 2013","Yes","296 g (10.4 oz)","113.4 x 91.9 x 57.2 mm","1 min","http://amzn.to/2gAVF79"];
  table[3]=["Fujifilm",'<a href="https://www.amazon.com/Fujifilm-Instax-Wide-300-Instant/dp/B00TGOWK3Q/ref=as_li_ss_il?ie=UTF8&qid=1479909185&sr=8-2&keywords=fujifilm+wide+300&linkCode=li3&tag=compa0ae-20&linkId=91e068021dceb5007b5fd7e943599a08" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00TGOWK3Q&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00TGOWK3Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Wide 300","Instax Wide / http://amzn.to/2fr4bDT","4 x AA","100 shots","1/64- to 1/200","95mm ","ƒ/14","Dark, Normal, Light, Macro","Spring 2015","Yes","612 g (21.6 oz)","167.8 x 94.7 x 120.9 mm","1 min","http://amzn.to/2fqZslL"];
  table[4]=["Leica",'<a href="https://www.amazon.com/Leica-Sofort-Instant-Camera-Orange/dp/B01M0VA845/ref=as_li_ss_il?ie=UTF8&qid=1479909217&sr=8-1&keywords=leica+sofort&linkCode=li3&tag=compa0ae-20&linkId=1a01c4972a603f5158b33c66ca3c7eea" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M0VA845&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01M0VA845" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Sofort","Instax Mini / http://amzn.to/2gKQJxt","Lithium Ion","100 shots","1/8 to 1/400","60mm","f/12.7","Automatic, Self-Portrait, People & Part, Action & Sport, Bulb, Macro, Self-Timer, and Double Exposure","November 2016","Yes","305 g (10.7 oz)","124 × 94 × 58 mm","1 min","http://amzn.to/2gfAUd1"];
  table[5]=["Polaroid",'<a href="https://www.amazon.com/Polaroid-Instant-Digital-Printing-Technology/dp/B015JIAD7C/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=Z73HH6ZV2PXMZF120WGS&linkCode=li3&tag=compa0ae-20&linkId=ed11ab8633ebfafa5e5b366cde592831" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015JIAD7C&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B015JIAD7C" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Snap","Zink / http://amzn.to/2gkcS2d","Lithium Ion","50 shots","No Data","28mm","f/2.8","normal, black & white and vintage sepia tone","septermber 2015","No","212 g (7.5 oz)","121 x 77 x 55",">1min","http://amzn.to/2ghvMZF"];

var htmToModal=[];
  var modalCount = 0;
  var numRandom='';
  var colorCard='';
  var varCard= [];
  var htmlStr='';
  var countModalItem = 0;

  for (var i = 0; i < table.length; i++) {
    for (var j = 0; j < table[i].length; j++) {
      varCard[j]= table[i][j];
    }
     numRandom = getRandomIntInclusive(0,11);
     switch(numRandom) {
      case 0:
        colorCard='rgba(224,49,25,0.7)';
        break;
      case 1:
        colorCard='rgba(0,62,119,0.7)';
        break;
      case 2:
        colorCard='rgba(119,57,0,0.7)';
        break;
      case 3:
        colorCard='rgba(196,94,0,0.7)';
        break;
      case 4:
        colorCard='rgba(0,196,94,0.7)';
        break;
      case 5:
        colorCard='rgba(196,0,102,0.7)';
        break;
      case 6:
        colorCard='rgba(230,246,55,0.7)';
        break;
      case 7:
        colorCard='rgba(246,167,55,0.7)';
        break;
      case 8:
        colorCard='rgba(55,246,167,0.7)';
        break;
      case 9:
        colorCard='rgba(167,55,246,0.7)';
        break;
      case 10:
        colorCard='rgba(93,172,38,0.7)';
        break;
      case 11:
        colorCard='rgba(160,172,38,0.7)';
        break;
      }
     htmlStr = '<div class="col-md-4 col-sm-6 col-xs-12 rowModal">'+
                '<div style="border:3px solid #000000">'+
                  '<div class="demo-card-square mdl-card mdl-shadow--2dp" style="border:5px solid '+ colorCard +'">'+
                    '<div class="card-title">'+
                      '<div class="imgAmazon" style="background-color:'+ colorCard +'">'+ varCard[1] +'</div>'+  /*IMAGE*/
                        '<div class="checkDiv">'+
                          '<button class="mdl-button mdl-js-button mdl-button--icon btnAddCompa">'+
                            '<i class="material-icons">done</i>'+
                          '</button>'+
                        '</div>'+
                      '</div>'+
                    '<div class="mdl-card__supporting-text">'+
                          '<div class="row impar">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblName"><h6><strong>Name</strong></h6></div>'+
                            '</div>'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="nameProd idbtn"><h6>'+ varCard[2] +'</h6></div>'+ /*NAME*/
                            '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblBrand"><h6><strong>Brand</strong></h6></div>'+
                            '</div>'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="brandProd idbtn" ><h6>'+ varCard[0] +'</h6></div>'+ /*BRAND*/
                            '</div>'+
                          '</div>'+
                          '<div class="row impar">'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="lblPrice"><h6><strong>Price</strong></h6></div>'+
                              '</div>'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<a class="priceProd" href="'+ varCard[15] +'">show price</a>'+ /*PRICE*/
                              '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblTaste"><h6><strong>Film Type</strong></h6></div>'+
                            '</div>'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="filmtype idbtn">'+ varCard[3] +'</div>'+ /*Film Type*/
                            '</div>'+
                          '</div>'+
                          '<div class="row impar">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblFlavor"><h6><strong>Batteries</strong></h6></div>'+
                            '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="batteries idbtn"><h6>'+ varCard[4] +'</h6></div>'+ /*Batteries*/
                          '</div>'+
                        '</div>'+
                        '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblRoast"><h6><strong>Battery Life</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="batterylife idbtn"><h6>'+ varCard[5] +'</h6></div>'+ /*Battery Life*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblOrigin"><h6><strong>Shutter Speed</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="shutterspeed idbtn"><h6>'+ varCard[6] +'</h6></div>'+ /*Shutter Speed*/
                    '</div>'+
                  '</div>'+
                  '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblType"><h6><strong>Lens Width</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lenswidth idbtn"><h6>'+ varCard[7] +'</h6></div>'+ /*Lens Width*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblWork"><h6><strong>Lens Aperture</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lensaperture idbtn"><h6>'+ varCard[8] +'</h6></div>'+ /*Lens Aperture*/
                    '</div>'+
                  '</div>'+
                  '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblAdicity"><h6><strong>Shooting Modes</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="shootingmode idbtn"><h6>'+ varCard[9] +'</h6></div>'+ /*Shooting Modes*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblCafType"><h6><strong>Release</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="release idbtn"><h6>'+ varCard[10] +'</h6></div>'+ /*Release*/
                    '</div>'+
                  '</div>'+
                  '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblCafType"><h6><strong>Flash</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="flash idbtn">'+ varCard[11] +'</div>'+ /*Flash*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblCafType"><h6><strong>Weight</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="weight idbtn"><h6>'+ varCard[12] +'</h6></div>'+ /*Weight*/
                    '</div>'+
                  '</div>'+
                  '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblCafType"><h6><strong>Dimensions</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="dimensions idbtn"><h6>'+ varCard[13] +'</h6></div>'+ /*Dimensions*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblCafType"><h6><strong>Print Time</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="printtime idbtn"><h6>'+ varCard[14] +'</h6></div>'+ /*Print Time*/
                    '</div>'+
                  '</div>'+
                  '</div>'+
                '</div>'+
               '</div>'+
              '</div>';

         $('#gridContainer').append(htmlStr);

  }
     ////////////////////
    //abrir-cerrar cards

    //abrir-cerrar cards
   ////////////////////

    ///////////////////
   //check cards
$('.btnAddCompa').click(function (){
    if ($(this).parent('.checkDiv').hasClass('checkDivOn')) {
          $(this).parent('.checkDiv').toggleClass('checkDivOn');
          countModalItem -= 1;
          console.log(countModalItem);
    }else{
          if (countModalItem ==0||countModalItem==1||countModalItem ==2) {
            countModalItem += 1;
            $(this).parent('.checkDiv').toggleClass('checkDivOn');

            var contCard = $(this).parents('.col-md-4');



            var colorProd = $(contCard).find(".imgAmazon").css("background-color");
            var nameProd = $(contCard).find(".nameProd").text();
            var brandProd = $(contCard).find(".brandProd").text();
            var imgProd = $(contCard).find(".imgAmazon").html();
            var priceProd = $(contCard).find(".priceProd").attr('href');

            var filmtype = $(contCard).find(".filmtype").text();
            var batteries = $(contCard).find(".batteries").text();
            var batterylife = $(contCard).find(".batterylife").text();
            var shutterspeed = $(contCard).find(".shutterspeed").text();
            var lenswidth = $(contCard).find(".lenswidth").text();
            var lensaperture = $(contCard).find(".lensaperture").text();
            var shootingmode = $(contCard).find(".shootingmode").text();
            var release = $(contCard).find(".release").text();
            var flash = $(contCard).find(".flash").text();
            var weight = $(contCard).find(".weight").text();
            var dimensions = $(contCard).find(".dimensions").text();
            var printtime = $(contCard).find(".printtime").text();


            generateModal(colorProd,nameProd,brandProd, imgProd, priceProd, filmtype,batteries, batterylife, shutterspeed, lenswidth, lensaperture, shootingmode, release, flash, weight, dimensions, printtime);

            var gridColor = $(contCard).find(".imgAmazon");
            $(gridColor).toggleClass("imgAmazonAdd");
          }else {
          window.alert("You can only select up to 3 items");
        }
      }
    });

   //check cards
  ///////////////////

    //////////////////
   //generate modal
   //  generateModal(nameProd,imgProd,tasteProd,flavorProd,roastProd,originProd,typeProd,workProd,acidProd,cafeProd,brandProduct);

      function generateModal(colorProd,nameProd,brandProd, imgProd, priceProd, filmtype,batteries, batterylife, shutterspeed, lenswidth, lensaperture,shootingmode, release, flash, weight, dimensions,printtime){

            htmToModal = '<div class="col-md-4 col-sm-6 col-xs-12 rowModal">'+
                         '<div class="demo-card-square mdl-card mdl-shadow--2dp" style="border:5px solid '+ colorCard +'">'+
                           '<div class="card-title">'+
                             '<div class="imgAmazon" style="background-color:'+ colorCard +'">'+ imgProd +'</div>'+  /*IMAGE*/
                               '<div class="checkDiv">'+
                                 '<button class="mdl-button mdl-js-button mdl-button--icon btnAddCompa">'+
                                   '<i class="material-icons">done</i>'+
                                 '</button>'+
                               '</div>'+
                             '</div>'+
                           '<div class="mdl-card__supporting-text">'+
                                 '<div class="row impar">'+
                                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                     '<div class="lblName"><strong>Name</strong></div>'+
                                   '</div>'+
                                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                     '<div class="nameProd idbtn">'+ nameProd +'</div>'+ /*NAME*/
                                   '</div>'+
                                 '</div>'+
                                 '<div class="row par">'+
                                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                     '<div class="lblBrand"><strong>Brand</strong></div>'+
                                   '</div>'+
                                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                     '<div class="brandProd idbtn" >'+ brandProd +'</div>'+ /*BRAND*/
                                   '</div>'+
                                 '</div>'+
                                 '<div class="row impar">'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                       '<div class="lblPrice"><strong>Price</strong></div>'+
                                     '</div>'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                       '<a class="priceProd" href="'+ priceProd +'">show price</a>'+ /*PRICE*/
                                     '</div>'+
                                 '</div>'+
                                 '<div class="row par">'+
                                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                     '<div class="lblTaste"><strong>Film Type</strong></div>'+
                                   '</div>'+
                                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                     '<div class="filmtype idbtn">'+ filmtype +'</div>'+ /*Film Type*/
                                   '</div>'+
                                 '</div>'+
                                 '<div class="row impar">'+
                                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                     '<div class="lblFlavor"><strong>Batteries</strong></div>'+
                                   '</div>'+
                                 '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                   '<div class="batteries idbtn">'+ batteries +'</div>'+ /*Batteries*/
                                 '</div>'+
                               '</div>'+
                               '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblRoast"><strong>Battery Life</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="batterylife idbtn">'+ batterylife +'</div>'+ /*Battery Life*/
                           '</div>'+
                         '</div>'+
                         '<div class="row impar">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblOrigin"><strong>Shutter Speed</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="shutterspeed idbtn">'+ shutterspeed +'</div>'+ /*Shutter Speed*/
                           '</div>'+
                         '</div>'+
                         '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblType"><strong>Lens Width</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lenswidth idbtn">'+ lenswidth +'</div>'+ /*Lens Width*/
                           '</div>'+
                         '</div>'+
                         '<div class="row impar">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblWork"><strong>Lens Aperture</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lensaperture idbtn">'+ lensaperture +'</div>'+ /*Lens Aperture*/
                           '</div>'+
                         '</div>'+
                         '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblAdicity"><strong>Shooting Modes</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="shootingmode idbtn">'+ shootingmode +'</div>'+ /*Shooting Modes*/
                           '</div>'+
                         '</div>'+
                         '<div class="row impar">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblCafType"><strong>Release</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="release idbtn">'+ release +'</div>'+ /*Release*/
                           '</div>'+
                         '</div>'+
                         '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblCafType"><strong>Flash</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="flash idbtn">'+ flash +'</div>'+ /*Flash*/
                           '</div>'+
                         '</div>'+
                         '<div class="row impar">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblCafType"><strong>Weight</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="weight idbtn">'+ weight +'</div>'+ /*Weight*/
                           '</div>'+
                         '</div>'+
                         '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblCafType"><strong>Dimensions</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="dimensions idbtn">'+ dimensions +'</div>'+ /*Dimensions*/
                           '</div>'+
                         '</div>'+
                         '<div class="row impar">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblCafType"><strong>Print Time</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="printtime idbtn">'+ printtime +'</div>'+ /*Print Time*/
                           '</div>'+
                         '</div>'+
                         '</div>'+
                       '</div>'+
                     '</div>';


       $('#containerModal').append(htmToModal);

      };



   //generate modal
  /////////////////


 //////////////////
//funtion random
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 //function random
//////////////////


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

 /////////////////////
//card-title hover
/*$('.imgAmazon').hover(()=>{
  console.log("asd");
  $(this).toggleClass('imgAmazon_hover');
});*/

 //card-title hover
/////////////////////



});
