(function(e){function t(t){for(var a,r,i=t[0],l=t[1],u=t[2],c=0,h=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},s=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6e5fa6f6"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=r(e);var u=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}o[e]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27dc":function(e,t,n){},"283a":function(e,t,n){},"29d8":function(e,t,n){},"43a9":function(e,t,n){},"53ee":function(e,t,n){"use strict";n("29d8")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("dc-header"),t("div",{staticClass:"app-content"},[t("router-view")],1)],1)},s=[];const r=()=>{let e=()=>{let e=document.documentElement.offsetWidth||window.innerWidth;e>=375&&(document.documentElement.style.fontSize="37.5px")};window.addEventListener("resize",e),window.addEventListener("load",e),e()};var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("h1",[e._v("Kitchen")]),e.isMobile?t("div",{staticClass:"mobile-nav"},[t("span",{staticClass:"iconfont el-icon-s-unfold",on:{click:function(t){e.showDrawer=!0}}}),t("mobile-drawer",{attrs:{"show-drawer":e.showDrawer,"nav-list":e.navList,"lang-label":e.langLabel},on:{handleClose:function(t){e.showDrawer=!1},hanldeChangeLang:e.hanlderChangeLang}})],1):t("div",{staticClass:"nav"},[t("ul",{staticClass:"menu"},e._l(e.navList,(function(n,a){return t("li",{key:a,class:e.currentRouteName===n.routeName?"active":""},[t("router-link",{attrs:{to:{path:n.path}}},[e._v(e._s(n.name))])],1)})),0),e._m(0),t("div",{staticClass:"lang-box"},[t("span",{staticClass:"lang-babel"},[e._v(e._s(e.langLabel))]),t("div",{staticClass:"lang-list"},e._l(e.langList,(function(n){return t("div",{key:n.value,staticClass:"lang-item",on:{click:function(t){return e.hanlderChangeLang(n)}}},[e._v(" "+e._s(n.label)+" ")])})),0)])])])},l=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"tel"},[t("span",{staticClass:"iconfont el-icon-phone"}),t("span",[e._v("157xxxx0000")])])}],u=function(){var e=this,t=e._self._c;return t("el-drawer",{attrs:{direction:"rtl",size:"40%",withHeader:!1,modal:!1,visible:e.drawer,"before-close":e.handleClose},on:{"update:visible":function(t){e.drawer=t}}},[t("div",{staticClass:"el-icon-close",on:{click:e.handleClose}}),t("ul",{staticClass:"mobile-nav"},[e._l(e.navList,(function(n){return t("li",{key:n.routeName,class:e.currentRouteName===n.routeName?"active":""},[t("router-link",{attrs:{to:n.path}},[e._v(e._s(n.name))])],1)})),t("li",{staticClass:"li-lang"},[t("span",{staticClass:"lang-c"},[e._v(e._s(e.$t("home.changeLang")))]),t("div",{directives:[{name:"click-out",rawName:"v-click-out",value:e.hideLangListHandler,expression:"hideLangListHandler"}],staticClass:"lang-box"},[t("span",{staticClass:"lang-babel",on:{click:function(t){e.showLangList=!0}}},[e._v(e._s(e.langLabel))]),e.showLangList?t("div",{staticClass:"lang-list"},e._l(e.langList,(function(n){return t("div",{key:n.value,staticClass:"lang-item",class:n.label===e.langLabel?"active":"",on:{click:function(t){return e.hanlderChangeLang(n)}}},[e._v(" "+e._s(n.label)+" ")])})),0):e._e()])])],2)])},c=[],d={name:"MobileDrawer",props:{showDrawer:{type:Boolean,default:!1},navList:{type:Array,default:()=>[]},langLabel:{type:String,default:""}},data(){return{drawer:!0,langList:[{label:"中文",value:"cn"},{label:"English",value:"en"}],showLangList:!1}},computed:{currentRouteName(){return this.$route.name}},watch:{showDrawer:{handler(e){this.drawer=e},immediate:!0}},mounted(){},methods:{handleClose(){this.$emit("handleClose")},hanlderChangeLang(e){this.$emit("hanldeChangeLang",e),this.showLangList=!1},hideLangListHandler(){this.showLangList=!1}}},h=d,f=(n("b9fe"),n("9ff3"),n("2877")),m=Object(f["a"])(h,u,c,!1,null,"668efa52",null),p=m.exports,v=n("2f62");const b=function(){let e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e},g=()=>{let e=Boolean(b());return document.body.clientWidth<820&&(e=!0),e};var w={name:"Header",components:{MobileDrawer:p},data(){return{showDrawer:!1,langList:[{label:"中文",value:"cn"},{label:"English",value:"en"}]}},computed:{...Object(v["c"])(["lang","isMobile"]),langLabel(){return this.langList.find(e=>e.value===this.lang).label||"中文"},navList(){return[{routeName:"home",name:this.$t("home.home"),path:"/"},{routeName:"products",name:this.$t("home.products"),path:"/products"},{routeName:"videos",name:this.$t("home.videos"),path:"/videos"},{routeName:"news",name:this.$t("home.news"),path:"/news"},{routeName:"contact",name:this.$t("home.contact"),path:"/contact"}]},currentRouteName(){return this.$route.name}},created(){},mounted(){this.setIsMobile(g())},methods:{...Object(v["b"])(["setLang","setIsMobile"]),hanlderChangeLang(e){this.$i18n.locale=e.value,sessionStorage.setItem("lang",e.value),this.setLang(e.value)}}},L=w,C=(n("b3e7"),Object(f["a"])(L,i,l,!1,null,"c0a47a7e",null)),_=C.exports,y={name:"App",components:{DcHeader:_},data(){return{}},created(){},mounted(){r()},methods:{}},k=y,O=(n("adf9"),Object(f["a"])(k,o,s,!1,null,null,null)),x=O.exports,j=n("8c4f"),M=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("banner")],1)},N=[],S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"banner"},[t("el-carousel",{attrs:{interval:1e4,height:"300px"}},e._l(3,(function(n){return t("el-carousel-item",{key:n},[t("h3",{staticClass:"medium"},[e._v(e._s(n))])])})),1)],1)},P=[],E={name:"Banner",components:{},data(){return{}},computed:{},created(){},mounted(){},methods:{}},$=E,D=(n("53ee"),Object(f["a"])($,S,P,!1,null,"a0516e14",null)),B=D.exports,I={name:"Home",components:{Banner:B},data(){return{}}},H=I,T=Object(f["a"])(H,M,N,!1,null,"7970e814",null),W=T.exports;a["default"].use(j["a"]);const A=[{path:"/",name:"home",component:W},{path:"/products",name:"products",component:()=>n.e("about").then(n.bind(null,"2325"))},{path:"/videos",name:"videos",component:()=>n.e("about").then(n.bind(null,"71f5"))},{path:"/news",name:"news",component:()=>n.e("about").then(n.bind(null,"1474"))},{path:"/contact",name:"contact",component:()=>n.e("about").then(n.bind(null,"4fe8"))}],R=new j["a"]({base:"",routes:A});var z=R,J=n("0e44");a["default"].use(v["a"]);var G=new v["a"].Store({state:{lang:"cn",isMobile:!1},mutations:{setLang(e,t){e.lang=t},setIsMobile(e,t){e.isMobile=t}},actions:{},modules:{},plugins:[Object(J["a"])({storage:window.sessionStorage,reducer(e){return{lang:e.lang,isMobile:e.isMobile}}})]}),Q=n("5c96");n("0fae");a["default"].use(Q["Dialog"]),a["default"].use(Q["Input"]),a["default"].use(Q["Button"]),a["default"].use(Q["Checkbox"]),a["default"].use(Q["CheckboxGroup"]),a["default"].use(Q["Select"]),a["default"].use(Q["Option"]),a["default"].use(Q["Drawer"]),a["default"].use(Q["Carousel"]),a["default"].use(Q["CarouselItem"]);var U=n("a925"),q={home:{home:"首页",products:"产品",videos:"视频",news:"新闻",contact:"联系我们",changeLang:"语言切换"}},F={home:{home:"Home",products:"Products",videos:"Videos",news:"News",contact:"Contact Us",changeLang:"Language"}};a["default"].use(U["a"]);const K=new U["a"]({locale:sessionStorage.getItem("lang")||"cn",messages:{cn:q,en:F},silentTranslationWarn:!0,globalInjection:!0,fallbackLocale:"cn"});var V=K;a["default"].directive("click-out",{bind(e,t){function n(n){if(e.contains(n.target))return!1;t.expression&&t.value(n)}e.clickOut=n,document.addEventListener("click",n,!0)},unbind(e){document.removeEventListener("click",e.clickOut,!0),delete e.clickOut}});n("27dc");a["default"].config.productionTip=!1,new a["default"]({router:z,store:G,i18n:V,render:e=>e(x)}).$mount("#app")},7762:function(e,t,n){},"9ff3":function(e,t,n){"use strict";n("e80b")},adf9:function(e,t,n){"use strict";n("7762")},b3e7:function(e,t,n){"use strict";n("43a9")},b9fe:function(e,t,n){"use strict";n("283a")},e80b:function(e,t,n){}});
//# sourceMappingURL=app.5b344235.js.map