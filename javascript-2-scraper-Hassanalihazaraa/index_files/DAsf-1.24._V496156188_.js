!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * DACX SafeFrame v1.24 -- 2018-04-25T20:56:09
*/
!function(b,c){function d(){function a(a,b,c,d){T[a]=T[a]||{},T[a][c]=i.safeFunctionWrapper(d,l,"Error within ad handler "+c+": "+b)}function d(a,b){V[a]={slotId:b,placementDivId:"ape_"+b+"_placement",iframeId:"ape_"+b+"_iframe"}}function e(a,b){var c=!0;for(var d in U){var e=U[d].iframe?U[d].iframe.contentWindow:null;if(e&&!U[d].alreadyRendered){c=!1;var f=U[d].slot;j.findPercentInView(f)>=a?U[d].timeout||(U[d].timeout=setTimeout(n(d),b)):U[d].timeout&&(clearTimeout(U[d].timeout),U[d].timeout=null)}}c&&(i.removeWindowListener("scroll",X),i.removeWindowListener("resize",X))}function f(){return e(j.PERCENT_VIEWABLE,j.DURATION_VIEWABLE)}function n(a){return function(){var b={key:"readyToRender",data:a};k.sendMessageToAd(a,"customMessage",b),U[a].timeout=null,U[a].alreadyRendered=!0}}function F(){var a={};try{for(var c=b.location.search.substring(1),d=c.split("&"),e=0;e<d.length;e++){var f=d[e].split("="),g=f[0];f.length>1&&0===g.indexOf("sf-")&&(a[g]=f[1])}}catch(h){l("Error parsing query parameters",h)}return a}function G(a){return function(){w(a.arid,a.size.width,a.size.height,a.maxAdWidth,!0,k,V)}}function H(a){try{var b,d=JSON.stringify(a),e=c.getElementById(V[a.arid].placementDivId);if(/MSIE (6|7|8)/.test(navigator.userAgent))try{b=c.createElement("<iframe name='"+d+"'>")}catch(f){b=t(d)}else b=t(d);b.id=V[a.arid].iframeId,b.src=a.safeFrameSrc,b.scrolling="no",b.height=a.size.height||"250px",b.width=a.size.width||"300px",b.className=a.iframeClass||"",b.setAttribute("frameborder","0"),b.setAttribute("marginheight","0"),b.setAttribute("marginwidth","0"),b.setAttribute("scrolling","no"),b.setAttribute("allowtransparency","true"),b.setAttribute("allowfullscreen",""),b.setAttribute("mozallowfullscreen",""),b.setAttribute("webkitallowfullscreen",""),b.setAttribute(Q,a.arid),b.style.cssText=a.iframeExtraStyle||"",a.iframeSandbox&&(b.sandbox=a.iframeSandbox),b.onload=function(){h.checkCache(a.DAsfUrl,a.safeFrameSrc,a.slot,a.placementId,p)},e.appendChild(b),o("cf",a.slot,a.placementId),p(a.slot,a.placementId,S.IFRAME_CREATED,1),k.adMap[a.arid]={slot:e,iframe:b,options:a},E.adbMap[a.arid]={slot:a.slot,adBlockerIsDisabled:void 0,adImgLoaded:void 0,adImpressionsFired:void 0,adViewabilityFired:void 0,placementId:a.placementId}}catch(g){l("Error creating safeFrame",g)}}function I(a,b){if(!a)return!1;var d=c.getElementById(a);if(d&&!d.innerHTML){var e=d.getAttribute(Q);if(e&&e===b.arid)return!0}return!1}function J(a){var b=function(){p(a.slot,a.placementId,S.CALLBACK,1);var b=V[a.arid].placementDivId;I(b,a)&&D(a,b,H)};return i.safeFunctionWrapper(b,l,"Error in callback to create Safeframe.")}function K(a,d){if(a&&!a.isFeedbackLoaded&&d.adFeedbackInfo.boolFeedback){a.isFeedbackLoaded=!0;var e=a.parentNode,f=d.slotName,h=d.adFeedbackInfo.slugText,i=d.adFeedbackInfo.endPoint,j=d.advertisementStyle,k=d.feedbackDivStyle,l=g.FEEDBACK_COUNTERS,m={adPlacementMetaData:d.adPlacementMetaData,adCreativeMetaData:d.adCreativeMetaData},n=function(a,b){if(a&&b)for(var c in b)a.style[c]=b[c];return a},o=function(a,b,d,e){var f=c.createElement(a);for(var g in b)f.setAttribute(g,b[g]);return n(f,d),e&&e.insertBefore(f,null),f},q=e.getElementsByTagName("div")[0]||o("div",{id:e.id+"_Feedback"},k,e),r=function(){p(f,null,l.FALLBACK,1);var a=q.getElementsByTagName("div")[0]||o("div",0,j,q);a.innerHTML=h},s=function(a){return encodeURIComponent(JSON.stringify(a))},t=function(a,d,e,g,h){try{var i=d+"_"+f.match(/\b(\w)/g).join("");b[i]=e;var j=c.createElement("script");j.async=!0,j.src=a+(a.indexOf("?")>=0?"&":"?")+"callback="+i,j.onerror=g,(c.getElementsByTagName("head")[0]||c.getElementsByTagName("body")[0]).appendChild(j)}catch(k){h(k)}},u=i&&i.length?i+"?pl="+s(m):i,v=function(a){try{var b="object"==typeof a&&a;if(b&&"ok"===b.status){if("html"in b&&b.html&&(q.innerHTML=b.html),"script"in b&&b.script){var c=q.getElementsByTagName("script")[0]||o("script",0,null,q);c.innerHTML=b.script}p(f,null,l.SUCCESS,1)}else r()}catch(d){r()}};p(f,null,l.REQUEST,1),u?t(u,"addFeedbackLink",v,r,r):r()}}if(b.DAsf)return void b.DAsf.loadAds();b.DAsf={version:"1.24"};var L="text/x-dacx-safeframe",M=y(),N=M+"/images/G/01/ape/sf/desktop/sf-1.24._V496156163_.html",O=M+"/images/G/01/ape/sf/whitelisted/desktop/sf-1.24._V496156162_.html",P={1:"Enabled",0:"NotEnabled","-1":"Unknown"},Q="data-arid",R={POST_MESSAGE_UNSUPPORTED:"d16g_postMessageUnsupported",POST_MESSAGE_SUPPORTED:"d16g_postMessageSupported"},S=g.AD_LOAD_COUNTERS,T={},U={},V={},W=null,X=null;X=i.safeFunctionWrapper(i.debounce(f,100)),k.supportedCommands={resizeSafeFrameAd:function(a,b){i.addWindowListener("resize",T[a.options.arid].defaultResizeSafeFrameHandler),w(a.options.arid,a.options.size.width,a.options.size.height,a.options.maxAdWidth,!0,k,V)},changeSize:function(a,b){var c=a.options.allowedSizes;if(C(b,c,A))a.iframe.height=b.height,a.iframe.width=b.width;else{var d="Size is not whitelisted: "+b.width+" x "+b.height+m(a.options.arid);l(d)}},collapseSlot:function(a,b){v(V[a.options.arid].placementDivId),"nav-sitewide-msg"===a.options.slotName&&x("amznJQ.available:navbarJSLoaded",function(){"undefined"!=typeof parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(a,b){var d=a.options.allowedDomains;if(C(b.src,d,z))a.slot=c.getElementById(V[a.options.arid].placementDivId),"undefined"!=typeof a.slot&&B(b.src,a.slot,b.charset);else{var e="Domain is not whitelisted: "+b.src+m(a.options.arid);l(e)}},logError:function(a,b){l(b.message+m(a.options.arid)+": "+a.options.slot,b.error)},sendMetrics:function(a,b){o(b.metric,a.options.slot,a.options.placementId,b.metricMsg)},countMetric:function(a,b){p(a.options.slot,a.options.placementId,b.metricMsg,b.value)},addCsmTag:function(a,b){q(b.tag,a.options.slot,a.options.placementId,b.msg)},fireViewableLatencyMetrics:function(a,b){r(a.options.arid,a.options.slot,a.options.placementId)},customMessage:function(a,b){k.customMessage(b.key,b.body)},notifyWhenViewable:function(a,b){U[a.options.arid]||(a.rendered=!1,U[a.options.arid]=a),X(),i.addWindowListener("scroll",X),i.addWindowListener("resize",X)},enableViewabilityTracker:function(b){k.updateViewability(b.options.arid);var d=i.throttle(k.updateViewability,20);a(b.options.arid,b.options.slot,"viewabilityTracker",function(){d(b.options.arid)}),i.addWindowListener("scroll",T[b.options.arid].viewabilityTracker),i.addWindowListener("resize",T[b.options.arid].viewabilityTracker),i.addListener(c,"visibilitychange",T[b.options.arid].viewabilityTracker)},enableNoInventoryViewabilityTracker:function(b){var d=k.takeSnapshotOfSlotPosition(b.slot);k.updateNoInventoryViewability(b.options.arid,d);var e=i.throttle(k.updateNoInventoryViewability,20);a(b.options.arid,b.options.slot,"noInventoryViewabilityTracker",function(){e(b.options.arid,d)}),i.addWindowListener("scroll",T[b.options.arid].noInventoryViewabilityTracker),i.addWindowListener("resize",T[b.options.arid].noInventoryViewabilityTracker),i.addListener(c,"visibilitychange",T[b.options.arid].noInventoryViewabilityTracker)},loadAdBlockerDetectorScript:function(a,b){var d=y()+"/images/G/01/ads/advertising/ads._TTH_.js?cachebust="+Math.ceil(99989999*Math.random()+1e4),e=i.safeFunctionWrapper(function(){E.updateAdBlockerIsDisabled(a.options.arid,!1),k.sendMessageToAd(a.options.arid,"forceFallback",{})}),f=function(){E.updateAdBlockerIsDisabled(a.options.arid,!0)},g=i.createScript(d,"text/javascript","APE_adblockerdetector",e,f),h=c.getElementById(V[a.options.arid].placementDivId);h?h.appendChild(g):c.body.appendChild(g)},updateAdImpressionsFired:function(a,b){E.updateAdImpressionsFired(a.options.arid,b.isImpFired)},updateAdViewabilityFired:function(a,b){E.updateAdViewabilityFired(a.options.arid,b.isViewed)},updateNoInventoryViewabilityFired:function(a,b){E.updateNoInventoryViewabilityFired(a.options.arid,b.isViewed)},updateAdImgLoaded:function(a,b){E.updateAdImgLoaded(a.options.arid,b.isLoaded)},loadAdFeedback:function(a,b){var c=k.adMap[a.options.arid].iframe;a.options.adCreativeMetaData=b,K(c,a.options)},updateNoInventoryImpressionFired:function(a,b){E.updateNoInventoryImpressionFired(a.options.arid,b.isNoInventoryImpFired)},safeFrameReady:function(a){},requestVideoAutoplay:function(a,b){if(W===a.options.arid&&k.sendCustomMessageToAd(a.options.arid,"videoAutoplayResponse",!0),null===W&&null!==a.options.arid){var d=c.getElementsByTagName("video"),e=d&&0===d.length;W=e?a.options.arid:null,k.sendCustomMessageToAd(a.options.arid,"videoAutoplayResponse",e)}},releaseVideoAutoplay:function(a,b){W=null,k.sendCustomMessageToAd(a.options.arid,"videoAutoplayReleased")}},i.addWindowListener("message",k.receiveMessage),b.DAsf.registerCustomMessageListener=k.registerCustomMessageListener,b.DAsf.sendCustomMessage=k.sendCustomMessage,b.DAsf.loadAds=function(){var e=0,f=null,g=[];if("function"!=typeof c.getElementsByClassName){var h=c.getElementsByTagName("div"),i=c.getElementsByTagName("script"),j=0;for(j=0;j<h.length;j++)g[j]=h[j];for(j=0;j<i.length;j++)g[j+h.length]=i[j]}else g=c.getElementsByClassName(L);for(0===g.length&&(g=c.getElementsByTagName("script"));f=g[e++];)if(("DIV"===f.tagName&&s(f,L)||f.getAttribute("type")===L)&&!f.getAttribute(Q)){var k=f.getAttribute("data-ad-details")||f.text||f.innerHTML||f.innerText;try{k=JSON.parse(k),k.arid=k.arid||Math.random().toString(16).slice(2),f.setAttribute(Q,k.arid),k.hostDomain=location.protocol+"//"+location.host,k.allowedSizes="object"==typeof k.allowedSizes&&k.allowedSizes.length>=0?k.allowedSizes.concat(k.size):[k.size];var m="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(k.allowedDomains="object"==typeof k.allowedDomains&&k.allowedDomains.length>=0?k.allowedDomains.concat(m):m,k.productAdsUrl=b.paSearchTowerAdsURL||b.paCusRevAllURL,k.parentLocation=location.origin||location.protocol+location.hostname,k.queryParams=F(),k.aPageStart=b.aPageStart,k.adStartTime=b[k.slotName]?b[k.slotName].adStartTime||0:0,a(k.arid,k.slot,"defaultResizeSafeFrameHandler",G(k)),d(k.arid,k.slot),k.forcePunt){q("forcePunt",k.slot,k.placementId),v(V[k.arid].placementDivId);continue}if(k.safeFrameSrc="true"===k.abpAcceptable?O:N,k.abpStatus&&q("ABPStatus"+P[k.abpStatus],k.slot),o("af",k.slot,k.placementId),p(k.slot,k.placementId,S.START,1),"function"!=typeof b.postMessage){u(R.POST_MESSAGE_UNSUPPORTED,1),v(V[k.arid].placementDivId);continue}u(R.POST_MESSAGE_SUPPORTED,1),x(k.loadAfter,J(k),0,f)}catch(n){k=null,l("Error parsing sf tag",n)}}},b.DAsf.loadAds()}var e=a("./components/msgHandler"),f=a("./components/adBlockerHandler"),g=a("./components/counters"),h=a("./components/cacheChecker"),i=e.util,j=e.viewability,k=e.messenger,l=e.logError,m=k.appendErrorDetails,n=e.loadScript,o=e.sendCsmMetric,p=e.sendCsmCounter,q=e.addCsmTag,r=e.fireViewableLatencyMetrics,s=e.hasClass,t=e.createIframeWithName,u=e.logCounter,v=e.collapseSlot,w=e.resizeSafeFrameAd,x=e.delayLoad,y=e.getMediaCentralOrigin,z=e.scriptValidator,A=e.sizeValidator,B=e.appendJsScript,C=e.checkAgainstWhitelist,D=e.chooseRenderFlow,E=new f.AdBlockerCSMMediator(p),F=function(){"undefined"==typeof JSON?n("https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",d):d()};i.safeFunctionWrapper(F,l,"Error initializing safeFrame")()}(window,document)},{"./components/adBlockerHandler":2,"./components/cacheChecker":3,"./components/counters":4,"./components/msgHandler":5}],2:[function(a,b,c){function d(a,b){var c=this;this.adbMap=b||{};var d=function(b,d,e){var f=c.adbMap;f[b].adBlockerIsDisabled!==!0&&void 0!==f[b].adBlockerIsDisabled&&f[b].adBlockerIsDisabled===!1&&(d===!1?a(f[b].slot,f[b].placementId,"adblocker:blocked:".concat(e),1):d===!0&&a(f[b].slot,f[b].placementId,"adblocker:notblocked:".concat(e),1))};this.updateAdBlockerIsDisabled=function(b,e){var f=c.adbMap;f[b]&&(f[b].adBlockerIsDisabled=e,f[b].adBlockerIsDisabled?a(f[b].slot,f[b].placementId,"adblockernotdetected",1):a(f[b].slot,f[b].placementId,"adblockerdetected",1),d(b,f[b].adImgLoaded,"adimg"),d(b,f[b].adImpressionsFired,"adimpressions"),d(b,f[b].adViewabilityFired,"adviewability"))},this.updateAdImgLoaded=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImgLoaded&&(e[a].adImgLoaded=b,d(a,e[a].adImgLoaded,"adimg"))},this.updateAdImpressionsFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImpressionsFired&&(e[a].adImpressionsFired=b,d(a,e[a].adImpressionsFired,"adimpressions"))},this.updateAdViewabilityFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adViewabilityFired&&(e[a].adViewabilityFired=b,d(a,e[a].adViewabilityFired,"adviewability"))},this.updateNoInventoryViewabilityFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].noInventoryViewabilityFired&&(e[a].noInventoryViewabilityFired=b,d(a,e[a].noInventoryViewabilityFired,"noInventoryViewability"))},this.updateNoInventoryImpressionFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].noInventoryImpressionsFired&&(e[a].noInventoryImpressionsFired=b,d(a,e[a].noInventoryImpressionsFired,"noInventoryImpressions"))}}b.exports.AdBlockerCSMMediator=d},{}],3:[function(a,b,c){function d(a,b,c,d,f){function g(a){f(c,d,a,1)}function h(a,b){if(a)for(var c=0;c<k.length;c++){var d=k[c],e=d.name&&-1!==d.name.indexOf(a);if(e)return void l(d,b)}}var i=e.CACHE_COUNTERS,j=20;if("undefined"!=typeof performance&&"undefined"!=typeof performance.getEntriesByType){var k=performance.getEntriesByType("resource");if("undefined"!=typeof k&&Array.isArray(k)&&!(k.length<1)&&"undefined"!=typeof k[0].duration){var l=function(){return"undefined"!=typeof k[0].transferSize?function(a,b){g(0===a.transferSize?b+"cached":b+"uncached")}:function(a,b){g(a.duration<j?b+"fastload":b+"slowload")}}();h(a,i.SF_LIBRARY),h(b,i.SF_HTML)}}}var e=a("./counters");b.exports.checkCache=d},{"./counters":4}],4:[function(a,b,c){var d={START:"adload:start",CALLBACK:"adload:delayloadcallback",IFRAME_CREATED:"adload:iframecreated"},e={SF_LIBRARY:"cache:sflibrary:",SF_HTML:"cache:sfhtml:"},f={REQUEST:"adfeedback:request",SUCCESS:"adfeedback:success",FALLBACK:"adfeedback:fallback"},g={REQUEST:"ajax:request",PUNT_RETURNED:"ajax:punt",ERROR_RETURNED:"ajax:error",EMPTY_RESPONSE:"ajax:noad",RENDERED_AD:"ajax:renderad",RENDER_ERROR:"ajax:rendererror",HTTP_ERROR_STATUS:"ajax:errorstatus",NOT_SUPPORTED:"ajax:xhrnotsupported",EXCEPTION:"ajax:exception"},h={API:"messenger:"};b.exports.AD_LOAD_COUNTERS=d,b.exports.CACHE_COUNTERS=e,b.exports.FEEDBACK_COUNTERS=f,b.exports.AJAX_COUNTERS=g,b.exports.MESSENGER_COUNTERS=h},{}],5:[function(a,b,c){function d(a,b){var c=b||new Error(a);o("",null,"safeFrameError",1),window.sfLogErrors&&(window.ueLogError?window.ueLogError(c,{logLevel:C.ERROR,attribution:"APE-safeframe",message:a+" "}):"undefined"!=typeof console&&console.error&&console.error(a,c))}function e(){var a=window.location.host.match(/^.*\.([^.:\/]*)/),b=null;if(a&&a.length>1&&(b=a[1]),!/s/.test(location.protocol))return"cn"===b?"http://g-ec4.images-amazon.com":"http://z-ecx.images-amazon.com";var c="na";return/^(com|ca|mx)$/.test(b)?c="na":/^(uk|de|fr|it|es|in)$/.test(b)?c="eu":/^(jp|au)$/.test(b)?c="fe":/^(cn)$/.test(b)&&(c="cn"),"https://images-"+c+".ssl-images-amazon.com"}function f(a){return a.replace(/^.{1,5}:\/\/|^\/\//,"")}function g(a,b){var c=document.createElement("script");c.src=a,c.setAttribute("crossorigin","anonymous"),c.onload=c.onreadystatechange=function(){c.readyState&&"loaded"!==c.readyState&&"complete"!==c.readyState||(c.onload=c.onreadystatechange=null,b&&"function"==typeof b&&b())},c.onerror=function(a){return d("Error loading script",a),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(c)}function h(a,b,c){var d=document.createElement("script");d.charset=c||"utf-8",d.src=a,b.appendChild(d)}function i(a,b){var c=/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/,d=a.match(c)[2];return d===b}function j(a,b){return a.height===b.height&&a.width===b.width}function k(a,b,c){if(!b||"object"!=typeof b)return!1;for(var d=0,e=b.length;e>d;d++)if(c(a,b[d]))return!0;return!1}function l(a,b){return a&&a.options&&(a.options.msfInlined?!0:f(b.origin)===f(D))}function m(a,b,c){var e=this;this.adMap=a||{},this.supportedCommands=b||{},this.msgListeners=c||{},this.MESSENGER_COUNTERS=B.MESSENGER_COUNTERS;var f=function(a){var b=e.adMap,c=b[a].options;if(b==={}||c==={})return null;var d="ape_"+c.slot+"_iframe";return b[a].iframe&&(b[a].iframe=b[a].iframe&&b[a].iframe.innerHTML?b[a].iframe:document.getElementById(d)),b[a].iframe};this.sendMessageToAd=function(a,b,c){var d=f(a),e=d?d.contentWindow:null;if(e){var g={command:b,data:c};g=JSON.stringify(g),e.postMessage(g,"*")}},this.receiveMessage=function(a){var b=e.adMap,c=e.supportedCommands;if(b!=={}){var f,g,h;try{if(a.data&&a.data.message&&/.*Mash.*/i.test(a.data.message.id))return;f=JSON.parse(a.data),g=b[f.arid];var i=l(g,a);if(!i||"object"!=typeof f.data)throw"Invalid Message: "+JSON.stringify(a.data)}catch(j){return h="Received Error: "+a.data,"undefined"!=typeof f&&f&&(h+=e.appendErrorDetails(f.arid)),void d(h,j)}g.options.debug&&"undefined"!=typeof console&&console.log(a);try{var k=c[f.command];k&&(o(g.options.slot,null,e.MESSENGER_COUNTERS.API+f.command,1),k(g,f.data))}catch(j){h="Problem with message: "+a.data,"undefined"!=typeof f&&(h+=e.appendErrorDetails(f.arid)),d(h,j)}}},this.appendErrorDetails=function(a){var b=e.adMap;if(b==={})return"";var c="";if("undefined"!=typeof b[a]){var d=b[a].options;"undefined"!=typeof d.aanResponse&&(c=" Ad Details: "+JSON.stringify(d.aanResponse))}return c},this.customMessage=function(a,b){var c=e.msgListeners;if(c[a])try{c[a](b)}catch(f){d("Custom Message Error",f)}else d("Unrecognized custom message key: "+a)},this.registerCustomMessageListener=function(a,b,c){var f=!1,g=e.msgListeners;try{if(!g[a]||"function"!=typeof g[a]||c)g[a]=b,f=!0;else{var h=new Error("Custom message listener already exists for key: "+a);d("Duplicate Key",h)}}catch(i){d("Error registering custom message listener",i)}return f},this.sendCustomMessage=function(a,b){var c=e.adMap,d={key:a,data:b};for(var f in c)e.sendMessageToAd(f,"customMessage",d)},this.sendCustomMessageToAd=function(a,b,c){var d={key:b,data:c};e.sendMessageToAd(a,"customMessage",d)},this.updateViewability=function(a){var b=e.adMap,c=b[a].options;if(b!=={}&&c!=={}){var d=f(a),g=b[a].options.viewabilityStandards,h=z.getViewableInfo(d);null!==h&&(h.viewabilityStandards=g,e.sendMessageToAd(a,"updateViewability",h))}},this.takeSnapshotOfSlotPosition=function(a){var b=a.getBoundingClientRect();return{initialBoundingRect:b,adHeight:b.height,adWidth:b.width,divOffsetWidth:a.offsetWidth,originalScrollX:window.scrollX,originalScrollY:window.scrollY}},this.updateNoInventoryViewability=function(a,b){var c=e.adMap,d=c[a].options;if(c!=={}&&d!=={}){var f=b.adHeight,g=b.adWidth,h=Math.round(f*b.divOffsetWidth/g),i=b.divOffsetWidth,j={height:h,width:i},k=c[a].options.viewabilityStandards,l=z.getNoAdViewableInfo(b.initialBoundingRect,j,b.originalScrollX,b.originalScrollY);null!==l&&(l.viewabilityStandards=k,e.sendMessageToAd(a,"updateNoInventoryViewability",l))}}}function n(a,b,c,d){var e=E[a],f=d?d+":":"";"function"==typeof window[e]&&(window[e](a,"adplacements:"+f+b.replace(/\_/g,":"),{wb:1}),c&&window[e](a,"adplacements:"+f+c,{wb:1}))}function o(a,b,c,d){var e=c&&a?c+":":c,f="adplacements:"+e+a.replace(/\_/g,":"),g=window.ue&&"function"==typeof window.ue.count;if(g&&(window.ue.count(f,d),b)){var h=c&&b?c+":":c,i="adplacements:"+h+b;window.ue.count(i,d)}}function p(a,b,c,d){if(window.ue&&window.ue.tag){var e=a+":"+b.replace(/\_/g,":")+(d?":"+d:"");if(window.ue.tag(e),c){var f=a+":"+c+(d?":"+d:"");window.ue.tag(f)}}}function q(a,b,c){window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[a]&&window.apeViewableLatencyTrackers[a].valid&&(window.apeViewableLatencyTrackers[a].loaded=!0,window.apeViewableLatencyTrackers[a].viewed&&(n("ld",b,c,"viewablelatency"),o(b,c,"htmlviewed:loaded",1)))}function r(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)"),d=a.className;return d&&c.test(d)}function s(a){var b=document.createElement("iframe");return b.name=a,b}function t(a,b){var c=window.ue&&"function"==typeof window.ue.count;c&&window.ue.count(a,b)}function u(a){var b=document.getElementById(a);"undefined"!=typeof b&&b&&(b.style.display="none")}function v(a,b,c,e,f,g,h){try{var i=document.getElementById(h[a].placementDivId),j=document.getElementById(h[a].wrapperDivId)||i,k=document.getElementById(h[a].iframeId);if(null===j||null===i||null===k)return;var l=c,m=b,n=function(a){l=a*c/b,m=a};if(f){var o=0===j.offsetWidth?window.innerWidth:j.offsetWidth;n(e?window.innerHeight<window.innerWidth?e:o:o)}l=Math.round(l)+"px",m=Math.round(m)+"px",k.style.height=l,k.style.width=m;var p={width:m,height:l};j!==i&&(i.style.height=l,g.sendMessageToAd(a,"resizeCreativeWrapper",p))}catch(q){d("Error resizing ad: "+h[a].slotId,q)}}function w(a,b,c){var d=a.src;"true"===a.serverSideFetchAd?c(a):d&&-1!==d.indexOf("xsp")?x(d,a,b,c):c(a)}function x(a,b,c,e){var f=B.AJAX_COUNTERS;o(b.slot,null,f.REQUEST,1);var g=function(a){if(4===a.readyState)if(200===a.status)try{var d=a.responseText;if(d){var g=JSON.parse(d),h=g.status;switch(h){case"punt":p("aaxPunt",b.slot),o(b.slot,null,f.PUNT_RETURNED,1),b.aaxInstrPixelUrl=g.instrPixelURL,e(b);break;case"error":o(b.slot,null,f.ERROR_RETURNED,1),u(c);break;default:b.aaxImpPixelUrl=g.impPixelURL,b.aaxInstrPixelUrl=g.instrPixelURL,b.htmlContent=g.creative,b&&b.adFeedbackInfo&&(b.adFeedbackInfo.adProgramId=g.programId),b&&b.adCreativeMetaData&&(b.adCreativeMetaData.adProgramId=g.programId,b.adCreativeMetaData.adImpressionId=g.impPixelURL,b.adCreativeMetaData.adCreativeId=g.creativeId,b.adCreativeMetaData.adId=g.adId,p("adRender",b.slot),p("adRender",b.slot,"creativeId:"+b.adCreativeMetaData.adCreativeId),p("adRender",b.slot,"programId:"+b.adCreativeMetaData.adProgramId)),e(b),o(b.slot,null,f.RENDERED_AD,1)}}else u(c),o(b.slot,null,f.EMPTY_RESPONSE,1)}catch(i){u(c),o(b.slot,null,f.RENDER_ERROR,1)}else o(b.slot,null,f.HTTP_ERROR_STATUS,1),u(c)},h=function(){o(b.slot,null,f.NOT_SUPPORTED,1),u(c)},i=function(a){o(b.slot,null,f.EXCEPTION,1),d("Error building AJAX request",a),u(c)};A.sendAjaxRequest("GET",a,!0,g,h,i)}function y(a,b,c,d){var e="undefined"!=typeof P,f="undefined"!=typeof amznJQ,g=0!==c?function(){setTimeout(b,c)}:b;if("windowOnLoad"===a)"complete"===document.readyState?g():A.addWindowListener("load",g);else if("spATFEvent"===a)e?P.when("search-page-utilities").execute(function(a){a.afterEvent("spATFEvent",g)}):f?amznJQ.available("search-js-general",function(){window.SPUtils.afterEvent("spATFEvent",g)}):g();else if("criticalFeature"===a)e?P.when("cf").execute(g):f?amznJQ.onCompletion("amznJQ.criticalFeature",g):g();else if("r2OnLoad"===a)e?P.when("r2Loaded").execute(g):f?amznJQ.onReady("r2Loaded",g):g();else if(a.match("[^:]+:.+")){var h=a.split(":");if(h.length>1){var i=h[0].split("."),j=h[1],k=h.length>2?h[2]:j;e?P.when(k,"A").execute(g):f&&i.length>1?amznJQ[i[1]](j,g):g()}else g()}else if(a.match(/^\d{1,4}px$/g)){var l=!1,m=function(a,b,c){c&&z.findDistanceInView(c)<=parseInt(a,10)&&(b(),l=!0)},n=A.safeFunctionWrapper(A.throttle(function(){m(a,g,d),l&&(A.removeWindowListener("scroll",n),A.removeWindowListener("resize",n))},20));A.addWindowListener("scroll",n),A.addWindowListener("resize",n)}else g()}var z=a("./viewability"),A=a("./util"),B=a("./counters"),C={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},D=e(),E={wb:"ues",bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};b.exports.util=A,b.exports.viewability=z,b.exports.messenger=new m,b.exports.logError=d,b.exports.SF_DOMAIN=D,b.exports.loadScript=g,b.exports.sendCsmMetric=n,b.exports.sendCsmCounter=o,b.exports.addCsmTag=p,b.exports.fireViewableLatencyMetrics=q,b.exports.hasClass=r,b.exports.createIframeWithName=s,b.exports.logCounter=t,b.exports.collapseSlot=u,b.exports.resizeSafeFrameAd=v,b.exports.createXspAjaxRequest=x,b.exports.chooseRenderFlow=w,b.exports.delayLoad=y,b.exports.getMediaCentralOrigin=e,b.exports.appendJsScript=h,b.exports.scriptValidator=i,b.exports.sizeValidator=j,b.exports.checkAgainstWhitelist=k},{"./counters":4,"./util":6,"./viewability":7}],6:[function(a,b,c){function d(a){for(var b="",c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(e=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&e),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&e)<<6|63&f),c+=3);return b}function e(a){var b,c,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k="",l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)f=j.indexOf(a.charAt(l++)),g=j.indexOf(a.charAt(l++)),h=j.indexOf(a.charAt(l++)),i=j.indexOf(a.charAt(l++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,k+=String.fromCharCode(b),64!=h&&(k+=String.fromCharCode(c)),64!=i&&(k+=String.fromCharCode(e));return k=d(k)}function f(){return window.P&&window.P.AUI_BUILD_DATE}/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
b.exports.debounce=function(a,b,c){var d,e,f,h,i,j=function(){var k=g()-h;b>k&&k>=0?d=setTimeout(j,b-k):(d=null,c||(i=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,h=g();var k=c&&!d;return d||(d=setTimeout(j,b)),k&&(i=a.apply(f,e),f=e=null),i}},b.exports.throttle=function(a,b,c){var d,e,f,h=null,i=0;c||(c={});var j=function(){i=c.leading===!1?0:g(),h=null,f=a.apply(d,e),h||(d=e=null)};return function(){var k=g();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,0>=l||l>b?(h&&(clearTimeout(h),h=null),i=k,f=a.apply(d,e),h||(d=e=null)):h||c.trailing===!1||(h=setTimeout(j,l)),f}};var g=function(){return Date.now?Date.now():(new Date).getTime()};b.exports.addListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):window.attachEvent&&a.attachEvent("on"+b,c)},b.exports.addWindowListener=function(a,c){b.exports.addListener(window,a,c)},b.exports.removeWindowListener=function(a,b){window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b)},b.exports.getQueryString=function(a,b){var c=[];for(var d in a)c.push(d+"="+a[d]);var e=c.join("&");return b?encodeURIComponent(e):e},b.exports.ensureMessageListener=function(a){b.exports.removeWindowListener("message",a),b.exports.addWindowListener("message",a)},b.exports.extend=function(a){for(var b,c,d=1,e=arguments.length;e>d;d++){b=arguments[d];for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&null!==b[c]&&(a[c]=b[c])}return a},b.exports.decodeBase64=e,b.exports.sendAjaxRequest=function(a,b,c,d,e,f){try{var g=null;window.XMLHttpRequest?g=new XMLHttpRequest:window.ActiveXObject&&(g=new ActiveXObject("Microsoft.XMLHTTP")),g?(g.onreadystatechange=function(){d(g)},g.open(a,b,c),g.send()):"function"==typeof failFallback&&e()}catch(h){"function"==typeof errorHandler&&f()}},b.exports.createScript=function(a,b,c,d,e){if(!document.getElementById(c)){var f=document.createElement("script");return f.async=!0,f.setAttribute("crossorigin","anonymous"),f.src=a,f.type=b,f.id=c,f.onerror=d,f.onload=e,f}},b.exports.isAUIAvailable=f,b.exports.safeFunctionWrapper=function(a,b,c){return f()&&"function"==typeof window.P.guardError?P.guardError("APE-SafeFrame",a):function(){try{a.apply(this,arguments)}catch(d){"function"==typeof b&&c&&b(c,d)}}}},{}],7:[function(a,b,c){function d(a,b,c){var d=0;return document.hidden?d:(d=a>0?c-a:b>0?Math.min(b,c):0,Math.min(d,b-a))}function e(){try{var a={};return a.t=window.screenY?window.screenY:window.screenTop,a.l=window.screenX?window.screenX:window.screenLeft,a.w=b.exports.windowWidth(),a.h=b.exports.windowHeight(),a.b=a.t+a.h,a.r=a.l+a.w,a}catch(c){return null}}function f(a){try{var c={},e=a.getBoundingClientRect();c.t=e.top,c.l=e.left,c.r=e.right,c.b=e.bottom,c.w=e.width||c.r-c.l,c.h=e.height||c.b-c.t,c.z=Number(window.getComputedStyle(a,null).zIndex);var f=b.exports.windowWidth(),g=b.exports.windowHeight(),h=d(e.top,e.bottom,g),i=d(e.left,e.right,f),j=h*i,k=c.h*Math.min(c.w,b.exports.windowWidth());return c.xiv=Number(Math.min(1,Math.max(0,i/c.w)).toFixed(2)),c.yiv=Number(Math.min(1,Math.max(0,h/c.h)).toFixed(2)),c.iv=Number(Math.min(1,Math.max(0,j/k)).toFixed(2)),c}catch(l){return null}}function g(a,c,e,f){try{var g={};g.t=a.top-(window.scrollY-f),g.l=a.left-(window.scrollX-e);var h=c.width;g.r=g.l+h;var i=c.height;g.b=i+g.t,g.w=h,g.h=i;var j=b.exports.windowWidth(),k=b.exports.windowHeight(),l=d(g.t,g.b,k),m=d(g.l,g.r,j),n=l*m,o=g.h*Math.min(g.w,b.exports.windowWidth());return g.xiv=Number(Math.min(1,Math.max(0,m/g.w)).toFixed(2)),g.yiv=Number(Math.min(1,Math.max(0,l/g.h)).toFixed(2)),g.iv=Number(Math.min(1,Math.max(0,n/o)).toFixed(2)),g}catch(p){return null}}function h(a){try{var c={},d=a.getBoundingClientRect();return c.t=d.top,c.l=d.left,c.r=b.exports.windowWidth()-d.right,c.b=b.exports.windowHeight()-d.bottom,c.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>b.exports.windowWidth()?1:0,c.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>b.exports.windowHeight()?1:0,c}catch(e){return null}}function i(a,c,d,e){try{var f={};return f.t=a.top-(window.scrollY-e),f.l=a.left-(window.scrollX-d),f.r=b.exports.windowWidth()-a.left+(window.scrollX-d)-c.width,f.b=b.exports.windowHeight()-a.top+(window.scrollY-e)-c.height,f.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>b.exports.windowWidth()?1:0,f.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>b.exports.windowHeight()?1:0,f}catch(g){return null}}b.exports.PERCENT_VIEWABLE=.5,b.exports.DURATION_VIEWABLE=500,b.exports.findPercentInView=function(a){try{var c=a.getBoundingClientRect(),e=d(c.top,c.bottom,b.exports.windowHeight()),f=d(c.left,c.right,b.exports.windowWidth()),g=e*f,h=(c.bottom-c.top)*Math.min(c.right-c.left,b.exports.windowWidth());return Math.min(1,Math.max(0,g/h))}catch(i){return null}},b.exports.findDistanceInView=function(a){try{var c=a.getBoundingClientRect();return c.top-b.exports.windowHeight()}catch(d){return null}},b.exports.getViewableInfo=function(a){if(!a)return null;var b={},c=e(),d=f(a),g=h(a);return c&&d&&g?(b.geom={},b.geom.win=c,b.geom.self=d,b.geom.exp=g,b.payload={},b.payload.wh=c.h,b.payload.ww=c.w,b.payload.sx=window.scrollX,b.payload.sy=window.scrollY,b.payload.ah=d.h,b.payload.aw=d.w,b.payload.top=d.t,b.payload.left=d.l,b):null},b.exports.getNoAdViewableInfo=function(a,b,c,d){var f={},h=e(),j=g(a,b,c,d),k=i(a,b,c,d);return h&&j&&k?(f.geom={},f.geom.win=h,f.geom.self=j,f.geom.exp=k,f.payload={},f.payload.wh=h.h,f.payload.ww=h.w,f.payload.sx=window.scrollX,f.payload.sy=window.scrollY,f.payload.ah=j.h,f.payload.aw=j.w,f.payload.top=j.t,f.payload.left=j.l,f):null},b.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},b.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}]},{},[1]);