(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(53678)}])},26818:function(e,n,r){"use strict";r.d(n,{Z:function(){return W}});var t=r(26042),i=r(99534),s=r(85893),a=r(86243),o=r(67294),c=r(97762),l=r(27505),d=r(50480),u=r(88641),p=r(85071),h=r(83321),m=r(25935);function f(e){e.className;var n=e.children,r=(0,o.useState)(!1),t=r[0],i=r[1],a=(0,o.useState)(0),f=a[0],g=a[1],x=n[0].props.children.map((function(e,n){var r=c.renderToString(e).replace('<li data-reactroot="">',"").slice(0,-5),t=r.endsWith("*");if(t){var i=r.slice(0,-1);return{index:n,correct:t,li:(0,m.ZP)(i)}}return{index:n,correct:t,li:(0,m.ZP)(r)}})),j=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);return x.some((function(e){return e.correct}))?(0,s.jsxs)("div",{id:j,className:"quiz",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Array.from(e.target.querySelectorAll('input[type="checkbox"]:checked')).map((function(e){return e.value})).map((function(e){return parseInt(e)})),r=x.filter((function(e){return e.correct})).map((function(e){return e.index})),t=r.map((function(e){return parseInt(e)})),s=n.every((function(e){return t.includes(e)}))&&n.length===r.length;s?(document.getElementById(j).style.backgroundColor="rgba(0, 170, 100, 0.3)",document.getElementById("".concat(j,"-submit")).remove(),i(!0),g(s)):(document.getElementById(j).style.backgroundColor="rgba(255, 0, 0, 0.3)",document.getElementById("".concat(j,"-submit")).innerHTML="Try again!")},style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},children:[(0,s.jsxs)(l.Z,{component:"fieldset",children:[(0,s.jsx)(u.Z,{component:"legend",children:"Quiz"}),x.map((function(e){return(0,s.jsx)(d.Z,{value:e.index,control:(0,s.jsx)(p.Z,{}),label:e.li,className:"".concat(j,"-checkbox"),disabled:t},e.index)}))]}),(0,s.jsx)(h.Z,{type:"submit",variant:"contained",color:"primary",className:"quizButton",id:"".concat(j,"-submit"),children:"Check my answer"})]}),f?(0,s.jsx)("p",{children:"Correct!"}):(0,s.jsx)("p",{})]}):(0,s.jsx)("ul",{children:n})}var g=r(20637),x=(r(19823),r(25675)),j=r.n(x),v=r(77825),y=(r(91597),r(5726)),N=r(26880),b=r.n(N),Z=r(94068);function S(){var e=Z.EmulatorState.create({fs:Z.FileSystem.create({"/home":{},"/home/README":{content:"This is a text file"},"/home/nested/directory":{},"/home/nested/directory/file":{content:"End of nested directory!"}})});return(0,s.jsx)(b(),{theme:{background:"#141313",promptSymbolColor:"#6effe6",commandColor:"#fcfcfc",outputColor:"#fcfcfc",errorOutputColor:"#ff89bd",fontSize:"1.1rem",spacing:"1%",fontFamily:"monospace",width:"100%",minHeight:"5vh",padding:"10px"},emulatorState:e})}var k=r(93270),w=r(94615),E=r(55733),_=r.n(E),C=r(93162);function T(e){var n=e.allUploads,r="string"===typeof e.files?e.files.split(","):[],t=[];void 0!=r&&r.forEach((function(e){var r=n.find((function(n){return n.slug===e.trim()}));void 0!=r&&t.push(r)}));return(0,s.jsx)("div",{className:"download-button",style:{marginTop:"20px"},children:(0,s.jsxs)("button",{className:"brutalist-button",style:{cursor:"pointer"},onClick:function(){return function(n){if(t.length>1){console.log(t);var r=new(_());t.forEach((function(e){r.file(e.slug,e.content)})),r.generateAsync({type:"blob"}).then((function(n){(0,C.saveAs)(n,e.workshop.slug+".zip")}))}else{var i=t[0],s=new Blob([i.content],{type:"text/plain"});(0,C.saveAs)(s,i.slug)}}()},children:["Download: ",t.map((function(e){return(0,s.jsxs)("span",{children:[e.slug," "]},e.slug)}))]})})}var M=r(79950),I=r(87387),z=r(86492),L=r.n(z),P=r(84204),A=r(84204).html,B=function(e){var n=e.className,r=e.children,t=(0,o.useState)(!1),i=(t[0],t[1]),a=r.props.children,c=r.props.className;if(void 0!==c){var l=c.replace("lang-",""),d=g.Z.highlight(a,{language:l,ignoreIllegals:!0});g.Z.getLanguage(d.language).name;return(0,s.jsx)("div",{className:"code-block",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:(0,s.jsx)("pre",{className:n+" "+l,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:d.value}})})})}return(0,s.jsx)("pre",{className:n,children:(0,s.jsx)("code",{className:n,dangerouslySetInnerHTML:{__html:a}})})},D=function(e){e.className;var n=(0,i.Z)(e,["className"]),r=(0,t.Z)({},n),a=r.src;return(0,s.jsx)("div",{className:"image-container",children:(0,s.jsx)(v.Z,{children:(0,s.jsx)("div",{className:"markdown-image-container",children:(0,s.jsx)(j(),{className:"markdown-image",src:a,alt:r.alt,layout:"fill",objectFit:"cover"})})})})},H=function(e){var n,r=e.children,a=(0,i.Z)(e,["children"]);return r?r.length>0?(n="object"===typeof r[0]?r[0].props.children.join(""):r.join(""),(0,s.jsx)("div",{children:(0,s.jsx)(w.Z,(0,t.Z)({language:a.language,defaultCode:n},a))})):(n=r.join(""),(0,s.jsx)("div",{children:(0,s.jsx)(w.Z,(0,t.Z)({language:a.language,defaultCode:n},a))})):(0,s.jsx)("div",{children:(0,s.jsx)(w.Z,(0,t.Z)({language:a.language},a))})},F=function(e){e.className;var n=e.children.join("");return(0,s.jsx)("div",{children:(0,s.jsx)(k.Z,{defaultCode:n})})},U=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(y.Z,{})})},q=function(e){e.className,e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(S,{})})},G=function(e){e.className;var n=e.children;return(0,s.jsx)("div",{children:(0,s.jsx)(f,{children:n})})},O=function(e){e.className;for(var n,r,t=e.children,i=0;i<t.length;i++){if("html"===t[i].type&&(n=(0,c.renderToStaticMarkup)(t[i].props.children),n=A(n,{indent_size:2})),"javascript"===t[i].type){var a=[];console.log(t[i].props.children);for(var o=0;o<t[i].props.children.length;o++){var l=(0,c.renderToStaticMarkup)(t[i].props.children[o]);l=l.replace(/<\/?code>/g,""),void 0!==(l=L().decode(l))&&a.push(l)}a=P.js(a.join(""),{indent_size:2})}"css"===t[i].type&&(r=(0,c.renderToStaticMarkup)(t[i].props.children.join("")))}return(0,s.jsx)("div",{children:(0,s.jsx)(I.Z,{defaultCode:n,defaultJS:a,defaultCSS:r})})};function W(e,n,r){return(0,a.n)(e,{overrides:{pre:{component:B,props:{className:"hljs"}},img:{component:D,props:{className:"image"}},CodeEditor:{component:H,props:{allUploads:n}},Download:{component:T,props:{workshop:r,allUploads:n}},Quiz:G,PythonREPL:U,Terminal:q,EditorWithTabs:F,JSTerminal:M.Z,HTMLEditor:O}})}},53678:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return f},default:function(){return g}});var t=r(85893),i=r(67294),s=r(26818),a=r(14952),o=r.n(a),c=r(25675),l=r.n(c),d=(r(50846),r(5152)),u=r.n(d),p=r(27948),h=r(15861),m=r(16323),f=(u()((function(){return r.e(507).then(r.bind(r,65507))}),{loadableGenerated:{webpack:function(){return[65507]}},loading:function(){return(0,t.jsx)("p",{children:"..."})}}),!0);function g(e){var n=e.workshop,r=n.content,a=(0,i.useState)(function(e){var n=(0,s.Z)(e),r=[];n.props.children.reduce((function(e,n){return"string"===typeof n||("h1"===n.type?r.push([n]):"h2"===n.type&&r[r.length-1].push(n)),e}),[]);return r}(r)),c=a[0],d=(a[1],0),u=c.map((function(e,r){var i=0;return e.map((function(r,s){return"h1"===r.type?(d++,(0,t.jsx)(h.Z,{variant:"h4",style:{margin:"0.5rem 0"},children:(0,t.jsxs)("a",{href:"workshop/".concat(n.slug,"/?page=").concat(d),children:[d,". ",r.props.children]})},s)):"h2"===r.type?++i>4?"...":s!==e.length-1?(0,t.jsxs)("span",{children:[r.props.children," / "]}):(0,t.jsx)("span",{children:r.props.children}):void 0}))}));return(0,t.jsx)(p.Z,{disableGutters:!0,maxWidth:"xl",children:(0,t.jsxs)("div",{className:"frontpage card-page",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"frontpage-top",children:[(0,t.jsx)(l(),{src:"/images/logo.png",alt:o().organization+" logo",width:300,height:300,className:"frontpage-logo"}),(0,t.jsx)("h2",{className:"title",children:o().event})]}),(0,t.jsxs)(h.Z,{children:[(0,t.jsx)("h2",{className:"lineUp",children:o().motto||"Further Expanding Digital Humanities Communities of Practice"}),(0,t.jsx)("div",{style:{margin:"10px"},className:"rectangle"}),(0,t.jsx)("p",{style:{margin:"30px"},className:"intro-text",children:o().intro})]})]}),(0,t.jsxs)("div",{className:"sectionTitle",children:[(0,t.jsx)(m.Z,{})," Table of Contents"]}),(0,t.jsx)("div",{className:"workshops",children:(0,t.jsx)("ul",{children:u})})]})})}}},function(e){e.O(0,[774,164,571,340,635,757,354,331,492,888,179],(function(){return n=75557,e(e.s=n);var n}));var n=e.O();_N_E=n}]);