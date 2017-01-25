$(function(){
var htmlStr='';
var coffee=[];
var instantCamera=[];
var headphone=[];
var coffeeMachine=[];


//Coffee

  coffee[0]=["Koffee Kult" , "Dark Roast" , "http://amzn.to/2gD4lL4", "Cinnamon", "Dark", "Colombia", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Koffee-Kult-Highest-Delicious-Organically/dp/B00PV4FG3Q/ref=as_li_ss_il?_encoding=UTF8&refRID=G8D0HHZ19D7Z9HWZ18FV&th=1&linkCode=li3&tag=compa0ae-20&linkId=243b242fda97bfcf0a4dcc62edda4534" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00PV4FG3Q&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00PV4FG3Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[1]=["Death Wish", "Death Wish", "http://amzn.to/2gfetGa", "cherry and chocolate", "Dark", "Vietnam", "Robusta", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Death-Wish-Coffee-Strongest-Certified/dp/B006CQ1ZHI/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761493&sr=1-8&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=839ea209ca8e7ea0f9801a3cc1c582d0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B006CQ1ZHI&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B006CQ1ZHI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />', "Caffeinated"];
  coffee[2]=["Folgers", "Classic Roast", "http://amzn.to/2gvUGVH", "Pure","Medium", "Central America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","normal",'<a href="https://www.amazon.com/Folgers-Classic-Roast-Ground-Coffee/dp/B010ULFOWC/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761493&sr=1-9&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=d187036c19e2e2cc7e668c6267919c43" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B010ULFOWC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B010ULFOWC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[3]=["San Francisco Bay", "Fog Chaser", "http://amzn.to/2gafaPB", "Pure", "Medium","Central and South America", "Arabica", "Keurig K-Cup", "low", '<a href="https://www.amazon.com/San-Francisco-Bay-OneCup-Coffees/dp/B007Y59HVM/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479761726&sr=1-1&keywords=san+francisco+bay+k+cups&th=1&linkCode=li3&tag=compa0ae-20&linkId=0110c845ee390638410b5039dee24464" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007Y59HVM&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B007Y59HVM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />', "Caffeinated"];
  coffee[4]=["Kirkland Signture","Colombian Coffee","http://amzn.to/2gcaOHZ","Pure","Dark","Colombia","Colombia","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Signature-Colombian-Coffee-Supremo-Roast-Fine/dp/B008P731LK/ref=as_li_ss_il?s=grocery&ie=UTF8&qid=1479772527&sr=1-6&keywords=coffee&th=1&linkCode=li3&tag=compa0ae-20&linkId=bfb80fe15eda91d30bdb8d3998444b40" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008P731LK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B008P731LK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[5]=["Lavazza","Caffe Espresso","http://amzn.to/2flxF6l","Pure","Medium","South America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Lavazza-Caffe-Espresso-Medium-8-Ounce/dp/B00HJNTII6/ref=as_li_ss_il?_encoding=UTF8&refRID=70WS3SH85JD74BS4NJE7&th=1&linkCode=li3&tag=compa0ae-20&linkId=f26e9c7afcbefc4387f6400548633155" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HJNTII6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00HJNTII6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[6]=["Illy","Ground Espresso","http://amzn.to/2gfz9xR", "Pure","Medium","South America","Arabica","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Illy-Ground-Espresso-Medium-Roast/dp/B001E5DYT4/ref=as_li_ss_il?_encoding=UTF8&refRID=70WS3SH85JD74BS4NJE7&th=1&linkCode=li3&tag=compa0ae-20&linkId=2cb91c9888f364bac1bed5f39a491c5b" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001E5DYT4&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B001E5DYT4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[7]=["Peet's Coffee","Major Dickason's Blend","http://amzn.to/2gg5p4g","Pure","Dark","South America, Africa, Asia","Mixed","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Peets-Coffee-Peetnik-Dickasons-Ground/dp/B00LAY3PBG/ref=as_li_ss_il?_encoding=UTF8&refRID=PTWKGJJSYKEPZA85CRVX&th=1&linkCode=li3&tag=compa0ae-20&linkId=2f27e6c57eba5832a65cc8ab87008468" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00LAY3PBG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00LAY3PBG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[8]=["Death Wish","Valhalla Java","http://amzn.to/2fn12oL","Pure","Dark","South America","Robusta","French Press, Pour Over, Drip and Espresso coffee drinks","low",'<a href="https://www.amazon.com/Valhalla-Coffee-Death-Wish-Certified/dp/B00FL6PCF6/ref=as_li_ss_il?_encoding=UTF8&refRID=PTWKGJJSYKEPZA85CRVX&th=1&linkCode=li3&tag=compa0ae-20&linkId=557df2f2b0bce0dfe0cb781498da7a36" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FL6PCF6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00FL6PCF6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[9]=["Keurig hot","Donut Shop, Regular","http://amzn.to/2fn0wam","Pure","Medium","South America","Arabica","Keurig K-Cup","low",'<a href="https://www.amazon.com/Original-Donut-Shop-Regular-Medium/dp/B00I08JAYG/ref=as_li_ss_il?_encoding=UTF8&refRID=WT85WSYYWYD7S5VVAJVW&th=1&linkCode=li3&tag=compa0ae-20&linkId=f8fa6de38b212aa5e32c34bacfc68a7a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I08JAYG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I08JAYG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[10]=["Tim Hortons" , "Ground Coffee" , "http://amzn.to/2hLOMMG", "Pure", "Medium", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Tim-Hortons-Arabica-Medium-Coffee/dp/B005Y1L0BS/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=794956bed00ffafc7c8a47aa9abe5467" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B005Y1L0BS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B005Y1L0BS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[11]=["Crema e Gusto" ,"Lavazza", "http://amzn.to/2gGAOQq", "Chocolaty", "Dark", "South America, Africa", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Lavazza-Crema-Gusto-Ground-8-8-Ounce/dp/B001E5E0D8/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=ec4b6eb484013519a2a8a53ca957857d" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001E5E0D8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B001E5E0D8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[12]=["Kicking Horse" , "Ground Coffee" , "http://amzn.to/2hLKcOv", "Pure", "Dark", "Indonesia,Central America", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Kicking-Horse-Coffee-Ground-Ounce/dp/B01AV6I6K8/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=b5a87d34af538c143ac5881f462b9e6a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01AV6I6K8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01AV6I6K8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[13]=["Cafe du Monde" , "Coffee and Chicory" , "http://amzn.to/2hLLOrL", "Chicory", "Dark", "South America, Africa", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Cafe-Du-Monde-15-Pack/dp/B000FUYCJ0/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=6af464b5e22f44a82ce74e63b8d8b7d2" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000FUYCJ0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000FUYCJ0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[14]=["Bulletproof" , "Ground Coffee" , "http://amzn.to/2gJwbU6", "Pure", "Dark", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Bulletproof-Ground-Coffee-12-oz/dp/B00T2W0I0Y/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=0d7e86b10597afe553ea59de4dd2d125" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00T2W0I0Y&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00T2W0I0Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[15]=["Tiny Footprint" , "Organic Cold Press Elixir" , "  http://amzn.to/2hjZywY", "Fruity", "Dark", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Tiny-Footprint-Coffee-Organic-Elixir/dp/B00BN4WBOK/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=fdd667c0e349e286867e5a86ecfebd15" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00BN4WBOK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00BN4WBOK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[16]=["Kimera Koffee" , "Nootropic Infused Ground Coffee" , "http://amzn.to/2hrtxDC", "Nutty", "Dark", "South America", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "low", '<a href="https://www.amazon.com/Kimera-Koffee-Nootropic-Infused-Altitude/dp/B0120S5RZC/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=29c889d3f7c0be50b989d8218e58b934" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0120S5RZC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B0120S5RZC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[17]=["Kurukahveci Mehmet Efendi" , "Turkish Coffee" , "http://amzn.to/2gz09a5", "Pure", "Medium", "Asia", "Mixed", "French Press, Pour Over, Drip and Espresso coffee drinks", "Normal", '<a href="https://www.amazon.com/Kurukahveci-Mehmet-Efendi-Turkish-Coffee/dp/B000CMFKNS/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=HDSP7W3VQ07S2SFDRX6P&linkCode=li3&tag=compa0ae-20&linkId=9d5146d2008c288e22cc72727f5916eb" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000CMFKNS&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000CMFKNS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[18]=["Green Mountain" , "Breakfast Blend" , "http://amzn.to/2hLQzBv", "Pure", "Light", "Central America", "Arabica", "Keurig K-Cup", "Low", '<a href="https://www.amazon.com/Green-Mountain-Coffee-Breakfast-Keurig/dp/B00I08JK7S/ref=as_li_ss_il?_encoding=UTF8&refRID=GEXRNW0YHM6T9KQRYRKT&th=1&linkCode=li3&tag=compa0ae-20&linkId=4982ef5327d237c50fe40ff2df4fc6ce" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I08JK7S&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I08JK7S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[19]=["Starbucks" , "Sumatra" , "http://amzn.to/2hLKNzQ", "Pure", "Dark", "Asia", "Mixed", "Keurig K-Cup", "Low", '<a href="https://www.amazon.com/Starbucks-Sumatra-K-Cup-Keurig-Brewers/dp/B00U3ODVUE/ref=as_li_ss_il?_encoding=UTF8&refRID=7NEAZCAP2SDCAMYWA4RS&th=1&linkCode=li3&tag=compa0ae-20&linkId=286f5b852d14dfaad6fe34e66cdb3e28" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00U3ODVUE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00U3ODVUE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[20]=["Eight O'Clock" , "The Original" , "http://amzn.to/2hLQMop", "Fruity", "Medium", "South America", "Arabica", "Keurig K-Cup", "Normal", '<a href="https://www.amazon.com/Eight-OClock-Coffee-Original-Keurig/dp/B00I08JKI2/ref=as_li_ss_il?_encoding=UTF8&refRID=7NEAZCAP2SDCAMYWA4RS&th=1&linkCode=li3&tag=compa0ae-20&linkId=6ec47293da24993796b76a984fb963b5" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I08JKI2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I08JKI2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[21]=["Dunkin' Donuts" , "Original Blend" , "http://amzn.to/2hrmqem", "Pure", "Medium", "South America", "Arabica", "French Press, Pour Over, Drip and Espresso coffee drinks", "Low", '<a href="https://www.amazon.com/Dunkin-Donuts-Original-Medium-Coffee/dp/B00JI498GG/ref=as_li_ss_il?_encoding=UTF8&refRID=HDSP7W3VQ07S2SFDRX6P&th=1&linkCode=li3&tag=compa0ae-20&linkId=5304565939a91480c0e0709c89a2f716" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00JI498GG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00JI498GG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];
  coffee[22]=["Dunkin' Donuts" , "Original Blend" , "http://amzn.to/2hLMWLR", "Pure", "Medium", "South America", "Arabica", "Keurig K-Cup", "Low", '<a href="https://www.amazon.com/Dunkin-Donuts-Coffee-K-cup-Original/dp/B00XA1075Y/ref=as_li_ss_il?_encoding=UTF8&refRID=GEXRNW0YHM6T9KQRYRKT&th=1&linkCode=li3&tag=compa0ae-20&linkId=b1f0ee46822faf40fc76e8caaffc9713" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00XA1075Y&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00XA1075Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Caffeinated"];



//Instant camera

  instantCamera[0]= ["Fujifilm",'<a href="https://www.amazon.com/Fujifilm-INSTAX-Mini-Instant-Blue/dp/B00AWKJPOA/ref=as_li_ss_il?ie=UTF8&qid=1479909261&sr=8-3&keywords=fujifilm+mini+8&th=1&linkCode=li3&tag=compa0ae-20&linkId=701b881d2dafa97387c891a229e4cb60" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00AWKJPOA&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00AWKJPOA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 8",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"2 x AA","100 shots","1/60","60mm","f/12.7","Indoor light, Cloudy/Shade, Partly Sunny, or Bright Sun","Yes","5 min",'http://amzn.to/2fr7GtZ',"B00AWKJPOA"];
  instantCamera[1]= ["Fujifilm", '<a href="https://www.amazon.com/Fujifilm-Instax-Mini-70-Instant/dp/B015R3WUNO/ref=as_li_ss_il?ie=UTF8&qid=1479909156&sr=8-1&keywords=fujifilm+mini+70&linkCode=li3&tag=compa0ae-20&linkId=5f55c992a71a41c65492c895b0a91baa" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015R3WUNO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B015R3WUNO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 70",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"2 x CR2","300 shots","½- to 1/400","60mm","f/12.7 ","Selfie, Auto-Exposure, Self timer with 2 shots, Macro, Hi-Key, Landscape","Yes","5 min",'http://amzn.to/2gzHr5J',"B015R3WUNO"];
  instantCamera[2]= ["Fujifilm", '<a href="https://www.amazon.com/Fujifilm-Instax-Mini-Neo-Classic/dp/B00FR85IRK/ref=as_li_ss_il?ie=UTF8&qid=1479909124&sr=8-1&keywords=fujifilm+mini+90&linkCode=li3&tag=compa0ae-20&linkId=ce9fd460268422adb61e993e18a95aa8" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FR85IRK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00FR85IRK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 90",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"Lithium Ion","100 shots","½- to 1/400","60mm ","f/12.7 ","Dark, Normal, Light, Macro","Yes","5 min",'http://amzn.to/2gAVF79',"B00FR85IRK"];
  instantCamera[3]= ["Fujifilm", '<a href="https://www.amazon.com/Fujifilm-Instax-Wide-300-Instant/dp/B00TGOWK3Q/ref=as_li_ss_il?ie=UTF8&qid=1479909185&sr=8-2&keywords=fujifilm+wide+300&linkCode=li3&tag=compa0ae-20&linkId=91e068021dceb5007b5fd7e943599a08" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00TGOWK3Q&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00TGOWK3Q" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Wide 300",'"<a href="http://amzn.to/2fr4bDT" target="_blank">Instax Wide</a>"',"4 x AA","100 shots","1/64- to 1/200","95mm ","ƒ/14","Dark, Normal, Light, Macro","Yes","5 min",'http://amzn.to/2fqZslL',"B00TGOWK3Q"];
  instantCamera[4]= ["Leica",'<a href="https://www.amazon.com/Leica-Sofort-Instant-Camera-Orange/dp/B01M0VA845/ref=as_li_ss_il?ie=UTF8&qid=1479909217&sr=8-1&keywords=leica+sofort&linkCode=li3&tag=compa0ae-20&linkId=afc8802e3cfcfdbb51d3fe23266ad0f0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M0VA845&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01M0VA845" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Sofort",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"Lithium Ion","100 shots","1/8 to 1/400","60mm","f/12.7","Automatic, Self-Portrait, People & Part, Action & Sport, Bulb, Macro, Self-Timer, and Double Exposure","Yes","5 min",'http://amzn.to/2gfAUd1',"B01M0VA845"];
  instantCamera[5]= ["Polaroid",'<a href="https://www.amazon.com/Polaroid-Instant-Digital-Printing-Technology/dp/B015JIAD7C/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=Z73HH6ZV2PXMZF120WGS&linkCode=li3&tag=compa0ae-20&linkId=ed11ab8633ebfafa5e5b366cde592831" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B015JIAD7C&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B015JIAD7C" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Snap",'"<a href="http://amzn.to/2gkcS2d" target="_blank">Zink</a>"',"Lithium Ion","50 shots","N/A","28mm","f/2.8","normal, black & white and vintage sepia tone","No","1min",'http://amzn.to/2ghvMZF',"B015JIAD7C"];
  instantCamera[6]= ["Polaroid",'<a href="https://www.amazon.com/Polaroid-Instant-Digital-Printing-Technology/dp/B01LWV127J/ref=as_li_ss_il?s=photo&ie=UTF8&qid=1480789831&sr=1-1&keywords=polaroid+snap+touch&linkCode=li3&tag=compa0ae-20&linkId=7e9b2f474c24da504f8a48f7d74725e6" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01LWV127J&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01LWV127J" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Snap Touch",'"<a href="http://amzn.to/2gkcS2d" target="_blank">Zink</a>"',"Lithium Ion","50 shots","N/A","3.4mm","f/2.8","normal, black & white and vintage sepia tone","Yes","1min",'http://amzn.to/2fX2v2g',"B01LWV127J"];
  instantCamera[7]= ["Polaroid",'<a href="https://www.amazon.com/Polaroid-PIC-300-Instant-Film-Camera/dp/B007HR9W44/ref=as_li_ss_il?ie=UTF8&qid=1480793030&sr=8-2&keywords=Pic+300&th=1&linkCode=li3&tag=compa0ae-20&linkId=7ddae8761474f8c2028ab22ca93aec12" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007HR9W44&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B007HR9W44" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Pic 300",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"4 x AA","400 shots","1/60","60mm","f/12.7","Indoor light, Cloudy/Shade, Partly Sunny, or Bright Sun","Yes","5 min",'http://amzn.to/2gA3yZA',"B003B2GTY0"];
  instantCamera[8]= ["Fujifilm",'<a href="https://www.amazon.com/Fujifilm-Instax-Camera-Piano-Black/dp/B003XFYTT2/ref=as_li_ss_il?ie=UTF8&qid=1481721607&sr=8-3&keywords=fujifilm+50s&linkCode=li3&tag=compa0ae-20&linkId=b14023acd6614aea3ee50a9bfd72ee9b" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B003XFYTT2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B003XFYTT2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 50S",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"2 x CR2","300 shots","½- to 1/400","60mm ","f/12.7","Self-Timer, Landscape, Fill-In Flash","Yes","5 min",'http://amzn.to/2hN6TSr'];
  instantCamera[9]= ["Fujifilm",'<a href="https://www.amazon.com/Fujifilm-Mini-26-Rainbow-Bundle/dp/B01M3REQGL/ref=as_li_ss_il?s=photo&ie=UTF8&qid=1485180814&sr=1-1&keywords=instax+mini+26&linkCode=li3&tag=compa0ae-20&linkId=b3ed2f97d07c1d6cac1a1da2ce4a7315" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M3REQGL&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01M3REQGL" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Mini 26",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"2 x CR2","300 shots","½- to 1/400","60mm","f/12.7","Full Auto","Yes","5 min",'http://amzn.to/2gKLpZ6'];
  instantCamera[10]= ["Impossible",'<a href="https://www.amazon.com/Impossible-Project-Analog-Instant-Camera/dp/B01FMXMYHQ/ref=as_li_ss_il?ie=UTF8&qid=1481723219&sr=8-1&keywords=impossible+camera&linkCode=li3&tag=compa0ae-20&linkId=d6c8322f818ce9477a75fe276c3889c6" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01FMXMYHQ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01FMXMYHQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />','Project I-1 Analog','"<a href="http://amzn.to/2hvbWaO" target="_blank">Impossible 600</a>"',"Lithium Ion","100 shots","n/a","82–109 mm","6 lenses included","Manual","Yes","30 min","http://amzn.to/2hEKomQ"];
  instantCamera[11]= ["Lomography",'<a href="https://www.amazon.com/dp/B00PW14N5U/ref=as_li_ss_il?_encoding=UTF8&th=1&linkCode=li3&tag=compa0ae-20&linkId=db2b5cc18f62676126508c6f80f1eef3" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00PW14N5U&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00PW14N5U" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Lomo Instant",'"<a href="http://amzn.to/2gKQJxt" target="_blank">Instax Mini </a>"',"4 x AAA","100 shots","1/125","27mm","f/8-f/32","Day, Nigth, Bright Sun","Yes","5 min",'http://amzn.to/2gIsSOk'];
  instantCamera[12]= ["Polaroid",'<a href="https://www.amazon.com/Polaroid-Z2300-Digital-Instant-Camera/dp/B008GVXKUW/ref=as_li_ss_il?s=photo&ie=UTF8&qid=1481725256&sr=1-38&keywords=instant+camera&linkCode=li3&tag=compa0ae-20&linkId=2cd78fae57a04784196bf963de6576ee" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008GVXKUW&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B008GVXKUW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Z2300",'"<a href="http://amzn.to/2gkcS2d" target="_blank">Zink</a>"',"Lithium Ion","50 shots","N/A","28mm","f/2.8","Portrait and Macro","Yes","1 min",'http://amzn.to/2hNkZDD'];
  instantCamera[13]= ["Lomography",'<a href="https://www.amazon.com/Lomography-LI200B-LomoInstant-Wide-Camera/dp/B018SRV50A/ref=as_li_ss_il?ie=UTF8&qid=1481726361&sr=8-1&keywords=lomo+wide&linkCode=li3&tag=compa0ae-20&linkId=4ca8b0c5868bfeb61d6844a7cb0c6503" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B018SRV50A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B018SRV50A" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Lomo Instant Wide",'"<a href="http://amzn.to/2fr4bDT" target="_blank">Instax Wide</a>"',"4 x AA","100 shots","8 - 1/250","35mm","f/8-f/22","Automatic and Manual","Yes","5 min","http://amzn.to/2hNqNwX"];



//headphone

  headphone[0]=["Bose","QuietComfort 35",'http://amzn.to/2jpjcsK', '<a href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B01E3SNO1G/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=RSTN8BHVAM952KM49RP2&linkCode=li3&tag=compa0ae-20&linkId=589171fbcd2b33bc2ec0ec0100e6b3f1" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01E3SNO1G&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01E3SNO1G" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired-Bluetooth","Yes","No","20hrs.","Enthusiast","Noise Cancelling"];
  headphone[1]=["Bose","QuietComfort 20",'http://amzn.to/2izuh6e','<a href="https://www.amazon.com/Bose-QuietComfort-Acoustic-Cancelling-Headphones/dp/B00X9KV0HU/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=RHBFEQPVSBV7AR4TWRWC&linkCode=li3&tag=compa0ae-20&linkId=2343b18ab23a66a12475946bfae9e545" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00X9KV0HU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00X9KV0HU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"In-ear","Wired-Bluetooth","Yes","Yes","16 hrs.","Enthusiast","Noise Cancelling"];
  headphone[2]=["Bose","Quietcontrol 30",'http://amzn.to/2jpkMLi', '<a href="https://www.amazon.com/Bose-Quietcontrol-Wireless-Headphones-Cancelling/dp/B01HETFQA8/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=0T710G1CPT0DWNA7PRAH&linkCode=li3&tag=compa0ae-20&linkId=ffb09e59d6937e711b0cbaf115a97276" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HETFQA8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01HETFQA8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Behind-The-Neck In-Ear","Wired-Bluetooth","Yes","Yes","10 hrs.","Enthusiast","Noise Cancelling"];
  headphone[3]=["Beats","Solo3","http://amzn.to/2iuFJoe",'<a href="https://www.amazon.com/Beats-Solo3-Wireless-Ear-Headphones/dp/B01M0J9OD3/ref=as_li_ss_il?s=aht&ie=UTF8&qid=1484594712&sr=1-4&keywords=beats&th=1&linkCode=li3&tag=compa0ae-20&linkId=8c61d4ef75d9ec506ba280c93297b978" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M0J9OD3&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01M0J9OD3" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"On-Ear","Bluetooth","No","Yes","40 hrs","Enthusiast","N/A"];
  headphone[4]=["Sony","MDR-1A",'http://amzn.to/2jpxycv','<a href="https://www.amazon.com/Sony-MDR-1A-Headphone-International-warranty/dp/B00NW353KE/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484591646&sr=1-1&keywords=sony+mdr-1a&linkCode=li3&tag=compa0ae-20&linkId=0545b0535033c9d94dadaa77de3bb322" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00NW353KE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00NW353KE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"over-ear","Wired","No","No", "N/A", "Normal", "N/A"];
  headphone[5]=["Sennheiser","Momentum 2.0",'http://amzn.to/2jRobPB','<a href="https://www.amazon.com/Sennheiser-Momentum-2-0-Apple-Devices/dp/B00SL2YX02/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484591709&sr=1-2&keywords=Sennheiser+Momentum+2.0&th=1&linkCode=li3&tag=compa0ae-20&linkId=1b43d7f76c97bb6c44d4245a9e410086" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00SL2YX02&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00SL2YX02" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","Yes","Yes","N/A", "Normal", "N/A"];
  headphone[6]=["Bose","761529-0020",'http://amzn.to/2iuQ6II','<a href="https://www.amazon.com/Bose-761529-0020-SoundSport-Wireless-Headphones/dp/B01L7PWBRG/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=compa0ae-20&linkId=e54270a0fc33f9e7c001a6f09f491333" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01L7PWBRG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01L7PWBRG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"In-ear","Bluetooth","Yes","Yes","6 hrs", "Sport", "Noise Cancelling"];
  headphone[7]=["Audeze","SINE",'http://amzn.to/2jRsiuQ','<a href="https://www.amazon.com/Audeze-Magnetic-Headphones-Integrated-Lightning/dp/B01HXNY5WU/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484592643&sr=1-1&keywords=audeze+sine&linkCode=li3&tag=compa0ae-20&linkId=c1954ef0f2fb6eb406434a0d772dc26c" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HXNY5WU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01HXNY5WU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"On-Ear","Wired(Lighting)","Yes","Yes","N/A","Audiophile","N/A"];
  headphone[7]=["Beyerdynamic","T51i",'http://amzn.to/2jRso5G','<a href="https://www.amazon.com/Beyerdynamic-T51i-Portable-Headphones-Silver/dp/B00K0PLQ9E/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484593404&sr=1-1&keywords=Beyerdynamic+T51i&linkCode=li3&tag=compa0ae-20&linkId=8295da353c2c002084baf3385952ffd9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00K0PLQ9E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00K0PLQ9E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"On-ear","Wired","Yes","Yes","N/A", "Enthusiast", "N/A"];
  headphone[8]=["Audio-Technica","ATH-M50x",'http://amzn.to/2jRjYLU','<a href="https://www.amazon.com/Audio-Technica-ATH-M50x-Professional-Monitor-Headphones/dp/B00HVLUR86/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484593616&sr=1-3&keywords=Audio-Technica+ATH-M50x&linkCode=li3&tag=compa0ae-20&linkId=39d1ff36678d55b2554e13f87b1f39be" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HVLUR86&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00HVLUR86" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A", "Audiophile", "N/A"];
  headphone[9]=["AV-MODA","Crossfade M-100",'http://amzn.to/2jpshC5','<a href="https://www.amazon.com/V-MODA-Crossfade-Over-Ear-Noise-Isolating-Headphone/dp/B00A39PPDK/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484594158&sr=1-1&keywords=V-Moda+Crossfade+M-100&linkCode=li3&tag=compa0ae-20&linkId=0dcd7884d6e095824ed4f54d99cabb02" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00A39PPDK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00A39PPDK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","Yes","N/A", "Enthusiast", "N/A"];
  headphone[10]=["HIFIMAN","HE-400I",'http://amzn.to/2jRlDB9','<a href="https://www.amazon.com/HIFIMAN-HE-400I-Full-size-Magnetic-Headphones/dp/B00MULH672/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484594186&sr=1-1&keywords=HiFiMan+HE-400i&linkCode=li3&tag=compa0ae-20&linkId=3020f108a5d8d95b05f800c9bf3d0784" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00MULH672&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00MULH672" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Wired","No","No","N/A","Enthusiast","N/A"];
  headphone[11]=["Sony","MDR7506",'http://amzn.to/2jpmrR2','<a href="https://www.amazon.com/Sony-MDR7506-Professional-Diaphragm-Headphone/dp/B000AJIF4E/ref=as_li_ss_il?ie=UTF8&qid=1484595108&sr=8-7&keywords=sony+headphones&linkCode=li3&tag=compa0ae-20&linkId=2ed9c12ad4c26c79b21317eb36d231ac" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000AJIF4E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000AJIF4E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No,”N/A", "Enthusiast", "N/A"];
  headphone[12]=["Sony","Premiun",'http://amzn.to/2jRkY2m','<a href="https://www.amazon.com/Sony-Cancelling-Bluetooth-Headphone-MDR1000X/dp/B01KHZ4ZYY/ref=as_li_ss_il?ie=UTF8&qid=1484595108&sr=8-10&keywords=sony+headphones&linkCode=li3&tag=compa0ae-20&linkId=7e5ab76f7594370fa316fe57669073fa" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01KHZ4ZYY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01KHZ4ZYY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Bluetooth","No","No","20 hrs","Enthusiast","N/A"];
  headphone[13]=["Shure","SE846-CL",'http://amzn.to/2iKK5Gx','<a href="https://www.amazon.com/Shure-Isolating-Earphones-Definition-MicroDrivers/dp/B00DIUGW6A/ref=as_li_ss_il?ie=UTF8&qid=1484658052&sr=8-1&keywords=Shure+SE846&linkCode=li3&tag=compa0ae-20&linkId=d91cec6a693e6d8c75621ded27dba3ad" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00DIUGW6A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00DIUGW6A" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"In-ear","Wired","No","Yes","N/A","Audiophile","Noise Isolating"];
  headphone[14]=["Sennheiser","RS 165 RF",'http://amzn.to/2ixSqPb','<a href="https://www.amazon.com/Sennheiser-RS-165-Wireless-Headphone/dp/B00SLVAVAY/ref=as_li_ss_il?ie=UTF8&qid=1484658223&sr=8-1&keywords=Sennheiser+RS+165&linkCode=li3&tag=compa0ae-20&linkId=dc821fb31082e0ac2b3a723e9c712a80" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00SLVAVAY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00SLVAVAY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wireless-RF","No","Yes","18 hrs","Enthusiast","N/A"];
  headphone[15]=["Shure","SE425-V",'http://amzn.to/2j5uDCF','<a href="https://www.amazon.com/Shure-SE425-V-Isolating-Definition-MicroDrivers/dp/B003NSBKSM/ref=as_li_ss_il?ie=UTF8&qid=1484658245&sr=8-3&keywords=Shure+SE425&linkCode=li3&tag=compa0ae-20&linkId=797d1ffed08b6f9ba6410e6efd7615d0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B003NSBKSM&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B003NSBKSM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"In-ear","Wired","No","No","N/A","Enthusiast", "N/A"];
  headphone[16]=["Sennheiser","HD 800 S",'http://amzn.to/2jvPFgK','<a href="https://www.amazon.com/Sennheiser-HD-800-Reference-Headphone/dp/B00PXLX2TC/ref=as_li_ss_il?ie=UTF8&qid=1484658727&sr=8-1&keywords=Sennheiser+HD+800+S&linkCode=li3&tag=compa0ae-20&linkId=5ba2b5069a0c56f845ae0d1187b4d7f1" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00PXLX2TC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00PXLX2TC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Wired","No","No","N/A","Audiophile","N/A"];
  headphone[17]=["Focal","Elear",'http://amzn.to/2jVBVIY','<a href="https://www.amazon.com/Focal-Elear-Headphones/dp/B01MDQUUZ2/ref=as_li_ss_il?ie=UTF8&qid=1484660765&sr=8-1&keywords=Focal+Elear+Headphone&linkCode=li3&tag=compa0ae-20&linkId=4537423e2c3e939fad17fb679858ef60" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MDQUUZ2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01MDQUUZ2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile","N/A"];
  headphone[18]=["Focal","Utopia",'http://amzn.to/2k1DIAD','<a href="https://www.amazon.com/Focal-Utopia-Fidelity-Circumaural-Headphones/dp/B01L0HF92K/ref=as_li_ss_il?ie=UTF8&qid=1484658800&sr=8-1&keywords=Focal+Utopia&linkCode=li3&tag=compa0ae-20&linkId=1593aae13820ae69426afd027cb5e90a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01L0HF92K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01L0HF92K" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Wired","No","No","N/A","Audiphile","N/A"];
  headphone[19]=["Audeze","LCD3",'http://amzn.to/2iDF4fF','<a href="https://www.amazon.com/Audeze-Magnetic-Headphones-Leather-Earpads/dp/B00O12MH1S/ref=as_li_ss_il?ie=UTF8&qid=1484659145&sr=8-1&keywords=Audeze+LCD-3&linkCode=li3&tag=compa0ae-20&linkId=cba27593a2bd92c1f2bfcbb24ddb53dd" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00O12MH1S&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00O12MH1S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile","N/A"];
  headphone[20]=["Sennheiser","HD 600",'http://amzn.to/2iDE8aS','<a href="https://www.amazon.com/Sennheiser-Open-Back-Professional-Headphone/dp/B00004SY4H/ref=as_li_ss_il?ie=UTF8&qid=1484659528&sr=8-1&keywords=Sennheiser+HD+600&linkCode=li3&tag=compa0ae-20&linkId=d06c91b814204cba9e06588e045877a9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00004SY4H&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00004SY4H" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Enthusiast", "Open-Back"];
  headphone[21]=["Beyerdynamic","T1 Tesla",'http://amzn.to/2jVwhqr','<a href="https://www.amazon.com/Beyerdynamic-T1-Audiophile-Stereo-Headphone/dp/B0031RD3YY/ref=as_li_ss_il?ie=UTF8&qid=1484659753&sr=8-1&keywords=Beyerdynamic+Tesla+T1&linkCode=li3&tag=compa0ae-20&linkId=10b16606a7fa29cf398f8f43e039aa9c" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0031RD3YY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B0031RD3YY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  headphone[22]=["Focal","Elear",'http://amzn.to/2jVBVIY','<a href="https://www.amazon.com/Focal-Elear-Headphones/dp/B01MDQUUZ2/ref=as_li_ss_il?ie=UTF8&qid=1484660765&sr=8-1&keywords=Focal+Elear+Headphone&linkCode=li3&tag=compa0ae-20&linkId=4537423e2c3e939fad17fb679858ef60" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MDQUUZ2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01MDQUUZ2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  headphone[23]=["Westone","W20",'http://amzn.to/2iDNyn3','<a href="https://www.amazon.com/Westone-W20-Universal-Isolating-Earphones/dp/B00GB2QG0E/ref=as_li_ss_il?ie=UTF8&qid=1484661478&sr=8-1&keywords=Westone+W20&linkCode=li3&tag=compa0ae-20&linkId=4f601a8ddcf9c3a901153cbb241503f0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00GB2QG0E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00GB2QG0E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"In-ear","Wired","No","No","N/A","Enthusiast", "Noise Isolating"];
  headphone[24]=["Grado","Reference",'http://amzn.to/2jVs9GL','<a href="https://www.amazon.com/Grado-Reference-Series-RS1e-Headphone/dp/B00L1O9E2Y/ref=as_li_ss_il?ie=UTF8&qid=1484661219&sr=8-1-fkmr0&keywords=Grado+RS+2e&linkCode=li3&tag=compa0ae-20&linkId=0eddc48380a8cc32f95c115d98c5f0a7" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00L1O9E2Y&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00L1O9E2Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  headphone[25]=["ETHE","C Flow",'http://amzn.to/2jVF1wu','<a href="https://www.amazon.com/ETHER-C-Flow-Closed-Back-Headphone/dp/B01MA5O38M/ref=as_li_ss_il?ie=UTF8&qid=1484661273&sr=8-1&keywords=MrSpeakers+Ether+C+Flow&linkCode=li3&tag=compa0ae-20&linkId=be88fdb730d17f4a1f37084f41c1d08d" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MA5O38M&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01MA5O38M" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  headphone[26]=["Westone","W10",'http://amzn.to/2iDyxS9','<a href="https://www.amazon.com/Westone-W10-Universal-Isolating-Earphones/dp/B00GB1M49M/ref=as_li_ss_il?ie=UTF8&qid=1484660778&sr=8-1&keywords=Westone+W10&linkCode=li3&tag=compa0ae-20&linkId=30d465841364605155ed4f3a331b37e2" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00GB1M49M&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00GB1M49M" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"In-ear","Wired","No","No","N/A","Enthusiast","Noise Isolating"];
  headphone[27]=["Parrot","Zik 3.0",'http://amzn.to/2jDjPyy','<a href="https://www.amazon.com/Parrot-Zik-3-Black-Overstitched/dp/B016Y37MD4/ref=as_li_ss_il?ie=UTF8&qid=1484846753&sr=8-3&keywords=parrot+headphone&linkCode=li3&tag=compa0ae-20&linkId=d6d90db6c621ecc9c81b353a363b5652" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B016Y37MD4&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B016Y37MD4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Bluetooth","No","No","18 hrs","Enthusiast","N/A"];



//Coffee machine

  coffeeMachine[0]=["DeLonghi","EC702",'http://amzn.to/2j7o8lZ',"15 bars","43 fl. oz(1.3 liters)",'<a href="https://www.amazon.com/DeLonghi-EC702-15-Bar-Pump-Espresso-Stainless/dp/B001CNG7RY/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=YZ92Q8VYB7YYZS6BYFK2&linkCode=li3&tag=compa0ae-20&linkId=80a3538a9533d07780988fe5f66d5960" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B001CNG7RY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B001CNG7RY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","No","Yes"];
  coffeeMachine[1]=["Breville","Breville",'http://amzn.to/2j7kusr',"15 bar","61 fl. oz. (1.8 L)",'<a href="https://www.amazon.com/Breville-BES840XL-Infuser-Espresso-Machine/dp/B0089SSOR6/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=YZ92Q8VYB7YYZS6BYFK2&linkCode=li3&tag=compa0ae-20&linkId=eabe2454deede6f6656049893c8e1d03" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0089SSOR6&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B0089SSOR6" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
  coffeeMachine[2]=["De'Longhi","EN750MB",'http://amzn.to/2jv2btz',"19 bar","44 oz (1.3L)",'<a href="https://www.amazon.com/DeLonghi-America-EN750MB-Nespresso-Lattissima/dp/B00HQXJY7E/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=YZ92Q8VYB7YYZS6BYFK2&linkCode=li3&tag=compa0ae-20&linkId=43ba871bf332140dbf36eb448ac9c670" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HQXJY7E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00HQXJY7E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","1","Yes","No"];
  coffeeMachine[3]=["Hamilton Beach","40792",'http://amzn.to/2ijeICu',"15 bar","N/A",'<a href="https://www.amazon.com/Hamilton-Beach-40792-Espresso-Cappuccino/dp/B01AT75AX0/ref=as_li_ss_il?ie=UTF8&qid=1484141061&sr=8-1&keywords=40792&linkCode=li3&tag=compa0ae-20&linkId=c4208da72d4457573db67cbf8015b6b9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01AT75AX0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01AT75AX0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Black","1","Yes","Yes"];
  coffeeMachine[4]=["Breville","BES870XL",'http://amzn.to/2j7k9WF',"15 bar","67 fl.oz (2L)",'<a href="https://www.amazon.com/Breville-BES870XL-Barista-Express-Espresso/dp/B00CH9QWOU/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=8c319f3a2e1e4933b8516fce90a8e4ae" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00CH9QWOU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00CH9QWOU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
  coffeeMachine[5]=["Nespresso","Inissia",'http://amzn.to/2juTxvf',"19 Bar","23.8 oz",'<a href="https://www.amazon.com/Nespresso-Inissia-Espresso-Aeroccino-Frother/dp/B00L7RU8C0/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=333f6a24063215434febe0a730b61007" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00L7RU8C0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00L7RU8C0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Black","1","Yes","No"];
  coffeeMachine[6]=["Mr. Coffee","ECMP1000",'http://amzn.to/2j7aWh2',"15 bar","N/A",'<a href="https://www.amazon.com/Mr-Coffee-ECMP1000-Espresso-Cappuccino/dp/B007K9OIMU/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=0bb6beac362bd3fccffad3b28221343b" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B007K9OIMU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B007K9OIMU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","1","Yes","No"];
  coffeeMachine[7]=["De'Longhi","EC155",'http://amzn.to/2ijcGTe',"15 bar","35 fl. oz(1.0 L)",'<a href="https://www.amazon.com/DeLonghi-EC155-Espresso-Cappuccino-Maker/dp/B000F49XXG/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=R94SR4QZFY0JV12PSHAK&linkCode=li3&tag=compa0ae-20&linkId=a2d23f82b0c0675adddb9cbc066c3092" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000F49XXG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000F49XXG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless,black","2","Yes","Yes"];
  coffeeMachine[8]=["Breville","BES920XL",'http://amzn.to/2j8swB9',"Variable","84 oz. (2.5L)",'<a href="https://www.amazon.com/Breville-BES920XL-Boiler-Espresso-Machine/dp/B00I6JGGP0/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=76b641fd6b6c386393e12ac174cb3c54" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00I6JGGP0&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00I6JGGP0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
  coffeeMachine[9]=["Gaggia","Brera",'http://amzn.to/2idI5rE',"15 bar","40 fl. oz. (1.2L)",'<a href="https://www.amazon.com/Gaggia-Brera-Superautomatic-Espresso-Machine/dp/B003XV3U82/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=41d89860f0b0db34d047f23b80ea9613" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B003XV3U82&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B003XV3U82" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless, Black","1","Yes","Yes"];
  coffeeMachine[10]=["Espressione","1324",'http://amzn.to/2jEzwGt',"15 bar","37 fl. oz(1.1L)",'<a href="https://www.amazon.com/Espressione-1324-Minuetto-Professional-Cappuccino/dp/B01H1QV108/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=89551d4199bc5ad4f8896299388f7007" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01H1QV108&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01H1QV108" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Silver","2","Yes","Yes"];
  coffeeMachine[11]=["Nespresso","D70-US-SI-NE",'http://amzn.to/2idI5HZ',"19 bar","27 fl. oz (0.7L)",'<a href="https://www.amazon.com/Nespresso-D70-US-SI-NE-Prodigio-Espresso-Silver/dp/B01C7QR494/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=96d78c10fbbd2a5fd8bd7e351c96bb6c" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01C7QR494&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01C7QR494" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Silver","2","Yes","Yes"];
  coffeeMachine[12]=["Jura","Ena Micro 1",'http://amzn.to/2jw9hxT',"15 bar","38 fl. oz.(1.1 L)",'<a href="https://www.amazon.com/JURA-13626-Jura-Ena-Micro/dp/B008RZFQKO/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=AQC95A117BVTBAECG150&linkCode=li3&tag=compa0ae-20&linkId=84441a308c71d1d42434dedb6f75344f" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B008RZFQKO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B008RZFQKO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Black","1","Yes","No"];
  coffeeMachine[13]=["Lello","1375",'http://amzn.to/2jwmoze',"15 bar","17 fl. oz (0.5L)",'<a href="https://www.amazon.com/Lello-1375-Ariete-Prestige-Coffee/dp/B000E3ZF76/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=CHPFDN12VJ76KGJ61DKD&linkCode=li3&tag=compa0ae-20&linkId=3b69154bafd7089874591152be4461ab" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000E3ZF76&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000E3ZF76" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Silver","2","Yes","Yes"];
  coffeeMachine[14]=["Saeco","Intelia Deluxe HD8759/47",'http://amzn.to/2j8BSwA',"15 bar","50 fl oz. (1.5L)",'<a href="https://www.amazon.com/Saeco-Intelia-Superautomatic-Espresso-Machine/dp/B01NA77GVE/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=NWF47VGN8NGW9GY8HTM5&linkCode=li3&tag=compa0ae-20&linkId=3366a15b992bdadfc2f73f19f29fb7e9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01NA77GVE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01NA77GVE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","2","Yes","Yes"];
  coffeeMachine[15]=["Jura","J95",'http://amzn.to/2j8y7aL',"15 bar","71 fl. oz.(2.1 L)",'<a href="https://www.amazon.com/Jura-Automatic-Coffee-Machine-Carbon/dp/B01104IRPO/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=NWF47VGN8NGW9GY8HTM5&linkCode=li3&tag=compa0ae-20&linkId=28b972053b93b2169dedf6bab0658c05" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01104IRPO&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01104IRPO" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Carbon","2","Yes","No"];
  coffeeMachine[16]=["Jura","Z6",'http://amzn.to/2idMY45',"15 bar","91 fl. oz. (2,4L)",'<a href="https://www.amazon.com/Jura-Z6-Aluminum-Espresso-Maker/dp/B00VF9BCGQ/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=NWF47VGN8NGW9GY8HTM5&linkCode=li3&tag=compa0ae-20&linkId=c37fdda65b3c65bda1e8742c6d644cef" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00VF9BCGQ&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00VF9BCGQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Stainless","1","Yes","No"];


  //generate coffee cards
  for (var i = 0; i < coffee.length; i++) {
    htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal coffee" id="coffee'+ i +'">'+
                 '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+
                   '<div class="card-title">'+
                       '<div class="imgAmazon">'+ coffee[i][9] +'</div>'+  /*IMAGE*/
                     '</div>'+
                     '<div class="hoverDiv">'+
                       '<div class="specDiv">'+
                         '<div class="row">'+
                           '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                             '<div class="lblBrand"><h6>Flavor</h6></div>'+
                           '</div>'+
                           '<div class="col-md-9 col-sm-9 col-xs-9">'+
                             '<div class="flavorProd idbtn"><h6>'+ coffee[i][3] +'</h6></div>'+ /*flavor*/
                           '</div>'+
                         '</div>'+
                         '<div class="row">'+
                           '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                             '<div class="lblTaste"><h6>Type</h6></div>'+
                           '</div>'+
                           '<div class="col-md-9 col-sm-9 col-xs-9">'+
                             '<div class="typeProd idbtn"><h6>'+ coffee[i][6] +'</h6></div>'+ /*type*/
                           '</div>'+
                         '</div>'+
                         '<div class="row">'+
                           '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                             '<div class="lblPrice"><h6>Origin</h6></div>'+
                           '</div>'+
                           '<div class="col-md-9 col-sm-9 col-xs-9">'+
                             '<div class="originProd idbtn"><h6>'+ coffee[i][5] +'</h6></div>'+ /*origin*/
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
                          '<div class="nameProd idbtn">'+ coffee[i][1] +'</div>'+ /*NAME*/
                        '</div>'+
                      '</div>'+
                      '<div class="row impar">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblBrand"><strong>Brand</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="brandProd idbtn" >'+ coffee[i][0] +'</div>'+ /*BRAND*/
                        '</div>'+
                      '</div>'+
                      '<div class="row par">'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblPrice"><strong>Price</strong></div>'+
                          '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<a class="priceProd" href="'+ coffee[i][2] +'">show price</a>'+ /*PRICE*/
                          '</div>'+
                      '</div>'+
                      '<div class="row impar">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblFlavor"><strong>Flavor</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="flavorProd idbtn">'+ coffee[i][3] +'</div>'+ /*FLAVOR*/
                        '</div>'+
                     '</div>'+
                     '<div class="row par rowModalRoast">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="lblRoast"><strong>Roast</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="roastProd idbtn">'+ coffee[i][4] +'</div>'+ /*ROAST*/
                        '</div>'+
                    '</div>'+
                    '<div class="row impar">'+
                       '<div class="col-md-6 col-sm-6 col-xs-6">'+
                         '<div class="lblOrigin"><strong>Origin</strong></div>'+
                       '</div>'+
                       '<div class="col-md-6 col-sm-6 col-xs-6">'+
                         '<div class="originProd idbtn">'+ coffee[i][5] +'</div>'+ /*ORIGIN*/
                       '</div>'+
                   '</div>'+
                   '<div class="row par">'+
                       '<div class="col-md-6 col-sm-6 col-xs-6">'+
                         '<div class="lblType"><strong>Type</strong></div>'+
                       '</div>'+
                       '<div class="col-md-6 col-sm-6 col-xs-6">'+
                         '<div class="typeProd idbtn">'+ coffee[i][6] +'</div>'+ /*TYPE*/
                       '</div>'+
                   '</div>'+
                   '<div class="row impar modalCompa">'+
                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                       '<div class="lblAdicity"><strong>Acidity</strong></div>'+
                     '</div>'+
                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                       '<div class="acidProd idbtn">'+ coffee[i][8] +'</div>'+ /*ACIDITY*/
                     '</div>'+
                   '</div>'+
                   '<div class="row par">'+
                     '<div class="col-md-6 col-sm-6 col-xs-6">'+
                       '<div class="lblCafType"><strong>Caffeine Type</strong></div>'+
                     '</div>'+
                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                     '<div class="cafeProd idbtn">'+ coffee[i][10] +'</div>'+ /*CAFFEINE TYPE*/
                   '</div>'+
                 '</div>'+
                 '<div class="row impar">'+
                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                     '<div class="lblWork"><strong>Works with</strong></div>'+
                   '</div>'+
                   '<div class="col-md-6 col-sm-6 col-xs-6">'+
                     '<div class="workProd idbtn">'+ coffee[i][7] +'</div>'+ /*WORKS WITH*/
                   '</div>'+
                 '</div>'+
                     '</div>'+ //ALL SPECS
                     '<div class="hoverthisDiv">'+
                       'Hover this card'+
                     '</div>'+
               '</div>'+
               '<div class="row btnDiv">'+
                 '<a class="col-md-6 col-sm-6 col-xs-6"><div id="btnComparecoffee'+ i +'" class="btn button-1 imgCompare">COMPARE</div></a>'+
                 '<a class="col-md-6 col-sm-6 col-xs-6" href="'+ coffee[i][2] +'" target="_blank"><div id="btnAmazon'+ i +'" class="btn button-2 imgBuyNow">BUY NOW!</div></a>'
               '</div>'+
             '</div>';
         $('#gridContainer').append(htmlStr);
  }

  //generate instant camera cards
  for (var i = 0; i < instantCamera.length; i++) {
     htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal instantcameras" id="instantcameras'+ i +'">'+
                  '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+
                    '<div class="card-title">'+
                        '<div class="imgAmazon">'+ instantCamera[i][1] +'</div>'+  /*IMAGE*/
                      '</div>'+
                      '<div class="hoverDiv">'+
                        '<div class="specDiv">'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblBrand"><h6>Film Type</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="flavorProd idbtn"><h6>'+ instantCamera[i][3] +'</h6></div>'+ /*Film Type*/
                            '</div>'+
                          '</div>'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblTaste"><h6>Battery Life</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="typeProd idbtn"><h6>'+ instantCamera[i][5] +'</h6></div>'+ /*Battery Life*/
                            '</div>'+
                          '</div>'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblPrice"><h6>Develop Time</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="originProd idbtn"><h6>'+ instantCamera[i][11] +'</h6></div>'+ /*DevelopTime*/
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
                           '<div class="nameProd idbtn">'+ instantCamera[i][2] +'</div>'+ /*NAME*/
                         '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="lblBrand"><strong>Brand</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="brandProd idbtn" >'+ instantCamera[i][0] +'</div>'+ /*BRAND*/
                         '</div>'+
                       '</div>'+
                       '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblPrice"><strong>Film Type</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="priceProd">'+ instantCamera[i][3] +'</div>'+ /*Film Type*/
                           '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="lblFlavor"><strong>Batteries</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="flavorProd idbtn">'+ instantCamera[i][4] +'</div>'+ /*Batteries*/
                         '</div>'+
                      '</div>'+
                      '<div class="row par rowModalRoast">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblRoast"><strong>Battery Life</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="roastProd idbtn">'+ instantCamera[i][5] +'</div>'+ /*Battery Life*/
                         '</div>'+
                     '</div>'+
                     '<div class="row impar">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblOrigin"><strong>Shutter Speed</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="originProd idbtn">'+ instantCamera[i][6] +'</div>'+ /*Shutter Speed*/
                        '</div>'+
                    '</div>'+
                    '<div class="row par">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblType"><strong>Lens Width</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="typeProd idbtn">'+ instantCamera[i][7] +'</div>'+ /*Lens Width*/
                        '</div>'+
                    '</div>'+
                    '<div class="row impar modalCompa">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblAdicity"><strong>Lens Aperture</strong></div>'+
                      '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="acidProd idbtn">'+ instantCamera[i][8] +'</div>'+ /*Lens Aperture*/
                      '</div>'+
                    '</div>'+
                    '<div class="row par">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblCafType"><strong>Shooting Modes</strong></div>'+
                      '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="cafeProd idbtn">'+ instantCamera[i][9] +'</div>'+ /*Shooting Modes*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblWork"><strong>Flash</strong></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="workProd idbtn">'+ instantCamera[i][10] +'</div>'+ /* Flash*/
                    '</div>'+
                  '</div>'+
                  '<div class="row par">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblWork"><strong>Develop Time</strong></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="workProd idbtn">'+ instantCamera[i][11] +'</div>'+ /* Develop Time*/
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="lblWork"><strong>Price</strong></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<a class="workProd idbtn" href="'+instantCamera[i][12]+'">price</a>'+ /*Price*/
                    '</div>'+
                  '</div>'+
                      '</div>'+ //ALL SPECS
                      '<div class="hoverthisDiv">'+
                        'Hover this card'+
                      '</div>'+
                '</div>'+
                '<div class="row btnDiv">'+
                  '<a class="col-md-6 col-sm-6 col-xs-6"><div id="btnCompareinstantcameras'+ i +'" class="btn button-1 imgCompare">COMPARE</div></a>'+
                  '<a class="col-md-6 col-sm-6 col-xs-6" href="'+ instantCamera[i][12] +'" target="_blank"><div id="btnAmazon'+ i +'" class="btn button-2 imgBuyNow">BUY NOW!</div></a>'
                '</div>'+
              '</div>';
         $('#gridContainer').append(htmlStr);
  }

  //generate headphone cards
  for (var i = 0; i < headphone.length; i++) {
     htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal headphones" id="headphones'+ i +'">'+
                  '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+
                    '<div class="card-title">'+
                        '<div class="imgAmazon">'+ headphone[i][3] +'</div>'+  /*IMAGE*/
                      '</div>'+
                      '<div class="hoverDiv">'+
                        '<div class="specDiv">'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblBrand"><h6>Type</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="flavorProd idbtn"><h6>'+ headphone[i][4] +'</h6></div>'+ /*type*/
                            '</div>'+
                          '</div>'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblTaste"><h6>Bluetooth</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="typeProd idbtn"><h6>'+ headphone[i][5] +'</h6></div>'+ /*bluetooth*/
                            '</div>'+
                          '</div>'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblPrice"><h6>Category</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="originProd idbtn"><h6>'+ headphone[i][9] +'</h6></div>'+ /*Category*/
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
                           '<div class="nameProd idbtn">'+ headphone[i][1] +'</div>'+ /*NAME*/
                         '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="lblBrand"><strong>Brand</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="brandProd idbtn" >'+ headphone[i][0] +'</div>'+ /*BRAND*/
                         '</div>'+
                       '</div>'+
                       '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblPrice"><strong>Price</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<a class="priceProd" href="'+ headphone[i][2] +'">show price</a>'+ /*PRICE*/
                           '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="lblFlavor"><strong>Type</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="flavorProd idbtn">'+ headphone[i][4] +'</div>'+ /*type*/
                         '</div>'+
                      '</div>'+
                      '<div class="row par rowModalRoast">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblRoast"><strong>Connectivity</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="roastProd idbtn">'+ headphone[i][5] +'</div>'+ /*Connectivity*/
                         '</div>'+
                     '</div>'+
                     '<div class="row impar">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblOrigin"><strong>Mic</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="originProd idbtn">'+ headphone[i][6] +'</div>'+ /*mic*/
                        '</div>'+
                    '</div>'+
                    '<div class="row par">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblType"><strong>In-Cord Volume</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="typeProd idbtn">'+ headphone[i][7] +'</div>'+ /*incord volume*/
                        '</div>'+
                    '</div>'+
                    '<div class="row impar modalCompa">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblAdicity"><strong>Battery Duration</strong></div>'+
                      '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="acidProd idbtn">'+ headphone[i][8] +'</div>'+ /*Battery Duration*/
                      '</div>'+
                    '</div>'+
                    '<div class="row par">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblCafType"><strong>Category</strong></div>'+
                      '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="cafeProd idbtn">'+ headphone[i][9] +'</div>'+ /* Category */
                    '</div>'+
                  '</div>'+
                  '<div class="row impar">'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblWork"><strong>Features</strong></div>'+
                    '</div>'+
                    '<div class="col-md-6 col-sm-6 col-xs-6">'+
                      '<div class="workProd idbtn">'+ headphone[i][10] +'</div>'+ /*Features*/
                    '</div>'+
                  '</div>'+
                      '</div>'+ //ALL SPECS
                      '<div class="hoverthisDiv">'+
                        'Hover this card'+
                      '</div>'+
                '</div>'+
                '<div class="row btnDiv">'+
                  '<a class="col-md-6 col-sm-6 col-xs-6"><div id="btnCompareheadphones'+ i +'" class="btn button-1 imgCompare">COMPARE</div></a>'+
                  '<a class="col-md-6 col-sm-6 col-xs-6" href="'+ headphone[i][2] +'" target="_blank"><div id="btnAmazon'+ i +'" class="btn button-2 imgBuyNow">BUY NOW!</div></a>'
                '</div>'+
              '</div>';
         $('#gridContainer').append(htmlStr);
  }

  //generate coffee machine cards
  for (var i = 0; i < coffeeMachine.length; i++) {
     htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal coffeemachines" id="coffeemachines'+ i +'">'+
                  '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+
                    '<div class="card-title">'+
                        '<div class="imgAmazon">'+ coffeeMachine[i][5] +'</div>'+  /*IMAGE*/
                      '</div>'+
                      '<div class="hoverDiv">'+
                        '<div class="specDiv">'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblBrand"><h6>Pressure</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="pressureProd idbtn"><h6>'+ coffeeMachine[i][3] +'</h6></div>'+ /*pressure*/
                            '</div>'+
                          '</div>'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblTaste"><h6>Water Capacity</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="typeProd idbtn"><h6>'+ coffeeMachine[i][4] +'</h6></div>'+ /*Water Capacity*/
                            '</div>'+
                          '</div>'+
                          '<div class="row">'+
                            '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                              '<div class="lblPrice"><h6>Material Type</h6></div>'+
                            '</div>'+
                            '<div class="col-md-9 col-sm-9 col-xs-9">'+
                              '<div class="originProd idbtn"><h6>'+ coffeeMachine[i][6] +'</h6></div>'+ /*Material Type*/
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
                           '<div class="nameProd idbtn">'+ coffeeMachine[i][1] +'</div>'+ /*NAME*/
                         '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="lblBrand"><strong>Brand</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="brandProd idbtn" >'+ coffeeMachine[i][0] +'</div>'+ /*BRAND*/
                         '</div>'+
                       '</div>'+
                       '<div class="row par">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="lblPrice"><strong>Price</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<a class="priceProd" href="'+ coffeeMachine[i][2] +'">show price</a>'+ /*PRICE*/
                           '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="lblFlavor"><strong>Pressure</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                           '<div class="flavorProd idbtn">'+ coffeeMachine[i][3] +'</div>'+ /*Pressure*/
                         '</div>'+
                      '</div>'+
                      '<div class="row par rowModalRoast">'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblRoast"><strong>Water Capacity</strong></div>'+
                         '</div>'+
                         '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="roastProd idbtn">'+ coffeeMachine[i][4] +'</div>'+ /*Water Capacity*/
                         '</div>'+
                     '</div>'+
                     '<div class="row impar">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblOrigin"><strong>Material Type</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="originProd idbtn">'+ coffeeMachine[i][6] +'</div>'+ /*Material Type*/
                        '</div>'+
                    '</div>'+
                    '<div class="row par">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblType"><strong>How many cups</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="typeProd idbtn">'+ coffeeMachine[i][7] +'</div>'+ /*How many cups*/
                        '</div>'+
                    '</div>'+
                    '<div class="row impar modalCompa">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblAdicity"><strong>Filter</strong></div>'+
                      '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="acidProd idbtn">'+ coffeeMachine[i][8] +'</div>'+ /*Filter*/
                      '</div>'+
                    '</div>'+
                    '<div class="row par">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="lblCafType"><strong>Steam Wand</strong></div>'+
                      '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="cafeProd idbtn">'+ coffeeMachine[i][9] +'</div>'+ /*Steam Wand*/
                      '</div>'+
                    '</div>'+
                  '</div>'+ //ALL SPECS
                  '<div class="hoverthisDiv">'+
                    'Hover this card'+
                  '</div>'+
                '</div>'+
                '<div class="row btnDiv">'+
                  '<a class="col-md-6 col-sm-6 col-xs-6"><div id="btnComparecoffeemachines'+ i +'" class="btn button-1 imgCompare">COMPARE</div></a>'+
                  '<a class="col-md-6 col-sm-6 col-xs-6" href="'+ coffeeMachine[i][2] +'" target="_blank"><div id="btnAmazon'+ i +'" class="btn button-2 imgBuyNow">BUY NOW!</div></a>'
                '</div>'+
              '</div>';
         $('#gridContainer').append(htmlStr);
  }


});
