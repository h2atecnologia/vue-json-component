(function(e){function t(t){for(var r,a,i=t[0],l=t[1],u=t[2],p=0,d=[];p<i.length;p++)a=i[p],o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="http://tylerkrupicka.com/vue-json-component/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;s.push(["7309","chunk-vendors"]),n()})({"58c8":function(e,t,n){},"5b93":function(e,t,n){},7309:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("json-view",{attrs:{data:e.data,rootKey:"view",maxDepth:1,styles:{key:"#0977e6"}},on:{selected:e.itemSelected}}),n("h5",[e._v("Events")]),e._l(e.events,function(t,r){return n("div",{key:r},[e._v(e._s(t))])})],2)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"json-view"}},[n("json-view-item",{attrs:{id:"root-item",data:e.parsed,maxDepth:e.maxDepth,styles:e.customStyles,canSelect:e.hasSelectedListener},on:{selected:e.itemSelected}})],1)},i=[],l=n("9ab4"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"json-view-item"},["object"===e.data.type||"array"===e.data.type?n("div",[n("div",{staticClass:"data-key",style:e.keyColor,on:{click:function(t){return t.stopPropagation(),e.toggleOpen(t)}}},[n("div",{class:e.classes,style:e.arrowStyles}),e._v("\n      "+e._s(e.data.key)+":\n      "),n("span",{staticClass:"properties"},[e._v(" "+e._s(e.lengthString))])]),e._l(e.data.children,function(t){return n("json-view-item",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],key:e.getKey(t),attrs:{data:t,maxDepth:e.maxDepth,styles:e.styles,canSelect:e.canSelect},on:{selected:e.bubbleSelected}})})],2):e._e(),"value"===e.data.type?n("div",{class:e.valueClasses,on:{click:function(t){return e.clickEvent(e.data)}}},[n("span",{style:e.valueKeyColor},[e._v(" "+e._s(e.data.key)+": ")]),n("span",{style:e.getValueStyle(e.data.value)},[e._v("\n      "+e._s(JSON.stringify(e.data.value))+"\n    ")])]):e._e()])},c=[];function p(e){return p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var d=r["a"].extend({name:"json-view-item",data:function(){return{open:this.data.depth<this.maxDepth}},props:{data:{required:!0,type:Object},maxDepth:{type:Number,required:!1,default:1},styles:{type:Object,required:!0},canSelect:{type:Boolean,required:!1,default:!1}},methods:{toggleOpen:function(){this.open=!this.open},clickEvent:function(e){this.$emit("selected",{key:e.key,value:e.value,path:e.path})},bubbleSelected:function(e){this.$emit("selected",e)},getKey:function(e){return isNaN(e.key)?'"'+e.key+'":':e.key+":"},getValueStyle:function(e){var t=p(e);switch(t){case"string":return{color:this.styles.string};case"number":return{color:this.styles.number};case"boolean":return{color:this.styles.boolean};case"object":return{color:this.styles.null};default:return{color:this.styles.valueKeyColor}}}},computed:{classes:function(){return{"chevron-arrow":!0,opened:this.open}},valueClasses:function(){return{"value-key":!0,"can-select":this.canSelect}},arrowStyles:function(){return{width:this.styles.arrowSize,height:this.styles.arrowSize}},lengthString:function(){return"array"===this.data.type?1===this.data.length?this.data.length+" element":this.data.length+" elements":1===this.data.length?this.data.length+" property":this.data.length+" properties"},keyColor:function(){return{color:this.styles.key}},valueKeyColor:function(){return{color:this.styles.valueKey}}}}),y=d,h=(n("dadd"),n("2877")),f=Object(h["a"])(y,u,c,!1,null,"3443974f",null),v=f.exports;function b(e){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}var m=r["a"].extend({name:"json-view",props:{data:{required:!0,type:Object},rootKey:{type:String,required:!1,default:"root"},maxDepth:{type:Number,required:!1,default:1},styles:{type:Object,required:!1}},components:{"json-view-item":v},methods:{build:function(e,t,n,r,o){if(this.isObject(t)){for(var s=[],a=0,i=Object.entries(t);a<i.length;a++){var l=i[a],u=l[0],c=l[1];s.push(this.build(u,c,n+1,o?""+r+e+".":""+r,!0))}return{key:e,type:"object",depth:n,path:r,length:s.length,children:s}}if(this.isArray(t)){s=[];for(var p=0;p<t.length;p++)s.push(this.build(p.toString(),t[p],n+1,o?""+r+e+"["+p+"].":""+r,!1));return{key:e,type:"array",depth:n,path:r,length:s.length,children:s}}return{key:e,type:"value",path:o?r+e:r.slice(0,-1),depth:n,value:t}},isObject:function(e){return"object"===b(e)&&null!==e&&!this.isArray(e)},isArray:function(e){return Array.isArray(e)},itemSelected:function(e){this.$emit("selected",e)}},computed:{parsed:function(){return this.build(this.rootKey,l["a"]({},this.data),0,"",!0)},customStyles:function(){var e={key:"#002b36",valueKey:"#073642",string:"#268bd2",number:"#2aa198",boolean:"#cb4b16",null:"#6c71c4",arrowSize:"6px"};return Object.assign(e,this.styles)},hasSelectedListener:function(){return Boolean(this.$listeners&&this.$listeners.selected)}}}),g=m,S=(n("741d"),Object(h["a"])(g,a,i,!1,null,null,null)),j=S.exports,w=r["a"].extend({data:function(){return{events:[]}},components:{"json-view":j},methods:{itemSelected:function(e){this.events.push("Selected: "+e.path+" with value "+e.value)}},computed:{data:function(){var e={first:"level",works:!0,number:100,missing:null,list:["fun",{test:{passed:!0}}],object:{working:"properly"}};return e}}}),k=w,_=(n("a834"),Object(h["a"])(k,o,s,!1,null,null,null)),O=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#app")},"741d":function(e,t,n){"use strict";var r=n("c29e"),o=n.n(r);o.a},a834:function(e,t,n){"use strict";var r=n("5b93"),o=n.n(r);o.a},c29e:function(e,t,n){},dadd:function(e,t,n){"use strict";var r=n("58c8"),o=n.n(r);o.a}});
//# sourceMappingURL=app.11bc93cb.js.map