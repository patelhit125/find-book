(this["webpackJsonpfind-book"]=this["webpackJsonpfind-book"]||[]).push([[0],{16:function(e,t,n){e.exports=n(41)},21:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),c=(n(21),n(3)),l=n.n(c),s=n(14),u=n(4),m=n(15),d=n.n(m),f=(n(40),function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)({items:[]}),c=Object(u.a)(i,2),m=c[0],f=c[1],g=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("".concat("https://www.googleapis.com/books/v1/volumes","?q=").concat(n));case 2:t=e.sent,f(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",{className:"container mt-5"},a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g()}},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{htmlFor:"bookInput"},"Enter Book Name"),a.a.createElement("input",{className:"form-control",id:"bookInput",type:"search",placeholder:"java, python, etc.,",value:n,onChange:function(e){r(e.target.value)}})),a.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Search")),a.a.createElement("ul",{className:"list-group list-group-flush mt-5 mb-5"},m.items?m.items.map((function(e,t){return a.a.createElement("li",{key:t,className:"list-group-item d-flex bg-light"},a.a.createElement("a",{href:"http://books.google.co.in/books?id=".concat(e.id),target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{width:"130",height:"200",alt:"".concat(e.volumeInfo.title," book"),src:"http://books.google.com/books/content?id=".concat(e.id,"&printsec=frontcover&img=1&zoom=1&source=gbs_api")})),a.a.createElement("span",{className:"ml-3"},a.a.createElement("div",{className:"font-weight-bold"},a.a.createElement("a",{href:"http://books.google.co.in/books?id=".concat(e.id),target:"_blank",rel:"noopener noreferrer"},e.volumeInfo.title)),a.a.createElement("div",{className:"mt-3"},"Author : ",function(e){try{if(e.length<=2)e=e.join(" and ");else if(e.length>2){var t=" and "+e.slice(-1);e.pop(),e=e.join(", "),e+=t}return e}catch(n){return a.a.createElement("span",null,"null")}}(e.volumeInfo.authors)),a.a.createElement("div",null,"Published Date : ",e.volumeInfo.publishedDate),a.a.createElement("div",null,"Total Pages : ",e.volumeInfo.pageCount),a.a.createElement("div",null,"Rating : ",e.volumeInfo.averageRating||a.a.createElement("span",null,"null"),"/5")))})):a.a.createElement("span",{className:"text-danger"},"Try different keyword...")))}),g=document.getElementById("root");i.a.render(a.a.createElement(f,null),g);var p=f,h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/find-book",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/find-book","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(t,e)}))}}()}},[[16,1,2]]]);
//# sourceMappingURL=main.6ac3413f.chunk.js.map