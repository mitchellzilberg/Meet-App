(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),s=n(21),o=n.n(s),c=(n(29),n(2)),i=n(6),u=n(4),l=n(3),h=(n(30),n(31),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.showDetails,t=this.props.event;return Object(a.jsxs)("div",{className:"event",children:[Object(a.jsxs)("div",{className:"event-overview",children:[Object(a.jsx)("h2",{className:"summary",children:t.summary}),Object(a.jsx)("p",{className:"location",children:t.location}),Object(a.jsx)("p",{className:"start-time",children:t.start.dateTime}),!e&&Object(a.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Show Event Details"}),e&&Object(a.jsx)("button",{className:"details-btn",onClick:this.handleShowDetails,children:"Hide Event Details"})]}),e&&Object(a.jsxs)("div",{className:"event-details",children:[Object(a.jsx)("p",{className:"description",children:t.description}),Object(a.jsx)("p",{className:"end-time",children:t.end.dateTime}),Object(a.jsx)("p",{className:"time-zone",children:t.start.timeZone}),Object(a.jsx)("p",{className:"organizer-email",children:t.organizer.email})]})]})}}]),n}(r.Component)),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(a.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(a.jsx)("li",{children:Object(a.jsx)(h,{event:e})},e.id)}))})}}]),n}(r.Component),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"Alert",children:Object(a.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(d),p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(d),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"CitySearch",children:[Object(a.jsx)(v,{text:this.state.infoText}),Object(a.jsx)("h2",{className:"citysearch-instruction",children:"Choose your closest city"}),Object(a.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})},placeholder:"Search for a City"}),Object(a.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(a.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(a.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.Component),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1||n>=33?e.setState({infoText:"Please choose a number of events between 1 and 32"}):e.setState({infoText:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"number-of-events",children:[Object(a.jsx)(p,{text:this.state.infoText}),Object(a.jsx)("label",{className:"number-of-events-label",children:"Number of Events: "}),Object(a.jsx)("input",{type:"number",className:"event-number",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}}]),n}(r.Component),m=n(7),w=n.n(m),O=n(8),g=n(23),x=n(10),y=n.n(x),S=n(9),k=n.n(S),N=function(e){var t=e.map((function(e){return e.location}));return Object(g.a)(new Set(t))},C=function(){var e=Object(O.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,a,r,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k.a.start(),navigator.onLine){e.next=5;break}return t=localStorage.getItem("lastEvents"),k.a.done(),e.abrupt("return",{events:JSON.parse(t).events,locations:N(JSON.parse(t).events)});case 5:return e.next=7,I();case 7:if(!(n=e.sent)){e.next=17;break}return T(),a="https://jwyioruftd.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=13,y.a.get(a);case 13:return(r=e.sent).data&&(s=N(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),k.a.done(),e.abrupt("return",r.data.events);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(O.a)(w.a.mark((function e(){var t,n,a,r,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,C(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,y.a.get("https://jwyioruftd.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&A(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},A=function(){var e=Object(O.a)(w.a.mark((function e(t){var n,a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://jwyioruftd.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all",alertText:""},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?E().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,s);e.setState({events:a,currentLocation:t})})):E().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e.offlineAlert=function(){!1===navigator.onLine?e.setState({alertText:"You are currently offline. Please connect to the internet for an updated list of events"}):e.setState({alertText:""})},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(",").shift(),number:t}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,E().then((function(t){e.mounted&&e.setState({events:t,locations:N(t)})})),window.addEventListener("online",this.offlineAlert())}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Meet-Us"}),Object(a.jsx)(j,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(a.jsx)(b,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(a.jsx)("div",{className:"data-vis-wrapper",children:Object(a.jsx)("h4",{children:"Events in each city"})}),Object(a.jsx)(f,{events:this.state.events})]})}}]),n}(r.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=n(22);o.a.render(Object(a.jsx)(D,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):U(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):U(t,e)}))}}(),W.config("259ee5e9bb574eb9b4abee9ee76ecacc").install()}},[[51,1,2]]]);
//# sourceMappingURL=main.12ea0e3a.chunk.js.map