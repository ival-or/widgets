!function(){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){if(this instanceof e){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n}var n,r={},o={};var s,a={};var i,l={};var c,u={};var d,h={},v={};var p,f,g,y={};function m(){return f||(f=1,t=h,n=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),r=e&&e.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},Object.defineProperty(t,"__esModule",{value:!0}),r(function(){return d||(d=1,e=v,Object.defineProperty(e,"__esModule",{value:!0}),e.EventeaFeaturesBits=void 0,(t=e.EventeaFeaturesBits||(e.EventeaFeaturesBits={}))[t.DiagStats=1]="DiagStats"),v;var e,t}(),t),r(function(){return p||(p=1,e=y,Object.defineProperty(e,"__esModule",{value:!0}),e.sendDiagMessage=e.DiagMessageType=e.HandlerStatus=e.SentStatus=e.IncompleteReason=void 0,(t=e.IncompleteReason||(e.IncompleteReason={}))[t.MissedProject=0]="MissedProject",t[t.MissedRouting=1]="MissedRouting",t[t.MissedEvent=2]="MissedEvent",t[t.MissedRoutes=3]="MissedRoutes",(n=e.SentStatus||(e.SentStatus={}))[n.Routed=0]="Routed",n[n.IncompleteRouting=1]="IncompleteRouting",n[n.Deprecated=2]="Deprecated",n[n.Dead=3]="Dead",(r=e.HandlerStatus||(e.HandlerStatus={}))[r.Handled=0]="Handled",r[r.MissedHandler=1]="MissedHandler",r[r.HandlerErrored=2]="HandlerErrored",(o=e.DiagMessageType||(e.DiagMessageType={}))[o.SendStart=0]="SendStart",o[o.SentStats=1]="SentStats",e.sendDiagMessage=function(e){if("undefined"!=typeof window)try{const t=new CustomEvent("__evntx10t",{bubbles:!0,detail:e});document.dispatchEvent(t)}catch(e){}}),y;var e,t,n,r,o}(),t)),h;var t,n,r}var w,j=function(){if(g)return r;g=1,Object.defineProperty(r,"__esModule",{value:!0}),r.Eventea=void 0;const e=(n||(n=1,Object.defineProperty(o,"__esModule",{value:!0}),o.EventeaBeerClient=void 0,o.EventeaBeerClient=class{constructor(e){if("undefined"==typeof window)throw new Error("Eventea beer client is not isomorphic package");{const{baseUrl:t}=e;this._request=e=>fetch(`${t}${e.method}`,{...e,method:e.httpMethod}).then((e=>e.json()))}}event(e){var t;const n={project:e.project,event:e.event,payload:{...e.payload||{},appName:null===(t=e.handlersData)||void 0===t?void 0:t.appName}};return this._request({method:"event",httpMethod:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"},credentials:"omit"}).catch((()=>{}))}}),o),t=function(){if(s)return a;s=1,Object.defineProperty(a,"__esModule",{value:!0}),a.EventeaQueueObserver=a.EventeaQueue=void 0;const e="undefined"!=typeof window?window:void 0;return a.EventeaQueue=class{constructor(t){var n,r;this.send=e=>{this.__addEventToStore(["send",e])},this.sendOnce=e=>(this.__addEventToStore(["sendOnce",e]),!0),this.data=e=>{this.__addEventToStore(["data",e])},this.errorHandlers=null==t?void 0:t.errorHandlers,e?!e._evnteq&&(e._evnteq=[]):null===(r=null===(n=this.errorHandlers)||void 0===n?void 0:n.handleQueueUsageAtServer)||void 0===r||r.call(n)}__addEventToStore(t){(null==e?void 0:e._evnteq)&&e._evnteq.push(t)}get getQueue(){return null==e?void 0:e._evnteq}},a.EventeaQueueObserver=class{constructor(t){var n,r;this.DEFAULT_REFRESH_TIME=500,this.timerId=0,this.observerSuspended=!1,this.clearGlobalData=()=>{(null==e?void 0:e._evnteq)&&(e._evnteq=[])},this.handleSubscriber=()=>{var t,n;if(this.watcher&&(null==e?void 0:e._evnteq)&&e._evnteq.length){try{this.watcher([...e._evnteq])}catch(e){const{message:r}=e;null===(n=null===(t=this.errorHandlers)||void 0===t?void 0:t.handleObserverWatcherErrors)||void 0===n||n.call(t,r)}this.clearGlobalData()}},this.setRefreshTimer=()=>{this.timerId=setInterval(this.handleSubscriber,this.DEFAULT_REFRESH_TIME)},this.unwatch=()=>clearInterval(this.timerId),this.__getAllQueue=()=>null==e?void 0:e._evnteq,this.errorHandlers=null==t?void 0:t.errorHandlers,(null==t?void 0:t.refreshTime)&&(this.DEFAULT_REFRESH_TIME=t.refreshTime),e?!e._evnteq&&(e._evnteq=[]):(this.observerSuspended=!0,null===(r=null===(n=this.errorHandlers)||void 0===n?void 0:n.handleQueueUsageAtServer)||void 0===r||r.call(n))}set watch(e){var t,n;this.observerSuspended?null===(n=null===(t=this.errorHandlers)||void 0===t?void 0:t.handleQueueUsageAtServer)||void 0===n||n.call(t):(this.unwatch(),this.watcher=e,this.handleSubscriber(),this.setRefreshTimer())}},a}(),d=(i||(i=1,Object.defineProperty(l,"__esModule",{value:!0}),l.EventeaDataState=void 0,l.EventeaDataState=class{constructor(e){this.__state={},this.add=e=>{const{project:t,payload:n}=e;this.__state[t]={...this.__state[t],...n}},this.remove=(...e)=>{const[t,n]=e;return!!this.__state[t]&&(delete this.__state[t][n],!0)},this.get=(...e)=>{const[t,n]=e;if(this.__state[t])return this.__state[t][n]},(null==e?void 0:e.initData)&&e.initData&&(this.__state=e.initData)}get _getAll(){return this.__state}}),l),h=function(){if(c)return u;c=1,Object.defineProperty(u,"__esModule",{value:!0}),u.sendPostMessage=void 0;const e="undefined"!=typeof window?window:void 0;return u.sendPostMessage=({type:t,payload:n,config:r={}})=>{const{targetOrigin:o="*",payloadProperty:s}=r;e&&(e.top||e.opener||e.parent).postMessage(JSON.stringify({type:t,...s?{[s]:n}:n}),o)},u}(),v=m(),p=m();class f{constructor(n){if(this.defaultEventHandlers={...n.defaultEventHandlers},this.defaultDataHandlers={...n.defaultDataHandlers},"undefined"==typeof window||window.__evntfxb1ts||(window.__evntfxb1ts=p.EventeaFeaturesBits.DiagStats),this.defaultEventHandlers.postMessage=({event:e,config:t,payload:n})=>(0,h.sendPostMessage)({type:e,config:t,payload:n}),n.beerBaseUrl){const t=new e.EventeaBeerClient({baseUrl:n.beerBaseUrl});this.defaultEventHandlers["eventea-beer"]=e=>null==t?void 0:t.event(e)}this.routingClientLoader=n.routingClientLoader,this.projectConfigurationMap=n.projectConfigurationMap,this.errorHandlers=n.errorHandlers,this.handlersData=n.handlersData||{},this.onceSentEvents=n.onceSentEvents||new Map,this.handleAnyEvent=n.handleAnyEvent,this.eventeaDataState=new d.EventeaDataState({initData:n.data}),this.eventeaQueueObserver=new t.EventeaQueueObserver({errorHandlers:{handleQueueUsageAtServer:this.errorHandlers.handleQueueUsageAtServer,handleObserverWatcherErrors:this.errorHandlers.handleObserverWatcherErrors}}),this.eventeaQueueObserver.watch=e=>{e.forEach((e=>{var t,n,r,o;const[s,a]=e;try{switch(s){case"send":this.send(a);break;case"sendOnce":this.sendOnce(a);break;case"data":this.data(a);break;default:null===(n=(t=this.errorHandlers).handleUnknownMethodInQueue)||void 0===n||n.call(t,{requestType:s})}}catch(e){null===(o=(r=this.errorHandlers).handleErrorQueueEvent)||void 0===o||o.call(r,{requestType:s,requestData:a})}}))}}send(e){var t,n,r,o;(0,v.sendDiagMessage)({type:v.DiagMessageType.SendStart,event:e});const{project:s,event:a}=e,i=this.projectConfigurationMap[s];let l=e;const c=t=>(0,v.sendDiagMessage)({type:v.DiagMessageType.SentStats,event:e,stats:t});if(!(null==i?void 0:i.routing)&&this.routingClientLoader)return void this.routingClientLoader.getRouting(s).then((t=>{i?i.routing=t:this.projectConfigurationMap[s]={routing:t},this.send(e)}),(e=>{var t,n;!e&&(null===(n=(t=this.errorHandlers).handleMissedClientRouting)||void 0===n||n.call(t,{project:s})),c({status:v.SentStatus.IncompleteRouting,reason:v.IncompleteReason.MissedProject})}));if(!i)return this.errorHandlers.handleMissedProject({event:a,project:s}),void c({status:v.SentStatus.IncompleteRouting,reason:v.IncompleteReason.MissedProject});const u=i.routing;if(!u)return this.errorHandlers.handleMissedRouting({project:s}),void c({status:v.SentStatus.IncompleteRouting,reason:v.IncompleteReason.MissedProject});const d=u.events;if(!d)return this.errorHandlers.handleMissedRouting({project:s}),void c({status:v.SentStatus.IncompleteRouting,reason:v.IncompleteReason.MissedRouting});const h=d[a];if(!h)return this.errorHandlers.handleMissedEvent({event:a,project:s}),void c({status:v.SentStatus.IncompleteRouting,reason:v.IncompleteReason.MissedEvent});if("fromData"in h&&h.fromData){const{fromData:e}=h,t={};Object.keys(e).forEach((n=>{const r=this.eventeaDataState.get(s,e[n]);r&&(t[n]=r)})),l={...l,payload:{...t,...l.payload}}}const p=this._getTracking();if("fromDataPool"in h&&h.fromDataPool&&p){const e={};for(const t of Object.keys(h.fromDataPool)){e[t]=p._prot.dataPool[h.fromDataPool[t]]}const t=p._prot.collectDataElements(e);l={...l,payload:{...t,...l.payload}}}let f=this.handlersData;if(u.statist&&(f={...f,statist:u.statist}),this.handleAnyEvent&&this.handleAnyEvent({...l,eventRouting:h,handlersData:f}),"isDeprecated"in h&&h.isDeprecated)return null===(n=(t=this.errorHandlers).handleDeprecatedEvent)||void 0===n||n.call(t,{event:a,project:s}),void c({status:v.SentStatus.Deprecated});if(!("routes"in h))return null===(o=(r=this.errorHandlers).handleMissedRoutes)||void 0===o||o.call(r,{event:a,project:s}),void c({status:v.SentStatus.IncompleteRouting,reason:v.IncompleteReason.MissedRoutes});const g=Object.getOwnPropertyNames(h.routes);if(0==g.length)c({status:v.SentStatus.Dead});else{const e={};g.forEach((t=>{var n;const r=(null===(n=i.eventHandlers)||void 0===n?void 0:n[t])||this.defaultEventHandlers[t];if(!r)return this.errorHandlers.handleMissedEventHandler({project:s,event:a,routeHandlerName:t}),void(e[t]={status:v.HandlerStatus.MissedHandler});const o=h.routes[t],c={...l,config:o,handlersData:f};try{r(c),e[t]={status:v.HandlerStatus.Handled}}catch(n){if(e[t]={status:v.HandlerStatus.HandlerErrored,error:n},!this.errorHandlers.handleEventHandlerError)throw n;this.errorHandlers.handleEventHandlerError(n,t,c)}})),c({status:v.SentStatus.Routed,routesStats:e})}}sendOnce(e,t=!0){const n=`${e.project}/${e.event}`;this.onceSentEvents.has(n)||this.onceSentEvents.set(n,new Set);const r=this.onceSentEvents.get(n);return!r.has(t)&&(this.send(e),r.add(t),!0)}data(e){var t,n,r,o;const{project:s}=e,a=this.projectConfigurationMap[s];if(!a)return void(null===(n=(t=this.errorHandlers).handleMissedDataProject)||void 0===n||n.call(t,{project:s}));const{dataHandlers:i={}}=a,l={...this.defaultDataHandlers,...i};for(const t of Object.keys(l)){const n=l[t];"function"==typeof n?n(e):null===(o=(r=this.errorHandlers).handleMissedDataHandler)||void 0===o||o.call(r,{project:s,handlerName:t})}this.eventeaDataState.add(e)}replicateWithData(e){const t={...this.eventeaDataState._getAll,...null==e?void 0:e.additionalDataState};return new f({errorHandlers:this.errorHandlers,handlersData:{...this.handlersData,...null==e?void 0:e.additionalHandlersData},projectConfigurationMap:this.projectConfigurationMap,onceSentEvents:this.onceSentEvents,defaultEventHandlers:this.defaultEventHandlers,defaultDataHandlers:this.defaultDataHandlers,data:t})}_getTracking(){if("undefined"!=typeof window&&window.tracking&&tracking._prot)return window.tracking}}return r.Eventea=f,r}(),b={},E={},S={},_={};function R(){return w||(w=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.requestWithRetry=e.handleRetryOptions=void 0;const t=async e=>{const{timeout:t=0,url:n}=e,r=new AbortController,o=((e,t)=>setTimeout((()=>e.abort()),t))(r,t),s=await fetch(n,{...e,signal:r.signal});return clearTimeout(o),s};e.handleRetryOptions=e=>{const t={timeout:null==e?void 0:e.timeout,retry:null==e?void 0:e.retry,retryTimeout:null==e?void 0:e.retryTimeout};return t.retry=t.retry?t.retry:t.timeout&&t.retryTimeout?t.timeout/t.retryTimeout:2,t.retryTimeout=t.retryTimeout?t.retryTimeout:t.timeout&&t.retry?t.timeout/t.retry:2500,t.timeout=t.timeout?t.timeout:t.retryTimeout&&t.retry?t.retryTimeout*t.retry:5e3,t};e.requestWithRetry=async(n,r)=>{var o;const{retry:s,retryTimeout:a}=(0,e.handleRetryOptions)(r);let i,l,c;for(const e of function*(){let e=0;for(;s>e;)yield t({url:n,timeout:a}),e+=1}())try{i=await e;break}catch(e){l=e;continue}if(!i)throw l;return(null===(o=i.headers.get("content-type"))||void 0===o?void 0:o.includes("application/json"))?c=await i.json():i&&(c=await i.text()),{status:i.status,body:c}}}(_)),_}var P,O,H,M,D={};function T(){return O||(O=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ClientSingleLoader=e.requestWithRetry=void 0;const t=R(),n=(P||(P=1,Object.defineProperty(D,"__esModule",{value:!0}),D.routingValidator=void 0,D.routingValidator={check:e=>!(!e||"object"!=typeof e||!e.version||!e.events||"v3"!==e.version),getErrors:e=>[`${JSON.stringify(e)}: doesn't match a valid v3 routing schema`]}),D);var r=R();Object.defineProperty(e,"requestWithRetry",{enumerable:!0,get:function(){return r.requestWithRetry}});e.ClientSingleLoader=class{constructor(e){this.currentRequest=null,this.makeRequest=()=>{this.currentRequest=this.request(this.url,{timeout:this.timeout}),this.currentRequest.then((e=>{400>e.status?n.routingValidator.check(e.body)?this.currentRouting=e.body:this.handleRequestError({project:this.project,validationErrors:n.routingValidator.getErrors(e.body)}):this.handleRequestError({project:this.project,status:e.status})}),(e=>{this.handleRequestError({project:this.project,reason:e})})).finally((()=>{this.currentRequest=null}))};const{url:r,baseUrl:o,projectName:s,timeout:a=5e3,fallback:i}=e;if(this.project=s,this.url=r||((e,t)=>{let n=t;return t.endsWith("/")||(n+="/"),`${n}v3/${e}.json`})(s,o),this.handleRequestError=e.handleRequestError,this.timeout=a,this.request=t.requestWithRetry,i){if(!n.routingValidator.check(i)){const t=n.routingValidator.getErrors(e.fallback);throw new Error(`fallback должен быть валидным роутингом:\n${t.join("\n")}`)}this.fallback=i}}handleRequest(){this.currentRouting||this.currentRequest||this.makeRequest()}getRouting(){return this.handleRequest(),this.currentRouting?Promise.resolve(this.currentRouting):this.currentRequest?this.currentRequest.then((()=>{const e=this.currentRouting||this.fallback;return e||Promise.reject(void 0)}),(()=>this.fallback?this.fallback:Promise.reject(void 0))):Promise.reject(void 0)}}}(S)),S}var k,I,C,q,L,U=(M||(M=1,k=b,I=e&&e.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),C=e&&e.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||I(t,e,n)},Object.defineProperty(k,"__esModule",{value:!0}),C(function(){if(H)return E;H=1,Object.defineProperty(E,"__esModule",{value:!0}),E.ClientLoader=void 0;const e=T(),t=()=>({});return E.ClientLoader=class{constructor(n){this.projectSingleLoaders={},this.getSingleLoaderInstance=t=>new e.ClientSingleLoader({projectName:"string"==typeof t?t:t.projectName,fallback:"string"==typeof t?void 0:t.fallback,handleRequestError:this.handleRequestError,timeout:this.timeout,baseUrl:this.baseUrl}),this.getPreloadRoutings=()=>{for(const e of this.preloadProjects){const t="string"==typeof e?e:e.projectName;this.projectSingleLoaders[t]=this.getSingleLoaderInstance(e),this.projectSingleLoaders[t].handleRequest()}},this.addNewLoaderInstance=e=>(this.projectSingleLoaders[e]=this.getSingleLoaderInstance(e),this.projectSingleLoaders[e]);const{baseUrl:r,preloadProjects:o,timeout:s,handleRequestError:a}=n;this.preloadProjects=o,this.baseUrl=r,this.timeout=s,this.handleRequestError=a||t,this.getPreloadRoutings()}async getRouting(e){return e in this.projectSingleLoaders?this.projectSingleLoaders[e].getRouting():this.addNewLoaderInstance(e).getRouting()}},E}(),k)),b);var x=(L||(L=1,q=function(e){var t,n=!1;return function(){return n||(t=e.apply(void 0,arguments),n=!0),t}}),q);const N={info:!0,warn:!0,error:!0,debug:!0,trace:!0,fatal:!0};var A={},B={},F=function(){return F=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},F.apply(this,arguments)};function Q(e){return e.toLowerCase()}var $=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],z=/[^A-Z0-9]+/gi;function V(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}function W(e,t){var n=e.charAt(0),r=e.substr(1).toLowerCase();return 0>=t||"0">n||n>"9"?""+n.toUpperCase()+r:"_"+n+r}function J(e,t){return void 0===t&&(t={}),function(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,r=t.stripRegexp,o=void 0===r?z:r,s=t.transform,a=void 0===s?Q:s,i=t.delimiter,l=void 0===i?" ":i,c=V(V(e,void 0===n?$:n,"$1\0$2"),o,"\0"),u=0,d=c.length;"\0"===c.charAt(u);)u++;for(;"\0"===c.charAt(d-1);)d--;return c.slice(u,d).split("\0").map(a).join(l)}(e,F({delimiter:"",transform:W},t))}function Z(e,t){return 0===t?e.toLowerCase():W(e,t)}var X,G,K=t(Object.freeze({__proto__:null,camelCaseTransform:Z,camelCaseTransformMerge:function(e,t){return 0===t?e.toLowerCase():function(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}(e)},camelCase:function(e,t){return void 0===t&&(t={}),J(e,F({transform:Z},t))}}));function Y(){if(X)return B;X=1,Object.defineProperty(B,"__esModule",{value:!0}),B.statistHandlerFactory=void 0;const e=K;function t(){if("undefined"!=typeof window&&window.tracking&&tracking._prot)return window.tracking}return B.statistHandlerFactory=function({statistClient:n}){return({event:r,payload:o,project:s,config:a,handlersData:i})=>{let l=o||{};if(!function(e){return"object"==typeof e&&null!==e}(a))throw new Error("Unknown config for statist handler");{const c=`eventea.projects.${(0,e.camelCase)(s)}`,u=`events.${a.eventName||r}`,d=t(),h=i&&i.statist?i.statist:void 0;if(h&&h.commonParams&&d){const e={};for(const t of Object.keys(h.commonParams)){const{deprecated:n}=h.commonParams[t];!n&&t in d._prot.dataPool&&(e[t]=d._prot.dataPool[t])}l={...d._prot.collectDataElements(e),...l}}const{remapAsList:v}=a;if(v)for(const e of Object.keys(v))l[e]=v[e].params.map((t=>{var n,r,s;const a=(null===(n=v[e].paramsSource)||void 0===n?void 0:n[t])||"event";return"event"===a&&o?String(null!==(r=o[t])&&void 0!==r?r:""):"dataPool"===a&&d&&t in d._prot.dataPool?String(null!==(s=d._prot.collectDataElement(d._prot.dataPool[t]))&&void 0!==s?s:""):""}));n.send(c,u,l)}}},B}var ee=(G||(G=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.statistHandlerFactory=void 0;var t=Y();Object.defineProperty(e,"statistHandlerFactory",{enumerable:!0,get:function(){return t.statistHandlerFactory}})}(A)),A),te=function(e,t){return(te=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function ne(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}te(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var re=function(){return(re=Object.assign||function(e){for(var t,n=1,r=arguments.length;r>n;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function oe(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}var se=function(){var e=0;return function(){return{clientEventTimestamp:Date.now(),clientUploadTimestamp:Date.now(),sequence:++e,uuid:oe()}}},ae={test:"https://api-dev-statist.tcsbank.ru",prod:"https://api-statist.tinkoff.ru"},ie=document,le=window,ce=navigator,ue=XMLHttpRequest,de=function(){function e(e,t){var n=this;this.events=[],this.timer=null,this.listeners=Object.create(null),this.destroy=function(){le.removeEventListener("visibilitychange",n.handleVisibilityChange),le.removeEventListener("pagehide",n.handlePageHide)},this.handleVisibilityChange=function(){"hidden"===ie.visibilityState&&n.sendByBeacon()},this.handlePageHide=function(){n.sendByBeacon()},this.pushEventsUrl=e+"/gateway/v1/events",this.batchSize=t.batchSize,this.pushInterval=t.pushInterval,this.pushTimeout=t.pushInterval,"visibilityState"in ie?le.addEventListener("visibilitychange",this.handleVisibilityChange,!1):le.addEventListener("pagehide",this.handlePageHide,!1)}return e.prototype.handleApiError=function(e){var t,n,r=this;if(e.response)try{var o=JSON.parse(e.response);if(o.message&&(null===(t=o.details)||void 0===t?void 0:t.errors))return void o.details.errors.forEach((function(t){t&&r.emit("error",Object.assign(new Error(o.message),{status:e.status,response:t}))}))}catch(e){}this.emit("error",Object.assign(new Error(null!==(n=e.response)&&void 0!==n?n:e.message),{status:e.status}))},e.prototype.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.off=function(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter((function(e){return e!==t})))},e.prototype.emit=function(e,t){var n=this.listeners[e];if(n)for(var r=0,o=n;o.length>r;r++)(0,o[r])(t)},e.prototype.startPush=function(){var e=this;this.timer||0===this.events.length||(this.timer=setTimeout((function(){return(e.isReady()?e.pushEvents(e.batchSize):Promise.resolve()).catch((function(t){return e.handleApiError(t)})).then((function(){e.timer=null,e.startPush()}))}),this.pushInterval))},e.prototype.pushEvents=function(e){var t=this.events.splice(0,e);return this.sendByXhr(t)},e.prototype.updateTimestamp=function(e){for(var t=Date.now(),n=0,r=e;r.length>n;n++)r[n].eventParameters.clientUploadTimestamp=t},e.prototype.sendByXhr=function(e){var t=this;return ue?e.length?(this.updateTimestamp(e),new Promise((function(n,r){var o=new ue,s=function(){if(o.status<200||204<o.status){var t=Object.assign(new Error(o.responseText),{status:o.status,response:o.responseText,events:e});r(t)}else n()};o.onerror=s,o.onload=s,o.timeout=t.pushTimeout,o.open("POST",t.pushEventsUrl,!0),o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.send(JSON.stringify(e))}))):Promise.resolve():Promise.reject()},e.prototype.sendByBeacon=function(){var e=this.events;this.events=[],e.length&&(this.updateTimestamp(e),ce.sendBeacon(this.pushEventsUrl,JSON.stringify(e)))},e.prototype.send=function(e){this.events.push(e),this.startPush()},e.prototype.isReady=function(){return!0},e}(),he=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.ready=!1,r.preconnectUrl=t+"/preconnect",n.preconnect&&(r.preconnect(),setInterval((function(){return r.preconnect()}),6e5)),r}return ne(t,e),t.prototype.handleApiError=function(t){var n;if(t.status>=200&&500>t.status)return e.prototype.handleApiError.call(this,t);(n=this.events).unshift.apply(n,t.events),this.startPush()},t.prototype.preconnect=function(){"fetch"in le?this.preconnectFetch():this.preconnectXhr()},t.prototype.setReady=function(){this.ready=!0},t.prototype.preconnectFetch=function(){var e=this;return fetch(this.preconnectUrl,{method:"GET",mode:"no-cors"}).then((function(){return e.setReady()})).catch((function(){return e.setReady()}))},t.prototype.preconnectXhr=function(){var e=this,t=new ue;t.onload=function(){return e.setReady()},t.timeout=this.pushTimeout,t.open("GET",this.preconnectUrl,!0),t.send()},t.prototype.isReady=function(){return this.ready},t}(de),ve={},pe=function(){function e(e,t,n){this.clientParameters=e,this.transport=t,this.eventParameters=n}return e.prototype.send=function(e,t,n,r){var o=re(re({},null!=r?r:this.clientParameters),{visitId:"",deviceId:""});o.visitId=o.visitId||function(e){try{return sessionStorage.getItem(e)}catch(t){return function(e){return ve[e]?ve[e]:null}(e)}}("vIdUid")||function(e,t){try{sessionStorage.setItem(e,t)}catch(n){!function(e,t){ve[e]=t}(e,t)}return t}("vIdUid",oe()),o.deviceId=o.deviceId||("stDeIdU",ie.cookie.split("; ").reduce((function(e,t){var n=t.split("=");return"stDeIdU"===n[0]?decodeURIComponent(n[1]):e}),"")||null)||function(e,t){var n=new Date(Date.now()+15768e7).toUTCString();return ie.cookie="stDeIdU="+encodeURIComponent(t)+"; expires="+n+"; path=/; domain="+le.location.hostname.split(".").slice(-2).join("."),t}(0,oe());var s,a={project:e,name:t,parameters:n,eventParameters:(s=this.eventParameters,"function"==typeof s?s():s),clientParameters:o};this.transport.send(a)},e.prototype.updateClientParameters=function(e){for(var t in e)this.clientParameters[t]=e[t]},e.prototype.on=function(e,t){this.transport.on(e,t)},e.prototype.off=function(e,t){this.transport.off(e,t)},e}(),fe=function(e){function t(t){var n=t.transportOptions||{},r=n.batchSize,o=n.pushInterval,s=n.pushTimeout,a=n.preconnect;return e.call(this,t.clientParameters,new he(ae[t.environment],{batchSize:void 0===r?500:r,pushInterval:void 0===o?15e3:o,pushTimeout:void 0===s?3e4:s,preconnect:void 0===a||a}),t.eventParameters||se())||this}return ne(t,e),t.prototype.send=function(t,n,r,o){return e.prototype.send.call(this,t,n,r||{},o)},t}(pe);!function(e){function t(t){var n=t.transportOptions||{},r=n.batchSize,o=n.pushInterval,s=n.pushTimeout,a=n.preconnect;return e.call(this,t.clientParameters,new de(ae[t.environment],{batchSize:void 0===r?500:r,pushInterval:void 0===o?6e4:o,pushTimeout:void 0===s?3e4:s,preconnect:void 0===a||a}),t.eventParameters||se())||this}ne(t,e),t.prototype.send=function(t,n,r,o){return e.prototype.send.call(this,t,n,r,o)}}(pe);const ge="client-only-eventea",ye="1.0.0";var me,we={};var je=(me||(me=1,Object.defineProperty(we,"__esModule",{value:!0}),we.getTracking=void 0,we.getTracking=function(){if("undefined"==typeof window)throw new Error("EClientOnly");return new Promise((function(e){var t=window.tracking;t&&t.fullfill?t.trackingReady?t.trackingReady().then(e):e(t):window.addEventListener("tracking-created",(function(t){t instanceof CustomEvent&&e(t.detail||window.tracking)}))}))}),we);const be=({logger:e,eventProps:t,appName:n})=>{var r;const{event:o,project:s,payload:a,eventRouting:i}=t,{routes:{logs:l}}=i,c=null==l?void 0:l.level,u=null!==(r=null==l?void 0:l.samplingRate)&&void 0!==r?r:1;if(c){if(N[c]&&c in e)return void((0===(d=u)||1===d?d:Math.random()<=d)&&e[c]({event:o,eventeaProject:s,payload:a,appName:n,from:"browser",userAgent:window.navigator.userAgent,href:window.location.href}));e.error({event:"eventea-wrong-logs-config",originalEvent:o,originalLevel:c})}var d},Ee=(e,t,n)=>{try{return JSON.stringify(e,t,n)}catch(r){return((e,t,n)=>{const r=new Set,o=t||(e=>e);return JSON.stringify(e,((e,t)=>t&&"object"==typeof t?r.has(t)?"[~Circular~]":(r.add(t),o(t)):o(t)),n)})(e,t,n)}};var Se,_e,Re,Pe,Oe,He,Me,De,Te,ke;function Ie(){return _e||(_e=1,Se=function(e,t){return function n(){for(var r=arguments.length,o=new Array(r),s=0;r>s;s++)o[s]=arguments[s];return e>o.length?function(){for(var e=arguments.length,t=new Array(e),r=0;e>r;r++)t[r]=arguments[r];return n.apply(this,o.concat(t))}:t.apply(this,o)}}),Se}!function(){if(Pe)return Re;Pe=1;var e=Ie();Re=e(3,(function(e,t,n){void 0===n&&(n=[]);for(var r=n.length,o=0;r>o;o++)t=e(t,n[o],o,n);return t}))}();var Ce=function(){if(ke)return Te;ke=1;var e=function(){if(He)return Oe;He=1;var e=/([a-z])([A-Z])/g,t=/[^a-zA-Z]+/g;return Oe=function(n){return n.replace(e,(function(e,t,n){return t+" "+n})).split(t)}}(),t=De?Me:(De=1,Me=function(e){return""+e.charAt(0).toUpperCase()+e.slice(1)});return Te=function(n){return e(n).map((function(e,n){return 0===n?e.toLowerCase():t(e.toLowerCase())})).join("")}}();const qe=(e,t)=>t instanceof Error?Object.assign({message:t.message,stack:t.stack},t):t;class Le{constructor(e,t="all"){this.log=(e,t)=>{window.logger[this.loggerStorageName][e](Object.assign(Object.assign({},t),{name:this.loggerName}))},this.info=e=>this.log("info",e),this.warn=e=>this.log("warn",e),this.error=e=>this.log("error",e),this.fatal=e=>this.log("fatal",e),this.trace=e=>this.log("trace",e),this.debug=e=>this.log("dedug",e),this.loggerName=t,this.loggerStorageName=Ce(t),window.logger||(window.logger={}),window.logger[this.loggerStorageName]=e}}const Ue=x((()=>{var e;let t;if(document.currentScript){t=new URL((null===(e=document.currentScript)||void 0===e?void 0:e.getAttribute("src"))||"").searchParams}return t})),xe=()=>{const e=Ue();let t="unknown";if(e)for(const[n,r]of e)if("appName"===n){t=r;break}return t},Ne=(()=>{const e=Object.create(null);return{useEvent:({project:t,event:n})=>{e[t]||(e[t]=Object.create(null)),e[t][n]=!0},getUsedEvents:()=>Object.keys(e).map((t=>({projectName:t,eventList:Object.keys(e[t])})))}})();window.addEventListener("beforeunload",(()=>{const e=Ne.getUsedEvents();e.length&&e.forEach((({projectName:e,eventList:t})=>{We.sendOnce({project:"eventea",event:"usage-stats",payload:{projectName:e,eventList:t}},e)}))}));const Ae=(()=>{const e=new Set,t=Ue();if(t)for(const[n,r]of t)"project"===n&&e.add(r);return[...e]})(),Be=new U.ClientLoader({preloadProjects:Ae,baseUrl:"https://acdn.tinkoff.ru/eventea/"}),Fe=new class{constructor(e){this.sendLog=({logApi:e,payload:t})=>fetch(`${e}collect`,{method:"POST",keepalive:!0,headers:{"Content-type":"application/json"},body:Ee(t,qe)}).catch((e=>e)),this.send=e=>{this.sendLog({logApi:this.apiURL,payload:e})},this.log=(e,t)=>{this.send(Object.assign(Object.assign({},t),{level:e}))},this.error=e=>this.log("error",e),this.info=e=>this.log("info",e),this.warn=e=>this.log("warn",e),this.fatal=e=>this.log("fatal",e),this.debug=e=>this.log("debug",e),this.trace=e=>this.log("trace",e),this.apiURL=e}}("https://www.tinkoff.ru/api/front/log/"),Qe=new Le(Fe,"eventea-logger-tracking"),$e=new Le(Fe,"eventea-error-handlers"),ze=new Le(Fe,"eventea-logger"),Ve={projectConfigurationMap:{},errorHandlers:(({logger:e})=>({handleMissedEvent:({event:t,project:n})=>{e.error({event:"eventea-missed-event",project:n,eventName:t})},handleMissedEventHandler:({event:t,routeHandlerName:n,project:r})=>{e.error({event:"eventea-missed-event-handler",eventName:t,project:r,routeHandlerName:n})},handleMissedProject:({event:t,project:n})=>{e.error({event:"eventea-missed-project",project:n,eventName:t})},handleMissedRouting:({project:t})=>{e.error({event:"eventea-missed-routing",project:t})},handleMissedDataHandler:({project:t,handlerName:n})=>{e.error({event:"eventea-missed-data-handler",project:t,handlerName:n})},handleMissedDataProject:({project:t})=>{e.error({event:"eventea-missed-data-project",project:t})},handleMissedRoutes:({project:t,event:n})=>{e.error({event:"eventea-missed-routes",project:t,eventName:n})},handleDeprecatedEvent:({project:t,event:n})=>{e.info({event:"eventea-deprecated-event",project:t,eventName:n})},handleEventHandlerError:(t,n,{project:r,event:o})=>{e.error({event:"eventea-handler-error",project:r,eventName:o,handlerName:n,error:t})}}))({logger:$e}),routingClientLoader:Be,beerBaseUrl:"https://www.tinkoff.ru/api/front/eventea-beer/",handleAnyEvent:e=>{Ne.useEvent(e),be({logger:ze,eventProps:e,appName:xe()})},defaultEventHandlers:{statist:function(e={}){const{client:t=ge,clientVersion:n=ye}=e;return ee.statistHandlerFactory({statistClient:new fe({environment:"prod",clientParameters:{client:t,clientVersion:n,ssoId:null}})})}((()=>{const e=Ue(),t={},n=null==e?void 0:e.get("statist-client");n&&(t.client=n);const r=null==e?void 0:e.get("statist-client-version");return r&&(t.clientVersion=r),t})()),tracking:(({logger:e})=>{const t=x((()=>((e=6e3)=>Promise.race([je.getTracking(),new Promise(((t,n)=>setTimeout((()=>n(new Error(`No tracking after ${e}ms timeout`))),e)))]))().then((e=>e.callUtil("makeEventeaHandler"))).catch((t=>(e.error({event:"Unable to resolve makeEventeaHandler.",error:t}),null)))));return e=>{t().then((t=>{null==t||t(e)}))}})({logger:Qe})}},We=new j.Eventea(Ve);"undefined"!=typeof window&&(window.eventea=We,window.__eventea=We)}();
