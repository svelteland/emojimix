var st=Object.defineProperty,rt=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var G=(a,t,e)=>t in a?st(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,v=(a,t)=>{for(var e in t||(t={}))J.call(t,e)&&G(a,e,t[e]);if(N)for(var e of N(t))M.call(t,e)&&G(a,e,t[e]);return a},X=(a,t)=>rt(a,nt(t));var Y=(a,t)=>{var e={};for(var s in a)J.call(a,s)&&t.indexOf(s)<0&&(e[s]=a[s]);if(a!=null&&N)for(var s of N(a))t.indexOf(s)<0&&M.call(a,s)&&(e[s]=a[s]);return e};import{S as it,i as at,s as ot,e as lt,c as ct,a as ut,d as b,b as P,f as E,t as ft,g as ht,h as dt,j as R,k as _t,l as w,m as O,n as pt,o as S,p as V,q as D,r as j,u as y,v as q,w as x,x as m,y as mt,z as gt,A as wt,B,C as K}from"./chunks/vendor-aa7c10b0.js";import{s as yt}from"./chunks/paths-45dac81d.js";function F(a){let t,e,s;const n=[a[2]||{}];var o=a[0][1];function i(r){let l={$$slots:{default:[bt]},$$scope:{ctx:r}};for(let c=0;c<n.length;c+=1)l=B(l,n[c]);return{props:l}}return o&&(t=new o(i(a))),{c(){t&&R(t.$$.fragment),e=w()},l(r){t&&O(t.$$.fragment,r),e=w()},m(r,l){t&&S(t,r,l),E(r,e,l),s=!0},p(r,l){const c=l&4?V(n,[D(r[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:r}),o!==(o=r[0][1])){if(t){j();const u=t;y(u.$$.fragment,1,0,()=>{q(u,1)}),x()}o?(t=new o(i(r)),R(t.$$.fragment),m(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}else o&&t.$set(c)},i(r){s||(t&&m(t.$$.fragment,r),s=!0)},o(r){t&&y(t.$$.fragment,r),s=!1},d(r){r&&b(e),t&&q(t,r)}}}function H(a){let t,e,s;const n=[a[3]||{}];var o=a[0][2];function i(r){let l={};for(let c=0;c<n.length;c+=1)l=B(l,n[c]);return{props:l}}return o&&(t=new o(i())),{c(){t&&R(t.$$.fragment),e=w()},l(r){t&&O(t.$$.fragment,r),e=w()},m(r,l){t&&S(t,r,l),E(r,e,l),s=!0},p(r,l){const c=l&8?V(n,[D(r[3]||{})]):{};if(o!==(o=r[0][2])){if(t){j();const u=t;y(u.$$.fragment,1,0,()=>{q(u,1)}),x()}o?(t=new o(i()),R(t.$$.fragment),m(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}else o&&t.$set(c)},i(r){s||(t&&m(t.$$.fragment,r),s=!0)},o(r){t&&y(t.$$.fragment,r),s=!1},d(r){r&&b(e),t&&q(t,r)}}}function bt(a){let t,e,s=a[0][2]&&H(a);return{c(){s&&s.c(),t=w()},l(n){s&&s.l(n),t=w()},m(n,o){s&&s.m(n,o),E(n,t,o),e=!0},p(n,o){n[0][2]?s?(s.p(n,o),o&1&&m(s,1)):(s=H(n),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(j(),y(s,1,1,()=>{s=null}),x())},i(n){e||(m(s),e=!0)},o(n){y(s),e=!1},d(n){s&&s.d(n),n&&b(t)}}}function vt(a){let t,e,s=a[0][1]&&F(a);return{c(){s&&s.c(),t=w()},l(n){s&&s.l(n),t=w()},m(n,o){s&&s.m(n,o),E(n,t,o),e=!0},p(n,o){n[0][1]?s?(s.p(n,o),o&1&&m(s,1)):(s=F(n),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(j(),y(s,1,1,()=>{s=null}),x())},i(n){e||(m(s),e=!0)},o(n){y(s),e=!1},d(n){s&&s.d(n),n&&b(t)}}}function Q(a){let t,e=a[5]&&Z(a);return{c(){t=lt("div"),e&&e.c(),this.h()},l(s){t=ct(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var n=ut(t);e&&e.l(n),n.forEach(b),this.h()},h(){P(t,"id","svelte-announcer"),P(t,"aria-live","assertive"),P(t,"aria-atomic","true"),P(t,"class","svelte-1j55zn5")},m(s,n){E(s,t,n),e&&e.m(t,null)},p(s,n){s[5]?e?e.p(s,n):(e=Z(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&b(t),e&&e.d()}}}function Z(a){let t;return{c(){t=ft(a[6])},l(e){t=ht(e,a[6])},m(e,s){E(e,t,s)},p(e,s){s&64&&dt(t,e[6])},d(e){e&&b(t)}}}function Et(a){let t,e,s,n;const o=[a[1]||{}];var i=a[0][0];function r(c){let u={$$slots:{default:[vt]},$$scope:{ctx:c}};for(let f=0;f<o.length;f+=1)u=B(u,o[f]);return{props:u}}i&&(t=new i(r(a)));let l=a[4]&&Q(a);return{c(){t&&R(t.$$.fragment),e=_t(),l&&l.c(),s=w()},l(c){t&&O(t.$$.fragment,c),e=pt(c),l&&l.l(c),s=w()},m(c,u){t&&S(t,c,u),E(c,e,u),l&&l.m(c,u),E(c,s,u),n=!0},p(c,[u]){const f=u&2?V(o,[D(c[1]||{})]):{};if(u&525&&(f.$$scope={dirty:u,ctx:c}),i!==(i=c[0][0])){if(t){j();const h=t;y(h.$$.fragment,1,0,()=>{q(h,1)}),x()}i?(t=new i(r(c)),R(t.$$.fragment),m(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}else i&&t.$set(f);c[4]?l?l.p(c,u):(l=Q(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){n||(t&&m(t.$$.fragment,c),n=!0)},o(c){t&&y(t.$$.fragment,c),n=!1},d(c){t&&q(t,c),c&&b(e),l&&l.d(c),c&&b(s)}}}function kt(a,t,e){let{stores:s}=t,{page:n}=t,{components:o}=t,{props_0:i=null}=t,{props_1:r=null}=t,{props_2:l=null}=t;mt("__svelte__",s),gt(s.page.notify);let c=!1,u=!1,f=null;return wt(()=>{const h=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,f=document.title||"untitled page"))});return e(4,c=!0),h}),a.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,n=h.page),"components"in h&&e(0,o=h.components),"props_0"in h&&e(1,i=h.props_0),"props_1"in h&&e(2,r=h.props_1),"props_2"in h&&e(3,l=h.props_2)},a.$$.update=()=>{a.$$.dirty&384&&s.page.set(n)},[o,i,r,l,c,u,f,s,n]}class $t extends it{constructor(t){super();at(this,t,kt,Et,ot,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const Rt="modulepreload",tt={},St="/emojimix/_app/",z=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${St}${s}`,s in tt)return;tt[s]=!0;const n=s.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=n?"stylesheet":Rt,n||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),n)return new Promise((r,l)=>{i.addEventListener("load",r),i.addEventListener("error",l)})})).then(()=>t())},A=[()=>z(()=>import("./layout.svelte-87618d2d.js"),["layout.svelte-87618d2d.js","chunks/vendor-aa7c10b0.js"]),()=>z(()=>import("./error.svelte-62dae6c2.js"),["error.svelte-62dae6c2.js","chunks/vendor-aa7c10b0.js"]),()=>z(()=>import("./pages/index.svelte-54b61ca9.js"),["pages/index.svelte-54b61ca9.js","assets/pages/index.svelte-3005f796.css","chunks/vendor-aa7c10b0.js","chunks/paths-45dac81d.js"])],qt=[[/^\/index\.json$/],[/^\/$/,[A[0],A[2]],[A[1]]]],Lt=[A[0](),A[1]()];function Ut(a){let t=a.baseURI;if(!t){const e=a.getElementsByTagName("base");t=e.length?e[0].href:a.URL}return t}function W(){return{x:pageXOffset,y:pageYOffset}}function et(a){for(;a&&a.nodeName.toUpperCase()!=="A";)a=a.parentNode;return a}class jt{constructor({base:t,routes:e,trailing_slash:s}){this.base=t,this.routes=e,this.trailing_slash=s}init(t){this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let e;addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{const i=X(v({},history.state||{}),{"sveltekit:scroll":W()});history.replaceState(i,document.title,window.location.href)},50)});const s=i=>{const r=et(i.target);r&&r.href&&r.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(r.href))};let n;const o=i=>{clearTimeout(n),n=setTimeout(()=>{s(i)},20)};addEventListener("touchstart",s),addEventListener("mousemove",o),addEventListener("click",i=>{if(!this.enabled||i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const r=et(i.target);if(!r||!r.href)return;const l=typeof r.href=="object"&&r.href.constructor.name==="SVGAnimatedString",c=String(l?r.href.baseVal:r.href);if(c===location.href){location.hash||i.preventDefault();return}const u=(r.getAttribute("rel")||"").split(/\s+/);if(r.hasAttribute("download")||u&&u.includes("external")||(l?r.target.baseVal:r.target))return;const f=new URL(c);if(!this.owns(f))return;const h=r.hasAttribute("sveltekit:noscroll");history.pushState({},"",f.href),this._navigate(f,h?W():null,!1,[],f.hash),i.preventDefault()}),addEventListener("popstate",i=>{if(i.state&&this.enabled){const r=new URL(location.href);this._navigate(r,i.state["sveltekit:scroll"],!1,[])}}),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=decodeURIComponent(t.pathname.slice(this.base.length)||"/"),s=this.routes.filter(([i])=>i.test(e)),n=new URLSearchParams(t.search);return{id:`${e}?${n}`,routes:s,path:e,query:n}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:n=!1,state:o={}}={},i){const r=new URL(t,Ut(document));return this.enabled&&this.owns(r)?(history[s?"replaceState":"pushState"](o,"",t),this._navigate(r,e?W():null,n,i,r.hash)):(location.href=r.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,n,o){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(i.path!=="/"){const l=i.path.endsWith("/");(l&&this.trailing_slash==="never"||!l&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=l?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}this.renderer.notify({path:i.path,query:i.query}),await this.renderer.update(i,n,!1),s||document.body.focus();const r=o&&document.getElementById(o.slice(1));e?scrollTo(e.x,e.y):r?r.scrollIntoView():scrollTo(0,0)}}function xt(a){let t=5381,e=a.length;if(typeof a=="string")for(;e;)t=t*33^a.charCodeAt(--e);else for(;e;)t=t*33^a[--e];return(t>>>0).toString(36)}function At(a){const t=a.status&&a.status>=400&&a.status<=599&&!a.redirect;if(a.error||t){const e=a.status;if(!a.error&&t)return{status:e||500,error:new Error};const s=typeof a.error=="string"?new Error(a.error):a.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(a.redirect){if(!a.status||Math.floor(a.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof a.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return a}function Ct(a){return a instanceof Error?a:new Error(JSON.stringify(a))}function Tt(a){const t=K(a);let e=!0;function s(){e=!0,t.update(i=>i)}function n(i){e=!1,t.set(i)}function o(i){let r;return t.subscribe(l=>{(r===void 0||e&&l!==r)&&i(r=l)})}return{notify:s,set:n,subscribe:o}}function Nt(a,t){let s=`script[data-type="svelte-data"][data-url="${typeof a=="string"?a:a.url}"]`;t&&typeof t.body=="string"&&(s+=`[data-body="${xt(t.body)}"]`);const n=document.querySelector(s);if(n&&n.textContent){const o=JSON.parse(n.textContent),{body:i}=o,r=Y(o,["body"]);return Promise.resolve(new Response(i,r))}return fetch(a,t)}class Pt{constructor({Root:t,fallback:e,target:s,session:n,host:o}){this.Root=t,this.fallback=e,this.host=o,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:null,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Tt({}),navigating:K(null),session:K(n)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async r=>{if(this.$session=r,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:n}){const o=[];let i={},r,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,f=await this._load_node({module:await s[c],page:n,context:i,status:u?t:void 0,error:u?e:void 0});if(o.push(f),f&&f.loaded)if(f.loaded.error){if(e)throw f.loaded.error;l={status:f.loaded.status,error:f.loaded.error,path:n.path,query:n.query}}else f.loaded.context&&(i=v(v({},i),f.loaded.context))}r=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:n,branch:o})}catch(c){if(e)throw c;r=await this._load_error({status:500,error:Ct(c),path:n.path,query:n.query})}if(r.redirect){location.href=new URL(r.redirect,location.href).href;return}this._init(r)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e,s){const n=this.token={};let o=await this._get_navigation_result(t,s);if(n!==this.token)return;if(this.invalid.clear(),o.redirect)if(e.length>10||e.includes(t.path))o=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(o.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(o.redirect,location.href).href;return}if(o.reload?location.reload():this.started?(this.current=o.state,this.root.$set(o.props),this.stores.navigating.set(null),await 0):this._init(o),dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null,!this.router)return;const i=o.state.branch[o.state.branch.length-1];i&&i.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:v({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const n=t.routes[s];if(n.length===1)return{reload:!0,props:{},state:this.current};let o=s+1;for(;o<t.routes.length;){const r=t.routes[o];if(r[0].toString()===n[0].toString())r.length!==1&&r[1].forEach(l=>l()),o+=1;else break}const i=await this._load({route:n,path:t.path,query:t.query},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),n={state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(r=>r.module.default)}};for(let r=0;r<s.length;r+=1){const l=s[r].loaded;l&&(n.props[`props_${r}`]=await l.props)}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(n.props.page=t);const o=s[s.length-1],i=o.loaded&&o.loaded.maxage;if(i){const r=`${t.path}?${t.query}`;let l=!1;const c=()=>{this.cache.get(r)===n&&this.cache.delete(r),f(),clearTimeout(u)},u=setTimeout(c,i*1e3),f=this.stores.session.subscribe(()=>{l&&c()});l=!0,this.cache.set(r,n)}return n}async _load_node({status:t,error:e,module:s,page:n,context:o}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,context:!1,dependencies:[]},loaded:null,context:o},r={};for(const c in n.params)Object.defineProperty(r,c,{get(){return i.uses.params.add(c),n.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:n.host,params:r,get path(){return i.uses.path=!0,n.path},get query(){return i.uses.query=!0,n.query}},get session(){return i.uses.session=!0,l},get context(){return i.uses.context=!0,v({},o)},fetch(h,k){const L=typeof h=="string"?h:h.url,{href:C}=new URL(L,new URL(n.path,document.baseURI));return i.uses.dependencies.push(C),c?fetch(h,k):Nt(h,k)}};e&&(u.status=t,u.error=e);const f=await s.load.call(null,u);if(!f)return;i.loaded=At(f),i.loaded.context&&(i.context=i.loaded.context)}return i}async _load({route:t,path:e,query:s},n){const o=`${e}?${s}`;if(!n){const d=this.cache.get(o);if(d)return d}const[i,r,l,c]=t,u=c?c(i.exec(e)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(u).filter(d=>this.current.page.params[d]!==u[d]),query:s.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},h={host:this.host,path:e,query:s,params:u},k=[];let L={},C=!1,T=200,U;r.forEach(d=>d());t:for(let d=0;d<r.length;d+=1){let _;try{if(!r[d])continue;const g=await r[d](),p=this.current.branch[d];if(!p||g!==p.module||f.path&&p.uses.path||f.params.some($=>p.uses.params.has($))||f.query&&p.uses.query||f.session&&p.uses.session||p.uses.dependencies.some($=>this.invalid.has($))||C&&p.uses.context){_=await this._load_node({module:g,page:h,context:L});const $=d===r.length-1;if(_&&_.loaded){if(_.loaded.error&&(T=_.loaded.status,U=_.loaded.error),_.loaded.redirect)return{redirect:_.loaded.redirect,props:{},state:this.current};_.loaded.context&&(C=!0)}else if($&&g.load)return}else _=p}catch(g){T=500,U=g}if(U){for(;d--;)if(l[d]){let g,p,I=d;for(;!(p=k[I]);)I-=1;try{if(g=await this._load_node({status:T,error:U,module:await l[d](),page:h,context:p.context}),g&&g.loaded&&g.loaded.error)continue;k.push(g);break t}catch{continue}}return await this._load_error({status:T,error:U,path:e,query:s})}else _&&_.loaded&&_.loaded.context&&(L=v(v({},L),_.loaded.context)),k.push(_)}return await this._get_navigation_result_from_branch({page:h,branch:k})}async _load_error({status:t,error:e,path:s,query:n}){const o={host:this.host,path:s,query:n,params:{}},i=await this._load_node({module:await this.fallback[0],page:o,context:{}}),r=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:o,context:i&&i.loaded&&i.loaded.context||{}})];return await this._get_navigation_result_from_branch({page:o,branch:r})}}async function Dt({paths:a,target:t,session:e,host:s,route:n,spa:o,trailing_slash:i,hydrate:r}){const l=n?new jt({base:a.base,routes:qt,trailing_slash:i}):null,c=new Pt({Root:$t,fallback:Lt,target:t,session:e,host:s});yt(a),r&&await c.start(r),l&&(l.init(c),o&&l.goto(location.href,{replaceState:!0},[])),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Dt as start};