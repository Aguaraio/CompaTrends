$(function() {

  var table=[];
  table[0]=["Koffee Kult" , "Dark Roast" , "http://amzn.to/2gD4lL4", "Bitter", "Cinnamon", "Dark", "Columbia", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Koffee-Kult-Highest-Delicious-Organically/dp/B00PV4FG3Q/ref=as_li_ss_il?_encoding=UTF8&refRID=G8D0HHZ19D7Z9HWZ18FV&th=1&linkCode=li3&tag=compa0ae-20&linkId=243b242fda97bfcf0a4dcc62edda4534" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00PV4FG3Q&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00PV4FG3Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[1]=["Death Wish", "Death Wish", "http://amzn.to/2gfetGa", "Smooth", "cherry and", "Dark", "Vietnam", "Robusta", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Death-Wish-Coffee-Strongest-Certified/dp/B006CQ1ZHI/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761493&sr=1-8&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=839ea209ca8e7ea0f9801a3cc1c582d0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006CQ1ZHI&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B006CQ1ZHI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />', "Caffeinated"];
  table[2]=["Folgers", "Classic Roast", "http://amzn.to/2gvUGVH", "Strong", "Pure","Medium", "Central America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","normal",'<a href="https://www.amazon.com/Folgers-Classic-Roast-Ground-Coffee/dp/B010ULFOWC/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761493&sr=1-9&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=d187036c19e2e2cc7e668c6267919c43" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B010ULFOWC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B010ULFOWC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[3]=["San Francisco Bay", "Fog Chaser", "http://amzn.to/2gafaPB", "Strong", "Pure", "Medium","Central and South America", "Arabica", "Keurig K-Cup", "low", '<a href="https://www.amazon.com/San-Francisco-Bay-OneCup-Coffees/dp/B007Y59HVM/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761726&sr=1-1&keywords=san+francisco+bay+k+cups&th=1&linkCode=li3&tag=compa0ae-20&linkId=0110c845ee390638410b5039dee24464" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007Y59HVM&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B007Y59HVM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />', "Caffeinated"];
  table[4]=["Kirkland Signture","Colombian Coffee","http://amzn.to/2gcaOHZ","Deep","Pure","Dark","Colombia","Colombia","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Signature-Colombian-Coffee-Supremo-Roast-Fine/dp/B008P731LK/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479772527&sr=1-6&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=bfb80fe15eda91d30bdb8d3998444b40" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008P731LK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B008P731LK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[5]=["Lavazza","Caffe Espresso","http://amzn.to/2flxF6l","Intense","Pure","Medium","South America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Lavazza-Caffe-Espresso-Medium-8-Ounce/dp/B00HJNTII6/ref=as_li_ss_il?_encoding=UTF8&refRID=70WS3SH85JD74BS4NJE7&th=1&linkCode=li3&tag=compa0ae-20&linkId=f26e9c7afcbefc4387f6400548633155" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HJNTII6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00HJNTII6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[6]=["Illy","Ground Espresso","http://amzn.to/2gfz9xR","balanced", "Pure","Medium","South America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Illy-Ground-Espresso-Medium-Roast/dp/B001E5DYT4/ref=as_li_ss_il?_encoding=UTF8&refRID=70WS3SH85JD74BS4NJE7&th=1&linkCode=li3&tag=compa0ae-20&linkId=2cb91c9888f364bac1bed5f39a491c5b" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001E5DYT4&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B001E5DYT4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[7]=["Peet's Coffee","Major Dickason's Blend","http://amzn.to/2gg5p4g","balanced","Pure","Dark","South America, Africa, Asia","Mixed","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Peets-Coffee-Peetnik-Dickasons-Ground/dp/B00LAY3PBG/ref=as_li_ss_il?_encoding=UTF8&refRID=PTWKGJJSYKEPZA85CRVX&th=1&linkCode=li3&tag=compa0ae-20&linkId=2f27e6c57eba5832a65cc8ab87008468" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00LAY3PBG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00LAY3PBG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[8]=["Death Wish","Valhalla Java","http://amzn.to/2fn12oL","Smoth","Pure","Dark","South America","Robusta","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Valhalla-Coffee-Death-Wish-Certified/dp/B00FL6PCF6/ref=as_li_ss_il?_encoding=UTF8&refRID=PTWKGJJSYKEPZA85CRVX&th=1&linkCode=li3&tag=compa0ae-20&linkId=557df2f2b0bce0dfe0cb781498da7a36" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FL6PCF6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00FL6PCF6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[9]=["Keurig hot","Donut Shop, Regular","http://amzn.to/2fn0wam","Bold","Pure","Medium","South America","Arabica","Keurig K-Cup","low",'<a href="https://www.amazon.com/Original-Donut-Shop-Regular-Medium/dp/B00I08JAYG/ref=as_li_ss_il?_encoding=UTF8&refRID=WT85WSYYWYD7S5VVAJVW&th=1&linkCode=li3&tag=compa0ae-20&linkId=f8fa6de38b212aa5e32c34bacfc68a7a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I08JAYG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I08JAYG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
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
                      '<div class="imgAmazon" style="background-color:'+ colorCard +'">'+ varCard[10] +'</div>'+  /*IMAGE*/
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
                              '<div class="nameProd idbtn"><h6>'+ varCard[1] +'</h6></div>'+ /*NAME*/
                            '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblBrand"><h6><strong>Brand</strong></h6></div>'+
                            '</div>'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="brandProd idbtn" ><h6>'+ varCard[0] +'<h6></div>'+ /*BRAND*/
                            '</div>'+
                          '</div>'+
                          '<div class="row impar">'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="lblPrice"><h6><strong>Price</strong></h6></div>'+
                              '</div>'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<a class="priceProd" href="'+ varCard[2] +'">show price</a>'+ /*PRICE*/
                              '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblTaste"><h6><strong>Taste</strong></h6></div>'+
                            '</div>'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="tasteProd idbtn"><h6>'+ varCard[3] +'</h6></div>'+ /*TASTE*/
                            '</div>'+
                          '</div>'+
                          '<div class="row impar">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblFlavor"><h6><strong>Flavor</strong></h6></div>'+
                            '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="flavorProd idbtn"><h6>'+ varCard[4] +'</h6></div>'+ /*FLAVOR*/
                          '</div>'+
                        '</div>'+
                        '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblRoast"><h6><strong>Roast</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="roastProd idbtn"><h6>'+ varCard[5] +'</h6></div>'+ /*ROAST*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblOrigin"><h6><strong>Origin</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="originProd idbtn"><h6>'+ varCard[6] +'</h6></div>'+ /*ORIGIN*/
                    '</div>'+
                  '</div>'+
                  '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblType"><h6><strong>Type</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="typeProd idbtn"><h6>'+ varCard[7] +'</h6></div>'+ /*TYPE*/
                    '</div>'+
                  '</div>'+

                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblAdicity"><h6><strong>Acidity</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="acidProd idbtn"><h6>'+ varCard[9] +'</h6></div>'+ /*ACIDITY*/
                    '</div>'+
                  '</div>'+
                  '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblCafType"><h6><strong>Caffeine Type</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="cafeProd idbtn"><h6>'+ varCard[11] +'</h6></div>'+ /*CAFFEINE TYPE*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblWork"><h6><strong>Works with</strong></h6></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="workProd idbtn"><h6>'+ varCard[8] +'</h6></div>'+ /*WORKS WITH*/
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
              console.log(countModalItem);

              $(this).parent('.checkDiv').toggleClass('checkDivOn');

              var contCard = $(this).parents('.col-md-4');

              var colorProd = $(contCard).find(".imgAmazon").css("background-color");
              var nameProd = $(contCard).find(".nameProd").text();
              var brandProd = $(contCard).find(".brandProd").text();
              var imgProd = $(contCard).find(".imgAmazon").html();
              var priceProd = $(contCard).find(".priceProd").attr('href');
              var tasteProd = $(contCard).find(".tasteProd").text();
              var flavorProd = $(contCard).find(".flavorProd").text();
              var roastProd = $(contCard).find(".roastProd").text();
              var originProd = $(contCard).find(".originProd").text();
              var typeProd = $(contCard).find(".typeProd").text();
              var workProd = $(contCard).find(".workProd").text();
              var acidProd = $(contCard).find(".acidProd").text();
              var cafeProd = $(contCard).find(".cafeProd").text();

              generateModal(priceProd,colorProd,nameProd,brandProd,imgProd,tasteProd,flavorProd,roastProd,originProd,typeProd,workProd,acidProd,cafeProd);

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

      function generateModal(priceProd,colorProd,nameProd,brandProd,imgProd,tasteProd,flavorProd,roastProd,originProd,typeProd,workProd,acidProd,cafeProd){
            var rowToCompaA;
            var rowToCompaB;
            var rowToCompaC;

            modalCount += 1;


            htmToModal = '<div class="col-md-4 col-sm-6 col-xs-12 rowModal modalmargin" id="modalItem'+ modalCount +'">'+
                           '<div class="demo-card-square mdl-card mdl-shadow--2dp" style="border:5px solid '+ colorProd +'">'+
                             '<div class="card-title">'+
                               '<div class="imgAmazon" style="background-color:'+ colorProd +'">'+ imgProd +'</div>'+  /*IMAGE*/
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
                                       '<div class="nameProd">'+ nameProd +'</div>'+ /*NAME*/
                                     '</div>'+
                                   '</div>'+
                                   '<div class="row par">'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                       '<div class="lblBrand"><strong>Brand</strong></div>'+
                                     '</div>'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                       '<div class="brandProd" >'+ brandProd +'</div>'+ /*BRAND*/
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
                                       '<div class="lblTaste"><strong>Taste</strong></div>'+
                                     '</div>'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                       '<div class="tasteProd idbtn">'+ tasteProd +'</div>'+ /*TASTE*/
                                     '</div>'+
                                   '</div>'+
                                   '<div class="row impar">'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                       '<div class="lblFlavor"><strong>Flavor</strong></div>'+
                                     '</div>'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                       '<div class="flavorProd idbtn">'+ flavorProd +'</div>'+ /*FLAVOR*/
                                     '</div>'+
                                  '</div>'+
                                  '<div class="row par rowModalRoast">'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                        '<div class="lblRoast"><strong>Roast</strong></div>'+
                                     '</div>'+
                                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                        '<div class="roastProd idbtn">'+ roastProd +'</div>'+ /*ROAST*/
                                     '</div>'+
                                 '</div>'+
                                 '<div class="row impar">'+
                                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                      '<div class="lblOrigin"><strong>Origin</strong></div>'+
                                    '</div>'+
                                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                      '<div class="originProd idbtn">'+ originProd +'</div>'+ /*ORIGIN*/
                                    '</div>'+
                                '</div>'+
                                '<div class="row par">'+
                                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                      '<div class="lblType"><strong>Type</strong></div>'+
                                    '</div>'+
                                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                      '<div class="typeProd idbtn">'+ typeProd +'</div>'+ /*TYPE*/
                                    '</div>'+
                                '</div>'+

                                '<div class="row impar modalCompa">'+
                                  '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                    '<div class="lblAdicity"><strong>Acidity</strong></div>'+
                                  '</div>'+
                                  '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                    '<div class="acidProd idbtn">'+ acidProd +'</div>'+ /*ACIDITY*/
                                  '</div>'+
                                '</div>'+
                                '<div class="row par">'+
                                  '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                    '<div class="lblCafType"><strong>Caffeine Type</strong></div>'+
                                  '</div>'+
                                '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                  '<div class="cafeProd idbtn">'+ cafeProd +'</div>'+ /*CAFFEINE TYPE*/
                                '</div>'+
                              '</div>'+
                              '<div class="row impar">'+
                                '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                  '<div class="lblWork"><strong>Works with</strong></div>'+
                                '</div>'+
                                '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                  '<div class="workProd idbtn">'+ workProd +'</div>'+ /*WORKS WITH*/
                                '</div>'+
                              '</div>'+
                           '</div>'+
                         '</div>'+
                       '</div>';


       $('#containerModal').append(htmToModal);


       /* si hay mas de uno se inicia la comparacion*/
       if (modalCount==2) {

         /*acidity*/
         rowToCompaA = $("#modalItem1").find(".acidProd").text();
         rowToCompaB = $("#modalItem2").find(".acidProd").text();

         if (rowToCompaA=="low") {
           $("#modalItem1").find(".modalCompa").addClass("rowWinner");
         }else {
           $("#modalItem1").find(".modalCompa").addClass("rowLoser");
         }
         if (rowToCompaB=="low") {
           $("#modalItem2").find(".modalCompa").addClass("rowWinner");
         }else {
           $("#modalItem2").find(".modalCompa").addClass("rowLoser");
         }

         /*roast*/
         rowToCompaA = $("#modalItem1").find(".roastProd").text();
         rowToCompaB = $("#modalItem2").find(".roastProd").text();

         if (rowToCompaA=="Dark") {
           $("#modalItem1").find(".rowModalRoast").addClass("rowDarkRoast");
         }else {
           $("#modalItem1").find(".rowModalRoast").addClass("rowMediumRoast");
         }
         if (rowToCompaB=="Dark") {
           $("#modalItem2").find(".rowModalRoast").addClass("rowDarkRoast");
         }else {
           $("#modalItem2").find(".rowModalRoast").addClass("rowMediumRoast");
         }

       }else if (modalCount==3) {
         rowToCompaA = $("#modalItem1").find(".acidProd").text();
         rowToCompaB = $("#modalItem2").find(".acidProd").text();
         rowToCompaC = $("#modalItem3").find(".acidProd").text();

         if (rowToCompaA=="low") {
           $("#modalItem1").find(".modalCompa").addClass("rowWinner");
         }else {
           $("#modalItem1").find(".modalCompa").addClass("rowLoser");
         }
         if (rowToCompaB=="low") {
           $("#modalItem2").find(".modalCompa").addClass("rowWinner");
         }else {
           $("#modalItem2").find(".modalCompa").addClass("rowLoser");
         }
         if (rowToCompaC=="low") {
           $("#modalItem3").find(".modalCompa").addClass("rowWinner");
         }else {
           $("#modalItem3").find(".modalCompa").addClass("rowLoser");
         }
       }

       /*roast*/
       rowToCompaA = $("#modalItem1").find(".roastProd").text();
       rowToCompaB = $("#modalItem2").find(".roastProd").text();
       rowToCompaC = $("#modalItem3").find(".roastProd").text();

       if (rowToCompaA=="Dark") {
         $("#modalItem1").find(".rowModalRoast").addClass("rowDarkRoast");
       }else {
         $("#modalItem1").find(".rowModalRoast").addClass("rowMediumRoast");
       }
       if (rowToCompaB=="Dark") {
         $("#modalItem2").find(".rowModalRoast").addClass("rowDarkRoast");
       }else {
         $("#modalItem2").find(".rowModalRoast").addClass("rowMediumRoast");
       }
       if (rowToCompaC=="Dark") {
         $("#modalItem3").find(".rowModalRoast").addClass("rowDarkRoast");
       }else {
         $("#modalItem3").find(".rowModalRoast").addClass("rowMediumRoast");
       }

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
