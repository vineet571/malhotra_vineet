this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["price-filter"]=function(e){function t(t){for(var r,i,a=t[0],u=t[1],l=t[2],b=0,p=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={25:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=u;return o.push([829,0]),n()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},121:function(e,t){},14:function(e,t){!function(){e.exports=this.wp.blockEditor}()},153:function(e,t,n){"use strict";var r=n(21),c=n.n(r),o=n(24),i=n.n(o),a=n(22),u=n.n(a),l=n(23),s=n.n(l),b=n(12),p=n.n(b),f=n(0),d=n(6),m=n(1),g=n(4);function O(e){var t=e.level,n={1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(t)?Object(f.createElement)(g.SVG,{width:"20",height:"20",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},Object(f.createElement)(g.Path,{d:n[t]})):null}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p()(e);if(t){var c=p()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return s()(this,n)}}var j=function(e){u()(n,e);var t=h(n);function n(){return c()(this,n),t.apply(this,arguments)}return i()(n,[{key:"createLevelControl",value:function(e,t,n){var r=e===t;return{icon:Object(f.createElement)(O,{level:e}),title:Object(m.sprintf)(Object(m.__)("Heading %d"),e),isActive:r,onClick:function(){return n(e)}}}},{key:"render",value:function(){var e=this,t=this.props,n=t.isCollapsed,r=void 0===n||n,c=t.minLevel,o=t.maxLevel,i=t.selectedLevel,a=t.onChange;return Object(f.createElement)(g.Toolbar,{isCollapsed:r,icon:Object(f.createElement)(O,{level:i}),controls:Object(d.range)(c,o).map((function(t){return e.createLevelControl(t,i,a)}))})}}]),n}(f.Component);t.a=j},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(11),c=n.n(r),o=n(0),i=function(){var e=Object(o.useState)(),t=c()(e,2)[1];return function(e){return t((function(){throw e}))}}},166:function(e,t,n){"use strict";var r=n(0),c=n(58),o=Object(r.createElement)(c.a,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(r.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(r.createElement)("g",{mask:"url(#external-mask)"},Object(r.createElement)("path",{d:"M0 0h24v24H0z"})));t.a=o},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f}));var r=n(11),c=n.n(r),o=n(40),i=n(36),a=n(0),u=n(99),l=n(6),s=n(60),b=function(e){var t=Object(u.a)();e=e||t;var n=Object(i.useSelect)((function(t){return t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),r=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[n,Object(a.useCallback)((function(t){r(e,t)}),[e])]},p=function(e,t,n){var r=Object(u.a)();n=n||r;var c=Object(i.useSelect)((function(r){return r(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)}),[n,e]),l=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(a.useCallback)((function(t){l(n,e,t)}),[n,e])]},f=function(e,t){var n=Object(u.a)(),r=b(t=t||n),o=c()(r,2),i=o[0],p=o[1],f=Object(s.a)(e),d=Object(a.useRef)(!1);return Object(a.useEffect)((function(){p(Object(l.assign)({},i,f)),d.current=!0}),[f]),d.current?[i,p]:[e,p]}},17:function(e,t){!function(){e.exports=this.wp.blocks}()},182:function(e,t,n){"use strict";var r=n(0),c=(n(2),n(14)),o=n(8),i=n.n(o);n(252);t.a=function(e){var t=e.className,n=e.headingLevel,o=e.onChange,a=e.heading,u="h".concat(n);return Object(r.createElement)(u,null,Object(r.createElement)(c.PlainText,{className:i()("wc-block-editor-components-title",t),value:a,onChange:o}))}},189:function(e,t){},201:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(40),c=n(36),o=n(0),i=n(156),a=n(60),u=function(e){var t=e.namespace,n=e.resourceName,u=e.resourceValues,l=void 0===u?[]:u,s=e.query,b=void 0===s?{}:s,p=e.shouldSelect,f=void 0===p||p;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");var d=Object(o.useRef)({results:[],isLoading:!0}),m=Object(a.a)(b),g=Object(a.a)(l),O=Object(i.a)(),h=Object(c.useSelect)((function(e){if(!f)return null;var c=e(r.COLLECTIONS_STORE_KEY),o=[t,n,m,g],i=c.getCollectionError.apply(c,o);return i&&O(i),{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,n,g,m,f]);return null!==h&&(d.current=h),d.current}},25:function(e,t){!function(){e.exports=this.wp.compose}()},250:function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return m}));var r=n(7),c=n.n(r),o=n(54),i=n.n(o),a=n(3);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s,b,p={code:a.CURRENCY.code,symbol:a.CURRENCY.symbol,thousandSeparator:a.CURRENCY.thousandSeparator,decimalSeparator:a.CURRENCY.decimalSeparator,minorUnit:a.CURRENCY.precision,prefix:(s=a.CURRENCY.symbol,b=a.CURRENCY.symbolPosition,{left:s,left_space:" "+s,right:"",right_space:""}[b]||""),suffix:function(e,t){return{left:"",left_space:"",right:e,right_space:" "+e}[t]||""}(a.CURRENCY.symbol,a.CURRENCY.symbolPosition)},f=function(e){if(!e||"object"!==i()(e))return p;var t=e.currency_code,n=e.currency_symbol,r=e.currency_thousand_separator,c=e.currency_decimal_separator,o=e.currency_minor_unit,a=e.currency_prefix,u=e.currency_suffix;return{code:t||"USD",symbol:n||"$",thousandSeparator:"string"==typeof r?r:",",decimalSeparator:"string"==typeof c?c:".",minorUnit:Number.isFinite(o)?o:2,prefix:"string"==typeof a?a:"$",suffix:"string"==typeof u?u:""}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return l(l({},p),e)},m=function(e,t){if(""===e||void 0===e)return"";var n=parseInt(e,10);if(!Number.isFinite(n))return"";var r=d(t),c=n/Math.pow(10,r.minorUnit),o=r.prefix+c+r.suffix,i=document.createElement("textarea");return i.innerHTML=o,i.value}},252:function(e,t){},261:function(e,t,n){"use strict";var r=n(0),c=n(1),o=(n(2),n(8)),i=n.n(o),a=n(46),u=(n(346),function(e){var t=e.className,n=e.disabled,o=e.label,u=void 0===o?Object(c.__)("Go","woo-gutenberg-products-block"):o,l=e.onClick,s=e.screenReaderLabel,b=void 0===s?Object(c.__)("Apply filter","woo-gutenberg-products-block"):s;return Object(r.createElement)("button",{type:"submit",className:i()("wc-block-filter-submit-button","wc-block-components-filter-submit-button",t),disabled:n,onClick:l},Object(r.createElement)(a.a,{label:u,screenReaderLabel:b}))});u.defaultProps={disabled:!1},t.a=u},3:function(e,t){!function(){e.exports=this.wc.wcSettings}()},346:function(e,t){},36:function(e,t){!function(){e.exports=this.wp.data}()},4:function(e,t){!function(){e.exports=this.wp.components}()},40:function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},46:function(e,t,n){"use strict";var r=n(7),c=n.n(r),o=n(0),i=(n(2),n(9)),a=n(8),u=n.n(a);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t,n=e.label,r=e.screenReaderLabel,c=e.wrapperElement,a=e.wrapperProps,l=null!=n,b=null!=r;return!l&&b?(t=c||"span",a=s(s({},a),{},{className:u()(a.className,"screen-reader-text")}),Object(o.createElement)(t,a,r)):(t=c||i.Fragment,l&&b&&n!==r?Object(o.createElement)(t,a,Object(o.createElement)("span",{"aria-hidden":"true"},n),Object(o.createElement)("span",{className:"screen-reader-text"},r)):Object(o.createElement)(t,a,n))};b.defaultProps={wrapperProps:{}},t.a=b},47:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},5:function(e,t,n){"use strict";n.d(t,"k",(function(){return c})),n.d(t,"G",(function(){return o})),n.d(t,"M",(function(){return i})),n.d(t,"x",(function(){return a})),n.d(t,"z",(function(){return u})),n.d(t,"l",(function(){return l})),n.d(t,"y",(function(){return s})),n.d(t,"B",(function(){return b})),n.d(t,"n",(function(){return p})),n.d(t,"A",(function(){return f})),n.d(t,"m",(function(){return d})),n.d(t,"C",(function(){return m})),n.d(t,"t",(function(){return g})),n.d(t,"w",(function(){return O})),n.d(t,"q",(function(){return h})),n.d(t,"r",(function(){return j})),n.d(t,"s",(function(){return v})),n.d(t,"j",(function(){return w})),n.d(t,"I",(function(){return y})),n.d(t,"N",(function(){return _})),n.d(t,"p",(function(){return k})),n.d(t,"o",(function(){return E})),n.d(t,"F",(function(){return S})),n.d(t,"c",(function(){return x})),n.d(t,"u",(function(){return C})),n.d(t,"v",(function(){return P})),n.d(t,"Q",(function(){return F})),n.d(t,"R",(function(){return R})),n.d(t,"H",(function(){return T})),n.d(t,"a",(function(){return D})),n.d(t,"K",(function(){return L})),n.d(t,"b",(function(){return M})),n.d(t,"J",(function(){return U})),n.d(t,"h",(function(){return V})),n.d(t,"L",(function(){return I})),n.d(t,"g",(function(){return z})),n.d(t,"i",(function(){return A})),n.d(t,"E",(function(){return Y})),n.d(t,"D",(function(){return q})),n.d(t,"P",(function(){return Q})),n.d(t,"O",(function(){return W})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return G})),n.d(t,"f",(function(){return J})),n.d(t,"U",(function(){return X})),n.d(t,"V",(function(){return Z})),n.d(t,"S",(function(){return ee})),n.d(t,"T",(function(){return te}));var r=n(3),c=Object(r.getSetting)("currentUserIsAdmin",!1),o=Object(r.getSetting)("reviewRatingsEnabled",!0),i=Object(r.getSetting)("showAvatars",!0),a=Object(r.getSetting)("max_columns",6),u=Object(r.getSetting)("min_columns",1),l=Object(r.getSetting)("default_columns",3),s=Object(r.getSetting)("max_rows",6),b=Object(r.getSetting)("min_rows",1),p=Object(r.getSetting)("default_rows",3),f=Object(r.getSetting)("min_height",500),d=Object(r.getSetting)("default_height",500),m=Object(r.getSetting)("placeholderImgSrc",""),g=(Object(r.getSetting)("thumbnail_size",300),Object(r.getSetting)("isLargeCatalog")),O=Object(r.getSetting)("limitTags"),h=Object(r.getSetting)("hasProducts",!0),j=Object(r.getSetting)("hasTags",!0),v=Object(r.getSetting)("homeUrl",""),w=Object(r.getSetting)("couponsEnabled",!0),y=Object(r.getSetting)("shippingEnabled",!0),_=Object(r.getSetting)("taxesEnabled",!0),k=Object(r.getSetting)("displayItemizedTaxes",!1),E=(Object(r.getSetting)("displayShopPricesIncludingTax",!1),Object(r.getSetting)("displayCartPricesIncludingTax",!1)),S=Object(r.getSetting)("productCount",0),x=Object(r.getSetting)("attributes",[]),C=Object(r.getSetting)("isShippingCalculatorEnabled",!0),P=Object(r.getSetting)("isShippingCostHidden",!1),N=Object(r.getSetting)("woocommerceBlocksPhase",1),F=Object(r.getSetting)("wcBlocksAssetUrl",""),R=Object(r.getSetting)("wcBlocksBuildUrl",""),T=Object(r.getSetting)("shippingCountries",{}),D=Object(r.getSetting)("allowedCountries",{}),L=Object(r.getSetting)("shippingStates",{}),M=Object(r.getSetting)("allowedStates",{}),U=Object(r.getSetting)("shippingMethodsExist",!1),V=Object(r.getSetting)("checkoutShowLoginReminder",!0),B={id:0,title:"",permalink:""},H=Object(r.getSetting)("storePages",{shop:B,cart:B,checkout:B,privacy:B,terms:B}),I=H.shop.permalink,z=H.checkout.id,A=H.checkout.permalink,Y=H.privacy.permalink,q=H.privacy.title,Q=H.terms.permalink,W=H.terms.title,K=H.cart.id,G=H.cart.permalink,J=Object(r.getSetting)("checkoutAllowsGuest",!1),$=(Object(r.getSetting)("checkoutAllowsSignup",!1),n(17)),X=function(e,t){if(N>2)return Object($.registerBlockType)(e,t)},Z=function(e,t){if(N>1)return Object($.registerBlockType)(e,t)},ee=function(){return N>2},te=function(){return N>1}},508:function(e,t,n){"use strict";var r=n(0),c=n(58),o=Object(r.createElement)(c.a,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(r.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(r.createElement)("path",{d:"M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"}));t.a=o},517:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),c=function(e,t){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,n.current]),n.current}},57:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(7),i=n.n(o),a=n(27),u=n.n(a),l=n(0),s=n(180),b=n(8),p=n.n(b);n(189);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.className,n=e.value,r=e.currency,o=e.onValueChange,i=u()(e,["className","value","currency","onValueChange"]);if("-"===n)return null;var a=n/Math.pow(10,r.minorUnit);if(!Number.isFinite(a))return null;var b=p()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f=d(d(d({displayType:"text"},i),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(r)),{},{value:void 0,currency:void 0,onValueChange:void 0}),m=o?function(e){var t=e.value*Math.pow(10,r.minorUnit);o(t)}:function(){};return Object(l.createElement)(s.a,c()({className:b},f,{value:a,onValueChange:m}))}},59:function(e,t,n){"use strict";var r=n(7),c=n.n(r),o=n(27),i=n.n(o),a=n(9);n(2);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.a=function(e){var t=e.srcElement,n=e.size,r=void 0===n?24:n,o=i()(e,["srcElement","size"]);return Object(a.isValidElement)(t)&&Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:r,height:r},o))}},6:function(e,t){!function(){e.exports=this.lodash}()},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),c=n(47),o=n.n(c),i=function(e){var t=Object(r.useRef)();return o()(e,t.current)||(t.current=e),t.current}},72:function(e,t,n){"use strict";var r=n(10),c=n.n(r),o=n(21),i=n.n(o),a=n(24),u=n.n(a),l=n(19),s=n.n(l),b=n(22),p=n.n(b),f=n(23),d=n.n(f),m=n(12),g=n.n(m),O=n(0),h=n(6),j=n(8),v=n.n(j),w=n(4),y=n(25);n(121);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g()(e);if(t){var c=g()(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return d()(this,n)}}var k=function(e){p()(n,e);var t=_(n);function n(){var e;return i()(this,n),(e=t.apply(this,arguments)).onClick=e.onClick.bind(s()(e)),e}return u()(n,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,n=this.props,r=n.label,o=n.checked,i=n.instanceId,a=n.className,u=n.help,l=n.options,s=n.value,b="inspector-toggle-button-control-".concat(i);return u&&(e=Object(h.isFunction)(u)?u(o):u),Object(O.createElement)(w.BaseControl,{id:b,help:e,className:v()("components-toggle-button-control",a)},Object(O.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},r),Object(O.createElement)(w.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,n){var o={};return s===e.value?(o.isPrimary=!0,o["aria-pressed"]=!0):(o.isDefault=!0,o["aria-pressed"]=!1),Object(O.createElement)(w.Button,c()({key:"".concat(e.label,"-").concat(e.value,"-").concat(n),value:e.value,onClick:t.onClick,"aria-label":r+": "+e.label},o),e.label)}))))}}]),n}(O.Component);t.a=Object(y.withInstanceId)(k)},829:function(e,t,n){e.exports=n(891)},830:function(e,t){},831:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(7),c=n.n(r),o=n(61),i=n.n(o),a=n(54),u=n.n(a),l=n(11),s=n.n(l),b=n(0),p=n(169),f=n(201),d=n(99),m=n(525),g=n(6),O=n(60);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(e){var t=e.queryAttribute,n=e.queryPrices,r=e.queryState,c=Object(d.a)();c="".concat(c,"-collection-data");var o=Object(p.a)(c),a=s()(o,1)[0],l=Object(p.b)("calculate_attribute_counts",[],c),h=s()(l,2),v=h[0],w=h[1],y=Object(p.b)("calculate_price_range",null,c),_=s()(y,2),k=_[0],E=_[1],S=Object(O.a)(t||{}),x=Object(O.a)(n);Object(b.useEffect)((function(){"object"===u()(S)&&Object.keys(S).length&&(v.find((function(e){return e.taxonomy===S.taxonomy}))||w([].concat(i()(v),[S])))}),[S,v,w]),Object(b.useEffect)((function(){k!==x&&void 0!==x&&E(x)}),[x,E,k]);var C=Object(b.useState)(!1),P=s()(C,2),N=P[0],F=P[1],R=Object(m.a)(N,200),T=s()(R,1)[0];N||F(!0);var D=Object(b.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(g.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(a)}),[a]);return Object(f.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:j(j({},r),{},{page:void 0,per_page:void 0,orderby:void 0,order:void 0},D),shouldSelect:T})}},832:function(e,t){},891:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n.n(r),o=n(0),i=n(1),a=n(17),u=n(8),l=n.n(u),s=n(59),b=n(508),p=n(14),f=n(4),d=n(5),m=n(3),g=n(153),O=n(182),h=n(166),j=n(11),v=n.n(j),w=n(169),y=n(831),_=(n(2),n(57)),k=(n(832),function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=parseInt(e[0],10),i=parseInt(e[1],10);return Number.isFinite(o)||(o=t||0),Number.isFinite(i)||(i=n||r),Number.isFinite(t)&&t>o&&(o=t),Number.isFinite(n)&&n<=o&&(o=n-r),Number.isFinite(t)&&t>=i&&(i=t+r),Number.isFinite(n)&&n<i&&(i=n),!c&&o>=i&&(o=i-r),c&&i<=o&&(i=o+r),[o,i]}),E=n(261),S=function(e){var t=e.minPrice,n=e.maxPrice,r=e.minConstraint,c=e.maxConstraint,a=e.onChange,u=void 0===a?function(){}:a,s=e.step,b=e.currency,p=e.showInputFields,f=void 0===p||p,d=e.showFilterButton,m=void 0!==d&&d,g=e.isLoading,O=void 0!==g&&g,h=e.onSubmit,j=void 0===h?function(){}:h,w=Object(o.useRef)(),y=Object(o.useRef)(),S=s||10*Math.pow(10,b.minorUnit),x=Object(o.useState)(t),C=v()(x,2),P=C[0],N=C[1],F=Object(o.useState)(n),R=v()(F,2),T=R[0],D=R[1];Object(o.useEffect)((function(){N(t)}),[t]),Object(o.useEffect)((function(){D(n)}),[n]);var L=Object(o.useMemo)((function(){return isFinite(r)&&isFinite(c)}),[r,c]),M=Object(o.useMemo)((function(){return isFinite(t)&&isFinite(n)&&L?{"--low":Math.round((t-r)/(c-r)*100)-.5+"%","--high":Math.round((n-r)/(c-r)*100)+.5+"%"}:{"--low":"0%","--high":"100%"}}),[t,n,r,c,L,S]),U=Object(o.useCallback)((function(e){if(!O&&L){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,r=w.current.offsetWidth,o=w.current.value,i=y.current.offsetWidth,a=y.current.value,u=r*(o/c),l=i*(a/c);Math.abs(n-u)>Math.abs(n-l)?(w.current.style.zIndex=20,y.current.style.zIndex=21):(w.current.style.zIndex=21,y.current.style.zIndex=20)}}),[O,c,L]),V=Object(o.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=e.target.value,a=o?[Math.round(i/S)*S,n]:[t,Math.round(i/S)*S],l=k(a,r,c,S,o);u([parseInt(l[0],10),parseInt(l[1],10)])}),[t,n,r,c,S]),B=Object(o.useCallback)((function(e){if(!(e.relatedTarget&&e.relatedTarget.classList&&e.relatedTarget.classList.contains("wc-block-price-filter__amount"))){var t=e.target.classList.contains("wc-block-price-filter__amount--min"),n=k([P,T],null,null,S,t);u([parseInt(n[0],10),parseInt(n[1],10)])}}),[r,c,S,P,T,b]),H=l()("wc-block-price-filter","wc-block-components-price-slider",f&&"wc-block-price-filter--has-input-fields",f&&"wc-block-components-price-slider--has-input-fields",m&&"wc-block-price-filter--has-filter-button",m&&"wc-block-components-price-slider--has-filter-button",O&&"is-loading",!L&&"is-disabled"),I=w&&document.activeElement===w.current?S:1,z=y&&document.activeElement===y.current?S:1;return Object(o.createElement)("div",{className:H},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-wrapper wc-block-components-price-slider__range-input-wrapper",onMouseMove:U,onFocus:U},L&&Object(o.createElement)("div",{"aria-hidden":f},Object(o.createElement)("div",{className:"wc-block-price-filter__range-input-progress wc-block-components-price-slider__range-input-progress",style:M}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),value:Number.isFinite(t)?t:r,onChange:V,step:I,min:r,max:c,ref:w,disabled:O,tabIndex:f?"-1":"0"}),Object(o.createElement)("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max wc-block-components-price-slider__range-input wc-block-components-price-slider__range-input--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),value:Number.isFinite(n)?n:c,onChange:V,step:z,min:r,max:c,ref:y,disabled:O,tabIndex:f?"-1":"0"}))),Object(o.createElement)("div",{className:"wc-block-price-filter__controls wc-block-components-price-slider__controls"},f&&Object(o.createElement)(o.Fragment,null,Object(o.createElement)(_.a,{currency:b,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--min","aria-label":Object(i.__)("Filter products by minimum price","woo-gutenberg-products-block"),onValueChange:function(e){e!==P&&N(e)},onBlur:B,disabled:O||!L,value:P}),Object(o.createElement)(_.a,{currency:b,displayType:"input",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input wc-block-components-price-slider__amount wc-block-components-price-slider__amount--max","aria-label":Object(i.__)("Filter products by maximum price","woo-gutenberg-products-block"),onValueChange:function(e){e!==T&&D(e)},onBlur:B,disabled:O||!L,value:T})),!f&&!O&&Number.isFinite(t)&&Number.isFinite(n)&&Object(o.createElement)("div",{className:"wc-block-price-filter__range-text wc-block-components-price-slider__range-text"},Object(i.__)("Price","woo-gutenberg-products-block"),":  ",Object(o.createElement)(_.a,{currency:b,displayType:"text",value:t})," – ",Object(o.createElement)(_.a,{currency:b,displayType:"text",value:n})),m&&Object(o.createElement)(E.a,{className:"wc-block-price-filter__button wc-block-components-price-slider__button",disabled:O||!L,onClick:j,screenReaderLabel:Object(i.__)("Apply price filter","woo-gutenberg-products-block")})))},x=n(523),C=n(250),P=n(517),N=function(e,t,n){var r,c=10*Math.pow(10,t);"ROUND_UP"===n?r=isNaN(e)?null:Math.ceil(parseFloat(e,10)/c)*c:"ROUND_DOWN"===n&&(r=isNaN(e)?null:Math.floor(parseFloat(e,10)/c)*c);var o=Object(P.a)(r,(function(e){return Number.isFinite(e)}));return Number.isFinite(r)?r:o},F=function(e){var t=e.attributes,n=e.isEditor,r=void 0!==n&&n,c=Object(w.b)("min_price"),i=v()(c,2),a=i[0],u=i[1],l=Object(w.b)("max_price"),s=v()(l,2),b=s[0],p=s[1],f=Object(w.a)(),d=v()(f,1)[0],m=Object(y.a)({queryPrices:!0,queryState:d}),g=m.results,O=m.isLoading,h=Object(o.useState)(),j=v()(h,2),_=j[0],k=j[1],E=Object(o.useState)(),P=v()(E,2),F=P[0],R=P[1],T=Object(C.c)(g.price_range),D=function(e){var t=e.minPrice,n=e.maxPrice,r=e.minorUnit;return{minConstraint:N(t,r,"ROUND_DOWN"),maxConstraint:N(n,r,"ROUND_UP")}}({minPrice:g.price_range?g.price_range.min_price:void 0,maxPrice:g.price_range?g.price_range.max_price:void 0,minorUnit:T.minorUnit}),L=D.minConstraint,M=D.maxConstraint,U=Object(x.a)((function(){B()}),500),V=v()(U,1)[0],B=Object(o.useCallback)((function(){u(_===L?void 0:_),p(F===M?void 0:F)}),[_,F,L,M]),H=Object(o.useCallback)((function(e){e[0]!==_&&k(e[0]),e[1]!==F&&R(e[1])}),[L,M,_,F]);if(Object(o.useEffect)((function(){t.showFilterButton||V()}),[_,F,t.showFilterButton]),Object(o.useEffect)((function(){a!==_&&k(Number.isFinite(a)?a:L),b!==F&&R(Number.isFinite(b)?b:M)}),[a,b,L,M]),!O&&(null===L||null===M||L===M))return null;var I="h".concat(t.headingLevel);return Object(o.createElement)(o.Fragment,null,!r&&t.heading&&Object(o.createElement)(I,null,t.heading),Object(o.createElement)("div",{className:"wc-block-price-slider"},Object(o.createElement)(S,{minConstraint:L,maxConstraint:M,minPrice:_,maxPrice:F,currency:T,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:H,onSubmit:B,isLoading:O})))},R=(n(830),n(72));Object(a.registerBlockType)("woocommerce/price-filter",{title:Object(i.__)("Filter Products by Price","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(s.a,{srcElement:b.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Allow customers to filter the products by choosing a lower or upper price limit. Works in combination with the All Products block.","woo-gutenberg-products-block"),supports:{html:!1,multiple:!1},example:{},attributes:{showInputFields:{type:"boolean",default:!0},showFilterButton:{type:"boolean",default:!1},heading:{type:"string",default:Object(i.__)("Filter by price","woo-gutenberg-products-block")},headingLevel:{type:"number",default:3}},edit:function(e){var t=e.attributes,n=e.setAttributes,r=t.className,c=t.heading,a=t.headingLevel,u=t.showInputFields,l=t.showFilterButton;return Object(o.createElement)(o.Fragment,null,0===d.F?Object(o.createElement)(f.Placeholder,{className:"wc-block-price-slider",icon:Object(o.createElement)(s.a,{srcElement:b.a}),label:Object(i.__)("Filter Products by Price","woo-gutenberg-products-block"),instructions:Object(i.__)("Display a slider to filter products in your store by price.","woo-gutenberg-products-block")},Object(o.createElement)("p",null,Object(i.__)("Products with prices are needed for filtering by price. You haven't created any products yet.","woo-gutenberg-products-block")),Object(o.createElement)(f.Button,{className:"wc-block-price-slider__add-product-button",isDefault:!0,isLarge:!0,href:Object(m.getAdminLink)("post-new.php?post_type=product")},Object(i.__)("Add new product","woo-gutenberg-products-block")+" ",Object(o.createElement)(s.a,{srcElement:h.a})),Object(o.createElement)(f.Button,{className:"wc-block-price-slider__read_more_button",isTertiary:!0,href:"https://docs.woocommerce.com/document/managing-products/"},Object(i.__)("Learn more","woo-gutenberg-products-block"))):Object(o.createElement)("div",{className:r},Object(o.createElement)(p.InspectorControls,{key:"inspector"},Object(o.createElement)(f.PanelBody,{title:Object(i.__)("Block Settings","woo-gutenberg-products-block")},Object(o.createElement)(R.a,{label:Object(i.__)("Price Range","woo-gutenberg-products-block"),value:u?"editable":"text",options:[{label:Object(i.__)("Editable","woo-gutenberg-products-block"),value:"editable"},{label:Object(i.__)("Text","woo-gutenberg-products-block"),value:"text"}],onChange:function(e){return n({showInputFields:"editable"===e})}}),Object(o.createElement)(f.ToggleControl,{label:Object(i.__)("Filter button","woo-gutenberg-products-block"),help:l?Object(i.__)("Products will only update when the button is pressed.","woo-gutenberg-products-block"):Object(i.__)("Products will update when the slider is moved.","woo-gutenberg-products-block"),checked:l,onChange:function(){return n({showFilterButton:!l})}}),Object(o.createElement)("p",null,Object(i.__)("Heading Level","woo-gutenberg-products-block")),Object(o.createElement)(g.a,{isCollapsed:!1,minLevel:2,maxLevel:7,selectedLevel:a,onChange:function(e){return n({headingLevel:e})}}))),Object(o.createElement)(O.a,{headingLevel:a,heading:c,onChange:function(e){return n({heading:e})}}),Object(o.createElement)(f.Disabled,null,Object(o.createElement)(F,{attributes:t,isEditor:!0}))))},save:function(e){var t=e.attributes,n=t.className,r={"data-showinputfields":t.showInputFields,"data-showfilterbutton":t.showFilterButton,"data-heading":t.heading,"data-heading-level":t.headingLevel};return Object(o.createElement)("div",c()({className:l()("is-loading",n)},r),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}))}})},9:function(e,t){!function(){e.exports=this.React}()},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),c=Object(r.createContext)("page"),o=function(){return Object(r.useContext)(c)};c.Provider}});