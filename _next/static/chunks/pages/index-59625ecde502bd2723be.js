(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{62709:function(e,n,r){"use strict";r.d(n,{Z:function(){return W}});var t=r(96156),i=r(81253),s=r(85893),a=r(86243),o=r(67294),c=r(97762),l=r(18397),u=r(50542),d=r(69964),p=r(22887),h=r(76914),m=r(15020);function f(e){e.className;var n=e.children,r=(0,o.useState)(!1),t=r[0],i=r[1],a=(0,o.useState)(0),f=a[0],g=a[1],j=n[0].props.children.map((function(e,n){var r=c.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var i=r.slice(0,-1);return{index:n,correct:t,li:(0,m.ZP)(i)}}return{index:n,correct:t,li:(0,m.ZP)(r)}})),x=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return j.some((function(e){return e.correct}))?(0,s.jsxs)("div",{id:x,className:"quiz",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=j.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),s=n.every((function(e){return t.includes(e)}))&&n.length===r.length;s?(document.getElementById(x).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(x,"-submit")).remove(),i(!0),g(s)):(document.getElementById(x).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(x,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,s.jsxs)(l.Z,{component:"fieldset",children:[(0,s.jsx)(d.Z,{component:"legend",children:"Quiz"}),j.map((function(e){return(0,s.jsx)(u.Z,{value:e.index,control:(0,s.jsx)(p.Z,{}),label:e.li,className:"".concat(x,"-checkbox"),disabled:t},e.index)}))]}),(0,s.jsx)(h.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(x,"-submit"),children:"Check my answer"})]}),f?(0,s.jsx)("p",{children:"Correct!"}):(0,s.jsx)("p",{})]}):(0,s.jsx)("ul",{children:n})}var g=r(28579),j=(r(17658),r(25675)),x=r(72165),v=(r(36063),r(81365)),y=r(26880),b=r.n(y),N=r(94068);function w(){var e=N.EmulatorState.create({fs:N.FileSystem.create({"/home":{},"/home/README":{content:"This is a text file"},"/home/nested/directory":{},"/home/nested/directory/file":{content:"End of nested directory!"}})});return(0,s.jsx)(b(),{theme:{background:"#141313",promptSymbolColor:"#6effe6",commandColor:"#fcfcfc",outputColor:"#fcfcfc",errorOutputColor:"#ff89bd",fontSize:"1.1rem",spacing:"1%",fontFamily:"monospace",width:"100%",minHeight:"5vh",padding:"10px"},emulatorState:e})}var Z=r(1639),k=r(27958),E=r(55733),S=r.n(E),O=r(93162);function _(e){var n=e.allUploads,r="string"===typeof e.files?e.files.split(","):[],t=[];void 0!=r&&r.forEach((function(e){var r=n.find((function(n){return n.slug===e.trim()}));void 0!=r&&t.push(r)}));return(0,s.jsxs)("div",{className:"download-button",children:[(0,s.jsx)("button",{onClick:function(){return function(n){if(t.length>1){console.log(t);var r=new(S());t.forEach((function(e){r.file(e.slug,e.content)})),r.generateAsync({type:"blob"}).then((function(n){(0,O.saveAs)(n,e.workshop.slug+".zip")}))}else{var i=t[0],s=new Blob([i.content],{type:"text/plain"});(0,O.saveAs)(s,i.slug)}}()},children:"Download"}),(0,s.jsx)("div",{className:"file-names",children:t.map((function(e){return(0,s.jsx)("div",{children:e.slug},e.slug)}))})]})}var C=r(47382),P=r(95624);function T(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function D(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?T(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var I=r(84204).html,M=function(e){var n=e.className,r=e.children,t=(0,o.useState)(!1),i=t[0],a=t[1],c=r.props.children,l=r.props.className;if(void 0!==l){var u=l.replace("lang-",""),d=g.Z.highlight(c,{language:u,ignoreIllegals:!0}),p=g.Z.getLanguage(d.language).name;return(0,s.jsx)("div",{className:"code-block",onMouseEnter:function(){return a(!0)},onMouseLeave:function(){return a(!1)},children:(0,s.jsxs)("pre",{className:n+" "+u,children:[i&&(0,s.jsx)(s.Fragment,{children:u&&(0,s.jsx)("span",{className:"language",children:p})}),(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:d.value}})]})})}return(0,s.jsx)("pre",{className:n,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:c}})})},z=function(e){e.className;var n=D({},(0,i.Z)(e,["className"])),r=n.src;return(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)(x.Z,{children:(0,s.jsx)("div",{className:"markdown-image-container",children:(0,s.jsx)(j.default,{className:"markdown-image",src:r,alt:n.alt,layout:"fill",objectFit:"cover"})})})})},L=function(e){var n,r=e.children,t=(0,i.Z)(e,["children"]);return r?r.length>0?(n="object"===typeof r[0]?r[0].props.children.join(""):r.join(""),(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,D({language:t.language,defaultCode:n},t))})):(n=r.join(""),(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,D({language:t.language,defaultCode:n},t))})):(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,D({language:t.language},t))})},A=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(Z.Z,{defaultCode:n})})},B=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(v.Z,{})})},H=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(w,{})})},F=function(e){e.className;var n=e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(f,{children:n})})},U=function(e){e.className;for(var n,r,t=e.children,i=0;i<t.length;i++)"html"===t[i].type&&(n=(0,c.renderToStaticMarkup)(t[i].props.children),n=I(n,{indent_size:2})),"javascript"===t[i].type&&(r=t[i].props.children.join(""));return(0,s.jsx)("div",{children:(0,s.jsx)(P.Z,{defaultCode:n,defaultJS:r})})};function W(e,n,r){return(0,a.n)(e,{overrides:{pre:{component:M,props:{className:"hljs"}},img:{component:z,props:{className:"image"}},CodeEditor:{component:L,props:{allUploads:n}},Download:{component:_,props:{workshop:r,allUploads:n}},Quiz:F,PythonREPL:B,Terminal:H,EditorWithTabs:A,JSTerminal:C.Z,HTMLEditor:U}})}},56124:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return m},default:function(){return f}});var t=r(85893),i=r(67294),s=r(62709),a=r(55376),o=r.n(a),c=r(25675),l=r(17169),u=r(5152),d=r(54065),p=r(2658),h=r(16323),m=((0,u.default)((function(){return r.e(41).then(r.bind(r,23041))}),{loading:function(){return(0,t.jsx)("p",{children:"..."})},loadableGenerated:{webpack:function(){return[23041]},modules:["index.js -> ../components/Workshop"]}}),!0);function f(e){var n=e.workshop,r=n.content,a=(0,i.useState)(function(e){var n=(0,s.Z)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):"h2"===n.type&&r[r.length-1].push(n)),e}),[]);return r}(r)),u=a[0],m=(a[1],0),f=u.map((function(e,r){var i=0;return e.map((function(r,s){return"h1"===r.type?(m++,(0,t.jsx)(p.Z,{variant:"h4",style:{margin:"0.5rem 0"},children:(0,t.jsxs)("a",{href:"workshop/".concat(n.slug,"/?page=").concat(m),children:[m,". ",r.props.children]})},s)):"h2"===r.type?++i>4?"...":s!==e.length-1?(0,t.jsxs)("span",{children:[r.props.children," / "]}):(0,t.jsx)("span",{children:r.props.children}):void 0}))}));return(0,t.jsx)(d.Z,{disableGutters:!0,maxWidth:"xl",children:(0,t.jsxs)("div",{className:"frontpage card-page",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"frontpage-top",children:[(0,t.jsx)(c.default,{src:l.Z,alt:o().organization+" logo",width:300,height:300,className:"frontpage-logo"}),(0,t.jsx)("h2",{className:"title",children:o().event})]}),(0,t.jsxs)(p.Z,{children:[(0,t.jsx)("h2",{className:"lineUp",children:o().motto||"Further Expanding Digital Humanities Communities of Practice"}),(0,t.jsx)("div",{style:{margin:"10px"},className:"rectangle"}),(0,t.jsx)("p",{style:{margin:"30px"},className:"intro-text",children:o().intro})]})]}),(0,t.jsxs)("div",{className:"sectionTitle",children:[(0,t.jsx)(h.Z,{})," Table of Contents"]}),(0,t.jsx)("div",{className:"workshops",children:(0,t.jsx)("ul",{children:f})})]})})}},78581:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(56124)}])}},function(e){e.O(0,[774,164,571,340,635,757,976,611,924,888,179],(function(){return n=78581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);