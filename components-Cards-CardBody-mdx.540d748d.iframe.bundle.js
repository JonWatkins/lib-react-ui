/*! For license information please see components-Cards-CardBody-mdx.540d748d.iframe.bundle.js.LICENSE.txt */
(self.webpackChunklib_react_ui=self.webpackChunklib_react_ui||[]).push([[1386,1617],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Cards/CardBody.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_CardBody_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Cards/CardBody.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_CardBody_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"card-body",children:"Card Body"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_CardBody_stories__WEBPACK_IMPORTED_MODULE_2__.Primary})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Cards/CardBody.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Cards/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={component:___WEBPACK_IMPORTED_MODULE_1__.eW,title:"CardBody",argTypes:{}},Primary=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.eW,{children:"Lorem Ipsum"});Primary.displayName="Primary",Primary.args={};const __WEBPACK_DEFAULT_EXPORT__=meta;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => <CardBody>Lorem Ipsum</CardBody>",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Cards/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Zb:()=>Card,eW:()=>CardBody,iR:()=>CardFooter,Ol:()=>CardHeader,ll:()=>CardTitle});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CardTitle=({id,children,className,...props})=>{const classes=["card-title",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardTitle.displayName="CardTitle";const CardHeader=({id,children,className,...props})=>{const classes=["card-header",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardHeader.displayName="CardHeader";const CardBody=({id,children,className,...props})=>{const classes=["card-body",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardBody.displayName="CardBody";const CardFooter=({id,children,className,...props})=>{const classes=["card-footer",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};CardFooter.displayName="CardFooter";const Card=({id,children,className,...props})=>{const classes=["card",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),...props,children})};Card.displayName="Card";try{CardTitle.displayName="CardTitle",CardTitle.__docgenInfo={description:"",displayName:"CardTitle",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/Card.tsx#CardTitle"]={docgenInfo:CardTitle.__docgenInfo,name:"CardTitle",path:"src/components/Cards/Card.tsx#CardTitle"})}catch(__react_docgen_typescript_loader_error){}try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"",displayName:"CardHeader",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/Card.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"src/components/Cards/Card.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"",displayName:"CardBody",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/Card.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"src/components/Cards/Card.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}try{CardFooter.displayName="CardFooter",CardFooter.__docgenInfo={description:"",displayName:"CardFooter",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/Card.tsx#CardFooter"]={docgenInfo:CardFooter.__docgenInfo,name:"CardFooter",path:"src/components/Cards/Card.tsx#CardFooter"})}catch(__react_docgen_typescript_loader_error){}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Cards/Card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Cards/Card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);