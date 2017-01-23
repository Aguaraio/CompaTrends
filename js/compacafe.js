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
  table[0]=["Koffee Kult" , "Dark Roast" , "http://amzn.to/2gD4lL4", "Cinnamon", "Dark", "Colombia", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Koffee-Kult-Highest-Delicious-Organically/dp/B00PV4FG3Q/ref=as_li_ss_il?_encoding=UTF8&refRID=G8D0HHZ19D7Z9HWZ18FV&th=1&linkCode=li3&tag=compa0ae-20&linkId=243b242fda97bfcf0a4dcc62edda4534" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00PV4FG3Q&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00PV4FG3Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[1]=["Death Wish", "Death Wish", "http://amzn.to/2gfetGa", "cherry and chocolate", "Dark", "Vietnam", "Robusta", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Death-Wish-Coffee-Strongest-Certified/dp/B006CQ1ZHI/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761493&sr=1-8&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=839ea209ca8e7ea0f9801a3cc1c582d0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006CQ1ZHI&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B006CQ1ZHI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />', "Caffeinated"];
  table[2]=["Folgers", "Classic Roast", "http://amzn.to/2gvUGVH", "Pure","Medium", "Central America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","normal",'<a href="https://www.amazon.com/Folgers-Classic-Roast-Ground-Coffee/dp/B010ULFOWC/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761493&sr=1-9&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=d187036c19e2e2cc7e668c6267919c43" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B010ULFOWC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B010ULFOWC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[3]=["San Francisco Bay", "Fog Chaser", "http://amzn.to/2gafaPB", "Pure", "Medium","Central and South America", "Arabica", "Keurig K-Cup", "low", '<a href="https://www.amazon.com/San-Francisco-Bay-OneCup-Coffees/dp/B007Y59HVM/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761726&sr=1-1&keywords=san+francisco+bay+k+cups&th=1&linkCode=li3&tag=compa0ae-20&linkId=0110c845ee390638410b5039dee24464" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007Y59HVM&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B007Y59HVM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />', "Caffeinated"];
  table[4]=["Kirkland Signture","Colombian Coffee","http://amzn.to/2gcaOHZ","Pure","Dark","Colombia","Colombia","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Signature-Colombian-Coffee-Supremo-Roast-Fine/dp/B008P731LK/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479772527&sr=1-6&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=bfb80fe15eda91d30bdb8d3998444b40" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008P731LK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B008P731LK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[5]=["Lavazza","Caffe Espresso","http://amzn.to/2flxF6l","Pure","Medium","South America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Lavazza-Caffe-Espresso-Medium-8-Ounce/dp/B00HJNTII6/ref=as_li_ss_il?_encoding=UTF8&refRID=70WS3SH85JD74BS4NJE7&th=1&linkCode=li3&tag=compa0ae-20&linkId=f26e9c7afcbefc4387f6400548633155" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HJNTII6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00HJNTII6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[6]=["Illy","Ground Espresso","http://amzn.to/2gfz9xR", "Pure","Medium","South America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Illy-Ground-Espresso-Medium-Roast/dp/B001E5DYT4/ref=as_li_ss_il?_encoding=UTF8&refRID=70WS3SH85JD74BS4NJE7&th=1&linkCode=li3&tag=compa0ae-20&linkId=2cb91c9888f364bac1bed5f39a491c5b" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001E5DYT4&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B001E5DYT4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[7]=["Peet's Coffee","Major Dickason's Blend","http://amzn.to/2gg5p4g","Pure","Dark","South America, Africa, Asia","Mixed","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Peets-Coffee-Peetnik-Dickasons-Ground/dp/B00LAY3PBG/ref=as_li_ss_il?_encoding=UTF8&refRID=PTWKGJJSYKEPZA85CRVX&th=1&linkCode=li3&tag=compa0ae-20&linkId=2f27e6c57eba5832a65cc8ab87008468" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00LAY3PBG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00LAY3PBG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[8]=["Death Wish","Valhalla Java","http://amzn.to/2fn12oL","Pure","Dark","South America","Robusta","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Valhalla-Coffee-Death-Wish-Certified/dp/B00FL6PCF6/ref=as_li_ss_il?_encoding=UTF8&refRID=PTWKGJJSYKEPZA85CRVX&th=1&linkCode=li3&tag=compa0ae-20&linkId=557df2f2b0bce0dfe0cb781498da7a36" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FL6PCF6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00FL6PCF6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[9]=["Keurig hot","Donut Shop, Regular","http://amzn.to/2fn0wam","Pure","Medium","South America","Arabica","Keurig K-Cup","low",'<a href="https://www.amazon.com/Original-Donut-Shop-Regular-Medium/dp/B00I08JAYG/ref=as_li_ss_il?_encoding=UTF8&refRID=WT85WSYYWYD7S5VVAJVW&th=1&linkCode=li3&tag=compa0ae-20&linkId=f8fa6de38b212aa5e32c34bacfc68a7a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I08JAYG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I08JAYG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[10]=["Tim Hortons" , "Ground Coffee" , "http://amzn.to/2hLOMMG", "Pure", "Medium", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Tim-Hortons-Arabica-Medium-Coffee/dp/B005Y1L0BS/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=794956bed00ffafc7c8a47aa9abe5467" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005Y1L0BS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B005Y1L0BS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[11]=["Crema e Gusto" ,"Lavazza", "http://amzn.to/2gGAOQq", "Chocolaty", "Dark", "South America, Africa", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Lavazza-Crema-Gusto-Ground-8-8-Ounce/dp/B001E5E0D8/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=ec4b6eb484013519a2a8a53ca957857d" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001E5E0D8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B001E5E0D8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[12]=["Kicking Horse" , "Ground Coffee" , "http://amzn.to/2hLKcOv", "Pure", "Dark", "Indonesia,Central America", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Kicking-Horse-Coffee-Ground-Ounce/dp/B01AV6I6K8/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=b5a87d34af538c143ac5881f462b9e6a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01AV6I6K8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01AV6I6K8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[13]=["Cafe du Monde" , "Coffee and Chicory" , "http://amzn.to/2hLLOrL", "Chicory", "Dark", "South America, Africa", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Cafe-Du-Monde-15-Pack/dp/B000FUYCJ0/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=6af464b5e22f44a82ce74e63b8d8b7d2" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000FUYCJ0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000FUYCJ0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[14]=["Bulletproof" , "Ground Coffee" , "http://amzn.to/2gJwbU6", "Pure", "Dark", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Bulletproof-Ground-Coffee-12-oz/dp/B00T2W0I0Y/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=0d7e86b10597afe553ea59de4dd2d125" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00T2W0I0Y&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00T2W0I0Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[15]=["Tiny Footprint" , "Organic Cold Press Elixir" , "  http://amzn.to/2hjZywY", "Fruity", "Dark", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Tiny-Footprint-Coffee-Organic-Elixir/dp/B00BN4WBOK/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=fdd667c0e349e286867e5a86ecfebd15" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00BN4WBOK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00BN4WBOK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[16]=["Kimera Koffee" , "Nootropic Infused Ground Coffee" , "http://amzn.to/2hrtxDC", "Nutty", "Dark", "South America", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Kimera-Koffee-Nootropic-Infused-Altitude/dp/B0120S5RZC/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=29c889d3f7c0be50b989d8218e58b934" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0120S5RZC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B0120S5RZC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[17]=["Kurukahveci Mehmet Efendi" , "Turkish Coffee" , "http://amzn.to/2gz09a5", "Pure", "Medium", "Asia", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "Normal", '<a href="https://www.amazon.com/Kurukahveci-Mehmet-Efendi-Turkish-Coffee/dp/B000CMFKNS/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=9d5146d2008c288e22cc72727f5916eb" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000CMFKNS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000CMFKNS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[18]=["Green Mountain" , "Breakfast Blend" , "http://amzn.to/2hLQzBv", "Pure", "Light", "Central America", "Arabica", "Keurig K-Cup", "Low", '<a href="https://www.amazon.com/Green-Mountain-Coffee-Breakfast-Keurig/dp/B00I08JK7S/ref=as_li_ss_il?_encoding=UTF8&refRID=GEXRNW0YHM6T9KQRYRKT&th=1&linkCode=li3&tag=compa0ae-20&linkId=4982ef5327d237c50fe40ff2df4fc6ce" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I08JK7S&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I08JK7S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[19]=["Starbucks" , "Sumatra" , "http://amzn.to/2hLKNzQ", "Pure", "Dark", "Asia", "Mixed", "Keurig K-Cup", "Low", '<a href="https://www.amazon.com/Starbucks-Sumatra-K-Cup-Keurig-Brewers/dp/B00U3ODVUE/ref=as_li_ss_il?_encoding=UTF8&refRID=7NEAZCAP2SDCAMYWA4RS&th=1&linkCode=li3&tag=compa0ae-20&linkId=286f5b852d14dfaad6fe34e66cdb3e28" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00U3ODVUE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00U3ODVUE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[20]=["Eight O'Clock" , "The Original" , "http://amzn.to/2hLQMop", "Fruity", "Medium", "South America", "Arabica", "Keurig K-Cup", "Normal", '<a href="https://www.amazon.com/Eight-OClock-Coffee-Original-Keurig/dp/B00I08JKI2/ref=as_li_ss_il?_encoding=UTF8&refRID=7NEAZCAP2SDCAMYWA4RS&th=1&linkCode=li3&tag=compa0ae-20&linkId=6ec47293da24993796b76a984fb963b5" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I08JKI2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I08JKI2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[21]=["Dunkin' Donuts" , "Original Blend" , "http://amzn.to/2hrmqem", "Pure", "Medium", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "Low", '<a href="https://www.amazon.com/Dunkin-Donuts-Original-Medium-Coffee/dp/B00JI498GG/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=5304565939a91480c0e0709c89a2f716" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00JI498GG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00JI498GG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  table[22]=["Dunkin' Donuts" , "Original Blend" , "http://amzn.to/2hLMWLR", "Pure", "Medium", "South America", "Arabica", "Keurig K-Cup", "Low", '<a href="https://www.amazon.com/Dunkin-Donuts-Coffee-K-cup-Original/dp/B00XA1075Y/ref=as_li_ss_il?_encoding=UTF8&refRID=GEXRNW0YHM6T9KQRYRKT&th=1&linkCode=li3&tag=compa0ae-20&linkId=b1f0ee46822faf40fc76e8caaffc9713" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00XA1075Y&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00XA1075Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];

  //check if calling index is home-page
  if ($('body.home-page').length > 0) {
    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        varCard[j]= table[i][j];
      }
       htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal" id="tile'+ i +'">'+

                    '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+

                      '<div class="card-title">'+
                          '<div class="imgAmazon">'+ varCard[9] +'</div>'+  /*IMAGE*/
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
                                '<div class="lblBrand"><h6>Flavor</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="flavorProd idbtn"><h6>'+ varCard[3] +'</h6></div>'+ /*flavor*/
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
                      '</div></a>'+ //hoverDiv
                      '<div class="hoverthisDiv">'+
                        'Hover this card'+
                      '</div>'+
                  '</div>'+
                '</div>';

           $('#gridContainer').append(htmlStr);

    }
  }
  if ($('body.coffee-page').length > 0) {

    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        varCard[j]= table[i][j];
      }

        FilterArray[i] = [varCard[3], varCard[6]];
       htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal" id="tile'+ i +'">'+

                    '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+

                      '<div class="card-title">'+
                          '<div class="imgAmazon">'+ varCard[9] +'</div>'+  /*IMAGE*/

                        '</div>'+
                        '<div class="hoverDiv">'+
                          '<div class="specDiv">'+

                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblBrand"><h6>Flavor</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="flavorProd idbtn"><h6>'+ varCard[3] +'</h6></div>'+ /*flavor*/
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
