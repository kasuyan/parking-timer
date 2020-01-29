(function(e){function t(t){for(var i,a,c=t[0],o=t[1],l=t[2],d=0,h=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);u&&u(t);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),r=n.n(i);r.a},"433b":function(e,t,n){},4986:function(e,t,n){},4994:function(e,t,n){"use strict";var i=n("9fcf"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("ParkingTimer")]),n("Main")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Set parking start time")]),n("Select",{attrs:{items:e.houres,selected:e.selectedHoures,disabled:e.isStarted},on:{onChange:e.setHoure}}),n("b",[e._v(":")]),n("Select",{attrs:{items:e.minutes,selected:e.selectedMinute,disabled:e.isStarted},on:{onChange:e.setMinute}}),n("h2",[e._v("Set price")]),n("p",[e._v("price / time")]),n("InputNumber",{attrs:{value:e.selectedPrice,disabled:e.isStarted},on:{onInput:e.setPrice}}),n("b",[e._v("/")]),n("InputNumber",{attrs:{value:e.selectedPerTime,disabled:e.isStarted},on:{onInput:e.setPerTime}}),n("Select",{attrs:{items:e.perType,disabled:e.isStarted},on:{onChange:e.setPricePreType}}),n("h2",[e._v("Ready")]),n("div",[n("Button",{on:{onClick:e.toggleIsStarted}},[e._v(e._s(e.isStarted?"STOP":"START"))]),n("Button",{attrs:{disabled:e.isStarted},on:{onClick:e.initData}},[e._v("RESET")])],1),n("h2",[e._v("Results")]),n("dl",[n("dt",[e._v("Parking Time:")]),n("dd",[e._v(e._s(e.totalParkingTime))]),n("dt",[e._v("Total Price:")]),n("dd",[e._v(e._s(e.totalPrice))])])],1)},c=[],o=(n("99af"),n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("select",{on:{change:e.changeHandler}},e._l(e.items,(function(t){return n("option",{key:t,domProps:{selected:e.selected==t}},[e._v(e._s(t))])})),0)},u=[],d={name:"Select",props:["items","selected"],methods:{changeHandler:function(e){this.$emit("onChange",e.target.value)}}},h=d,f=(n("4994"),n("2877")),p=Object(f["a"])(h,l,u,!1,null,"7a472358",null),m=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{on:{click:e.clickHandler}},[e._t("default")],2)},T=[],P={name:"Button",methods:{clickHandler:function(){this.$emit("onClick")}}},g=P,S=(n("e4f0"),Object(f["a"])(g,v,T,!1,null,"031113bd",null)),b=S.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{attrs:{type:"number"},on:{input:e.inputHandler}})},y=[],H={name:"InputNumber",methods:{inputHandler:function(){this.$emit("onInput")}}},M=H,k=(n("daaf"),Object(f["a"])(M,_,y,!1,null,"7b1bec41",null)),O=k.exports,w=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24],I=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59],x=n("5a0c"),j=n.n(x),$=n("a002"),D=n.n($),R=D.a.createInstance({driver:D.a.LOCALSTORAGE,name:"ParkingTimer",storeName:"saveData",version:1}),C={name:"Main",data:function(){return{houres:w,selectedHoures:0,minutes:I,selectedMinute:0,selectedPrice:100,selectedPerTime:1,perType:["H","M"],selectedPerType:"H",isStarted:!1,timer:null,startedTime:0,endedTime:0,totalParkingTime:"00:00:00",totalPrice:0}},components:{Select:m,Button:b,InputNumber:O},created:function(){var e=this;this.getSaveData().then((function(){e.isStarted?e.startTimer():(e.selectedHoures=j()().$H,e.selectedMinute=j()().$m)}))},methods:{setSaveData:function(){R.setItem("saveData",{selectedHoures:this.selectedHoures,selectedMinute:this.selectedMinute,selectedPrice:this.selectedPrice,selectedPerTime:this.selectedPerTime,selectedPerType:this.selectedPerType,isStarted:this.isStarted,startedTime:this.startedTime})},getSaveData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R.getItem("saveData").then((function(e){if(!e)return null;t.selectedHoures=e.selectedHoures,t.selectedMinute=e.selectedMinute,t.selectedPrice=e.selectedPrice,t.selectedPerTime=e.selectedPerTime,t.selectedPerType=e.selectedPerType,t.isStarted=e.isStarted,t.startedTime=e.startedTime}));case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),clearSaveData:function(){R.clear()},initData:function(){this.stopTimer(),this.houres=w,this.selectedHoures=j()().$H,this.minutes=I,this.selectedMinute=j()().$m,this.selectedPrice=100,this.selectedPerTime=1,this.perType=["H","M"],this.selectedPerType="H",this.isStarted=!1,this.timer=null,this.startedTime=0,this.endedTime=0,this.totalParkingTime="00:00:00",this.totalPrice=0,this.clearSaveData()},setHoure:function(e){this.selectedHoures=e},setMinute:function(e){this.selectedMinute=e},setPricePreType:function(e){this.selectedPerType=e},setPrice:function(e){this.selectedPrice=e},setPerTime:function(e){this.selectedPerTime=e},toggleIsStarted:function(){0!==this.selectedPrice?0!==this.selectedPerTime?(this.isStarted=!this.isStarted,this.isStarted?(this.startedTime=j()("".concat(j()().year(),"-").concat(j()().month()+1,"-").concat(j()().date(),"T").concat(this.selectedHoures,":").concat(this.selectedMinute,":").concat(j()().second())).unix(),this.setSaveData(),this.startTimer()):(this.clearSaveData(),this.stopTimer())):alert("Please set per time"):alert("Please set price")},startTimer:function(){this.startInterval()},stopTimer:function(){this.endedTime=j()().unix(),this.showResult(),this.stopInterval()},showResult:function(){var e,t;if(this.isStarted){var n=j()().unix();e=j()(n).diff(j()(this.startedTime))}else e=j()(this.endedTime).diff(j()(this.startedTime));var i=e%60,r=Math.floor(e/60),s=Math.floor(e/3600);console.log("ss",e,this.startedTime,j()().unix(),i),this.totalParkingTime="\n        ".concat(String(s).length>1?s:"0"+s,":").concat(String(r).length>1?r:"0"+r,":").concat(String(i).length>1?i:"0"+i,"\n      "),t="H"===this.selectedPerType?Math.ceil(e/(60*this.selectedPerTime*60))*this.selectedPrice:Math.ceil(e/(60*this.selectedPerTime))*this.selectedPrice,this.totalPrice=t},startInterval:function(){var e=this;this.timer=setInterval((function(){e.showResult()}),1e3)},stopInterval:function(){clearInterval(this.timer)}}},E=C,N=(n("c0a4"),Object(f["a"])(E,a,c,!1,null,"21dbf886",null)),B=N.exports,A={name:"app",components:{Main:B}},J=A,L=(n("034f"),Object(f["a"])(J,r,s,!1,null,null,null)),W=L.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(W)}}).$mount("#app"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").catch((function(){}))},"85ec":function(e,t,n){},"8dc3":function(e,t,n){},"9fcf":function(e,t,n){},c0a4:function(e,t,n){"use strict";var i=n("433b"),r=n.n(i);r.a},daaf:function(e,t,n){"use strict";var i=n("4986"),r=n.n(i);r.a},e4f0:function(e,t,n){"use strict";var i=n("8dc3"),r=n.n(i);r.a}});
//# sourceMappingURL=app.f2b8d58f.js.map