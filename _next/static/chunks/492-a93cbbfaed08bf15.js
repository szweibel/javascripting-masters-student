(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{21552:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var r=t(85893),o=t(98456),i=t(76204),s=t(83321),a=t(66652);function c(e){var n=e.spinnerNeeded;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{snippets:e.snippets}),(0,r.jsxs)("div",{className:"buttonsContainer",children:[!n&&(0,r.jsxs)(s.Z,{onClick:function(){e.run()},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none"},children:[(0,r.jsx)(a.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),n&&(0,r.jsx)(o.Z,{style:{marginLeft:"10px",marginTop:"10px"}}),(0,r.jsx)("span",{style:{marginLeft:"10px",marginTop:"10px",color:"#32c259"},children:e.language}),(0,r.jsx)(s.Z,{variant:"text",onClick:function(){console.log(e),e.setCode(e.defaultCode)},style:{color:"#32c259",fontSize:"16px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",margin:"10px",float:"right"},children:"Revert Code"})]})]})}},93270:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(47568),o=t(14924),i=t(34051),s=t.n(i),a=t(85893),c=t(67294),u=t(96540),d=t(4298),l=t.n(d),_=t(5152),p=t.n(_),f=t(83321),h=t(93946),x=t(66652),m=t(81754),g=t(98456),y=t(40044),v=t(15861),E=t(10155),b=p()((function(){return Promise.all([t.e(281),t.e(569),t.e(149)]).then(t.bind(t,4149))}),{loadableGenerated:{webpack:function(){return[4149]}},ssr:!1});function j(e){var n=e.defaultCode,t=void 0===n?"# Write your code here":n,i=function(e){var n=I.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight},d=function(e){var n=Z.current;n.innerText+=e+"\n",n.scrollTop=n.scrollHeight},_=(0,c.useState)(0),p=_[0],j=_[1],C=(0,c.useState)(!1),P=(C[0],C[1],(0,c.useState)([])),w=P[0],S=P[1],R=(0,c.useState)(t),M=R[0],O=R[1],k=(0,c.useState)(!1),D=(k[0],k[1],(0,c.useState)(!1)),L=(D[0],D[1]),T=(0,c.useState)(null),I=(T[0],T[1],(0,c.useRef)(null)),Z=(0,c.useRef)(null),A=(0,c.useContext)(m.G),U=A.hasLoadPyodideBeenCalled,W=A.isPyodideLoading,B=A.setIsPyodideLoading,K=A.isPyodideReady,N=A.setIsPyodideReady;(0,c.useEffect)((function(){K&&B(!1)}),[U,B,K]);var q=function(e){O(e)},z=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I.current.innerHTML="",Z.current.innerHTML="",pyodide.globals.set("print",(function(e){i(e)})),pyodide.globals.set("input",(function(e){prompt(e)})),e.next=6,pyodide.loadPackagesFromImports(n);case 6:return e.next=8,pyodide.runPythonAsync(n).then((function(e){i(e)})).catch((function(e){d(e)}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),J=function(){return(0,a.jsxs)("div",{children:[!W&&(0,a.jsxs)(f.Z,{onClick:function(){z(M)},variant:"outlined",style:{margin:"10px",width:"100px",height:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px"},children:[(0,a.jsx)(x.Z,{style:{marginRight:"10px",fontSize:"20px"}}),"Run"]}),W&&(0,a.jsx)(g.Z,{style:{marginLeft:"10px",marginTop:"10px"}})]})};(0,c.useEffect)((function(){p<w.length&&S(w.map((function(e,n){return n===p?{name:e.name,code:M,id:e.id}:e})))}),[p,M]);var H=function(){return(0,a.jsx)("div",{className:"tabs-container",children:w.map((function(e,n){return function(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.random().toString(36).substr(2,7);return(0,a.jsx)(y.Z,{label:e,uniqueid:r,onClick:function(){j(t),O(n)},style:{fontSize:"20px",fontWeight:"bold",color:p===t?"#32c259":"white",borderBottom:p===t?"2px solid #32c259":"none"}},t)}(e.name,e.code,n)}))})};return(0,c.useEffect)((function(){S([{name:"Tab 1",code:t}]),j(0)}),[]),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l(),{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,a.jsx)(l(),{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){if(!K){function e(){return n.apply(this,arguments)}function n(){return(n=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e().then((function(){N(!0),L(!0)}))}}})]}),(0,a.jsx)("div",{className:"editorContainer",children:(0,a.jsxs)(E.Z,{children:[(0,a.jsx)("div",{className:"tab-bar-left",sx:{flexGrow:1},children:(0,a.jsx)(h.Z,{onClick:function(){!function(){var e=w;e.push({name:"Tab "+(w.length+1),code:t}),S(e),j(w.length-1)}()},style:(0,o.Z)({margin:"10px",height:"25px",width:"25px",backgroundColor:"#32c259",color:"white",fontSize:"20px",borderRadius:"5px",border:"none",boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",outline:"none",padding:"15px",cursor:"pointer"},"outline","none"),children:(0,a.jsx)(u.Z,{style:{margin:"10px",fontSize:"20px"}})})}),(0,a.jsx)("div",{children:H()}),(0,a.jsx)("div",{className:"tab-bar-right",style:{marginLeft:"auto",marginRight:-12},children:J()})]})}),(0,a.jsxs)("div",{className:"tab-content",children:[(0,a.jsx)("div",{className:"editor-container",children:(0,a.jsx)("div",{className:"editor",children:(0,a.jsx)(b,{code:M,onChange:q})})}),(0,a.jsx)("div",{className:"output-container",children:(0,a.jsxs)("div",{className:"output",children:[(0,a.jsx)("div",{className:"output-header",children:(0,a.jsx)(v.Z,{variant:"h6",style:{fontSize:"20px",fontWeight:"bold",color:"#32c259",marginBottom:"10px"},children:"Output"})}),(0,a.jsxs)("div",{className:"output-body",children:[(0,a.jsx)("div",{className:"output-body-output",ref:I}),(0,a.jsx)("div",{className:"output-body-error",ref:Z})]})]})})]})]})}},76204:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(29815),o=t(85893),i=t(93579),s=t(66856),a=t(29525),c=t(66083),u=t(7212),d=t(282),l=t(67294),_=t(69449);function p(e){var n=(0,l.useState)([]),t=n[0],p=(n[1],(0,l.useState)(!1)),f=p[0],h=p[1],x=(0,l.useState)(null),m=x[0],g=x[1],y=(0,l.useState)([]),v=y[0],E=y[1],b=function(){return h(!1)};(0,l.useEffect)((function(){if(localStorage.getItem("filenames"))localStorage.getItem("filenames");else localStorage.setItem("filenames",JSON.stringify([]))}),[]);var j=function(e){var n=new FileReader;n.readAsText(e);n.onload=function(){var o={filename:e.name,content:n.result};console.log(o);(0,r.Z)(t).concat([o]);E((0,r.Z)(v).concat([o])),localStorage.setItem("filenames",(0,r.Z)(v.map((function(e){return e.filename}))).concat([o.filename]).join(","))}};d.Z,i.Z,c.Z,a.Z,u.Z,s.Z,d.Z,d.Z;return(0,o.jsx)("div",{className:"file-list",children:e.snippets.map((function(e,n){return(0,o.jsx)("div",{children:(0,o.jsx)(_.Z,{title:"variable file"+(n+1),children:(0,o.jsx)("div",{className:"file-item",style:{color:"white"},children:e.slug})})},n)}))})}},87387:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var r=t(29815),o=t(85893),i=t(67294),s=t(30653),a=t(5152),c=t.n(a),u=t(96561),d=(t(41722),t(66582)),l=(t(84204),c()((function(){return Promise.all([t.e(281),t.e(569),t.e(149)]).then(t.bind(t,4149))}),{loadableGenerated:{webpack:function(){return[4149]}},ssr:!1})),_=c()((function(){return Promise.resolve().then(t.bind(t,96561))}),{loadableGenerated:{webpack:function(){return[96561]}},ssr:!1});function p(e){var n=e.defaultCode,a=void 0===n?"\x3c!-- Write your HTML here --\x3e":n,c=e.defaultCSS,p=void 0===c?"/* Write CSS Here */":c,f=e.defaultJS,h=void 0===f?"// Write Javascript Here":f,x=(0,i.useState)([]),m=x[0],g=x[1],y=(0,i.useState)(Math.random()),v=y[0],E=(y[1],(0,i.useState)(Math.random())),b=E[0],j=E[1],C=(0,i.useState)(!1),P=C[0],w=C[1],S=(0,i.useState)(null),R=S[0],M=S[1],O=(0,i.useState)(null),k=O[0],D=O[1],L=(0,i.useState)([]),T=L[0],I=L[1],Z=(0,i.useState)(null),A=Z[0],U=(Z[1],(0,i.useState)(!1)),W=U[0],B=U[1],K=(0,i.useState)('<!DOCTYPE html><html><head></head><body><div id="mountHere"></div></body></html>'),N=K[0],q=(K[1],(0,i.useRef)([])),z=(0,i.useRef)(h),J=(0,i.useRef)(a),H=(0,i.useRef)(p),G=(0,i.useRef)(null),F=function(){return setTimeout((function(){B(!0)}),20),(0,d.Hook)(G.current,(function(e){return I((function(n){return(0,r.Z)(n).concat([e])}))}),!1),function(){return(0,d.Unhook)(G.current)}};(0,i.useEffect)((function(){P&&(F(),ae())}),[P]);var V=(0,i.useRef)(!1),Y=(0,i.useState)(null),$=Y[0],Q=Y[1];if((0,i.useEffect)((function(){return V.current=!0,t.e(199).then(t.bind(t,71199)).then((function(e){V.current&&Q(e.Allotment)})).catch((function(e){return console.error(e,"could not import allotment ".concat(e.message))})),function(){V.current=!1}}),[]),!$)return(0,o.jsx)("div",{children:"loading..."});var X=function(e,n){var t;if("script"==e.type&&(e.children[0]&&e.children[0].data&&e.children[0].data,e.attribs&&e.attribs.src)){var r=new XMLHttpRequest;r.open("GET",e.attribs.src,!0),r.onreadystatechange=function(){4==r.readyState&&200==r.status&&(t=r.responseText,q.current.push(t))},r.send()}},ee={transform:X},ne=function(e){var n=(0,s.ZP)(e,ee);g(n)},te=function(e){J.current=e,ae()},re=function(e){return(0,o.jsx)("div",{children:e.map((function(e,n){if("string"!==typeof e)return e}))},b)},oe=function(e){if(k)try{var n=q.current.join("\n")+"\n"+e;k.eval(n)}catch(t){k.console.error(t)}},ie=function(e){H.current=e,setTimeout((function(){ae()}),1e3)},se=function(e){z.current=e,ae()},ae=function(){k&&R&&(j(Math.random()),ne(J.current),setTimeout((function(){oe(z.current)}),2e3))},ce=(0,o.jsx)("style",{children:H.current}),ue=[ce],de=function(){return(0,o.jsx)("div",{style:{width:"100%",height:"100%"},children:(0,o.jsx)(_,{ref:A,head:ue,initialContent:N,mountTarget:"#mountHere",style:{width:"100%",height:"100%",background:"white"},children:(0,o.jsx)(u.FrameContextConsumer,{children:function(e){var n=e.document,t=e.window;return D(t),M(n),w(!0),G.current=t.console,(0,o.jsx)(o.Fragment,{children:re(m)})}})},v)})},le=function(){return(0,o.jsx)("div",{style:{width:"100%",height:"100%",background:"rgba(0, 0, 0, 0.87)"},children:W&&(0,o.jsx)(d.Console,{logs:T,variant:"dark"})})},_e=function(){return(0,o.jsx)(l,{code:J.current,onChange:te,language:"html",debounce:1e3})},pe=function(){return(0,o.jsx)(l,{code:H.current,onChange:ie,language:"css"})},fe=function(){return(0,o.jsx)(l,{code:z.current,onChange:se,language:"javascript",debounce:1e3})};return(0,o.jsx)("div",{style:{height:"80vh",width:"100%"},children:(0,o.jsxs)($,{minSize:90,children:[(0,o.jsx)($.Pane,{minSize:100,children:(0,o.jsxs)($,{vertical:!0,children:[(0,o.jsx)($.Pane,{minSize:20,children:_e()}),(0,o.jsx)($.Pane,{minSize:10,children:pe()}),(0,o.jsx)($.Pane,{children:fe()})]})}),(0,o.jsx)($.Pane,{children:(0,o.jsx)($,{children:(0,o.jsxs)($,{vertical:!0,children:[(0,o.jsx)($.Pane,{minSize:140,children:de()}),(0,o.jsx)($.Pane,{className:"JS-console",children:le()})]})})})]})})}},94615:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(26042),o=t(85893),i=(t(73935),t(33574)),s=t(69856);t(67294);function a(e){return e.language&&"python"===e.language.toLowerCase()?(0,o.jsx)(i.Z,(0,r.Z)({},e)):e.language&&"javascript"===e.language.toLowerCase()?(0,o.jsx)(s.Z,(0,r.Z)({},e)):(0,o.jsx)(i.Z,(0,r.Z)({},e))}},69856:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return JSEditorComponent}});var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(26042),_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(99534),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),next_dynamic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5152),next_dynamic__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__),allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(41722),allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(allotment_dist_style_css__WEBPACK_IMPORTED_MODULE_3__),_EditorTopbar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(21552),_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(50594),EditorComponent=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.all([__webpack_require__.e(281),__webpack_require__.e(569),__webpack_require__.e(149)]).then(__webpack_require__.bind(__webpack_require__,4149))}),{loadableGenerated:{webpack:function(){return[4149]}},ssr:!1}),Frame=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((function(){return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,96561))}),{loadableGenerated:{webpack:function(){return[96561]}},ssr:!1});function JSEditorComponent(_param){var closeOutput=function(){setIsoutput(!1)},closeError=function(){setIsError(!1)},_defaultCode=_param.defaultCode,defaultCode=void 0===_defaultCode?"// Write Javascript Here":_defaultCode,props=(0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__.Z)(_param,["defaultCode"]),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultCode),code=ref[0],setCode=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),runningCode=ref[0],setRunningCode=ref[1],outputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),consoleRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),error=ref[0],setError=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isoutput=ref[0],setIsoutput=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),isError=ref[0],setIsError=ref[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)((function(e){return e+1}),0),ignored=ref[0],forceUpdate=ref[1],allSnippets=props.allUploads,chosenSnippets="string"===typeof props.snippets?props.snippets.split(","):[],filteredSnippets=[];void 0!=chosenSnippets&&chosenSnippets.forEach((function(e){var n=allSnippets.find((function(n){return n.slug===e.trim()}));void 0!=n&&filteredSnippets.push(n)}));var outputComponent=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"output",style:{marginTop:"-30px",padding:"10px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",height:"200px",overflowY:"scroll",font:"1.3rem Inconsolata, monospace",whiteSpace:"pre-wrap",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{color:"#32c259",backgroundColor:"black"},children:"Returned"}),outputRef.current]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{borderLeft:"1px solid #32c259",paddingLeft:"10px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{style:{color:"#32c259",backgroundColor:"black"},children:"Console Log"}),consoleRef.current]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:closeOutput,style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}})]})},errorComponent=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"error",style:{font:"1.3rem Inconsolata, monospace",margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto",whiteSpace:"pre-wrap"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:closeError,style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),String(error)]})},JSoutput=function(e){var n="[";if("object"==typeof e&&e.length)for(var t=0;t<e.length;t++)if("object"==typeof e[t]&&e[t].length){n+=(0==t?"":" ")+"[";for(var r=0;r<e[t].length;r++)n+=e[t][r]+(r==e[t].length-1?"]"+(t==e.length-1?"]":",")+"\n":", ")}else n+=e[t]+(t==e.length-1?"]":", ");else n=e;return n},writeln=function(e){outputRef.current+=JSoutput(e)+"\n"},JSrun=function JSrun(){var str;setIsError(!1),setIsoutput(!1),setRunningCode(!0),outputRef.current="",consoleRef.current="";try{var logged=[],log=function(e){logged.push(e)};console.oldLog=console.log,console.log=log;for(var result=eval(code),i=0;i<logged.length;i++)consoleRef.current+=JSoutput(logged[i])+"\n";writeln(result),forceUpdate(),setIsoutput(!0)}catch(e){setError(e),setIsError(!0)}void 0!=str&&(outputRef.current+=str),console.log=console.oldLog,setRunningCode(!1)},onChangeJavascript=function(e){setCode(e)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"editorContainer",style:{width:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_EditorTopbar__WEBPACK_IMPORTED_MODULE_4__.Z,{spinnerNeeded:runningCode,snippets:filteredSnippets,run:JSrun,language:"JavaScript",defaultCode:defaultCode,setCode:setCode}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EditorComponent,(0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__.Z)({code:code,onChange:onChangeJavascript,language:"javascript"},props))]}),isoutput&&outputComponent(),isError&&errorComponent()]})}},79950:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(85893),o=t(67294),i=t(4298),s=t.n(i),a=t(19755),c=t.n(a);t(60738),t(94099);function u(){var e=Math.random().toString(36).substring(7);return(0,o.useEffect)((function(){var n=c()("#"+e).terminal((function(e){if(""!==e)try{var n=__EVAL(e);void 0!==n&&this.echo(new String(n))}catch(t){this.error(new String(t))}else this.echo("")}),{tabindex:0,greetings:"",prompt:"> ",enabled:!1,focus:!1});return function(){return n.destroy()}}),[]),(0,r.jsxs)("div",{className:"terminal-container",style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[(0,r.jsx)("div",{className:"term",id:e,style:{width:"50%",height:"100%",border:"2px solid #ef3b3a",fontWeight:"bold",backgroundColor:"#fff",marginTop:"10px",marginBottom:"20px"}}),(0,r.jsx)(s(),{dangerouslySetInnerHTML:{__html:"\n            var __EVAL = (s) => eval(`void (__EVAL = ${__EVAL.toString()}); ${s}`);\n            "}})]})}},33574:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(47568),o=t(99534),i=t(34051),s=t.n(i),a=t(85893),c=t(67294),u=t(4298),d=t.n(u),l=t(5152),_=t.n(l),p=t(50594),f=t(81754),h=t(21552),x=_()((function(){return Promise.all([t.e(281),t.e(569),t.e(149)]).then(t.bind(t,4149))}),{loadableGenerated:{webpack:function(){return[4149]}},ssr:!1});function m(e){var n=e.defaultCode,t=void 0===n?"# Write your code here":n,i=e.minLines,u=e.codeOnChange,l=(0,o.Z)(e,["defaultCode","minLines","codeOnChange"]),_=(0,c.useState)(t),m=_[0],g=_[1],y=(0,c.useState)(!1),v=(y[0],y[1],(0,c.useState)(!1)),E=(v[0],v[1]),b=(0,c.useState)(null),j=(b[0],b[1],(0,c.useState)(!1)),C=j[0],P=j[1],w=(0,c.useState)(!1),S=w[0],R=w[1],M=(0,c.useState)(null),O=M[0],k=M[1],D=(0,c.useRef)(null),L=(0,c.useState)(!1),T=L[0],I=L[1],Z=(0,c.useReducer)((function(e){return e+1}),0),A=(Z[0],Z[1]),U=(0,c.useContext)(f.G),W=U.hasLoadPyodideBeenCalled,B=U.isPyodideLoading,K=U.setIsPyodideLoading,N=U.isPyodideReady,q=U.setIsPyodideReady;(0,c.useEffect)((function(){N&&K(!1)}),[W,K,N]);var z=l.allUploads,J="string"===typeof l.snippets?l.snippets.split(","):[],H=[];void 0!=J&&J.forEach((function(e){var n=z.find((function(n){return n.slug===e.trim()}));void 0!=n&&H.push(n)}));var G=function(){var e=(0,r.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),P(!1),R(!1),k(null),D.current="",pyodide.globals.clear(),pyodide.globals.set("print",(function(e){D.current=D.current+String(e)+"\n"})),pyodide.globals.set("input",(function(e){return prompt(e)})),e.next=10,pyodide.loadPackagesFromImports(n);case 10:return H.forEach((function(e,n){pyodide.runPython("\nfile".concat(n+1," = ").concat(JSON.stringify(e.content),"\n            "))})),e.next=13,pyodide.runPythonAsync(n).then((function(e){P(!0),D.current=D.current+"\n"+e,A()})).catch((function(e){R(!0),k(e)})).finally((function(){I(!1)}));case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,a.jsxs)("div",{children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,a.jsx)(d(),{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){if(!N){function e(){return n.apply(this,arguments)}function n(){return(n=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e().then((function(){q(!0),E(!0)}))}}})]}),(0,a.jsxs)("div",{className:"editorContainer",children:[(0,a.jsx)(h.Z,{spinnerNeeded:B||T,snippets:H,run:function(){G(m)},defaultCode:t,setCode:g,language:"Python"}),(0,a.jsx)(x,{code:m,onChange:function(e){u?u(e):g(e)},maxLines:"Infinity",minLines:i})]}),C&&(0,a.jsxs)("div",{id:"output",style:{margin:"10px",padding:"10px",border:"1px solid #32c259",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"#32c259",fontSize:"20px",overflow:"auto",font:"1.3rem Inconsolata, monospace",whiteSpace:"pre-wrap"},children:[(0,a.jsx)(p.Z,{onClick:function(){P(!1)},style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),D.current]}),S&&(0,a.jsxs)("div",{id:"error",style:{font:"1.3rem Inconsolata, monospace",margin:"10px",padding:"10px",border:"1px solid red",borderRadius:"5px",backgroundColor:"#f5f5f5",color:"red",fontSize:"20px",overflow:"auto",whiteSpace:"pre-wrap"},children:[(0,a.jsx)(p.Z,{onClick:function(){R(!1)},style:{float:"right",fontSize:"20px",color:"#32c259",marginRight:"10px",cursor:"pointer"}}),String(O)]})]})}},5726:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(47568),o=t(828),i=t(34051),s=t.n(i),a=t(85893),c=t(67294),u=t(4298),d=t.n(u),l=t(81754),_=t(98456),p=t(19755);function f(){var e=function(e){return new Promise((function(n){return setTimeout(n,e)}))},n=(0,c.useContext)(l.G),t=n.hasLoadPyodideBeenCalled,i=n.isPyodideLoading,u=n.setIsPyodideLoading,f=n.isPyodideReady,h=n.setIsPyodideReady,x=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),m="#"+x;function g(){return g=(0,r.Z)(s().mark((function n(){var t,i,a,c,u,d,l,_,f,h,x,g,y;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:f=function(){return h.apply(this,arguments)},h=function(){return h=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.ready,y.ready=new Promise((function(e){return n=e})),e.next=5,t;case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)},x=function(e){return g.apply(this,arguments)},g=function(){return g=(0,r.Z)(s().mark((function n(t){var r,a,d,p,h,x,m,g,v,E,b,j;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f();case 2:r=n.sent,y.pause(),a=!0,d=!1,p=void 0,n.prev=5,h=t.split("\n")[Symbol.iterator]();case 7:if(a=(x=h.next()).done){n.next=45;break}m=x.value,g=u.push(m),y.set_prompt("incomplete"===g.syntax_check?_:l),n.t0=g.syntax_check,n.next="syntax-error"===n.t0?14:"incomplete"===n.t0?16:"complete"===n.t0?17:18;break;case 14:return y.error(g.formatted_error.trimEnd()),n.abrupt("continue",42);case 16:return n.abrupt("continue",42);case 17:return n.abrupt("break",19);case 18:throw new Error("Unexpected type ".concat(ty));case 19:return v=c(g),n.prev=20,n.t1=o.Z,n.next=24,v;case 24:n.t2=n.sent,E=(0,n.t1)(n.t2,1),void 0!==(b=E[0])&&y.echo(i.callKwargs(b,{separator:"\n[[;orange;]<long output truncated>]\n"})),pyodide.isPyProxy(b)&&b.destroy(),n.next=38;break;case 31:if(n.prev=31,n.t3=n.catch(20),"PythonError"!==n.t3.constructor.name){n.next=37;break}j=g.formatted_error||n.t3.message,y.error(j.trimEnd()),n.next=38;break;case 37:throw n.t3;case 38:return n.prev=38,g.destroy(),v.destroy(),n.finish(38);case 42:a=!0,n.next=7;break;case 45:n.next=51;break;case 47:n.prev=47,n.t4=n.catch(5),d=!0,p=n.t4;case 51:n.prev=51,n.prev=52,a||null==h.return||h.return();case 54:if(n.prev=54,!d){n.next=57;break}throw p;case 57:return n.finish(54);case 58:return n.finish(51);case 59:return y.resume(),n.next=62,e(10);case 62:r();case 63:case"end":return n.stop()}}),n,null,[[5,47,51,59],[20,31,38,42],[52,,54,58]])}))),g.apply(this,arguments)},t=pyodide.globals.get("dict")(),pyodide.runPython("\n                import sys\n                from pyodide import to_js\n                from pyodide.console import PyodideConsole, repr_shorten, BANNER\n                import __main__\n               \n                pyconsole = PyodideConsole(__main__.__dict__)\n                import builtins\n                async def await_fut(fut):\n                  res = await fut\n                  if res is not None:\n                    builtins._ = res\n                  return to_js([res], depth=1)\n                def clear_console():\n                  pyconsole.buffer = []\n            ",t),i=t.get("repr_shorten"),a=t.get("BANNER"),c=t.get("await_fut"),u=t.get("pyconsole"),d=t.get("clear_console"),t.destroy(),l=">>> ",_="... ",y=p(m).terminal(x,{greetings:a,prompt:l,enabled:!1,completionEscape:!1,completion:function(e,n){n(u.complete(e).toJs()[0])},keymap:{"CTRL+C":function(){var e=(0,r.Z)(s().mark((function e(n,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d(),y.echo_command(),y.echo("KeyboardInterrupt"),y.set_command(""),y.set_prompt(l);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}}),u.stdout_callback=function(e){return y.echo(e,{newline:!1})},u.stderr_callback=function(e){y.error(e.trimEnd())},y.ready=Promise.resolve(),pyodide._module.on_fatal=function(){var n=(0,r.Z)(s().mark((function n(t){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return y.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers."),y.error("The cause of the fatal error was:"),y.error(t),y.error("Look in the browser console for more details."),n.next=6,y.ready;case 6:return y.pause(),n.next=9,e(15);case 9:y.pause();case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();case 22:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}return(0,c.useEffect)((function(){window.jQuery=p,f&&(u(!1),function(){g.apply(this,arguments)}())}),[t,u,f]),(0,a.jsxs)("div",{className:"PythonREPL",children:[(0,a.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/jquery.terminal@2.27.1/css/jquery.terminal.css",rel:"stylesheet"}),(0,a.jsx)(d(),{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js"}),(0,a.jsx)(d(),{src:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.asm.js",onLoad:function(){if(!f){function e(){return n.apply(this,arguments)}function n(){return(n=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});case 2:globalThis.pyodide=e.sent;case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e().then((function(){console.log("Pyodide version: "+pyodide.version),h(!0)}))}}}),(0,a.jsx)("div",{className:"terminal",id:x,children:i&&(0,a.jsx)(_.Z,{})})]})}t(29288)},9557:function(){}}]);