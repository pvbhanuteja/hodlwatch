_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{0:function(e,t,n){n("3Ckp"),e.exports=n("bBV7")},"0pOA":function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("oYCi"),o=n("m6w3"),a=n("etRO"),c=n("4jfz"),i=n("mHfP"),u=n("1U+3"),s=n("DY1Z"),f=n("mXGw"),p=n.n(f),l=n("o42t"),d=n.n(l),h=n("/m4v"),b=n("gTDC"),y=n.n(b),m=n("T5cu"),v=n.n(m),O=n("cnbf");function j(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var g=j();g.withExtraArgument=j;var w=g,x=n("PTAR"),_=n("uCW7"),S=n("7R8V"),P=n("zp/s"),M=n("qkCi"),C=n("ZQwM"),k=n("8WVE"),E=Object(O.c)({core:x.e,portfolio:_.a,exchanges:P.a,apiKeys:S.d,priceData:M.d,modals:C.b}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||O.d,D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(k.e)()||e,n=Object(O.e)(E,t,R(Object(O.a)(w)));return n.subscribe(v()((function(){var e=n.getState(),t=e.portfolio,r=e.core,o=e.apiKeys,a=e.priceData;Object(k.f)({portfolio:t,core:y()(r,["init","quoteSymbol"]),priceData:y()(a,["timeframe"]),apiKeys:o})}),500)),n};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var H=function(e){return function(t){Object(i.a)(o,t);var n=I(o);function o(e){var t,r;return Object(a.a)(this,o),(t=n.call(this,e)).reduxStore=(r=e.initialReduxState,window.__REDUX_STORE__||(window.__REDUX_STORE__=D(r)),window.__REDUX_STORE__),t}return Object(c.a)(o,[{key:"render",value:function(){return Object(r.jsx)(e,T(T({},this.props),{},{reduxStore:this.reduxStore}))}}]),o}(p.a.Component)},G=n("pWCa"),X=n.n(G);n("lbcf"),n("IBMJ");function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var U=function(e){Object(i.a)(n,e);var t=N(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,o=e.reduxStore;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(X.a,{children:[Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"}),Object(r.jsx)("title",{children:"hodl.watch"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"HandheldFriendly",content:"true"}),Object(r.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),Object(r.jsx)("meta",{name:"apple-mobile-web-app-title",content:"hodl.watch"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"static/apple-touch-icon.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"static/favicon-32x32.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"static/favicon-16x16.png"}),Object(r.jsx)("link",{rel:"mask-icon",href:"static/safari-pinned-tab.svg",color:"#000000"}),Object(r.jsx)("meta",{name:"theme-color",content:"#f6f6f6"}),Object(r.jsx)("meta",{name:"description",content:"Simple, yet powerful web app for automatic crypto portfolio tracking"}),Object(r.jsx)("link",{rel:"manifest",href:"static/manifest.json"})]}),Object(r.jsx)(h.a,{store:o,children:Object(r.jsx)(t,B({},n))})]})}}]),n}(d.a);t.default=H(U)},"2LUv":function(e,t,n){var r=n("m1Oa"),o=n("o/EK"),a=n("ShTl"),c=n("sJOi");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},"3Ckp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"5YB7":function(e,t,n){var r=n("PbJ5");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"6jsY":function(e,t,n){"use strict";var r=n("/dBk"),o=n("fwM5"),a=n("bkNG"),c=n("5YB7"),i=n("Y8Bl"),u=n("7osH"),s=n("ZClQ");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}var p=n("mYab");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var l=p(n("mXGw")),d=n("z4BS");function h(e){return b.apply(this,arguments)}function b(){return(b=s(r.mark((function e(t){var n,o,a;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var y=function(e){c(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return a(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,a=e.__N_SSP;return l.default.createElement(n,Object.assign({},r,o||a?{}:{url:m(t)}))}}]),n}(l.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=y,y.origGetInitialProps=h,y.getInitialProps=h},"7osH":function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},"9fEB":function(e,t,n){"use strict";n("OQL8");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("mXGw")),a=(r=n("GlZI"))&&r.__esModule?r:{default:r},c=n("9rrO"),i=n("bxxT"),u=n("vI6Y");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var f=l[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?a=!1:n.add(f);else{var p=o.props[f],d=r[f]||new Set;"name"===f&&c||!d.has(p)?(d.add(p),r[f]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},"9rrO":function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},GlZI:function(e,t,n){"use strict";var r=n("2LUv"),o=n("fwM5"),a=n("bkNG"),c=(n("0pOA"),n("5YB7")),i=n("Y8Bl"),u=n("7osH");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("mXGw"),p=function(e){c(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},IBMJ:function(e,t,n){},OQL8:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},Y8Bl:function(e,t,n){var r=n("pSYS"),o=n("0pOA");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},bxxT:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("mXGw"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},lbcf:function(e,t,n){},m1Oa:function(e,t,n){var r=n("z3mR");e.exports=function(e){if(Array.isArray(e))return r(e)}},"o/EK":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},o42t:function(e,t,n){e.exports=n("6jsY")},pWCa:function(e,t,n){e.exports=n("9fEB")},sJOi:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("mXGw"))&&r.__esModule?r:{default:r},a=n("9rrO");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}}},[[0,1,2,0,3,6]]]);