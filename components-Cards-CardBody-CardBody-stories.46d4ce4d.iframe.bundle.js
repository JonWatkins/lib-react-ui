/*! For license information please see components-Cards-CardBody-CardBody-stories.46d4ce4d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunklib_react_ui=self.webpackChunklib_react_ui||[]).push([[312],{"./src/components/Cards/CardBody/CardBody.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Cards/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={component:___WEBPACK_IMPORTED_MODULE_1__.eW,title:"Components/Cards/CardBody",tags:["autodocs"],argTypes:{}},Default=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.eW,{children:"Lorem Ipsum"});Default.displayName="Default",Default.args={};const __WEBPACK_DEFAULT_EXPORT__=meta;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <CardBody>Lorem Ipsum</CardBody>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Cards/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zb:()=>Card,eW:()=>CardBody,iR:()=>CardFooter,Ol:()=>CardHeader,ll:()=>CardTitle});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=({id,children,className,...props})=>{const classes=["card",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};Card.displayName="Card";try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/Card/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Cards/Card/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}const CardHeader=({id,children,className,...props})=>{const classes=["card-header",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardHeader.displayName="CardHeader";try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/CardHeader/CardHeader.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/components/Cards/CardHeader/CardHeader.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}const CardTitle=({id,children,className,...props})=>{const classes=["card-title",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardTitle.displayName="CardTitle";try{CardTitle.displayName="CardTitle",CardTitle.__docgenInfo={description:"",displayName:"CardTitle",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/CardTitle/CardTitle.tsx#CardTitle"]={docgenInfo:CardTitle.__docgenInfo,name:"CardTitle",path:"src/components/Cards/CardTitle/CardTitle.tsx#CardTitle"})}catch(__react_docgen_typescript_loader_error){}const CardBody=({id,children,className,...props})=>{const classes=["card-body",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardBody.displayName="CardBody";try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"",displayName:"CardBody",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/CardBody/CardBody.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"src/components/Cards/CardBody/CardBody.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}const CardFooter=({id,children,className,...props})=>{const classes=["card-footer",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardFooter.displayName="CardFooter";try{CardFooter.displayName="CardFooter",CardFooter.__docgenInfo={description:"",displayName:"CardFooter",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/CardFooter/CardFooter.tsx#CardFooter"]={docgenInfo:CardFooter.__docgenInfo,name:"CardFooter",path:"src/components/Cards/CardFooter/CardFooter.tsx#CardFooter"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);