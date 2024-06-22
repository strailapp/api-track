(function () {
  var _analytics=function(e){"use strict";function t(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function n(r){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?t(Object(i),!0).forEach(function(e){var t,n;t=r,n=i[e=e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))})}return r}function $(e,t,n,r,i){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:i;return e===i?n:e}var r="undefined",i="object",o="any",a="*",u="__",c="undefined"!=typeof process?process:{},B=(c.env&&c.env.NODE_ENV,"undefined"!=typeof window);function s(e,t){return t.charAt(0)[e]()+t.slice(1)}null!=c.versions&&c.versions.node,B&&"nodejs"===window.name||"undefined"!=typeof navigator&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));var l=s.bind(null,"toUpperCase"),f=s.bind(null,"toLowerCase");function d(e){return y(e)?l("null"):"object"==typeof e?M((t=e).constructor)?t.constructor.name:null:Object.prototype.toString.call(e).slice(8,-1);var t}function p(e,t){void 0===t&&(t=!0);e=d(e);return t?f(e):e}function m(e,t){return typeof t===e}var M=m.bind(null,"function"),J=m.bind(null,"string"),g=m.bind(null,"undefined"),I=m.bind(null,"boolean");function y(e){return null===e}function z(e){if((t=e)&&("object"==typeof t||null!==t)){for(var t,n=e;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n}}function v(e){return e instanceof Error||J(e.message)&&e.constructor&&("number"===p(e=e.constructor.stackTraceLimit)&&!isNaN(e))}function h(e,t){if("object"!=typeof t||y(t))return!1;if(t instanceof e)return!0;var n=p(new e(""));if(v(t))for(;t;){if(p(t)===n)return!0;t=Object.getPrototypeOf(t)}return!1}function b(e,t){var n=e instanceof Element||e instanceof HTMLDocument;return n&&t?(void 0===(t=t)&&(t=""),(e=e)&&e.nodeName===t.toUpperCase()):n}function w(){[].slice.call(arguments,1);return 1}function F(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function H(){for(var e="",t=0,n=4294967295*Math.random()|0;t++<36;){var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t-1],i=15&n;e+="-"==r||"4"==r?r:("x"==r?i:3&i|8).toString(16),n=t%8==0?4294967295*Math.random()|0:n>>4}return e}m.bind(null,"symbol"),h.bind(null,TypeError),h.bind(null,SyntaxError),w(b,"form"),w(b,"button"),w(b,"input"),w(b,"select");var S="global",E=u+"global"+u,P=typeof self==i&&self.self===self&&self||typeof global==i&&global.global===global&&global||void 0;function X(e){return P[E][e]}function W(e,t){return P[E][e]=t}function G(e){delete P[E][e]}function O(e,t,n){var r,i;try{j(e)&&(i=(r=window[e])[t].bind(r))}catch(e){}return i||n}P[E]||(P[E]={});var x={};function j(t){if(typeof x[t]!=r)return x[t];try{var e=window[t];e.setItem(r,r),e.removeItem(r)}catch(e){return x[t]=!1}return x[t]=!0}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,r=arguments[t];for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var D="function",U="undefined",K="@@redux/"+Math.random().toString(36),N=function(){return typeof Symbol===D&&Symbol.observable||"@@observable"}(),_=" != "+D;function Q(e,t,n){if(typeof t===D&&typeof n===U&&(n=t,t=void 0),typeof n!==U){if(typeof n!==D)throw new Error("enhancer"+_);return n(Q)(e,t)}if(typeof e!==D)throw new Error("reducer"+_);var r=e,i=t,o=[],a=o,u=!1;function c(){a===o&&(a=o.slice())}function l(){return i}function f(t){if(typeof t!==D)throw new Error("Listener"+_);var n=!0;return c(),a.push(t),function(){var e;n&&(n=!1,c(),e=a.indexOf(t),a.splice(e,1))}}function s(e){if(!z(e))throw new Error("Act != obj");if(typeof e.type===U)throw new Error("ActType "+U);if(u)throw new Error("Dispatch in reducer");try{u=!0,i=r(i,e)}finally{u=!1}for(var t=o=a,n=0;n<t.length;n++)(0,t[n])();return e}return s({type:"@@redux/INIT"}),(n={dispatch:s,subscribe:f,getState:l,replaceReducer:function(e){if(typeof e!==D)throw new Error("next reducer"+_);r=e,s({type:"@@redux/INIT"})}})[N]=function(){var e,n=f;return(e={subscribe:function(e){if("object"!=typeof e)throw new TypeError("Observer != obj");function t(){e.next&&e.next(l())}return t(),{unsubscribe:n(t)}}})[N]=function(){return this},e},n}function Y(){var e=[].slice.call(arguments);return 0===e.length?function(e){return e}:1===e.length?e[0]:e.reduce(function(e,t){return function(){return e(t.apply(void 0,[].slice.call(arguments)))}})}var q=u+"anon_id",R=u+"user_id",Z=u+"user_traits",c={__proto__:null,ANON_ID:q,USER_ID:R,USER_TRAITS:Z},V="userId",ee="anonymousId",te=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],ne=["name","EVENTS","config","loaded"],L=te.reduce(function(e,t){return e[t]=t,e},{registerPluginType:function(e){return"registerPlugin:"+e},pluginReadyType:function(e){return"ready:"+e}}),re=/^utm_/,ie=/^an_prop_/,oe=/^an_trait_/;function ae(e){return{userId:e.getItem(R),anonymousId:e.getItem(q),traits:e.getItem(Z)}}var ue=function(e){return u+"TEMP"+u+e};var k={};function A(e,t){k[e]&&M(k[e])&&(k[e](t),delete k[e])}function T(e){var p,g,r=e.data,i=e.action,l=e.instance,t=e.state,f=e.allPlugins,n=e.allMatches,c=e.store,o=e.EVENTS;try{var d=t.plugins,a=t.context,m=i.type,s=m.match(ce),u=r.exact.map(function(e){return e.pluginName}),y=(s&&(u=n.during.map(function(e){return e.pluginName})),p=l,g=u,function(e,t,n){var r,i,o,a,l,u,f,c,d=t.config,t=t.name,s=t+"."+e.type,t=(n&&(s=n.event),e.type.match(ce)?(o=t,a=s,l=g,u=n,f=e,function(e,t){var n=u?u.name:o,r=t&&ve(t)?t:l;if(u&&(!(r=t&&ve(t)?t:[o]).includes(o)||1!==r.length))throw new Error("Method "+a+" can only abort "+o+" plugin. "+JSON.stringify(r)+" input valid");return C({},f,{abort:{reason:e,plugins:r,caller:a,_:n}})}):(r=e,i=s,function(){throw new Error(r.type+" action not cancellable. Remove abort in "+i)}));return{payload:(c=e,Object.keys(c).reduce(function(e,t){return"type"===t||(e[t]=z(c[t])?Object.assign({},c[t]):c[t]),e},{})),instance:p,config:d||{},abort:t}}),v=r.exact.reduce(function(e,t){var n=t.pluginName,t=t.methodName,r=!1;return t.match(/^initialize/)||t.match(/^reset/)||(r=!d[n].loaded),a.offline&&t.match(/^(page|track|identify)/)&&(r=!0),e[""+n]=r,e},{});return Promise.resolve(r.exact.reduce(function(e,t,n){var s=t.pluginName;return Promise.resolve(e).then(function(t){function e(){return Promise.resolve(t)}var n=r.namespaced&&r.namespaced[s]?Promise.resolve(r.namespaced[s].reduce(function(e,c,t){return Promise.resolve(e).then(function(t){{if(c.method&&M(c.method)){var e=c.methodName,n=c.pluginName,r,i=be(e);if(i&&i.name===n)throw r=be(i.method),new Error([n+" plugin is calling method "+e,"Plugins cant call self","Use "+i.method+" "+(r?"or "+r.method:"")+" in "+n+" plugin insteadof "+e].join("\n"));return Promise.resolve(c.method({payload:t,instance:l,abort:(o=t,a=s,u=c.pluginName,function(e,t){return C({},o,{abort:{reason:e,plugins:t||[a],caller:m,from:u||a}})}),config:de(c.pluginName,d,f),plugins:d})).then(function(e){e=z(e)?e:{};return Promise.resolve(C({},t,e))})}return t}var o,a,u})},Promise.resolve(i))).then(function(e){t[s]=e}):void(t[s]=i);return n&&n.then?n.then(e):e()})},Promise.resolve({}))).then(function(u){return Promise.resolve(r.exact.reduce(function(e,t,n){try{var i=r.exact.length===n+1,o=t.pluginName,a=f[o];return Promise.resolve(e).then(function(n){var r=u[o]||{};if(ge(r=s?n:r,o))return fe({data:r,method:m,instance:l,pluginName:o,store:c}),Promise.resolve(n);if(ge(n,o))return i&&fe({data:n,method:m,instance:l,store:c}),Promise.resolve(n);if(v.hasOwnProperty(o)&&!0===v[o])return c.dispatch({type:"queue",plugin:o,payload:r,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(n);var e=y(u[o],f[o]);return Promise.resolve(a[m]({abort:e.abort,payload:r,instance:l,config:de(o,d,f),plugins:d})).then(function(e){var e=z(e)?e:{},e=C({},n,e),t=u[o];return ge(t,o)?fe({data:t,method:m,instance:l,pluginName:o,store:c}):((t=m+":"+o).match(/:/g)||[]).length<2&&!m.match(se)&&!m.match(le)&&l.dispatch(C({},s?e:r,{type:t,_:{called:t,from:"submethod"}})),Promise.resolve(e)})})}catch(e){return Promise.reject(e)}},Promise.resolve(i))).then(function(e){if(!(m.match(ce)||m.match(/^registerPlugin/)||m.match(le)||m.match(se)||m.match(/^params/)||m.match(/^userIdChanged/))){if(o.plugins.includes(m),e._&&e._.originalAction===m)return e;var t=C({},e,{_:{originalAction:e.type,called:e.type,from:"engineEnd"}});ye(e,r.exact.length)&&!m.match(/End$/)&&(t=C({},t,{type:e.type+"Aborted"})),c.dispatch(t)}return e})})}catch(e){return Promise.reject(e)}}var ce=/Start$/,se=/^bootstrap/,le=/^ready/;function fe(e){var t=e.pluginName,t=e.method+"Aborted"+(t?":"+t:"");e.store.dispatch(C({},e.data,{type:t,_:{called:t,from:"abort"}}))}function de(e,t,n){t=t[e]||n[e];return t&&t.config?t.config:{}}function pe(n,e){return e.reduce(function(e,t){return t[n]?e.concat({methodName:n,pluginName:t.name,method:t[n]}):e},[])}function me(e,t){var n=e.replace(ce,""),t=t?":"+t:"";return[e+t,n+t,n+"End"+t]}function ge(e,t){e=e.abort;return e&&(!0===e||he(e,t)||e&&he(e.plugins,t))}function ye(e,t){e=e.abort;if(e){if(!0===e||J(e))return 1;var n=e.plugins;return ve(e)&&e.length===t||ve(n)&&n.length===t}}function ve(e){return Array.isArray(e)}function he(e,t){return!(!e||!ve(e))&&e.includes(t)}function be(e){e=e.match(/(.*):(.*)/);return!!e&&{method:e[1],name:e[2]}}function Ie(y,v,h){var b={};return function(g){return function(m){return function(e){try{var t,n,r,l,i,o,a,u,f=function(e){return t?e:m(p)},c=e.type,d=e.plugins,p=e;if(e.abort)return Promise.resolve(m(e));c===L.enablePlugin&&g.dispatch({type:L.initializeStart,plugins:d,disabled:[],fromEnable:!0,meta:e.meta}),c===L.disablePlugin&&setTimeout(function(){return A(e.meta.rid,{payload:e})},0),c===L.initializeEnd&&(n=v(),l=(r=Object.keys(n)).filter(function(e){return d.includes(e)}).map(function(e){return n[e]}),i=[],o=[],a=e.disabled,u=l.map(function(t){var n=t.name;return function r(i,o,a){return new Promise(function(t,n){return o()?t(i):a<1?n(C({},i,{queue:!0})):new Promise(function(e){return setTimeout(e,10)}).then(function(e){return r(i,o,a-10).then(t,n)})})}(t,t.loaded,1e4).then(function(e){return b[n]||(g.dispatch({type:L.pluginReadyType(n),name:n,events:Object.keys(t).filter(function(e){return!ne.includes(e)})}),b[n]=!0),i=i.concat(n),t}).catch(function(e){if(e instanceof Error)throw new Error(e);return o=o.concat(e.name),e})}),Promise.all(u).then(function(e){var t={plugins:i,failed:o,disabled:a};setTimeout(function(){r.length===u.length+a.length&&g.dispatch(C({},{type:L.ready},t))},0)}));var s=function(){if(c!==L.bootstrap)return/^ready:([^:]*)$/.test(c)&&setTimeout(function(){var a,u,n,c,e,s,l,f;a=g,u=y,c=v(),e=a.getState(),s=e.plugins,l=e.queue,f=e.user,!e.context.offline&&l&&l.actions&&l.actions.length&&((n=l.actions.reduce(function(e,t,n){return s[t.plugin].loaded?(e.process.push(t),e.processIndex.push(n)):(e.requeue.push(t),e.requeueIndex.push(n)),e},{processIndex:[],process:[],requeue:[],requeueIndex:[]})).processIndex&&n.processIndex.length&&(n.processIndex.forEach(function(e){var n,r,e=l.actions[e],t=e.plugin,i=e.payload.type,o=c[t][i];o&&M(o)&&(void 0===(n=e.payload)&&(n={}),void 0===(r=f)&&(r={}),o({payload:e=[V,ee].reduce(function(e,t){return n.hasOwnProperty(t)&&r[t]&&r[t]!==n[t]&&(e[t]=r[t]),e},n),config:s[t].config,instance:u}),a.dispatch(C({},e,{type:o=i+":"+t,_:{called:o,from:"queueDrain"}})))}),e=l.actions.filter(function(e,t){return!~n.processIndex.indexOf(t)}),l.actions=e))},0),Promise.resolve(function(n,e,i,l,f){try{var o=M(e)?e():e,a=n.type,d=a.replace(ce,"");if(n._&&n._.called)return Promise.resolve(n);var u=i.getState(),p=(y=o,void 0===(r=u.plugins)&&(r={}),void 0===(v=n.options)&&(v={}),Object.keys(y).filter(function(e){var t=v.plugins||{};return I(t[e])?t[e]:!1!==t.all&&(!r[e]||!1!==r[e].enabled)}).map(function(e){return y[e]})),m=(p=a===L.initializeStart&&n.fromEnable?Object.keys(u.plugins).filter(function(e){var t=u.plugins[e];return n.plugins.includes(e)&&!t.initialized}).map(function(e){return o[e]}):p).map(function(e){return e.name}),c=(s=p,t=me(g=a).map(function(e){return pe(e,s)}),s.reduce(function(e,t){var t=t.name,n=me(g,t).map(function(e){return pe(e,s)}),r=n[0],i=n[1],n=n[2];return r.length&&(e.beforeNS[t]=r),i.length&&(e.duringNS[t]=i),n.length&&(e.afterNS[t]=n),e},{before:t[0],beforeNS:{},during:t[1],duringNS:{},after:t[2],afterNS:{}}));return Promise.resolve(T({action:n,data:{exact:c.before,namespaced:c.beforeNS},state:u,allPlugins:o,allMatches:c,instance:i,store:l,EVENTS:f})).then(function(t){function e(){var e=function(){if(a.match(ce))return Promise.resolve(T({action:C({},n,{type:d+"End"}),data:{exact:c.after,namespaced:c.afterNS},state:u,allPlugins:o,allMatches:c,instance:i,store:l,EVENTS:f})).then(function(e){e.meta&&e.meta.hasCallback&&A(e.meta.rid,{payload:e})})}();return e&&e.then?e.then(function(){return t}):t}if(ye(t,m.length))return t;var n,r=a!==d?Promise.resolve(T({action:C({},t,{type:d}),data:{exact:c.during,namespaced:c.duringNS},state:u,allPlugins:o,allMatches:c,instance:i,store:l,EVENTS:f})).then(function(e){n=e}):void(n=t);return r&&r.then?r.then(e):e()})}catch(n){return Promise.reject(n)}var g,s,t,y,r,v}(e,v,y,g,h)).then(function(e){e=m(e);return t=1,e})}();return Promise.resolve(s&&s.then?s.then(f):f(s))}catch(e){return Promise.reject(e)}}}}}var we=function(){var a=this;this.before=[],this.after=[],this.addMiddleware=function(e,t){a[t]=a[t].concat(e)},this.removeMiddleware=function(t,e){var n=a[e].findIndex(function(e){return e===t});-1!==n&&(a[e]=[].concat(a[e].slice(0,n),a[e].slice(n+1)))},this.dynamicMiddlewares=function(o){return function(i){return function(r){return function(e){var t={getState:i.getState,dispatch:function(e){return i.dispatch(e)}},n=a[o].map(function(e){return e(t)});return Y.apply(void 0,n)(r)(e)}}}}};function Se(e,t){return e.substring(t.length+1,e.length)}function Ee(e,n,r){return e.reduce(function(e,t){return e[t]=C({},r[t],{enabled:n}),e},r)}function Pe(e){try{return JSON.parse(JSON.stringify(e))}catch(e){}return e}var Oe={last:{},history:[]};function xe(e,t){void 0===e&&(e=Oe);var n=t.options,r=t.meta;return t.type===L.track?(t=Pe(C({event:t.event,properties:t.properties},Object.keys(n).length&&{options:n},{meta:r})),C({},e,{last:t,history:e.history.concat(t)})):e}var je={actions:[]};function Ne(e,t){void 0===e&&(e=je);var n=t.payload;switch(t.type){case"queue":var r=n&&n.type&&n.type===L.identify?[t].concat(e.actions):e.actions.concat(t);return C({},e,{actions:r});case"dequeue":return[];default:return e}}var _e=/#.*$/;var ke=function(e){if(void 0===e&&(e={}),!B)return e;var t,n=document,r=n.title,n=n.referrer,i=window,o=i.location,a=i.innerWidth,i=i.innerHeight,u=o.hash,o=o.search,c=(t=o,(c=function(){if(B)for(var e,t=document.getElementsByTagName("link"),n=0;e=t[n];n++)if("canonical"===e.getAttribute("rel"))return e.getAttribute("href")}())?c.match(/\?/)?c:c+t:window.location.href.replace(_e,"")),r={title:r,url:c,path:"/"+((t=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(t=c))&&t[3]?t[3].split("?")[0].replace(_e,""):""),hash:u,search:o,width:a,height:i};return n&&""!==n&&(r.referrer=n),C({},r,e)},Ae={last:{},history:[]};function Te(e,t){void 0===e&&(e=Ae);var n=t.options;return t.type===L.page?(t=Pe(C({properties:t.properties,meta:t.meta},Object.keys(n).length&&{options:n})),C({},e,{last:t,history:e.history.concat(t)})):e}var i={},Me={initialized:!1,sessionId:H(),app:null,version:null,debug:!1,offline:!!B&&!navigator.onLine,os:{name:"na"},userAgent:B?navigator.userAgent:"node",library:{name:"analytics",version:"0.11.0"},timezone:void 0,locale:void 0,campaign:{},referrer:i};function ze(e,t){var n=(e=void 0===e?Me:e).initialized,r=t.campaign;switch(t.type){case L.campaign:return C({},e,{campaign:r});case L.offline:return C({},e,{offline:!0});case L.online:return C({},e,{offline:!1});default:return n?e:C({},Me,e,{initialized:!0})}}var Ce=["plugins","reducers","storage"];function De(){return W("analytics",[]),function(i){return function(e,t,n){var e=i(e,t,n),r=e.dispatch;return Object.assign(e,{dispatch:function(e){return P[E].analytics.push(e.action||e),r(e)}})}}}function Ue(){return function(){return Y(Y.apply(null,arguments),De())}}function qe(e){return e?"array"===p(e)?e:[e]:[]}function Re(e,t,n){void 0===e&&(e={});var r,i,o=H();return t&&(k[o]=(r=t,i=function(e){for(var t,n=e||Array.prototype.slice.call(arguments),r=0;r<n.length;r++)if(M(n[r])){t=n[r];break}return t}(n),function(e){i&&i(e),r(e)})),C({},e,{rid:o,ts:(new Date).getTime()},t?{hasCallback:!0}:{})}function Ve(e){function o(){return u}function c(){throw new Error("Abort disabled inListener")}var d,p,m,g,y,v,h,b,I,w=(e=void 0===e?{}:e).reducers||{},S=e.initialUser||{},a=(e.plugins||[]).reduce(function(e,n){if(M(n))return e.middlewares=e.middlewares.concat(n),e;if(n.NAMESPACE&&(n.name=n.NAMESPACE),!n.name)throw new Error("https://lytics.dev/errors/1");var t=n.EVENTS?Object.keys(n.EVENTS).map(function(e){return n.EVENTS[e]}):[],t=(e.pluginEnabled[n.name]=!(!1===n.enabled||n.config&&!1===n.config.enabled),delete n.enabled,n.methods&&(e.methods[n.name]=Object.keys(n.methods).reduce(function(e,t){var r;return e[t]=(r=n.methods[t],function(){for(var e=Array.prototype.slice.call(arguments),t=new Array(r.length),n=0;n<e.length;n++)t[n]=e[n];return t[t.length]=l,r.apply({instance:l},t)}),e},{}),delete n.methods),Object.keys(n).concat(t)),t=new Set(e.events.concat(t));if(e.events=Array.from(t),e.pluginsArray=e.pluginsArray.concat(n),e.plugins[n.name])throw new Error(n.name+"AlreadyLoaded");return e.plugins[n.name]=n,e.plugins[n.name].loaded||(e.plugins[n.name].loaded=function(){return!0}),e},{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),t=e.storage||{getItem:X,setItem:W,removeItem:G},s=(d=t,function(e,t,n){return t.getState("user")[e]||(n&&z(n)&&n[e]?n[e]:ae(d)[e]||X(ue(e))||null)}),u=a.plugins,n=a.events.filter(function(e){return!ne.includes(e)}).sort(),E=new Set(n.concat(te).filter(function(e){return!ne.includes(e)})),E=Array.from(E).sort(),r=new we,P=r.addMiddleware,O=r.removeMiddleware,r=r.dynamicMiddlewares,x=function(e){for(var t,l=e?(e=e.match(/\?(.*)/))&&e[1]?e[1].split("#")[0]:"":B&&window.location.search.substring(1),n=Object.create(null),f=/([^&=]+)=?([^&]*)/g;i=f.exec(l);){var r=F(i[1]),i=F(i[2]);"[]"===r.substring(r.length-2)?(n[r=r.substring(0,r.length-2)]||(n[r]=[])).push(i):n[r]=""===i||i}for(t in n){var d=t.split("[");if(1<d.length){{o=void 0;a=void 0;p=void 0;u=void 0;c=void 0;s=void 0;var o=n;var a=d.map(function(e){return e.replace(/[?[\]\\ ]/g,"")});var p=n[t];for(var u=a.length-1,c=0;c<u;++c){var s=a[c];if("__proto__"===s||"constructor"===s)break;s in o||(o[s]={}),o=o[s]}o[a[u]]=p}delete n[t]}}return n}(),j=ae(t),N=C({},j,S,x.an_uid?{userId:x.an_uid}:{},x.an_aid?{anonymousId:x.an_aid}:{}),i=(N.anonymousId||(N.anonymousId=H()),C({enable:function(t,n){return new Promise(function(e){f.dispatch({type:L.enablePlugin,plugins:qe(t),_:{originalAction:L.enablePlugin}},e,[n])})},disable:function(t,n){return new Promise(function(e){f.dispatch({type:L.disablePlugin,plugins:qe(t),_:{originalAction:L.disablePlugin}},e,[n])})}},a.methods)),l={identify:function(e,t,n,r){try{var i=J(e)?e:null,o=z(e)?e:t,a=n||{},u=l.user(),c=(W(ue(V),i),i||o.userId||s(V,l,o));return Promise.resolve(new Promise(function(e){f.dispatch(C({type:L.identifyStart,userId:c,traits:o||{},options:a,anonymousId:u.anonymousId},u.id&&u.id!==i&&{previousId:u.id}),e,[t,n,r])}))}catch(e){return Promise.reject(e)}},track:function(e,t,n,r){try{var i=z(e)?e.event:e;if(!i||!J(i))throw new Error("EventMissing");var o=z(e)?e:t||{},a=z(n)?n:{};return Promise.resolve(new Promise(function(e){f.dispatch({type:L.trackStart,event:i,properties:o,options:a,userId:s(V,l,t),anonymousId:s(ee,l,t)},e,[t,n,r])}))}catch(e){return Promise.reject(e)}},page:function(t,n,r){try{var i=z(t)?t:{},o=z(n)?n:{};return Promise.resolve(new Promise(function(e){f.dispatch({type:L.pageStart,properties:ke(i),options:o,userId:s(V,l,i),anonymousId:s(ee,l,i)},e,[t,n,r])}))}catch(t){return Promise.reject(t)}},user:function(e){if(e===V||"id"===e)return s(V,l);if(e===ee||"anonId"===e)return s(ee,l);var t=l.getState("user");return e?$(t,e):t},reset:function(t){return new Promise(function(e){f.dispatch({type:L.resetStart},e,t)})},ready:function(e){return l.on(L.ready,e)},on:function(n,r){if(!n||!M(r))return!1;if(n===L.bootstrap)throw new Error(".on disabled for "+n);var e,t,i=/Start$|Start:/;if("*"===n)return t=function(e){return function(t){return function(e){return e.type.match(i)||r({payload:e,instance:l,plugins:u}),t(e)}}},P(e=function(e){return function(t){return function(e){return e.type.match(i)&&r({payload:e,instance:l,plugins:u}),t(e)}}},Le),P(t,$e),function(){O(e,Le),O(t,$e)};function o(e){return function(t){return function(e){return e.type===n&&r({payload:e,instance:l,plugins:u,abort:c}),t(e)}}}var a=n.match(i)?Le:$e;return P(o,a),function(){return O(o,a)}},once:function(e,t){if(!e||!M(t))return!1;if(e===L.bootstrap)throw new Error(".once disabled for "+e);var n=l.on(e,function(e){t({payload:e.payload,instance:l,plugins:u,abort:c}),n()});return n},getState:function(e){var t=f.getState();return e?$(t,e):Object.assign({},t)},dispatch:function(e){var t=J(e)?{type:e}:e;if(te.includes(t.type))throw new Error("reserved action "+t.type);t=C({},t,{_:C({originalAction:t.type},e._||{})});f.dispatch(t)},enablePlugin:i.enable,disablePlugin:i.disable,plugins:i,storage:{getItem:t.getItem,setItem:function(e,t,n){f.dispatch({type:L.setItemStart,key:e,value:t,options:n})},removeItem:function(e,t){f.dispatch({type:L.removeItemStart,key:e,options:t})}},setAnonymousId:function(e,t){l.storage.setItem(q,e,t)},events:{core:te,plugins:n}},E=a.middlewares.concat([function(e){return function(t){return function(e){return e.meta||(e.meta=Re()),t(e)}}},r(Le),Ie(l,o,{all:E,plugins:n}),(I=t,function(e){return function(o){return function(e){var t=e.type,n=e.key,r=e.value,i=e.options;if(t===L.setItem||t===L.removeItem){if(e.abort)return o(e);t===L.setItem?I.setItem(n,r,i):I.removeItem(n,i)}return o(e)}}}),(b=(h=l).storage.setItem,function(l){return function(s){return function(e){var r,t,n,i,o,a,u,c;return e.type===L.bootstrap&&(r=e.params,o=e.user,t=e.persistedUser,n=e.initialUser,i=t.userId===o.userId,t.anonymousId!==o.anonymousId&&b(q,o.anonymousId),i||b(R,o.userId),n.traits&&b(Z,C({},i&&t.traits?t.traits:{},n.traits)),(o=Object.keys(e.params)).length&&(a=r.an_uid,u=r.an_event,c=o.reduce(function(e,t){var n;return(t.match(re)||t.match(/^(d|g)clid/))&&(n=t.replace(re,""),e.campaign["campaign"===n?"name":n]=r[t]),t.match(ie)&&(e.props[t.replace(ie,"")]=r[t]),t.match(oe)&&(e.traits[t.replace(oe,"")]=r[t]),e},{campaign:{},props:{},traits:{}}),l.dispatch(C({type:L.params,raw:r},c,a?{userId:a}:{})),a&&setTimeout(function(){return h.identify(a,c.traits)},0),u&&setTimeout(function(){return h.track(u,c.props)},0),Object.keys(c.campaign).length&&l.dispatch({type:L.campaign,campaign:c.campaign}))),s(e)}}}),(g=(i=(i=l).storage).setItem,y=i.removeItem,v=i.getItem,function(u){return function(a){return function(e){var t,n,r=e.userId,i=e.traits,o=e.options;return e.type===L.reset&&([R,Z,q].forEach(function(e){y(e)}),[V,ee,"traits"].forEach(function(e){G(ue(e))})),e.type===L.identify&&(v(q)||g(q,H()),t=v(R),n=v(Z)||{},t&&t!==r&&u.dispatch({type:L.userIdChanged,old:{userId:t,traits:n},new:{userId:r,traits:i},options:o}),r&&g(R,r),i&&g(Z,C({},n,i))),a(e)}}}),r($e)]),n={context:ze,user:(m=t,function(e,t){if(void 0===e&&(e={}),(t=void 0===t?{}:t).type===L.setItemEnd){if(t.key===q)return C({},e,{anonymousId:t.value});if(t.key===R)return C({},e,{userId:t.value})}switch(t.type){case L.identify:return Object.assign({},e,{userId:t.userId,traits:C({},e.traits,t.traits)});case L.reset:return[R,q,Z].forEach(function(e){m.removeItem(e)}),Object.assign({},e,{userId:null,anonymousId:null,traits:{}});default:return e}}),page:Te,track:xe,plugins:(p=o,function(e,t){void 0===e&&(e={});var n={};if("initialize:aborted"===t.type)return e;if(/^registerPlugin:([^:]*)$/.test(t.type)){var r=Se(t.type,"registerPlugin"),i=p()[r];if(!i||!r)return e;var o=t.enabled;return n[r]={enabled:o,initialized:!!o&&Boolean(!i.initialize),loaded:!!o&&Boolean(i.loaded()),config:i.config||{}},C({},e,n)}if(/^initialize:([^:]*)$/.test(t.type))return r=Se(t.type,L.initialize),(o=p()[r])&&r?(n[r]=C({},e[r],{initialized:!0,loaded:Boolean(o.loaded())}),C({},e,n)):e;if(/^ready:([^:]*)$/.test(t.type))return n[t.name]=C({},e[t.name],{loaded:!0}),C({},e,n);switch(t.type){case L.disablePlugin:return C({},e,Ee(t.plugins,!1,e));case L.enablePlugin:return C({},e,Ee(t.plugins,!0,e));default:return e}}),queue:Ne},i=Y,r=Y;B&&e.debug&&((t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)&&(i=t({trace:!0,traceLimit:25})),r=function(){return 0===arguments.length?De():z(typeof arguments[0])?Ue():Ue().apply(null,arguments)});k=e;var _,k,t=Object.keys(k).reduce(function(e,t){return Ce.includes(t)||(e[t]=k[t]),e},{}),e={context:t,user:N,plugins:a.pluginsArray.reduce(function(e,t){var n=t.name,r=t.config,i=t.loaded,o=a.pluginEnabled[n];return e[n]={enabled:o,initialized:!!o&&Boolean(!t.initialize),loaded:Boolean(i()),config:r||{}},e},{})},f=Q(function(e){for(var t=Object.keys(e),l={},n=0;n<t.length;n++){var r=t[n];typeof e[r]===D&&(l[r]=e[r])}var f,i,d=Object.keys(l);try{i=l,Object.keys(i).forEach(function(e){var t=i[e];if(typeof t(void 0,{type:"@@redux/INIT"})===U||typeof t(void 0,{type:K})===U)throw new Error("reducer "+e+" "+U)})}catch(e){f=e}return function(e,t){if(void 0===e&&(e={}),f)throw f;for(var n,r=!1,i={},o=0;o<d.length;o++){var a,u=d[o],c=e[u],s=(0,l[u])(c,t);if(typeof s===U)throw n=u,a="action "+((a=(a=t)&&a.type)&&a.toString()||"?")+"reducer "+n+" returns "+U,new Error(a);i[u]=s,r=r||s!==c}return r?i:e}}(C({},n,w)),e,r(i(function(){var a=arguments;return function(o){return function(e,t,n){var e=o(e,t,n),r=e.dispatch,i={getState:e.getState,dispatch:function(e){return r(e)}},t=[].slice.call(a).map(function(e){return e(i)});return C({},e,{dispatch:r=Y.apply(void 0,t)(e.dispatch)})}}}.apply(void 0,E)))),n=(f.dispatch=(_=f.dispatch,function(e,t,n){e=C({},e,{meta:Re(e.meta,t,qe(n))});return _.apply(null,[e])}),Object.keys(u)),A=(f.dispatch({type:L.bootstrap,plugins:n,config:t,params:x,user:N,initialUser:S,persistedUser:j}),n.filter(function(e){return a.pluginEnabled[e]})),T=n.filter(function(e){return!a.pluginEnabled[e]});return f.dispatch({type:L.registerPlugins,plugins:n,enabled:a.pluginEnabled}),a.pluginsArray.map(function(e,t){var n=e.bootstrap,r=e.config,i=e.name;n&&M(n)&&n({instance:l,config:r,payload:e}),f.dispatch({type:L.registerPluginType(i),name:i,enabled:a.pluginEnabled[i],plugin:e}),a.pluginsArray.length===t+1&&f.dispatch({type:L.initializeStart,plugins:A,disabled:T})}),l}var Le="before",$e="after",Be="cookie",Je=We(),Fe=Ge,He=Ge;function Xe(e){return Je?Ge(e,"",-1):G(e)}function We(){if(void 0!==Je)return Je;var e="cookiecookie";try{Ge(e,e),Je=-1!==document.cookie.indexOf(e),Xe(e)}catch(e){Je=!1}return Je}function Ge(e,t,n,r,i,o){var a;if("undefined"!=typeof window)return a=1<arguments.length,!1===Je&&(a?W(e,t):X(e)),a?document.cookie=e+"="+encodeURIComponent(t)+(n?"; expires="+new Date(+new Date+1e3*n).toUTCString()+(r?"; path="+r:"")+(i?"; domain="+i:"")+(o?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}var Ke="localStorage",i=j.bind(null,"localStorage"),Qe=(O("localStorage","getItem",X),O("localStorage","setItem",W),O("localStorage","removeItem",G),"sessionStorage"),Ye=j.bind(null,"sessionStorage");function Ze(e){var t=e;try{if("true"===(t=JSON.parse(e)))return!0;if("false"===t)return!1;if(z(t))return t;parseFloat(t)===t&&(t=parseFloat(t))}catch(e){}if(null!==t&&""!==t)return t}O("sessionStorage","getItem",X),O("sessionStorage","setItem",W),O("sessionStorage","removeItem",G);var et=i(),tt=Ye(),nt=We();function rt(e,t){if(e){var t=it(t),n=!ct(t),r=ot(t)?Ze(localStorage.getItem(e)):void 0;if(n&&!g(r))return r;var i=at(t)?Ze(Fe(e)):void 0;if(n&&i)return i;t=ut(t)?Ze(sessionStorage.getItem(e)):void 0;if(n&&t)return t;e=X(e);return n?e:{localStorage:r,sessionStorage:t,cookie:i,global:e}}}function it(e){return e?J(e)?e:e.storage:o}function ot(e){return et&&st(e,Ke)}function at(e){return nt&&st(e,Be)}function ut(e){return tt&&st(e,Qe)}function ct(e){return e===a||"all"===e}function st(e,t){return e===o||e===t||ct(e)}function lt(e,t,n){return{location:e,current:t,previous:n}}var ft={setItem:function(e,t,n){var r,i,o;if(e&&!g(t))return r={},n=it(n),i=JSON.stringify(t),o=!ct(n),ot(n)&&(r[Ke]=lt(Ke,t,Ze(localStorage.getItem(e))),localStorage.setItem(e,i),o)?r[Ke]:at(n)&&(r[Be]=lt(Be,t,Ze(Fe(e))),He(e,i),o)?r[Be]:ut(n)&&(r[Qe]=lt(Qe,t,Ze(sessionStorage.getItem(e))),sessionStorage.setItem(e,i),o)?r[Qe]:(r[S]=lt(S,t,X(e)),W(e,t),o?r[S]:r)},getItem:rt,removeItem:function(e,t){var n,r;if(e)return t=it(t),n=rt(e,a),r={},!g(n.localStorage)&&ot(t)&&(localStorage.removeItem(e),r[Ke]=n.localStorage),!g(n.cookie)&&at(t)&&(Xe(e),r[Be]=n.cookie),!g(n.sessionStorage)&&ut(t)&&(sessionStorage.removeItem(e),r[Qe]=n.sessionStorage),!g(n.global)&&st(t,S)&&(G(e),r[S]=n.global),r}};function dt(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return Ve(n(n({},{storage:ft}),e))}return e.Analytics=dt,e.CONSTANTS=c,e.EVENTS=L,e.default=dt,e.init=dt,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
    
  function strail(pluginConfig = {}) {
    return {
      name: 'strail',
      config: {
        endpoint: 'https://app.strail.me/analytics/signals/' + pluginConfig.id
      },
      initialize: ({ config }) => {
        //console.log(config);
      },
      page: ({ payload, config, instance }) => {
        sendData(payload, config, instance);
      },
      track: ({ payload, config, instance }) => {
        sendData(payload, config, instance);
      },
      identify: ({ payload, config, instance }) => {
        sendData(payload, config, instance);
      }
    }
  }
      
  function sendData(payload, config, instance) {
    // Build data
    let data = {
      type: payload.type,
      userId: payload.userId,
      anonymousId: payload.anonymousId
    };
    
    if (payload.event) { data.event = payload.event }
    if (payload.properties) { data.properties = payload.properties }
    if (payload.traits || instance.getState().user.traits) { data.traits = payload.traits || instance.getState().user.traits; }
    
    if (instance.getState().context) {
      data.context = instance.getState().context
  
      // Save and get UTMs
      const utms = ['source', 'medium', 'campaign', 'term', 'content'];
      utms.forEach(utm => {
        if (data.context.campaign[utm]) { analytics.storage.setItem(utm, data.context.campaign[utm], 'sessionStorage'); }
        if (analytics.storage.getItem(utm)) { data.context.campaign[utm] = analytics.storage.getItem(utm) }
      });
    }
  
    // Send data
    fetch(config.endpoint, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
    //navigator.sendBeacon(config.endpoint, JSON.stringify(data));
    //console.log('--- --- ---');
    //console.log(data);
  }
  
  const id = new URL(document.currentScript.src).searchParams.get('id');
    
  var analytics = _analytics.init({ app: 'tiendanube', plugins: [strail({ id: id })] });
  window.analytics = analytics;
  analytics.page();
  
  // Variables
  const currency = LS.currency.code;
  const product = LS.product;
  const category = LS.category;
  const cart = LS.cart;
  const order = LS.order;
  const customer = LS.customer;
  let products = [];
  let item = {};
  
  if (cart && cart.items) {
    for (let i=0; i < cart.items.length; i++) {
      const item = cart.items[i];
      products.push({
        product_id: item.id,
        name: item.name,
        price: item.unit_price * 0.01,
        quantity: item.quantity
      });
    }
  }
  
  if (category) {
    // Category / List
    analytics.track('Product List Viewed', {
      list_id: category.id,
      category: category.name,
      url: document.URL
    });
  } else if (product) {
    // Product
    let category = document.getElementsByClassName('breadcrumb')[0].innerText.split("/");
    category = category.slice(0, category.length - 1).join(",");
  
    item = {
      product_id: product.id,
      category: category,
      name: product.name,
      price: document.getElementById('price_display').innerText,
      quantity: 1,
      currency: currency,
      url: document.URL,
      image_url: document.getElementsByClassName('thumbnail-image')[0].src
    };
  
    analytics.track('Product Viewed', item);
  } else if (cart && !LS.theme) {
    // Checkout
    const subtotal = cart.subtotal * 0.01;
  
    analytics.track('Checkout Started', {
      total: subtotal,
      currency: currency,
      products: products
    });
  }
  
  // Add to cart
  const addToCart = document.getElementsByClassName('product-buy-btn');
  for (var i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click', function(){
      analytics.track('Product Added', item);
    });
  }
  
  // Customer identify
  if (customer && (customer != analytics.user('userId'))) {
    analytics.identify(customer.toString());
  }
})();
