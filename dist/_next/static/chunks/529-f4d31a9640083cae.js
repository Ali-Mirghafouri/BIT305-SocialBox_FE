(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529],{6101:function(e,t,o){var n,r,a;a={canUseDOM:r=!!("undefined"!=typeof window&&window.document&&window.document.createElement),canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!!(window.addEventListener||window.attachEvent),canUseViewport:r&&!!window.screen},void 0!==(n=(function(){return a}).call(t,o,t,e))&&(e.exports=n)},3018:function(e,t,o){"use strict";var n=o(1289);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,o,r,a,l){if(l!==n){var s=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={array:shim,bigint:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return e.PropTypes=e,e}},4275:function(e,t,o){e.exports=o(3018)()},1289:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3605:function(e,t,o){"use strict";function componentWillMount(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function componentWillReceiveProps(e){function updater(t){var o=this.constructor.getDerivedStateFromProps(e,t);return null!=o?o:null}this.setState(updater.bind(this))}function componentWillUpdate(e,t){try{var o=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(o,n)}finally{this.props=o,this.state=n}}function polyfill(e){var t=e.prototype;if(!t||!t.isReactComponent)throw Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var o=null,n=null,r=null;if("function"==typeof t.componentWillMount?o="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(o="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?n="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(n="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==o||null!==n||null!==r)throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+(e.displayName||e.name)+" uses "+("function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()")+" but also contains the following legacy lifecycles:"+(null!==o?"\n  "+o:"")+(null!==n?"\n  "+n:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=componentWillMount,t.componentWillReceiveProps=componentWillReceiveProps),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=componentWillUpdate;var a=t.componentDidUpdate;t.componentDidUpdate=function(e,t,o){var n=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:o;a.call(this,e,t,n)}}return e}o.r(t),o.d(t,{polyfill:function(){return polyfill}}),componentWillMount.__suppressDeprecationWarning=!0,componentWillReceiveProps.__suppressDeprecationWarning=!0,componentWillUpdate.__suppressDeprecationWarning=!0},3158:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bodyOpenClassName=t.portalClassName=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),a=o(2265),l=_interopRequireDefault(a),s=_interopRequireDefault(o(4887)),i=_interopRequireDefault(o(4275)),u=_interopRequireDefault(o(2645)),c=_interopRequireWildcard(o(106)),f=o(9496),d=_interopRequireDefault(f),p=o(3605);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=t.portalClassName="ReactModalPortal",m=t.bodyOpenClassName="ReactModal__Body--open",v=f.canUseDOM&&void 0!==s.default.createPortal,createHTMLElement=function(e){return document.createElement(e)},getCreatePortal=function(){return v?s.default.createPortal:s.default.unstable_renderSubtreeIntoContainer},y=function(e){function Modal(){_classCallCheck(this,Modal);for(var e,t,o,r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=o=_possibleConstructorReturn(this,(e=Modal.__proto__||Object.getPrototypeOf(Modal)).call.apply(e,[this].concat(a))),o.removePortal=function(){v||s.default.unmountComponentAtNode(o.node);var e=(0,o.props.parentSelector)();e&&e.contains(o.node)?e.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(e){o.portal=e},o.renderPortal=function(e){var t=getCreatePortal()(o,l.default.createElement(u.default,n({defaultStyles:Modal.defaultStyles},e)),o.node);o.portalRef(t)},_possibleConstructorReturn(o,t)}return _inherits(Modal,e),r(Modal,[{key:"componentDidMount",value:function(){f.canUseDOM&&(v||(this.node=createHTMLElement("div")),this.node.className=this.props.portalClassName,(0,this.props.parentSelector)().appendChild(this.node),v||this.renderPortal(this.props))}},{key:"getSnapshotBeforeUpdate",value:function(e){return{prevParent:(0,e.parentSelector)(),nextParent:(0,this.props.parentSelector)()}}},{key:"componentDidUpdate",value:function(e,t,o){if(f.canUseDOM){var n=this.props,r=n.isOpen,a=n.portalClassName;e.portalClassName!==a&&(this.node.className=a);var l=o.prevParent,s=o.nextParent;s!==l&&(l.removeChild(this.node),s.appendChild(this.node)),(e.isOpen||r)&&(v||this.renderPortal(this.props))}}},{key:"componentWillUnmount",value:function(){if(f.canUseDOM&&this.node&&this.portal){var e=this.portal.state,t=Date.now(),o=e.isOpen&&this.props.closeTimeoutMS&&(e.closesAt||t+this.props.closeTimeoutMS);o?(e.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,o-t)):this.removePortal()}}},{key:"render",value:function(){return f.canUseDOM&&v?(!this.node&&v&&(this.node=createHTMLElement("div")),getCreatePortal()(l.default.createElement(u.default,n({ref:this.portalRef,defaultStyles:Modal.defaultStyles},this.props)),this.node)):null}}],[{key:"setAppElement",value:function(e){c.setElement(e)}}]),Modal}(a.Component);y.propTypes={isOpen:i.default.bool.isRequired,style:i.default.shape({content:i.default.object,overlay:i.default.object}),portalClassName:i.default.string,bodyOpenClassName:i.default.string,htmlOpenClassName:i.default.string,className:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),overlayClassName:i.default.oneOfType([i.default.string,i.default.shape({base:i.default.string.isRequired,afterOpen:i.default.string.isRequired,beforeClose:i.default.string.isRequired})]),appElement:i.default.oneOfType([i.default.instanceOf(d.default),i.default.instanceOf(f.SafeHTMLCollection),i.default.instanceOf(f.SafeNodeList),i.default.arrayOf(i.default.instanceOf(d.default))]),onAfterOpen:i.default.func,onRequestClose:i.default.func,closeTimeoutMS:i.default.number,ariaHideApp:i.default.bool,shouldFocusAfterRender:i.default.bool,shouldCloseOnOverlayClick:i.default.bool,shouldReturnFocusAfterClose:i.default.bool,preventScroll:i.default.bool,parentSelector:i.default.func,aria:i.default.object,data:i.default.object,role:i.default.string,contentLabel:i.default.string,shouldCloseOnEsc:i.default.bool,overlayRef:i.default.func,contentRef:i.default.func,id:i.default.string,overlayElement:i.default.func,contentElement:i.default.func},y.defaultProps={isOpen:!1,portalClassName:h,bodyOpenClassName:m,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,t){return l.default.createElement("div",e,t)},contentElement:function(e,t){return l.default.createElement("div",e,t)}},y.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}},(0,p.polyfill)(y),t.default=y},2645:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function defineProperties(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&defineProperties(e.prototype,t),o&&defineProperties(e,o),e}}(),l=o(2265),s=_interopRequireDefault(o(4275)),i=_interopRequireWildcard(o(4724)),u=_interopRequireDefault(o(7715)),c=_interopRequireWildcard(o(106)),f=_interopRequireWildcard(o(8088)),d=o(9496),p=_interopRequireDefault(d),h=_interopRequireDefault(o(7033));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&("object"==typeof t||"function"==typeof t)?t:e}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}o(716);var m={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},v=0,y=function(e){function ModalPortal(e){_classCallCheck(this,ModalPortal);var t=_possibleConstructorReturn(this,(ModalPortal.__proto__||Object.getPrototypeOf(ModalPortal)).call(this,e));return t.setOverlayRef=function(e){t.overlay=e,t.props.overlayRef&&t.props.overlayRef(e)},t.setContentRef=function(e){t.content=e,t.props.contentRef&&t.props.contentRef(e)},t.afterClose=function(){var e=t.props,o=e.appElement,n=e.ariaHideApp,r=e.htmlOpenClassName,a=e.bodyOpenClassName,l=e.parentSelector,s=l&&l().ownerDocument||document;a&&f.remove(s.body,a),r&&f.remove(s.getElementsByTagName("html")[0],r),n&&v>0&&0==(v-=1)&&c.show(o),t.props.shouldFocusAfterRender&&(t.props.shouldReturnFocusAfterClose?(i.returnFocus(t.props.preventScroll),i.teardownScopedFocus()):i.popWithoutFocus()),t.props.onAfterClose&&t.props.onAfterClose(),h.default.deregister(t)},t.open=function(){t.beforeOpen(),t.state.afterOpen&&t.state.beforeClose?(clearTimeout(t.closeTimer),t.setState({beforeClose:!1})):(t.props.shouldFocusAfterRender&&(i.setupScopedFocus(t.node),i.markForFocusLater()),t.setState({isOpen:!0},function(){t.openAnimationFrame=requestAnimationFrame(function(){t.setState({afterOpen:!0}),t.props.isOpen&&t.props.onAfterOpen&&t.props.onAfterOpen({overlayEl:t.overlay,contentEl:t.content})})}))},t.close=function(){t.props.closeTimeoutMS>0?t.closeWithTimeout():t.closeWithoutTimeout()},t.focusContent=function(){return t.content&&!t.contentHasFocus()&&t.content.focus({preventScroll:!0})},t.closeWithTimeout=function(){var e=Date.now()+t.props.closeTimeoutMS;t.setState({beforeClose:!0,closesAt:e},function(){t.closeTimer=setTimeout(t.closeWithoutTimeout,t.state.closesAt-Date.now())})},t.closeWithoutTimeout=function(){t.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},t.afterClose)},t.handleKeyDown=function(e){("Tab"===e.code||9===e.keyCode)&&(0,u.default)(t.content,e),t.props.shouldCloseOnEsc&&("Escape"===e.code||27===e.keyCode)&&(e.stopPropagation(),t.requestClose(e))},t.handleOverlayOnClick=function(e){null===t.shouldClose&&(t.shouldClose=!0),t.shouldClose&&t.props.shouldCloseOnOverlayClick&&(t.ownerHandlesClose()?t.requestClose(e):t.focusContent()),t.shouldClose=null},t.handleContentOnMouseUp=function(){t.shouldClose=!1},t.handleOverlayOnMouseDown=function(e){t.props.shouldCloseOnOverlayClick||e.target!=t.overlay||e.preventDefault()},t.handleContentOnClick=function(){t.shouldClose=!1},t.handleContentOnMouseDown=function(){t.shouldClose=!1},t.requestClose=function(e){return t.ownerHandlesClose()&&t.props.onRequestClose(e)},t.ownerHandlesClose=function(){return t.props.onRequestClose},t.shouldBeClosed=function(){return!t.state.isOpen&&!t.state.beforeClose},t.contentHasFocus=function(){return document.activeElement===t.content||t.content.contains(document.activeElement)},t.buildClassName=function(e,o){var n=(void 0===o?"undefined":r(o))==="object"?o:{base:m[e],afterOpen:m[e]+"--after-open",beforeClose:m[e]+"--before-close"},a=n.base;return t.state.afterOpen&&(a=a+" "+n.afterOpen),t.state.beforeClose&&(a=a+" "+n.beforeClose),"string"==typeof o&&o?a+" "+o:a},t.attributesFromObject=function(e,t){return Object.keys(t).reduce(function(o,n){return o[e+"-"+n]=t[n],o},{})},t.state={afterOpen:!1,beforeClose:!1},t.shouldClose=null,t.moveFromContentToOverlay=null,t}return _inherits(ModalPortal,e),a(ModalPortal,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(e,t){this.props.isOpen&&!e.isOpen?this.open():!this.props.isOpen&&e.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!t.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var e=this.props,t=e.appElement,o=e.ariaHideApp,n=e.htmlOpenClassName,r=e.bodyOpenClassName,a=e.parentSelector,l=a&&a().ownerDocument||document;r&&f.add(l.body,r),n&&f.add(l.getElementsByTagName("html")[0],n),o&&(v+=1,c.hide(t)),h.default.register(this)}},{key:"render",value:function(){var e=this.props,t=e.id,o=e.className,r=e.overlayClassName,a=e.defaultStyles,l=e.children,s=o?{}:a.content,i=r?{}:a.overlay;if(this.shouldBeClosed())return null;var u={ref:this.setOverlayRef,className:this.buildClassName("overlay",r),style:n({},i,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},c=n({id:t,ref:this.setContentRef,style:n({},s,this.props.style.content),className:this.buildClassName("content",o),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),f=this.props.contentElement(c,l);return this.props.overlayElement(u,f)}}]),ModalPortal}(l.Component);y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},y.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(p.default),s.default.instanceOf(d.SafeHTMLCollection),s.default.instanceOf(d.SafeNodeList),s.default.arrayOf(s.default.instanceOf(p.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=y,e.exports=t.default},106:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log,t.assertNodeList=assertNodeList,t.setElement=setElement,t.validateElement=validateElement,t.hide=hide,t.show=show,t.documentNotReadyOrSSRTesting=documentNotReadyOrSSRTesting;var n=_interopRequireDefault(o(267)),r=o(9496);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var a=null;function resetState(){a&&(a.removeAttribute?a.removeAttribute("aria-hidden"):null!=a.length?a.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(a).forEach(function(e){return e.removeAttribute("aria-hidden")})),a=null}function log(){}function assertNodeList(e,t){if(!e||!e.length)throw Error("react-modal: No elements were found for selector "+t+".")}function setElement(e){var t=e;if("string"==typeof t&&r.canUseDOM){var o=document.querySelectorAll(t);assertNodeList(o,t),t=o}return a=t||a}function validateElement(e){var t=e||a;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,n.default)(!1,"react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`."),[])}function hide(e){var t=!0,o=!1,n=void 0;try{for(var r,a=validateElement(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.setAttribute("aria-hidden","true")}catch(e){o=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(o)throw n}}}function show(e){var t=!0,o=!1,n=void 0;try{for(var r,a=validateElement(e)[Symbol.iterator]();!(t=(r=a.next()).done);t=!0)r.value.removeAttribute("aria-hidden")}catch(e){o=!0,n=e}finally{try{!t&&a.return&&a.return()}finally{if(o)throw n}}}function documentNotReadyOrSSRTesting(){a=null}},716:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log;var n=_interopRequireDefault(o(7033));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var r=void 0,a=void 0,l=[];function resetState(){for(var e=[r,a],t=0;t<e.length;t++){var o=e[t];o&&o.parentNode&&o.parentNode.removeChild(o)}r=a=null,l=[]}function log(){console.log("bodyTrap ----------"),console.log(l.length);for(var e=[r,a],t=0;t<e.length;t++){var o=e[t]||{};console.log(o.nodeName,o.className,o.id)}console.log("edn bodyTrap ----------")}function focusContent(){0!==l.length&&l[l.length-1].focusContent()}function bodyTrap(e,t){r||a||((r=document.createElement("div")).setAttribute("data-react-modal-body-trap",""),r.style.position="absolute",r.style.opacity="0",r.setAttribute("tabindex","0"),r.addEventListener("focus",focusContent),(a=r.cloneNode()).addEventListener("focus",focusContent)),(l=t).length>0?(document.body.firstChild!==r&&document.body.insertBefore(r,document.body.firstChild),document.body.lastChild!==a&&document.body.appendChild(a)):(r.parentElement&&r.parentElement.removeChild(r),a.parentElement&&a.parentElement.removeChild(a))}n.default.subscribe(bodyTrap)},8088:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log;var o={},n={};function removeClass(e,t){e.classList.remove(t)}function resetState(){var e=document.getElementsByTagName("html")[0];for(var t in o)removeClass(e,o[t]);var r=document.body;for(var a in n)removeClass(r,n[a]);o={},n={}}function log(){}var trackClass=function(e,t,o){o.forEach(function(o){t[o]||(t[o]=0),t[o]+=1,e.add(o)})},untrackClass=function(e,t,o){o.forEach(function(o){t[o]&&(t[o]-=1),0===t[o]&&e.remove(o)})};t.add=function(e,t){return trackClass(e.classList,"html"==e.nodeName.toLowerCase()?o:n,t.split(" "))},t.remove=function(e,t){return untrackClass(e.classList,"html"==e.nodeName.toLowerCase()?o:n,t.split(" "))}},4724:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetState=resetState,t.log=log,t.handleBlur=handleBlur,t.handleFocus=handleFocus,t.markForFocusLater=markForFocusLater,t.returnFocus=returnFocus,t.popWithoutFocus=popWithoutFocus,t.setupScopedFocus=setupScopedFocus,t.teardownScopedFocus=teardownScopedFocus;var n=_interopRequireDefault(o(8102));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var r=[],a=null,l=!1;function resetState(){r=[]}function log(){}function handleBlur(){l=!0}function handleFocus(){l&&(l=!1,a&&setTimeout(function(){a.contains(document.activeElement)||((0,n.default)(a)[0]||a).focus()},0))}function markForFocusLater(){r.push(document.activeElement)}function returnFocus(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null;try{0!==r.length&&(t=r.pop()).focus({preventScroll:e});return}catch(e){console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function popWithoutFocus(){r.length>0&&r.pop()}function setupScopedFocus(e){a=e,window.addEventListener?(window.addEventListener("blur",handleBlur,!1),document.addEventListener("focus",handleFocus,!0)):(window.attachEvent("onBlur",handleBlur),document.attachEvent("onFocus",handleFocus))}function teardownScopedFocus(){a=null,window.addEventListener?(window.removeEventListener("blur",handleBlur),document.removeEventListener("focus",handleFocus)):(window.detachEvent("onBlur",handleBlur),document.detachEvent("onFocus",handleFocus))}},7033:function(e,t){"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.log=log,t.resetState=resetState;var PortalOpenInstances=function PortalOpenInstances(){var e=this;_classCallCheck(this,PortalOpenInstances),this.register=function(t){-1===e.openInstances.indexOf(t)&&(e.openInstances.push(t),e.emit("register"))},this.deregister=function(t){var o=e.openInstances.indexOf(t);-1!==o&&(e.openInstances.splice(o,1),e.emit("deregister"))},this.subscribe=function(t){e.subscribers.push(t)},this.emit=function(t){e.subscribers.forEach(function(o){return o(t,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},o=new PortalOpenInstances;function log(){console.log("portalOpenInstances ----------"),console.log(o.openInstances.length),o.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function resetState(){o=new PortalOpenInstances}t.default=o},9496:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.SafeNodeList=t.SafeHTMLCollection=void 0;var n,r=((n=o(6101))&&n.__esModule?n:{default:n}).default,a=r.canUseDOM?window.HTMLElement:{};t.SafeHTMLCollection=r.canUseDOM?window.HTMLCollection:{},t.SafeNodeList=r.canUseDOM?window.NodeList:{},t.canUseDOM=r.canUseDOM,t.default=a},7715:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=scopeTab;var n=_interopRequireDefault(o(8102));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function getActiveElement(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;return e.activeElement.shadowRoot?getActiveElement(e.activeElement.shadowRoot):e.activeElement}function scopeTab(e,t){var o=(0,n.default)(e);if(!o.length){t.preventDefault();return}var r=void 0,a=t.shiftKey,l=o[0],s=o[o.length-1],i=getActiveElement();if(e===i){if(!a)return;r=s}if(s!==i||a||(r=l),l===i&&a&&(r=s),r){t.preventDefault(),r.focus();return}var u=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);if(null!=u&&"Chrome"!=u[1]&&null==/\biPod\b|\biPad\b/g.exec(navigator.userAgent)){var c=o.indexOf(i);if(c>-1&&(c+=a?-1:1),void 0===(r=o[c])){t.preventDefault(),(r=a?s:l).focus();return}t.preventDefault(),r.focus()}}e.exports=t.default},8102:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=findTabbableDescendants;var o=/input|select|textarea|button|object|iframe/;function isNotOverflowing(e,t){return"visible"!==t.getPropertyValue("overflow")||e.scrollWidth<=0&&e.scrollHeight<=0}function hidesContents(e){var t=e.offsetWidth<=0&&e.offsetHeight<=0;if(t&&!e.innerHTML)return!0;try{var o=window.getComputedStyle(e),n=o.getPropertyValue("display");return t?"contents"!==n&&isNotOverflowing(e,o):"none"===n}catch(e){return console.warn("Failed to inspect element style"),!1}}function visible(e){for(var t=e,o=e.getRootNode&&e.getRootNode();t&&t!==document.body;){if(o&&t===o&&(t=o.host.parentNode),hidesContents(t))return!1;t=t.parentNode}return!0}function focusable(e,t){var n=e.nodeName.toLowerCase();return(o.test(n)&&!e.disabled||"a"===n&&e.href||t)&&visible(e)}function tabbable(e){var t=e.getAttribute("tabindex");null===t&&(t=void 0);var o=isNaN(t);return(o||t>=0)&&focusable(e,!o)}function findTabbableDescendants(e){return[].slice.call(e.querySelectorAll("*"),0).reduce(function(e,t){return e.concat(t.shadowRoot?findTabbableDescendants(t.shadowRoot):[t])},[]).filter(tabbable)}e.exports=t.default},8529:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=_interopRequireDefault(o(3158));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=n.default,e.exports=t.default},267:function(e){"use strict";e.exports=function(){}}}]);