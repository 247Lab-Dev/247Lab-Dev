(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10ff9c3d"],{"00b4":function(e,t,i){"use strict";i("ac1f");var n=i("23e7"),r=i("da84"),s=i("c65b"),o=i("e330"),a=i("1626"),c=i("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=r.Error,f=o(/./.test);n({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!a(t))return f(this,e);var i=s(t,this,e);if(null!==i&&!c(i))throw new u("RegExp exec method returned something other than an Object or null");return!!i}})},"25f0":function(e,t,i){"use strict";var n=i("e330"),r=i("5e77").PROPER,s=i("6eeb"),o=i("825a"),a=i("3a9b"),c=i("577e"),l=i("d039"),u=i("ad6d"),f="toString",h=RegExp.prototype,g=h[f],T=n(u),p=l((function(){return"/a/b"!=g.call({source:"a",flags:"b"})})),d=r&&g.name!=f;(p||d)&&s(RegExp.prototype,f,(function(){var e=o(this),t=c(e.source),i=e.flags,n=c(void 0===i&&a(h,e)&&!("flags"in h)?T(e):i);return"/"+t+"/"+n}),{unsafe:!0})},"267e":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"PAM-News-box"},[i("div",{staticClass:"box-title"},[e._v("News")]),e._l(e.content_listdata,(function(t){return i("div",{staticClass:"box-info-content"},[i("div",{staticClass:"info-content-title"},[i("span",[e._v(e._s(t.title))])]),i("div",{staticClass:"info-content-des"},[i("p",[e._v(e._s(t.author))]),i("P",[e._v(e._s(t.time))])],1)])}))],2)},r=[],s=(i("53e4"),{data:function(){return{list_dom_element:{title_click_dom:[],content_show_dom:[]},content_listdata:[{title:"This is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer Title",author:"Author Example",time:"2022.03.24"},{title:"This is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer Title",author:"Author Example",time:"2022.03.24"},{title:"This is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer Title",author:"Author Example",time:"2022.03.24"},{title:"This is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer TitleThis is a Longer Title",author:"Author Example",time:"2022.03.24"}]}},mounted:function(){},created:function(){},methods:{}}),o=s,a=(i("9a0e"),i("2877")),c=Object(a["a"])(o,n,r,!1,null,"cd7c088e",null);t["default"]=c.exports},"2c3e":function(e,t,i){var n=i("da84"),r=i("83ab"),s=i("9f7f").MISSED_STICKY,o=i("c6b6"),a=i("9bf2").f,c=i("69f3").get,l=RegExp.prototype,u=n.TypeError;r&&s&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"44e7":function(e,t,i){var n=i("861d"),r=i("c6b6"),s=i("b622"),o=s("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},"4d63":function(e,t,i){var n=i("83ab"),r=i("da84"),s=i("e330"),o=i("94ca"),a=i("7156"),c=i("9112"),l=i("9bf2").f,u=i("241c").f,f=i("3a9b"),h=i("44e7"),g=i("577e"),T=i("ad6d"),p=i("9f7f"),d=i("6eeb"),b=i("d039"),v=i("1a2d"),x=i("69f3").enforce,L=i("2626"),m=i("b622"),E=i("fce3"),_=i("107c"),w=m("match"),y=r.RegExp,R=y.prototype,S=r.SyntaxError,A=s(T),N=s(R.exec),k=s("".charAt),C=s("".replace),I=s("".indexOf),O=s("".slice),P=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,M=/a/g,Y=new y(D)!==D,j=p.MISSED_STICKY,q=p.UNSUPPORTED_Y,J=n&&(!Y||j||E||_||b((function(){return M[w]=!1,y(D)!=D||y(M)==M||"/a/i"!=y(D,"i")}))),K=function(e){for(var t,i=e.length,n=0,r="",s=!1;n<=i;n++)t=k(e,n),"\\"!==t?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),r+=t):r+="[\\s\\S]":r+=t+k(e,++n);return r},U=function(e){for(var t,i=e.length,n=0,r="",s=[],o={},a=!1,c=!1,l=0,u="";n<=i;n++){if(t=k(e,n),"\\"===t)t+=k(e,++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:N(P,O(e,n+1))&&(n+=2,c=!0),r+=t,l++;continue;case">"===t&&c:if(""===u||v(o,u))throw new S("Invalid capture group name");o[u]=!0,s[s.length]=[u,l],c=!1,u="";continue}c?u+=t:r+=t}return[r,s]};if(o("RegExp",J)){for(var $=function(e,t){var i,n,r,s,o,l,u=f(R,this),T=h(e),p=void 0===t,d=[],b=e;if(!u&&T&&p&&e.constructor===$)return e;if((T||f(R,e))&&(e=e.source,p&&(t="flags"in b?b.flags:A(b))),e=void 0===e?"":g(e),t=void 0===t?"":g(t),b=e,E&&"dotAll"in D&&(n=!!t&&I(t,"s")>-1,n&&(t=C(t,/s/g,""))),i=t,j&&"sticky"in D&&(r=!!t&&I(t,"y")>-1,r&&q&&(t=C(t,/y/g,""))),_&&(s=U(e),e=s[0],d=s[1]),o=a(y(e,t),u?this:R,$),(n||r||d.length)&&(l=x(o),n&&(l.dotAll=!0,l.raw=$(K(e),i)),r&&(l.sticky=!0),d.length&&(l.groups=d)),e!==b)try{c(o,"source",""===b?"(?:)":b)}catch(v){}return o},z=function(e){e in $||l($,e,{configurable:!0,get:function(){return y[e]},set:function(t){y[e]=t}})},B=u(y),F=0;B.length>F;)z(B[F++]);R.constructor=$,$.prototype=R,d(r,"RegExp",$)}L("RegExp")},"510d":function(e,t,i){},"53e4":function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"c",(function(){return s})),i.d(t,"b",(function(){return o}));i("ac1f"),i("5319"),i("00b4"),i("4d63"),i("c607"),i("2c3e"),i("25f0");function n(e,t){return t=t||"",0!=t.replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")}function r(e,t){n(e,t)||(e.className=""==e.className?t:e.className+" "+t)}function s(e,t){if(n(e,t)){var i=" "+e.className.replace(/[\t\r\n]/g,"")+" ";while(i.indexOf(" "+t+" ")>=0)i=i.replace(" "+t+" "," ");e.className=i.replace(/^\s+|\s+$/g,"")}}function o(e){for(var t=[],i=e.parentNode.firstChild;i;i=i.nextSibling)1===i.nodeType&&i!==e&&t.push(i);return t}},7156:function(e,t,i){var n=i("1626"),r=i("861d"),s=i("d2bb");e.exports=function(e,t,i){var o,a;return s&&n(o=t.constructor)&&o!==i&&r(a=o.prototype)&&a!==i.prototype&&s(e,a),e}},"9a0e":function(e,t,i){"use strict";i("510d")},c607:function(e,t,i){var n=i("da84"),r=i("83ab"),s=i("fce3"),o=i("c6b6"),a=i("9bf2").f,c=i("69f3").get,l=RegExp.prototype,u=n.TypeError;r&&s&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})}}]);