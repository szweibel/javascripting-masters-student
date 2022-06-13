(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{48790:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),o=n(59062),i=n(44660),s=n(76914),a=n(66652);function u(e){var t=e.spinnerNeeded;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{snippets:e.snippets}),(0,r.jsxs)("div",{className:"buttonsContainer",children:[!t&&(0,r.jsxs)(s.Z,{onClick:function(){e.run()},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none"},children:[(0,r.jsx)(a.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),t&&(0,r.jsx)(o.Z,{style:{marginLeft:"10px",marginTop:"10px"}}),(0,r.jsx)("span",{style:{marginLeft:"10px",marginTop:"10px",color:"#32c259"},children:e.language}),(0,r.jsx)(s.Z,{variant:"text",onClick:function(){setCode(defaultCode)},style:{color:"#32c259",fontSize:"16px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",margin:"10px",float:"right"},children:"Revert Code"})]})]})}},1639:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r=n(85893),o=n(96156),i=n(87757),s=n.n(i),a=n(92137),u=n(67294),c=n(96540),d=n(4298),l=n(5152),p=n(76914),_=n(6867),f=n(66652),h=n(62681),m=n(59062),x=n(62640),g=n(2658),y=n(54386),v=(0,l.default)((function(){return Promise.all([n.e(281),n.e(569),n.e(681)]).then(n.bind(n,91681))}),{ssr:!1,loadableGenerated:{webpack:function(){return[91681]},modules:["../components/Editor/EditorWithTabs.js -> ./EditorComponent"]}});function b(e){var t=e.defaultCode,n=void 0===t?"# Write your code here":t,i=(0,u.useState)(0),l=i[0],b=i[1],j=(0,u.useState)(!1),E=(j[0],j[1],(0,u.useState)([])),S=E[0],P=E[1],C=(0,u.useState)(n),w=C[0],O=C[1],R=(0,u.useState)(!1),k=(R[0],R[1],(0,u.useState)(!1)),M=(k[0],k[1]),L=(0,u.useState)(null),D=(L[0],L[1],(0,u.useRef)(null)),T=(0,u.useRef)(null),I=(0,u.useContext)(h.G),Z=I.hasLoadPyodideBeenCalled,A=I.isPyodideLoading,W=I.setIsPyodideLoading,U=I.isPyodideReady,B=I.setIsPyodideReady;(0,u.useEffect)((function(){U&&W(!1)}),[Z,W,U]);var N=function(e){O(e)},K=function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D.current.innerHTML="",T.current.innerHTML="",pyodide.globals.set("print",(function(e){z(e)})),pyodide.globals.set("input",(function(e){prompt(e)})),e.next=6,pyodide.loadPackagesFromImports(t);case 6:return e.next=8,pyodide.runPythonAsync(t).then((function(e){z(e)})).catch((function(e){q(e)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function z(e){var t=D.current;t.innerText+=e+"\n",t.scrollTop=t.scrollHeight}function q(e){var t=T.current;t.innerText+=e+"\n",t.scrollTop=t.scrollHeight}var J=function(){return(0,r.jsxs)("div",{children:[!A&&(0,r.jsxs)(p.Z,{onClick:function(){K(w)},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px"},children:[(0,r.jsx)(f.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),A&&(0,r.jsx)(m.Z,{style:{marginLeft:"10px",marginTop:"10px"}})]})};(0,u.useEffect)((function(){l<S.length&&P(S.map((function(e,t){return t===l?{name:e.name,code:w,id:e.id}:e})))}),[l,w]);var H=function(){return(0,r.jsx)("div",{className:"tabs-container",children:S.map((function(e,t){return function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.random().toString(36).substr(2,7);return(0,r.jsx)(x.Z,{label:e,uniqueid:o,onClick:function(){b(n),O(t)},style:{fontSize:"20px",fontWeight:"bold",color:l===n?"#32c259":"white",borderBottom:l===n?"2px solid #32c259":"none"}},n)}(e.name,e.code,t)}))})};return(0,u.useEffect)((function(){P([{name:"Tab 1",code:n}]),b(0)}),[]),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,r.jsx)(d.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){U||function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){B(!0),M(!0)}))}})]}),(0,r.jsx)("div",{className:"editorContainer",children:(0,r.jsxs)(y.Z,{children:[(0,r.jsx)("div",{className:"tab-bar-left",sx:{flexGrow:1},children:(0,r.jsx)(_.Z,{onClick:function(){!function(){var e=S;e.push({name:"Tab "+(S.length+1),code:n}),P(e),b(S.length-1)}()},style:(0,o.Z)({margin:"10px",height:"25px",width:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px",cursor:"pointer"},"outline","none"),children:(0,r.jsx)(c.Z,{style:{margin:"10px",fontSize:"20px"}})})}),(0,r.jsx)("div",{children:H()}),(0,r.jsx)("div",{className:"tab-bar-right",style:{marginLeft:"auto",marginRight:-12},children:J()})]})}),(0,r.jsxs)("div",{className:"tab-content",children:[(0,r.jsx)("div",{className:"editor-container",children:(0,r.jsx)("div",{className:"editor",children:(0,r.jsx)(v,{code:w,onChange:N})})}),(0,r.jsx)("div",{className:"output-container",children:(0,r.jsxs)("div",{className:"output",children:[(0,r.jsx)("div",{className:"output-header",children:(0,r.jsx)(g.Z,{variant:"h6",style:{fontSize:"20px",fontWeight:"bold",color:"#32c259",marginBottom:"10px"},children:"Output"})}),(0,r.jsxs)("div",{className:"output-body",children:[(0,r.jsx)("div",{className:"output-body-output",ref:D}),(0,r.jsx)("div",{className:"output-body-error",ref:T})]})]})})]})]})}},44660:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(85893),o=n(87329),i=n(48623),s=n(66856),a=n(29525),u=n(66083),c=n(7212),d=n(282),l=n(67294),p=n(87714);function _(e){var t=(0,l.useState)([]),n=t[0],_=(t[1],(0,l.useState)(!1)),f=_[0],h=_[1],m=(0,l.useState)(null),x=m[0],g=m[1],y=(0,l.useState)([]),v=y[0],b=y[1],j=function(){return h(!1)};(0,l.useEffect)((function(){if(localStorage.getItem("filenames"))localStorage.getItem("filenames");else localStorage.setItem("filenames",JSON.stringify([]))}),[]);var E=function(e){var t=new FileReader;t.readAsText(e);t.onload=function(){var r={filename:e.name,content:t.result};console.log(r);[].concat((0,o.Z)(n),[r]);b([].concat((0,o.Z)(v),[r])),localStorage.setItem("filenames",[].concat((0,o.Z)(v.map((function(e){return e.filename}))),[r.filename]).join(","))}};d.Z,i.Z,u.Z,a.Z,c.Z,s.Z,d.Z,d.Z;return(0,r.jsx)("div",{className:"file-list",children:e.snippets.map((function(e,t){return(0,r.jsx)("div",{children:(0,r.jsx)(p.Z,{title:"variable file"+(t+1),children:(0,r.jsx)("div",{className:"file-item",style:{color:"white"},children:e.slug})})},t)}))})}},95624:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(85893),o=n(87329),i=n(67294),s=n(91296),a=n.n(s),u=n(30653),c=n(5152),d=n(96561),l=(n(80700),n(66582)),p=(n(84204),(0,c.default)((function(){return Promise.all([n.e(281),n.e(569),n.e(681)]).then(n.bind(n,91681))}),{ssr:!1,loadableGenerated:{webpack:function(){return[91681]},modules:["../components/Editor/HTMLEditorComponent.js -> ./EditorComponent"]}})),_=(0,c.default)((function(){return Promise.resolve().then(n.bind(n,96561))}),{ssr:!1,loadableGenerated:{webpack:function(){return[96561]},modules:["../components/Editor/HTMLEditorComponent.js -> react-frame-component"]}});function f(e){var t=e.defaultCode,s=void 0===t?"\x3c!-- Write your HTML here --\x3e":t,c=e.defaultCSS,f=void 0===c?"/* Write CSS Here */":c,h=e.defaultJS,m=void 0===h?"// Write Javascript Here":h,x=(0,i.useState)(f),g=x[0],y=(x[1],(0,i.useState)([])),v=y[0],b=y[1],j=(0,i.useState)(Math.random()),E=j[0],S=j[1],P=(0,i.useState)(!1),C=P[0],w=P[1],O=(0,i.useState)(null),R=(O[0],O[1]),k=(0,i.useState)(null),M=k[0],L=k[1],D=(0,i.useState)([]),T=D[0],I=D[1],Z=(0,i.useState)(null),A=Z[0],W=(Z[1],(0,i.useState)(!1)),U=W[0],B=W[1],N=(0,i.useRef)([]),K=(0,i.useRef)(m),z=(0,i.useRef)(s),q=(0,i.useRef)(null),J=function(){return setTimeout((function(){B(!0)}),20),(0,l.Hook)(q.current,(function(e){return I((function(t){return[].concat((0,o.Z)(t),[e])}))}),!1),function(){return(0,l.Unhook)(q.current)}};(0,i.useEffect)((function(){C&&(J(),re())}),[C]);var H=(0,i.useRef)(!1),G=(0,i.useState)(null),F=G[0],$=G[1];if((0,i.useEffect)((function(){return H.current=!0,n.e(199).then(n.bind(n,71199)).then((function(e){H.current&&$(e.Allotment)})).catch((function(e){return console.error(e,"could not import allotment ".concat(e.message))})),function(){H.current=!1}}),[]),!F)return(0,r.jsx)("div",{children:"loading..."});var V=function(e,t){var n;if("script"==e.type&&(e.children[0]&&e.children[0].data&&e.children[0].data,e.attribs&&e.attribs.src)){var r=new XMLHttpRequest;r.open("GET",e.attribs.src,!0),r.onreadystatechange=function(){4==r.readyState&&200==r.status&&(n=r.responseText,N.current.push(n))},r.send()}},Q={transform:V},X=function(e){var t=(0,u.ZP)(e,Q);b(t)},Y=function(e){z.current=e,re()},ee=function(e){return(0,r.jsx)("div",{children:e.map((function(e,t){if("string"!==typeof e)return e}))},E)},te=function(e){if(M)try{var t=N.current.join("\n")+"\n"+e;M.eval(t)}catch(n){M.console.error(n)}},ne=function(e){K.current=e,re()},re=function(){S(Math.random()),X(z.current),setTimeout((function(){te(K.current)}),200)},oe=(0,r.jsx)("style",{children:g}),ie=[oe],se=function(){return(0,r.jsx)("div",{style:{width:"100%",height:"100%"},children:(0,r.jsx)(_,{ref:A,head:ie,initialContent:'<!DOCTYPE html><html><head></head><body><div id="mountHere"></div></body></html>',mountTarget:"#mountHere",style:{width:"100%",height:"100%",background:"white"},children:(0,r.jsx)(d.FrameContextConsumer,{children:function(e){var t=e.document,n=e.window;return L(n),R(t),w(!0),q.current=n.console,(0,r.jsx)(r.Fragment,{children:ee(v)})}})},g)})},ae=function(){return(0,r.jsx)("div",{style:{width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.87)"},children:U&&(0,r.jsx)(l.Console,{logs:T,variant:"dark"})})},ue=function(){return(0,r.jsx)(p,{code:z.current,onChange:a()(Y,200),language:"html"})},ce=function(){return(0,r.jsx)(p,{code:K.current,onChange:a()(ne,200),language:"javascript",debounce:1e3})};return(0,r.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,r.jsxs)(F,{minSize:90,children:[(0,r.jsx)(F.Pane,{minSize:100,children:(0,r.jsxs)(F,{vertical:!0,children:[(0,r.jsx)(F.Pane,{minSize:20,children:ue()}),(0,r.jsx)(F.Pane,{minSize:20,children:ce()})]})}),(0,r.jsx)(F.Pane,{children:(0,r.jsx)(F,{children:(0,r.jsxs)(F,{vertical:!0,children:[(0,r.jsx)(F.Pane,{minSize:60,children:se()}),(0,r.jsx)(F.Pane,{className:"JS-console",children:ae()})]})})})]})})}},27958:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(96156),o=n(85893),i=(n(73935),n(29163)),s=n(21963);n(67294);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return e.language&&"python"===e.language.toLowerCase()?(0,o.jsx)(i.Z,u({},e)):e.language&&"javascript"===e.language.toLowerCase()?(0,o.jsx)(s.Z,u({},e)):(0,o.jsx)(i.Z,u({},e))}},21963:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return JSEditorComponent}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),_home_runner_work_javascripting_masters_student_javascripting_masters_student_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(81253),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),next_dynamic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5152),allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(80700),allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3__),_EditorTopbar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(48790),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(50594),EditorComponent=(0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)((function(){return Promise.all([__webpack_require__.e(281),__webpack_require__.e(569),__webpack_require__.e(681)]).then(__webpack_require__.bind(__webpack_require__,91681))}),{ssr:!1,loadableGenerated:{webpack:function(){return[91681]},modules:["../components/Editor/JSEditorComponent.js -> ./EditorComponent"]}}),Frame=(0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)((function(){return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,96561))}),{ssr:!1,loadableGenerated:{webpack:function(){return[96561]},modules:["../components/Editor/JSEditorComponent.js -> react-frame-component"]}});function JSEditorComponent(_ref){var _ref$defaultCode=_ref.defaultCode,defaultCode=void 0===_ref$defaultCode?"// Write Javascript Here":_ref$defaultCode,props=(0,_home_runner_work_javascripting_masters_student_javascripting_masters_student_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_5__.Z)(_ref,["defaultCode"]),_useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCode),javascript=_useState[0],setJavascript=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),runningCode=_useState2[0],setRunningCode=_useState2[1],outputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),error=_useState3[0],setError=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isoutput=_useState4[0],setIsoutput=_useState4[1],_useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isError=_useState5[0],setIsError=_useState5[1],_useReducer=(0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((function(e){return e+1}),0),ignored=_useReducer[0],forceUpdate=_useReducer[1],allSnippets=props.allUploads,chosenSnippets="string"===typeof props.snippets?props.snippets.split(","):[],filteredSnippets=[];function closeOutput(){setIsoutput(!1)}function closeError(){setIsError(!1)}void 0!=chosenSnippets&&chosenSnippets.forEach((function(e){var t=allSnippets.find((function(t){return t.slug===e.trim()}));void 0!=t&&filteredSnippets.push(t)}));var outputComponent=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"output",style:{margin:"10px",padding:"10px",border:"1px solid #32c259",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",overflow:"auto",font:"1.3rem Inconsolata, monospace",whiteSpace:"pre-wrap"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:closeOutput,style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),outputRef.current]})},errorComponent=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"error",style:{font:"1.3rem Inconsolata, monospace",margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto",whiteSpace:"pre-wrap"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:closeError,style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),String(error)]})},JSoutput=function(e){var t="[";if("object"==typeof e&&e.length)for(var n=0;n<e.length;n++)if("object"==typeof e[n]&&e[n].length){t+=(0==n?"":" ")+"[";for(var r=0;r<e[n].length;r++)t+=e[n][r]+(r==e[n].length-1?"]"+(n==e.length-1?"]":",")+"\n":", ")}else t+=e[n]+(n==e.length-1?"]":", ");else t=e;return t},writeln=function(e){e||(e=""),outputRef.current+=JSoutput(e)+"\n"},JSrun=function JSrun(){var str;setIsError(!1),setIsoutput(!1),setRunningCode(!0),outputRef.current="",console.log(javascript);try{var result=eval(javascript);writeln(result),forceUpdate(),setIsoutput(!0)}catch(e){setError(e),setIsError(!0)}void 0!=str&&(outputRef.current+=str),setRunningCode(!1)},onChangeJavascript=function(e){setJavascript(e)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"editorContainer",style:{height:"250px",width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EditorTopbar__WEBPACK_IMPORTED_MODULE_4__.Z,{spinnerNeeded:runningCode,snippets:filteredSnippets,run:JSrun,language:"JavaScript"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditorComponent,{code:javascript,onChange:onChangeJavascript,language:"javascript"})]}),isoutput&&outputComponent(),isError&&errorComponent()]})}},47382:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),o=n(67294),i=n(4298),s=n(19755),a=n.n(s);n(60738),n(11737);function u(){var e=Math.random().toString(36).substring(7);return(0,o.useEffect)((function(){var t=a()("#"+e).terminal((function(e){if(""!==e)try{var t=__EVAL(e);void 0!==t&&this.echo(new String(t))}catch(n){this.error(new String(n))}else this.echo("")}),{tabindex:0,greetings:"",prompt:"> "});return t.focus(),function(){return t.destroy()}}),[]),(0,r.jsxs)("div",{className:"terminal-container",style:{width:"50%",height:"100%",minWidth:"400px"},children:[(0,r.jsx)("div",{className:"term",id:e,style:{width:"100%",height:"100%",border:"1px solid #ccc",borderRadius:"5px",overflow:"hidden",backgroundColor:"#fff"}}),(0,r.jsx)(i.default,{dangerouslySetInnerHTML:{__html:"\n            var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL.toString()}); ${s}`);\n            "}})]})}},29163:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),o=n(87757),i=n.n(o),s=n(92137),a=n(81253),u=n(67294),c=n(4298),d=n(5152),l=n(50594),p=n(62681),_=n(48790),f=(0,d.default)((function(){return Promise.all([n.e(281),n.e(569),n.e(681)]).then(n.bind(n,91681))}),{ssr:!1,loadableGenerated:{webpack:function(){return[91681]},modules:["../components/Editor/PythonEditorComponent.js -> ./EditorComponent"]}});function h(e){var t=e.defaultCode,n=void 0===t?"# Write your code here":t,o=e.minLines,d=e.codeOnChange,h=(0,a.Z)(e,["defaultCode","minLines","codeOnChange"]),m=(0,u.useState)(n),x=m[0],g=m[1],y=(0,u.useState)(!1),v=(y[0],y[1],(0,u.useState)(!1)),b=(v[0],v[1]),j=(0,u.useState)(null),E=(j[0],j[1],(0,u.useState)(!1)),S=E[0],P=E[1],C=(0,u.useState)(!1),w=C[0],O=C[1],R=(0,u.useState)(null),k=R[0],M=R[1],L=(0,u.useRef)(null),D=(0,u.useState)(!1),T=D[0],I=D[1],Z=(0,u.useReducer)((function(e){return e+1}),0),A=(Z[0],Z[1]),W=(0,u.useContext)(p.G),U=W.hasLoadPyodideBeenCalled,B=W.isPyodideLoading,N=W.setIsPyodideLoading,K=W.isPyodideReady,z=W.setIsPyodideReady;(0,u.useEffect)((function(){K&&N(!1)}),[U,N,K]);var q=h.allUploads,J="string"===typeof h.snippets?h.snippets.split(","):[],H=[];void 0!=J&&J.forEach((function(e){var t=q.find((function(t){return t.slug===e.trim()}));void 0!=t&&H.push(t)}));var G=function(){var e=(0,s.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),P(!1),O(!1),M(null),L.current="",pyodide.globals.clear(),pyodide.globals.set("print",(function(e){L.current=L.current+String(e)+"\n"})),pyodide.globals.set("input",(function(e){return prompt(e)})),e.next=10,pyodide.loadPackagesFromImports(t);case 10:return H.forEach((function(e,t){pyodide.runPython("\nfile".concat(t+1," = ").concat(JSON.stringify(e.content),"\n            "))})),e.next=13,pyodide.runPythonAsync(t).then((function(e){P(!0),L.current=L.current+"\n"+e,A()})).catch((function(e){O(!0),M(e)})).finally((function(){I(!1)}));case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,r.jsx)(c.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){K||function(){var e=(0,s.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){z(!0),b(!0)}))}})]}),(0,r.jsxs)("div",{className:"editorContainer",children:[(0,r.jsx)(_.Z,{spinnerNeeded:B||T,snippets:H,run:function(){G(x)},language:"Python"}),(0,r.jsx)(f,{code:x,onChange:function(e){d?d(e):g(e)},maxLines:"Infinity",minLines:o})]}),S&&(0,r.jsxs)("div",{id:"output",style:{margin:"10px",padding:"10px",border:"1px solid #32c259",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",overflow:"auto",font:"1.3rem Inconsolata, monospace",whiteSpace:"pre-wrap"},children:[(0,r.jsx)(l.Z,{onClick:function(){P(!1)},style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),L.current]}),w&&(0,r.jsxs)("div",{id:"error",style:{font:"1.3rem Inconsolata, monospace",margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto",whiteSpace:"pre-wrap"},children:[(0,r.jsx)(l.Z,{onClick:function(){O(!1)},style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),String(k)]})]})}},81365:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(34699),o=n(85893),i=n(87757),s=n.n(i),a=n(92137),u=n(67294),c=n(4298),d=n(62681),l=n(59062),p=n(19755);function _(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw i}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(){var e=(0,u.useContext)(d.G),t=e.hasLoadPyodideBeenCalled,n=e.isPyodideLoading,i=e.setIsPyodideLoading,f=e.isPyodideReady,h=e.setIsPyodideReady;function m(e){return new Promise((function(t){return setTimeout(t,e)}))}var x=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),g="#"+x;function y(){return(y=(0,a.Z)(s().mark((function e(){var t,n,o,i,u,c,d,l,f,h,x,y,v;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y=function(){return(y=(0,a.Z)(s().mark((function e(t){var o,a,c,p,h,x,g,y,b,j;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:o=e.sent,v.pause(),a=_(t.split("\n")),e.prev=5,a.s();case 7:if((c=a.n()).done){e.next=44;break}p=c.value,h=u.push(p),v.set_prompt("incomplete"===h.syntax_check?l:d),e.t0=h.syntax_check,e.next="syntax-error"===e.t0?14:"incomplete"===e.t0?16:"complete"===e.t0?17:18;break;case 14:return v.error(h.formatted_error.trimEnd()),e.abrupt("continue",42);case 16:return e.abrupt("continue",42);case 17:return e.abrupt("break",19);case 18:throw new Error("Unexpected type ".concat(ty));case 19:return x=i(h),e.prev=20,e.next=23,x;case 23:g=e.sent,y=(0,r.Z)(g,1),void 0!==(b=y[0])&&v.echo(n.callKwargs(b,{separator:"\n[[;orange;]<long output truncated>]\n"})),pyodide.isPyProxy(b)&&b.destroy(),e.next=38;break;case 30:if(e.prev=30,e.t1=e.catch(20),"PythonError"!==e.t1.constructor.name){e.next=37;break}j=h.formatted_error||e.t1.message,v.error(j.trimEnd()),e.next=38;break;case 37:throw e.t1;case 38:return e.prev=38,h.destroy(),x.destroy(),e.finish(38);case 42:e.next=7;break;case 44:e.next=49;break;case 46:e.prev=46,e.t2=e.catch(5),a.e(e.t2);case 49:return e.prev=49,a.f(),e.finish(49);case 52:return v.resume(),e.next=55,m(10);case 55:o();case 56:case"end":return e.stop()}}),e,null,[[5,46,49,52],[20,30,38,42]])})))).apply(this,arguments)},x=function(e){return y.apply(this,arguments)},h=function(){return(h=(0,a.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.ready,v.ready=new Promise((function(e){return t=e})),e.next=4,n;case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},f=function(){return h.apply(this,arguments)},t=pyodide.globals.get("dict")(),pyodide.runPython("\n                import sys\n                from pyodide import to_js\n                from pyodide.console import PyodideConsole, repr_shorten, BANNER\n                import __main__\n               \n                pyconsole = PyodideConsole(__main__.__dict__)\n                import builtins\n                async def await_fut(fut):\n                  res = await fut\n                  if res is not None:\n                    builtins._ = res\n                  return to_js([res], depth=1)\n                def clear_console():\n                  pyconsole.buffer = []\n            ",t),n=t.get("repr_shorten"),o=t.get("BANNER"),i=t.get("await_fut"),u=t.get("pyconsole"),c=t.get("clear_console"),t.destroy(),d=">>> ",l="... ",v=p(g).terminal(x,{greetings:o,prompt:d,enabled:!1,completionEscape:!1,completion:function(e,t){t(u.complete(e).toJs()[0])},keymap:{"CTRL+C":function(){var e=(0,a.Z)(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(),v.echo_command(),v.echo("KeyboardInterrupt"),v.set_command(""),v.set_prompt(d);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}}),u.stdout_callback=function(e){return v.echo(e,{newline:!1})},u.stderr_callback=function(e){v.error(e.trimEnd())},v.ready=Promise.resolve(),pyodide._module.on_fatal=function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers."),v.error("The cause of the fatal error was:"),v.error(t),v.error("Look in the browser console for more details."),e.next=6,v.ready;case 6:return v.pause(),e.next=9,m(15);case 9:v.pause();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,u.useEffect)((function(){window.jQuery=p,f&&(i(!1),function(){y.apply(this,arguments)}())}),[t,i,f]),(0,o.jsxs)("div",{className:"PythonREPL",children:[(0,o.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/jquery.terminal@2.27.1/css/jquery.terminal.css",rel:"stylesheet"}),(0,o.jsx)(c.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,o.jsx)(c.default,{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){f||function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().then((function(){console.log("Pyodide version: "+pyodide.version),h(!0)}))}}),(0,o.jsx)("div",{className:"terminal",id:x,children:n&&(0,o.jsx)(l.Z,{})})]})}n(29288)},9557:function(){}}]);