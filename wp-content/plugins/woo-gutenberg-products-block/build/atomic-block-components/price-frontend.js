(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[6],{118:function(e,t){},142:function(e,t,r){"use strict";r.d(t,"c",(function(){return f})),r.d(t,"b",(function(){return y})),r.d(t,"a",(function(){return b}));var c=r(6),n=r.n(c),a=r(23),o=r.n(a),i=r(2);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l,p,m={code:i.CURRENCY.code,symbol:i.CURRENCY.symbol,thousandSeparator:i.CURRENCY.thousandSeparator,decimalSeparator:i.CURRENCY.decimalSeparator,minorUnit:i.CURRENCY.precision,prefix:(l=i.CURRENCY.symbol,p=i.CURRENCY.symbolPosition,{left:l,left_space:" "+l,right:"",right_space:""}[p]||""),suffix:function(e,t){return{left:"",left_space:"",right:e,right_space:" "+e}[t]||""}(i.CURRENCY.symbol,i.CURRENCY.symbolPosition)},f=function(e){if(!e||"object"!==o()(e))return m;var t=e.currency_code,r=e.currency_symbol,c=e.currency_thousand_separator,n=e.currency_decimal_separator,a=e.currency_minor_unit,i=e.currency_prefix,u=e.currency_suffix;return{code:t||"USD",symbol:r||"$",thousandSeparator:"string"==typeof c?c:",",decimalSeparator:"string"==typeof n?n:".",minorUnit:Number.isFinite(a)?a:2,prefix:"string"==typeof i?i:"$",suffix:"string"==typeof u?u:""}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s(s({},m),e)},b=function(e,t){if(""===e||void 0===e)return"";var r=parseInt(e,10);if(!Number.isFinite(r))return"";var c=y(t),n=r/Math.pow(10,c.minorUnit),a=c.prefix+n+c.suffix,o=document.createElement("textarea");return o.innerHTML=a,o.value}},276:function(e,t){},289:function(e,t,r){"use strict";r.r(t);var c=r(6),n=r.n(c),a=(r(4),r(5)),o=r.n(a),i=r(39),u=r(142),s=r(66),l=r(179),p=r(8),m=r(178),f=(r(276),function(e){return e.price_range&&e.price_range.min_amount&&e.price_range.max_amount}),y=function(e){var t,r=e.currency,c=e.minAmount,a=e.maxAmount,u=e.classes,l=e.style,m=Object(s.useInnerBlockLayoutContext)().parentClassName;return React.createElement("span",{className:o()("wc-block-components-product-price__value",(t={},n()(t,"".concat(m,"__product-price__value"),m),n()(t,u,Object(p.C)()),t)),style:Object(p.C)()?l:{}},React.createElement(i.a,{currency:r,value:c})," — ",React.createElement(i.a,{currency:r,value:a}))},b=function(e){var t,r,c=e.currency,a=e.price,u=e.regularPrice,l=e.saleClasses,m=void 0===l?"":l,f=e.saleStyle,y=void 0===f?{}:f,b=e.classes,d=void 0===b?"":b,v=e.style,_=void 0===v?{}:v,O=Object(s.useInnerBlockLayoutContext)().parentClassName;return React.createElement(React.Fragment,null,React.createElement("del",{className:o()("wc-block-components-product-price__regular",(t={},n()(t,"".concat(O,"__product-price__regular"),O),n()(t,d,Object(p.C)()),t)),style:Object(p.C)()?_:{}},React.createElement(i.a,{currency:c,value:u})),React.createElement("span",{className:o()("wc-block-components-product-price__value",(r={},n()(r,"".concat(O,"__product-price__value"),O),n()(r,m,Object(p.C)()),r)),style:Object(p.C)()?y:{}},React.createElement(i.a,{currency:c,value:a})))},d=function(e){var t=e.currency,r=e.price,c=e.classes,a=void 0===c?"":c,u=e.style,l=void 0===u?{}:u,m=Object(s.useInnerBlockLayoutContext)().parentClassName;return React.createElement("span",{className:o()("wc-block-components-product-price__value","".concat(m,"__product-price__value"),n()({},a,Object(p.C)())),style:Object(p.C)()?l:{}},React.createElement(i.a,{currency:t,value:r}))};t.default=Object(m.withProductDataContext)((function(e){var t,r,c,a=e.className,i=e.align,m=e.fontSize,v=e.customFontSize,_=e.saleFontSize,O=e.customSaleFontSize,C=e.color,g=e.customColor,j=e.saleColor,R=e.customSaleColor,h=Object(s.useInnerBlockLayoutContext)().parentClassName,w=Object(s.useProductDataContext)().product,E=Object(l.getColorClassName)("color",C),S=Object(l.getFontSizeClass)(m),N=Object(l.getColorClassName)("color",j),x=Object(l.getFontSizeClass)(_),P=o()((t={"has-text-color":C||g,"has-font-size":m||v},n()(t,E,E),n()(t,S,S),t)),k=o()((r={"has-text-color":j||R,"has-font-size":_||O},n()(r,N,N),n()(r,x,x),r)),U={color:g,fontSize:v},D={color:R,fontSize:O};if(!w.id)return React.createElement("div",{className:o()(a,"price","wc-block-components-product-price",n()({},"".concat(h,"__product-price"),h))});var z=w.prices,F=Object(u.c)(z);return React.createElement("div",{className:o()(a,"price","wc-block-components-product-price",(c={},n()(c,"".concat(h,"__product-price"),h),n()(c,"wc-block-components-product-price__align-".concat(i),i&&Object(p.C)()),c))},f(z)?React.createElement(y,{currency:F,minAmount:z.price_range.min_amount,maxAmount:z.price_range.max_amount,classes:P,style:U}):z.price!==z.regular_price?React.createElement(b,{currency:F,price:z.price,regularPrice:z.regular_price,saleClasses:k,saleStyle:D,classes:P,style:U}):React.createElement(d,{currency:F,price:z.price,classes:P,style:U}))}))},39:function(e,t,r){"use strict";var c=r(11),n=r.n(c),a=r(6),o=r.n(a),i=r(15),u=r.n(i),s=r(95),l=r(5),p=r.n(l);r(118);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.className,r=e.value,c=e.currency,a=e.onValueChange,o=u()(e,["className","value","currency","onValueChange"]);if("-"===r)return null;var i=r/Math.pow(10,c.minorUnit);if(!Number.isFinite(i))return null;var l=p()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),m=f(f(f({displayType:"text"},o),function(e){return{thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0}}(c)),{},{value:void 0,currency:void 0,onValueChange:void 0}),y=a?function(e){var t=e.value*Math.pow(10,c.minorUnit);a(t)}:function(){};return React.createElement(s.a,n()({className:l},m,{value:i,onValueChange:y}))}}}]);