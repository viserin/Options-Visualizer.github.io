(this["webpackJsonpoptions-visualizer"]=this["webpackJsonpoptions-visualizer"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},223:function(e,t){},239:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(93),i=a.n(o);a(103),a(104);var l=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("div",null,"Options Visualizer \xa0",r.a.createElement("img",{src:"/favicon.ico",style:{verticalAlign:"middle"},alt:"Logo"}))))},c=a(27),s=a.n(c),u=a(94),d=a(7),b=(a(106),a(107),a(95));a(202),a(208);var p=function(e){var t=[],a=[],n=[],o="";if(0!==e.high){var i=10*Math.round(e.quote/10);n=[-150,-150,100*(e.quote-i)-150,100*(e.high-i)-150,2*(e.high-i)*100-150],o="Long "+i+" call @ 1.50",t=[0,e.low,e.quote,e.high,e.high+e.high-e.quote],a=[{type:"line",mode:"vertical",scaleID:"x-axis-0",value:1,borderColor:"#38677D",borderWidth:5,label:{backgroundColor:"#959296",content:"52 wk Low",enabled:!0}},{type:"line",mode:"vertical",scaleID:"x-axis-0",value:2,borderColor:"#38677D",borderWidth:5,label:{backgroundColor:"#959296",content:"Current Price",enabled:!0}},{type:"line",mode:"vertical",scaleID:"x-axis-0",value:3,borderColor:"#38677D",borderWidth:5,label:{backgroundColor:"#959296",content:"52 wk High",enabled:!0}}]}var l={labels:t,datasets:[{label:o,fill:!1,lineTension:0,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:2,data:n}]};return r.a.createElement("div",{className:"Chart-div"},r.a.createElement(b.a,{data:l,options:{title:{display:!0,text:e.ticker+" Profit/Loss Chart",fontSize:20},legend:{display:!0,position:"right"},scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Profit or Loss",fontSize:18},ticks:{callback:function(e,t,a){return"$"+e}}}],xAxes:[{scaleLabel:{display:!0,labelString:"Price at Expiration",fontSize:18},ticks:{callback:function(e,t,a){return"$"+e}}}]},annotation:{drawTime:"beforeDatasetsDraw",annotations:a}}}))},h=a(97);var m=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),o=t[0],i=t[1],l=Object(n.useState)(!0),c=Object(d.a)(l,2),b=c[0],m=c[1],f=Object(n.useState)(""),v=Object(d.a)(f,2),g=v[0],k=v[1],w=Object(n.useState)(""),y=Object(d.a)(w,2),x=y[0],E=y[1],C=Object(n.useState)(0),S=Object(d.a)(C,2),j=S[0],O=S[1],D=Object(n.useState)(0),q=Object(d.a)(D,2),L=q[0],A=q[1],z=a(209);z.ApiClient.instance.authentications.api_key.apiKey="bsd4kpfrh5r9mrsvlmb0";var W=new z.DefaultApi;function N(){return(N=Object(u.a)(s.a.mark((function e(t){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cloud.iexapis.com/stable/stock/"+t+"/quote?token=pk_bd79aebbe66a47efb162e2717b930293");case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("div",{className:"Ticker-div"},r.a.createElement("form",{onSubmit:function(e){var t=o.trim().toUpperCase();(function(e){return N.apply(this,arguments)})(t).then((function(e){O(e.week52High),A(e.week52Low)})),W.quote(t,(function(e,t,a){E(t.c)})),k(t),e.preventDefault()}},r.a.createElement("label",{style:{paddingRight:"5px"}},r.a.createElement("input",{type:"text",placeholder:"Enter Ticker Symbol Here",value:o,onChange:function(e){W.quote(e.target.value.trim().toUpperCase(),(function(e,t,a){void 0!==t.c?m(!1):m(!0)})),i(e.target.value)},className:"Ticker-searchbar"})),r.a.createElement(h.a,{variant:"outline-primary",type:"submit",disabled:b,style:{float:"center",borderRadius:"0px"}},"Submit"))),r.a.createElement(p,{ticker:g,quote:x,high:j,low:L}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(238);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null),r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,t,a){e.exports=a(239)}},[[98,1,2]]]);
//# sourceMappingURL=main.13094ab4.chunk.js.map