import e,{createContext as t,useState as r,useEffect as s,useRef as n,useContext as a,useMemo as i}from"react";var o=function(t){return e.createElement("p",null,t.text||"test")},l={icon:function(e,t){return"<svg width=".concat(t," height=").concat(t,' viewBox="0 0 144 144" fill=').concat(e,' xmlns="http://www.w3.org/2000/svg">\n<path d="M132 65.982V108H120V98.484L114 92.484V108H102V98.484L92.946 89.43C88.14 88.932 82.98 88.104 78 87.042V108H66V102.012C66 101.256 65.868 91.722 62.538 82.656C61.644 82.314 60.798 81.972 60 81.618V108H48V102.012C47.994 100.542 47.616 66 24 66H18L12 54L24 48C24 48 30 36 36 36C36.15 36 36.372 36 36.552 36C37.788 32.514 41.088 30 45 30C48.912 30 52.212 32.514 53.448 36C66.252 36 84.102 36 102 36C118.56 36 131.988 49.422 132 65.982Z"/>\n<path opacity="0.3" d="M60 81.618V108H48V102.012C47.994 100.542 47.616 66 24 66V65.958C24 65.958 42 66 54 78C55.224 79.224 57.336 80.448 60 81.618ZM111.474 89.958C107.568 89.958 103.896 89.958 102 89.958C99.264 89.958 96.18 89.766 92.946 89.43L102 98.484V108H114V92.484L111.474 89.958Z" fill="black"/>\n</svg>')},arrow_up:function(e,t){return"<svg height=".concat(t,' id="Layer_1" style="enable-background:new 0 0 512 512;"  fill=').concat(e,'\n  version="1.1" viewBox="0 0 512 512" width=').concat(t,' xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="396.6,352 416,331.3 256,160 96,331.3 115.3,352 256,201.5 "/></svg>')},close:function(e,t){return"<svg height=".concat(t,' viewBox="0 0 512 512" width=').concat(t,' xmlns="http://www.w3.org/2000/svg">\n  <title/><path fill=').concat(e,' d="M289.94,256l95-95A24,24,0,0,0,351,127l-95,95-95-95A24,24,0,0,0,127,161l95,95-95,95A24,24,0,1,0,161,385l95-95,95,95A24,24,0,0,0,385,351Z"/>\n  </svg>')}},u={small:"24px",medium:"36px",large:"48px"},c={red:"#FF0000",gray:"#5d768d"},d=function(t){var r=t.name,s=t.size,n=void 0===s?"small":s,a=t.color,i=t.onClick,o=t.className,d=t.refHandler,f=l[r],m=u[n],y=c[a];return e.createElement("div",{ref:d,onClick:i,className:"custom-icon ".concat(o),dangerouslySetInnerHTML:{__html:f(y,m)}})},f=t({}),m=e=>"checkbox"===e.type,y=e=>e instanceof Date,v=e=>null==e;const h=e=>"object"==typeof e;var p=e=>!v(e)&&!Array.isArray(e)&&h(e)&&!y(e),g=e=>Array.isArray(e)?e.filter(Boolean):[],b=e=>void 0===e,w=(e,t,r)=>{if(!t||!p(e))return r;const s=g(t.split(/[,[\].]+?/)).reduce(((e,t)=>v(e)?e:e[t]),e);return b(s)||s===e?b(e[t])?r:e[t]:s};const V="blur",_="focusout",A="onBlur",x="onChange",F="onSubmit",S="onTouched",k="all",E="max",D="min",C="maxLength",O="minLength",N="pattern",L="required",j="validate";e.createContext(null);var M=e=>p(e)&&!Object.keys(e).length,T=e=>Array.isArray(e)?e:[e];var U=e=>"string"==typeof e,B="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function P(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(B&&(e instanceof Blob||e instanceof FileList)||!r&&!p(e))return e;if(t=r?[]:{},Array.isArray(e)||(e=>{const t=e.constructor&&e.constructor.prototype;return p(t)&&t.hasOwnProperty("isPrototypeOf")})(e))for(const r in e)t[r]=P(e[r]);else t=e}return t}var H=(e,t,r,s,n)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:n||!0}}:{},q=e=>/^\w*$/.test(e),I=e=>g(e.replace(/["|']|\]/g,"").split(/\.|\[/));function R(e,t,r){let s=-1;const n=q(t)?[t]:I(t),a=n.length,i=a-1;for(;++s<a;){const t=n[s];let a=r;if(s!==i){const r=e[t];a=p(r)||Array.isArray(r)?r:isNaN(+n[s+1])?{}:[]}e[t]=a,e=e[t]}return e}const Z=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=w(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else p(s)&&Z(s,t)}}};var $=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),z=(e,t,r)=>{const s=g(w(e,r));return R(s,"root",t[r]),R(e,r,s),e},W=e=>"boolean"==typeof e,Y=e=>"file"===e.type,G=e=>"function"==typeof e,J=t=>U(t)||e.isValidElement(t),K=e=>"radio"===e.type,Q=e=>e instanceof RegExp;const X={value:!1,isValid:!1},ee={value:!0,isValid:!0};var te=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!b(e[0].attributes.value)?b(e[0].value)||""===e[0].value?ee:{value:e[0].value,isValid:!0}:ee:X}return X};const re={isValid:!1,value:null};var se=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),re):re;function ne(e,t,r="validate"){if(J(e)||Array.isArray(e)&&e.every(J)||W(e)&&!e)return{type:r,message:J(e)?e:"",ref:t}}var ae=e=>p(e)&&!Q(e)?e:{value:e,message:""},ie=async(e,t,r,s,n)=>{const{ref:a,refs:i,required:o,maxLength:l,minLength:u,min:c,max:d,pattern:f,validate:y,name:h,valueAsNumber:g,mount:b,disabled:w}=e._f;if(!b||w)return{};const V=i?i[0]:a,_=e=>{s&&V.reportValidity&&(V.setCustomValidity(W(e)?"":e||""),V.reportValidity())},A={},x=K(a),F=m(a),S=x||F,k=(g||Y(a))&&!a.value||""===t||Array.isArray(t)&&!t.length,T=H.bind(null,h,r,A),B=(e,t,r,s=C,n=O)=>{const i=e?t:r;A[h]={type:e?s:n,message:i,ref:a,...T(e?s:n,i)}};if(n?!Array.isArray(t)||!t.length:o&&(!S&&(k||v(t))||W(t)&&!t||F&&!te(i).isValid||x&&!se(i).isValid)){const{value:e,message:t}=J(o)?{value:!!o,message:o}:ae(o);if(e&&(A[h]={type:L,message:t,ref:V,...T(L,t)},!r))return _(t),A}if(!(k||v(c)&&v(d))){let e,s;const n=ae(d),i=ae(c);if(v(t)||isNaN(t)){const r=a.valueAsDate||new Date(t),o=e=>new Date((new Date).toDateString()+" "+e),l="time"==a.type,u="week"==a.type;U(n.value)&&t&&(e=l?o(t)>o(n.value):u?t>n.value:r>new Date(n.value)),U(i.value)&&t&&(s=l?o(t)<o(i.value):u?t<i.value:r<new Date(i.value))}else{const r=a.valueAsNumber||(t?+t:t);v(n.value)||(e=r>n.value),v(i.value)||(s=r<i.value)}if((e||s)&&(B(!!e,n.message,i.message,E,D),!r))return _(A[h].message),A}if((l||u)&&!k&&(U(t)||n&&Array.isArray(t))){const e=ae(l),s=ae(u),n=!v(e.value)&&t.length>e.value,a=!v(s.value)&&t.length<s.value;if((n||a)&&(B(n,e.message,s.message),!r))return _(A[h].message),A}if(f&&!k&&U(t)){const{value:e,message:s}=ae(f);if(Q(e)&&!t.match(e)&&(A[h]={type:N,message:s,ref:a,...T(N,s)},!r))return _(s),A}if(y)if(G(y)){const e=ne(await y(t),V);if(e&&(A[h]={...e,...T(j,e.message)},!r))return _(e.message),A}else if(p(y)){let e={};for(const s in y){if(!M(e)&&!r)break;const n=ne(await y[s](t),V,s);n&&(e={...n,...T(s,n.message)},_(n.message),r&&(A[h]=e))}if(!M(e)&&(A[h]={ref:V,...e},!r))return A}return _(!0),A},oe=e=>({isOnSubmit:!e||e===F,isOnBlur:e===A,isOnChange:e===x,isOnAll:e===k,isOnTouch:e===S});function le(e){for(const t in e)if(!b(e[t]))return!1;return!0}function ue(e,t){const r=q(t)?[t]:I(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=b(e)?s++:e[t[s++]];return e}(e,r),n=r[r.length-1];let a;s&&delete s[n];for(let t=0;t<r.slice(0,-1).length;t++){let s,n=-1;const i=r.slice(0,-(t+1)),o=i.length-1;for(t>0&&(a=e);++n<i.length;){const t=i[n];s=s?s[t]:e[t],o===n&&(p(s)&&M(s)||Array.isArray(s)&&le(s))&&(a?delete a[t]:delete e[t]),a=s}}return e}function ce(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var de=e=>v(e)||!h(e);function fe(e,t){if(de(e)||de(t))return e===t;if(y(e)&&y(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const n of r){const r=e[n];if(!s.includes(n))return!1;if("ref"!==n){const e=t[n];if(y(r)&&y(e)||p(r)&&p(e)||Array.isArray(r)&&Array.isArray(e)?!fe(r,e):r!==e)return!1}}return!0}var me=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ye=e=>"select-multiple"===e.type,ve=e=>me(e)&&e.isConnected,he=e=>{for(const t in e)if(G(e[t]))return!0;return!1};function pe(e,t={}){const r=Array.isArray(e);if(p(e)||r)for(const r in e)Array.isArray(e[r])||p(e[r])&&!he(e[r])?(t[r]=Array.isArray(e[r])?[]:{},pe(e[r],t[r])):v(e[r])||(t[r]=!0);return t}function ge(e,t,r){const s=Array.isArray(e);if(p(e)||s)for(const s in e)Array.isArray(e[s])||p(e[s])&&!he(e[s])?b(t)||de(r[s])?r[s]=Array.isArray(e[s])?pe(e[s],[]):{...pe(e[s])}:ge(e[s],v(t)?{}:t[s],r[s]):fe(e[s],t[s])?delete r[s]:r[s]=!0;return r}var be=(e,t)=>ge(e,t,pe(t)),we=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>b(e)?e:t?""===e?NaN:e?+e:e:r&&U(e)?new Date(e):s?s(e):e;function Ve(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Y(t)?t.files:K(t)?se(e.refs).value:ye(t)?[...t.selectedOptions].map((({value:e})=>e)):m(t)?te(e.refs).value:we(b(t.value)?e.ref.value:t.value,e)}var _e=e=>b(e)?e:Q(e)?e.source:p(e)?Q(e.value)?e.value.source:e.value:e;function Ae(e,t,r){const s=w(e,r);if(s||q(r))return{error:s,name:r};const n=r.split(".");for(;n.length;){const s=n.join("."),a=w(t,s),i=w(e,s);if(a&&!Array.isArray(a)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};n.pop()}return{name:r}}const xe={mode:F,reValidateMode:x,shouldFocusError:!0};function Fe(e={}){let t,r={...xe,...e},s={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},a=P(r.defaultValues)||{},i=r.shouldUnregister?{}:P(a),o={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u=0;const c={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={watch:ce(),array:ce(),state:ce()},f=oe(r.mode),h=oe(r.reValidateMode),A=r.criteriaMode===k,x=async()=>{if(c.isValid){const e=r.resolver?M((await C()).errors):await O(n,!0);e!==s.isValid&&(s.isValid=e,d.state.next({isValid:e}))}},F=e=>c.isValidating&&e!==s.isValidating&&d.state.next({isValidating:e}),S=(e,t,r,s)=>{const l=w(n,e);if(l){const n=w(i,e,b(r)?w(a,e):r);b(n)||s&&s.defaultChecked||t?R(i,e,t?n:Ve(l._f)):j(e,n),o.mount&&x()}},E=(e,t,r,n,i)=>{let o=!1,l=!1;const u={name:e};if((!r||n)&&(c.isDirty&&(l=s.isDirty,s.isDirty=u.isDirty=N(),o=l!==u.isDirty),c.dirtyFields)){l=w(s.dirtyFields,e);const r=fe(w(a,e),t);r?ue(s.dirtyFields,e):R(s.dirtyFields,e,!0),u.dirtyFields=s.dirtyFields,o=o||l!==!r}if(r){const t=w(s.touchedFields,e);t||(R(s.touchedFields,e,r),u.touchedFields=s.touchedFields,o=o||c.touchedFields&&t!==r)}return o&&i&&d.state.next(u),o?u:{}},D=(r,n,a,i)=>{const o=w(s.errors,r),l=c.isValid&&W(n)&&s.isValid!==n;var f;if(e.delayError&&a?(f=()=>((e,t)=>{R(s.errors,e,t),d.state.next({errors:s.errors})})(r,a),t=e=>{clearTimeout(u),u=window.setTimeout(f,e)},t(e.delayError)):(clearTimeout(u),t=null,a?R(s.errors,r,a):ue(s.errors,r)),(a?!fe(o,a):o)||!M(i)||l){const e={...i,...l&&W(n)?{isValid:n}:{},errors:s.errors,name:r};s={...s,...e},d.state.next(e)}F(!1)},C=async e=>await r.resolver(i,r.context,((e,t,r,s)=>{const n={};for(const r of e){const e=w(t,r);e&&R(n,r,e._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:s}})(e||l.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),O=async(e,t,n={valid:!0})=>{for(const a in e){const o=e[a];if(o){const{_f:e,...a}=o;if(e){const a=l.array.has(e.name),u=await ie(o,w(i,e.name),A,r.shouldUseNativeValidation,a);if(u[e.name]&&(n.valid=!1,t))break;!t&&(w(u,e.name)?a?z(s.errors,u,e.name):R(s.errors,e.name,u[e.name]):ue(s.errors,e.name))}a&&await O(a,t,n)}}return n.valid},N=(e,t)=>(e&&t&&R(i,e,t),!fe(Q(),a)),L=(e,t,r)=>((e,t,r,s)=>U(e)?(s&&t.watch.add(e),w(r,e)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),w(r,e)))):(s&&(t.watchAll=!0),r))(e,l,{...o.mount?i:b(t)?a:U(e)?{[e]:t}:t},r),j=(e,t,r={})=>{const s=w(n,e);let a=t;if(s){const r=s._f;r&&(!r.disabled&&R(i,e,we(t,r)),a=B&&me(r.ref)&&v(t)?"":t,ye(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?m(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):Y(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||d.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&E(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&J(e)},H=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,o=w(n,i);!l.array.has(e)&&de(a)&&(!o||o._f)||y(a)?j(i,a,r):H(i,a,r)}},q=(e,t,r={})=>{const o=w(n,e),u=l.array.has(e),f=P(t);R(i,e,f),u?(d.array.next({name:e,values:i}),(c.isDirty||c.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=be(a,i),d.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:N(e,f)}))):!o||o._f||v(f)?j(e,f,r):H(e,f,r),$(e,l)&&d.state.next({}),d.watch.next({name:e})},I=async e=>{const a=e.target;let o=a.name;const u=w(n,o),y=()=>a.type?Ve(u._f):(e=>p(e)&&e.target?m(e.target)?e.target.checked:e.target.value:e)(e);if(u){let a,m;const p=y(),g=e.type===V||e.type===_,b=!((v=u._f).mount&&(v.required||v.min||v.max||v.maxLength||v.minLength||v.pattern||v.validate)||r.resolver||w(s.errors,o)||u._f.deps)||((e,t,r,s,n)=>!n.isOnAll&&(!r&&n.isOnTouch?!(t||e):(r?s.isOnBlur:n.isOnBlur)?!e:!(r?s.isOnChange:n.isOnChange)||e))(g,w(s.touchedFields,o),s.isSubmitted,h,f),S=$(o,l,g);R(i,o,p),g?(u._f.onBlur&&u._f.onBlur(e),t&&t(0)):u._f.onChange&&u._f.onChange(e);const k=E(o,p,g,!1),N=!M(k)||S;if(!g&&d.watch.next({name:o,type:e.type}),b)return c.isValid&&x(),N&&d.state.next({name:o,...S?{}:k});if(!g&&S&&d.state.next({}),F(!0),r.resolver){const{errors:e}=await C([o]),t=Ae(s.errors,n,o),r=Ae(e,n,t.name||o);a=r.error,o=r.name,m=M(e)}else a=(await ie(u,w(i,o),A,r.shouldUseNativeValidation))[o],a?m=!1:c.isValid&&(m=await O(n,!0));de(p)&&y()!==p?F(!1):(u._f.deps&&J(u._f.deps),D(o,m,a,k))}var v},J=async(e,t={})=>{let a,i;const o=T(e);if(F(!0),r.resolver){const t=await(async e=>{const{errors:t}=await C();if(e)for(const r of e){const e=w(t,r);e?R(s.errors,r,e):ue(s.errors,r)}else s.errors=t;return t})(b(e)?e:o);a=M(t),i=e?!o.some((e=>w(t,e))):a}else e?(i=(await Promise.all(o.map((async e=>{const t=w(n,e);return await O(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&x()):i=a=await O(n);return d.state.next({...!U(e)||c.isValid&&a!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!i&&Z(n,(e=>e&&w(s.errors,e)),e?o:l.mount),i},Q=e=>{const t={...a,...o.mount?i:{}};return b(e)?t:U(e)?w(t,e):e.map((e=>w(t,e)))},X=(e,t)=>({invalid:!!w((t||s).errors,e),isDirty:!!w((t||s).dirtyFields,e),isTouched:!!w((t||s).touchedFields,e),error:w((t||s).errors,e)}),ee=(e,t={})=>{for(const o of e?T(e):l.mount)l.mount.delete(o),l.array.delete(o),w(n,o)&&(t.keepValue||(ue(n,o),ue(i,o)),!t.keepError&&ue(s.errors,o),!t.keepDirty&&ue(s.dirtyFields,o),!t.keepTouched&&ue(s.touchedFields,o),!r.shouldUnregister&&!t.keepDefaultValue&&ue(a,o));d.watch.next({}),d.state.next({...s,...t.keepDirty?{isDirty:N()}:{}}),!t.keepIsValid&&x()},te=(e,t={})=>{let s=w(n,e);const u=W(t.disabled);return R(n,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),l.mount.add(e),s?u&&R(i,e,t.disabled?void 0:w(i,e,Ve(s._f))):S(e,!0,t.value),{...u?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:_e(t.min),max:_e(t.max),minLength:_e(t.minLength),maxLength:_e(t.maxLength),pattern:_e(t.pattern)}:{},name:e,onChange:I,onBlur:I,ref:i=>{if(i){te(e,t),s=w(n,e);const r=b(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,o=(e=>K(e)||m(e))(r),l=s._f.refs||[];if(o?l.find((e=>e===r)):r===s._f.ref)return;R(n,e,{_f:{...s._f,...o?{refs:[...l.filter(ve),r,...Array.isArray(w(a,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),S(e,!1,void 0,r)}else s=w(n,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!((e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)))(l.array,e)||!o.action)&&l.unMount.add(e)}}},re=()=>r.shouldFocusError&&Z(n,(e=>e&&w(s.errors,e)),l.mount);return{control:{register:te,unregister:ee,getFieldState:X,_executeSchema:C,_focusError:re,_getWatch:L,_getDirty:N,_updateValid:x,_removeUnmounted:()=>{for(const e of l.unMount){const t=w(n,e);t&&(t._f.refs?t._f.refs.every((e=>!ve(e))):!ve(t._f.ref))&&ee(e)}l.unMount=new Set},_updateFieldArray:(e,t=[],r,l,u=!0,f=!0)=>{if(l&&r){if(o.action=!0,f&&Array.isArray(w(n,e))){const t=r(w(n,e),l.argA,l.argB);u&&R(n,e,t)}if(f&&Array.isArray(w(s.errors,e))){const t=r(w(s.errors,e),l.argA,l.argB);u&&R(s.errors,e,t),((e,t)=>{!g(w(e,t)).length&&ue(e,t)})(s.errors,e)}if(c.touchedFields&&f&&Array.isArray(w(s.touchedFields,e))){const t=r(w(s.touchedFields,e),l.argA,l.argB);u&&R(s.touchedFields,e,t)}c.dirtyFields&&(s.dirtyFields=be(a,i)),d.state.next({name:e,isDirty:N(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else R(i,e,t)},_getFieldArray:t=>g(w(o.mount?i:a,t,e.shouldUnregister?w(a,t,[]):[])),_subjects:d,_proxyFormState:c,get _fields(){return n},get _formValues(){return i},get _stateFlags(){return o},set _stateFlags(e){o=e},get _defaultValues(){return a},get _names(){return l},set _names(e){l=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:J,register:te,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let o=!0,l=P(i);d.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await C();s.errors=e,l=t}else await O(n);M(s.errors)?(d.state.next({errors:{},isSubmitting:!0}),await e(l,a)):(t&&await t({...s.errors},a),re())}catch(e){throw o=!1,e}finally{s.isSubmitted=!0,d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(s.errors)&&o,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>G(e)?d.watch.subscribe({next:r=>e(L(void 0,t),r)}):L(e,t,!0),setValue:q,getValues:Q,reset:(t,r)=>((t,r={})=>{const u=t||a,f=P(u),m=t&&!M(t)?f:a;if(r.keepDefaultValues||(a=u),!r.keepValues){if(r.keepDirtyValues)for(const e of l.mount)w(s.dirtyFields,e)?R(m,e,w(i,e)):q(e,w(m,e));else{if(B&&b(t))for(const e of l.mount){const t=w(n,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(me(e)){const t=e.closest("form");if(t){t.reset();break}}}}n={}}i=e.shouldUnregister?r.keepDefaultValues?P(a):{}:f,d.array.next({values:m}),d.watch.next({values:m})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!c.isValid||!!r.keepIsValid,o.watch=!!e.shouldUnregister,d.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||fe(t,a)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?be(a,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(G(t)?t(i):t,r),resetField:(e,t={})=>{w(n,e)&&(b(t.defaultValue)?q(e,w(a,e)):(q(e,t.defaultValue),R(a,e,t.defaultValue)),t.keepTouched||ue(s.touchedFields,e),t.keepDirty||(ue(s.dirtyFields,e),s.isDirty=t.defaultValue?N(e,w(a,e)):N()),t.keepError||(ue(s.errors,e),c.isValid&&x()),d.state.next({...s}))},clearErrors:e=>{e?T(e).forEach((e=>ue(s.errors,e))):s.errors={},d.state.next({errors:s.errors})},unregister:ee,setError:(e,t,r)=>{const a=(w(n,e,{_f:{}})._f||{}).ref;R(s.errors,e,{...t,ref:a}),d.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=w(n,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:X}}function Se(t={}){const r=e.useRef(),[s,n]=e.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:t.defaultValues});r.current||(r.current={...Fe(t),formState:s});const a=r.current.control;return a._options=t,function(t){const r=e.useRef(t);r.current=t,e.useEffect((()=>{const e=!t.disabled&&r.current.subject.subscribe({next:r.current.callback});return()=>{e&&e.unsubscribe()}}),[t.disabled])}({subject:a._subjects.state,callback:e.useCallback((e=>{((e,t,r)=>{const{name:s,...n}=e;return M(n)||Object.keys(n).length>=Object.keys(t).length||Object.keys(n).find((e=>t[e]===(!r||k)))})(e,a._proxyFormState,!0)&&(a._formState={...a._formState,...e},n({...a._formState}))}),[a])}),e.useEffect((()=>{a._stateFlags.mount||(a._proxyFormState.isValid&&a._updateValid(),a._stateFlags.mount=!0),a._stateFlags.watch&&(a._stateFlags.watch=!1,a._subjects.state.next({})),a._removeUnmounted()})),e.useEffect((()=>{s.submitCount&&a._focusError()}),[a,s.submitCount]),r.current.formState=((e,t,r,s=!0)=>{const n={defaultValues:t._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const n=a;return t._proxyFormState[n]!==k&&(t._proxyFormState[n]=!s||k),r&&(r[n]=!0),e[n]}});return n})(s,a),r.current}var ke=function(e,t,r){if(e&&"reportValidity"in e){var s=w(r,t);e.setCustomValidity(s&&s.message||""),e.reportValidity()}},Ee=function(e,t){var r=function(r){var s=t.fields[r];s&&s.ref&&"reportValidity"in s.ref?ke(s.ref,r,e):s.refs&&s.refs.forEach((function(t){return ke(t,r,e)}))};for(var s in t.fields)r(s)},De=function(e,t){t.shouldUseNativeValidation&&Ee(e,t);var r={};for(var s in e){var n=w(t.fields,s);R(r,s,Object.assign(e[s],{ref:n&&n.ref}))}return r},Ce=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),function(s,n,a){try{return Promise.resolve(function(i,o){try{var l=(t.context&&"development"===process.env.NODE_ENV&&console.warn("You should not used the yup options context. Please, use the 'useForm' context object instead"),Promise.resolve(e["sync"===r.mode?"validateSync":"validate"](s,Object.assign({abortEarly:!1},t,{context:n}))).then((function(e){return a.shouldUseNativeValidation&&Ee({},a),{values:r.rawValues?s:e,errors:{}}})))}catch(e){return o(e)}return l&&l.then?l.then(void 0,o):l}(0,(function(e){if(!e.inner)throw e;return{values:{},errors:De((t=e,r=!a.shouldUseNativeValidation&&"all"===a.criteriaMode,(t.inner||[]).reduce((function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),r){var s=e[t.path].types,n=s&&s[t.type];e[t.path]=H(t.path,r,e,t.type,n?[].concat(n,t.message):t.message)}return e}),{})),a)};var t,r})))}catch(e){return Promise.reject(e)}}},Oe=function(t){var r=t.children,s=t.initialValues,n=t.validationScheme,a=Se({resolver:Ce(n),defaultValues:s}),i=a.handleSubmit,o=a.formState.errors,l=a.register;return e.createElement("form",{onSubmit:i((function(e){return console.log("data",e)}))},e.createElement(f.Provider,{value:{register:l,errors:o}},r,e.createElement("input",{type:"submit"})))},Ne=function(){return Ne=Object.assign||function(e){for(var t,r=1,s=arguments.length;r<s;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},Ne.apply(this,arguments)};function Le(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(e,s[n])&&(r[s[n]]=e[s[n]])}return r}var je=e.forwardRef((function(t,r){var s=t.className,n=Le(t,["className"]);return e.createElement("div",{className:"input-container ".concat(s)},e.createElement("input",Ne({ref:r},n)))}));je.displayName="FormInput";var Me=function(e,t){var n=r(!1),a=n[0],i=n[1];s((function(){var r=function(r){(!e||e.current&&!e.current.contains(r.target))&&t(r)},s=function(e){a?i(!1):r(e)},n=function(){a||i(!0)};return document.addEventListener("mousedown",r),document.addEventListener("touchend",s),document.addEventListener("touchmove",n),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchend",s),document.removeEventListener("touchmove",n)}}),[e,t,a])},Te=function(t){t.options;var s=t.selectedValue;t.onSelect;var a=r(!1),i=a[0],o=a[1],l=n(null);return Me(l,(function(){return o(!1)})),e.createElement("div",{className:"select-container",ref:l},e.createElement("div",{className:"selected-item-container",onClick:function(){return o(!i)}},e.createElement("div",{className:"select-item"},s.label)))},Ue=function(t){var r=t.isOpen,s=t.onClose,a=t.children,i=n(null);return Me(i,s),r?e.createElement("div",{className:"popup-container"},e.createElement("div",{className:"popup-content",ref:i},e.createElement(d,{className:"close-icon",name:"close",size:"small",onClick:s}),a)):null},Be=function(t){var r=t.buttonText,s=t.type,n=t.onClick;return console.log("type",s),e.createElement("button",{onClick:n},r)},Pe=function(t){var r=t.component,s=t.name,n=Le(t,["component","name"]),o=a(f),l=o.register,u=o.errors,c=i((function(){return u[s]?u[s].message:null}),[u,s]);return l?e.createElement(e.Fragment,null,e.createElement(r,Ne({},n,l(s))),e.createElement("p",null,c)):null};export{Be as Button,Oe as FormContainer,Pe as FormField,d as Icon,je as Input,Ue as Popup,Te as Select,o as Text};
//# sourceMappingURL=index.js.map
