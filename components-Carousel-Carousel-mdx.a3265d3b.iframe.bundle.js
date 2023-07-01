/*! For license information please see components-Carousel-Carousel-mdx.a3265d3b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunklib_react_ui=self.webpackChunklib_react_ui||[]).push([[2862,3630],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/Carousel/Carousel.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Carousel_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Carousel/Carousel.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Carousel_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"carousel",children:"Carousel"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Carousel_stories__WEBPACK_IMPORTED_MODULE_2__.Primary})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/Carousel/Carousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Carousel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Carousel/Carousel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={component:_Carousel__WEBPACK_IMPORTED_MODULE_1__.l,title:"Carousel",argTypes:{}},Primary=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_Carousel__WEBPACK_IMPORTED_MODULE_1__.l,{id:"test-carousel",...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Carousel__WEBPACK_IMPORTED_MODULE_1__.d,{children:"Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Carousel__WEBPACK_IMPORTED_MODULE_1__.d,{children:"Item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Carousel__WEBPACK_IMPORTED_MODULE_1__.d,{children:"Item 3"})]});Primary.displayName="Primary",Primary.args={};const __WEBPACK_DEFAULT_EXPORT__=meta;Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => <Carousel id="test-carousel" {...args}>\r\n    <CarouselItem>Item 1</CarouselItem>\r\n    <CarouselItem>Item 2</CarouselItem>\r\n    <CarouselItem>Item 3</CarouselItem>\r\n  </Carousel>',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>Badge});__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Badge=({id,color="info",size="md",children,className,...props})=>{const classes=["badge",`badge-${color}`,`badge-${size}`,className];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(classes),...props,children})};Badge.displayName="Badge";try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},color:{defaultValue:{value:"info"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"danger"'},{value:'"warning"'},{value:'"info"'},{value:'"lightest"'},{value:'"light"'},{value:'"dark"'},{value:'"muted"'},{value:'"white"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Badge/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>_Badge__WEBPACK_IMPORTED_MODULE_0__.C});var _Badge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Badge/Badge.tsx")},"./src/components/Carousel/Carousel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>Carousel,d:()=>CarouselItem});var react=__webpack_require__("./node_modules/react/index.js");const LEFT="Left",RIGHT="Right",UP="Up",DOWN="Down",defaultProps={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},initialState={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},mouseMove="mousemove",mouseUp="mouseup",touchEnd="touchend",touchMove="touchmove",touchStart="touchstart";function rotateXYByAngle(pos,angle){if(0===angle)return pos;const angleInRadians=Math.PI/180*angle;return[pos[0]*Math.cos(angleInRadians)+pos[1]*Math.sin(angleInRadians),pos[1]*Math.cos(angleInRadians)-pos[0]*Math.sin(angleInRadians)]}function getHandlers(set,handlerProps){const onStart=event=>{const isTouch="touches"in event;isTouch&&event.touches.length>1||set(((state,props)=>{props.trackMouse&&!isTouch&&(document.addEventListener(mouseMove,onMove),document.addEventListener(mouseUp,onUp));const{clientX,clientY}=isTouch?event.touches[0]:event,xy=rotateXYByAngle([clientX,clientY],props.rotationAngle);return props.onTouchStartOrOnMouseDown&&props.onTouchStartOrOnMouseDown({event}),Object.assign(Object.assign(Object.assign({},state),initialState),{initial:xy.slice(),xy,start:event.timeStamp||0})}))},onMove=event=>{set(((state,props)=>{const isTouch="touches"in event;if(isTouch&&event.touches.length>1)return state;if(event.timeStamp-state.start>props.swipeDuration)return state.swiping?Object.assign(Object.assign({},state),{swiping:!1}):state;const{clientX,clientY}=isTouch?event.touches[0]:event,[x,y]=rotateXYByAngle([clientX,clientY],props.rotationAngle),deltaX=x-state.xy[0],deltaY=y-state.xy[1],absX=Math.abs(deltaX),absY=Math.abs(deltaY),time=(event.timeStamp||0)-state.start,velocity=Math.sqrt(absX*absX+absY*absY)/(time||1),vxvy=[deltaX/(time||1),deltaY/(time||1)],dir=function getDirection(absX,absY,deltaX,deltaY){return absX>absY?deltaX>0?RIGHT:LEFT:deltaY>0?DOWN:UP}(absX,absY,deltaX,deltaY),delta="number"==typeof props.delta?props.delta:props.delta[dir.toLowerCase()]||defaultProps.delta;if(absX<delta&&absY<delta&&!state.swiping)return state;const eventData={absX,absY,deltaX,deltaY,dir,event,first:state.first,initial:state.initial,velocity,vxvy};eventData.first&&props.onSwipeStart&&props.onSwipeStart(eventData),props.onSwiping&&props.onSwiping(eventData);let cancelablePageSwipe=!1;return(props.onSwiping||props.onSwiped||props[`onSwiped${dir}`])&&(cancelablePageSwipe=!0),cancelablePageSwipe&&props.preventScrollOnSwipe&&props.trackTouch&&event.cancelable&&event.preventDefault(),Object.assign(Object.assign({},state),{first:!1,eventData,swiping:!0})}))},onEnd=event=>{set(((state,props)=>{let eventData;if(state.swiping&&state.eventData){if(event.timeStamp-state.start<props.swipeDuration){eventData=Object.assign(Object.assign({},state.eventData),{event}),props.onSwiped&&props.onSwiped(eventData);const onSwipedDir=props[`onSwiped${eventData.dir}`];onSwipedDir&&onSwipedDir(eventData)}}else props.onTap&&props.onTap({event});return props.onTouchEndOrOnMouseUp&&props.onTouchEndOrOnMouseUp({event}),Object.assign(Object.assign(Object.assign({},state),initialState),{eventData})}))},onUp=e=>{document.removeEventListener(mouseMove,onMove),document.removeEventListener(mouseUp,onUp),onEnd(e)},attachTouch=(el,props)=>{let cleanup=()=>{};if(el&&el.addEventListener){const baseOptions=Object.assign(Object.assign({},defaultProps.touchEventOptions),props.touchEventOptions),tls=[[touchStart,onStart,baseOptions],[touchMove,onMove,Object.assign(Object.assign({},baseOptions),props.preventScrollOnSwipe?{passive:!1}:{})],[touchEnd,onEnd,baseOptions]];tls.forEach((([e,h,o])=>el.addEventListener(e,h,o))),cleanup=()=>tls.forEach((([e,h])=>el.removeEventListener(e,h)))}return cleanup},output={ref:el=>{null!==el&&set(((state,props)=>{if(state.el===el)return state;const addState={};return state.el&&state.el!==el&&state.cleanUpTouch&&(state.cleanUpTouch(),addState.cleanUpTouch=void 0),props.trackTouch&&el&&(addState.cleanUpTouch=attachTouch(el,props)),Object.assign(Object.assign(Object.assign({},state),{el}),addState)}))}};return handlerProps.trackMouse&&(output.onMouseDown=onStart),[output,attachTouch]}function useSwipeable(options){const{trackMouse}=options,transientState=react.useRef(Object.assign({},initialState)),transientProps=react.useRef(Object.assign({},defaultProps)),previousProps=react.useRef(Object.assign({},transientProps.current));let defaultKey;for(defaultKey in previousProps.current=Object.assign({},transientProps.current),transientProps.current=Object.assign(Object.assign({},defaultProps),options),defaultProps)void 0===transientProps.current[defaultKey]&&(transientProps.current[defaultKey]=defaultProps[defaultKey]);const[handlers,attachTouch]=react.useMemo((()=>getHandlers((stateSetter=>transientState.current=stateSetter(transientState.current,transientProps.current)),{trackMouse})),[trackMouse]);return transientState.current=function updateTransientState(state,props,previousProps,attachTouch){return props.trackTouch&&state.el?state.cleanUpTouch?props.preventScrollOnSwipe!==previousProps.preventScrollOnSwipe||props.touchEventOptions.passive!==previousProps.touchEventOptions.passive?(state.cleanUpTouch(),Object.assign(Object.assign({},state),{cleanUpTouch:attachTouch(state.el,props)})):state:Object.assign(Object.assign({},state),{cleanUpTouch:attachTouch(state.el,props)}):(state.cleanUpTouch&&state.cleanUpTouch(),Object.assign(Object.assign({},state),{cleanUpTouch:void 0}))}(transientState.current,transientProps.current,previousProps.current,attachTouch),handlers}var Badge=__webpack_require__("./src/components/Badge/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CarouselItem=({id,children,className,width="100%",...props})=>{const classes=["carousel-item",className];return(0,jsx_runtime.jsx)("div",{id,className:classnames_default()(classes),style:{width},...props,children})};CarouselItem.displayName="CarouselItem";const Carousel=({id,children,className,timeout=5e3,...props})=>{const classes=["carousel",className],[activeIndex,setActiveIndex]=(0,react.useState)(0),[paused,setPaused]=(0,react.useState)(!1);(0,react.useEffect)((()=>{const interval=setInterval((()=>{paused||updateIndex(activeIndex+1)}),timeout);return()=>{interval&&clearInterval(interval)}}));const handlers=useSwipeable({onSwipedLeft:()=>updateIndex(activeIndex+1),onSwipedRight:()=>updateIndex(activeIndex-1)}),updateIndex=newIndex=>{newIndex<0?newIndex=react.Children.count(children)-1:newIndex>=react.Children.count(children)&&(newIndex=0),setActiveIndex(newIndex)};return(0,jsx_runtime.jsxs)("div",{id,className:classnames_default()(classes),onMouseEnter:()=>setPaused(!0),onMouseLeave:()=>setPaused(!1),...handlers,...props,children:[(0,jsx_runtime.jsx)("div",{className:"carousel-inner",style:{transform:`translate(-${100*activeIndex}%)`},children:react.Children.map(children,((child,index)=>(0,react.cloneElement)(child,{width:"100%",key:index})))}),(0,jsx_runtime.jsxs)("div",{className:"carousel-indicators mt-2",children:[(0,jsx_runtime.jsx)("a",{className:"pointer",onClick:()=>updateIndex(activeIndex-1),children:"Prev"}),react.Children.map(children,((child,index)=>(0,jsx_runtime.jsx)(Badge.C,{className:classnames_default()("mr-1","ml-1","pointer"),color:activeIndex===index?"primary":"light",onClick:()=>updateIndex(index),size:"sm",children:index+1}))),(0,jsx_runtime.jsx)("a",{className:"pointer",onClick:()=>updateIndex(activeIndex+1),children:"Next"})]})]})};Carousel.displayName="Carousel";try{CarouselItem.displayName="CarouselItem",CarouselItem.__docgenInfo={description:"",displayName:"CarouselItem",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:{value:"100%"},description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/Carousel.tsx#CarouselItem"]={docgenInfo:CarouselItem.__docgenInfo,name:"CarouselItem",path:"src/components/Carousel/Carousel.tsx#CarouselItem"})}catch(__react_docgen_typescript_loader_error){}try{Carousel.displayName="Carousel",Carousel.__docgenInfo={description:"",displayName:"Carousel",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},timeout:{defaultValue:{value:"5000"},description:"",name:"timeout",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:Carousel.__docgenInfo,name:"Carousel",path:"src/components/Carousel/Carousel.tsx#Carousel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);