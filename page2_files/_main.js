!function e(n,t,i){function o(r,s){if(!t[r]){if(!n[r]){var c="function"==typeof require&&require;if(!s&&c)return c(r,!0);if(a)return a(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var d=t[r]={exports:{}};n[r][0].call(d.exports,function(e){var t=n[r][1][e];return o(t||e)},d,d.exports,e,n,t,i)}return t[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)o(i[r]);return o}({1:[function(e,n,t){n.exports=function(){var n=e("./widgets/main.js");n&&n.init&&"function"==typeof n.init&&n.init()}()},{"./widgets/main.js":10}],2:[function(e,n,t){n.exports=function(){function n(e){o(),"televisionMainPage"===e&&a(),t(e),i(e)}function t(e){f=$(window),g=$(".js-live-tv__button"),"televisionMainPage"===e&&(b=$(".js-live-tv-television-play"))}function i(e){g.on("click",r),"televisionMainPage"===e&&(b.on("click",s),f.on("resize",$.throttle(300,function(){setTimeout(function(){x&&"smartphone"===window.RA.config.get("device.type")&&l(!1)},300)})))}function o(){m.append('<video class="video-js vjs-default-skin js-live-tv-video" controls preload="none"poster="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAxNzk4OURENjg2MjExRTdCNTRGRjgwOTQ0QTE5M0UyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAxNzk4OURFNjg2MjExRTdCNTRGRjgwOTQ0QTE5M0UyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDE3OTg5REI2ODYyMTFFN0I1NEZGODA5NDRBMTkzRTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDE3OTg5REM2ODYyMTFFN0I1NEZGODA5NDRBMTkzRTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qWf11AAAADklEQVR42mJgYGAACDAAAAQAAZsD6gkAAAAASUVORK5CYII="><p class="vjs-no-js">Для просмотра включите JavaScript или обновите браузер <a href="http://videojs.com/html5-video-support/" target="_blank">HTML5 video</a></p></video>'),h=$(".js-live-tv-video")}function a(){v.prepend('<video class="video-js vjs-default-skin vjs-16-9 js-live-tv-video-television" controls preload="none" poster=""><p class="vjs-no-js">Для просмотра включите JavaScript или обновите браузер <a href="http://videojs.com/html5-video-support/" target="_blank">HTML5 video</a></p></video>'),w=$(".js-live-tv-video-television")}function r(){m.addClass("active"),p=videojs(h.get(0),{autoplay:!0,preload:"auto"}),p.ready(function(){p.src({src:j,type:"application/x-mpegURL"}),_&&4===k[0]||p.on("pause",function(){c(!1)}),p.on("fullscreenchange",function(){p.isFullscreen()||c(!1)}),p.one("error",function(){g.css({display:"none"}),c(!0)});var e=$(".js-live-tv-video",m);y=$('<span class="live-tv__close"></span>'),e.append(y),y.on("click.live-tv",function(){c(!1)}),A(p,j),"function"==typeof p.requestFullscreen&&(_&&4===k[0]||p.requestFullscreen())},!0)}function s(){R=videojs(w.get(0),{autoplay:!0,preload:"auto"}),R.ready(function(){R.src({src:j,type:"application/x-mpegURL"}),R.on("pause",function(){l(!1)}),R.on("play",function(){b.addClass("active"),x=!0}),R.one("error",function(){l(!0),d()}),A(R,j)},!0)}function c(e){m.removeClass("active"),y.off("click.live-tv"),p.off("fullscreenchange"),p.dispose(),e||o(),setTimeout(function(){f.scrollTop()<50&&f.scrollTop(0)},50)}function l(e){R.dispose(),b.removeClass("active"),x=!1,e||a()}function d(){v.append('<div class="video-js vjs-16-9"><span class="television__error">Произошла ошибка. <br/>Попробуйте обновить ваш браузер до последней версии <br/>для воспроизведения видео</span></div>')}function u(){return m=$(".js-live-tv"),v=$(".js-live-tv-television"),m.length>0||v.length>0}var f,p,m,v,h,g,w,b,R,y,k,A=e("repo/videojs/add-quality-btn/main"),j="//online-video.rbc.ru/online/rbctv.m3u8",x=!1,C=navigator.userAgent.toLowerCase(),_=C.indexOf("android")>-1;return _&&(k=C.match(/android\s([0-9\.]*)/))&&(k=k[1].split("."),k=[parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2]||0,10)]),{init:n,shouldRun:u}}()},{"repo/videojs/add-quality-btn/main":19}],3:[function(e,n,t){n.exports=function(e){function n(){v||(v=!0,i.addClass("g-bg-dark"),p.lockScrollBody(),a.add(u).show(),m.resetOnClose&&r.scrollTop(0),m.onOpen&&m.onOpen.call(f,o))}function t(){v&&(v=!1,i.removeClass("g-bg-dark"),p.unlockScrollBody(),a.add(u).hide(),m.onClose&&m.onClose.call(f,o))}var i,o,a,r,s,c,l,d,u,f=this,p=RA.repo.helpers,m={html:"",cssClass:null,onOpen:null,onClose:null,resetOnClose:!1},v=!1;this.open=n,this.close=t,this.getId=function(){return o},this.getContainer=function(){return d},this.destroy=function(){m={html:"",cssClass:null,onOpen:null,onClose:null},t(),c.off(),a.detach(),u.detach(),o=a=r=s=c=l=d=u=null},p.extend(m,e||{},!0),function(){o="popup_id_"+Date.now(),a=$("<div />",{id:o,class:"popup"}),u=$("<div />",{class:"popup__blackout"}),r=$("<div />",{class:"popup__inner"}),s=$("<div />",{class:"popup__wrap"}),l=$("<div />",{class:"popup__content"}),d=$("<div />",{class:"popup__content__inside"}),c=$("<i />",{class:"popup-close"});var e=$(document.body);i=$("html"),s.append(l).append('<span class="popup__content-invisible"></span>'),r.append(s),a.append(r),m.cssClass&&(a.addClass(m.cssClass),u.addClass(m.cssClass+"-blackout")),l.append(c).append(d),d.html(m.html),e.append(u),e.append(a),c.on("click",t)}()}},{}],4:[function(e,n,t){n.exports=function(){function e(){$("body").removeClass("g-body-bottom-padding"),$(".js-bottom-menu-application").hide()}function n(){return navigator.userAgent.indexOf("RBCReader")>-1}return{init:e,shouldRun:n}}()},{}],5:[function(e,n,t){n.exports=function(){var n=e("repo/checkad/main");return{init:n.init,shouldRun:n.shouldRun}}()},{"repo/checkad/main":16}],6:[function(e,n,t){n.exports=function(){function e(){n()}function n(){setTimeout(function(){$(".js-top-banner").height()>=1&&(i.addClass(o),$(".l-window").scroll(function(){$(".l-window").scrollTop()>250?i.removeClass(o):i.addClass(o)}))},500)}function t(){return!0}var i=$(".g-close"),o="g-close_has-banner";return{init:e,shouldRun:t}}()},{}],7:[function(e,n,t){n.exports=function(){function e(){n(),$(window).resize(n),$(window).on("orientationchange",n)}function n(){i.is(":visible")?(window.rosbusinessconsulting.config.set("device.type","tablet"),window.deviceType="tablet"):(window.rosbusinessconsulting.config.set("device.type","smartphone"),window.deviceType="smartphone")}function t(){return!0}var i=$(".g-tablet");return window.rosbusinessconsulting.config.set("device.type","tablet"),window.deviceType="tablet",{init:e,shouldRun:t}}()},{}],8:[function(e,n,t){n.exports=function(){function e(){$(".js-footer-site-version").on("click",function(e){e.preventDefault();var n=RA.config.get("domain")||".rbc.ru";$(window).scrollTop(0),$.cookie("toprbc_device","desktop",{path:"/",domain:n,expires:365}),location.reload()})}function n(){return $(".js-footer-site-version").length>0}return{init:e,shouldRun:n}}()},{}],9:[function(e,n,t){n.exports=function(){function n(){"tv"===RA.config.get("project")&&$("body").hasClass("index")?i.init("televisionMainPage"):i.init()}function t(){var e=i.shouldRun();try{videojs||(e=!1)}catch(n){e=!1}return e}var i=e("../../repo/live-tv/main");return{init:n,shouldRun:t}}()},{"../../repo/live-tv/main":2}],10:[function(e,n,t){n.exports=function(){function n(){!0===t.shouldRun()&&t.init(),!0===i.shouldRun()&&i.init(),!0===o.shouldRun()&&o.init(),!0===a.shouldRun()&&a.init(),!0===r.shouldRun()&&r.init(),!0===s.shouldRun()&&s.init(),!0===c.shouldRun()&&c.init(),!0===l.shouldRun()&&l.init(),!0===d.shouldRun()&&d.init(),!0===u.shouldRun()&&u.init()}var t=e("./bottom-menu-hide/main"),i=e("./checkad/main"),o=e("./close/main"),a=e("./detect-devices/main"),r=e("./footer/main"),s=e("./live-tv/main"),c=e("./medialand-cookies/main"),l=e("./newsfeed/main"),d=e("./topline/main"),u=e("./yandex-metrica-counter/main");return{init:n}}()},{"./bottom-menu-hide/main":4,"./checkad/main":5,"./close/main":6,"./detect-devices/main":7,"./footer/main":8,"./live-tv/main":9,"./medialand-cookies/main":11,"./newsfeed/main":12,"./topline/main":13,"./yandex-metrica-counter/main":15}],11:[function(e,n,t){n.exports=function(){var n=e("repo/medialand-cookies/main");return{init:n.init,shouldRun:n.shouldRun}}()},{"repo/medialand-cookies/main":17}],12:[function(e,n,t){n.exports=function(){function n(){t(),i(),c.init({url:"/v8/ajax/mobile/getnewsfeed/region/",urlRegion:"/v8/ajax/mobile/getnewsfeedfiltered/region/",root:d,dateRange:RA.config.get("newsfeed.dateRange"),inDomItemsData:RA.config.get("newsfeed.inDomItems"),isShouldAnimateOnLoadPage:r(),newsListSelector:".news-feed__inner",isListenWinFocus:!1}),window.RA.widgets.newsfeed={closeFeed:a,openFeed:o}}function t(){var e=$(".js-news-feed-top-offset").outerHeight();u.css("top",e)}function i(){l.on("click touch",function(e){return e.preventDefault(),l.hasClass("active")?a():o(),!1})}function o(){f=window.pageYOffset,d.addClass("active"),l.addClass("active"),$(".l-window").addClass("g-scroll-newsfeed g-invisible-newsfeed")}function a(){d.removeClass("active"),l.removeClass("active"),$(".l-window").removeClass("g-scroll-newsfeed g-invisible-newsfeed"),$(window).scrollTop(f)}function r(){var e=!0,n=Date.now();return n-(parseInt($.cookie("rbc-newsfeed-time"),10)||0)>288e5&&d.hasClass("active")?$.cookie("rbc-newsfeed-time",n,{path:"/",expires:30,domain:".rbc.ru"}):e=!1,e}function s(){return d.length>0}var c=e("repo/newsfeed-updater/main"),l=$(".js-news-feed-toggle"),d=$(".js-news-feed"),u=$(".js-news-feed-inner"),f=0;return{init:n,shouldRun:s}}()},{"repo/newsfeed-updater/main":18}],13:[function(e,n,t){n.exports=function(){function n(){t(),i()}function t(){c=$("."+g),l=$("."+g+"-popup"),d=$("."+g+"-button"),u=$(".js-live-tv__button"),p=c.hasClass("js-topline-has-region"),m=c.hasClass("js-topline-has-tv")}function i(){f=new v({html:l.html(),cssClass:"topline__popup",onOpen:function(){m&&u.on("click",r)},onClose:function(){m&&u.off("click",r)}}),l.remove(),$(function(){d.on("click",o),p&&h.init()})}function o(){$(this).hasClass("active")?r():setTimeout(function(){a()},130)}function a(){d.addClass("active"),f.open()}function r(){d.removeClass("active"),f.close()}function s(){return!0}var c,l,d,u,f,p,m,v=e("repo/popup/main"),h=e("./regions-toggle"),g="js-topline";return{init:n,shouldRun:s}}()},{"./regions-toggle":14,"repo/popup/main":3}],14:[function(e,n,t){n.exports=function(){function e(){n(),t()}function n(){a=$(".js-region-item"),r=i()}function t(){a.on("click",function(){s=$(this).data("cookie")||"world",$.cookie(c,s,{expires:365,path:"/",domain:r})})}function i(){var e=".rbc.ru";return location.host.indexOf("rbcplus.ru")>-1&&(e=".rbcplus.ru"),e}function o(){return!0}var a,r,s,c="toprbc_region";return{init:e,shouldRun:o}}()},{}],15:[function(e,n,t){n.exports=function(){function e(){$(document.body).on("click",function(e){var t=n(e.target,this),i=t&&t.elem&&t.elem.getAttribute("data-yandex-name");if(t&&i){var o=window.RA.repo.yandexCounter;switch(t.type){case"counter":o.initReach(i,t.elem.getAttribute("data-yandex-params"));break;case"hit":o.initHits(i);break;case"param":o.initParams(i)}}}),$(".js-yandex-counter[data-yandex-show]").each(function(){window.RA.repo.yandexCounter.initReach(this.getAttribute("data-yandex-show"))})}function n(e,n){if("function"==typeof e.closest){var t=e.closest(".js-yandex-counter");if(t)return{elem:t,type:"counter"};if(t=e.closest(".js-yandex-hit"))return{elem:t,type:"hit"};if(t=e.closest(".js-yandex-param"))return{elem:t,type:"param"}}else for(;n!==e;){var i=e.className;if(i){if(~i.indexOf("js-yandex-counter"))return{elem:e,type:"counter"};if(~i.indexOf("js-yandex-hit"))return{elem:e,type:"hit"};if(~i.indexOf("js-yandex-param"))return{elem:e,type:"param"}}e=e.parentNode}return null}function t(){return!!RA.config.get("counters.ya.idCounter")}return{init:e,shouldRun:t}}()},{}],16:[function(e,n,t){n.exports=function(){function e(){t().done(function(e){e?(RA.config.set("checkad","error"),$.cookie(k,1,{expires:365,path:"/",domain:x}),$.cookie(A,1,{expires:365,path:"/",domain:x}),n(),i(),w||j||(a(),r())):(RA.config.set("checkad","onload"),$.cookie(k,0,{expires:365,path:"/",domain:x}),$.cookie(A,0,{expires:-1,path:"/",domain:x})),$("body").trigger("changeCheckad")})}function n(){v=$(".js-checkad-warning"),m=v.attr("data-name"),w=$.cookie(m),d=$('a[href*="rbc.ru"]')}function t(){var e=$.Deferred();return RA.config.get("showAds")?e.resolve($("#topadvert").length>0&&!$("#topadvert").is(":visible")):e.resolve(!0),e}function i(){(p=$.cookie(R))||(p=l()+l()+l()+l(),$.cookie(R,p,{expires:7,path:"/",domain:x}),o(p))}function o(e){d.on("click",function(n){n.preventDefault(),$.cookie(y,"ok",{expires:30,path:"/",domain:x}),u=this.href,f="https://an.yandex.ru/mapuid/"+b+"/"+e+"?location="+u+"&jsredir=1",location.assign(f)})}function a(){g=v.outerHeight(),v.css({top:-g-10}).removeClass("js-checkad-warning"),h=v.find(".js-checkad-warning-close"),h.one("click",function(){s(),c()})}function r(){v.animate({top:0},500)}function s(){v.animate({top:-g-10},200).queue(function(e){v.hide(),e()})}function c(){$.cookie(m,!0,{expires:1,path:"/",domain:x})}function l(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}var d,u,f,p,m,v,h,g,w,b="rbcru",R="adb_id",y="adb_match",k="adb_on",A="adb_on_stat",j=RA.config.get("layout.mobile"),x=RA.config.get("domain")||"/";return RA.config.set("checkad","notInited"),{init:e,shouldRun:function(){return!0===RA.config.get("loadCheckad")}}}()},{}],17:[function(e,n,t){n.exports=function(){function e(){if(!0===RA.config.get("loadCheckad")){var e=RA.config.get("checkad");if("error"===e)return;if("notInited"===e)return void n()}t()}function n(){$(window).on("changeCheckad",function(){"onload"===RA.config.get("checkad")&&t()})}function t(){if(!$.cookie(o)){var e=RA.config.get("domain")||"";$.cookie(o,!0,{expires:1,path:"/",domain:e}),i()}}function i(){$('a[href*="rbc.ru"]').on("click",function(e){e.preventDefault();var n=this.href,t="//engine.rbc.medialand.ru/r/?to="+n;location.assign(t)})}var o="medialand_time";return{init:e,shouldRun:function(){return!0}}}()},{}],18:[function(e,n,t){n.exports=function(){function e(e){if(!L&&(L=!0,$.extend(!0,G,e),A=G.root||$(),j=A.find(G.newsListSelector),A.length&&j.length)){if(Z=!!A.data("plugin_customScroll"),_=A.find(G.newsRegionToggleSelector),C=A.find(G.newsTimeSelector),x=A.find(G.newsItemSelector),I=A.find(G.newsScrollSelector),D=A.find(G.newsBannerSelector),G.cookieNameRegion=A.data("cookie")||G.cookieNameRegion,M=!!$.cookie(G.cookieNameRegion),N=D.index(),B=G.periodUpdate,q=G.periodBgUpdate,C.length&&(U=1e3*(parseInt(C.attr("data-tz"),10)||0),E=+new Date(C.attr("data-time"))+U),_.length>0?T=_.eq(1).data("group")||"world":(T="world",M=!1),r({start:G.dateRange.start||null,end:G.dateRange.end||null}),Z)A.on("seventy.customScroll",$.throttle?$.throttle(300,w):w);else{var o=function(){(this.scrollTop+this.offsetHeight)/this.scrollHeight>=.7&&w()};I.on("scroll",$.throttle?$.throttle(300,o):o)}if(G.isListenWinFocus){var a=$(window);a.on("focus",n),a.on("blur",t)}_.length>0&&_.on("click",i);var c=s(x.filter(":hidden"),G.isShouldAnimateOnLoadPage);C.length&&setTimeout(R,6e4),_.length?(f(),M?(u(!0),_.eq(1).trigger("click")):c.done(u)):c.done(u)}}function n(){B=G.periodUpdate,q=G.periodBgUpdate,u(),_.length>0&&f()}function t(){B=3*G.periodUpdate,q=3*G.periodBgUpdate}function i(){var e=$(this);if(e.hasClass("active"))return!1;_.removeClass("active"),e.addClass("active"),M=e.data("group")!==G.regionCommon,$.cookie(G.cookieNameRegion,M?"1":"",{path:"/",expires:365,domain:".rbc.ru"}),v()}function o(e){var n=$(G.cityBlockSelector,A);n.length&&n.toggle(e)}function a(){Z&&A.customScroll("update")}function r(e){e&&(void 0!==e.start&&(G.dateRange.start=+new Date(e.start)||Date.now()/1e3),void 0!==e.end&&(G.dateRange.end=+new Date(e.end)||0))}function s(e,n){var t=$.Deferred();return t.done(a),e&&e.length?n?c(e).done(t.resolve):(e.show(),l(!1).done(t.resolve)):t.resolve(),t.promise()}function c(e){var n=$.Deferred(),t=D.length;if(e&&e.length){var i=function(o){e.eq(o).slideDown("slow",function(){if($(this).css("display","block"),o>0)return void i(o-1);t||n.resolve()})};i(e.length-1)}return t&&l(!0).done(n.resolve),n.promise()}function l(e){var n=$.Deferred();if(!D.length||x.length<N)n.resolve();else{var t=D.index(),i=D.height()<200,o=x.filter(":lt("+t+")"),a=o.length-N;if(e=!!e&&!i,0===a)n.resolve();else{var r,s=$();if(a>0)for(r=a;r>0;r--)s=s.add(x[t-r]);else for(r=Math.abs(a);r>0;r--)s=s.add(x[t+r-1]);d(s,a<0,e).done(function(){n.resolve(),x=A.find(G.newsItemSelector)})}}return n.promise()}function d(e,n,t){var i=$.Deferred(),o=function(e){n?e.insertBefore(D):e.insertAfter(D)},a=function(e,n){if(e.css("display","block"),n>0)return void r(n-1);i.resolve()},r=function(n){var i=e.eq(n);t?i.fadeOut().slideUp("slow",function(){var e=$(this);o(e),e.slideDown("slow",function(){a($(this),n)})}):(o(i),a(i,n))};return e&&e.length?r(e.length-1):i.resolve(),i.promise()}function u(e){var n=u;k.stopUpdate(n),n.req=p(M),!0!==e&&n.req.done(function(e){e&&g()}),n.req.always(function(){n.timer=setTimeout(u,B),n.req=null})}function f(){var e=f;k.stopUpdate(e),e.req=p(!M).always(function(){e.timer=setTimeout(f,q),e.req=null})}function p(e){return $.ajax({dataType:"json",url:(e?G.urlRegion:G.url)+T+"/",cache:!1,ifModified:!0}).done(function(e){e&&("newsfeed_all"!==e.nick?O=e:S=e)})}function m(){return M?O:S}function v(){var e=m();if(!e)return void setTimeout(v,300);h(e)}function h(e){var n=e&&e.items,t="";if(G.inDomItemsData={},x.detach(),x=$(),n&&n.length>0){var i=n.length-1;i>G.firstNewsCount&&(i=G.firstNewsCount),r({start:n[0].time_t,end:n[i].time_t});for(var a=0;a<=i;a++)G.inDomItemsData[n[a].id]={modif_date:n[a].modif_date,time_t:n[a].time_t};for(N>n.length&&(N=n.length),a=0;a<N;a++)t+=n[a].html;for(j.prepend(t),a=N,t="";a<=i;a++)t+=n[a].html;j.append(t),x=A.find(G.newsItemSelector),s(x.filter(":hidden")),M&&o(!1)}}function g(e){var n=m();if(n){void 0===e&&(e=!0),R(n.generation_time);var t=n.items;if(t&&t.length){var i,a,l,d=[],u=[],f=[];for(l=0;l<t.length;l++)a=t[l],a.time_t>G.dateRange.start?(d.push(a),G.inDomItemsData[a.id]&&f.push(a.id)):G.inDomItemsData[a.id]&&G.inDomItemsData[a.id].modif_date<a.modif_date&&u.push(a);for(i in G.inDomItemsData){var p=!1;for(l=0;l<t.length;l++)if(a=t[l],i==a.id){p=!0;break}p||f.push(i)}if(d.length>20)return void h(n);if(f.length){for(l=0;l<f.length;l++)$("#"+G.newsItemIdPrefix+f[l]).detach(),delete G.inDomItemsData[f[l]];x=A.find(G.newsItemSelector),d.length||c()}if(u.length)for(l=0;l<u.length;l++){var v=$("#"+G.newsItemIdPrefix+u[l].id),g=$(u[l].html);g.insertBefore(v),v.detach(),G.inDomItemsData[u[l].id]={modif_date:u[l].modif_date,time_t:u[l].time_t}}if(d.length){r({start:d[0].time_t});var w="";for(l=0;l<d.length;l++)w+=d[l].html,G.inDomItemsData[d[l].id]={modif_date:d[l].modif_date,time_t:d[l].time_t};var b=$(w).filter(G.newsItemSelector).css("display","none");j.prepend(b),x=A.find(G.newsItemSelector),s(b,!(d.length>8)&&e)}M&&o(!1)}}}function w(e){var n=w,t=[],i="",s=m();if(!s)return n.timer&&clearTimeout(n.timer),void(n.timer=setTimeout(function(){w(e)},300));var c=s.items;if(c&&c.length){e=parseInt(e,10)||20;for(var l=0;l<c.length&&!(c[l].time_t<G.dateRange.end&&(t.push(c[l]),t.length>=e));l++);if(t.length){for(r({end:t[t.length-1].time_t}),l=0;l<t.length;l++)i+=t[l].html,G.inDomItemsData[t[l].id]={modif_date:t[l].modif_date,time_t:t[l].time_t};var d=$(i);j.append(d),M&&o(!1),x=x.add(d),a()}}}function b(){var e=b,n=new Date(E),t=[n.getUTCHours(),y(n.getUTCMinutes())];C.html(t.join(":")),e.timer&&clearTimeout(e.timer),e.timer=setTimeout(function(){E+=6e4,e()},6e4)}function R(e){e&&(E=+new Date(e||E)+U),b()}function y(e){return e<10?"0"+e:e}var k,A,j,x,C,_,I,D,T,N,M,S,O,E,U,B,q,G={url:"/v8/ajax/getnewsfeed/region/",urlRegion:"/v8/ajax/getnewsfeedfiltered/region/",regionCommon:"newsfeed_all",cookieNameRegion:"rbc_newsfeed_toggle",periodUpdate:window.rbcdevelop?6e3:6e4,periodBgUpdate:window.rbcdevelop?18e3:18e4,cityBlockSelector:".js-news-feed-city",newsItemSelector:".news-feed__item",newsListSelector:".news-feed__list",newsRegionToggleSelector:".js-news-feed-region",newsTimeSelector:".js-news-feed-time-current",newsScrollSelector:".news-feed__scroll",newsBannerSelector:".g-banner__newsfeed",newsItemIdPrefix:"id_newsfeed_",firstNewsCount:30,dateRange:{},inDomItemsData:{},isListenWinFocus:!0,isShouldAnimateOnLoadPage:!1},L=!1,Z=!1;return k={init:e,stopUpdate:function(e){for(var n,t=e?[e]:[u,f],i=0;i<t.length;i++)n=t[i],n.timer&&(clearTimeout(n.timer),n.timer=null),n.req&&n.req.abort&&(n.req.abort(),n.req=null)},runUpdate:function(){L&&(u(),_.length&&f())}}}()},{}],19:[function(e,n,t){n.exports=function(){function e(e,i,a){c=e,c.params={currentTime:0,isRestartFromCurrentTime:a||!1},n(),c&&i&&i.indexOf(".m3u8")>-1&&o(i).done(function(e){e&&(r(e),t())})}function n(){c.on("loadedmetadata",function(){t();var e=c.params.currentTime;e&&setTimeout(function(){c.currentTime(parseInt(e,10)||1),e=0},400)})}function t(){for(var e,n,t=c.textTracks(),o=0;o<t.length;o++)"segment-metadata"===t[o].label&&(e=t[o]);e&&e.on("cuechange",function(){var t=e.activeCues[0];if(t&&n!==t.value.playlist){n=t.value.playlist;var o=i(n),a=l.filter('[data-id="'+o+'"]');1===a.length&&(l.removeClass("active"),a.addClass("active"))}})}function i(e){var n,t=e.indexOf("p/");return t<0&&(t=e.indexOf("p.")),t<0&&(t=e.match(/\/\d{3}\//))&&(t=t.index+4),t>0&&(n=parseInt(e.substr(t-3,3),10)),n||(n=0),n}function o(e){var n=$.Deferred();return $.get(e).done(function(e){var t=a(e);t.playlists.length>1?n.resolve(t.playlists):n.reject("manifest is empty")}),n}function a(e){var n,t,i,o=new window["m3u8-parser"].Parser;o.push(e),o.end();var a=o.manifest.playlists;for(t in a){n=a[t];var r=n.attributes;if(r&&!r.NAME&&n.uri){var s=n.uri.split(".mp4");s=s[0].split("/"),r.NAME=s[s.length-1],-1!==r.NAME.indexOf("telecast_")&&(r.NAME=r.NAME.split("telecast_")[1])}i=n.attributes.NAME,n.attributes.NAME=parseInt(i)}var c=[];if(a[0].attributes.NAME<a[a.length-1].attributes.NAME){var l=a.length-1;for(t in a)c.push(a[l-t])}return c.length>0&&(o.manifest.playlists=c),o.manifest}function r(e){var n=$(c.el_),t=$(c.controlBar.el_),i=$("<button>",{class:"vjs-control vjs-button vjs-set-quality "+u}),o=$("<span>",{class:"vjs-icon-placeholder "+d});i.html(o),t.append(i),c.controlBar.$qualityBtn&&c.controlBar.$qualityBtn.remove(),c.controlBar.$qualityBtn=i;var a=$("<div>",{class:"vjs-select-quality"});for(var r in e){var f=e[r],p=parseInt(f.attributes.NAME),m=f.uri,v=$("<div>",{class:"vjs-select-quality-item js-video-change-quality"}).text(p).data("src",m).attr("data-id",p);a.append(v)}t.append(a),l=$(".js-video-change-quality",t),i.on("click",function(e){e.stopPropagation(),!0===a.data("opened")?(a.hide(),a.data("opened",!1)):(a.show(),a.data("opened",!0))}),n.on("click",function(){a.hide(),a.data("opened",!1)}),l.on("click",s)}function s(){c.params.isRestartFromCurrentTime&&(c.params.currentTime=c.currentTime());var e=$(this).data("src");c.src({src:e,type:"application/x-mpegURL"}),c.play(),l.removeClass("active"),$(this).addClass("active")}var c,l,d="js-videojs-quality-span",u="js-videojs-quality-btn";return e}()},{}]},{},[1]);