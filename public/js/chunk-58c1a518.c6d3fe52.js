(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58c1a518"],{"0b42":function(t,e,n){var i=n("da84"),o=n("e8b5"),s=n("68ee"),a=n("861d"),r=n("b622"),l=r("species"),c=i.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,s(e)&&(e===c||o(e.prototype))?e=void 0:a(e)&&(e=e[l],null===e&&(e=void 0))),void 0===e?c:e}},"14cb":function(t,e,n){},"1dde":function(t,e,n){var i=n("d039"),o=n("b622"),s=n("2d00"),a=o("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"28d2":function(t,e,n){"use strict";n("a58c")},"308a":function(t,e,n){"use strict";n("fc0a")},"3cd8":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",attrs:{id:"pc_home"}},[n("div",{staticClass:"left-main"},[t.$store.state.topsidebar_state.is_show?n("PAM_topbar"):t._e(),n("transition",{attrs:{name:"transitionRouter",node:"out-in"}},[n("router-view")],1)],1),n("div",{class:{"right-sidebar":t.right_sidebar_class,"right-sidebar—small-screen":!t.right_sidebar_class}},[n("PAM_sidebar")],1)])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"PAM_sidebar"}},[n("div",{staticClass:"sidebar-rollcontent",attrs:{id:"sidebar_content_box"}},[n("div",{staticClass:"PAM-clickmenu-box"},[n("div",{staticClass:"PAM-clickmenu",attrs:{id:"PAM-clickmenu"},on:{click:t.menu_click}},[n("div",{staticClass:"clickmenu-line"}),n("div",{staticClass:"clickmenu-line"}),n("div",{staticClass:"clickmenu-line"})])]),n("PAM_sidebar_content",{staticClass:"PAM-sidebar-content"}),t._m(0)],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-rollcontent-box",attrs:{id:"sidebar_content"}},[n("span",[t._v("周二至周日 9:00—17:00 • Pingshan Art Museum, Huide Road, Pingshan District, Shenzhen, China • 周一闭馆（国家法定假日除外）")])])}],r=(n("4de4"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.PAMMenuConent,attrs:{id:"PAM_menu_content"}},[n("div",{staticClass:"router_menu"},[n("p",{on:{click:t.change_language}},[t._v(" "+t._s(t.$t("content_menu.menu.language")))]),n("p",[n("router-link",{attrs:{to:"welcome"}},[t._v(t._s(t.$t("content_menu.menu.home")))])],1),n("p",[n("router-link",{attrs:{to:"pageExhibitionsOne"}},[t._v(t._s(t.$t("content_menu.menu.exhibitions"))+" ")])],1),n("p",[n("router-link",{attrs:{to:"pagePublicProgramOne"}},[t._v(t._s(t.$t("content_menu.menu.public_program")))])],1),n("p",[n("router-link",{attrs:{to:"News"}},[t._v(t._s(t.$t("content_menu.menu.News")))])],1),n("p",[n("router-link",{attrs:{to:"pageVisit"}},[t._v(t._s(t.$t("content_menu.menu.visit")))])],1),n("p",[n("router-link",{attrs:{to:"pageDigitalPAM"}},[t._v(t._s(t.$t("content_menu.menu.digital_PAM")))])],1),n("p",[n("router-link",{attrs:{to:"pageCollectionRresearch"}},[t._v(t._s(t.$t("content_menu.menu.collection_and_research")))])],1),n("p",[n("router-link",{attrs:{to:"pagePAMembers"}},[t._v(t._s(t.$t("content_menu.menu.PAMembers")))])],1),n("p",[n("router-link",{attrs:{to:"pageAbout"}},[t._v(t._s(t.$t("content_menu.menu.about")))])],1)]),n("div",{staticClass:"exhibitons-box"},[t._l(t.exhibitionsData.itemData,(function(e){return n("div",{staticClass:"exhibitons-box-item"},[n("p",{staticClass:"box-item-type"},[t._v(t._s(e.type))]),n("p",{staticClass:"box-item-title"},[t._v(t._s(e.title))]),n("p",{staticClass:"box-item-position"},[t._v(t._s(e.position))])])})),n("div",{staticClass:"exhibitons-box-more"},[t._v(" View all exhibitions ")])],2),n("div",{staticClass:"exhibitons-time-box"},[t._m(0),n("div",{staticClass:"time-box-item"},[n("p",[t._v(t._s(t.exhibitionsData.timeData))])])])])}),l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"time-box-icon"},[i("img",{attrs:{src:n("5a70"),alt:""}})])}],c={name:"PAM_sidebar_content",data:function(){return{PAMMenuConent:"PAM-menu-content-backdrop-filter",exhibitionsData:{itemData:[{type:"EXHIBITON",title:"Nine-Tiered Pagoda: Spatial and Visual Magic",position:"Pingshan Art Museum, Huide Road"},{type:"EXHIBITON",title:"Beyond Social Text: Duo Solo Exhibition of Li Mingchang and Zhang Jinhui.",position:"Pingshan Art Museum (Park Annexe)"}],timeData:"Tuesday—Sunday 9:00—17:00\n                        Admission stops at 16:30\n                        The museum is closed on Mondays"}}},mounted:function(){this.init()},computed:{current_client:function(){return this.$store.state.current_client}},methods:{init:function(){document.head.style.filter="blur(5px)";var t="blur(5px)"==window.getComputedStyle(document.head).filter;document.head.style["backdrop-filter"]="blur(5px)";var e="blur(5px)"==window.getComputedStyle(document.head)["backdrop-filter"];e?t||(this.PAMMenuConent="PAM-menu-content-background"):this.PAMMenuConent="PAM-menu-content-filter"},change_language:function(){var t=this.$store.state.local_language;"CN"===t?this.$store.commit("change_language","EN"):this.$store.commit("change_language","CN"),"CN"==this.$i18n.locale?this.$i18n.locale="EN":this.$i18n.locale="CN",localStorage.setItem("languageSet",this.$store.state.local_language)}}},u=c,d=(n("28d2"),n("2877")),m=Object(d["a"])(u,r,l,!1,null,"791a005e",null),_=m.exports,p={name:"PAM_sidebar",components:{PAM_sidebar_content:_},data:function(){return{rolltext_positionset:0,rolltext_timeset:null}},created:function(){},mounted:function(){this.text_roll()},methods:{isDiv:function(t){document.getElementById("welcome_imgbox")&&(document.getElementById("welcome_imgbox").style.filter="blur("+t+"px)")},menu_click:function(){var t=document.getElementById("PAM_menu_content"),e=document.getElementById("PAM-clickmenu");0===t.offsetWidth?(t.style.width="1389px",e.style.transform="rotate(90deg)",this.isDiv(5)):(t.style.width=0,e.style.transform="rotate(0deg)",this.isDiv(0))},text_roll:function(){var t=this,e=document.getElementById("sidebar_content"),n=document.createElement("span"),i=document.createTextNode(e.innerText);n.appendChild(i),e.appendChild(n),n.style.paddingTop="100px",this.looptext_setinterval(e,n,50),e.onmouseover=function(){clearInterval(t.rolltext_timeset)},e.onmouseout=function(){t.looptext_setinterval(e,n,50)}},looptext_setinterval:function(t,e,n){var i=this;this.rolltext_timeset=setInterval((function(){t.scrollTop>=e.offsetHeight?(i.rolltext_positionset=0,t.scrollTop=i.rolltext_positionset):(i.rolltext_positionset++,t.scrollTop=i.rolltext_positionset)}),n)}}},h=p,f=(n("4906"),Object(d["a"])(h,s,a,!1,null,"36132432",null)),g=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-box"},[t.$store.state.topsidebar_state.isShow_back?n("div",{staticClass:"back",attrs:{id:"top_back"}},[n("span",{on:{click:t.back}},[t._v("Back")])]):t._e(),t._m(0)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-rollbox",attrs:{id:"top_rollbox"}},[n("span",{attrs:{id:"top_rollbox_content"}},[t._v("10.11.21 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.")])])}],x={name:"PAM_topbar",data:function(){return{rolltext_positionset:0,rolltext_timeset:null}},mounted:function(){this.text_roll()},computed:{},watch:{},methods:{back:function(){this.$router.go(-1)},text_roll:function(){var t=this,e=document.getElementById("top_rollbox"),n=document.createElement("span"),i=document.createTextNode(e.innerText);n.appendChild(i),e.appendChild(n),n.style.paddingTop="100px",this.looptext_setinterval(e,n,50),e.onmouseover=function(){clearInterval(t.rolltext_timeset)},e.onmouseout=function(){t.looptext_setinterval(e,n,50)}},looptext_setinterval:function(t,e,n){var i=this;this.rolltext_timeset=setInterval((function(){t.scrollLeft>=e.offsetWidth?(i.rolltext_positionset=0,t.scrollLeft=i.rolltext_positionset):(i.rolltext_positionset++,t.scrollLeft=i.rolltext_positionset)}),n)}}},A=x,C=(n("308a"),Object(d["a"])(A,v,b,!1,null,"c4399166",null)),k=C.exports,y={name:"Home",components:{PAM_sidebar:g,PAM_sidebar_content:_,PAM_topbar:k},mounted:function(){window.addEventListener("resize",this.resize_handle),this.init()},data:function(){return{right_sidebar_class:!0,Home_id_dom_width:null}},methods:{init:function(){this.Home_id_dom_width=document.getElementById("pc_home").offsetWidth,this.Home_id_dom_width<1440?this.right_sidebar_class=!1:this.right_sidebar_class=!0},resize_handle:function(){var t=document.getElementById("pc_home").offsetWidth;this.right_sidebar_class=1440==t},router_change:function(t){var e=document.getElementById("PAM_menu_content"),n=document.getElementById("PAM-clickmenu");e.style.width=0,n.style.transform="rotate(0deg)"}},watch:{$route:{handler:function(t){this.router_change(t)}}}},E=y,P=(n("dff3"),Object(d["a"])(E,i,o,!1,null,"48f09842",null));e["default"]=P.exports},4906:function(t,e,n){"use strict";n("6b2a")},"4de4":function(t,e,n){"use strict";var i=n("23e7"),o=n("b727").filter,s=n("1dde"),a=s("filter");i({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a70":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABgCAYAAAD/yovmAAAAAXNSR0IArs4c6QAAAyFJREFUeJzt3bFOFFEUh/FzZtd+K0hsGKJou74B1hYCGluhI3EIvoH4BhiIoYMeYXkDXmE7il0illqthhgT4h4r2uUOzp9h4PvVk5mz5Etucnfn4sXwMOyuifi4Pfdqo+4x7rOs7gFwNxEWJAgLEoQFCcKCBGFBgrAgQViQICxItEtcOzLzvmySJDFf7/ORqkRY3t9+vPhcN8pkqye9vP3Avtb1fJTDUggJwoIEYUGCsCBBWJAgLEgQFiQICxKEBYkyX+kkK4ZfFiy8mzTA+a/NzWcro0oHyPzl2mlvptJ7ohRJWDHOFjyztynXXkxP7ZpZtWGFdcMiKWxosBRCgrAgQViQICxIEBYkCAsShAUJwoIEYUFCsvN+yd3OLjKf+ALGzsMX3yp/sOh8rNSzxFI+96X233hvZuvudrb1aGn2vwYUK4a949Q3paRhmZntzC6eqZ9xG6V+7mJwMDJ39Tg3jqUQEoQFCcKCBGFBgrAgQViQICxIEBYk5BukxWC/kjOtPMZ5WNpGons2k/rc9vl5v/KXOa7pqpnLzJr6+ccRo89P3lR+7pk0rAjLzVvHldyrxOZ0WCybt5ZTrr2Ynsqt6pc5riHlb5U66+pJLzePpL97K/M9M1tJmzIdSyEkCAsShAUJwoIEYUGCsCBBWJAgLEgQFiTkX+lUJqzvEZ8quVXmXTNbr+JeN8l//9lcO+1dufMeYZ2bmGeS5oTlPtqaW9qr4lbFYH/evNW4sMx8ISLpRaHasRRCgrAgQViQICxIEBYkCAsShAUJwoIEYUGiOTvvJRSDgw1z/1DX8yMsfzc8TPvH6G4dq3EzPSKWi+Fh0osnVmLQOxnWbeBmedKFzfiGpjSWQkgQFiQICxKEBQnCggRhQYKwIEFYkEjfII3opJ915TO17vyNo+/tLOn38e3vP36qx7mP0sNy65qlnnVV73by9tPXR2Z2VOsQ9xxLISQICxKEBQnCggRhQYKwIEFYkCAsSBAWJBr0m/forp32dmudoCFHCN0GDQrLOhGR+DYJ6sZSCAnCggRhQYKwIEFYkCAsSBAWJAgLEoQFiX+clq8PB8qdjgAAAABJRU5ErkJggg=="},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"6b2a":function(t,e,n){},a58c:function(t,e,n){},b727:function(t,e,n){var i=n("0366"),o=n("e330"),s=n("44ad"),a=n("7b0b"),r=n("07fa"),l=n("65f0"),c=o([].push),u=function(t){var e=1==t,n=2==t,o=3==t,u=4==t,d=6==t,m=7==t,_=5==t||d;return function(p,h,f,g){for(var v,b,x=a(p),A=s(x),C=i(h,f),k=r(A),y=0,E=g||l,P=e?E(p,k):n||m?E(p,0):void 0;k>y;y++)if((_||y in A)&&(v=A[y],b=C(v,y,x),t))if(e)P[y]=b;else if(b)switch(t){case 3:return!0;case 5:return v;case 6:return y;case 2:c(P,v)}else switch(t){case 4:return!1;case 7:c(P,v)}return d?-1:o||u?u:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},dff3:function(t,e,n){"use strict";n("14cb")},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},fc0a:function(t,e,n){}}]);