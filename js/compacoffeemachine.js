$(function() {
  //variables globales
  var table=[];
  var FilterArray = [];
  var htmToModal=[];
  var modalCount = 0;
  var varCard= [];
  var htmlStr='';
  var countModalItem = 0;
  var contiModalItem = 0;

  //fill datatable
table[0]=["DeLonghi","EC702",'http://amzn.to/2j7o8lZ',"15 bars","43 fl. oz(1.3 liters)",'<a href="https://www.amazon.com/DeLonghi-EC702-15-Bar-Pump-Espresso-Stainless/dp/B001CNG7RY/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=YZ92Q8VYB7YYZS6BYFK2&linkCode=li3&tag=compa0ae-20&linkId=80a3538a9533d07780988fe5f66d5960" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001CNG7RY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B001CNG7RY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","No","Yes"];
table[1]=["Breville","Breville",'http://amzn.to/2j7kusr',"15 bar","61 fl. oz. (1.8 L)",'<a href="https://www.amazon.com/Breville-BES840XL-Infuser-Espresso-Machine/dp/B0089SSOR6/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=YZ92Q8VYB7YYZS6BYFK2&linkCode=li3&tag=compa0ae-20&linkId=eabe2454deede6f6656049893c8e1d03" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0089SSOR6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B0089SSOR6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
table[2]=["De'Longhi","EN750MB",'http://amzn.to/2jv2btz',"19 bar","44 oz (1.3L)",'<a href="https://www.amazon.com/DeLonghi-America-EN750MB-Nespresso-Lattissima/dp/B00HQXJY7E/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=YZ92Q8VYB7YYZS6BYFK2&linkCode=li3&tag=compa0ae-20&linkId=43ba871bf332140dbf36eb448ac9c670" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HQXJY7E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00HQXJY7E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","1","Yes","No"];
table[3]=["Hamilton Beach","40792",'http://amzn.to/2ijeICu',"15 bar","N/A",'<a href="https://www.amazon.com/Hamilton-Beach-40792-Espresso-Cappuccino/dp/B01AT75AX0/ref=as_li_ss_il?ie=UTF8&qid=1484141061&sr=8-1&keywords=40792&linkCode=li3&tag=compa0ae-20&linkId=c4208da72d4457573db67cbf8015b6b9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01AT75AX0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01AT75AX0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Black","1","Yes","Yes"];
table[4]=["Breville","BES870XL",'http://amzn.to/2j7k9WF',"15 bar","67 fl.oz (2L)",'<a href="https://www.amazon.com/Breville-BES870XL-Barista-Express-Espresso/dp/B00CH9QWOU/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=8c319f3a2e1e4933b8516fce90a8e4ae" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CH9QWOU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00CH9QWOU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
table[5]=["Nespresso","Inissia",'http://amzn.to/2juTxvf',"19 Bar","23.8 oz",'<a href="https://www.amazon.com/Nespresso-Inissia-Espresso-Aeroccino-Frother/dp/B00L7RU8C0/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=333f6a24063215434febe0a730b61007" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00L7RU8C0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00L7RU8C0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Black","1","Yes","No"];
table[6]=["Mr. Coffee","ECMP1000",'http://amzn.to/2j7aWh2',"15 bar","N/A",'<a href="https://www.amazon.com/Mr-Coffee-ECMP1000-Espresso-Cappuccino/dp/B007K9OIMU/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=0bb6beac362bd3fccffad3b28221343b" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007K9OIMU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B007K9OIMU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","1","Yes","No"];
table[7]=["De'Longhi","EC155",'http://amzn.to/2ijcGTe',"15 bar","35 fl. oz(1.0 L)",'<a href="https://www.amazon.com/DeLonghi-EC155-Espresso-Cappuccino-Maker/dp/B000F49XXG/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=a2d23f82b0c0675adddb9cbc066c3092" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000F49XXG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000F49XXG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless,black","2","Yes","Yes"];
table[8]=["Breville","BES920XL",'http://amzn.to/2j8swB9',"Variable","84 oz. (2.5L)",'<a href="https://www.amazon.com/Breville-BES920XL-Boiler-Espresso-Machine/dp/B00I6JGGP0/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=76b641fd6b6c386393e12ac174cb3c54" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I6JGGP0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I6JGGP0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
table[9]=["Gaggia","Brera",'http://amzn.to/2idI5rE',"15 bar","40 fl. oz. (1.2L)",'<a href="https://www.amazon.com/Gaggia-Brera-Superautomatic-Espresso-Machine/dp/B003XV3U82/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=41d89860f0b0db34d047f23b80ea9613" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B003XV3U82&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B003XV3U82" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless, Black","1","Yes","Yes"];
table[10]=["Espressione","1324",'http://amzn.to/2jEzwGt',"15 bar","37 fl. oz(1.1L)",'<a href="https://www.amazon.com/Espressione-1324-Minuetto-Professional-Cappuccino/dp/B01H1QV108/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=89551d4199bc5ad4f8896299388f7007" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H1QV108&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01H1QV108" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Silver","2","Yes","Yes"];
table[11]=["Nespresso","D70-US-SI-NE",'http://amzn.to/2idI5HZ',"19 bar","27 fl. oz (0.7L)",'<a href="https://www.amazon.com/Nespresso-D70-US-SI-NE-Prodigio-Espresso-Silver/dp/B01C7QR494/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=96d78c10fbbd2a5fd8bd7e351c96bb6c" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01C7QR494&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01C7QR494" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Silver","2","Yes","Yes"];
table[12]=["Jura","Ena Micro 1",'http://amzn.to/2jw9hxT',"15 bar","38 fl. oz.(1.1 L)",'<a href="https://www.amazon.com/JURA-13626-Jura-Ena-Micro/dp/B008RZFQKO/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=84441a308c71d1d42434dedb6f75344f" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008RZFQKO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B008RZFQKO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Black","1","Yes","No"];
table[13]=["Lello","1375",'http://amzn.to/2jwmoze',"15 bar","17 fl. oz (0.5L)",'<a href="https://www.amazon.com/Lello-1375-Ariete-Prestige-Coffee/dp/B000E3ZF76/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=CHPFDN12VJ76KGJ61DKD&linkCode=li3&tag=compa0ae-20&linkId=3b69154bafd7089874591152be4461ab" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000E3ZF76&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000E3ZF76" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Silver","2","Yes","Yes"];
table[14]=["Saeco","Intelia Deluxe HD8759/47",'http://amzn.to/2j8BSwA',"15 bar","50 fl oz. (1.5L)",'<a href="https://www.amazon.com/Saeco-Intelia-Superautomatic-Espresso-Machine/dp/B01NA77GVE/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=NWF47VGN8NGW9GY8HTM5&linkCode=li3&tag=compa0ae-20&linkId=3366a15b992bdadfc2f73f19f29fb7e9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01NA77GVE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01NA77GVE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
table[15]=["Jura","J95",'http://amzn.to/2j8y7aL',"15 bar","71 fl. oz.(2.1 L)",'<a href="https://www.amazon.com/Jura-Automatic-Coffee-Machine-Carbon/dp/B01104IRPO/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=NWF47VGN8NGW9GY8HTM5&linkCode=li3&tag=compa0ae-20&linkId=28b972053b93b2169dedf6bab0658c05" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01104IRPO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01104IRPO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Carbon","2","Yes","No"];
table[16]=["Jura","Z6",'http://amzn.to/2idMY45',"15 bar","91 fl. oz. (2,4L)",'<a href="https://www.amazon.com/Jura-Z6-Aluminum-Espresso-Maker/dp/B00VF9BCGQ/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=NWF47VGN8NGW9GY8HTM5&linkCode=li3&tag=compa0ae-20&linkId=c37fdda65b3c65bda1e8742c6d644cef" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00VF9BCGQ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00VF9BCGQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","1","Yes","No"];

  //check if calling index is home-page
  if ($('body.home-page').length > 0) {
    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        varCard[j]= table[i][j];
      }
       htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal" id="tile'+ i +'">'+

                    '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+

                      '<div class="card-title">'+
                          '<div class="imgAmazon">'+ varCard[5] +'</div>'+  /*IMAGE*/
                      '</div>'+
                      '<a href="'+ varCard[2] +'" target="_blank" ><div class="hoverDiv">'+
                          '<div class="specDiv">'+
                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblBrand"><h6>Name</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="nameProd idbtn"><h6>'+ varCard[1] +'</h6></div>'+ /*name*/
                              '</div>'+
                            '</div>'+
                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblBrand"><h6>Water Capacity</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="pressureProd idbtn"><h6>'+ varCard[4] +'</h6></div>'+ /*Water Capacity*/
                              '</div>'+
                            '</div>'+
                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblTaste"><h6>Material Type</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="typeProd idbtn"><h6>'+ varCard[6] +'</h6></div>'+ /*Material Type*/
                              '</div>'+
                            '</div>'+
                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblPrice"><h6>How many cups</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="originProd idbtn"><h6>'+ varCard[7] +'</h6></div>'+ /*how many cups*/
                              '</div>'+
                            '</div>'+
                          '</div>'+ //specDiv
                      '</div></a>'+ //hoverDiv
                      '<div class="hoverthisDiv">'+
                        'Hover this card'+
                      '</div>'+
                  '</div>'+
                '</div>';

           $('#gridContainer').append(htmlStr);

    }
  }
  if ($('body.coffee-machines-page').length > 0) {

    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        varCard[j]= table[i][j];
      }

        FilterArray[i] = [varCard[3], varCard[6]];
       htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal" id="tile'+ i +'">'+

                    '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+

                      '<div class="card-title">'+
                          '<div class="imgAmazon">'+ varCard[5] +'</div>'+  /*IMAGE*/

                        '</div>'+
                        '<div class="hoverDiv">'+
                          '<div class="specDiv">'+

                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblBrand"><h6>Pressure</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="pressureProd idbtn"><h6>'+ varCard[3] +'</h6></div>'+ /*pressure*/
                              '</div>'+
                            '</div>'+

                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblTaste"><h6>Type</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="typeProd idbtn"><h6>'+ varCard[6] +'</h6></div>'+ /*type*/
                              '</div>'+
                            '</div>'+

                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblPrice"><h6>Origin</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="originProd idbtn"><h6>'+ varCard[5] +'</h6></div>'+ /*origin*/
                              '</div>'+
                            '</div>'+

                          '</div>'+ //specDiv

                        '</div>'+ //hoverDiv
                        '<div class="allSpecs">'+
                        '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblName"><strong>Name</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="nameProd idbtn">'+ varCard[1] +'</div>'+ /*NAME*/
                           '</div>'+
                         '</div>'+
                         '<div class="row impar">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblBrand"><strong>Brand</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="brandProd idbtn" >'+ varCard[0] +'</div>'+ /*BRAND*/
                           '</div>'+
                         '</div>'+
                         '<div class="row par">'+
                             '<div class="col-md-6 col-sm-6 col-xs-6">'+
                               '<div class="lblPrice"><strong>Price</strong></div>'+
                             '</div>'+
                             '<div class="col-md-6 col-sm-6 col-xs-6">'+
                               '<a class="priceProd" href="'+ varCard[2] +'">show price</a>'+ /*PRICE*/
                             '</div>'+
                         '</div>'+
                         '<div class="row impar">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblFlavor"><strong>Flavor</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="flavorProd idbtn">'+ varCard[3] +'</div>'+ /*FLAVOR*/
                           '</div>'+
                        '</div>'+
                        '<div class="row par rowModalRoast">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblRoast"><strong>Roast</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="roastProd idbtn">'+ varCard[4] +'</div>'+ /*ROAST*/
                           '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblOrigin"><strong>Origin</strong></div>'+
                          '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="originProd idbtn">'+ varCard[5] +'</div>'+ /*ORIGIN*/
                          '</div>'+
                      '</div>'+
                      '<div class="row par">'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblType"><strong>Type</strong></div>'+
                          '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="typeProd idbtn">'+ varCard[6] +'</div>'+ /*TYPE*/
                          '</div>'+
                      '</div>'+

                      '<div class="row impar modalCompa">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblAdicity"><strong>Acidity</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="acidProd idbtn">'+ varCard[8] +'</div>'+ /*ACIDITY*/
                        '</div>'+
                      '</div>'+
                      '<div class="row par">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblCafType"><strong>Caffeine Type</strong></div>'+
                        '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="cafeProd idbtn">'+ varCard[10] +'</div>'+ /*CAFFEINE TYPE*/
                      '</div>'+
                    '</div>'+
                    '<div class="row impar">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblWork"><strong>Works with</strong></div>'+
                      '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="workProd idbtn">'+ varCard[7] +'</div>'+ /*WORKS WITH*/
                      '</div>'+
                    '</div>'+
                        '</div>'+ //ALL SPECS

                  '</div>'+
                  '<div class="row btnDiv">'+
                    '<a class="col-md-6 col-sm-6 col-xs-6"><div id="btnCompare'+ i +'" class="btn button-1 imgCompare">COMPARE</div></a>'+
                    '<a class="col-md-6 col-sm-6 col-xs-6" href="'+ varCard[2] +'" target="_blank"><div id="btnAmazon'+ i +'" class="btn button-2 imgBuyNow">BUY NOW!</div></a>'
                  '</div>'+
                '</div>';

           $('#gridContainer').append(htmlStr);

    }
  }

   ////////////
  //add to iModal
  function handleiModal(container,str){
    //obtenemos el id del tile seleccionado
    var idTile = container.substring(4);

    if ($(str).hasClass('botonToggle')) {
      contiModalItem += 1;
      //se agrega tile al modal
      addtoiModal(idTile);
    }else{
      contiModalItem -= 1;
      //se elimina el tile seleccionado
      removefromiModal(idTile);
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
  //////////////
  //add to compa
  function addtoCompareModal(){
    //get items list from iModal
    var arr = $("#listItems > div").map(function() {
      return this.id
    });
    generateCompareModal(arr.get());

  };
   /////////////////
  //eliminate Modal
  function removefromiModal(idTile) {
    var tile = $('#listItems').find('#modalItem'+ idTile);
    $(tile).remove();
  }
  function eliminateModal(idTile){
    var tile = $('#containerModal').find('#modalItem'+ idTile);
    $(tile).remove();
  }
  //eliminate modal
 ///////////////////

    //////////////////
   //generate modal
  function addtoiModal(idTile) {
    var generatedDiv;
    generatedDiv = '<div class="imodalItem" id="modalItem'+ idTile +'">'+
                    '<div class="demo-card-square mdl-cardiModal mdl-shadow--2dp">'+
                        '<div class="iModalImg">'+ table[idTile][9] +'</div>'+  /*IMAGE*/
                        '<div class="btnClose">'+
                          '<span class="glyphicon glyphicon-remove"></span>'+
                        '</div>'+

                    '</div>'+
                  '</div>';
    $('#listItems').append(generatedDiv);

  }

  function generateCompareModal(idTiles){
    //delete all the cards from containerModal
    $('#containerModal').children().remove();
    var generatedDiv;
    var substridTile = "";
    for (var i = 0; i < idTiles.length; i++) {
      substridTile = idTiles[i].substring(9);
      generatedDiv = '<div class="col-md-4 col-sm-6 col-xs-12 modalmargin" id="modalItem'+ substridTile +'">'+
                     '<div class="demo-card-square mdl-card modal-card mdl-shadow--2dp modal-dialog" style="border:5px solid #000">'+
                       '<div class="card-title">'+
                         '<div class="imgAmazonModal">'+ table[substridTile][9] +'</div>'+  /*IMAGE*/
                       '</div>'+
                         '<div class="mdl-card__supporting-text">'+
                            '<div class="row par">'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                 '<div class="lblName"><strong>Name</strong></div>'+
                               '</div>'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                 '<div class="nameProd">'+ table[substridTile][1] +'</div>'+ /*NAME*/
                               '</div>'+
                             '</div>'+
                             '<div class="row impar">'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                 '<div class="lblBrand"><strong>Brand</strong></div>'+
                               '</div>'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                 '<div class="brandProd" >'+ table[substridTile][0] +'</div>'+ /*BRAND*/
                               '</div>'+
                             '</div>'+
                             '<div class="row par">'+
                                 '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                   '<div class="lblPrice"><strong>Price</strong></div>'+
                                 '</div>'+
                                 '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                   '<a class="priceProd" href="'+ table[substridTile][2] +'">show price</a>'+ /*PRICE*/
                                 '</div>'+
                             '</div>'+
                             '<div class="row impar">'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                 '<div class="lblFlavor"><strong>Flavor</strong></div>'+
                               '</div>'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                 '<div class="flavorProd idbtn">'+ table[substridTile][3] +'</div>'+ /*FLAVOR*/
                               '</div>'+
                            '</div>'+
                            '<div class="row par rowModalRoast">'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                  '<div class="lblRoast"><strong>Roast</strong></div>'+
                               '</div>'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                  '<div class="roastProd idbtn">'+ table[substridTile][4] +'</div>'+ /*ROAST*/
                               '</div>'+
                           '</div>'+
                           '<div class="row impar">'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="lblOrigin"><strong>Origin</strong></div>'+
                              '</div>'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="originProd idbtn">'+ table[substridTile][5] +'</div>'+ /*ORIGIN*/
                              '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="lblType"><strong>Type</strong></div>'+
                              '</div>'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="typeProd idbtn">'+ table[substridTile][6] +'</div>'+ /*TYPE*/
                              '</div>'+
                          '</div>'+

                          '<div class="row impar modalCompa">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblAdicity"><strong>Acidity</strong></div>'+
                            '</div>'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="acidProd idbtn">'+ table[substridTile][8] +'</div>'+ /*ACIDITY*/
                            '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblCafType"><strong>Caffeine Type</strong></div>'+
                            '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="cafeProd idbtn">'+ table[substridTile][10] +'</div>'+ /*CAFFEINE TYPE*/
                          '</div>'+
                        '</div>'+
                        '<div class="row impar">'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblWork"><strong>Works with</strong></div>'+
                          '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="workProd idbtn">'+ table[substridTile][7] +'</div>'+ /*WORKS WITH*/
                          '</div>'+
                        '</div>'+
                     '</div>'+ //mdl-card__supporting-text
                   '</div>'+ //modal-card
                 '</div>'; //modalmargin
        $('#containerModal').append(generatedDiv);

      }
  };

  /////////////////
//Search section
 $('#searchInput').keypress((e)=>{
   if ($('body.coffee-page').length > 0)  {
     var keycode = (e.keyCode ? e.keyCode : e.which);
     if(keycode== 13){
       var str = $("#searchInput").val();
       var divFound = $(".rowModal").find(".idbtn:icontains("+ str +")");
       var divNotFound = $(".rowModal").find(".idbtn:not(:icontains("+ str +"))");
       $(divNotFound).parents(".rowModal").hide(300);
       $(divFound).parents(".rowModal").show(300);
     }
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

  ///////////////
  //filter section

      $('.srch').on('change', ()=>{
        $('.rowModal').hide(300);
        var txtFlavor = $('#srchFlavor :selected').val();
        //var txtOrigin = $('#srchOrigin :selected').val();
        var txtType =  $('#srchType :selected').val();
        var arraySearch =[];
        if (txtFlavor==txtType) {
            $('.rowModal').show(300);
        }else if (txtFlavor=="All") {
          for (var i = 0; i < FilterArray.length; i++) {
            arraySearch = [FilterArray[i][0],txtType];
            if (JSON.stringify(FilterArray[i]) == JSON.stringify(arraySearch)) {
              $('#tile'+ i +'').show(300);
            }
          }
        }else if (txtType=="All") {
          for (var i = 0; i < FilterArray.length; i++) {
            arraySearch = [txtFlavor,FilterArray[i][1]];
            if (JSON.stringify(FilterArray[i]) == JSON.stringify(arraySearch)) {
              $('#tile'+ i +'').show(300);
            }
          }
        }else {
          arraySearch = [txtFlavor,txtType];
          for (var i = 0; i < FilterArray.length; i++) {
            if (JSON.stringify(FilterArray[i]) == JSON.stringify(arraySearch)) {
              $('#tile'+ i +'').show(300);
            }
          }
        }

      });
  //filter section
 ///////////////

/////////
//handle on click btn compare, btn Buy
  //compare
  $('.imgCompare').bind('mousedown', (event)=>{
    var btn ='#'+ $(event.target.id)['selector'];
    $(btn).removeClass('button-1');
    $(btn).addClass('pressedOut-1');

  }).on('mouseup', (event)=>{
    var container = $(event.target).closest('.rowModal').attr('id');
    var btn ='#'+ $(event.target.id)['selector'];
    $(btn).removeClass('pressedOut-1');
    $(btn).addClass('button-1');
    $(btn).toggleClass('botonToggle');
    if ($(btn).hasClass('botonToggle')) {
      $(btn).text("DESELECT");
    }else {
      $(btn).text("COMPARE");
    }
    handleiModal(container,btn);
  });

  //AMAZON
  $('.btnToAmazon').bind('mousedown', (event)=>{
    var btn ='#'+ $(event.target.id)['selector'];
    $(btn).removeClass('button-2');
    $(btn).addClass('pressedOut-2');
  }).on('mouseup', (event)=>{
    var btn ='#'+ $(event.target.id)['selector'];
    $(btn).removeClass('pressedOut-2');
    $(btn).addClass('button-2');
  });
 //handle on click btn compare, btn Buy
/////////

 ///////////////
//handle glyphicon-remove
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
 //handle glyphicon-remove
///////////////

////////////
//handle imgCompareHere
  $('#imgCompareHere').click(()=>{
    addtoCompareModal();
  });
//handle compare btn
////////////

//slide show
var view = $("#listItems");
var move = "100px";
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


});
