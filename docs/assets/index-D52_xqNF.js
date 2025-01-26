import{E as H,g as B,P as z,T as D,V as F}from"./main-BZGTXLkN.js";var J=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),N=function(s){J(o,s);function o(){return s!==null&&s.apply(this,arguments)||this}return o}(H);function Q(s){if(s.length>=255)throw new TypeError("Alphabet too long");for(var o=new Uint8Array(256),r=0;r<o.length;r++)o[r]=255;for(var e=0;e<s.length;e++){var t=s.charAt(e),n=t.charCodeAt(0);if(o[n]!==255)throw new TypeError(t+" is ambiguous");o[n]=e}var a=s.length,c=s.charAt(0),u=Math.log(a)/Math.log(256),i=Math.log(256)/Math.log(a);function l(f){if(f instanceof Uint8Array||(ArrayBuffer.isView(f)?f=new Uint8Array(f.buffer,f.byteOffset,f.byteLength):Array.isArray(f)&&(f=Uint8Array.from(f))),!(f instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(f.length===0)return"";for(var p=0,I=0,w=0,m=f.length;w!==m&&f[w]===0;)w++,p++;for(var g=(m-w)*i+1>>>0,v=new Uint8Array(g);w!==m;){for(var b=f[w],x=0,y=g-1;(b!==0||x<I)&&y!==-1;y--,x++)b+=256*v[y]>>>0,v[y]=b%a>>>0,b=b/a>>>0;if(b!==0)throw new Error("Non-zero carry");I=x,w++}for(var A=g-I;A!==g&&v[A]===0;)A++;for(var R=c.repeat(p);A<g;++A)R+=s.charAt(v[A]);return R}function d(f){if(typeof f!="string")throw new TypeError("Expected String");if(f.length===0)return new Uint8Array;for(var p=0,I=0,w=0;f[p]===c;)I++,p++;for(var m=(f.length-p)*u+1>>>0,g=new Uint8Array(m);f[p];){var v=o[f.charCodeAt(p)];if(v===255)return;for(var b=0,x=m-1;(v!==0||b<w)&&x!==-1;x--,b++)v+=a*g[x]>>>0,g[x]=v%256>>>0,v=v/256>>>0;if(v!==0)throw new Error("Non-zero carry");w=b,p++}for(var y=m-w;y!==m&&g[y]===0;)y++;for(var A=new Uint8Array(I+(m-y)),R=I;y!==m;)A[R++]=g[y++];return A}function G(f){var p=d(f);if(p)return p;throw new Error("Non-base"+a+" character")}return{encode:l,decodeUnsafe:d,decode:G}}var X=Q;const Y=X,Z="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";var ee=Y(Z);const _=B(ee);var ne=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),C=function(){return C=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},C.apply(this,arguments)},k=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(d){a(d)}}function u(l){try{i(e.throw(l))}catch(d){a(d)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},K=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},L=function(s,o){var r=typeof Symbol=="function"&&s[Symbol.iterator];if(!r)return s;var e=r.call(s),t,n=[],a;try{for(;(o===void 0||o-- >0)&&!(t=e.next()).done;)n.push(t.value)}catch(c){a={error:c}}finally{try{t&&!t.done&&(r=e.return)&&r.call(e)}finally{if(a)throw a.error}}return n},te=function(s){ne(o,s);function o(r,e){var t=s.call(this)||this;if(t._handleMessage=function(n){if(t._injectedProvider&&n.source===window||n.origin===t._providerUrl.origin&&n.source===t._popup){if(n.data.method==="connected"){var a=new z(n.data.params.publicKey);(!t._publicKey||!t._publicKey.equals(a))&&(t._publicKey&&!t._publicKey.equals(a)&&t._handleDisconnect(),t._publicKey=a,t._autoApprove=!!n.data.params.autoApprove,t.emit("connect",t._publicKey))}else if(n.data.method==="disconnected")t._handleDisconnect();else if((n.data.result||n.data.error)&&t._responsePromises.has(n.data.id)){var c=L(t._responsePromises.get(n.data.id),2),u=c[0],i=c[1];n.data.result?u(n.data.result):i(new Error(n.data.error))}}},t._handleConnect=function(){return t._handlerAdded||(t._handlerAdded=!0,window.addEventListener("message",t._handleMessage),window.addEventListener("beforeunload",t.disconnect)),t._injectedProvider?new Promise(function(n){t._sendRequest("connect",{}),n()}):(window.name="parent",t._popup=window.open(t._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(function(n){t.once("connect",n)}))},t._handleDisconnect=function(){t._handlerAdded&&(t._handlerAdded=!1,window.removeEventListener("message",t._handleMessage),window.removeEventListener("beforeunload",t.disconnect)),t._publicKey&&(t._publicKey=null,t.emit("disconnect")),t._responsePromises.forEach(function(n,a){var c=L(n,2);c[0];var u=c[1];t._responsePromises.delete(a),u("Wallet disconnected")})},t._sendRequest=function(n,a){return k(t,void 0,void 0,function(){var c,u=this;return K(this,function(i){if(n!=="connect"&&!this.connected)throw new Error("Wallet not connected");return c=this._nextRequestId,++this._nextRequestId,[2,new Promise(function(l,d){u._responsePromises.set(c,[l,d]),u._injectedProvider?u._injectedProvider.postMessage({jsonrpc:"2.0",id:c,method:n,params:C({network:u._network},a)}):(u._popup.postMessage({jsonrpc:"2.0",id:c,method:n,params:a},u._providerUrl.origin),u.autoApprove||u._popup.focus())})]})})},t.connect=function(){return t._popup&&t._popup.close(),t._handleConnect()},t.disconnect=function(){return k(t,void 0,void 0,function(){return K(this,function(n){switch(n.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:n.sent(),n.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}})})},t.sign=function(n,a){return k(t,void 0,void 0,function(){var c,u,i;return K(this,function(l){switch(l.label){case 0:if(!(n instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:n,display:a})];case 1:return c=l.sent(),u=_.decode(c.signature),i=new z(c.publicKey),[2,{signature:u,publicKey:i}]}})})},ie(r))t._injectedProvider=r;else if(re(r))t._providerUrl=new URL(r),t._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:e}).toString();else throw new Error("provider parameter must be an injected provider or a URL string.");return t._network=e,t._publicKey=null,t._autoApprove=!1,t._popup=null,t._handlerAdded=!1,t._nextRequestId=1,t._responsePromises=new Map,t}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this._publicKey!==null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),o}(H);function re(s){return typeof s=="string"}function ie(s){return oe(s)&&ae(s.postMessage)}function oe(s){return typeof s=="object"&&s!==null}function ae(s){return typeof s=="function"}var se=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),j=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(d){a(d)}}function u(l){try{i(e.throw(l))}catch(d){a(d)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},T=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},ce=function(s){se(o,s);function o(r,e,t){var n=s.call(this)||this;return n._instance=null,n.handleMessage=function(a){},n._sendRequest=function(a,c){return j(n,void 0,void 0,function(){var u,i;return T(this,function(l){switch(l.label){case 0:return!((u=this._instance)===null||u===void 0)&&u.sendRequest?[4,this._instance.sendRequest(a,c)]:[3,2];case 1:return[2,l.sent()];case 2:return!((i=this._instance)===null||i===void 0)&&i._sendRequest?[4,this._instance._sendRequest(a,c)]:[3,4];case 3:return[2,l.sent()];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},n._handleConnect=function(){n.emit("connect")},n._handleDisconnect=function(){window.clearInterval(n._pollTimer),n.emit("disconnect")},n._network=e,n._provider=t,n}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return j(this,void 0,void 0,function(){var r=this;return T(this,function(e){switch(e.label){case 0:return this._instance=new te(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,n;((n=(t=r._instance)===null||t===void 0?void 0:t._popup)===null||n===void 0?void 0:n.closed)!==!1&&r._handleDisconnect()},200),[4,this._instance.connect()];case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return j(this,void 0,void 0,function(){return T(this,function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return r.sent(),[2]}})})},o.prototype.signTransaction=function(r){return j(this,void 0,void 0,function(){var e;return T(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransactionV2",{transaction:_.encode(r)})];case 1:return e=t.sent().transaction,[2,_.decode(e)]}})})},o.prototype.signAllTransactions=function(r){return j(this,void 0,void 0,function(){var e;return T(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactionsV2",{transactions:r.map(function(n){return _.encode(n)})})];case 1:return e=t.sent().transactions,[2,e.map(function(n){return _.decode(n)})]}})})},o.prototype.signAndSendTransaction=function(r,e){return j(this,void 0,void 0,function(){var t;return T(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:_.encode(r),options:e})];case 1:return t=n.sent(),[2,t.signature]}})})},o.prototype.signMessage=function(r,e){return e===void 0&&(e="hex"),j(this,void 0,void 0,function(){var t;return T(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(r,e)];case 1:return t=n.sent().signature,[2,Uint8Array.from(t)]}})})},o}(N);let W;const le=new Uint8Array(16);function ue(){if(!W&&(W=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!W))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return W(le)}const h=[];for(let s=0;s<256;++s)h.push((s+256).toString(16).slice(1));function de(s,o=0){return h[s[o+0]]+h[s[o+1]]+h[s[o+2]]+h[s[o+3]]+"-"+h[s[o+4]]+h[s[o+5]]+"-"+h[s[o+6]]+h[s[o+7]]+"-"+h[s[o+8]]+h[s[o+9]]+"-"+h[s[o+10]]+h[s[o+11]]+h[s[o+12]]+h[s[o+13]]+h[s[o+14]]+h[s[o+15]]}const fe=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),$={randomUUID:fe};function he(s,o,r){if($.randomUUID&&!o&&!s)return $.randomUUID();s=s||{};const e=s.random||(s.rng||ue)();return e[6]=e[6]&15|64,e[8]=e[8]&63|128,de(e)}var pe=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),q=function(){return q=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},q.apply(this,arguments)},O=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(d){a(d)}}function u(l){try{i(e.throw(l))}catch(d){a(d)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},P=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},V=function(s){pe(o,s);function o(r,e){var t=this,n;return t=s.call(this)||this,t._publicKey=null,t._messageHandlers={},t.handleMessage=function(a){if(t._messageHandlers[a.id]){var c=t._messageHandlers[a.id],u=c.resolve,i=c.reject;delete t._messageHandlers[a.id],a.error?i(a.error):u(a.result)}},t._sendMessage=function(a){if(!t.connected)throw new Error("Wallet not connected");return new Promise(function(c,u){var i,l,d=he();t._messageHandlers[d]={resolve:c,reject:u},(l=(i=t._iframe)===null||i===void 0?void 0:i.contentWindow)===null||l===void 0||l.postMessage({channel:"solflareWalletAdapterToIframe",data:q({id:d},a)},"*")})},t._iframe=r,t._publicKey=new z((n=e==null?void 0:e.toString)===null||n===void 0?void 0:n.call(e)),t}return Object.defineProperty(o.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return O(this,void 0,void 0,function(){return P(this,function(r){return[2]})})},o.prototype.disconnect=function(){return O(this,void 0,void 0,function(){return P(this,function(r){switch(r.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return r.sent(),[2]}})})},o.prototype.signTransaction=function(r){var e;return O(this,void 0,void 0,function(){var t,n;return P(this,function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{transaction:_.encode(r)}})];case 2:return t=a.sent(),[2,_.decode(t)];case 3:throw n=a.sent(),new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transaction");case 4:return[2]}})})},o.prototype.signAllTransactions=function(r){var e;return O(this,void 0,void 0,function(){var t,n;return P(this,function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{transactions:r.map(function(c){return _.encode(c)})}})];case 2:return t=a.sent(),[2,t.map(function(c){return _.decode(c)})];case 3:throw n=a.sent(),new Error(((e=n==null?void 0:n.toString)===null||e===void 0?void 0:e.call(n))||"Failed to sign transactions");case 4:return[2]}})})},o.prototype.signAndSendTransaction=function(r,e){var t;return O(this,void 0,void 0,function(){var n,a;return P(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:_.encode(r),options:e}})];case 2:return n=c.sent(),[2,n];case 3:throw a=c.sent(),new Error(((t=a==null?void 0:a.toString)===null||t===void 0?void 0:t.call(a))||"Failed to sign and send transaction");case 4:return[2]}})})},o.prototype.signMessage=function(r,e){var t;return e===void 0&&(e="hex"),O(this,void 0,void 0,function(){var n,a;return P(this,function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:r,display:e}})];case 2:return n=c.sent(),[2,Uint8Array.from(_.decode(n))];case 3:throw a=c.sent(),new Error(((t=a==null?void 0:a.toString)===null||t===void 0?void 0:t.call(a))||"Failed to sign message");case 4:return[2]}})})},o}(N);function M(s){return s.version===void 0}var ve="1.4.2",_e=function(){var s=function(o,r){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},s(o,r)};return function(o,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");s(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}}(),U=function(){return U=Object.assign||function(s){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(s[t]=o[t])}return s},U.apply(this,arguments)},E=function(s,o,r,e){function t(n){return n instanceof r?n:new r(function(a){a(n)})}return new(r||(r=Promise))(function(n,a){function c(l){try{i(e.next(l))}catch(d){a(d)}}function u(l){try{i(e.throw(l))}catch(d){a(d)}}function i(l){l.done?n(l.value):t(l.value).then(c,u)}i((e=e.apply(s,o||[])).next())})},S=function(s,o){var r={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},e,t,n,a;return a={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(i){return function(l){return u([i,l])}}function u(i){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(r=0)),r;)try{if(e=1,t&&(n=i[0]&2?t.return:i[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,i[1])).done)return n;switch(t=0,n&&(i=[i[0]&2,n.value]),i[0]){case 0:case 1:n=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,t=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(n=r.trys,!(n=n.length>0&&n[n.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!n||i[1]>n[0]&&i[1]<n[3])){r.label=i[1];break}if(i[0]===6&&r.label<n[1]){r.label=n[1],n=i;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(i);break}n[2]&&r.ops.pop(),r.trys.pop();continue}i=o.call(s,r)}catch(l){i=[6,l],t=0}finally{e=n=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},we=function(s){var o=typeof Symbol=="function"&&Symbol.iterator,r=o&&s[o],e=0;if(r)return r.call(s);if(s&&typeof s.length=="number")return{next:function(){return s&&e>=s.length&&(s=void 0),{value:s&&s[e++],done:!s}}};throw new TypeError(o?"Object is not iterable.":"Symbol.iterator is not defined.")},me=function(s){_e(o,s);function o(r){var e=s.call(this)||this;return e._network="mainnet-beta",e._provider=null,e._iframeParams={},e._adapterInstance=null,e._element=null,e._iframe=null,e._connectHandler=null,e._flutterHandlerInterval=null,e._handleEvent=function(t){var n,a,c,u;switch(t.type){case"connect_native_web":{e._collapseIframe(),e._adapterInstance=new ce(e._iframe,e._network,((n=t.data)===null||n===void 0?void 0:n.provider)||e._provider||"https://solflare.com/provider"),e._adapterInstance.on("connect",e._webConnected),e._adapterInstance.on("disconnect",e._webDisconnected),e._adapterInstance.connect(),e._setPreferredAdapter("native_web");return}case"connect":{e._collapseIframe(),e._adapterInstance=new V(e._iframe,((a=t.data)===null||a===void 0?void 0:a.publicKey)||""),e._adapterInstance.connect(),e._setPreferredAdapter((c=t.data)===null||c===void 0?void 0:c.adapter),e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey);return}case"disconnect":{e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect");return}case"accountChanged":{!((u=t.data)===null||u===void 0)&&u.publicKey?(e._adapterInstance=new V(e._iframe,t.data.publicKey),e._adapterInstance.connect(),e.emit("accountChanged",e.publicKey)):e.emit("accountChanged",void 0);return}case"collapse":{e._collapseIframe();return}default:return}},e._handleResize=function(t){t.resizeMode==="full"?t.params.mode==="fullscreen"?e._expandIframe():t.params.mode==="hide"&&e._collapseIframe():t.resizeMode==="coordinates"&&e._iframe&&(e._iframe.style.top=isFinite(t.params.top)?"".concat(t.params.top,"px"):"",e._iframe.style.bottom=isFinite(t.params.bottom)?"".concat(t.params.bottom,"px"):"",e._iframe.style.left=isFinite(t.params.left)?"".concat(t.params.left,"px"):"",e._iframe.style.right=isFinite(t.params.right)?"".concat(t.params.right,"px"):"",e._iframe.style.width=isFinite(t.params.width)?"".concat(t.params.width,"px"):t.params.width,e._iframe.style.height=isFinite(t.params.height)?"".concat(t.params.height,"px"):t.params.height)},e._handleMessage=function(t){var n;if(((n=t.data)===null||n===void 0?void 0:n.channel)==="solflareIframeToWalletAdapter"){var a=t.data.data||{};a.type==="event"?e._handleEvent(a.event):a.type==="resize"?e._handleResize(a):a.type==="response"&&e._adapterInstance&&e._adapterInstance.handleMessage(a)}},e._removeElement=function(){e._flutterHandlerInterval!==null&&(clearInterval(e._flutterHandlerInterval),e._flutterHandlerInterval=null),e._element&&(e._element.remove(),e._element=null)},e._removeDanglingElements=function(){var t,n,a=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var c=we(a),u=c.next();!u.done;u=c.next()){var i=u.value;i.parentElement&&i.remove()}}catch(l){t={error:l}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}},e._injectElement=function(){e._removeElement(),e._removeDanglingElements();var t=U(U({},e._iframeParams),{cluster:e._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:ve}),n=e._getPreferredAdapter();n&&(t.adapter=n),e._provider&&(t.provider=e._provider);var a=Object.keys(t).map(function(u){return"".concat(u,"=").concat(encodeURIComponent(t[u]))}).join("&"),c="".concat(o.IFRAME_URL,"?").concat(a);e._element=document.createElement("div"),e._element.className="solflare-wallet-adapter-iframe",e._element.innerHTML=`
      <iframe src='`.concat(c,`' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>
    `),document.body.appendChild(e._element),e._iframe=e._element.querySelector("iframe"),window.fromFlutter=e._handleMobileMessage,e._flutterHandlerInterval=setInterval(function(){window.fromFlutter=e._handleMobileMessage},100),window.addEventListener("message",e._handleMessage,!1)},e._collapseIframe=function(){e._iframe&&(e._iframe.style.top="",e._iframe.style.right="",e._iframe.style.height="2px",e._iframe.style.width="2px")},e._expandIframe=function(){e._iframe&&(e._iframe.style.top="0px",e._iframe.style.bottom="0px",e._iframe.style.left="0px",e._iframe.style.right="0px",e._iframe.style.width="100%",e._iframe.style.height="100%")},e._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},e._setPreferredAdapter=function(t){localStorage&&t&&localStorage.setItem("solflarePreferredWalletAdapter",t)},e._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},e._webConnected=function(){e._connectHandler&&(e._connectHandler.resolve(),e._connectHandler=null),e.emit("connect",e.publicKey)},e._webDisconnected=function(){e._connectHandler&&(e._connectHandler.reject(),e._connectHandler=null),e._disconnected(),e.emit("disconnect")},e._disconnected=function(){window.removeEventListener("message",e._handleMessage,!1),e._removeElement(),e._clearPreferredAdapter(),e._adapterInstance=null},e._handleMobileMessage=function(t){var n,a;(a=(n=e._iframe)===null||n===void 0?void 0:n.contentWindow)===null||a===void 0||a.postMessage({channel:"solflareMobileToIframe",data:t},"*")},r!=null&&r.network&&(e._network=r==null?void 0:r.network),r!=null&&r.provider&&(e._provider=r==null?void 0:r.provider),r!=null&&r.params&&(e._iframeParams=U({},r==null?void 0:r.params)),e}return Object.defineProperty(o.prototype,"publicKey",{get:function(){var r;return((r=this._adapterInstance)===null||r===void 0?void 0:r.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"isConnected",{get:function(){var r;return!!(!((r=this._adapterInstance)===null||r===void 0)&&r.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(o.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),o.prototype.connect=function(){return E(this,void 0,void 0,function(){var r=this;return S(this,function(e){switch(e.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise(function(t,n){r._connectHandler={resolve:t,reject:n}})]);case 1:return e.sent(),[2]}})})},o.prototype.disconnect=function(){return E(this,void 0,void 0,function(){return S(this,function(r){switch(r.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return r.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},o.prototype.signTransaction=function(r){return E(this,void 0,void 0,function(){var e,t;return S(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return e=M(r)?Uint8Array.from(r.serialize({verifySignatures:!1,requireAllSignatures:!1})):r.serialize(),[4,this._adapterInstance.signTransaction(e)];case 1:return t=n.sent(),[2,M(r)?D.from(t):F.deserialize(t)]}})})},o.prototype.signAllTransactions=function(r){return E(this,void 0,void 0,function(){var e,t;return S(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return e=r.map(function(a){return M(a)?Uint8Array.from(a.serialize({verifySignatures:!1,requireAllSignatures:!1})):a.serialize()}),[4,this._adapterInstance.signAllTransactions(e)];case 1:if(t=n.sent(),t.length!==r.length)throw new Error("Failed to sign all transactions");return[2,t.map(function(a,c){return M(r[c])?D.from(a):F.deserialize(a)})]}})})},o.prototype.signAndSendTransaction=function(r,e){return E(this,void 0,void 0,function(){var t;return S(this,function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=M(r)?r.serialize({verifySignatures:!1,requireAllSignatures:!1}):r.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,e)];case 1:return[2,n.sent()]}})})},o.prototype.signMessage=function(r,e){return e===void 0&&(e="utf8"),E(this,void 0,void 0,function(){return S(this,function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(r,e)];case 1:return[2,t.sent()]}})})},o.prototype.sign=function(r,e){return e===void 0&&(e="utf8"),E(this,void 0,void 0,function(){return S(this,function(t){switch(t.label){case 0:return[4,this.signMessage(r,e)];case 1:return[2,t.sent()]}})})},o.prototype.detectWallet=function(r){var e;return r===void 0&&(r=10),E(this,void 0,void 0,function(){return S(this,function(t){return window.SolflareApp||!((e=window.solflare)===null||e===void 0)&&e.isSolflare?[2,!0]:[2,new Promise(function(n){var a,c;a=setInterval(function(){var u;(window.SolflareApp||!((u=window.solflare)===null||u===void 0)&&u.isSolflare)&&(clearInterval(a),clearTimeout(c),n(!0))},500),c=setTimeout(function(){clearInterval(a),n(!1)},r*1e3)})]})})},o.IFRAME_URL="https://connect.solflare.com/",o}(H);export{me as default};
