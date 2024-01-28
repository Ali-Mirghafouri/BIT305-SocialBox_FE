(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[678],{8745:function(e,t,n){"use strict";n.d(t,{$s:function(){return calculateBackoffMillis},BH:function(){return Deferred},DV:function(){return safeGet},GJ:function(){return isAdmin},L:function(){return base64urlEncodeWithoutPadding},LL:function(){return ErrorFactory},P0:function(){return getDefaultEmulatorHostnameAndPort},Sg:function(){return createMockUserToken},UI:function(){return map},US:function(){return a},Wl:function(){return stringify},Yr:function(){return isNodeSdk},ZR:function(){return FirebaseError},aH:function(){return getDefaultAppConfig},b$:function(){return isReactNative},cI:function(){return jsonEval},dS:function(){return stringToByteArray},eu:function(){return validateIndexedDBOpenable},g5:function(){return assertionError},gK:function(){return errorPrefix},gQ:function(){return Sha1},h$:function(){return base64Encode},hl:function(){return isIndexedDBAvailable},hu:function(){return assert},m9:function(){return getModularInstance},p$:function(){return deepCopy},r3:function(){return contains},ru:function(){return isBrowserExtension},uI:function(){return isMobileCordova},ug:function(){return stringLength},vZ:function(){return deepEqual},w9:function(){return isValidFormat},xO:function(){return querystring},xb:function(){return isEmpty},zI:function(){return areCookiesEnabled}});var r=n(2601);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},assert=function(e,t){if(!e)throw assertionError(t)},assertionError=function(e){return Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},stringToByteArray$1=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:(o<2048?t[n++]=o>>6|192:((64512&o)==55296&&r+1<e.length&&(64512&e.charCodeAt(r+1))==56320?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128):t[n++]=o>>12|224,t[n++]=o>>6&63|128),t[n++]=63&o|128)}return t},byteArrayToString=function(e){let t=[],n=0,r=0;for(;n<e.length;){let o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){let a=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&a)}else if(o>239&&o<365){let a=e[n++],i=e[n++],s=e[n++],l=((7&o)<<18|(63&a)<<12|(63&i)<<6|63&s)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{let a=e[n++],i=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&a)<<6|63&i)}}return t.join("")},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){let o=e[t],a=t+1<e.length,i=a?e[t+1]:0,s=t+2<e.length,l=s?e[t+2]:0,u=o>>2,c=(3&o)<<4|i>>4,d=(15&i)<<2|l>>6,f=63&l;s||(f=64,a||(d=64)),r.push(n[u],n[c],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(stringToByteArray$1(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):byteArrayToString(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){let o=n[e.charAt(t++)],a=t<e.length,i=a?n[e.charAt(t)]:0;++t;let s=t<e.length,l=s?n[e.charAt(t)]:64;++t;let u=t<e.length,c=u?n[e.charAt(t)]:64;if(++t,null==o||null==i||null==l||null==c)throw new DecodeBase64StringError;let d=o<<2|i>>4;if(r.push(d),64!==l){let e=i<<4&240|l>>2;if(r.push(e),64!==c){let e=l<<6&192|c;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};let DecodeBase64StringError=class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};let base64Encode=function(e){let t=stringToByteArray$1(e);return a.encodeByteArray(t,!0)},base64urlEncodeWithoutPadding=function(e){return base64Encode(e).replace(/\./g,"")},base64Decode=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function deepCopy(e){return deepExtend(void 0,e)}function deepExtend(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let n in t)t.hasOwnProperty(n)&&isValidKey(n)&&(e[n]=deepExtend(e[n],t[n]));return e}function isValidKey(e){return"__proto__"!==e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getGlobal(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let getDefaultsFromGlobal=()=>getGlobal().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(void 0===r||void 0===r.env)return;let e=r.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},getDefaultsFromCookie=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&base64Decode(e[1]);return t&&JSON.parse(t)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},getDefaultEmulatorHost=e=>{var t,n;return null===(n=null===(t=getDefaults())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},getDefaultEmulatorHostnameAndPort=e=>{let t=getDefaultEmulatorHost(e);if(!t)return;let n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},getDefaultAppConfig=()=>{var e;return null===(e=getDefaults())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Deferred=class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createMockUserToken(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=t||"demo-project",r=e.iat||0,o=e.sub||e.user_id;if(!o)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e);return[base64urlEncodeWithoutPadding(JSON.stringify({alg:"none",type:"JWT"})),base64urlEncodeWithoutPadding(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function isMobileCordova(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isBrowserExtension(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function isReactNative(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function isNodeSdk(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function isIndexedDBAvailable(){try{return"object"==typeof indexedDB}catch(e){return!1}}function validateIndexedDBOpenable(){return new Promise((e,t)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function areCookiesEnabled(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}let FirebaseError=class FirebaseError extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}};let ErrorFactory=class ErrorFactory{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){let n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?replaceTemplate(o,n):"Error",i=`${this.serviceName}: ${a} (${r}).`,s=new FirebaseError(r,i,n);return s}};function replaceTemplate(e,t){return e.replace(i,(e,n)=>{let r=t[n];return null!=r?String(r):`<${n}?>`})}let i=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jsonEval(e){return JSON.parse(e)}function stringify(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let decode=function(e){let t={},n={},r={},o="";try{let a=e.split(".");t=jsonEval(base64Decode(a[0])||""),n=jsonEval(base64Decode(a[1])||""),o=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:o}},isValidFormat=function(e){let t=decode(e),n=t.claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},isAdmin=function(e){let t=decode(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function contains(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function safeGet(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function isEmpty(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function map(e,t,n){let r={};for(let o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=t.call(n,e[o],o,e));return r}function deepEqual(e,t){if(e===t)return!0;let n=Object.keys(e),r=Object.keys(t);for(let o of n){if(!r.includes(o))return!1;let n=e[o],a=t[o];if(isObject(n)&&isObject(a)){if(!deepEqual(n,a))return!1}else if(n!==a)return!1}for(let e of r)if(!n.includes(e))return!1;return!0}function isObject(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(e){let t=[];for(let[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sha1=class Sha1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){let n,r;t||(t=0);let o=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)o[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)o[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=o[e-3]^o[e-8]^o[e-14]^o[e-16];o[e]=(t<<1|t>>>31)&4294967295}let a=this.chain_[0],i=this.chain_[1],s=this.chain_[2],l=this.chain_[3],u=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^i&(s^l),r=1518500249):(n=i^s^l,r=1859775393):e<60?(n=i&s|l&(i|s),r=2400959708):(n=i^s^l,r=3395469782);let t=(a<<5|a>>>27)+n+u+r+o[e]&4294967295;u=l,l=s,s=(i<<30|i>>>2)&4294967295,i=a,a=t}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let n=t-this.blockSize,r=0,o=this.buf_,a=this.inbuf_;for(;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(o[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(o),a=0;break}}else for(;r<t;)if(o[a]=e[r],++a,++r,a===this.blockSize){this.compress_(o),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}};function errorPrefix(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let stringToByteArray=function(e){let t=[],n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o>=55296&&o<=56319){let t=o-55296;assert(++r<e.length,"Surrogate pair missing trail surrogate.");let n=e.charCodeAt(r)-56320;o=65536+(t<<10)+n}o<128?t[n++]=o:(o<2048?t[n++]=o>>6|192:(o<65536?t[n++]=o>>12|224:(t[n++]=o>>18|240,t[n++]=o>>12&63|128),t[n++]=o>>6&63|128),t[n++]=63&o|128)}return t},stringLength=function(e){let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};function calculateBackoffMillis(e,t=1e3,n=2){let r=t*Math.pow(n,e);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(e){return e&&e._delegate?e._delegate:e}},6101:function(e,t,n){var r,o,a;a={canUseDOM:o=!!("undefined"!=typeof window&&window.document&&window.document.createElement),canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!!(window.addEventListener||window.attachEvent),canUseViewport:o&&!!window.screen},void 0!==(r=(function(){return a}).call(t,n,t,e))&&(e.exports=r)},2601:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8960)},8960:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function runClearTimeout(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{return n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var a=[],i=!1,s=-1;function cleanUpNextTick(){i&&r&&(i=!1,r.length?a=r.concat(a):s=-1,a.length&&drainQueue())}function drainQueue(){if(!i){var e=runTimeout(cleanUpNextTick);i=!0;for(var t=a.length;t;){for(r=a,a=[];++s<t;)r&&r[s].run();s=-1,t=a.length}r=null,i=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new Item(e,t)),1!==a.length||i||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=noop,o.addListener=noop,o.once=noop,o.off=noop,o.removeListener=noop,o.removeAllListeners=noop,o.emit=noop,o.prependListener=noop,o.prependOnceListener=noop,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,__nccwpck_require__),a=!1}finally{a&&delete n[e]}return o.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,a={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},1396:function(e,t,n){e.exports=n(8326)},4033:function(e,t,n){e.exports=n(94)},3018:function(e,t,n){"use strict";var r=n(1289);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,o,a,i){if(i!==r){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},4275:function(e,t,n){e.exports=n(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3605:function(e,t,n){"use strict";function componentWillMount(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function componentWillReceiveProps(e){function updater(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}this.setState(updater.bind(this))}function componentWillUpdate(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function polyfill(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,r=null,o=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?o="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(o="UNSAFE_componentWillUpdate"),null!==n||null!==r||null!==o)throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+(null!==o?"\n  "+o:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=componentWillMount,t.componentWillReceiveProps=componentWillReceiveProps),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=componentWillUpdate;var a=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;a.call(this,e,t,r)}}return e}n.r(t),n.d(t,{polyfill:function(){return polyfill}}),componentWillMount.__suppressDeprecationWarning=!0,componentWillReceiveProps.__suppressDeprecationWarning=!0,componentWillUpdate.__suppressDeprecationWarning=!0},3158:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(2265),i=_interopRequireDefault(a),s=_interopRequireDefault(n(4887)),l=_interopRequireDefault(n(4275)),u=_interopRequireDefault(n(2645)),c=_interopRequireWildcard(n(106)),d=n(9496),f=_interopRequireDefault(d),p=n(3605);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=t.portalClassName="ReactModalPortal",m=t.bodyOpenClassName="ReactModal__Body--open",g=d.canUseDOM&&void 0!==s.default.createPortal,createHTMLElement=function(e){return document.createElement(e)},getCreatePortal=function(){return g?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer},b=function(e){function Modal(){_classCallCheck(this,Modal);for(var e,t,n,o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return t=n=_possibleConstructorReturn(this,(e=Modal.__proto__||Object.getPrototypeOf(Modal)).call.apply(e,[this].concat(a))),n.removePortal=function(){g||s.default.unmountComponentAtNode(n.node);var e=(0,n.props.parentSelector)();e&&e.contains(n.node)?e.removeChild(n.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},n.portalRef=function(e){n.portal=e},n.renderPortal=function(e){var t=getCreatePortal()(n,i.default.createElement(u.default,r({defaultStyles:Modal.defaultStyles},e)),n.node);n.portalRef(t)},_possibleConstructorReturn(n,t)}return _inherits(Modal,e),o(Modal,[{key:"componentDidMount",value:function(){d.canUseDOM&&(g||(this.node=createHTMLElement("div")),this.node.className=this.props.portalClassName,(0,this.props.parentSelector)().appendChild(this.node),g||this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:(0,e.parentSelector)(),nextParent:(0,this.props.parentSelector)()}}},{key:"componentDidUpdate",value:function(e,t,n){if(d.canUseDOM){var r=this.props,o=r.isOpen,a=r.portalClassName;e.portalClassName!==a&&(this.node.className=a);var i=n.prevParent,s=n.nextParent;s!==i&&(i.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||o)&&(g||this.renderPortal(this.props))}}},{key:"componentWillUnmount",value:function(){if(d.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),n=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);n?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,n-t)):this.removePortal()}}},{key:"render",value:function(){return d.canUseDOM&&g?(!this.node&&g&&(this.node=createHTMLElement("div")),getCreatePortal()(i.default.createElement(u.default,r({ref:this.portalRef,defaultStyles:Modal.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),Modal}(a.Component);b.propTypes={isOpen:l.default.bool.isRequired,style:l.default.shape({content:l.default.object,overlay:l.default.object}),portalClassName:l.default.string,bodyOpenClassName:l.default.string,htmlOpenClassName:l.default.string,className:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),overlayClassName:l.default.oneOfType([l.default.string,l.default.shape({base:l.default.string.isRequired,afterOpen:l.default.string.isRequired,beforeClose:l.default.string.isRequired})]),appElement:l.default.oneOfType([l.default.instanceOf(f.default),l.default.instanceOf(d.SafeHTMLCollection),l.default.instanceOf(d.SafeNodeList),l.default.arrayOf(l.default.instanceOf(f.default))]),onAfterOpen:l.default.func,onRequestClose:l.default.func,closeTimeoutMS:l.default.number,ariaHideApp:l.default.bool,shouldFocusAfterRender:l.default.bool,shouldCloseOnOverlayClick:l.default.bool,shouldReturnFocusAfterClose:l.default.bool,preventScroll:l.default.bool,parentSelector:l.default.func,aria:l.default.object,data:l.default.object,role:l.default.string,contentLabel:l.default.string,shouldCloseOnEsc:l.default.bool,overlayRef:l.default.func,contentRef:l.default.func,id:l.default.string,overlayElement:l.default.func,contentElement:l.default.func},b.defaultProps={isOpen:!1,portalClassName:h,bodyOpenClassName:m,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return i.default.createElement("div",e,t)},contentElement:function(e,t){return i.default.createElement("div",e,t)}},b.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(b),t.default=b},2645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(2265),s=_interopRequireDefault(n(4275)),l=_interopRequireWildcard(n(4724)),u=_interopRequireDefault(n(7715)),c=_interopRequireWildcard(n(106)),d=_interopRequireWildcard(n(8088)),f=n(9496),p=_interopRequireDefault(f),h=_interopRequireDefault(n(7033));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n(716);var m={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},g=0,b=function(e){function ModalPortal(e){_classCallCheck(this,ModalPortal);var t=_possibleConstructorReturn(this,(ModalPortal.__proto__||Object.getPrototypeOf(ModalPortal)).call(this,e));return t.setOverlayRef=function(e){t.overlay=e,t.props.overlayRef&&t.props.overlayRef(e)},t.setContentRef=function(e){t.content=e,t.props.contentRef&&t.props.contentRef(e)},t.afterClose=function(){var e=t.props,n=e.appElement,r=e.ariaHideApp,o=e.htmlOpenClassName,a=e.bodyOpenClassName,i=e.parentSelector,s=i&&i().ownerDocument||document;a&&d.remove(s.body,a),o&&d.remove(s.getElementsByTagName("html")[0],o),r&&g>0&&0==(g-=1)&&c.show(n),t.props.shouldFocusAfterRender&&(t.props.shouldReturnFocusAfterClose?(l.returnFocus(t.props.preventScroll),l.teardownScopedFocus()):l.popWithoutFocus()),t.props.onAfterClose&&t.props.onAfterClose(),h.default.deregister(t)},t.open=function(){t.beforeOpen(),t.state.afterOpen&&t.state.beforeClose?(clearTimeout(t.closeTimer),t.setState({beforeClose:!1})):(t.props.shouldFocusAfterRender&&(l.setupScopedFocus(t.node),l.markForFocusLater()),t.setState({isOpen:!0},function(){t.openAnimationFrame=requestAnimationFrame(function(){t.setState({afterOpen:!0}),t.props.isOpen&&t.props.onAfterOpen&&t.props.onAfterOpen({overlayEl:t.overlay,contentEl:t.content})})}))},t.close=function(){t.props.closeTimeoutMS>0?t.closeWithTimeout():t.closeWithoutTimeout()},t.focusContent=function(){return t.content&&!t.contentHasFocus()&&t.content.focus({preventScroll:!0})},t.closeWithTimeout=function(){var e=Date.now()+t.props.closeTimeoutMS;t.setState({beforeClose:!0,closesAt:e},function(){t.closeTimer=setTimeout(t.closeWithoutTimeout,t.state.closesAt-Date.now())})},t.closeWithoutTimeout=function(){t.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},t.afterClose)},t.handleKeyDown=function(e){("Tab"===e.code||9===e.keyCode)&&(0,u.default)(t.content,e),t.props.shouldCloseOnEsc&&("Escape"===e.code||27===e.keyCode)&&(e.stopPropagation(),t.requestClose(e))},t.handleOverlayOnClick=function(e){null===t.shouldClose&&(t.shouldClose=!0),t.shouldClose&&t.props.shouldCloseOnOverlayClick&&(t.ownerHandlesClose()?t.requestClose(e):t.focusContent()),t.shouldClose=null},t.handleContentOnMouseUp=function(){t.shouldClose=!1},t.handleOverlayOnMouseDown=function(e){t.props.shouldCloseOnOverlayClick||e.target!=t.overlay||e.preventDefault()},t.handleContentOnClick=function(){t.shouldClose=!1},t.handleContentOnMouseDown=function(){t.shouldClose=!1},t.requestClose=function(e){return t.ownerHandlesClose()&&t.props.onRequestClose(e)},t.ownerHandlesClose=function(){return t.props.onRequestClose},t.shouldBeClosed=function(){return!t.state.isOpen&&!t.state.beforeClose},t.contentHasFocus=function(){return document.activeElement===t.content||t.content.contains(document.activeElement)},t.buildClassName=function(e,n){var r=(void 0===n?"undefined":o(n))==="object"?n:{base:m[e],afterOpen:m[e]+"--after-open",beforeClose:m[e]+"--before-close"},a=r.base;return t.state.afterOpen&&(a=a+" "+r.afterOpen),t.state.beforeClose&&(a=a+" "+r.beforeClose),"string"==typeof n&&n?a+" "+n:a},t.attributesFromObject=function(e,t){return Object.keys(t).reduce(function(n,r){return n[e+"-"+r]=t[r],n},{})},t.state={afterOpen:!1,beforeClose:!1},t.shouldClose=null,t.moveFromContentToOverlay=null,t}return _inherits(ModalPortal,e),a(ModalPortal,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,o=e.bodyOpenClassName,a=e.parentSelector,i=a&&a().ownerDocument||document;o&&d.add(i.body,o),r&&d.add(i.getElementsByTagName("html")[0],r),n&&(g+=1,c.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.className,o=e.overlayClassName,a=e.defaultStyles,i=e.children,s=n?{}:a.content,l=o?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",o),style:r({},l,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=r({id:t,ref:this.setContentRef,style:r({},s,this.props.style.content),className:this.buildClassName("content",n),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),d=this.props.contentElement(c,i);return this.props.overlayElement(u,d)}}]),ModalPortal}(i.Component);b.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},b.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(f.SafeHTMLCollection),s.default.instanceOf(f.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=b,e.exports=t.default},106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log,t.assertNodeList=assertNodeList,t.setElement=setElement,t.validateElement=validateElement,t.hide=hide,t.show=show,t.documentNotReadyOrSSRTesting=documentNotReadyOrSSRTesting;var r=_interopRequireDefault(n(267)),o=n(9496);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var a=null;function resetState(){a&&(a.removeAttribute?a.removeAttribute("aria-hidden"):null!=a.length?a.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(a).forEach(function(e){return e.removeAttribute("aria-hidden")})),a=null}function log(){}function assertNodeList(e,t){if(!e||!e.length)throw Error("react-modal: No elements were found for selector "+t+".")}function setElement(e){var t=e;if("string"==typeof t&&o.canUseDOM){var n=document.querySelectorAll(t);assertNodeList(n,t),t=n}return a=t||a}function validateElement(e){var t=e||a;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,r.default)(!1,"react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`."),[])}function hide(e){var t=!0,n=!1,r=void 0;try{for(var o,a=validateElement(e)[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)o.value.setAttribute("aria-hidden","true")}catch(e){n=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function show(e){var t=!0,n=!1,r=void 0;try{for(var o,a=validateElement(e)[Symbol.iterator]();!(t=(o=a.next()).done);t=!0)o.value.removeAttribute("aria-hidden")}catch(e){n=!0,r=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw r}}}function documentNotReadyOrSSRTesting(){a=null}},716:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log;var r=_interopRequireDefault(n(7033));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=void 0,a=void 0,i=[];function resetState(){for(var e=[o,a],t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}o=a=null,i=[]}function log(){console.log("bodyTrap ----------"),console.log(i.length);for(var e=[o,a],t=0;t<e.length;t++){var n=e[t]||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")}function focusContent(){0!==i.length&&i[i.length-1].focusContent()}function bodyTrap(e,t){o||a||((o=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),o.style.position="absolute",o.style.opacity="0",o.setAttribute("tabindex","0"),o.addEventListener("focus",focusContent),(a=o.cloneNode()).addEventListener("focus",focusContent)),(i=t).length>0?(document.body.firstChild!==o&&document.body.insertBefore(o,document.body.firstChild),document.body.lastChild!==a&&document.body.appendChild(a)):(o.parentElement&&o.parentElement.removeChild(o),a.parentElement&&a.parentElement.removeChild(a))}r.default.subscribe(bodyTrap)},8088:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log;var n={},r={};function removeClass(e,t){e.classList.remove(t)}function resetState(){var e=document.getElementsByTagName("html")[0];for(var t in n)removeClass(e,n[t]);var o=document.body;for(var a in r)removeClass(o,r[a]);n={},r={}}function log(){}var trackClass=function(e,t,n){n.forEach(function(n){t[n]||(t[n]=0),t[n]+=1,e.add(n)})},untrackClass=function(e,t,n){n.forEach(function(n){t[n]&&(t[n]-=1),0===t[n]&&e.remove(n)})};t.add=function(e,t){return trackClass(e.classList,"html"==e.nodeName.toLowerCase()?n:r,t.split(" "))},t.remove=function(e,t){return untrackClass(e.classList,"html"==e.nodeName.toLowerCase()?n:r,t.split(" "))}},4724:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log,t.handleBlur=handleBlur,t.handleFocus=handleFocus,t.markForFocusLater=markForFocusLater,t.returnFocus=returnFocus,t.popWithoutFocus=popWithoutFocus,t.setupScopedFocus=setupScopedFocus,t.teardownScopedFocus=teardownScopedFocus;var r=_interopRequireDefault(n(8102));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=[],a=null,i=!1;function resetState(){o=[]}function log(){}function handleBlur(){i=!0}function handleFocus(){i&&(i=!1,a&&setTimeout(function(){a.contains(document.activeElement)||((0,r.default)(a)[0]||a).focus()},0))}function markForFocusLater(){o.push(document.activeElement)}function returnFocus(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{0!==o.length&&(t=o.pop()).focus({preventScroll:e});return}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function popWithoutFocus(){o.length>0&&o.pop()}function setupScopedFocus(e){a=e,window.addEventListener?(window.addEventListener("blur",handleBlur,!1),document.addEventListener("focus",handleFocus,!0)):(window.attachEvent("onBlur",handleBlur),document.attachEvent("onFocus",handleFocus))}function teardownScopedFocus(){a=null,window.addEventListener?(window.removeEventListener("blur",handleBlur),document.removeEventListener("focus",handleFocus)):(window.detachEvent("onBlur",handleBlur),document.detachEvent("onFocus",handleFocus))}},7033:function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.log=log,t.resetState=resetState;var PortalOpenInstances=function PortalOpenInstances(){var e=this;_classCallCheck(this,PortalOpenInstances),this.register=function(t){-1===e.openInstances.indexOf(t)&&(e.openInstances.push(t),e.emit("register"))},this.deregister=function(t){var n=e.openInstances.indexOf(t);-1!==n&&(e.openInstances.splice(n,1),e.emit("deregister"))},this.subscribe=function(t){e.subscribers.push(t)},this.emit=function(t){e.subscribers.forEach(function(n){return n(t,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},n=new PortalOpenInstances;function log(){console.log("portalOpenInstances ----------"),console.log(n.openInstances.length),n.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function resetState(){n=new PortalOpenInstances}t.default=n},9496:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var r,o=((r=n(6101))&&r.__esModule?r:{default:r}).default,a=o.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=o.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=o.canUseDOM?window.NodeList:{},t.canUseDOM=o.canUseDOM,t.default=a},7715:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=scopeTab;var r=_interopRequireDefault(n(8102));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getActiveElement(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?getActiveElement(e.activeElement.shadowRoot):e.activeElement}function scopeTab(e,t){var n=(0,r.default)(e);if(!n.length){t.preventDefault();return}var o=void 0,a=t.shiftKey,i=n[0],s=n[n.length-1],l=getActiveElement();if(e===l){if(!a)return;o=s}if(s!==l||a||(o=i),i===l&&a&&(o=s),o){t.preventDefault(),o.focus();return}var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=u&&"Chrome"!=u[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var c=n.indexOf(l);if(c>-1&&(c+=a?-1:1),void 0===(o=n[c])){t.preventDefault(),(o=a?s:i).focus();return}t.preventDefault(),o.focus()}}e.exports=t.default},8102:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=findTabbableDescendants;var n=/input|select|textarea|button|object|iframe/;function isNotOverflowing(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}function hidesContents(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var n=window.getComputedStyle(e),r=n.getPropertyValue("display");return t?"contents"!==r&&isNotOverflowing(e,n):"none"===r}catch(e){return console.warn("Failed to inspect element style"),!1}}function visible(e){for(var t=e,n=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(n&&t===n&&(t=n.host.parentNode),hidesContents(t))return!1;t=t.parentNode}return!0}function focusable(e,t){var r=e.nodeName.toLowerCase();return(n.test(r)&&!e.disabled||"a"===r&&e.href||t)&&visible(e)}function tabbable(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var n=isNaN(t);return(n||t>=0)&&focusable(e,!n)}function findTabbableDescendants(e){return[].slice.call(e.querySelectorAll("*"),0).reduce(function(e,t){return e.concat(t.shadowRoot?findTabbableDescendants(t.shadowRoot):[t])},[]).filter(tabbable)}e.exports=t.default},8529:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=_interopRequireDefault(n(3158));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=r.default,e.exports=t.default},267:function(e){"use strict";e.exports=function(){}},3991:function(e,t,n){"use strict";let r,o;n.d(t,{Jn:function(){return I},qX:function(){return _getProvider},Xd:function(){return _registerComponent},Mq:function(){return getApp},ZF:function(){return initializeApp},KN:function(){return registerVersion}});var a=n(5538),i=n(6914),s=n(8745);let instanceOfAny=(e,t)=>t.some(t=>e instanceof t);function getIdbProxyableTypes(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}let l=new WeakMap,u=new WeakMap,c=new WeakMap,d=new WeakMap,f=new WeakMap;function promisifyRequest(e){let t=new Promise((t,n)=>{let unlisten=()=>{e.removeEventListener("success",success),e.removeEventListener("error",error)},success=()=>{t(wrap_idb_value_wrap(e.result)),unlisten()},error=()=>{n(e.error),unlisten()};e.addEventListener("success",success),e.addEventListener("error",error)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),f.set(t,e),t}function cacheDonePromiseForTransaction(e){if(u.has(e))return;let t=new Promise((t,n)=>{let unlisten=()=>{e.removeEventListener("complete",complete),e.removeEventListener("error",error),e.removeEventListener("abort",error)},complete=()=>{t(),unlisten()},error=()=>{n(e.error||new DOMException("AbortError","AbortError")),unlisten()};e.addEventListener("complete",complete),e.addEventListener("error",error),e.addEventListener("abort",error)});u.set(e,t)}let p={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||c.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wrap_idb_value_wrap(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function replaceTraps(e){p=e(p)}function wrapFunction(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?getCursorAdvanceMethods().includes(e)?function(...t){return e.apply(unwrap(this),t),wrap_idb_value_wrap(l.get(this))}:function(...t){return wrap_idb_value_wrap(e.apply(unwrap(this),t))}:function(t,...n){let r=e.call(unwrap(this),t,...n);return c.set(r,t.sort?t.sort():[t]),wrap_idb_value_wrap(r)}}function transformCachableValue(e){return"function"==typeof e?wrapFunction(e):(e instanceof IDBTransaction&&cacheDonePromiseForTransaction(e),instanceOfAny(e,getIdbProxyableTypes()))?new Proxy(e,p):e}function wrap_idb_value_wrap(e){if(e instanceof IDBRequest)return promisifyRequest(e);if(d.has(e))return d.get(e);let t=transformCachableValue(e);return t!==e&&(d.set(e,t),f.set(t,e)),t}let unwrap=e=>f.get(e);function openDB(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){let i=indexedDB.open(e,t),s=wrap_idb_value_wrap(i);return r&&i.addEventListener("upgradeneeded",e=>{r(wrap_idb_value_wrap(i.result),e.oldVersion,e.newVersion,wrap_idb_value_wrap(i.transaction),e)}),n&&i.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),o&&e.addEventListener("versionchange",e=>o(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}let h=["get","getKey","getAll","getAllKeys","count"],m=["put","add","delete","clear"],g=new Map;function getMethod(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(g.get(t))return g.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,o=m.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||h.includes(n)))return;let method=async function(e,...t){let a=this.transaction(e,o?"readwrite":"readonly"),i=a.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),o&&a.done]))[0]};return g.set(t,method),method}replaceTraps(e=>({...e,get:(t,n,r)=>getMethod(t,n)||e.get(t,n,r),has:(t,n)=>!!getMethod(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PlatformLoggerServiceImpl=class PlatformLoggerServiceImpl{constructor(e){this.container=e}getPlatformInfoString(){let e=this.container.getProviders();return e.map(e=>{if(!isVersionServiceProvider(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}};function isVersionServiceProvider(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}let b="@firebase/app",y="0.9.26",v=new i.Yd("@firebase/app"),w="[DEFAULT]",_={[b]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},C=new Map,E=new Map;function _addComponent(e,t){try{e.container.addComponent(t)}catch(n){v.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _registerComponent(e){let t=e.name;if(E.has(t))return v.debug(`There were multiple attempts to register component ${t}.`),!1;for(let n of(E.set(t,e),C.values()))_addComponent(n,e);return!0}function _getProvider(e,t){let n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}let S=new s.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAppImpl=class FirebaseAppImpl{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new a.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I="10.7.2";function initializeApp(e,t={}){let n=e;if("object"!=typeof t){let e=t;t={name:e}}let r=Object.assign({name:w,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw S.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw S.create("no-options");let i=C.get(o);if(i){if((0,s.vZ)(n,i.options)&&(0,s.vZ)(r,i.config))return i;throw S.create("duplicate-app",{appName:o})}let l=new a.H0(o);for(let e of E.values())l.addComponent(e);let u=new FirebaseAppImpl(n,r,l);return C.set(o,u),u}function getApp(e=w){let t=C.get(e);if(!t&&e===w&&(0,s.aH)())return initializeApp();if(!t)throw S.create("no-app",{appName:e});return t}function registerVersion(e,t,n){var r;let o=null!==(r=_[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);let i=o.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let e=[`Unable to register library "${o}" with version "${t}":`];i&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),v.warn(e.join(" "));return}_registerComponent(new a.wA(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}let O="firebase-heartbeat-store",D=null;function getDbPromise(){return D||(D=openDB("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(O)}catch(e){console.warn(e)}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),D}async function readHeartbeatsFromIndexedDB(e){try{let t=await getDbPromise(),n=await t.transaction(O).objectStore(O).get(computeKey(e));return n}catch(e){if(e instanceof s.ZR)v.warn(e.message);else{let t=S.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});v.warn(t.message)}}}async function writeHeartbeatsToIndexedDB(e,t){try{let n=await getDbPromise(),r=n.transaction(O,"readwrite"),o=r.objectStore(O);await o.put(t,computeKey(e)),await r.done}catch(e){if(e instanceof s.ZR)v.warn(e.message);else{let t=S.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});v.warn(t.message)}}}function computeKey(e){return`${e.name}!${e.options.appId}`}let HeartbeatServiceImpl=class HeartbeatServiceImpl{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),o=getUTCDateString();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(e=>e.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf(),n=Date.now();return n-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=getUTCDateString(),{heartbeatsToSend:n,unsentEntries:r}=extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats),o=(0,s.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}};function getUTCDateString(){let e=new Date;return e.toISOString().substring(0,10)}function extractHeartbeatsForHeader(e,t=1024){let n=[],r=e.slice();for(let o of e){let e=n.find(e=>e.agent===o.agent);if(e){if(e.dates.push(o.date),countBytes(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),countBytes(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}let HeartbeatStorageImpl=class HeartbeatStorageImpl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then(()=>!0).catch(()=>!1)}async read(){let e=await this._canUseIndexedDBPromise;if(!e)return{heartbeats:[]};{let e=await readHeartbeatsFromIndexedDB(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}};function countBytes(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}_registerComponent(new a.wA("platform-logger",e=>new PlatformLoggerServiceImpl(e),"PRIVATE")),_registerComponent(new a.wA("heartbeat",e=>new HeartbeatServiceImpl(e),"PRIVATE")),registerVersion(b,y,""),registerVersion(b,y,"esm2017"),registerVersion("fire-js","")},5538:function(e,t,n){"use strict";n.d(t,{H0:function(){return ComponentContainer},wA:function(){return Component}});var r=n(8745);let Component=class Component{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let o="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Provider=class Provider{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(isComponentEager(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(let[e,t]of this.instancesDeferred.entries()){let o=this.normalizeInstanceIdentifier(e);n===o&&t.resolve(r)}return r}onInit(e,t){var n;let r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);let a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){let n=this.onInitCallbacks.get(t);if(n)for(let r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:normalizeIdentifierForFactory(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}};function normalizeIdentifierForFactory(e){return e===o?void 0:e}function isComponentEager(e){return"EAGER"===e.instantiationMode}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ComponentContainer=class ComponentContainer{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){let t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new Provider(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},6914:function(e,t,n){"use strict";var r,o;n.d(t,{Yd:function(){return Logger},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a=[];(o=r||(r={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";let i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},s=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},defaultLogHandler=(e,t,...n)=>{if(t<e.logLevel)return;let r=new Date().toISOString(),o=l[t];if(o)console[o](`[${r}]  ${e.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};let Logger=class Logger{constructor(e){this.name=e,this._logLevel=s,this._logHandler=defaultLogHandler,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}},5073:function(e,t,n){"use strict";let r,o,a,i,s,l;var u=n(3991),c=n(6914),d=n(8745),f=n(5538);let instanceOfAny=(e,t)=>t.some(t=>e instanceof t);function getIdbProxyableTypes(){return r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function getCursorAdvanceMethods(){return o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}let p=new WeakMap,h=new WeakMap,m=new WeakMap,g=new WeakMap,b=new WeakMap;function promisifyRequest(e){let t=new Promise((t,n)=>{let unlisten=()=>{e.removeEventListener("success",success),e.removeEventListener("error",error)},success=()=>{t(wrap_idb_value_wrap(e.result)),unlisten()},error=()=>{n(e.error),unlisten()};e.addEventListener("success",success),e.addEventListener("error",error)});return t.then(t=>{t instanceof IDBCursor&&p.set(t,e)}).catch(()=>{}),b.set(t,e),t}function cacheDonePromiseForTransaction(e){if(h.has(e))return;let t=new Promise((t,n)=>{let unlisten=()=>{e.removeEventListener("complete",complete),e.removeEventListener("error",error),e.removeEventListener("abort",error)},complete=()=>{t(),unlisten()},error=()=>{n(e.error||new DOMException("AbortError","AbortError")),unlisten()};e.addEventListener("complete",complete),e.addEventListener("error",error),e.addEventListener("abort",error)});h.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return h.get(e);if("objectStoreNames"===t)return e.objectStoreNames||m.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wrap_idb_value_wrap(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function replaceTraps(e){y=e(y)}function wrapFunction(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?getCursorAdvanceMethods().includes(e)?function(...t){return e.apply(unwrap(this),t),wrap_idb_value_wrap(p.get(this))}:function(...t){return wrap_idb_value_wrap(e.apply(unwrap(this),t))}:function(t,...n){let r=e.call(unwrap(this),t,...n);return m.set(r,t.sort?t.sort():[t]),wrap_idb_value_wrap(r)}}function transformCachableValue(e){return"function"==typeof e?wrapFunction(e):(e instanceof IDBTransaction&&cacheDonePromiseForTransaction(e),instanceOfAny(e,getIdbProxyableTypes()))?new Proxy(e,y):e}function wrap_idb_value_wrap(e){if(e instanceof IDBRequest)return promisifyRequest(e);if(g.has(e))return g.get(e);let t=transformCachableValue(e);return t!==e&&(g.set(e,t),b.set(t,e)),t}let unwrap=e=>b.get(e);function openDB(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){let i=indexedDB.open(e,t),s=wrap_idb_value_wrap(i);return r&&i.addEventListener("upgradeneeded",e=>{r(wrap_idb_value_wrap(i.result),e.oldVersion,e.newVersion,wrap_idb_value_wrap(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),s.then(e=>{a&&e.addEventListener("close",()=>a()),o&&e.addEventListener("versionchange",()=>o())}).catch(()=>{}),s}let v=["get","getKey","getAll","getAllKeys","count"],w=["put","add","delete","clear"],_=new Map;function getMethod(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(_.get(t))return _.get(t);let n=t.replace(/FromIndex$/,""),r=t!==n,o=w.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||v.includes(n)))return;let method=async function(e,...t){let a=this.transaction(e,o?"readwrite":"readonly"),i=a.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),o&&a.done]))[0]};return _.set(t,method),method}replaceTraps(e=>({...e,get:(t,n,r)=>getMethod(t,n)||e.get(t,n,r),has:(t,n)=>!!getMethod(t,n)||e.has(t,n)}));let C="@firebase/installations",E="0.6.4",S=`w:${E}`,I="FIS_v2",O=new d.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function isServerError(e){return e instanceof d.ZR&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getInstallationsEndpoint({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function extractAuthTokenInfoFromResponse(e){return{token:e.token,requestStatus:2,expiresIn:getExpiresInFromResponseExpiresIn(e.expiresIn),creationTime:Date.now()}}async function getErrorFromResponse(e,t){let n=await t.json(),r=n.error;return O.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function getHeaders({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function getHeadersWithAuth(e,{refreshToken:t}){let n=getHeaders(e);return n.append("Authorization",getAuthorizationHeader(t)),n}async function retryIfServerError(e){let t=await e();return t.status>=500&&t.status<600?e():t}function getExpiresInFromResponseExpiresIn(e){return Number(e.replace("s","000"))}function getAuthorizationHeader(e){return`${I} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function createInstallationRequest({appConfig:e,heartbeatServiceProvider:t},{fid:n}){let r=getInstallationsEndpoint(e),o=getHeaders(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}let i={fid:n,authVersion:I,appId:e.appId,sdkVersion:S},s={method:"POST",headers:o,body:JSON.stringify(i)},l=await retryIfServerError(()=>fetch(r,s));if(l.ok){let e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:extractAuthTokenInfoFromResponse(e.authToken)};return t}throw await getErrorFromResponse("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sleep(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bufferToBase64UrlSafe(e){let t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D=/^[cdef][\w-]{21}$/;function generateFid(){try{let e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;let n=encode(e);return D.test(n)?n:""}catch(e){return""}}function encode(e){let t=bufferToBase64UrlSafe(e);return t.substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getKey(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let T=new Map;function fidChanged(e,t){let n=getKey(e);callFidChangeCallbacks(n,t),broadcastFidChange(n,t)}function callFidChangeCallbacks(e,t){let n=T.get(e);if(n)for(let e of n)e(t)}function broadcastFidChange(e,t){let n=getBroadcastChannel();n&&n.postMessage({key:e,fid:t}),closeBroadcastChannel()}let A=null;function getBroadcastChannel(){return!A&&"BroadcastChannel"in self&&((A=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{callFidChangeCallbacks(e.data.key,e.data.fid)}),A}function closeBroadcastChannel(){0===T.size&&A&&(A.close(),A=null)}let R="firebase-installations-store",k=null;function getDbPromise(){return k||(k=openDB("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(R)}})),k}async function set(e,t){let n=getKey(e),r=await getDbPromise(),o=r.transaction(R,"readwrite"),a=o.objectStore(R),i=await a.get(n);return await a.put(t,n),await o.done,i&&i.fid===t.fid||fidChanged(e,t.fid),t}async function remove(e){let t=getKey(e),n=await getDbPromise(),r=n.transaction(R,"readwrite");await r.objectStore(R).delete(t),await r.done}async function update(e,t){let n=getKey(e),r=await getDbPromise(),o=r.transaction(R,"readwrite"),a=o.objectStore(R),i=await a.get(n),s=t(i);return void 0===s?await a.delete(n):await a.put(s,n),await o.done,s&&(!i||i.fid!==s.fid)&&fidChanged(e,s.fid),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getInstallationEntry(e){let t;let n=await update(e.appConfig,n=>{let r=updateOrCreateInstallationEntry(n),o=triggerRegistrationIfNecessary(e,r);return t=o.registrationPromise,o.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function updateOrCreateInstallationEntry(e){let t=e||{fid:generateFid(),registrationStatus:0};return clearTimedOutRequest(t)}function triggerRegistrationIfNecessary(e,t){if(0===t.registrationStatus){if(!navigator.onLine){let e=Promise.reject(O.create("app-offline"));return{installationEntry:t,registrationPromise:e}}let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=registerInstallation(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:waitUntilFidRegistration(e)}:{installationEntry:t}}async function registerInstallation(e,t){try{let n=await createInstallationRequest(e,t);return set(e.appConfig,n)}catch(n){throw isServerError(n)&&409===n.customData.serverCode?await remove(e.appConfig):await set(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function waitUntilFidRegistration(e){let t=await updateInstallationRequest(e.appConfig);for(;1===t.registrationStatus;)await sleep(100),t=await updateInstallationRequest(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await getInstallationEntry(e);return n||t}return t}function updateInstallationRequest(e){return update(e,e=>{if(!e)throw O.create("installation-not-found");return clearTimedOutRequest(e)})}function clearTimedOutRequest(e){return hasInstallationRequestTimedOut(e)?{fid:e.fid,registrationStatus:0}:e}function hasInstallationRequestTimedOut(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function generateAuthTokenRequest({appConfig:e,heartbeatServiceProvider:t},n){let r=getGenerateAuthTokenEndpoint(e,n),o=getHeadersWithAuth(e,n),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}let i={installation:{sdkVersion:S,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(i)},l=await retryIfServerError(()=>fetch(r,s));if(l.ok){let e=await l.json(),t=extractAuthTokenInfoFromResponse(e);return t}throw await getErrorFromResponse("Generate Auth Token",l)}function getGenerateAuthTokenEndpoint(e,{fid:t}){return`${getInstallationsEndpoint(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function refreshAuthToken(e,t=!1){let n;let r=await update(e.appConfig,r=>{if(!isEntryRegistered(r))throw O.create("not-registered");let o=r.authToken;if(!t&&isAuthTokenValid(o))return r;if(1===o.requestStatus)return n=waitUntilAuthTokenRequest(e,t),r;{if(!navigator.onLine)throw O.create("app-offline");let t=makeAuthTokenRequestInProgressEntry(r);return n=fetchAuthTokenFromServer(e,t),t}}),o=n?await n:r.authToken;return o}async function waitUntilAuthTokenRequest(e,t){let n=await updateAuthTokenRequest(e.appConfig);for(;1===n.authToken.requestStatus;)await sleep(100),n=await updateAuthTokenRequest(e.appConfig);let r=n.authToken;return 0===r.requestStatus?refreshAuthToken(e,t):r}function updateAuthTokenRequest(e){return update(e,e=>{if(!isEntryRegistered(e))throw O.create("not-registered");let t=e.authToken;return hasAuthTokenRequestTimedOut(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fetchAuthTokenFromServer(e,t){try{let n=await generateAuthTokenRequest(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await set(e.appConfig,r),n}catch(n){if(isServerError(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await remove(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await set(e.appConfig,n)}throw n}}function isEntryRegistered(e){return void 0!==e&&2===e.registrationStatus}function isAuthTokenValid(e){return 2===e.requestStatus&&!isAuthTokenExpired(e)}function isAuthTokenExpired(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}function makeAuthTokenRequestInProgressEntry(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function hasAuthTokenRequestTimedOut(e){return 1===e.requestStatus&&e.requestTime+1e4<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getId(e){let{installationEntry:t,registrationPromise:n}=await getInstallationEntry(e);return n?n.catch(console.error):refreshAuthToken(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getToken(e,t=!1){await completeInstallationRegistration(e);let n=await refreshAuthToken(e,t);return n.token}async function completeInstallationRegistration(e){let{registrationPromise:t}=await getInstallationEntry(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function extractAppConfig(e){if(!e||!e.options)throw getMissingValueError("App Configuration");if(!e.name)throw getMissingValueError("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw getMissingValueError(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function getMissingValueError(e){return O.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let M="installations";(0,u.Xd)(new f.wA(M,e=>{let t=e.getProvider("app").getImmediate(),n=extractAppConfig(t),r=(0,u.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,u.Xd)(new f.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,u.qX)(t,M).getImmediate();return{getId:()=>getId(n),getToken:e=>getToken(n,e)}},"PRIVATE")),(0,u.KN)(C,E),(0,u.KN)(C,E,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P="analytics",F="https://www.googletagmanager.com/gtag/js",N=new c.Yd("@firebase/analytics"),L=new d.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createGtagTrustedTypesScriptURL(e){if(!e.startsWith(F)){let t=L.create("invalid-gtag-resource",{gtagURL:e});return N.warn(t.message),""}return e}function promiseAllSettled(e){return Promise.all(e.map(e=>e.catch(e=>e)))}function createTrustedTypesPolicy(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function insertScriptTag(e,t){let n=createTrustedTypesPolicy("firebase-js-sdk-policy",{createScriptURL:createGtagTrustedTypesScriptURL}),r=document.createElement("script"),o=`${F}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function getOrCreateDataLayer(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function gtagOnConfig(e,t,n,r,o,a){let i=r[o];try{if(i)await t[i];else{let e=await promiseAllSettled(n),r=e.find(e=>e.measurementId===o);r&&await t[r.appId]}}catch(e){N.error(e)}e("config",o,a)}async function gtagOnEvent(e,t,n,r,o){try{let a=[];if(o&&o.send_to){let e=o.send_to;Array.isArray(e)||(e=[e]);let r=await promiseAllSettled(n);for(let n of e){let e=r.find(e=>e.measurementId===n),o=e&&t[e.appId];if(o)a.push(o);else{a=[];break}}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,o||{})}catch(e){N.error(e)}}function wrapGtag(e,t,n,r){return async function(o,...a){try{if("event"===o){let[r,o]=a;await gtagOnEvent(e,t,n,r,o)}else if("config"===o){let[o,i]=a;await gtagOnConfig(e,t,n,r,o,i)}else if("consent"===o){let[t]=a;e("consent","update",t)}else if("get"===o){let[t,n,r]=a;e("get",t,n,r)}else if("set"===o){let[t]=a;e("set",t)}else e(o,...a)}catch(e){N.error(e)}}}function wrapOrCreateGtag(e,t,n,r,o){let gtagCore=function(...e){window[r].push(arguments)};return window[o]&&"function"==typeof window[o]&&(gtagCore=window[o]),window[o]=wrapGtag(gtagCore,e,t,n),{gtagCore,wrappedGtag:window[o]}}function findGtagScriptOnPage(e){let t=window.document.getElementsByTagName("script");for(let n of Object.values(t))if(n.src&&n.src.includes(F)&&n.src.includes(e))return n;return null}let RetryData=class RetryData{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};let B=new RetryData;function index_esm2017_getHeaders(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function fetchDynamicConfig(e){var t;let{appId:n,apiKey:r}=e,o={method:"GET",headers:index_esm2017_getHeaders(r)},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),i=await fetch(a,o);if(200!==i.status&&304!==i.status){let e="";try{let n=await i.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw L.create("config-fetch-failed",{httpStatus:i.status,responseMessage:e})}return i.json()}async function fetchDynamicConfigWithRetry(e,t=B,n){let{appId:r,apiKey:o,measurementId:a}=e.options;if(!r)throw L.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:r};throw L.create("no-api-key")}let i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new AnalyticsAbortSignal;return setTimeout(async()=>{s.abort()},void 0!==n?n:6e4),attemptFetchDynamicConfigWithRetry({appId:r,apiKey:o,measurementId:a},i,s,t)}async function attemptFetchDynamicConfigWithRetry(e,{throttleEndTimeMillis:t,backoffCount:n},r,o=B){var a;let{appId:i,measurementId:s}=e;try{await setAbortableTimeout(r,t)}catch(e){if(s)return N.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:i,measurementId:s};throw e}try{let t=await fetchDynamicConfig(e);return o.deleteThrottleMetadata(i),t}catch(u){if(!isRetriableError(u)){if(o.deleteThrottleMetadata(i),s)return N.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==u?void 0:u.message}]`),{appId:i,measurementId:s};throw u}let t=503===Number(null===(a=null==u?void 0:u.customData)||void 0===a?void 0:a.httpStatus)?(0,d.$s)(n,o.intervalMillis,30):(0,d.$s)(n,o.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return o.setThrottleMetadata(i,l),N.debug(`Calling attemptFetch again in ${t} millis`),attemptFetchDynamicConfigWithRetry(e,l,r,o)}}function setAbortableTimeout(e,t){return new Promise((n,r)=>{let o=Math.max(t-Date.now(),0),a=setTimeout(n,o);e.addEventListener(()=>{clearTimeout(a),r(L.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function isRetriableError(e){if(!(e instanceof d.ZR)||!e.customData)return!1;let t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}let AnalyticsAbortSignal=class AnalyticsAbortSignal{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}};async function logEvent$1(e,t,n,r,o){if(o&&o.global){e("event",n,r);return}{let o=await t,a=Object.assign(Object.assign({},r),{send_to:o});e("event",n,a)}}function _setConsentDefaultForInit(e){i=e}function _setDefaultEventParametersForInit(e){a=e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function validateIndexedDB(){if(!(0,d.hl)())return N.warn(L.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,d.eu)()}catch(e){return N.warn(L.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}async function _initializeAnalytics(e,t,n,r,o,s,l){var u;let c=fetchDynamicConfigWithRetry(e);c.then(t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&N.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(e=>N.error(e)),t.push(c);let d=validateIndexedDB().then(e=>e?r.getId():void 0),[f,p]=await Promise.all([c,d]);findGtagScriptOnPage(s)||insertScriptTag(s,f.measurementId),i&&(o("consent","default",i),_setConsentDefaultForInit(void 0)),o("js",new Date);let h=null!==(u=null==l?void 0:l.config)&&void 0!==u?u:{};return h.origin="firebase",h.update=!0,null!=p&&(h.firebase_id=p),o("config",f.measurementId,h),a&&(o("set",a),_setDefaultEventParametersForInit(void 0)),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AnalyticsService=class AnalyticsService{constructor(e){this.app=e}_delete(){return delete j[this.app.options.appId],Promise.resolve()}};let j={},x=[],U={},H="dataLayer",W=!1;function warnOnBrowserContextMismatch(){let e=[];if((0,d.ru)()&&e.push("This is a browser extension environment."),(0,d.zI)()||e.push("Cookies are not available."),e.length>0){let t=e.map((e,t)=>`(${t+1}) ${e}`).join(" "),n=L.create("invalid-analytics-context",{errorInfo:t});N.warn(n.message)}}function factory(e,t,n){warnOnBrowserContextMismatch();let r=e.options.appId;if(!r)throw L.create("no-app-id");if(!e.options.apiKey){if(e.options.measurementId)N.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw L.create("no-api-key")}if(null!=j[r])throw L.create("already-exists",{id:r});if(!W){getOrCreateDataLayer(H);let{wrappedGtag:e,gtagCore:t}=wrapOrCreateGtag(j,x,U,H,"gtag");l=e,s=t,W=!0}j[r]=_initializeAnalytics(e,x,U,t,s,H,n);let o=new AnalyticsService(e);return o}function logEvent(e,t,n,r){e=(0,d.m9)(e),logEvent$1(l,j[e.app.options.appId],t,n,r).catch(e=>N.error(e))}let $="@firebase/analytics",V="0.10.0";!function(){function internalFactory(e){try{let t=e.getProvider(P).getImmediate();return{logEvent:(e,n,r)=>logEvent(t,e,n,r)}}catch(e){throw L.create("interop-component-reg-failed",{reason:e})}}(0,u.Xd)(new f.wA(P,(e,{options:t})=>{let n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return factory(n,r,t)},"PUBLIC")),(0,u.Xd)(new f.wA("analytics-internal",internalFactory,"PRIVATE")),(0,u.KN)($,V),(0,u.KN)($,V,"esm2017")}()},994:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.ZF}});var r=n(3991);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.KN)("firebase","10.7.2","app")},2307:function(e,t,n){"use strict";n.d(t,{N8:function(){return r.N8},U2:function(){return r.U2},iH:function(){return r.iH},iU:function(){return r.iU},t8:function(){return r.t8}});var r=n(4921)}}]);