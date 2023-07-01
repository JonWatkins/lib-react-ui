/*! For license information please see components-Icon-Icon-stories.3a5f79ac.iframe.bundle.js.LICENSE.txt */
(self.webpackChunklib_react_ui=self.webpackChunklib_react_ui||[]).push([[870],{"./src/components/Icon/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvailableIcons:()=>AvailableIcons,SimpleIcon:()=>SimpleIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icon/Icon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={component:_Icon__WEBPACK_IMPORTED_MODULE_1__.J,title:"Icons/Icon",tags:["autodocs"],argTypes:{}},SimpleIcon=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.J,{...args});SimpleIcon.displayName="SimpleIcon",SimpleIcon.args={type:"copy",size:"lg",color:"dark"};const AvailableIcons=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["copy","registered","tm","counter-clockwise","clockwise","left-arrow","down-arrow","up-arrow","right-arrow","close"].map(((type,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__.J,{type,className:"mr-4 mb-4"},index)))});AvailableIcons.args={};const __WEBPACK_DEFAULT_EXPORT__=meta;SimpleIcon.parameters={...SimpleIcon.parameters,docs:{...SimpleIcon.parameters?.docs,source:{originalSource:"args => <Icon {...args} />",...SimpleIcon.parameters?.docs?.source}}},AvailableIcons.parameters={...AvailableIcons.parameters,docs:{...AvailableIcons.parameters?.docs,source:{originalSource:'() => {\n  const types: IconTypes[] = ["copy", "registered", "tm", "counter-clockwise", "clockwise", "left-arrow", "down-arrow", "up-arrow", "right-arrow", "close"];\n  return <>\r\n      {types.map((type, index) => <Icon key={index} type={type} className="mr-4 mb-4" />)}\r\n    </>;\n}',...AvailableIcons.parameters?.docs?.source}}};const __namedExportsOrder=["SimpleIcon","AvailableIcons"]},"./src/components/Icon/Icon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>Icon});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Icon=({id,className,type,size="md",color="dark",...props})=>{const classes=["icon",`icon-${type}`,`icon-${size}`,`text-${color}`,className];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{id,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes),...props})};Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"copy"'},{value:'"registered"'},{value:'"tm"'},{value:'"counter-clockwise"'},{value:'"clockwise"'},{value:'"left-arrow"'},{value:'"down-arrow"'},{value:'"up-arrow"'},{value:'"right-arrow"'},{value:'"close"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},color:{defaultValue:{value:"dark"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"lightest"'},{value:'"light"'},{value:'"dark"'},{value:'"muted"'},{value:'"white"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Icon/Icon.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/components/Icon/Icon.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);