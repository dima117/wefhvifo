/**
	*	Базовый класс, содеращий функции, используемые всеми шаблонами
	*/

if (typeof class_mlBase == 'undefined') {

	/* Using John Resig's Class implementation http://ejohn.org/blog/simple-javascript-inheritance/ */
	(function(){var initializing=false, fnTest=/xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/; this.JRClass = function(){}; JRClass.extend = function(prop) { var _super = this.prototype; initializing = true; var prototype = new this(); initializing = false; for (var name in prop) { prototype[name] = typeof prop[name] == "function" && typeof _super[name] == "function" && fnTest.test(prop[name]) ? (function(name, fn){ return function() { var tmp = this._super; this._super = _super[name]; var ret = fn.apply(this, arguments); this._super = tmp; return ret; }; })(name, prop[name]) : prop[name]; } function JRClass() { if ( !initializing && this._constructor ) this._constructor.apply(this, arguments); } JRClass.prototype = prototype; JRClass.constructor = JRClass; JRClass.extend = arguments.callee; return JRClass;};})();

	var ext_mlBase,
			class_mlBase;

	ext_mlBase = {
		/* ===== Variables ===== */
		_asyncPrefix : 'mlph',
		_sepPrefix : 'medialand_adland_div_',
		_inlinePrefix : 'medialand_adland_inline_div_',
		_pnames : ['clickTAG'],
		_defaultPlaceDir : 'global',
		_clickServerUrl : 'http://content.rbc.medialand.ru/',
		_useReferer : true,
		_httpUrl : '//content.rbc.medialand.ru/',
		_useExternalTracking : false,
		_useTrackingRandom : true,
		_useDataSpan : false,

		/* ===== Methods ===== */
		codeVariant : function(pid) {
			var r = {};
			try {
				var pd = parent.document;
				if (pd != document) {
					r.placeholder = pd.getElementById(this._asyncPrefix+pid);
					if (r.placeholder){ // placeholder found. Wow! We're in async code.
						r.document = pd;
						r.window = parent;
						r.type = 'async';
						return r;
					}
				}
			} catch(e) {}
			r.document = document;
			r.window = window;
			r.placeholder = document.getElementById(this._sepPrefix+pid);
			r.type = (r.placeholder ? 'separate' : 'inline');
			if (r.type == 'inline') {
				r.placeholder = document.getElementById(this._inlinePrefix+pid);
			}
			r.placeholder.innerHTML = "";
			return r;
		},

		/* returns flash version as an array [main,major,minor] */
		flVer : function(){
			var d, n = navigator, f = 'Shockwave Flash';
			if((n = n.plugins) && n[f]){d = n[f].description}
			else if (window.ActiveXObject) { try { d = (new ActiveXObject((f+'.'+f).replace(/ /g,''))).GetVariable('$version');} catch (e) { try { new ActiveXObject((f+'.'+f+'.6').replace(/ /g,'')); d='WIN 6,0,21,0';} catch (e) {} }}
			return d ? d.replace(/\D+/,'').split(/\D+/) : [0,0];
		},

		isIE: function(){
			return '\v'=='v';
		},

		isRetina : function(){
			var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
					(min--moz-device-pixel-ratio: 1.5),\
					(-o-min-device-pixel-ratio: 3/2),\
					(min-resolution: 1.5dppx)";
			if (window.matchMedia && window.matchMedia(mediaQuery).matches) return true;
			return false;
		},

		/* check cookie */
		cookieEnabled : function (ph) {
			var is_enabled = false;

			if (!ph.window.opera && !navigator.cookieEnabled){
				return is_enabled;
			}
			if (typeof ph.document.cookie == 'string'){
				if (ph.document.cookie.length==0) {
					ph.document.cookie = "test";
					is_enabled = ph.document.cookie == 'test';
					ph.document.cookie = '';
				} else {
					is_enabled = true;
				}
			}

			return is_enabled;
		},
		
		wndScroll : function(doc) {

			var html = doc.documentElement;
			var body = doc.body;

	 

			var top = html.scrollTop || body && body.scrollTop || 0;
			top -= html.clientTop;

	 

			var left = html.scrollLeft || body && body.scrollLeft || 0;
			left -= html.clientLeft;

			return { top: top, left: left };
		},

		proxy: function(context, fn, args) {
			var ret = function(ev) {
				ev = ev || (window ? window.event : null);
				fn.event = ev; //use it as arguments.callee.event
				return fn.apply(context, args);
			}
			return ret;
		},

		/* check element or its ancestors has display=none */
		isHidden: function(obj, win, doc) {
			if (!obj) return true;
			if (!win) win = window;
			if (!doc) doc = document;
			if (obj.getBoundingClientRect) {
				var rect = this.getOffsetRect(obj, win, doc);
				if ((0 == rect.box.top && 0 == rect.box.bottom) || this.getStyle(obj, 'display', doc) == 'none') {
					return true;
				}
			} else {
				while (obj && obj != doc) {
					if (this.getStyle(obj, 'display', doc) == 'none') return true;
					obj = obj.parentNode;
				}
			}
			return false;
		},

		/* find nearest scrollable ancestor */
		scrollParent: function(node, doc, win) {
			doc = doc || document;
			win = win || doc.defaultView || window;
			while (node) {
				try { if (/(auto|scroll)/.test( doc.defaultView.getComputedStyle(node, "").getPropertyValue('overflow-y') )) break; } catch(e) {}
				if (node.scrollHeight > node.clientHeight) break;
				node = node.parentNode;
			}
			return ((!node || node == doc.body || node == doc.documentElement)? win : node);
		},

		/* find a current position of the object */
		findPos: function(obj) {
			if (!obj)
				return {left: 0, top: 0};

			var doc = obj.ownerDocument;
			var win = this.getDocWindow(doc);

			if (obj.getBoundingClientRect) {
				// "правильный" вариант
				return this.getOffsetRect(obj, win, doc);
			} else {
				// пусть работает хоть как-то
				return this._findPos(obj);
			}

		},

		getOffsetRect: function(obj, win, doc) {
			if (!win) win = window;
			if (!doc) doc = document;

			var box = obj.getBoundingClientRect()

			var body = doc.body
			var docElem = doc.documentElement

			var box_width = box.width? box.width : box.right - box.left;
			var box_height = box.height? box.height : box.bottom - box.top;

			var scrollTop = win.pageYOffset || docElem.scrollTop || body.scrollTop
			var scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft

			var clientTop = docElem.clientTop || body.clientTop || 0
			var clientLeft = docElem.clientLeft || body.clientLeft || 0

			var top  = box.top +  scrollTop - clientTop
			var left = box.left + scrollLeft - clientLeft
			var bottom  = top + box_height;
			var right = left + box_width;

			return {
				top: Math.round(top),
				left: Math.round(left),
				bottom : Math.round(bottom),
				right : Math.round(right),

				box: {left: box.left, top: box.top, right: box.right,  bottom: box.bottom, width : box_width, height : box_height} /* element bounds in client area */
			}
		},

		getDocWindow : function(doc) {
			return doc.parentWindow || doc.defaultView;
		},


		/*old one*/
		_findPos : function(obj) {
			var res = new Object();
			res.left = 0; res.top = 0;
			if (obj) {
				var hideAgain = false;
				if ('none' == obj.style.display){obj.style.display = 'block'; hideAgain = true;}
				if (obj.offsetParent) {
					res.left = obj.offsetLeft;
					res.top = obj.offsetTop;
					while ((obj = obj.offsetParent) && (obj.style.position != 'absolute')) {
						res.left += obj.offsetLeft;
						res.top += obj.offsetTop;
					}
				}
				if (hideAgain) obj.style.display = 'none';
			}
			return res;
		},
		
		_externalTracking : function (pid, link) {
		
			if (this._useExternalTracking) {
			
				var w = window;
				try {
					var pd = parent.document;
					w = parent; 
				} catch(e) {}
				
				if (w.ml_bannermap && pid && w.ml_bannermap[pid] && 
					w.ml_track_url && /^https?:\/\//i.test(w.ml_track_url) && /#url#/.test(w.ml_track_url)) 
				{
					return w.ml_track_url.replace('#bannermap#', w.ml_bannermap[pid]).replace('#url#', link);
				}
			}
			return link;
		},

                isWindow : function (o) {

                        try {
                                if (typeof(o.constructor) === 'undefined') {
                                        return o instanceof window.constructor;
                                }
                        } catch (e) {}

                        if (o.window) {
                               return o.window === o;
                        } else {
                               return o.contentWindow;
                        }
                },


                changeProtocol : function(b) {
                        if (typeof b != 'object') return;
                        var _url = this._httpUrl.split('.').join('\\.');
                        for (var k in b) {
                                if (!b.hasOwnProperty(k)) continue;
				if (k == 'link' || k == 'more_links') continue; /* don't change protocol in banner links */
                                if (b[k] && typeof b[k] == 'object' && !this.isWindow(b[k])) {
                                        this.changeProtocol(b[k]);
                                } else if (typeof b[k] == 'string' && /^http:/i.test(b[k])) {
                                        b[k] = b[k].replace(/^http:/i, "https:");
                                }
                        }
                },

		init : function(b) {
			
			b.domain = "";
			try {
				b.domain = /^(https?:)?(\/\/[^\/]+)\/reference\?/.exec(b.link)[2];
			} catch (e) {}

			/*timeout for IE for this reason
			http://answers.microsoft.com/en-us/ie/forum/ie9-windows_7/my-internet-explorer-9-is-showing-in-the-upper/d157cebc-0880-e011-9b4b-68b599b31bf5
			*/
                        var mw = window;
                        try {
                                if (parent.document) mw = parent;
                                if (!mw) mw = window;
                        } catch(e) { mw = window; }

                        if ("https:" == mw.location.protocol) {
                                var change_protocol = this.proxy(this, this.changeProtocol, [b]);
                                change_protocol();
                        }

			if(this.isIE()) {
				var _me = this;
				setTimeout(function(){_me.init_real(b)}, 1000);
			} else {
				this.init_real(b);
			}
		},

		init_real : function(b) {
		
			/* this.trimObj(b); */
	
			b.link = this._externalTracking((b.pid ? b.pid : b.name.replace('banner', '')), b.link);

			//for dfp banners
			if (parseInt(b.rand_url) && this._useTrackingRandom) {
				b.link = this.domainParam(b.link, b.rand_url, 'link');
			}
			
			this.main(b);
			if (!b.ph)
				return;
			if(b.point_out){
				this.elemHover(b);
				b.ph.placeholder.onmouseover = this.proxy(this, this.fadeIn, [b]);
				b.ph.placeholder.onmouseout = this.proxy(this, this.fadeOut, [b]);
			}	
			if (b.brand) {
				setTimeout(this.proxy(this, this.drawBrandBanner, [b]), 200);
			}
			
			//set banner shown flag for place
			if (b.ph.placeholder.innerHTML.replace( /wait/i, '' ).replace( /\s/g, '' ).length) {
				this.markShown(b.ph, b.pid, b);
			}

			if (!b.is_dfp || !b.ph.window["destroy_"+b.pid]) b.ph.window["destroy_"+b.pid] = this.proxy(this, b.destroy, [b]);
			if (!b.is_dfp || !b.ph.window["repaint_"+b.pid]) b.ph.window["repaint_"+b.pid] = this.proxy(this, this.repaint, [b]);

			var element = b.ph.document.createElement("method");
			element.style.display = "none";
			element.innerHTML = "repaint_"+b.pid;

			if (this._useDataSpan && b.ph.placeholder.parentNode && !this._getElementsByClassName('js-ml-places-id', b.ph.placeholder.parentNode).length) {
				var _span = b.ph.document.createElement('span');
				_span.setAttribute('class', 'js-ml-places-id');
				_span.setAttribute('data-pid', b.pid);
				b.ph.placeholder.parentNode.insertBefore(_span, b.ph.placeholder);
			}

			b.ph.placeholder.insertBefore(element, b.ph.placeholder.firstChild);

			/* banner-show notification */
			this.onReady(this.proxy(this, this.notifyEvent, [b, 'show', b.ph.window]), b.ph.window);

			if (b.ph.type == 'async') { //move functions to parent window

				var frame_id = (window.frameElement ? window.frameElement.id : "" ) || 'ml_c' + b.pid;

				for (var p in window) {
					// These don't raise exceptions but can cause warnings
					if (p === "parent" || p === "top" || p === "frameElement" || p === "webkitStorageInfo" || p === "webkitIndexedDB") {
						continue;
					}
					if (typeof window[p] != 'function')
						continue;
					if (! RegExp('_'+b.pid+'$').test(p))
						continue;
					var s = "window."+ p + "= new Function(\"var w;try{if(document.all && !window.opera){w=window.frames['"+frame_id+"'].window;}else if(document.getElementById){w=document.getElementById('"+frame_id+"').contentWindow;}}catch(e){}if(w) w."+p+"();\");";
					b.ph.window.eval(s);
				}

				setTimeout('try{document.close()}catch(e){}', 1000);
			}
		},


		/* window size funcs */
		getBodyScrollTop : function (win,doc) {
			return win.pageYOffset || (doc.documentElement && doc.documentElement.scrollTop) || (doc.body && doc.body.scrollTop);
		},

		getBodyScrollLeft : function (win,doc) {
			return win.pageXOffset || (doc.documentElement && doc.documentElement.scrollLeft) || (doc.body && doc.body.scrollLeft);
		},

		winSize : function(win, doc) {
			var g = {};
			g.width = 0;
			g.height = 0;
			var de = doc.documentElement;
			try {
				if (typeof win.innerWidth != 'undefined') {
					g.width = win.innerWidth;
					g.height = win.innerHeight;
				} else if (typeof de != 'undefined' && typeof de.clientWidth != 'undefined' && de.clientWidth != 0) {
					// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
					g.width = de.clientWidth;
					g.height = de.clientHeight;
				} else {  // older versions of IE
					g.width = doc.getElementsByTagName('body')[0].clientWidth;
					g.height = doc.getElementsByTagName('body')[0].clientHeight;
				}
			} catch (e) {}
			g.scrollX = this.getBodyScrollLeft(win, doc);
			g.scrollY = this.getBodyScrollTop(win, doc);
			return g;
		},

		/*
		 * event functions
		 */
		addEvent : function(ePtr, eventType, eventFunc) {
			if (ePtr.addEventListener){
				ePtr.addEventListener(eventType, eventFunc, false);
			} else if (ePtr.attachEvent){
				ePtr.attachEvent('on' + eventType, eventFunc);
			}
		},

		removeEvent : function(ePtr, eventType, eventFunc) {
			if (ePtr.addEventListener) {
				ePtr.removeEventListener(eventType, eventFunc, false);
			} else if (ePtr.detachEvent){
				ePtr.detachEvent('on' + eventType, eventFunc);
			}
		},

		_more_links : function(link, more_links) {
		        var fv = '';
		        
		        if (typeof(more_links) != 'undefined') {
				if(/https?(:|%3A)\/\/[^\/]+\/reference(\?|%3F)/.test(link)) { // links for engine
					for(i = 0; i < more_links.length; i++){
						if (/^https?:\/\//i.test(more_links[i])) {
							var t = '&reference=' + escape(more_links[i]);
							if (this._useReferer) t = escape(t);
							for (k = 0; k < this._pnames.length; ++k) fv += '&' + this._pnames[k] + (i+2) + "=" + escape(link + t);
						}
					}
				}
				else { // links for interface
					for(i = 0; i < more_links.length; i++){
						if (/^https?:\/\//i.test(more_links[i])) {
							for (k = 0; k < this._pnames.length; ++k) fv += '&' + this._pnames[k] + (i+2) + "=" + escape(more_links[i]);
						}
					}
				}
			}
			
			return fv;
		},

		/* returns a complete swf object. No check is performed on this level */
		_swf : function(file, w, h, link, bgc, wmode, more_links, no_hit_url, flashvars, pid, scale){
			var fv = '';

			if(!no_hit_url){
				//fv += this._pnames[0] + '=' + escape(link);
				for (i = 0; i < this._pnames.length; ++i) fv += ((i == 0) ? '' : '&') + this._pnames[i] + "=" + escape(link);
			}

			if (typeof(more_links) != 'undefined') {
			        fv += this._more_links(link, more_links);
			}

			if(flashvars) {
				fv += "&" + encodeURI(flashvars);
			}
			if(pid) {
				fv += '&fc='+pid;
			}

			var src = file + (( -1 == file.indexOf('?')) ? '?' : '&') + fv;
			if ('undefined' == bgc) bgc = '#FFFFFF';
			if ('undefined' == wmode) wmode = 'opaque';
			var s = '';
			if (this.isIE()) {
				s += '<OBJECT id="ml_'+pid+file+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH='+w+' HEIGHT='+h+'>';
				s += '<PARAM NAME=movie VALUE="'+src+'">';
				s += '<PARAM NAME=flashvars VALUE="'+fv+'">';
				s += '<PARAM NAME=wmode VALUE="'+wmode+'">';
				s += '<PARAM NAME=quality VALUE=high>';
				s += '<PARAM NAME=menu VALUE=false>';
				s += '<PARAM NAME=play VALUE=true>';
				s += '<PARAM NAME=loop VALUE=true>';
				s += '<PARAM NAME=align VALUE=top>';
				s += '<PARAM NAME=allowscriptaccess VALUE=always>';
				if(scale) s += '<PARAM NAME=scale VALUE="' + scale + '">';
				if(wmode == 'transparent' && bgc) s += '<PARAM NAME=bgcolor VALUE="' + bgc + '">';
			}
			s += '<EMBED src="'+src+'" menu=false ' + (( wmode == 'transparent' && bgc)? ('bgcolor="' + bgc + '"') : '') + 'flashvars="'+fv+'" wmode="'+wmode+'" align=top quality=high '+ (scale ? 'scale='+scale : '') + ' swLiveConnect=FALSE allowscriptaccess=always play=true loop=true WIDTH='+w+' height='+h+' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">';
			s += '</EMBED>';
			if (this.isIE()) s += '</OBJECT>';
			s += '<BR/>';
			return s;
		},

		_html5: function(html5_url, w, h, link, bgc, ph, pid, more_links, postfix) {
			var canvas = ph.document.createElement('canvas');

			if (!canvas || typeof canvas.getContext != 'function' || !/^https?:\/\/.+/i.test(html5_url)) {
				return null;
				}

			var o = ph.document.createElement('iframe');
			var rnd = Math.round(Math.random()*100000);

			o.id = "html5_" + pid + (postfix ? postfix : ("_" + rnd));
			o.frameBorder = 0;
			o.scrolling = 'no';
			o.marginWidth = 0;
			o.marginHeight = 0;
			o.width  = w;
			o.height = h;

			o.style.width  = '' + w + ((w.toString().indexOf('%') > -1) ? '' : 'px');
			o.style.height = '' + h + ((h.toString().indexOf('%') > -1) ? '' : 'px');
			o.style.display = 'inline-block';
			o.style.border = '0';
			o.style.margin = '0';

			if (bgc) o.style.backgroundColor = bgc || 'transparent';

			var iframe_src = html5_url + ((html5_url.indexOf('?') == -1) ? '?' : '&') + 'fc=' + pid + '&r' + rnd + '=' + rnd;
			for (i = 0; i < this._pnames.length; ++i) iframe_src += '&' + this._pnames[i] + "=" + escape(link);
			iframe_src += this._more_links(link, more_links);

			return { iframe : o, src : iframe_src };
		},

		_gif : function(file, w, h, link, no_hit_url, pid, postfix){
			var s = '';
			var imgId = pid ? ('img' + pid + (postfix? postfix : '')) : '';
			s += no_hit_url ? '' : '<a href="'+link+'" target=_blank>';
			s += '<img ' + (imgId? 'id="' + imgId + '"' : '') + ' style="display:inline; height : '+h+'px; width : '+w+'px;" src="'+file+'" width='+w+' height='+h+' alt="" border=0>';
			s += '<br />';
			s += no_hit_url ? '' : '</a>';
			return s;
		},


		/* Now perform checks and return a table with content OR nothing */
		//obj : function(swf, gif, w, h, link, fv, bgc, wmode, more_links, gif_w, gif_h, b_center, no_hit_url, flashvars){
		obj : function(b) {

			var ua = navigator.userAgent;
			var devices = {
			    androidPhone : /Android(?=.*?(Mobile))/i.test(ua),
			    adroidTablet : /(Android(?=.*?tab)|Android 3|Android(?!.*?(phone|Mobile)))/i.test(ua),
			    iPhone       : /iphone;/i.test(ua),
			    iPad         : /ipad;/i.test(ua),
			    winPhone     : /Windows Phone|WPDesktop|IEMobile|WP7/i.test(ua)
			};
			
			var isMobile = (devices.androidPhone || devices.iPhone || devices.winPhone);
			var isTablet = (devices.adroidTablet || devices.iPad);

			var s = '<table border="0" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0;'+((typeof(b.banner_align_center) != "undefined" && b.banner_align_center) ? 'text-align:center;' : '')+' border:none; width: 100% !important;"><tr style="margin: 0; padding: 0; border:none"><td style="margin: 0; padding: 0; border:none; line-height:0;'+((typeof(b.banner_align_center) != "undefined" && b.banner_align_center) ? 'text-align:center;' : '')+'">';
			if ((b.fv <= parseInt(this.flVer()[0])) && /^https?:\/\/.*/i.test(b.swf) && !(isMobile || isTablet)) {
				s+= this._swf(b.swf, b.w, b.h, b.link, b.bgc, b.wmode, b.more_links, b.no_hit_url, b.flashvars, b.pid);
			} else {
				//if (0 != b.gif.toUpperCase().indexOf('HTTP://')) return '';
				if (!/^https?:\/\//i.test(b.gif)) return '';
				if (typeof(b.gif_w) != "undefined" && typeof(b.gif_h) != "undefined") {
					s += this._gif(b.gif, b.gif_w, b.gif_h, b.link, b.no_hit_url, b.pid);
				} else {
					s += this._gif(b.gif, b.w, b.h, b.link, b.no_hit_url, b.pid);
				}
			}
			
			s += '</td></tr></table>';
			return s;
		},

		/*по домену определяет параметр случайного числа и ставит новое значение 
 		для защиты от кеширования*/
		domainParam : function (url, rand_url, urlType) {

			if (!rand_url) return url;
		
			function changeRandom(url, param, rand_url) {
				var newUrl;

				var re = new RegExp(param + "=[^&\\?;]+");
				var newRnd = param + "=" + rand_url;
				if (re.test(url)) {
					newUrl = url.replace(re, newRnd);
				} else {
					url += (url.indexOf('?') != -1) ? (/\?$/.test(url) ? '' : '&') : '?';
					newUrl = url + newRnd;
				}
				return newUrl;
			}
		
			var rndInt = parseInt(rand_url) ? rand_url : rand_url.split(/=/)[1];
			var changeUrl = url.replace(/[?&]$/, '');
			var pixelsDomain = {
				'pr'            :  /^https?:\/\/.*adfox\.ru\//,                  
				//'ord'           :  /^https?:\/\/.*(doubleclick|dclick)\.[a-z]{2,6}\//,
				//'transactionID' :  /^https?:\/\/.*(doubleclick|dclick)\.[a-z]{2,6}\//,
				'rnd'           :  /^https?:\/\/.*adriver\.ru\//                
			};
			
			var convertFlag = false;
			if (urlType == 'link') {
				if (/^https?:\/\/.*adriver\.ru\//i.test(changeUrl)) {
					changeUrl = changeRandom(changeUrl, 'rnd', rndInt);
				}
			} else {
				var isChanged = false;
				for (var key in pixelsDomain) {
					if (pixelsDomain[key].test(changeUrl)) {
						if (/&#([0-9]{1,4});/.test(changeUrl)) {
							convertFlag  = true;
							changeUrl = this.fromHtmlEntities(changeUrl);
						}
						changeUrl = changeRandom(changeUrl, key, rndInt);
						if (convertFlag) {
							convertFlag  = false;
							changeUrl = this.toHtmlEntities(changeUrl);
						}
						isChanged = true;
					}
				}
				if (!isChanged && rndInt != rand_url) {
					changeUrl += (changeUrl.indexOf('?') == -1 ? '?' : '&') + rand_url;
				}
			}
			return changeUrl;
		},

		callEvent : function(z, rand_url, ph) {
			var imgHandle;

			if(!this.cookieEnabled(ph)){
				return;
			}

			var doc = ph.pixels ? (ph.pixels.ownerDocument || ph.document) : ph.document;

			for (var i in z) {
				if (!z.hasOwnProperty(i)) continue;
				if ( /^https?:\/\//i.test(z[i]) ) {
					imgHandle = doc.createElement("img");
					imgHandle.style.cssText += ';visibility:hidden !important;position:absolute !important;top:-2000px;left:-2000px;';
					/*imgHandle.style.visibility = "hidden";
					imgHandle.style.position = "absolute";*/
					imgHandle.style.width = "0px";
					imgHandle.style.height = "0px";
					z[i] = z[i].replace('$RND', Math.round(Math.random()*1000000));

					if (rand_url) {
						if (this._useTrackingRandom) {
							z[i] = this.domainParam(z[i], rand_url);
							imgHandle.src = z[i];
						} else {
							imgHandle.src = z[i] + ((z[i].indexOf('?') == -1 ? '?' : '&') + rand_url);
						}
					} else {
						var rnd = Math.round(Math.random()*100000000);
						imgHandle.src = z[i] + ((z[i].indexOf('?') == -1 ? '?' : '&') + '_r' + rnd + '=' + rnd);
					}

					if (ph.pixels) {
						ph.pixels.appendChild(imgHandle);
					} else {
						ph.placeholder.appendChild(imgHandle);
					}
				}
			}
		},

		mousePos : function(evt, ph) {
			var pos = {};
			if (evt.pageX) pos.x = evt.pageX;
			else if (evt.clientX) pos.x = evt.clientX + (ph.document.documentElement.scrollLeft ? ph.document.documentElement.scrollLeft : ph.document.body.scrollLeft);
			else pos.x = null;
			if (evt.pageY) pos.y = evt.pageY;
			else if (evt.clientY) pos.y = evt.clientY + (ph.document.documentElement.scrollTop ? ph.document.documentElement.scrollTop : ph.document.body.scrollTop);
			else pos.y = null;
			return pos;
		},

		/* cookie funcs */
		setCookie : function(doc, id, value, timeout) { // timeout in minutes
				if (!timeout) return;
				var now = new Date();
				var expire = new Date(now.getTime() +  timeout * 60 * 1000);
				exp = expire.toGMTString();
				id = id.split('%cookie_postfix%').join('');
				doc.cookie = id + '=' + escape(value) + '; path=/; expires=' + exp;
		},

		getCookie : function(doc, name) {
				var c=doc.cookie;
				if (!c.match(name+'=')) return '';
				var i1=c.indexOf(name+'=',0);
				var i2=c.indexOf(';',i1);
				if (i2 < 0) i2=c.length;
				return unescape(c.substring(i1+name.length+1,i2));
		},

		applyStyles : function(o, styles) {
			if (!o) return;

			var camelStyle = function(prop) {
			    if (!/\-/.test(prop)) return prop;
			    return prop.replace(/(\-.)/g, function(p) {return p.toUpperCase().substr(1);}).replace(/^./, function(p) {return p.toLowerCase()});
			};
			
			var cssStyle = function(prop) {
			    if (!/[A-Z]/.test(prop)) return prop;
			    return prop.replace(/[A-Z]/g, function(p) {return "-" +p.toLowerCase();} ).replace(/^((o|moz|ms|webkit)\-)/, "-$1");
			};

			for (prop in styles) {
				if (!styles.hasOwnProperty(prop)) continue;
				try {
					var _prop = camelStyle(prop);
					o.style[_prop]  = styles[prop];
				} catch (e) {};
				try {
					var _prop = cssStyle(prop);
					o.style.cssText += ';' + _prop + ':' + styles[prop] + ';';
				} catch(e) {};
			}
		},

		applyStylesToPlaceholder : function(p, styles){
			if(typeof(styles) == "object") {
				switch(styles.width) {
					
					case "100%":
					case "auto":
						break;
					case "":
						styles.width = (p.document.compatMode == "BackCompat" ? "100%" : "auto");
						break;
					default:
						styles.width = (styles.width.indexOf('%') == -1 ? (styles.width + 'px') : styles.width);
						break;
				}

				this.applyStyles(p.placeholder, styles);
			}
		},

		mlAddCss : function (b, css_link) {
			link = b.ph.document.createElement("LINK");
			link.setAttribute("href", css_link);
			link.setAttribute("type", "text/css");
			link.setAttribute("rel", "stylesheet");
			if (b.ph.document.createStyleSheet) {
			  b.ph.document.createStyleSheet(css_link);
			} else {
				b.ph.document.getElementsByTagName("head")[0].appendChild(link);
			}
		},

		/*teaser funcs*/

		toHtmlEntities : function (text) {
			var new_text = "";
			var str_len = text.length;
			for (i=0; i < str_len; i++) {
				iCode = text.charCodeAt(i);
				new_text += (iCode > 256? "&#" + iCode + ";": text.charAt(i));
			}
			return new_text;
		},

		fromHtmlEntities : function (text) {
			var new_text = "";
			var str_len = text.length;
			for (i=0; i < str_len; i++) {
				if((uni_val = /^&#([0-9]{1,4});/.exec(text.substr(i,7)))){
					new_text += String.fromCharCode(uni_val[1]);
					i += uni_val[1].length + 2;
				}
				else{
					new_text += text.charAt(i);
				}
			}
			 
			return new_text;
		},

		toHtmlEntitiesBack : function (text) {
			return this.fromHtmlEntities(text);
		},

		teaserTextCut : function(text, n) {
			var str_len = text.length;
			var new_text = "";
			for (i=0; ((i < str_len) && n); i++) {
				var a = text.substr(i).match(/^<[a-z]+\s?[^>]*>/i);
				if (a && a[0] && a[0].length) {
					new_text += a[0];
					i += (a[0].length - 1);
				}
				else if(text.substr(i,5) == "&shy;") {
					new_text += "&shy;";
					i += 4;
				} 
				else if(text.substr(i,7) == "&laquo;") {
					new_text += "&laquo;";
					i += 6;
				}
				else if(text.substr(i,7) == "&raquo;") {
					new_text += "&raquo;";
					i += 6;
				} else {
					new_text += text.charAt(i);
					n--;
				}
			}

			return new_text;
		},

		getTeaserPh : function (pid) {
			var r = new Object();
			try {
				var pd = parent.document;
				if (pd != document){
					r.placeholder = pd.getElementById("mlph" + pid);
					if (r.placeholder){ // placeholder found. Wow! We're in async code.
						r.document = pd;
						r.window = parent;
						r.type = 'async';
						return r;
					}
				}
			} catch(e) {}

			r.document = document;
			r.window = window;
			r.type = "inline";
			r.placeholder = document.getElementById('mlph'+pid);

			return r;
		},

		triggerEvent : function(b, evt_name) {
			if(b.events && b.events[evt_name]) {
				this.callEvent([b.events[evt_name].replace("#rid#", parseInt(Math.random()*10000000))], "", b.ph);
			}
		},

		checkColor : function(c){ // make sure color is exactly in #XXXXXX form
			if ((typeof(c) == 'undefined') || (c.indexOf('#') != 0)) return '#FF0000'; // default color is red
			while (c.length < 7) c = c + '0';
			var nc = parseInt(c.substring(1),16);
			if (isNaN(nc)) return '#FF0000';
			nc = nc.toString(16);
			while (nc.length < 6) nc = '0' + nc;
			return '#'+nc;
		},
		
		destroy : function(banner) {
			if (!banner || !banner.ph || !banner.ph.placeholder || !banner.ph.placeholder.nodeType) return false;
			banner.ph.placeholder.setAttribute("style", "");
			banner.ph.placeholder.removeAttribute("style");
			var length = banner.ph.placeholder.childNodes.length;
			if (!length) return false;
			for (var i=0; i<length; i+=1) {
				banner.ph.placeholder.removeChild(banner.ph.placeholder.childNodes[0]);
			}
			banner.ph.window.ml_places[banner.pid] = false;

			/* banner-hde notification */
			this.onReady(this.proxy(this, this.notifyEvent, [banner, 'hide', banner.ph.window]), banner.ph.window);
		},
		
		markShown : function(ph, pid, b) {
			if ( arguments.length < 2 || typeof ph != "object" || !parseInt(pid) ) return false;
			if (typeof ph.window.ml_places == 'undefined')
				ph.window.ml_places = {};
			try {
				var width = ph.placeholder.style.width || this.getStyle(ph.placeholder,'width',ph.document);
				var height = ph.placeholder.style.height || this.getStyle(ph.placeholder,'height',ph.document);
				
				if (width == 'auto')
					width = '100%';
					
				var bid;
				
				if(b)
				{
					if(b.bid)
						bid = b.bid;
					else
						bid = /bid(?:=|%3D)([0-9]+)/.exec(b.link)[1];
				}
				else
				{
					bid = /bid(?:=|%3D)([0-9]+)/.exec(ph.placeholder.getElementsByTagName('a')[0].href)[1];
				};	
				
				
				ph.window.ml_places[pid] = {};
				ph.window.ml_places[pid].width = width;
				ph.window.ml_places[pid].height = height;
				ph.window.ml_places[pid].bid = bid;
				if (typeof b == 'object') ph.window.ml_places[pid]["repaint_"+pid] = this.proxy(this, this.repaint, [b]);
				ph.window.ml_places[pid].ph = ph.placeholder;
				
				return true;
				
			} catch (e) {}
			
			return false;
		},

		notifyEvent : function(b, type, w) {
			var event;
			if (!w) w = window;
			try {
				var data = {'pid' : b.pid, 'type' : type};
				if (b.ph.window["repaint_"+b.pid] && 'show' == type) {
					data['refresh'] = b.ph.window["repaint_"+b.pid];
				}
				/* find banner location name */
				try {
					var node = b.ph.placeholder;
					while (node) {
						if (/(^|\s+)banner(\s+|$)/.test(node.className)) {
							if (node.getAttribute('data-banner-id')) {
								data['placeName'] = node.getAttribute('data-banner-id');
							}
							break;
						}
						node = node.parentNode;
					}
				} catch(e) {}
				if (typeof w.CustomEvent == 'function') { /* modern browsers */
					event = new w.document.defaultView.CustomEvent('banner', { 'bannerData': data });
					event.bannerData = data;
				} else if (typeof w.Event == 'function') {
					event = new w.Event('banner');
					event.bannerData = data;
				} else if (typeof w.document.createEvent == 'function') { /* IE 9+ */
					event = w.document.createEvent('Event');
					event.initEvent('banner', true, true);
					event.bannerData = data;
				}
				if (event) w.document.dispatchEvent(event);
			} catch (e) {}
		},
		
		repaint : function(banner) {
			try {
				if (banner.disable_refresh) return;
				if (banner.ph.window.PREVENT_REPAINT) return;
			} catch (e) {}
			this.destroy(banner);
			if (banner.is_dfp) {
				if (typeof banner.dfp_getCode == 'function') {
					banner.dfp_getCode(banner.ph.window);
				}
			} else {
				this.getCodeUrl(banner, function() {
					var script = document.createElement("script");
					script.setAttribute("src", this.getAttribute("src").replace(/&_r\d+=\d+/, '') + '&_r' + Math.round(Math.random()*1000) + '=' + Math.round(Math.random()*1000));
					this.parentNode.replaceChild(script, this);
				});
			}			
		},
		
		getCodeUrl : function(banner, callback) {
			var scripts = document.scripts,
				re,
				rid,
				re2;
			
			if (banner.domain) {
				re = new RegExp(banner.domain+".*[&\?]pid="+parseInt(banner.pid)+"[^\d]?");
			} else {
				re = new RegExp("[&\?]pid="+parseInt(banner.pid)+"[^\d]?");
			}

			if (rid = banner.pid.toString().split('_')[1]) { //for multy codes based on banner.pid='pid_rid'
			    re2 = new RegExp("[&\?]rid="+parseInt(rid)+"[^\d]?")
			}

			for (var i=0, length=scripts.length; i<length; i+=1) {
				var src = scripts[i].getAttribute("src");
				if ( src && re.test(src) && (!re2 || re2.test(src))) {
					if (callback instanceof Function) {
						callback.apply(scripts[i]);
					}
					return src;
				}
			}
		},
		
		insertAfter : function (elem, refElem) 
		{
			var parent = refElem.parentNode;
			var next = refElem.nextSibling;
			if (next)
				return parent.insertBefore(elem, next);
			else 
				return parent.appendChild(elem);
		},
		_addBrandElements : function(b) {
			if (b.brand.parent) {
				var parent = b.brand.parent;
				
			for (var i in parent) {
				var pref, ident = i;
				if (i.charAt(0) == '#' || i.charAt(0) == '.') {
					pref = i.charAt(0);
					ident = i.substr(1,i.length);
				}
				var parent_new_elem = parent[i];
				var create_new_elem = b.ph.document.createElement(parent_new_elem.elem);	
				if (parent[i].id) {
					create_new_elem.setAttribute('id',parent[i].id);
				}
				if (parent[i].className) {
					create_new_elem.setAttribute('class',parent[i].className);
				}
				if (parent[i].href) {
					create_new_elem.setAttribute('href',parent[i].href);
				}
				if (parent[i].target) {
					create_new_elem.setAttribute('target',parent[i].target);
				}
				if (parent[i].innerHTML) {
					create_new_elem.innerHTML = parent[i].innerHTML;
				}
				var parent_elem = this._findElements(b.ph.window, b.ph.document, pref, ident)[0];
				if(parent_elem) {
					if (parent[i].insert_before) {
						parent_elem.insertBefore(create_new_elem, parent_elem.firstChild);
					} else {
						parent_elem.appendChild(create_new_elem);
					}
				}

				this._pageElementStyle(b.ph.window, b.ph.document,'#', parent[i].id, parent[i].styles);
				}
			}
		},	
		drawBrandBanner : function(b) {
			
			function findAttr(el, val) {
				if(typeof el === 'object') {					
					for(key in el) {
						if(typeof el[key] === 'object') {							
							var f = findAttr(el[key], val);
							if(f) return f;
						} else if(key == val)							
							return el[key];
					};
				} else if(key == val)			
					return el[key];
				
				return false;
			};
			
			var mWidth = parseInt(b.brand.maxWidth || findAttr(b.brand.page, 'maxWidth'));	//compatibility with old templates
			var mWidthHD = parseInt(b.brand.maxWidthHD || mWidth);
			
			if(!b.brand.page)
				b.brand.page = {};
			
			if(!b.brand.page.body)
				b.brand.page.body = {};
			
			b.brand.page.body['max-width'] = mWidth + 'px !important';
			b.brand.page.body['margin-left'] = 'auto !important';
			b.brand.page.body['margin-right'] = 'auto !important';
			
			
			var dbg = this.getStyle(b.ph.document.body, 'background', b.ph.document);
			if(dbg == '') 	//if ie in most situations
				dbg = this.getStyle(b.ph.document.body, 'background-color', b.ph.document) + ' ' +
						this.getStyle(b.ph.document.body, 'background-image', b.ph.document).split('"').join('') + ' ' +	//del quotes
						this.getStyle(b.ph.document.body, 'background-repeat', b.ph.document) + ' ' +
						this.getStyle(b.ph.document.body, 'background-position', b.ph.document) + ' ' +
						this.getStyle(b.ph.document.body, 'background-attachment', b.ph.document);
			
			var dbg_color = '';
			if(/[\s]*0[,\s]*0[,\s]*0[,\s]*0/.test(dbg) || /transparent/.test(dbg))	//prevent transparent background
				var dbg_color = 'background-color:white;';

			var div = b.ph.document.createElement("div");
			var bheight = (b.brand.height && parseInt(b.brand.height, 10)) ? parseInt(b.brand.height) : 0;
			var height = b.brand.h ? 'height:' + b.brand.h + ';' : 'height:100%;';	//trash code
			var width = b.brand.w ? 'width:' + b.brand.w + ';' : 'width:100%;';	//trash code
			var innerHTML = '';
			var top_shift = Math.max(bheight, b.h);
			
			if(!b.brand.brand_shift)
				b.brand.brand_shift = 0;
			
			var flash = false;
			if ((b.fv <= parseInt(this.flVer()[0])) && b.brand.swf && (0 == b.brand.swf.toUpperCase().indexOf('HTTP://'))) {	//draw brand flash
				flash =  true;
				innerHTML += '<div id="brand_' + b.pid + '" style="z-index:0;display:block;position:fixed;' + width + height + ';left:0px; background-color: ' + (b.brand.bgcolor ? b.brand.bgcolor : 'transparent' ) + ';">';
				innerHTML += '<div style="margin-top:' + b.brand.brand_shift + 'px">' + this._swf(b.brand.swf, b.brand.swf_width + (b.brand.swf_width.indexOf('%') < 0 ? 'px' : ''), b.brand.swf_height + (b.brand.swf_height.indexOf('%') < 0 ? 'px' : ''), b.link, b.brand.bgcolor ? b.brand.bgcolor : 'transparent', 'opaque', b.more_links, b.no_hit_url, b.flashvars, b.pid, 'noScale') + '</div>';
				innerHTML += '</div>';
			} else {	//draw brand image
				innerHTML += '<div id="brand_' + b.pid + '" style="z-index:0;display: block; background-image: url(' + b.brand.gif + '); position:fixed;width:100%;height:100%;background-attachment: scroll;left:0px; background-color: ' + (b.brand.bgcolor ? b.brand.bgcolor : 'transparent' ) + '; background-position: 50% 0; background-repeat: no-repeat;">';
				if(!b.no_hit_url)
					innerHTML += '<a href="' + b.link + '" style="display:block;width:100%;height:100%;" target="_blank" ></a>';
				innerHTML += '</div>';
			}
			
			
			
			innerHTML += (b.no_hit_url ? '' : '<a href="'+b.link+'" target="_blank" >') + '<div style="height: ' + bheight + 'px;"></div>' + (b.no_hit_url ? '' : '</a>');
			//fixed part of body substitute, used to implement body background
			innerHTML += '<div id="body_substitute0" style="display:block;position:fixed;width:100%;height:100%;max-width:' + mWidth + 'px;z-index:0;background:' + dbg + ';' + dbg_color + '" ></div>';
			//scrollable part of body substitute(absolute position), used to cover brand head on scroll
			innerHTML += '<div id="body_substitute" style="top:' + top_shift + 'px;position:absolute;width:100%;height:' + top_shift*2 + 'px;max-width:' + mWidth + 'px;z-index:0;background:' + dbg + ';' + dbg_color + '"></div>';
			/*
				*************************	
				should be added in future
				
				when body contains image, the scroll event should be added on body_substitute and shift background-image
				to make fake scroll effect, cause body_substitute has fixed position
				*************************
			*/
			div.innerHTML = innerHTML;
			div.style.position = 'relative';
			
			
			var els = b.ph.document.body.children;
			for(var i=0; i<els.length; i++)	//hack to make clickable site elements
				els[i].style.position = 'relative';

			//this.applyStyles(div, b.brand.styles);
			
			var brandResize = function () {
				var wWidth = b.ph.window.innerWidth
				
				if(wWidth > mWidthHD)
					b.ph.document.body.style.maxWidth = mWidthHD + 'px';
				else 
					b.ph.document.body.style.maxWidth = mWidth;
			};
			
			this.addEvent(b.ph.window, 'resize', brandResize);
			
			//trigger event
			setTimeout(function() {
				brandResize();
			},500);
			
			this.addEvent(b.ph.window,'scroll',function() {
				
				var div = b.ph.document.getElementById('body_substitute');
				var rec = div.getBoundingClientRect();
				var len = top_shift - rec.top;

				div.style.height = (top_shift*2 + len) + 'px';
				
				if(flash) {
					try {
						b.ph.document.getElementById('brand_'+b.pid).getElementsByTagName('div')[0].style.marginTop = (b.ph.document.body.getBoundingClientRect().top + b.brand.brand_shift) + 'px';
					} catch(e){};
				}
			});
			
			if(b.ph.document.body.firstChild.id) {
				if(b.ph.document.body.firstChild.id.indexOf('full_') == 0)
					this.insertAfter(div, b.ph.document.body.firstChild);
				else
					b.ph.document.body.insertBefore(div, b.ph.document.body.firstChild);
			}
			else
				b.ph.document.body.insertBefore(div, b.ph.document.body.firstChild);
				
			//add new brand elements to page if needed
			this._addBrandElements(b);	

			if (b.brand.page) { // page class/element styles
				var page = b.brand.page,
				elements = ident = null,
				reg = new RegExp("([#|.])?(.*)");

				for (var i in page) if ((ident=i.match(reg)).length==3)
					this._pageElementStyle(b.ph.window, b.ph.document, ident[1], ident[2], page[i]);
			}
		},
		
		_getElementsByClassName : function(className, node) {
			if (!node) node = document;
			if (document.getElementsByClassName)
				return node.getElementsByClassName(className);
			
			var list = node.getElementsByTagName('*'),
		            classArray = className.split(/\s+/),
	                    result = [];
	                
	                for(var i = 0, length = list.length; i < length; ++i) {
	            		for(var j = 0, classes = classArray.length; j < classes; ++j)  {
	            			if(list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
	            				result.push(list[i]);
	            				break;
	            			}
	            		}
	                }
	                return result;
			                            
		},

		_pageSubElementStyle : function(element, ident, styles) {
			try {
				var prefix = ident.substr(0, 1);
				for (var i=0, l=element.childNodes; i<l.length; i++) {
					try {
						if (l[i].childNodes.length) {
							this._pageSubElementStyle(l[i], ident, styles);
						}
					} catch (ee) {};
					
					var apply = false;
					switch (prefix) {
						case '#':
							if (l[i].getAttribute && l[i].getAttribute['id'] === ident.substr(1)) {
								apply = true;
							}
							break;
						case '.':
							if (l[i].className && RegExp('(^| )'+ident.substr(1)+'( |$)', 'i').test(l[i].className)) {
								apply = true;
							}
							break;
						default:
							if (l[i].tagName && RegExp('^'+ident+'$','i').test(l[i].tagName)) {
								apply = true;
							}
							break;
					}
					if (apply) {
						this.applyStyles(l[i], styles);
					}
				}
			} catch (e) {};
		},
		
		_pageElementStyle : function(win, doc, prefix, ident, styles) {
			var elements = null;
			var subident = ident.split(' ')[1];
			ident = ident.split(' ')[0];

			var f = setInterval(this.proxy(this, function() {
				var _subident = subident;
				elements = this._findElements(win, doc, prefix, ident);
				if (elements.length==0) return;
				
				for (var element=0, length=elements.length; element<length; ++element) {
					if (_subident) {
						this._pageSubElementStyle(elements[element], _subident, styles);
					} else {
						this.applyStyles(elements[element], styles);
					}
				}
				
				try {
					if (typeof win.$ == 'function') win.$(win).trigger('resize');
					this.triggerCustomEvent('UIEvents', 'resize', win, doc);
				} catch(e) {}
				
				clearInterval(f);
			}, []), 50);
			setTimeout(function() {clearInterval(f);}, 5000);
		},
		_findElements : function(win, doc, prefix, ident) {
			var elements = null;
			
			switch (prefix) {
				case "#":
					elements = [];
					if ( doc.getElementById(ident) ) elements.push( doc.getElementById(ident) );
					break;
				case ".":
					elements = this._getElementsByClassName(ident, doc);
					break;
				default:
					elements = doc.getElementsByTagName(ident);
					break;
				}
			return elements;
		},
		getStyle : function (oElm, strCssRule, doc){
			var strValue = "";
			if (!doc) doc = document;
			if (doc.defaultView && doc.defaultView.getComputedStyle){
				strValue = doc.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
			}
			else if(oElm.currentStyle){
				strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
					return p1.toUpperCase();
				});
				strValue = oElm.currentStyle[strCssRule];
			}
			return strValue || '';
		},

		trim : function (str) {
			return (typeof str == 'string') ? str.replace(/^\s+|\s+$/g, '') : str;
		},
		
		trimObj : function (b) {
			for (var i in b) {
				if (!b.hasOwnProperty(i)) continue;
				if (b[i] && typeof b[i] == 'object') {
					this.trimObj(b[i]);
				} else {
					b[i] = this.trim(b[i]);
				}
			}	
		},

		elemHover : function (b) {
			var h_div_exist = b.ph.document.getElementById('medialand_banner_hover');
			if(h_div_exist == null) {
				var hover_div = b.ph.document.createElement('div');
				hover_div.setAttribute('id','medialand_banner_hover');
				hover_div.style.position = "fixed !important";
				hover_div.style.setProperty("position","fixed","important");
				hover_div.style.top = "-1px";
				hover_div.style.left = "0px";
				hover_div.style.width = "100%";
				hover_div.style.height = "100%";
				hover_div.style.display = "none";
				hover_div.style.zIndex = "9999";
				hover_div.style.borderTop =  "1px solid #888";
				hover_div.style.backgroundImage = 'url("http://filearchive.cnews.ru/img/reviews/2014/03/19/overlay.png")';
				b.ph.placeholder.parentElement.insertBefore(hover_div, b.ph.placeholder.parentElement.firstChild);
			}
		},
		fadeIn : function (b){	
			var hoverElem = b.ph.document.getElementById('medialand_banner_hover');
			if(hoverElem) {
				hoverElem.style.display = "block";
				b.ph.placeholder.style.position = "relative";
				b.ph.placeholder.style.zIndex = "99999999";
			}
		},
		fadeOut : function (b){
			var hoverElem = b.ph.document.getElementById('medialand_banner_hover');
			if(hoverElem) {
				hoverElem.style.display = "none";
				b.ph.placeholder.style.zIndex = "";
			}
		},

		_callOnReady : function(w) {
			w = w || window;

			var handlers = w.ml_readyHandlers;

			for (var i=0; i < handlers.length; ++i) {
				if ('function' == typeof handlers[i]) {
					w.setTimeout(handlers[i], 50);
				}
			}
			w.ml_readyHandlers.splice(0, handlers.length);

			if (arguments.callee.event && w.ml_onReadyHandler) {
				this.removeEvent(w, 'load', w.ml_onReadyHandler);
				this.removeEvent(w.document, 'DOMContentLoaded', w.ml_onReadyHandler);
				this.removeEvent(w.document, 'readystatechange', w.ml_onReadyHandler);
			}
		},

		onReady : function(handler, w) {
			w = w || window;

			if (typeof handler != 'function') {
				return;
			}

			if (!w.ml_readyHandlers || !w.ml_readyHandlers.length) {
				w.ml_readyHandlers = [];
				w.ml_onReadyHandler = this.proxy(this, this._callOnReady, [w]);
			}
			w.ml_readyHandlers.push(handler);

			if (w.document.readyState === "complete" || w.document.readyState === "interactive") {
				w.setTimeout(w.ml_onReadyHandler, 50);
				return;
			} else {
				if (!w.ml_isReady) {
					this.addEvent(w, 'load', w.ml_onReadyHandler);
					this.addEvent(w.document, 'DOMContentLoaded', w.ml_onReadyHandler);
					this.addEvent(w.document, 'readystatechange', w.ml_onReadyHandler);
					w.ml_isReady = true;
				}
			}
		},

		isVisible : function(b, win) {
			if (!win) win = b.ph.window;
			if (!b) return false;
			var r;
			try {
				if (b.ph.placeholder.style.display == "none") {
					b.cssFlag = true;
					b.cssText = b.ph.placeholder.style.cssText;
					b.ph.placeholder.style.display = "";
				}

				r = this.getOffsetRect(b.ph.placeholder, b.ph.window, b.ph.document);  

			        if (r.box.bottom == r.box.top) { // KOCTblJIb to avoid zero div height
					if (!b.cssFlag) {
						b.cssFlag = true;
						b.cssText = b.ph.placeholder.style.cssText;
					}
					b.ph.placeholder.style.height = ((b.h && b.h.indexOf('%') == -1) ? b.h : (b.gif_h ? b.gif_h : '90px'));
					r = this.getOffsetRect(b.ph.placeholder, b.ph.window, b.ph.document);
			        }
			        
				/* decrese height/width if height/width > 0 */
				if (r.box.right >= 2 + r.box.left) --r.box.right;
				if (r.box.bottom >= 2 + r.box.top) --r.box.bottom;
	
				var is_toplevel_element = false;
				
				if (win.document.elementFromPoint) {
				
					var points =  [
						{'x':r.box.left, 'y':r.box.top}, {'x':r.box.right, 'y':r.box.top}, {'x':r.box.left,'y':r.box.bottom}, {'x':r.box.right,'y':r.box.bottom},
						{'x':(r.box.left+r.box.right)/2, 'y':r.box.top}, {'x':(r.box.left+r.box.right)/2, 'y':r.box.bottom}, {'x':r.box.left,'y':(r.box.top+r.box.bottom)/2}, {'x':r.box.right,'y':(r.box.top+r.box.bottom)/2}
					];

				        /* check if banner div is top element at least one div corner === check zIndex */
				        for (var p = 0, pl = points.length; p < pl; ++p) {
				                try {
				                        var pageElem = win.document.elementFromPoint(points[p].x, points[p].y);
				                        
				                        if (!pageElem) continue;
				                        
				                        if (pageElem == b.ph.placeholder || pageElem == b.ph.placeholder.parentNode /* Firefox fix */) {
				                                is_toplevel_element = true;
				                                break;
				                        }
				                        
				                        while (pageElem.parentNode) {
				                                if (pageElem.parentNode == b.ph.placeholder) {
				                                        is_toplevel_element = true;
				                                        break;
				                                }
				                                pageElem = pageElem.parentNode;
				                        }
				                } catch(e) {}
				        }
				}
				
				if (b.cssFlag) {
					b.ph.placeholder.style.cssText = b.cssText;
					b.cssFlag = false;
				}
				
				if (!is_toplevel_element) return false;
				
			} catch (e) { return false; }

			try {
				var x = (win.pageXOffset !== undefined) ? win.pageXOffset : (win.document.documentElement || win.document.body.parentNode || win.document.body).scrollLeft;
				var y = (win.pageYOffset !== undefined) ? win.pageYOffset : (win.document.documentElement || win.document.body.parentNode || win.document.body).scrollTop;
				var winInnerWidth = win.innerWidth || win.document.documentElement.clientWidth || win.document.body.clientWidth;
				var winInnerHeight = win.innerHeight || win.document.documentElement.clientHeight || win.document.body.clientHeight;

				return ( (x <= r.right && x + winInnerWidth >= r.left) && 
					(y <= r.bottom && y + winInnerHeight >= r.top) );

			} catch (e) { return true; }
		},

		percentVisible : function(b, win) {
			if (!win) win = b.ph.window;
			if (!b) return 0;
			var r;
			try {
				if (b.ph.placeholder.style.display == "none") {
					b.cssFlag = true;
					b.cssText = b.ph.placeholder.style.cssText;
					b.ph.placeholder.style.display = "";
				}

				r = this.getOffsetRect(b.ph.placeholder, b.ph.window, b.ph.document);  

			        if (r.box.bottom == r.box.top) { // KOCTblJIb to avoid zero div height
						if (!b.cssFlag) {
							b.cssFlag = true;
							b.cssText = b.ph.placeholder.style.cssText;
						}
			            b.ph.placeholder.style.height = ((b.h && b.h.indexOf('%') == -1) ? b.h : (b.gif_h ? b.gif_h : '90px'));
			            r = this.getOffsetRect(b.ph.placeholder, b.ph.window, b.ph.document);
			        }
			        
				/* decrese height/width if height/width > 0 */
				if (r.box.right >= 2 + r.box.left) --r.box.right;
				if (r.box.bottom >= 2 + r.box.top) --r.box.bottom;
	
				var is_toplevel_element = false;
				
				if (win.document.elementFromPoint) {
				
					var points =  [
						{'x':r.box.left, 'y':r.box.top}, {'x':r.box.right, 'y':r.box.top}, {'x':r.box.left,'y':r.box.bottom}, {'x':r.box.right,'y':r.box.bottom},
						{'x':(r.box.left+r.box.right)/2, 'y':r.box.top}, {'x':(r.box.left+r.box.right)/2, 'y':r.box.bottom}, {'x':r.box.left,'y':(r.box.top+r.box.bottom)/2}, {'x':r.box.right,'y':(r.box.top+r.box.bottom)/2}
					];
				        /* check if banner div is top element at least one div corner === check zIndex */
				        for (var p = 0, pl = points.length; p < pl; ++p) {
				                try {
				                        var pageElem = win.document.elementFromPoint(points[p].x, points[p].y);
				                        
				                        if (!pageElem) continue;
				                        
				                        if (pageElem == b.ph.placeholder || pageElem == b.ph.placeholder.parentNode /* Firefox fix */) {
				                                is_toplevel_element = true;
				                                break;
				                        }
				                        
				                        while (pageElem.parentNode) {
				                                if (pageElem.parentNode == b.ph.placeholder) {
				                                        is_toplevel_element = true;
				                                        break;
				                                }
				                                pageElem = pageElem.parentNode;
				                        }
				                } catch(e) {}
				        }
				}
				
				if (b.cssFlag) {
					b.ph.placeholder.style.cssText = b.cssText;
					b.cssFlag = false;
				}
				
				if (!is_toplevel_element) return 0;
				
			} catch (e) { return 0; }

			try {
				var g = this.winSize(win, win.document);
				var w = r.right - r.left;
				var h = r.bottom - r.top;

                                var visibleX = Math.max(0, Math.min(w, g.width + g.scrollX - r.left, r.right - g.scrollX));
                                var visibleY = Math.max(0, Math.min(h, g.height + g.scrollY - r.top, r.bottom - g.scrollY));
                                
                                return visibleX * visibleY / (w * h);

			} catch (e) { return 0; }
		},

		hasClass: function(el, className) {
			if (!el || !className) return;

			className = className.replace(/^\s+/, '').replace(/\s+$/, '');
			if (/\s/.test(className)) return;

			return _hasClass(el, className);
		},

		_hasClass: function(el, className) {          
			if (el.classList) {
				return el.classList.contains(className);
			}
			else
				return (new RegExp('(\\s|^)' + className + '(\\s|$)')).test(el.className);
		},

		addClass: function(el, className) {
			if (!el || !className) return;

			className = className.replace(/^\s+/, '').replace(/\s+$/, '');
			if (/\s/.test(className)) return;

			if (el.classList)
				el.classList.add(className);
			else if (!_hasClass(el, className)) 
				el.className += " " + className;
		},

		removeClass: function(el, className) {
			if (!el || !className) return;

			className = className.replace(/^\s+/, '').replace(/\s+$/, '');
			if (/\s/.test(className)) return;

			if (el.classList)
				el.classList.remove(className);
			else if (_hasClass(el, className)) {
				var reg = new RegExp('(\\s+|^)' + className + '(\\s+|$)', 'g');
				el.className = el.className.replace(reg, ' ').replace(/^\s+/, '').replace(/\s+$/, '');
			}
		},

		hideDivBanner : function(div) {
			if (!div) return;
			div.style.display = "none";
			
			var parent = div;
			while (parent) {
				if (/(^|\s+)banner(\s+|$)/.test(parent.className)) {
					var height = 0;
					for (var c=0; c < parent.children.length; c++) {
						height += parent.children[c].getBoundingClientRect().height;
					}
					if (0 == height) {
						parent.style.display = 'none';
					}
					break;
				}
				parent = parent.parentNode;
			}
		},

		triggerCustomEvent : function (eventClass, eventName, node, doc) {
			doc = doc || document;
			if (!eventClass || !eventName || !node) return;

			if (doc.dispatchEvent) {
				var event = doc.createEvent(eventClass);
				event.initEvent(eventName, true, true);
				event.synthetic = true;

				node.dispatchEvent(event, true);
			} else if (node.fireEvent) {
				var event = doc.createEventObject();
				event.synthetic = true;
				node.fireEvent("on" + eventName, event);
			}
		}

	};

	class_mlBase = JRClass.extend(ext_mlBase);
}
