(()=>{var e={9772:(e,n,t)=>{"use strict";t(702),t(8964);var r=t(1957),l=t(1236),a=t(499),i=t(9835);function s(e,n,t,r,l,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const u=(0,i.aZ)({name:"App",methods:{open(e){e&&window.open(e)}}});var o=t(1639);const d=(0,o.Z)(u,[["render",s]]),c=d;var h=t(3340),g=t(7363);const m=(0,h.h)((()=>{const e=(0,g.WB)();return e}));var b=t(8339);const f=[{path:"/",component:()=>Promise.all([t.e(736),t.e(371)]).then(t.bind(t,1371)),children:[{path:"",name:"home",component:()=>Promise.all([t.e(736),t.e(978)]).then(t.bind(t,9978))},{path:"Impressum",name:"imprint",component:()=>Promise.all([t.e(736),t.e(8)]).then(t.bind(t,8008))},{path:"Insektenschutz",name:"insect",component:()=>Promise.all([t.e(736),t.e(993)]).then(t.bind(t,993))},{path:"Sonnenschutz",name:"sun",component:()=>Promise.all([t.e(736),t.e(868)]).then(t.bind(t,7868))},{path:"Kontakt",name:"contact",component:()=>Promise.all([t.e(736),t.e(63)]).then(t.bind(t,5063))}]},{path:"/:catchAll(.*)*",component:()=>t.e(862).then(t.bind(t,1862))}],p=f,_=(e,n,t)=>e.hash?{el:e.hash}:t||{left:0,top:0},k=(0,h.BC)((function(){const e=b.PO,n=(0,b.p7)({scrollBehavior:_,routes:p,history:e("/")});return n}));async function v(e,n){const t=e(c);t.use(l.Z,n);const r="function"===typeof m?await m({}):m;t.use(r);const i=(0,a.Xl)("function"===typeof k?await k({store:r}):k);return r.use((({store:e})=>{e.router=i})),{app:t,store:r,router:i}}const w={config:{}};var S=t(368);(0,S.z)("/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&t.e(736).then(t.t.bind(t,4848,23));const y="/";async function z({app:e,router:n,store:t},r){let l=!1;const a=e=>{try{return n.resolve(e).href}catch(t){}return Object(e)===e?null:e},i=e=>{if(l=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const n=a(e);null!==n&&(window.location.href=n)},s=window.location.href.replace(window.location.origin,"");for(let o=0;!1===l&&o<r.length;o++)try{await r[o]({app:e,router:n,store:t,ssrContext:null,redirect:i,urlPath:s,publicPath:y})}catch(u){return u&&u.url?void i(u.url):void console.error("[Quasar] boot error:",u)}!0!==l&&(e.use(n),e.mount("#q-app"))}v(r.ri,w).then((e=>Promise.all([Promise.resolve().then(t.bind(t,1292)),Promise.resolve().then(t.bind(t,1569))]).then((n=>{const t=n.map((e=>e.default)).filter((e=>"function"===typeof e));z(e,t)}))))},1569:(e,n,t)=>{"use strict";t.r(n),t.d(n,{api:()=>i,default:()=>s});var r=t(3340),l=t(9981),a=t.n(l);const i=a().create({baseURL:"https://api.example.com"}),s=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=a(),e.config.globalProperties.$api=i}))},1292:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>r});t(702),t(8964);const r=async({app:e,store:n,router:r,Vue:l})=>{const a=t(6095);a.keys().map((e=>[e.replace(/(^.\/)|(\.vue$)/g,""),a(e)])).reduce(((n,[t,r])=>{let l=r.default||r;e.component(l.name,l)}),{})}},2101:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>d});var r=t(9835),l=t(6970);const a={class:"row justify-center"};function i(e,n,t,i,s,u){return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",{class:(0,l.C_)(["container",t.full?"full":""]),style:(0,l.j5)(u.style)},[(0,r.WI)(e.$slots,"default",{},void 0,!0)],6)])}const s={name:"Container",props:{width:{type:String,default:""},full:{type:Boolean,default:!1}},computed:{style(){return this.full?{}:this.width?{"max-width":this.width}:{}}}};var u=t(1639);const o=(0,u.Z)(s,[["render",i],["__scopeId","data-v-1a38c304"]]),d=o},1162:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>k});var r=t(9835),l=t(6970);const a={class:"row q-col-gutter-lg q-mb-md"},i={class:"col-xs-12 col-md-6"},s={class:"col-xs-12 col-md-6"},u={class:"text-h4 q-mt-none q-mb-md title"},o={class:"font-weight-bold"};function d(e,n,t,d,c,h){const g=(0,r.up)("q-carousel-slide"),m=(0,r.up)("q-carousel"),b=(0,r.up)("q-img");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",i,[t.gallery.length?((0,r.wg)(),(0,r.j4)(m,{key:0,animated:"",modelValue:c.slide,"onUpdate:modelValue":n[0]||(n[0]=e=>c.slide=e),navigation:"",infinite:"",autoplay:c.autoplay,arrows:"","transition-prev":"slide-right","transition-next":"slide-left",class:"shadow-10 rounded-borders",style:{height:"557px"}},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.gallery,((e,n)=>((0,r.wg)(),(0,r.j4)(g,{name:n,"img-src":e},null,8,["name","img-src"])))),256))])),_:1},8,["modelValue","autoplay"])):((0,r.wg)(),(0,r.j4)(b,{key:1,src:t.image,class:"shadow-10 rounded-borders"},null,8,["src"]))]),(0,r._)("div",s,[(0,r._)("div",u,[(0,r._)("div",o,(0,l.zw)(t.title),1)]),(0,r.WI)(e.$slots,"default")])])}const c={name:"ProduktInfo",props:{image:{},title:{},gallery:{type:Array,default:[]}},data(){return{slide:1,autoplay:1600}}};var h=t(1639),g=t(960),m=t(1694),b=t(335),f=t(9984),p=t.n(f);const _=(0,h.Z)(c,[["render",d]]),k=_;p()(c,"components",{QCarousel:g.Z,QCarouselSlide:m.Z,QImg:b.Z})},2987:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>b});var r=t(9835),l=t(6970);const a=e=>((0,r.dD)("data-v-812b2660"),e=e(),(0,r.Cn)(),e),i={class:"top_header shadow-8"},s=a((()=>(0,r._)("div",{class:"overlay"},[(0,r._)("div"),(0,r._)("div"),(0,r._)("div")],-1))),u={class:"title"},o={key:0},d={key:1,class:"sub"};function c(e,n,t,a,c,h){return(0,r.wg)(),(0,r.iD)("div",i,[(0,r._)("div",{class:"background",style:(0,l.j5)({backgroundImage:"url("+t.image+")"})},null,4),s,(0,r._)("h1",u,[(0,r.WI)(e.$slots,"default",{},void 0,!0),t.title?((0,r.wg)(),(0,r.iD)("div",o,(0,l.zw)(t.title),1)):(0,r.kq)("",!0),t.sub?((0,r.wg)(),(0,r.iD)("div",d,(0,l.zw)(t.sub),1)):(0,r.kq)("",!0)])])}const h={name:"TopHeader",props:{image:{},title:{},sub:{}}};var g=t(1639);const m=(0,g.Z)(h,[["render",c],["__scopeId","data-v-812b2660"]]),b=m},1826:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>C});var r=t(9835);const l=(0,r.Uk)(" Perfekt angepasst an Ihre Balkon- oder Terassentüre. "),a=(0,r._)("br",null,null,-1),i=(0,r.Uk)(" Nach außen oder innen öffnend, mit Sprosse und Trittschutz-blech. "),s=(0,r._)("br",null,null,-1),u=(0,r._)("br",null,null,-1),o=(0,r.Uk)(" Als langlebiger und robuster Insektenschutz für Balkon- und Terrassentüren eigenen sich hervorragend die Drehrahmen. Dies wirken wie eine zweite fast unsichtbare Tür. Die platzsparenden Profile können auch ohne Bohren oder Schrauben an Aluminium-, Kunststoff- und Holztüren montiert werden. "),d=(0,r._)("br",null,null,-1),c=(0,r._)("br",null,null,-1),h=(0,r.Uk)(" Bedienkomfort bringen ergonomische Griffe, die Magnetband- Verschlussleiste sowie das Trittblech zur sicheren Fußbedienung ohne freie Hand. Bürstendichtungen verschließen auch unebenen Boden gegen kleinste Krabbeltiere. "),g=(0,r.Uk)(" Ein-, zwei oder mehrflügelig; mit und ohne Montagerahmen. "),m=(0,r._)("br",null,null,-1),b=(0,r.Uk)(" Benötigt keinen Schwenkbereich."),f=(0,r._)("br",null,null,-1),p=(0,r._)("br",null,null,-1),_=(0,r.Uk)(" Eine komfortable Alternative zu den Drehrahmentüren bilden die Insektenschutz-Pendeltüren. Auch ohne freie Hand lassen sie sich kinderleicht durch sanften Druck in beide Richtungen bis zu 120 Grad weit öffnen. Das sichere Schließen der Pendeltür wird durch gegenläufige Drehstabfedern und im Profil versteckte Blockmagneten erreicht. Die leise selbstschließende Anlage kann optional auch mit einer Verriegelung von innen, von außen oder beidseitig ausgestattet werden. "),k=(0,r._)("br",null,null,-1),v=(0,r._)("br",null,null,-1),w=(0,r.Uk)(" Pendeltüren lassen sich schnell und einfach ohne fachmännische Unterstützung aushängen. "),S=(0,r.Uk)(" Selbständiges, schnelles und geräuschloses Schließen. "),y=(0,r._)("br",null,null,-1),z=(0,r.Uk)(" Nach innen und außen öffnend. "),j=(0,r._)("br",null,null,-1),D=(0,r._)("br",null,null,-1),P=(0,r.Uk)(" Insektenschutz-Schiebeanlagen eignen sich hervorragend als Ergänzung vorhandener Schiebetüren und anderen großen Öffnungen von bis zu 3 x 3,5 Metern. Durch die platzsparende Schiebetechnik bleibt der gesamte Aufenthaltsbereich nutzbar. Die ein- bis sechsflügeligen Anlagen sind mit einer kinderfreundlichen durchgehenden Griffleiste ausgestattet. Optional ist eine Fußmulde zur Freihandbedienung integrierbar. Mittels Aufklebern oder Sprossen wird ein Durchlaufen verhindert. "),E=(0,r._)("br",null,null,-1),A=(0,r._)("br",null,null,-1),U=(0,r.Uk)(" Die Qualität und Langlebigkeit der Schiebeanlagen zeichnet sich durch die leisen Laufrollen sowie durch sanftes Abbremsen und sicheres Arretieren aus. Zudem sind die robusten Anlagen bei Bedarf äußerst einfach ein- und auszuhängen. ");function W(e,n,t,W,x,T){const I=(0,r.up)("q-tab"),q=(0,r.up)("q-tabs"),L=(0,r.up)("ProduktInfo"),R=(0,r.up)("q-tab-panel"),B=(0,r.up)("q-tab-panels"),O=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(O,{class:"q-pa-md bg-transparent no-shadow"},{default:(0,r.w5)((()=>[(0,r.Wm)(q,{modelValue:x.tab,"onUpdate:modelValue":n[0]||(n[0]=e=>x.tab=e),class:"bg-green-6- q-mb-md ProductTabs","active-bg-color":"grey-4","indicator-color":"green-14",align:"center"},{default:(0,r.w5)((()=>[(0,r.Wm)(I,{"no-caps":"",class:"q-px-lg text-white-",name:"pendel",label:"Pendeltüre"}),(0,r.Wm)(I,{"no-caps":"",class:"q-px-lg text-white-",name:"dreh",label:"Drehtüre"}),(0,r.Wm)(I,{"no-caps":"",class:"q-px-lg text-white-",name:"schieb",label:"Schiebeanlage"})])),_:1},8,["modelValue"]),(0,r.Wm)(B,{modelValue:x.tab,"onUpdate:modelValue":n[1]||(n[1]=e=>x.tab=e),animated:"",class:"bg-transparent",style:{"min-height":"550px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(R,{name:"dreh"},{default:(0,r.w5)((()=>[(0,r.Wm)(L,{title:"Klassisch - Die Drehtüre",image:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Drehrahmen_R-0036.jpg.24280175.jpg"},{default:(0,r.w5)((()=>[l,a,i,s,u,o,d,c,h])),_:1})])),_:1}),(0,r.Wm)(R,{name:"pendel"},{default:(0,r.w5)((()=>[(0,r.Wm)(L,{title:"Flexibel - Die Pendeltüre",image:"/img/insect/erfal_Insektenschutz_Turen_Penselturen_R-206_.jpg.24280177.jpg"},{default:(0,r.w5)((()=>[g,m,b,f,p,_,k,v,w])),_:1})])),_:1}),(0,r.Wm)(R,{name:"schieb"},{default:(0,r.w5)((()=>[(0,r.Wm)(L,{title:"Elegant - Die Schiebeanlage",image:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Schiebeanlagen_R-0001.jpg.24280176.jpg"},{default:(0,r.w5)((()=>[S,y,z,j,D,P,E,A,U])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}const x={name:"DoorProducts",data(){return{tab:"pendel"}}};var T=t(1639),I=t(4458),q=t(8450),L=t(900),R=t(9800),B=t(4106),O=t(9984),Z=t.n(O);const F=(0,T.Z)(x,[["render",W]]),C=F;Z()(x,"components",{QCard:I.Z,QTabs:q.Z,QTab:L.Z,QTabPanels:R.Z,QTabPanel:B.Z})},2701:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>oe});var r=t(9835);const l=(0,r.Uk)(" LiSA steht für Lichtschachtabdeckung. "),a=(0,r._)("br",null,null,-1),i=(0,r._)("br",null,null,-1),s=(0,r.Uk)(" Sie zeichnet sich durch ein elegantes Design und eine sichere Abdichtung aus. Der für Sie maßgefertigte, flache Aluminiumrahmen mit perfekter Rundum-Bürstendichtung, feinmaschigem Edelstahlgitter und Edelstahlverschraubung deckt den vorhandenen Rost lückenlos ab. "),u=(0,r._)("br",null,null,-1),o=(0,r._)("br",null,null,-1),d=(0,r.Uk)(" LiSA wird mit wenigen Handgriffen einfach auf den vorhandenen Kellerrost montiert. Die stolperfreie Konstruktion durch extrem flache Profile ist sehr stabil. Mit Streckmetallgewebe ist LiSA auch als befahrbare Variante auf geeignetem Kellerschacht erhältlich. "),c=(0,r._)("br",null,null,-1),h=(0,r._)("br",null,null,-1),g=(0,r.Uk)(" Das Lüften Ihrer Keller- oder Hobbyräume macht mit einem sauberen Lichtschacht wieder Freude. "),m=(0,r.Uk)(" Perfekte Lichtschacht-abdeckungen."),b=(0,r._)("br",null,null,-1),f=(0,r._)("br",null,null,-1),p=(0,r.Uk)(" Hochwertig, extrem belastbar, unverwüstlich, funktionell. "),_=(0,r._)("br",null,null,-1),k=(0,r._)("br",null,null,-1),v=(0,r.Uk)(" Die filigrane Lösung zur Befestigung auf dem vorhandenen Gitterrost. "),w=(0,r._)("ul",null,[(0,r._)("li",null,"keine Spinnen"),(0,r._)("li",null,"keine Mäuse "),(0,r._)("li",null,"keine Schnecken"),(0,r._)("li",null,"kein Laub")],-1),S=(0,r.Uk)(" Die Flächenbündige Einlege-lösung ohne Stolperkante. "),y=(0,r._)("br",null,null,-1),z=(0,r._)("br",null,null,-1),j=(0,r.Uk)(" ELSA wird als kompletter Ersatz für Ihren vorhandenen Gitterrost in den Lichtschacht montiert. Bei dem begehbaren und extrem witterungsbeständigen Modell aus Edelstahl oder Streckmetall ist der Gitterrost integriert. "),D=(0,r._)("br",null,null,-1),P=(0,r._)("br",null,null,-1),E=(0,r.Uk)(" ELSA ist hoch belastbar, flächenbündig und ebenerdig. Optional erhalten Sie eine integrierte Einbruchsicherung und gleichzeitiger Schnellentriegelung von innen für Fluchtwege. Durch den Einsatz von besonders hochwertigem Edelstahl-Gewebe, extrem stabilen Aluminiumprofilen und einem glasfaserverstärkten Gitterrost hält ELSA selbst extremsten Witterungsbedingungen stand. "),A=(0,r._)("br",null,null,-1),U=(0,r._)("br",null,null,-1),W=(0,r.Uk)(" Zusätzlichen Schutz gegen Einbruch und Diebstahl bieten Sicherungskette und S-Haken. "),x=(0,r.Uk)(" Die eleganten Holzterassen-einleger. "),T=(0,r._)("br",null,null,-1),I=(0,r._)("br",null,null,-1),q=(0,r.Uk)(" Das Sondermodell TERRESA wird hauptsächlich im Holzterrassenbereich eingesetzt und ermöglicht einen schwellenfreien Zugang ins Haus. Der flache, rutschhemmende und elegante Einleger aus Edelstahlgewebe oder Aluminium-Streckmetall dient gleichzeitig als Wasserablauf im Terrassenbereich. So lassen sich auch überbaute Lichtschächte hell und sauber halten. "),L=(0,r._)("br",null,null,-1),R=(0,r._)("br",null,null,-1),B=(0,r.Uk)(' TERRESA passt mit nur 20,5 mm Aufbauhöhe perfekt in fast alle gebräuchlichen Terrassendielen und garantiert Ihnen so auch auf Ihrer Terrasse eine perfekte Lichtschachtabdeckung ohne Stolpergefahr. TERRESA kann als Alternative zur ELSA auch als Abdeckung auf "normalen" Lichtschächten und Terrassen eingesetzt werden. '),O=(0,r._)("br",null,null,-1),Z=(0,r._)("br",null,null,-1),F=(0,r.Uk)(" Der elegante Holzterrasseneinleger lässt das Wasser sofort ins Kiesbett unter der Terrasse ablaufen. "),C=(0,r.Uk)(" RESi steht für regensicher. "),V=(0,r._)("br",null,null,-1),M=(0,r._)("br",null,null,-1),Q=(0,r.Uk)(" RESi bietet Regen- und Insektenschutz mit gleichzeitiger Belüftung. Das transparente, trittsichere und bruchfeste Polycarbonat ist für eine lückenlose und stolperfreie Konstruktion mit dem Rost verschraubt. "),H=(0,r._)("br",null,null,-1),K=(0,r._)("br",null,null,-1),N=(0,r.Uk)(" RESi überzeugt als Belüftungselement mit vorgeschriebenem Strömungsquerschnitt und einfacher Reinigung durch auswechselbares Edelstahlgewebe. "),G=(0,r._)("br",null,null,-1),$=(0,r._)("br",null,null,-1),X=(0,r.Uk)(" Sie eignet sich zur lückenlosen Abdeckung für alle Lichtschächte aus Kunststoff oder Beton. ");function Y(e,n,t,Y,J,ee){const ne=(0,r.up)("q-tab"),te=(0,r.up)("q-tabs"),re=(0,r.up)("ProduktInfo"),le=(0,r.up)("q-tab-panel"),ae=(0,r.up)("q-tab-panels"),ie=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(ie,{class:"q-pa-md bg-transparent no-shadow"},{default:(0,r.w5)((()=>[(0,r.Wm)(te,{modelValue:J.tab,"onUpdate:modelValue":n[0]||(n[0]=e=>J.tab=e),class:"bg-green-6- q-mb-md ProductTabs","active-bg-color":"grey-4","indicator-color":"green-14",align:"center"},{default:(0,r.w5)((()=>[(0,r.Wm)(ne,{"no-caps":"",class:"q-px-lg text-white- bg-transparent",name:"info",icon:"info",xlabel:"Info"}),(0,r.Wm)(ne,{"no-caps":"",class:"q-px-lg text-white-",name:"lisa",label:"LiSa"}),(0,r.Wm)(ne,{"no-caps":"",class:"q-px-lg text-white-",name:"elsa",label:"Elsa"}),(0,r.Wm)(ne,{"no-caps":"",class:"q-px-lg text-white-",name:"terresa",label:"Terresa"}),(0,r.Wm)(ne,{"no-caps":"",class:"q-px-lg text-white-",name:"resi",label:"ReSi"})])),_:1},8,["modelValue"]),(0,r.Wm)(ae,{modelValue:J.tab,"onUpdate:modelValue":n[1]||(n[1]=e=>J.tab=e),animated:"",class:"bg-transparent",style:{"min-height":"550px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(le,{name:"lisa"},{default:(0,r.w5)((()=>[(0,r.Wm)(re,{title:"LiSa",image:"/img/schacht/Insektenschutz_LISA_Bauarten_LISA_D-0022_20.jpg.24279785.jpg"},{default:(0,r.w5)((()=>[l,a,i,s,u,o,d,c,h,g])),_:1})])),_:1}),(0,r.Wm)(le,{name:"info"},{default:(0,r.w5)((()=>[(0,r.Wm)(re,{title:"Nie mehr Lichtschächte reinigen",image:"/img/schacht/IS-Teaser_Insektenschutz-Lichtschacht.jpg.24281721.jpg"},{default:(0,r.w5)((()=>[m,b,f,p,_,k,v,w])),_:1})])),_:1}),(0,r.Wm)(le,{name:"elsa"},{default:(0,r.w5)((()=>[(0,r.Wm)(re,{title:"Elsa",image:"/img/schacht/Insektenschutz_LISA_Bauarten_ELSA_D-0017_20.jpg.24279780.jpg"},{default:(0,r.w5)((()=>[S,y,z,j,D,P,E,A,U,W])),_:1})])),_:1}),(0,r.Wm)(le,{name:"terresa"},{default:(0,r.w5)((()=>[(0,r.Wm)(re,{title:"TERRESA",image:"/img/schacht/Insektenschutz_LISA_Bauarten_Terresa_D-0008-20.jpg.24279781.jpg"},{default:(0,r.w5)((()=>[x,T,I,q,L,R,B,O,Z,F])),_:1})])),_:1}),(0,r.Wm)(le,{name:"resi"},{default:(0,r.w5)((()=>[(0,r.Wm)(re,{title:"ReSi",image:"/img/schacht/Insektenschutz_LISA_Bauarten_RESI_D-0023-20.jpg.24279782.jpg"},{default:(0,r.w5)((()=>[C,V,M,Q,H,K,N,G,$,X])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}const J={name:"SchachtProducts",data(){return{tab:"lisa"}}};var ee=t(1639),ne=t(4458),te=t(8450),re=t(900),le=t(9800),ae=t(4106),ie=t(9984),se=t.n(ie);const ue=(0,ee.Z)(J,[["render",Y]]),oe=ue;se()(J,"components",{QCard:ne.Z,QTabs:te.Z,QTab:re.Z,QTabPanels:le.Z,QTabPanel:ae.Z})},9671:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>B});var r=t(9835);const l=(0,r.Uk)(" Fast unsichtbar, einfach und bequem zu handhaben, für alle Fenster im Haus. "),a=(0,r._)("br",null,null,-1),i=(0,r.Uk)(" Egal ob Holz, Kunststoff oder Aluminium. "),s=(0,r._)("br",null,null,-1),u=(0,r._)("br",null,null,-1),o=(0,r.Uk)(" Egal ob in Holz-, Kunststoff- oder Aluminiumfenstern – Insektenschutzgitter als Spannrahmen sitzen dank der über 100 verschiedenen Einbauvarianten perfekt. Die Montage kann ohne Bohren durch praktische Einhängewinkel aus Edelstahl erfolgen. "),d=(0,r._)("br",null,null,-1),c=(0,r._)("br",null,null,-1),h=(0,r.Uk)(" Das schlichte Design fügt sich harmonisch in das Fenster ein und schützt wirksam vor Stechmücken, Schnaken und Fliegen. Die rundumlaufenden Bürsten zwischen Fenster und Insektenschutzgitter gewährleistet eine insektensichere Abdichtung mit Entwässerungsfunktion. "),g=(0,r.Uk)(" Ohne Aushängen jederzeit nach innen oder außen zu öffnen. "),m=(0,r._)("br",null,null,-1),b=(0,r._)("br",null,null,-1),f=(0,r.Uk)(" Passgenauer Insektenschutz bei unveränderter Nutzbarkeit der Fenster – das bieten die Drehrahmen von erfal. Die geringe Einbautiefe, die ergonomischen Designgriffe und die Wahl der Öffnungsrichtung nach Innen oder Außen lassen bei gleichzeitiger Funktionalität optisch keine Wünsche offen. Die Montage erfolgt auf dem Blendrahmen, in der Lichte des Falzes oder direkt in der Mauerleibung. Hohe Stabilität und wahlweise Schallreduzierung durch integrierte Bürstendämpfung garantieren die Langlebigkeit des Drehrahmens. "),p=(0,r.Uk)(" Perfekt integriert - das Rollo für Fenster und Dachflächenfenster. "),_=(0,r._)("br",null,null,-1),k=(0,r._)("br",null,null,-1),v=(0,r.Uk)(" Die ideale Lösung für alle Fassadenfenster ist das flexibel einsetzbare Insektenschutzrollo. Mal geöffnet, mal geschlossen – immer so, wie Sie es möchten. Einfach herunterziehen und nur noch frische Luft darf in Ihr Zimmer. Wird das Rollo nicht benötigt, verschwindet es in der dezenten Kassette. "),w=(0,r._)("br",null,null,-1),S=(0,r._)("br",null,null,-1),y=(0,r.Uk)(" Für Bedien- und Wartungskomfort sorgen die integrierte Bremse, die abnehmbare Serviceblende zum Nachjustieren sowie die seitlichen Bürstenführungen gegen das Ausfädeln bei Wind. "),z=(0,r._)("br",null,null,-1),j=(0,r._)("br",null,null,-1),D=(0,r.Uk)(" Die Rollos sind zur besonders komfortablen Bedienung auch motorbetrieben erhältlich. ");function P(e,n,t,P,E,A){const U=(0,r.up)("q-tab"),W=(0,r.up)("q-tabs"),x=(0,r.up)("ProduktInfo"),T=(0,r.up)("q-tab-panel"),I=(0,r.up)("q-tab-panels"),q=(0,r.up)("q-card");return(0,r.wg)(),(0,r.j4)(q,{class:"q-pa-md bg-transparent no-shadow"},{default:(0,r.w5)((()=>[(0,r.Wm)(W,{modelValue:E.tab,"onUpdate:modelValue":n[0]||(n[0]=e=>E.tab=e),class:"bg-green-6- q-mb-md ProductTabs","active-bg-color":"grey-4","indicator-color":"green-14",align:"center"},{default:(0,r.w5)((()=>[(0,r.Wm)(U,{"no-caps":"",class:"q-px-lg text-white-",name:"spann",label:"Spannrahmen"}),(0,r.Wm)(U,{"no-caps":"",class:"q-px-lg text-white-",name:"dreh",label:"Drehfenster"}),(0,r.Wm)(U,{"no-caps":"",class:"q-px-lg text-white-",name:"rollo",label:"Rollo"})])),_:1},8,["modelValue"]),(0,r.Wm)(I,{modelValue:E.tab,"onUpdate:modelValue":n[1]||(n[1]=e=>E.tab=e),animated:"",class:"bg-transparent",style:{"min-height":"550px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(T,{name:"spann"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{title:"Universell - Der Spannrahmen",image:"/img/fenster/erfal_Insektenschutz_Fenster_Bauarten_Sonderformen.jpg.24280127.jpg"},{default:(0,r.w5)((()=>[l,a,i,s,u,o,d,c,h])),_:1})])),_:1}),(0,r.Wm)(T,{name:"dreh"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{title:"Alternativ - Das Drehfenster",image:"/img/fenster/Insektenschutz_Fenster_Bauarten_Besonderheiten_Drehrahmen.jpg.24280125.jpg"},{default:(0,r.w5)((()=>[g,m,b,f])),_:1})])),_:1}),(0,r.Wm)(T,{name:"rollo"},{default:(0,r.w5)((()=>[(0,r.Wm)(x,{title:"Innovativ - Das Rollo",gallery:E.rolloGallery,image:"/img/insect/erfal_Insektenschutz_Turen_Bauarten_Schiebeanlagen_R-0001.jpg.24280176.jpg"},{default:(0,r.w5)((()=>[p,_,k,v,w,S,y,z,j,D])),_:1},8,["gallery"])])),_:1})])),_:1},8,["modelValue"])])),_:1})}const E={name:"WindowProducts",data(){return{tab:"spann",rolloGallery:["/img/rollos/erfal_Rollos_bauarteb_besonderheiten_Dachfenster.jpg.24279855.jpg","/img/rollos/erfal_Rollos_bauarten_besonderheiten_flexilibitat.jpg.24279856.jpg","/img/rollos/erfal_Rollos_bauarten_besonderheiten_Kindersicherheit.jpg.24279858.jpg","/img/rollos/erfal_Rollos_bauarten_besonderheiten_Massanfertigung.jpg.24279854.jpg","/img/rollos/erfal_Rollos_bauarten_besonderheiten_Rollos_mehr.jpg.24279740.jpg","/img/rollos/erfal_Rollos_bauarten_besonderheiten_Softraise.jpg.24281148.jpg","/img/rollos/erfal_Rollos_ganz_ihr_geschmack_Farben_Muster.jpg.24282146.jpg","/img/rollos/erfal_Rollos_ganz_ihr_geschmack_Transparenzen.jpg.24281876.jpg","/img/rollos/erfal_Rollos_Montagemoglichkeit_Fensterrahmen.jpg.24281867.jpg","/img/rollos/erfal_Rollos_Montagemoglichkeit_vor_Fenster.jpg.24281866.jpg"]}}};var A=t(1639),U=t(4458),W=t(8450),x=t(900),T=t(9800),I=t(4106),q=t(9984),L=t.n(q);const R=(0,A.Z)(E,[["render",P]]),B=R;L()(E,"components",{QCard:U.Z,QTabs:W.Z,QTab:x.Z,QTabPanels:T.Z,QTabPanel:I.Z})},6095:(e,n,t)=>{var r={"./helper/Container.vue":2101,"./helper/ProduktInfo.vue":1162,"./helper/TopHeader.vue":2987,"./products/DoorProducts.vue":1826,"./products/SchachtProducts.vue":2701,"./products/WindowProducts.vue":9671};function l(e){var n=a(e);return t(n)}function a(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=a,e.exports=l,l.id=6095}},n={};function t(r){var l=n[r];if(void 0!==l)return l.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,r,l,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,l,a]=e[d],s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](r[u])))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var o=l();void 0!==o&&(n=o)}}return n}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,l,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{var e,n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(r,l){if(1&l&&(r=this(r)),8&l)return r;if("object"===typeof r&&r){if(4&l&&r.__esModule)return r;if(16&l&&"function"===typeof r.then)return r}var a=Object.create(null);t.r(a);var i={};e=e||[null,n({}),n([]),n(n)];for(var s=2&l&&r;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>r[e]));return i["default"]=()=>r,t.d(a,i),a}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+e+"."+{8:"8f9cb5df",63:"a2fbb45f",371:"95443052",862:"2662f341",868:"65c57662",978:"8a2d16a9",993:"14e32723"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"36ab6abf",371:"0018ca40",736:"cfce130c"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="insectosun:";t.l=(r,l,a,i)=>{if(e[r])e[r].push(l);else{var s,u;if(void 0!==a)for(var o=document.getElementsByTagName("script"),d=0;d<o.length;d++){var c=o[d];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==n+a){s=c;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+a),s.src=r),e[r]=[l];var h=(n,t)=>{s.onerror=s.onload=null,clearTimeout(g);var l=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),l&&l.forEach((e=>e(t))),n)return n(t)},g=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/"})(),(()=>{var e=(e,n,t,r)=>{var l=document.createElement("link");l.rel="stylesheet",l.type="text/css";var a=a=>{if(l.onerror=l.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,l.parentNode.removeChild(l),r(u)}};return l.onerror=l.onload=a,l.href=n,document.head.appendChild(l),l},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var l=t[r],a=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(a===e||a===n))return l}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){l=i[r],a=l.getAttribute("data-href");if(a===e||a===n)return l}},r=r=>new Promise(((l,a)=>{var i=t.miniCssF(r),s=t.p+i;if(n(i,s))return l();e(r,s,l,a)})),l={143:0};t.f.miniCss=(e,n)=>{var t={371:1};l[e]?n.push(l[e]):0!==l[e]&&t[e]&&n.push(l[e]=r(e).then((()=>{l[e]=0}),(n=>{throw delete l[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var l=t.o(e,n)?e[n]:void 0;if(0!==l)if(l)r.push(l[2]);else{var a=new Promise(((t,r)=>l=e[n]=[t,r]));r.push(l[2]=a);var i=t.p+t.u(n),s=new Error,u=r=>{if(t.o(e,n)&&(l=e[n],0!==l&&(e[n]=void 0),l)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,l[1](s)}};t.l(i,u,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var l,a,[i,s,u]=r,o=0;if(i.some((n=>0!==e[n]))){for(l in s)t.o(s,l)&&(t.m[l]=s[l]);if(u)var d=u(t)}for(n&&n(r);o<i.length;o++)a=i[o],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},r=globalThis["webpackChunkinsectosun"]=globalThis["webpackChunkinsectosun"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(9772)));r=t.O(r)})();