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
  table[0]=["Bose","QuietComfort 35",'http://amzn.to/2jpjcsK', '<a href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B01E3SNO1G/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=RSTN8BHVAM952KM49RP2&linkCode=li3&tag=compa0ae-20&linkId=589171fbcd2b33bc2ec0ec0100e6b3f1" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01E3SNO1G&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01E3SNO1G" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired-Bluetooth","Yes","No","20hrs.","Enthusiast","Noise Cancelling"];
  table[1]=["Bose","QuietComfort 20",'http://amzn.to/2izuh6e','<a href="https://www.amazon.com/Bose-QuietComfort-Acoustic-Cancelling-Headphones/dp/B00X9KV0HU/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=RHBFEQPVSBV7AR4TWRWC&linkCode=li3&tag=compa0ae-20&linkId=2343b18ab23a66a12475946bfae9e545" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00X9KV0HU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00X9KV0HU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"In-ear","Wired-Bluetooth","Yes","Yes","16 hrs.","Enthusiast","Noise Cancelling"];
  table[2]=["Bose","Quietcontrol 30",'http://amzn.to/2jpkMLi', '<a href="https://www.amazon.com/Bose-Quietcontrol-Wireless-Headphones-Cancelling/dp/B01HETFQA8/ref=as_li_ss_il?_encoding=UTF8&psc=1&refRID=0T710G1CPT0DWNA7PRAH&linkCode=li3&tag=compa0ae-20&linkId=ffb09e59d6937e711b0cbaf115a97276" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HETFQA8&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01HETFQA8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Behind-The-Neck In-Ear","Wired-Bluetooth","Yes","Yes","10 hrs.","Enthusiast","Noise Cancelling"];
  table[3]=["Beats","Solo3","http://amzn.to/2iuFJoe",'<a href="https://www.amazon.com/Beats-Solo3-Wireless-Ear-Headphones/dp/B01M0J9OD3/ref=as_li_ss_il?s=aht&ie=UTF8&qid=1484594712&sr=1-4&keywords=beats&th=1&linkCode=li3&tag=compa0ae-20&linkId=8c61d4ef75d9ec506ba280c93297b978" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01M0J9OD3&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01M0J9OD3" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"On-Ear","Bluetooth","No","Yes","40 hrs","Enthusiast","N/A"];
  table[4]=["Sony","MDR-1A",'http://amzn.to/2jpxycv','<a href="https://www.amazon.com/Sony-MDR-1A-Headphone-International-warranty/dp/B00NW353KE/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484591646&sr=1-1&keywords=sony+mdr-1a&linkCode=li3&tag=compa0ae-20&linkId=0545b0535033c9d94dadaa77de3bb322" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00NW353KE&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00NW353KE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"over-ear","Wired","No","No", "N/A", "Normal", "N/A"];
  table[5]=["Sennheiser","Momentum 2.0",'http://amzn.to/2jRobPB','<a href="https://www.amazon.com/Sennheiser-Momentum-2-0-Apple-Devices/dp/B00SL2YX02/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484591709&sr=1-2&keywords=Sennheiser+Momentum+2.0&th=1&linkCode=li3&tag=compa0ae-20&linkId=1b43d7f76c97bb6c44d4245a9e410086" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00SL2YX02&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00SL2YX02" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","Yes","Yes","N/A", "Normal", "N/A"];
  table[6]=["Bose","761529-0020",'http://amzn.to/2iuQ6II','<a href="https://www.amazon.com/Bose-761529-0020-SoundSport-Wireless-Headphones/dp/B01L7PWBRG/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=compa0ae-20&linkId=e54270a0fc33f9e7c001a6f09f491333" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01L7PWBRG&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01L7PWBRG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"In-ear","Bluetooth","Yes","Yes","6 hrs", "Sport", "Noise Cancelling"];
  table[7]=["Audeze","SINE",'http://amzn.to/2jRsiuQ','<a href="https://www.amazon.com/Audeze-Magnetic-Headphones-Integrated-Lightning/dp/B01HXNY5WU/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484592643&sr=1-1&keywords=audeze+sine&linkCode=li3&tag=compa0ae-20&linkId=c1954ef0f2fb6eb406434a0d772dc26c" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HXNY5WU&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01HXNY5WU" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"On-Ear","Wired(Lighting)","Yes","Yes","N/A","Audiophile","N/A"];
  table[7]=["Beyerdynamic","T51i",'http://amzn.to/2jRso5G','<a href="https://www.amazon.com/Beyerdynamic-T51i-Portable-Headphones-Silver/dp/B00K0PLQ9E/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484593404&sr=1-1&keywords=Beyerdynamic+T51i&linkCode=li3&tag=compa0ae-20&linkId=8295da353c2c002084baf3385952ffd9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00K0PLQ9E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00K0PLQ9E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"On-ear","Wired","Yes","Yes","N/A", "Enthusiast", "N/A"];
  table[8]=["Audio-Technica","ATH-M50x",'http://amzn.to/2jRjYLU','<a href="https://www.amazon.com/Audio-Technica-ATH-M50x-Professional-Monitor-Headphones/dp/B00HVLUR86/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484593616&sr=1-3&keywords=Audio-Technica+ATH-M50x&linkCode=li3&tag=compa0ae-20&linkId=39d1ff36678d55b2554e13f87b1f39be" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00HVLUR86&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00HVLUR86" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A", "Audiophile", "N/A"];
  table[9]=["AV-MODA","Crossfade M-100",'http://amzn.to/2jpshC5','<a href="https://www.amazon.com/V-MODA-Crossfade-Over-Ear-Noise-Isolating-Headphone/dp/B00A39PPDK/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484594158&sr=1-1&keywords=V-Moda+Crossfade+M-100&linkCode=li3&tag=compa0ae-20&linkId=0dcd7884d6e095824ed4f54d99cabb02" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00A39PPDK&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00A39PPDK" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","Yes","N/A", "Enthusiast", "N/A"];
  table[10]=["HIFIMAN","HE-400I",'http://amzn.to/2jRlDB9','<a href="https://www.amazon.com/HIFIMAN-HE-400I-Full-size-Magnetic-Headphones/dp/B00MULH672/ref=as_li_ss_il?s=electronics&ie=UTF8&qid=1484594186&sr=1-1&keywords=HiFiMan+HE-400i&linkCode=li3&tag=compa0ae-20&linkId=3020f108a5d8d95b05f800c9bf3d0784" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00MULH672&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00MULH672" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Wired","No","No","N/A","Enthusiast","N/A"];
  table[11]=["Sony","MDR7506",'http://amzn.to/2jpmrR2','<a href="https://www.amazon.com/Sony-MDR7506-Professional-Diaphragm-Headphone/dp/B000AJIF4E/ref=as_li_ss_il?ie=UTF8&qid=1484595108&sr=8-7&keywords=sony+headphones&linkCode=li3&tag=compa0ae-20&linkId=2ed9c12ad4c26c79b21317eb36d231ac" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000AJIF4E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B000AJIF4E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No,”N/A", "Enthusiast", "N/A"];
  table[12]=["Sony","Premiun",'http://amzn.to/2jRkY2m','<a href="https://www.amazon.com/Sony-Cancelling-Bluetooth-Headphone-MDR1000X/dp/B01KHZ4ZYY/ref=as_li_ss_il?ie=UTF8&qid=1484595108&sr=8-10&keywords=sony+headphones&linkCode=li3&tag=compa0ae-20&linkId=7e5ab76f7594370fa316fe57669073fa" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01KHZ4ZYY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01KHZ4ZYY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Bluetooth","No","No","20 hrs","Enthusiast","N/A"];
  table[13]=["Shure","SE846-CL",'http://amzn.to/2iKK5Gx','<a href="https://www.amazon.com/Shure-Isolating-Earphones-Definition-MicroDrivers/dp/B00DIUGW6A/ref=as_li_ss_il?ie=UTF8&qid=1484658052&sr=8-1&keywords=Shure+SE846&linkCode=li3&tag=compa0ae-20&linkId=d91cec6a693e6d8c75621ded27dba3ad" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00DIUGW6A&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00DIUGW6A" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"In-ear","Wired","No","Yes","N/A","Audiophile","Noise Isolating"];
  table[14]=["Sennheiser","RS 165 RF",'http://amzn.to/2ixSqPb','<a href="https://www.amazon.com/Sennheiser-RS-165-Wireless-Headphone/dp/B00SLVAVAY/ref=as_li_ss_il?ie=UTF8&qid=1484658223&sr=8-1&keywords=Sennheiser+RS+165&linkCode=li3&tag=compa0ae-20&linkId=dc821fb31082e0ac2b3a723e9c712a80" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00SLVAVAY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00SLVAVAY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wireless-RF","No","Yes","18 hrs","Enthusiast","N/A"];
  table[15]=["Shure","SE425-V",'http://amzn.to/2j5uDCF','<a href="https://www.amazon.com/Shure-SE425-V-Isolating-Definition-MicroDrivers/dp/B003NSBKSM/ref=as_li_ss_il?ie=UTF8&qid=1484658245&sr=8-3&keywords=Shure+SE425&linkCode=li3&tag=compa0ae-20&linkId=797d1ffed08b6f9ba6410e6efd7615d0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B003NSBKSM&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B003NSBKSM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"In-ear","Wired","No","No","N/A","Enthusiast", "N/A"];
  table[16]=["Sennheiser","HD 800 S",'http://amzn.to/2jvPFgK','<a href="https://www.amazon.com/Sennheiser-HD-800-Reference-Headphone/dp/B00PXLX2TC/ref=as_li_ss_il?ie=UTF8&qid=1484658727&sr=8-1&keywords=Sennheiser+HD+800+S&linkCode=li3&tag=compa0ae-20&linkId=5ba2b5069a0c56f845ae0d1187b4d7f1" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00PXLX2TC&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00PXLX2TC" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Wired","No","No","N/A","Audiophile","N/A"];
  table[17]=["Focal","Elear",'http://amzn.to/2jVBVIY','<a href="https://www.amazon.com/Focal-Elear-Headphones/dp/B01MDQUUZ2/ref=as_li_ss_il?ie=UTF8&qid=1484660765&sr=8-1&keywords=Focal+Elear+Headphone&linkCode=li3&tag=compa0ae-20&linkId=4537423e2c3e939fad17fb679858ef60" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MDQUUZ2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01MDQUUZ2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile","N/A"];
  table[18]=["Focal","Utopia",'http://amzn.to/2k1DIAD','<a href="https://www.amazon.com/Focal-Utopia-Fidelity-Circumaural-Headphones/dp/B01L0HF92K/ref=as_li_ss_il?ie=UTF8&qid=1484658800&sr=8-1&keywords=Focal+Utopia&linkCode=li3&tag=compa0ae-20&linkId=1593aae13820ae69426afd027cb5e90a" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01L0HF92K&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01L0HF92K" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Wired","No","No","N/A","Audiphile","N/A"];
  table[19]=["Audeze","LCD3",'http://amzn.to/2iDF4fF','<a href="https://www.amazon.com/Audeze-Magnetic-Headphones-Leather-Earpads/dp/B00O12MH1S/ref=as_li_ss_il?ie=UTF8&qid=1484659145&sr=8-1&keywords=Audeze+LCD-3&linkCode=li3&tag=compa0ae-20&linkId=cba27593a2bd92c1f2bfcbb24ddb53dd" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00O12MH1S&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00O12MH1S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile","N/A"];
  table[20]=["Sennheiser","HD 600",'http://amzn.to/2iDE8aS','<a href="https://www.amazon.com/Sennheiser-Open-Back-Professional-Headphone/dp/B00004SY4H/ref=as_li_ss_il?ie=UTF8&qid=1484659528&sr=8-1&keywords=Sennheiser+HD+600&linkCode=li3&tag=compa0ae-20&linkId=d06c91b814204cba9e06588e045877a9" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00004SY4H&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00004SY4H" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Enthusiast", "Open-Back"];
  table[21]=["Beyerdynamic","T1 Tesla",'http://amzn.to/2jVwhqr','<a href="https://www.amazon.com/Beyerdynamic-T1-Audiophile-Stereo-Headphone/dp/B0031RD3YY/ref=as_li_ss_il?ie=UTF8&qid=1484659753&sr=8-1&keywords=Beyerdynamic+Tesla+T1&linkCode=li3&tag=compa0ae-20&linkId=10b16606a7fa29cf398f8f43e039aa9c" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0031RD3YY&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B0031RD3YY" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  table[22]=["Focal","Elear",'http://amzn.to/2jVBVIY','<a href="https://www.amazon.com/Focal-Elear-Headphones/dp/B01MDQUUZ2/ref=as_li_ss_il?ie=UTF8&qid=1484660765&sr=8-1&keywords=Focal+Elear+Headphone&linkCode=li3&tag=compa0ae-20&linkId=4537423e2c3e939fad17fb679858ef60" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MDQUUZ2&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01MDQUUZ2" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  table[23]=["Westone","W20",'http://amzn.to/2iDNyn3','<a href="https://www.amazon.com/Westone-W20-Universal-Isolating-Earphones/dp/B00GB2QG0E/ref=as_li_ss_il?ie=UTF8&qid=1484661478&sr=8-1&keywords=Westone+W20&linkCode=li3&tag=compa0ae-20&linkId=4f601a8ddcf9c3a901153cbb241503f0" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00GB2QG0E&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00GB2QG0E" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"In-ear","Wired","No","No","N/A","Enthusiast", "Noise Isolating"];
  table[24]=["Grado","Reference",'http://amzn.to/2jVs9GL','<a href="https://www.amazon.com/Grado-Reference-Series-RS1e-Headphone/dp/B00L1O9E2Y/ref=as_li_ss_il?ie=UTF8&qid=1484661219&sr=8-1-fkmr0&keywords=Grado+RS+2e&linkCode=li3&tag=compa0ae-20&linkId=0eddc48380a8cc32f95c115d98c5f0a7" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00L1O9E2Y&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00L1O9E2Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  table[25]=["ETHE","C Flow",'http://amzn.to/2jVF1wu','<a href="https://www.amazon.com/ETHER-C-Flow-Closed-Back-Headphone/dp/B01MA5O38M/ref=as_li_ss_il?ie=UTF8&qid=1484661273&sr=8-1&keywords=MrSpeakers+Ether+C+Flow&linkCode=li3&tag=compa0ae-20&linkId=be88fdb730d17f4a1f37084f41c1d08d" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01MA5O38M&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B01MA5O38M" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>',"Over-ear","Wired","No","No","N/A","Audiophile", "N/A"];
  table[26]=["Westone","W10",'http://amzn.to/2iDyxS9','<a href="https://www.amazon.com/Westone-W10-Universal-Isolating-Earphones/dp/B00GB1M49M/ref=as_li_ss_il?ie=UTF8&qid=1484660778&sr=8-1&keywords=Westone+W10&linkCode=li3&tag=compa0ae-20&linkId=30d465841364605155ed4f3a331b37e2" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00GB1M49M&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B00GB1M49M" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"In-ear","Wired","No","No","N/A","Enthusiast","Noise Isolating"];
  table[27]=["Parrot","Zik 3.0",'http://amzn.to/2jDjPyy','<a href="https://www.amazon.com/Parrot-Zik-3-Black-Overstitched/dp/B016Y37MD4/ref=as_li_ss_il?ie=UTF8&qid=1484846753&sr=8-3&keywords=parrot+headphone&linkCode=li3&tag=compa0ae-20&linkId=d6d90db6c621ecc9c81b353a363b5652" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B016Y37MD4&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=compa0ae-20" ></a><img src="https://ir-na.amazon-adsystem.com/e/ir?t=compa0ae-20&l=li3&o=1&a=B016Y37MD4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />',"Over-ear","Bluetooth","No","No","18 hrs","Enthusiast","N/A"];

  //check if calling index is home-page
  if ($('body.home-page').length > 0) {
    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        varCard[j]= table[i][j];
      }
       htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal" id="tile'+ i +'">'+

                    '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+

                      '<div class="card-title">'+
                          '<div class="imgAmazon">'+ varCard[3] +'</div>'+  /*IMAGE*/
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
                                '<div class="lblBrand"><h6>Type</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="flavorProd idbtn"><h6>'+ varCard[4] +'</h6></div>'+ /*type*/
                              '</div>'+
                            '</div>'+
                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblTaste"><h6>Connection</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="typeProd idbtn"><h6>'+ varCard[5] +'</h6></div>'+ /*Bluetooth*/
                              '</div>'+
                            '</div>'+
                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblPrice"><h6>Category</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="originProd idbtn"><h6>'+ varCard[9] +'</h6></div>'+ /*Category*/
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
  if ($('body.headphone-page').length > 0) {

    for (var i = 0; i < table.length; i++) {
      for (var j = 0; j < table[i].length; j++) {
        varCard[j]= table[i][j];
      }

        FilterArray[i] = [varCard[4], varCard[5], varCard[9]];
       htmlStr =  '<div class="col-md-3 col-sm-6 col-xs-12 rowModal" id="tile'+ i +'">'+

                    '<div class="demo-card-square mdl-card mdl-shadow--2dp">'+

                      '<div class="card-title">'+
                          '<div class="imgAmazon">'+ varCard[3] +'</div>'+  /*IMAGE*/

                        '</div>'+
                        '<div class="hoverDiv">'+
                          '<div class="specDiv">'+

                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblBrand"><h6>Type</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="flavorProd idbtn"><h6>'+ varCard[4] +'</h6></div>'+ /*type*/
                              '</div>'+
                            '</div>'+

                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblTaste"><h6>Bluetooth</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="typeProd idbtn"><h6>'+ varCard[5] +'</h6></div>'+ /*bluetooth*/
                              '</div>'+
                            '</div>'+

                            '<div class="row">'+
                              '<div class="col-md-3 col-sm-3 col-xs-3 lblTitle">'+
                                '<div class="lblPrice"><h6>Category</h6></div>'+
                              '</div>'+
                              '<div class="col-md-9 col-sm-9 col-xs-9">'+
                                '<div class="originProd idbtn"><h6>'+ varCard[9] +'</h6></div>'+ /*Category*/
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
                             '<div class="lblFlavor"><strong>Type</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                             '<div class="flavorProd idbtn">'+ varCard[4] +'</div>'+ /*type*/
                           '</div>'+
                        '</div>'+
                        '<div class="row par rowModalRoast">'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblRoast"><strong>Connectivity</strong></div>'+
                           '</div>'+
                           '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="roastProd idbtn">'+ varCard[5] +'</div>'+ /*Connectivity*/
                           '</div>'+
                       '</div>'+
                       '<div class="row impar">'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblOrigin"><strong>Mic</strong></div>'+
                          '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="originProd idbtn">'+ varCard[6] +'</div>'+ /*mic*/
                          '</div>'+
                      '</div>'+
                      '<div class="row par">'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblType"><strong>In-Cord Volume</strong></div>'+
                          '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="typeProd idbtn">'+ varCard[7] +'</div>'+ /*incord volume*/
                          '</div>'+
                      '</div>'+

                      '<div class="row impar modalCompa">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblAdicity"><strong>Battery Duration</strong></div>'+
                        '</div>'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="acidProd idbtn">'+ varCard[8] +'</div>'+ /*Battery Duration*/
                        '</div>'+
                      '</div>'+
                      '<div class="row par">'+
                        '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblCafType"><strong>Category</strong></div>'+
                        '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="cafeProd idbtn">'+ varCard[9] +'</div>'+ /* Category */
                      '</div>'+
                    '</div>'+
                    '<div class="row impar">'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                          '<div class="lblWork"><strong>Features</strong></div>'+
                      '</div>'+
                      '<div class="col-md-6 col-sm-6 col-xs-6">'+
                        '<div class="workProd idbtn">'+ varCard[10] +'</div>'+ /*Features*/
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
                        '<div class="iModalImg">'+ table[idTile][3] +'</div>'+  /*IMAGE*/
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
                         '<div class="imgAmazonModal">'+ table[substridTile][3] +'</div>'+  /*IMAGE*/
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
                                 '<div class="lblFlavor"><strong>Type</strong></div>'+
                               '</div>'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                 '<div class="flavorProd idbtn">'+ table[substridTile][4] +'</div>'+ /*type*/
                               '</div>'+
                            '</div>'+
                            '<div class="row par rowModalRoast">'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                  '<div class="lblRoast"><strong>Connectivity</strong></div>'+
                               '</div>'+
                               '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                  '<div class="roastProd idbtn">'+ table[substridTile][5] +'</div>'+ /*Connectivity*/
                               '</div>'+
                           '</div>'+
                           '<div class="row impar">'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="lblOrigin"><strong>Mic</strong></div>'+
                              '</div>'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="originProd idbtn">'+ table[substridTile][6] +'</div>'+ /*Mic*/
                              '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="lblType"><strong>In-Cord Volume</strong></div>'+
                              '</div>'+
                              '<div class="col-md-6 col-sm-6 col-xs-6">'+
                                '<div class="typeProd idbtn">'+ table[substridTile][7] +'</div>'+ /*incord volume*/
                              '</div>'+
                          '</div>'+

                          '<div class="row impar modalCompa">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblAdicity"><strong>Battery Duration</strong></div>'+
                            '</div>'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="acidProd idbtn">'+ table[substridTile][8] +'</div>'+ /*Battery Duration*/
                            '</div>'+
                          '</div>'+
                          '<div class="row par">'+
                            '<div class="col-md-6 col-sm-6 col-xs-6">'+
                              '<div class="lblCafType"><strong>Category</strong></div>'+
                            '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="cafeProd idbtn">'+ table[substridTile][9] +'</div>'+ /* Category*/
                          '</div>'+
                        '</div>'+
                        '<div class="row impar">'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="lblWork"><strong>Features</strong></div>'+
                          '</div>'+
                          '<div class="col-md-6 col-sm-6 col-xs-6">'+
                            '<div class="workProd idbtn">'+ table[substridTile][10] +'</div>'+ /* Features*/
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
  if ($('body.headphone-page').length > 0) {
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
  $('#srchType').on('change', ()=>{
      var typeStr =  $('#srchType :selected').val();
      var chkBoxConn = $('.mdl-checkboxConn :checkbox:checked');
      var strChkBoxConn=[];
      var chkBoxCat = $('mdl-checkboxCat :checkbox:checked');
      var strChkBoxCat=[];
      var i = 0;
      var j = 0;
      if(chkBoxConn.length){
             chkBoxConn.each(function(){
             strChkBoxConn[i] = $(this).val();
             i+=1;
           });
       }
       if (chkBoxCat.length) {
            chkBoxCat.each(function(){
            strChkBoxCat[j] = $(this).val();
            j+=1;
          });
       }
      filterDivs(typeStr, strChkBoxConn, strChkBoxCat);
  });

  $('.mdl-checkbox__input').click((event)=>{
    var typeStr = $('#srchType :selected').val();
    var chkBoxConn = $('.mdl-checkboxConn :checkbox:checked');
    var strChkBoxConn=[];
    var chkBoxCat = $('.mdl-checkboxCat :checkbox:checked');
    var strChkBoxCat=[];
    var i = 0;
    var j = 0;
    if(chkBoxConn.length){
           chkBoxConn.each(function(){
           strChkBoxConn[i] = $(this).val();
           i+=1;
         });
     }
     if (chkBoxCat.length) {
          chkBoxCat.each(function(){
          strChkBoxCat[j] = $(this).val();
          j+=1;
        });
     }
     filterDivs(typeStr, strChkBoxConn, strChkBoxCat);

  });

  function filterDivs(typeStr,strChkBoxConn,strChkBoxCat){
    $('.rowModal').hide(300);
    if (typeStr=="All" && !strChkBoxConn.length && !strChkBoxCat.length) {
        $('.rowModal').show(300);
    }else if (typeStr=="All" && !strChkBoxCat.length) {

      //var strSlider = parseInt(devTimeStr.slice(0));
      for (var i = 0; i < FilterArray.length; i++) {
        //var strGridDevTime = parseInt(FilterArray[i][1].slice(0));
        var strGridFilmType = $($.parseHTML(FilterArray[i][1])).text().toUpperCase().split(",");
        if (strChkBoxConn.length) {
            for (var j = 0; j < strChkBoxConn.length; j++) {
              if (strChkBoxConn[j].toUpperCase()==strGridFilmType) {
                $('#tile'+ i +'').show(300);
              }
            }
        }
      }

    }else if (typeStr=="All" && !strChkBoxConn.length) {

      //var strSlider = parseInt(devTimeStr.slice(0));
      for (var i = 0; i < FilterArray.length; i++) {
        //var strGridDevTime = parseInt(FilterArray[i][1].slice(0));
        var strGridFilmType = $($.parseHTML(FilterArray[i][2])).text().toUpperCase();
        if (strChkBoxCat.length) {
          for (var j = 0; j < strChkBoxCat.length; j++) {
            if (strChkBoxCat[j].toUpperCase()==strGridFilmType) {
              $('#tile'+ i +'').show(300);
            }
          }
        }
      }

    }else{
      for (var i = 0; i < FilterArray.length; i++) {
        var strGridType = $($.parseHTML(FilterArray[i][0])).text().toUpperCase();
        var strGridConn = $($.parseHTML(FilterArray[i][1])).text().toUpperCase();
        var strGridCat =  $($.parseHTML(FilterArray[i][2])).text().toUpperCase();
        if (strChkBoxCat.length) {

          for (var j = 0; j < strChkBoxCat.length; j++) {
            if (strChkBoxConn.length) {
              console.log(typeStr);
              console.log(strGridCat);
              console.log(strGridConn);
              for (var k = 0; k < strChkBoxConn.length; k++) {
                console.log("strChkBoxCat",strChkBoxCat[j]);
                console.log("strChkBoxConn",strChkBoxConn[k]);

                if (strGridType.toUpperCase() == typeStr.toUpperCase() || typeStr == "All" && strGridCat.toUpperCase() == strChkBoxCat[j].toUpperCase() && strGridConn.toUpperCase() == strChkBoxConn[k].toUpperCase()) {
                  $('#tile'+ i +'').show(300);
                }
              }
            }else {
              console.log("entra aca");
              if (strGridType.toUpperCase() == typeStr.toUpperCase() || typeStr == "All" && strGridCat.toUpperCase() == strChkBoxCat[j].toUpperCase()) {
                $('#tile'+ i +'').show(300);
              }
            }


          }
        }else if(strChkBoxConn.length){

          for (var k = 0; k < strChkBoxConn.length; k++) {
            if (strGridType.toUpperCase() == typeStr.toUpperCase() && strGridConn.toUpperCase() == strChkBoxConn[k].toUpperCase()) {
              $('#tile'+ i +'').show(300);
            }
          }
        }else{
          if (strGridType.toUpperCase() == typeStr.toUpperCase()) {
            $('#tile'+ i +'').show(300);
          }
        }

      }

    }








    /*for (var i = 0; i < FilterArray.length; i++) {
      var strGridType = $($.parseHTML(FilterArray[i][0])).text().toUpperCase();
      var strGridConn = $($.parseHTML(FilterArray[i][1])).text().toUpperCase();
      var strGridCat =  $($.parseHTML(FilterArray[i][2])).text().toUpperCase();
      for (var j = 0; j < type.length; j++) {
        var str = $($.parseHTML(type[j])).text().toUpperCase();
        if (str == strGridType) {
          console.log("////////////////////////");
          console.log(str);
          console.log(strGridType);
          for (var i = 0; i < array.length; i++) {
            array[i]
          }
        }
      }
    }
    console.log("-------------------------------------------------");*/

  }
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
