if(!self.define){let e,a={};const r=(r,i)=>(r=new URL(r+".js",i).href,a[r]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=a,document.head.appendChild(e)}else e=r,importScripts(r),a()})).then((()=>{let e=a[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let l={};const c=e=>r(e,s),o={module:{uri:s},exports:l,require:c};a[s]=Promise.all(i.map((e=>o[e]||c(e)))).then((e=>(n(...e),l)))}}define(["./workbox-936d835b"],(function(e){"use strict";e.setCacheNameDetails({prefix:"insectosun"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/.htaccess",revision:"8b8b0e501e8288c33326b427ff49b92a"},{url:"/cookie-consent-content/de.json",revision:"83c34610e07b5a9cad302db113822aa1"},{url:"/css/242.ff7a2e81.css",revision:null},{url:"/css/app.fc6423d7.css",revision:null},{url:"/css/vendor.156ef430.css",revision:null},{url:"/favicon.ico",revision:"90dc82d4a3d9a1346d6aa8d11825342a"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/fonts/fa-brands-400.b823fc0d.ttf",revision:null},{url:"/fonts/fa-brands-400.ebb7a127.woff2",revision:null},{url:"/fonts/fa-regular-400.0caf4c6c.woff2",revision:null},{url:"/fonts/fa-regular-400.0d03b1bb.ttf",revision:null},{url:"/fonts/fa-solid-900.59edf72a.woff2",revision:null},{url:"/fonts/fa-solid-900.e615bbcb.ttf",revision:null},{url:"/fonts/fa-v4compatibility.4baccb54.ttf",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fb4caf52.woff",revision:null},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.d0831fe6.woff2",revision:null},{url:"/gino.png",revision:"acd68f6a9551118fa6e77855ccc32be5"},{url:"/icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"/icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"/icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"/icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"/icons/favicon-128x128.png",revision:"b18cad45059b532131a2afc33e597aab"},{url:"/icons/favicon-16x16.png",revision:"7ef8d0df264e94e1d4635f9ec162eba0"},{url:"/icons/favicon-32x32.png",revision:"7a396c7ca6dc172a6fa60374d4cee86c"},{url:"/icons/favicon-96x96.png",revision:"7c5f06c04805e8ee183013dd23684919"},{url:"/icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"/icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"/icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"/icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"/icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"/icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"/icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"/img/bg/bg-hexa.webp",revision:"498425f62de00ce70fccb750c5eeab3d"},{url:"/img/bg/bg-hexa2.webp",revision:"45eb73bdc21622f71761ab405c2f245d"},{url:"/img/bg/bg-squad.webp",revision:"01b5924707f5b16ebbca5a40ce282974"},{url:"/img/bg/bg-wab.webp",revision:"9ec5d01626a682d7e299da0dec3b0926"},{url:"/img/bg/green.png",revision:"7d9a9694abc9dad2ceba501397393213"},{url:"/img/darking/erfal_Architektenportal_Objektberatung_Leistungen_Kollektion_Madrid_140-64.jpg.24282827.jpg",revision:"2e3863f06020b43f917e060e2f32eae6"},{url:"/img/darking/erfal_Verdunklungsanlagen_Header.jpg.24290042.jpg",revision:"3d870458946d05662488d8ebd44a7a0d"},{url:"/img/darking/erfal_Verdunklungsanlagen_Produktcharkteristik.jpg.24281985.jpg",revision:"27bd0e150d4e2cbb721d4df099b25ba1"},{url:"/img/fenster/Insektenschutz_Fenster_Bauarten_Besonderheiten_Drehrahmen.jpg.24280125.jpg",revision:"f664883589d1e9fe396382fe3ad03e5b"},{url:"/img/fenster/Insektenschutz_Fenster_Bauarten_Besonderheiten_Rollos.jpg.24280126.jpg",revision:"877fabbdab1a4cfd86e044c179c7a4ac"},{url:"/img/fenster/erfal_Insektenschutz_Fenster_Bauarten_Sonderformen.jpg.24280127.jpg",revision:"46907847346f809d037c41196a38cdd0"},{url:"/img/fenster/erfal_Insektenschutz_Fenster_Bauarten_Spannrahmen.jpg.24280124.jpg",revision:"cf339c027abfaa6778827830594742ea"},{url:"/img/insect/Insektenschutz fur Fenster Rahmenfarben 2103.jpg.24282142.jpg",revision:"a7ebd8fa6b22ebfa42b56d5cd1d58fcb"},{url:"/img/insect/Insektenschutz_Turen_Header_2004.jpg.24293527.jpg",revision:"dfde9a7e94a7a8cf5d48e6c3f70f0993"},{url:"/img/insect/Insektenschutz_Turen_Teaser_2004.jpg.24271647.jpg",revision:"81c2dbd66f73fa2ddf83181b619b5955"},{url:"/img/insect/erfal_Insektenschutz_Turen_Anwendung_R-0074.jpg.24282182.jpg",revision:"daa041cb6bb994d4d22f51c8470311cb"},{url:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Drehrahmen_R-0036.jpg.24280175.jpg",revision:"1ddcc3e531410c476ed03b2a2c367b0f"},{url:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Elektrorollos_Solarpanel_.jpg.24316925.jpg",revision:"6080b31bb14eae2b883b285c6db12783"},{url:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Fliegengitterpflaster.jpg.24281648.jpg",revision:"c85787f941ccc9b09a3bf48101fc07ff"},{url:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Plisseeturen_R-0019.jpg.24280178.jpg",revision:"0cf94cc21ae264af4a57a86090437914"},{url:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Schiebeanlagen_R-0001.jpg.24280176.jpg",revision:"80a49d441a8766c94306e3c9b198c9c2"},{url:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_schmale_Plisseetur_PL2.jpg.24280997.jpg",revision:"81ff0df2b674531517dcba38d4937ba7"},{url:"/img/insect/erfal_Insektenschutz_Turen_Ganz ihr Geschmack_Gewebearten.jpg.24282195.jpg",revision:"4ca6bc2a5d740f92f61c89bccd43d1c5"},{url:"/img/insect/erfal_Insektenschutz_Turen_Montage_Schraubmontage_R-0002.jpg.24280173.jpg",revision:"0a049a3651b6806b5645e0a7bfcc647d"},{url:"/img/insect/erfal_Insektenschutz_Turen_Montage_Winkellaschen_D0064_20.jpg.24280174.jpg",revision:"ce7a6bb24bd00134e1f843434912b8a2"},{url:"/img/insect/erfal_Insektenschutz_Turen_Penselturen_R-206_.jpg.24280177.jpg",revision:"28b72e3286150a421aca958b50576447"},{url:"/img/insect/erfal_Insektenschutz_Turen_Produktcharketeristik.jpg.24282181.jpg",revision:"e47996c0b7d806fb70d7ea3ea73aba63"},{url:"/img/insect_rollo/291_1_neher_insektenschutzrollo.jpg",revision:"5af75b4769a027ed763a9eb146213656"},{url:"/img/insect_rollo/291_2_neher_schnapptechnik.jpg",revision:"f6dd2ecaba318ae2a6eb5b984dbca391"},{url:"/img/insect_rollo/291_3_neher_rollo_oben.jpg",revision:"45eea61bc90995f95b7d69727800ddfd"},{url:"/img/jalousie/Aluminium-Jalousien-gelb-Bauarten_Besonderheiten_Dachfenster.jpg.24280199.jpg",revision:"0c6d973cde0500524308cb196163c038"},{url:"/img/jalousie/Bildauswahl_Aluminium-Jalousien_Bauarten_Besonderheiten_Flexx_Line.jpg.24279962.jpg",revision:"f1fa221de1b4c99b83d4e7e1037c734b"},{url:"/img/jalousie/Bildauswahl_Aluminium-Jalousien_Bauarten_Besonderheiten_Slope.jpg.24279961.jpg",revision:"4adc9e7420bc0af67a0cf3f186591f0e"},{url:"/img/jalousie/Bildauswahl_Aluminium-Jalousien_Ganz_ihr_Geschmack_Farbwechsel.jpg.24279960.jpg",revision:"14c215e661b1ba72fc92e2d42131daf3"},{url:"/img/jalousie/Bildauswahl_Aluminium-Jalousien_Ganz_ihr_Geschmack_Leiterband.jpg.24279959.jpg",revision:"ce21cd76cd950f65822ef019e7e3d66a"},{url:"/img/jalousie/Bildauswahl_Aluminium-Jalousien_Ganz_ihr_Geschmack_Material_Muster.jpg.24280291.jpg",revision:"ea3b68f830dd836f35dd3976d00d9c1e"},{url:"/img/jalousie/Bildauswahl_Aluminium-Jalousien_Montage_Glasleiste.jpg.24281992.jpg",revision:"d8c7fe70725a4be08f3a33759eb6ae8f"},{url:"/img/jalousie/Bildauswahl_Aluminium-Jalousien_Montage_vor_das_Fenster.jpg.24281971.jpg",revision:"e6da494c454947671fb817e8a8d8a19b"},{url:"/img/jalousie/blaue-Jalousien-Fenster-Bauarten_Besonderheiten_Mega_view.jpg.24281567.jpg",revision:"7ac8546d6967f57f8109fc4a636af08c"},{url:"/img/jalousie/erfal_Aluminium-Jalousien_Montage_Fensterrahmen.jpg.24281991.jpg",revision:"c55cf26d0faedf935e9875c1567a2f50"},{url:"/img/jalousie/erfal_Aluminium-Jalousien_bauarten_besonderheiten_Kindersicherheit.jpg.24279964.jpg",revision:"d17a6910e88a6f755d6dc2312167b2a5"},{url:"/img/lamellen/erfal Lamellenvorhange 4 eckig.24306408.jpg.24306416.jpg",revision:"68be4d86b65c5f7435211968136a8155"},{url:"/img/lamellen/erfal Lamellenvorhange Cube.jpg.24306446.jpg",revision:"180f620c862b0935eb087d0c338b5f4a"},{url:"/img/lamellen/erfal Lamellenvorhange Wandbefestigung.jpg.24305956.jpg",revision:"da227d7b061d4b33265fcf204a2985bd"},{url:"/img/lamellen/erfal Lamellenvorhange im Bogenfenster Header.jpg.24305946.jpg",revision:"ff7cfa58ec7a06ca4d4e13a3423363d4"},{url:"/img/lamellen/erfal Lamellenvorhange mit Farbwechsel.jpg.24305970.jpg",revision:"d6c8151f1b904778c2bbd8ee9203b4bb"},{url:"/img/lamellen/erfal Lamellenvorhange5.jpg.24306001.jpg",revision:"a8ffc4a1c494c20157ae166394ef15b3"},{url:"/img/lamellen/erfal Lamellenvorhange6.jpg.24306386.jpg",revision:"adeade3fd36a6c7c720bb31d582e6237"},{url:"/img/lamellen/erfal_Lamellenvorhaenge_Bauarten_Individualdruck.jpg.24279841.jpg",revision:"f72895c63db525c26c7723127d07a00c"},{url:"/img/lamellen/erfal_Lamellenvorhaenge_Bauarten_Lamelle_250mm.jpg.24279843.jpg",revision:"079e752cc4d41907e4f679e4c647e3a6"},{url:"/img/lamellen/erfal_Lamellenvorhaenge_Bauarten_Sonderformen.jpg.24279842.jpg",revision:"f90d3f179da40b984acab788f152e0d6"},{url:"/img/lamellen/erfal_Lamellenvorhaenge_Montage_Deckenbefestigung.jpg.24281850.jpg",revision:"fc38ec85060360f1b937bd16cf5614dc"},{url:"/img/lamellen/erfal_Lamellenvorhaenge_Montage_Deckeneinbau.jpg.24281851.jpg",revision:"d31c098020fe9f17a02c1e49b6f799a8"},{url:"/img/lamellen/erfal_Lamellenvorhaenge_Produktcharakteristik.jpg.24281845.jpg",revision:"5f2fa1e0afde10e752b4db59bc964b4b"},{url:"/img/lamellen/erfal_Lamellenvorhange_Ganz_ihr_Geschmack_Material_Ausrustung_R-0007.jpg.24282263.jpg",revision:"c48fbb1f810eb150346014b12d40836a"},{url:"/img/plisses/Plissee-mit-Seitenfuerung-Dachfenster.jpg.24281361.jpg",revision:"69e1dd96b1632f148a15c284f2c7b5b2"},{url:"/img/plisses/Plissee-mit-griffleiste-rot-weiss.20872544.jpg.24281363.jpg",revision:"2c91f0e5f46a10f61edd64c9f775226e"},{url:"/img/plisses/Plissees-im-Wohnzimmer-weiss-schwarz-erfal.jpg.24293455.jpg",revision:"b4dacb86ba646ff114a8eff402c585ee"},{url:"/img/plisses/Plissees-massanfertigung-erfal.jpg.24281751.jpg",revision:"705120a40d0c854654c76a5c164493c8"},{url:"/img/plisses/Plissees-runde-Fenster-anfertigung-erfal.jpg.24281708.jpg",revision:"de1ae4304dc3eac95a0c5f10e1db82b1"},{url:"/img/plisses/Plissees_Bauarten_D-0475_20.655.jpg.24279697.jpg",revision:"530b7a04ebc86003eac26b1e5f1b0e11"},{url:"/img/plisses/Plissees_Bauarten_Magnetverrastung.jpg.24279711.jpg",revision:"a8f1820a9e0e5218de92b74901f6f9ac"},{url:"/img/plisses/Plissees_Bauaten_D-0111_20.jpg.24279695.jpg",revision:"cb85635863daa0dbd1143a59678ae698"},{url:"/img/plisses/Plissees_Header_R-0776_10.1045.jpg.24289799.jpg",revision:"f616bb0faa137ab21b54639342e308a5"},{url:"/img/plisses/Sonenschutz-mit-Plissees-von-erfal.jpg.24283365.jpg",revision:"82309d9a4935a365d0d2922b1202d8ea"},{url:"/img/plisses/erfal Plissees Profile Bauarten Besonderheiten2.jpg.24318508.jpg",revision:"cd05e44fe7e2a034650cc9ade6cc6ef8"},{url:"/img/plisses/erfal-Plissees-Montage-Glasleiste-D-0591_20.jpg.24283366.jpg",revision:"5253a4bc030d9235eaf719588ba65024"},{url:"/img/plisses/plissee-fuer-vieleckfenster-gemusterter-stoff.jpg.24281354.jpg",revision:"151f13f26d9af8f495cd566e2d7f033b"},{url:"/img/plisses/plissee-kinderzimmer-kindersicherheit.jpg.24281362.jpg",revision:"50603b3691839dbc1cfa9585cbe38b25"},{url:"/img/plisses/plissee-oberlicht-fenster-wintergarten.jpg.24281355.jpg",revision:"1d02e85c78b415d79c92a394072ca2a4"},{url:"/img/plisses/plissee-runde-fenster.jpg.24281353.jpg",revision:"687b73f36dcbeb3393db07c3b8a45410"},{url:"/img/plisses/plissee-weiss-rot-kueche-erfal.jpg.24281352.jpg",revision:"297bf9b6ff11db4274ae42e5ac4ce878"},{url:"/img/plisses/plissees-dachfenster-dreieckfenster-blauer-stoff.jpg.24281356.jpg",revision:"2f77dcd7f6b1d62e10a828e2135de9eb"},{url:"/img/plisses/plisseestoff-verschiedene-groessen.jpg.24281360.jpg",revision:"b8e35aacd6e1be2cc7e4b3f716a23fb4"},{url:"/img/plisses/sonnenschutz-plissee-erfal.jpg.24281357.jpg",revision:"aa5a15c6a258ba05be5dc205f663234b"},{url:"/img/plisses/weisse-plissees-am-fensterrahmen-montiert.jpg.24283367.jpg",revision:"7ffd78bfb22cbf4f1f942eb351ab75ea"},{url:"/img/rollos/erfal_Rollos_12.jpg.24279857.jpg",revision:"d1043de677eb5e311aaddc0187f4ea77"},{url:"/img/rollos/erfal_Rollos_Bauarten_Besonderheiten_Individualdruck.jpg.24279860.jpg",revision:"0576a198ba32bc7e97f88c5d59f7af72"},{url:"/img/rollos/erfal_Rollos_Header.jpg.24291934.jpg",revision:"2caacafdc04cb70c302d9213986c3ff0"},{url:"/img/rollos/erfal_Rollos_Montage_azf_Glasleiste.jpg.24282063.jpg",revision:"e5b1c46eb474a025aa300e2bad655ae0"},{url:"/img/rollos/erfal_Rollos_Montagemoglichkeit_Fensterrahmen.jpg.24281867.jpg",revision:"6842378c5a250c59c2a4cbe54cbb5b33"},{url:"/img/rollos/erfal_Rollos_Montagemoglichkeit_vor_Fenster.jpg.24281866.jpg",revision:"54af20d614fd1ab0aa7e6721672ee4ae"},{url:"/img/rollos/erfal_Rollos_Produktcharakteristik.jpg.24281864.jpg",revision:"c094f9f4ca222abf28ee15c9e5eed920"},{url:"/img/rollos/erfal_Rollos_Produktvorteile.jpg.24281865.jpg",revision:"7f46f6cdcd81e3c13cb3a66723c3c3c7"},{url:"/img/rollos/erfal_Rollos_bauarteb_besonderheiten_Dachfenster.jpg.24279855.jpg",revision:"a1371ae9c6c13390280076c27d3d6a3e"},{url:"/img/rollos/erfal_Rollos_bauarten_besonderheiten_Kindersicherheit.jpg.24279858.jpg",revision:"a9a2c39c91135d42a243525174064898"},{url:"/img/rollos/erfal_Rollos_bauarten_besonderheiten_Massanfertigung.jpg.24279854.jpg",revision:"148d88a6c488e382e3ad3907dc5d57f2"},{url:"/img/rollos/erfal_Rollos_bauarten_besonderheiten_Rollos_mehr.jpg.24279740.jpg",revision:"824e002492ac51143789a98de544527b"},{url:"/img/rollos/erfal_Rollos_bauarten_besonderheiten_Seitenfuhrung.jpg.24279859.jpg",revision:"ecbea65ece453476b993a7da93cb88a5"},{url:"/img/rollos/erfal_Rollos_bauarten_besonderheiten_Softraise.jpg.24281148.jpg",revision:"b6dd182d3ab3a76d597642573b95e2c4"},{url:"/img/rollos/erfal_Rollos_bauarten_besonderheiten_flexilibitat.jpg.24279856.jpg",revision:"b909425a963a742ab73d25626f2a2502"},{url:"/img/rollos/erfal_Rollos_ganz_ihr_geschmack_Farben_Muster.jpg.24282146.jpg",revision:"40c3c645a456227433f07d2574202b43"},{url:"/img/rollos/erfal_Rollos_ganz_ihr_geschmack_Materialien.jpg.24281877.jpg",revision:"7911e3c75663dc488fb8d0d21fe35fcc"},{url:"/img/rollos/erfal_Rollos_ganz_ihr_geschmack_Transparenzen.jpg.24281876.jpg",revision:"823a0682770dfaa1661e35853382632e"},{url:"/img/schacht/IS-Teaser_Insektenschutz-Lichtschacht.jpg.24281721.jpg",revision:"c5f68d0350fabe97291b01d35c9934c6"},{url:"/img/schacht/Insektenschutz_LISA_Bauarten_ELSA_D-0017_20.jpg.24279780.jpg",revision:"19f6f082466c08be5adaf46621591d2b"},{url:"/img/schacht/Insektenschutz_LISA_Bauarten_LISA_D-0022_20.jpg.24279785.jpg",revision:"d67213fc88701941c5a6ffdfd381eff5"},{url:"/img/schacht/Insektenschutz_LISA_Bauarten_RESI_D-0023-20.jpg.24279782.jpg",revision:"cf88140c38495d37589acfea7ce90ad0"},{url:"/img/schacht/Insektenschutz_LISA_Bauarten_Terresa_D-0008-20.jpg.24279781.jpg",revision:"70eaecb9284523c7dcaf61235151ad73"},{url:"/img/transpatec/Insektenschutz_Gewebearten_Ganz_ihr_Geschmack.jpg.24273643.jpg",revision:"fcd93d91836adf27589ce6c71371b9d9"},{url:"/img/transpatec/Neher-Logo_Neu_Standard.png.webp",revision:"3cd0caa711c985cd68ce753a0e1e8b52"},{url:"/img/transpatec/Neher-TTA-B107k.gif",revision:"8c0b179e45c8c6eaa400de3a19850d7e"},{url:"/img/transpatec/Neher-TTA-B108k.gif",revision:"ca520587c0c1deacff42ab198e13fef5"},{url:"/img/transpatec/Neher-Transpatec-Stift.gif",revision:"7b596f195cc60d4d342624b4fc9adb61"},{url:"/img/transpatec/Neher_Amb_Familie_01_Titel.gif",revision:"c50dc4df2167af5d3ba17d52670fcaa2"},{url:"/img/transpatec/Neher_Logo_Transpatec_rgb.png.webp",revision:"64018cdbb2459de1586ff9784ca7a0d2"},{url:"/img/transpatec/Neher_Transpatec_Gewebede-600-338.jpg.webp",revision:"819b0cfb8218c4d7eea89d46e2fbcc32"},{url:"/img/transpatec/Neher_Transpatec_Gewebevgl_Innen-1_600-338.jpg.webp",revision:"104b164a94162fedd38ed5454f97910f"},{url:"/img/transpatec/RT_Innovationsaward_Logo_2021_DE_Gewinner_gold.png.webp",revision:"1e6be753934fad9c2d7a4f2946192c0a"},{url:"/img/transpatec/if_award_2.jpg.webp",revision:"9a16ff9792230e8157b651ee7439c0d9"},{url:"/img/transpatec/innovation-bw-2012.jpg.webp",revision:"10cb0af2e9e8ad197da879e1f4fcf6fa"},{url:"/img/transpatec/innovationspreis-r-t-2012-2.jpg.webp",revision:"232c340c3a289d6014c8524af8943f9e"},{url:"/img/transpatec/pxa_bp_de_pos_rgb-web.png.webp",revision:"13f994ae7a8e16df62e8bbeba121ac5f"},{url:"/img/transpatec/red-dot-design-award-winner-2011-1.jpg.webp",revision:"c559b71bc67b7f9191ec1fec3a5dedaf"},{url:"/img/vorhang/erfal_Flachenvorhange_Bauarten_Besonderheiten_Flexilibitat.jpg.24279878.jpg",revision:"3b5465a7b48f765f3695f73ebfacc8f9"},{url:"/img/vorhang/erfal_Flachenvorhange_Bauarten_Besonderheiten_Individualdruck.jpg.24279881.jpg",revision:"cfd0de3867aead1c268549f0c6ad4aa6"},{url:"/img/vorhang/erfal_Flachenvorhange_Bauarten_Besonderheiten_Paneelwagen.jpg.24279877.jpg",revision:"588244fc4232b1cf7382d41d5e552f60"},{url:"/img/vorhang/erfal_Flachenvorhange_Ganz_ihr_Geschmack_Farben_Muster.jpg.24282261.jpg",revision:"9ed0b9344f1d5dea04708250c7c3f14a"},{url:"/img/vorhang/erfal_Flachenvorhange_Ganz_ihr_Geschmack_Farbwechsel.jpg.24282260.jpg",revision:"febee8215957d734e6183e748f963933"},{url:"/img/vorhang/erfal_Flachenvorhange_Ganz_ihr_Geschmack_Ferbverlauf.jpg.24281898.jpg",revision:"c5a82e2c8d98993b3458f95a907e6ee0"},{url:"/img/vorhang/erfal_Flachenvorhange_Ganz_ihr_Geschmack_Transparenzen.jpg.24281897.jpg",revision:"e7c5c2392b6eeb61af0310c943b195a7"},{url:"/img/vorhang/erfal_Flachenvorhange_Header.jpg.24291953.jpg",revision:"14c03d5622213ecbf4a20ef2f8c0cd73"},{url:"/img/vorhang/erfal_Flachenvorhange_Montagemoglichkeiten_Deckenmontage.jpg.24279872.jpg",revision:"aa67a907dfcf568a21a30efd8c038cb9"},{url:"/img/vorhang/erfal_Flachenvorhange_Montagemoglichkeiten_Wandmontage.jpg.24279871.jpg",revision:"f589983efdd513e91cc14360b52d88f7"},{url:"/img/vorhang/erfal_Flachenvorhange_Produktcharakteristik.jpg.24281883.jpg",revision:"43c8bc3e6114b8315c5948f9a898931b"},{url:"/img/vorhang/erfal_Flachenvorhange_Produktvorteile.jpg.24281884.jpg",revision:"55d75f611fa3f3df9ef0dc8929755d33"},{url:"/img/vorhang/erfal_Flachenvorhange__Bauarten_Besonderheiten_Biegungen.jpg.24280243.jpg",revision:"392dee4dfd64ac63990daf9b7b5bd872"},{url:"/img/vorhang/erfal_Flachenvorhange__Bauarten_Besonderheiten_Flachenvorhange_und_mehr.jpg.24280245.jpg",revision:"b6ffac6ecb6b7e2d20396b87ecb19403"},{url:"/img/vorhang/erfal_Flachenvorhange__Bauarten_Besonderheiten_Raumteiler.jpg.24279879.jpg",revision:"c24cf09f8620943e3b9f5d98e9ef995c"},{url:"/img/vorhang/erfal_Flachenvorhange__Bauarten_Besonderheiten_Segmente.jpg.24280244.jpg",revision:"68c06dd347c294f7a33a5d5075f9bc10"},{url:"/img/vorhang/erfal_Flachenvorhange__Bauarten_Besonderheiten_Zebra_Technik.jpg.24279880.jpg",revision:"70d2a158ba4e6a49853eca76b86b221a"},{url:"/index.html",revision:"df39ca1c77dfc4dddd62feff8bf9ece3"},{url:"/index.php",revision:"9c88fca033746a99f9de26ba1dd05f7f"},{url:"/insectosun-share.png",revision:"22b65f8b3744f9b0837496815f317f6a"},{url:"/js/242.dfb794de.js",revision:null},{url:"/js/382.e6408452.js",revision:null},{url:"/js/63.f87daa31.js",revision:null},{url:"/js/862.8249b5af.js",revision:null},{url:"/js/868.6d8e82aa.js",revision:null},{url:"/js/94.62e76c91.js",revision:null},{url:"/js/993.680c409d.js",revision:null},{url:"/js/app.48cf50bd.js",revision:null},{url:"/js/vendor.714a81ee.js",revision:null},{url:"/logo-text.png",revision:"9b4dc41a036b1610a2411d45d1ff3ff0"},{url:"/logo-transparent.png",revision:"c19a1eb50faa6505d7030c1b72246d06"},{url:"/logo.png",revision:"a5b1b4536d5994748ceaa6141f219842"},{url:"/manifest.json",revision:"3d784cd657b6914e7c125d73026a4642"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
