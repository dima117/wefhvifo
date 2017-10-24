(function (){

	if (typeof class_mlBase === 'undefined')
	{
		setTimeout(arguments.callee, 50);
		return;
	};

	if (typeof class_mlVideoBanner !== 'undefined') {
		return;
	}

	/* Defining mlInlne class methods */
	var ext_mlVideoBanner = {
		main : function(b) {
			var ua = navigator.userAgent;
			var checkIphone = /iphone/i.test(ua);
			var checkIpad = /ipad/i.test(ua);
			var checkIpod = /ipod/i.test(ua);
			var checkAndroidTablet = /(Android(?=.*?tab)|Android 3|Android(?!.*?(phone|Mobile)))/i.test(ua);
			var checkAndroid = /Android(?=.*?(Mobile))/i.test(ua);
			var checkWP = /Windows Phone|WPDesktop|IEMobile|WP7/i.test(ua);
			
			b.isIos = (checkIphone || checkIpad || checkIpod);
			b.isAndroid = (checkAndroidTablet || checkAndroid);
			b.isMobile = (b.isIos || b.isAndroid || checkWP);
			b.source = [];

			if(this._useReferer) {
				b.place_dir = ((typeof(b.place_dir) != 'undefined' && b.place_dir.length) ? escape(b.place_dir) : this._defaultPlaceDir);
				if(b.link) b.link = this._clickServerUrl + b.place_dir + '/?' + escape(b.link);
			}

			b.ph = this.codeVariant(b.pid);
			if (!b.ph) return;
			
			if (this.isIE()) {
				this.altCode(b);
				return;
			}

			if (b.isMobile) {
				/* http://walterebert.com/blog/html5-video-autoplay-mobile-revisited/ */
				var autoplay = true;
				do {
					if (checkWP) {
						autoplay = false;
						break;
					}
					if (/Opera|OPR\/|OPiOS\//.test(ua)) {
						autoplay = false;
						break;
					}
					if (checkAndroid || checkAndroidTablet) {
						if (/Chrom(e|ium)\/([0-9]+)\./.test(ua) && 55 > ua.match(/Chrom(e|ium)\/([0-9]+)\./)[2]) {
							autoplay = false;
							break;
						}
						if (/Firefox\/([0-9]+)\./.test(ua) && 49 > ua.match(/Firefox\/([0-9]+)\./)[1]) {
							autoplay = false;
							break;
						}
					}

				} while (0);

				if (!autoplay) {
					this.altCode(b);
					return;
				}
			}

			var head = b.ph.document.getElementsByTagName("head")[0];
			var d = new Date();
			var drnd = d.getFullYear()+''+d.getMonth()+''+d.getDate();

			if (checkIphone || checkIpad || checkIpod) {
				/* https://github.com/bfred-it/iphone-inline-video */
				var s = b.ph.document.createElement('script');
				s.src = this._httpUrl + '/templates_r/iphone-inline-video.min.js?' + drnd;
				s.type = 'text/javascript';
				head.appendChild(s);

				b.inlineVideoSupport = true;
			}

			if (b.ph.type == 'async')
			{
				if (typeof b.ph.window.videojs === 'undefined')
				{
					//videojs has to be in cash in async mode
					var s = b.ph.document.createElement('script');
					s.src = this._httpUrl + '/templates_r/video-js.6.2/video.min.js?' + drnd;
					s.type = 'text/javascript';
					head.appendChild(s);
					b.needCss = true;
				};
			};

			if (b.needCss) this.mlAddCss(b, this._httpUrl +'/templates_r/video-js.6.2/video-js.min.css');

			try {
				for (var j = 0, jl = b.client_zeropixel.length; j < jl; j++) {
					if (/^https?:\/\/.+/i.test(b.client_zeropixel[j])) {
						(b.custom_mode == "custom_finish" || b.custom_mode == "pixel_start") ? b.events['start'].unshift(b.client_zeropixel[j]) : b.zeropixel.push(b.client_zeropixel[j]);
					}
				}
			} catch(e) {}

			if (b.eshows && b.eshows_type) {
				for (var z in b.zeropixel) {
					if (!b.zeropixel.hasOwnProperty(z)) continue;
			    		if (!b.zeropixel[z]) continue;
					if (!isNaN(parseInt(b.eshows_type))) {
						if (b.custom_mode != 'custom_finish') {
							if (typeof b.events[b.eshows_type] == 'undefined') b.events[b.eshows_type] = [];
							b.events[b.eshows_type].unshift( b.zeropixel[z] );
						} else {
							b.events['start'].unshift( b.zeropixel[z] );
						}
					} else {
						b.events[b.eshows_type].unshift( b.zeropixel[z] );
					}
			        }
			}

			var binject = this.inject(b);
			if (!binject) return;
			b.vResize = this.proxy(this, this.calculateHeight, [b]);

			if (b.isMobile) {
				//b.ph.placeholder.style.marginRight = "0px";
				this.addEvent(b.ph.window, 'orientationchange', function() {setTimeout(b.vResize, 200);});
			}

			this.addEvent(b.ph.window, 'resize', b.vResize);
			this.addEvent(b.ph.document.body, 'resize', b.vResize);

			this.calculateHeight(b);
			//for I - branding banner
			setTimeout(function () { b.vResize(); }, b.isMobile ? 20 : 1500);


			if (!b.eshows) {
				this.callEvent(b.zeropixel, b.rand_url, b.ph);
			}
		},

		calculateHeight : function (b) {

			var elementWidth = this.getStyle(b.ph.placeholder, 'width', b.ph.document);
			if (!parseInt(elementWidth) || this.isIE()) {
				if ( b.ph.placeholder.offsetWidth ) {
					elementWidth = b.ph.placeholder.offsetWidth;
				} else {
					elementWidth = b.w;
				}
			}

			var format = b.format.split('x');
			b.h = Math.round(parseInt(elementWidth) * parseInt(format[1]) / parseInt(format[0]));
			if (b.player) {
				try {
					b.player.el().style.height = b.h + 'px';
					b.player.height(b.h);
					try {
						if (/MSIE\s(9|10)/i.test(navigator.userAgent)){ 
							b.player.width(parseInt(elementWidth));
						}
					} catch(e) {}
				} catch(e) {}
			} else {
				setTimeout(b.vResize, 50);
				return;
			}
			if (b.flag_animate_open) {
				mlph.style.cssText  += "transition: height 2s cubic-bezier(0.215, 0.610, 0.355, 1.000); -webkit-transition: height 2s cubic-bezier(0.215, 0.610, 0.355, 1.000); -moz-transition: height 2s cubic-bezier(0.215, 0.610, 0.355, 1.000); -o-transition: height 2s cubic-bezier(0.215, 0.610, 0.355, 1.000);";
				mlph.style.height = '0px';
				mlph.style.marginTop = '0px';
				mlph.style.marginBottom = '0px';
			}

		},

		obj : function(b) {
			var html = '<div id="background'+b.pid+'" style="position: absolute; width: 100%; height: 100%; background-position: center; background-image: url('+b.bg_mask+');"></div>';
			if (b.wrapper) {
				if (b.isMobile) {
					html += '<div style="font-size: 11px; color: #acacac; margin-top: 2px; text-align: left; line-height: 23px; font-family: GraphikCy, Helvetica CY, Arial" >&#1056;&#1077;&#1082;&#1083;&#1072;&#1084;&#1072;</div>';
				}	else 	{
					html += '<div style="font-size: 11px; color: #acacac; margin-top: 4px; text-align: left; line-height: 26px; font-family: GraphikCy, Helvetica CY, Arial" >&#1056;&#1077;&#1082;&#1083;&#1072;&#1084;&#1072;</div>';
				}
			}
			html += '<div style="margin: 0 auto;">';
			html += '<video id="top_video'+b.pid+'" class="video-js vjs-default-skin" controls ' + (b.isMobile ? 'muted playsinline' : '') + ' preload="auto" style="width: 100%;" width="100%" height="' + b.h + '" >';

			var videotag = document.createElement('video');
			var types = [ "mp4", "webm", "ogv", "flv" ]; // http://docs.videojs.com/tutorial-options.html#sourceOrder
			for (var i = 0, l = types.length; i < l; i++) {
				var t = types[i];
				if (b[t] && /^https?:\/\/.+/i.test(b[t]) ) {
					if ((videotag.canPlayType && videotag.canPlayType("video/" + (t == 'ogv' ? 'ogg' : t)).replace(/no/, ''))
						|| (this.flVer()[0] && (t == 'flv' || t == 'mp4'))) {
						var vPlType;
						vPlType = (t == "flv") ? "x-flv" : t;
						vPlType = (t == "ogv") ? "ogg" : t;
						b.source.push( { "type" : "video/" + vPlType, src : b[t] } );
					}
				}
			}

			html += '</video>';
			html += '</div>';

			return b.source.length ? html : '';
		},

		altCode : function (b) {
			if (b.altCodeFlag) return;
			b.altCodeFlag = true;

			if (b.alt_code && b.alt_code.pid) {
				b.ph.placeholder.innerHTML = '';
				var _div = b.ph.document.createElement('div');
				_div.id = this._inlinePrefix + b.alt_code.pid;
				b.ph.placeholder.appendChild(_div);
				var _s = b.ph.document.createElement('script');
				_s.type = 'text/javascript';
				_s.src = b.alt_code.link;
				b.ph.placeholder.appendChild(_s);
				b.ph.placeholder.style.cssText = '';

				if (b.events['altcode']) this.callEvent(b.events['altcode'], b.rand_url, b.ph);
				b.events['altcode'] = [];

			} else {
				this.hideDivBanner(b.ph.placeholder);
			}
			this.removeEvent(b.ph.window, 'scroll', b.listener);
			this.removeEvent(b.ph.window, 'resize', b.listener);
			this.notifyEvent(b, 'hide', b.ph.window);
		},

		listener : function(b) {
			var g = this.winSize(b.ph.window, b.ph.document);
			var h = this.findPos(b.ph.placeholder).top+parseInt(b.h)/2; // banner middle

			if (Math.abs(g.scrollY+g.height/2-h)<=g.height/2) {
				this.callEvent(b.zeropixel, b.rand_url, b.ph);
				this.removeEvent(b.ph.window, 'scroll', b.listener);
				this.removeEvent(b.ph.window, 'resize', b.listener);
			}
		},

		inject : function(b){

			var p = b.ph;
			b.o = this.obj(b);

			if (b.o == '') {
				return null;
			}

			p.placeholder.style.cssText = 'width: '+ b.w +'; background-color: ' + b.bg_color + '; display: block; position: relative;';
			p.placeholder.innerHTML = b.o;

			b.destroy = this.destroy;

			b.div_style = b.div_style || {};
			if (b.isMobile) {
				if (b.wrapper) {
					if (p.window.location.pathname == '/') {
						b.div_style['border-top'] = 'none';
						b.div_style['margin'] = 0;
					} else {
						b.div_style['border-top'] = '1px solid rgba(0,0,0,0.08)';
						b.div_style['margin'] = '25px 0px';
					}
					b.div_style['border-bottom'] = '1px solid rgba(0,0,0,0.08)';
					b.div_style['padding'] = '0px 0px 25px 0px';
				}
			} else {
				if (b.wrapper) {
					if (p.window.location.pathname != '/') {
						b.div_style['border-top'] = '1px solid rgba(0,0,0,0.08)';
						b.div_style['border-bottom'] = '1px solid rgba(0,0,0,0.08)';
						b.div_style['padding'] = '0px 0px 30px 0px';
						b.div_style['margin'] = '25px 0px';
					}
				} else {
					if (p.window.location.pathname == '/') b.div_style['margin-top'] = '30px';
				}
			}

			this.applyStyles(p.placeholder, b.div_style);

			this.initVideo(b);
			return true;
		},

		markShown : function(ph, pid, b) {

			if (!this._super(ph, pid, b))return false;
			ph.window.ml_places[pid].width = b.w;
			ph.window.ml_places[pid].height = b.h;
			if (b.player) ph.window.ml_places[pid].player = b.player;

		},

		initVideo : function(b) {

			if (typeof video_banner_plugin === 'undefined' || typeof b.ph.window.videojs === 'undefined') {
				setTimeout( this.proxy(this, this.initVideo, [b]) , 100);
				return;
			};

			b.ph.window.videojs.options.flash.swf = this._httpUrl + '/templates_r/video-js/video-js.swf';
			var registerPlugin = b.ph.window.videojs.registerPlugin || b.ph.window.videojs.plugin;
			if (!b.ph.window.videojs.getPlugin || !b.ph.window.videojs.getPlugin('video_banner_plugin')) registerPlugin('video_banner_plugin', video_banner_plugin);
			
			b.ph.window.videojs(b.ph.document.getElementById('top_video'+b.pid),
				{
					poster : b.pic,
					plugins : {
						video_banner_plugin : {
							'b' : b,
							'ph' : b.ph,
							'getElementsByClassName' : this._getElementsByClassName,
							'insertAfter' : this.insertAfter,
							'source' : b.source,
							'self' : this
						}
					}
				}
			);

		}

	};

	/* Initializing mlTopVideo object */
	class_mlVideoBanner = window.class_mlBase.extend(ext_mlVideoBanner);
	window.obj_mlVideoBanner = new class_mlVideoBanner();

})();
