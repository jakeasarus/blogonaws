(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("0mN4");var i=a("Q4rM"),r=a("q1tI"),n=a.n(r),s=a("Wbzz"),o=a("9eSz"),d=a.n(o),l=a("p3AD");var u="2796725669";t.a=function(){return n.a.createElement(s.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," an AWS Certified Solutions Architect."," ",n.a.createElement("a",{href:"https://linkedin.com/in/"+i.linkedin},"You should follow him on LinkedIn")))},data:i})}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var i=a("5NKs");t.__esModule=!0,t.default=void 0;var r,n=i(a("v06X")),s=i(a("XEEL")),o=i(a("uDP2")),d=i(a("j8BX")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=A(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function B(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?B(e,!0):"")+B(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(L,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),L=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&E&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,A=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,S=e.loading,B=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,Q=(0,d.default)({opacity:I?1:0,transition:O?"opacity "+b+"ms":"none"},o),C="boolean"==typeof m?"lightgray":m,N={transitionDelay:b+"ms"},k=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},O&&N),o),f),W={title:t,alt:this.state.isVisible?"":a,style:k,className:A,itemProp:v};if(p){var Y=p,z=g(p);return l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:z.maxWidth?z.maxWidth+"px":null,maxHeight:z.maxHeight?z.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),C&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&N)}),z.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:z.base64,spreadProps:W,imageVariants:Y,generateSources:x}),z.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:z.tracedSVG,spreadProps:W,imageVariants:Y,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(Y),l.default.createElement(L,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)((0,d.default)({alt:a,title:t,loading:S},z),{},{imageVariants:Y}))}}))}if(h){var M=h,P=g(h),V=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete V.display,l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},O&&N)}),P.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:W,imageVariants:M,generateSources:x}),P.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:W,imageVariants:M,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(M),l.default.createElement(L,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:Q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:S,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,d.default)((0,d.default)({alt:a,title:t,loading:S},P),{},{imageVariants:M}))}}))}return null},t}(l.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var Q=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});O.propTypes={resolutions:Q,sizes:C,fixed:u.default.oneOfType([Q,u.default.arrayOf(Q)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var N=O;t.default=N},EK0E:function(e,t,a){"use strict";var i,r=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),A=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,p=Object.isExtensible,h=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=g(e);return!0===t?h(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},E=e.exports=a("4LiD")("WeakMap",m,b,l,!0,!0);f&&A&&(d((i=l.getConstructor(m,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!p(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},INYr:function(e,t,a){"use strict";var i=a("XKFU"),r=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var i=a("XKFU"),r=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Q4rM:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAwb/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQT/2gAMAwEAAhADEAAAAe9UdBL55vLIAuXXAbP/xAAbEAACAgMBAAAAAAAAAAAAAAABAgADERMjBP/aAAgBAQABBQKoYDkYubr5W5syiaqxASkrbbfgT//EABkRAAIDAQAAAAAAAAAAAAAAAAABAxARMf/aAAgBAwEBPwFcMIm6/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECEBH/2gAIAQIBAT8BZpKv/8QAHRAAAQQCAwAAAAAAAAAAAAAAAAECEBEScSExUf/aAAgBAQAGPwK/YUXZvo5aW0blH//EABsQAQADAQADAAAAAAAAAAAAAAEAESExUWFx/9oACAEBAAE/IX8pXOIbAaQzIiDsXt449pzhfybMi9iYr3It0n//2gAMAwEAAgADAAAAEJs3v//EABgRAQEBAQEAAAAAAAAAAAAAAAERABAh/9oACAEDAQE/EGIdeoC+U5//xAAYEQEBAAMAAAAAAAAAAAAAAAABABARIf/aAAgBAgEBPxAaUgxOuP/EABwQAAICAwEBAAAAAAAAAAAAAAERACExQVFhgf/aAAgBAQABPxA5C7NqjKH0eQQWmEZSQWspCKpuB2y0OQpm0ZJdvbnF6Mg/ISlBQBQowxQVU//Z","width":50,"height":50,"src":"/static/447838050357a62eca8425a652d28fd6/99438/profile-pic.jpg","srcSet":"/static/447838050357a62eca8425a652d28fd6/99438/profile-pic.jpg 1x,\\n/static/447838050357a62eca8425a652d28fd6/aba1d/profile-pic.jpg 1.5x,\\n/static/447838050357a62eca8425a652d28fd6/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Jacob Jones","social":{"linkedin":"jacob-jones-60737289"}}}}}')},ZD67:function(e,t,a){"use strict";var i=a("3Lyj"),r=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),A=l(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&d(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?p(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?p(e).set(t,a):i[e._i]=a,e},ufstore:p}}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-56483c6d7f83a16a0423.js.map