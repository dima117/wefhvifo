/* Creating new mlInline object (if not already exists) */
(function(){

	if (typeof class_mlBase === 'undefined') {
		setTimeout(arguments.callee, 50);
		return;
	}

	if (typeof class_mlInline !== 'undefined') {
		return;
	}

	/* Defining mlInlne class methods */
	var ext_mlInline = {
		main : function(b) {
			/*validate*/

			b.w = b.w.toString();
			
			b.production = /https?(:|%3A)\/\/[^\/]+\/reference(\?|%3F)/.test(b.link);
			if (this._useReferer) {
				b.place_dir = ((typeof(b.place_dir) != 'undefined' && b.place_dir.length) ? escape(b.place_dir) : this._defaultPlaceDir);
				b.link = this._clickServerUrl + b.place_dir + '/?' + escape(b.link);
			}

			b.ph = this.inject(b);
			if (null != b.ph) {

				b.ph.pixels = b.pixels_dfp_frame ? document.createElement('div') : b.ph.document.createElement('div');
				b.ph.pixels.id = "pixels_" + b.pid;
				b.ph.pixels.style.display = "none";
				if (b.pixels_dfp_frame) {
					document.body.appendChild(b.ph.pixels);
				} else {
					b.ph.placeholder.appendChild(b.ph.pixels);
				}

				//set site background if needed
				if (typeof(b.banner_background) != "undefined" && typeof(b.banner_background.image) != "undefined" && b.banner_background.image.length > 0) {
					//var change_bg = new Function('inline.set_site_background_image('+b.name+')');
					//this.addEvent(b.ph.window, 'load', change_bg);
					this.set_site_background_image(b);
				}
				if (b.eshows) {
					b.listener = this.proxy(this, this.listener, [b]);
					b.listener(); // forse check, banner maight be already visible
				} else {
					if (b.iframe && b.iframe_src) {
						b.iframe.src = b.iframe_src;
					}
					this.callEvent(b.zeropixel, b.rand_url, b.ph);
				}
				if (b.show_when_ph_visible) {
					b.ph.placeholder.style.visibility = 'hidden';
					b.vis_listener = this.proxy(this, this.vis_listener, [b]);
					b.vis_listener();
				}
				this.bindEvents(b);
			}
		},

		bindEvents : function(b) {
			if (b.eshows) {
				this.addEvent(b.ph.window, 'scroll', b.listener);
				this.addEvent(b.ph.window, 'resize', b.listener);
			}
			if (b.show_when_ph_visible) {
				this.addEvent(b.ph.window, 'scroll', b.vis_listener);
				this.addEvent(b.ph.window, 'resize', b.vis_listener);
			}
			if (b.onOrientationChange) {
				this.addEvent(b.ph.window, 'orientationchange', b.onOrientationChange);
			}
		},

		unbindEvents : function(b) {
			if (b.eshows) {
				try {
					this.removeEvent(b.ph.window, 'scroll', b.listener);
					this.removeEvent(b.ph.window, 'resize', b.listener);
				} catch(e) {}
			}
			if (b.show_when_ph_visible) {
				try {
					this.removeEvent(b.ph.window, 'scroll', b.vis_listener);
					this.removeEvent(b.ph.window, 'resize', b.vis_listener);
				} catch(e) {}
			}
			if (b.onOrientationChange) {
				this.removeEvent(b.ph.window, 'orientationchange', b.onOrientationChange);
			}
		},

		inject : function(banner) {
		
			var ua = navigator.userAgent;
			var checkAndroid = /Android(?=.*?(Mobile))/i.test(ua);
			//var androidDefaultBrowser = /Android.+AppleWebKit.+Version\/[^\s]+( Mobile)?\s+Safari/.test(ua);
			var checkAndroidTablet = /(Android(?=.*?tab)|Android 3|Android(?!.*?(phone|Mobile)))/i.test(ua);
			var checkIphone = /iphone/i.test(ua);
			var checkIpad = /ipad/i.test(ua);
			var checkWinPhone = /Windows Phone|WPDesktop|IEMobile|WP7/i.test(ua);
			var isMobile = (checkAndroid || checkIphone || checkWinPhone);
			var isTablet = (checkAndroidTablet || checkIpad);

			var p = this.codeVariant(banner.pid);
			var o, computed_height;
			var canvas = document.createElement('canvas');
			var isDevice = isMobile || isTablet;
			var isBannerStretch = typeof banner.gif_w != 'undefined';

			var isHtml5_enable = !isBannerStretch || !isDevice
				|| (isDevice && banner.tablet_html5_enable);
			
			if (/Firefox/.test(ua)) {
				isHtml5_enable = isHtml5_enable && (typeof banner.firefox_html5_enable == 'undefined' || banner.firefox_html5_enable);
			}

			if (banner.retina_html5_disable && isHtml5_enable) {
				isHtml5_enable = !this.isRetina() || isDevice;
				
				if (/MSIE\s(9|10)/i.test(ua)) {
					isHtml5_enable = false;
				}
			}
			
			if (banner.show_close_button) {
				banner.close_button = p.document.createElement('div');
				banner.close_button.id = 'close_button_' + banner.pid;
				banner.close_button.style.cssText = 'display : block; position : absolute; right : 5px; top : 5px; width : 50px; height : 50px; background : url(http://content.rbc.medialand.ru/templates_r/cross.png) top right no-repeat; background-size : 19px 19px;';
				banner.close = this.proxy(this, this.close, [banner]);
				this.addEvent(banner.close_button, 'click', banner.close);

				if (!banner.div_style) {
					banner.div_style = {};
				}
				banner.div_style.position = 'relative';
			}
 
			if (canvas && typeof canvas.getContext == 'function' && /^https?:\/\/.+/i.test(banner.html5) && isHtml5_enable) {
				var html5_width = (typeof banner.gif_w != 'undefined')? banner.gif_w : banner.w;
				var html5_height = (banner.h.indexOf('%') > -1) ? "100%" : ((typeof banner.gif_h != 'undefined') ? banner.gif_h : banner.h)


				var o = this._html5(banner.html5, html5_width, html5_height, banner.link, (banner.wmode == 'transparent' ? 'transparent' : (banner.bgc ? banner.bgc : 'transparent')), p, banner.pid, banner.more_links, '');
				banner.iframe = o.iframe;
				banner.iframe_src = o.src;

				var styles = {
					'display' : 'inline-block',
					'margin' : 0,
					'border' : 0
				};
				if (banner.w) styles['width'] = '' + banner.w + (banner.w.indexOf('%') > -1 ? '' : 'px');
				if (banner.h) styles['height'] = banner.h.indexOf('%') > -1 ? "100%" : banner.h +  'px';

				this.applyStyles(banner.iframe, styles);

				computed_height = banner.h;

				if (banner.show_close_button) {
					p.placeholder.appendChild(banner.close_button);
				} else {
					p.placeholder.innerHTML = '';
				}
				p.placeholder.appendChild(banner.iframe);

				var border_style = {};
				if (typeof banner.div_style == 'object') {
					for (var i in banner.div_style) {
						if (!banner.div_style.hasOwnProperty(i)) continue;
						if (/^(border*)/i.test(i)) {
							border_style[i] = banner.div_style[i];
							delete banner.div_style[i];
						}
						if (/^(box\-?sizing)/i.test(i)) {
							border_style[i] = "border-box";
							delete banner.div_style[i];
						}
					}
					this.applyStyles(o, border_style);
				}
 
	 			if (banner.banner_align_center) p.placeholder.style.textAlign = 'center';
			} else {
				if (banner.scale_gif_w && (isMobile || isTablet)) {
					var scaledSize = this.calcImgSize(banner, p);
					banner.gif_h = scaledSize.height;
					banner.gif_w = scaledSize.width;

					banner._imageResizer = this.proxy(this, this.imageResizer, [banner]);
					banner.onOrientationChange = function() { banner._imageResizer(); setTimeout(banner._imageResizer, 300);} ;
				}

				if ((banner.fv <= parseInt(this.flVer()[0])) && /^https?:\/\/.*/i.test(banner.swf) && !(isMobile || isTablet)) {
					computed_height = banner.h;
				} else {
					computed_height = (typeof banner.gif_h != 'undefined') ? banner.gif_h : banner.h;
				}

				o = this.obj(banner);
				if ('' == o) {
					return null;
				}
				if (banner.show_close_button) {
					p.placeholder.innerHTML += o;
					p.placeholder.insertBefore(banner.close_button, p.placeholder.firstChild);
				} else {
					p.placeholder.innerHTML = o;
				}
			}

			var styles = {
				'display' : 'block',
				'visibility' : 'visible',
				'width' : (banner.w == "" ? "0px" : (banner.w + ((banner.w.indexOf('%') > -1) ? '' : 'px'))),
				'height' : computed_height ? (computed_height + (computed_height.toString().indexOf('%') == -1 ? 'px' : ''))  : (banner.gif_h + 'px')
			};
			this.applyStyles(p.placeholder, styles);

			if (banner.dfp_iframe) {
				try {
					if (p.placeholder.style.height.indexOf('%') < 0
						&& banner.dfp_iframe.parentNode.style.height != p.placeholder.style.height) {
							banner.dfp_iframe.parentNode.style.height = p.placeholder.style.height;
					}
				} catch (e) {}
			}

			if (typeof(banner.div_style) == "object") {
				banner.div_style.width = (banner.div_style.width == "" || banner.div_style.width == "100%") ? "100%" : (banner.div_style.width.indexOf('%') == -1 ? banner.div_style.width + 'px' : banner.div_style.width);
				this.applyStyles(p.placeholder, banner.div_style);
			}
			if (p.placeholder.style.display == 'inline-block') {
				try { p.placeholder.parentNode.style.textAlign = 'center'; } catch (e) {}
			}

			banner.destroy = this.destroy;

			if (p.type == 'async') setTimeout('document.close()', 1000);
			return p;
		},

		calcImgSize : function(b, ph) {
			if (!b || !ph || !b.scale_gif_w) return;

			var element = ph.placeholder.parentNode,
			elementWidth = 0;
			while (element.parentNode) {
				try {
					var rect = element.getBoundingClientRect();
					if (rect && rect.width) {
						elementWidth = rect.width;
						break;
					}
					element = element.parentNode;
				} catch (e) { break; }
			}
			
			var g = this.winSize(ph.window, ph.document);
			var winWidth = g.width;
			
			var minWidth = Math.min(elementWidth ? elementWidth : 10000, winWidth, b.scale_gif_w);
			return {'width': minWidth, 'height': parseInt( (minWidth / b.gif_w) * b.gif_h )}
		},

		imageResizer : function(b) {
			var image = b.image || b.ph.document.getElementById('img' + b.pid);
			var scaledSize = this.calcImgSize(b, b.ph);
			if (scaledSize.width) scaledSize.width += 'px';
			if (scaledSize.height) scaledSize.height += 'px';
			this.applyStyles(image, scaledSize);

			if (scaledSize.height) {
				b.ph.placeholder.style.height = scaledSize.height;
				if (b.dfp_iframe) {
					try {
						b.dfp_iframe.parentNode.style.height = scaledSize.height;
					} catch (e) {}
				}
			}
		},

		close : function(b) {
			b.ph.placeholder.style.display = "none";
			this.removeEvent(b.close_button, 'click', b.close);
			this.unbindEvents(b);
		}, 

		destroy : function(b) {
			this.unbindEvents(b);
			this._super(b);
		},

		listener : function(b) {

			//var isElementVisible = this.isVisible(b, b.ph.window);
			var g = this.winSize(b.ph.window, b.ph.document);
			var h = this.findPos(b.ph.placeholder).top+b.h/4; // 25% visiblee

			//if (isElementVisible) {
			//	if (b.dfp_iframe) {
			//		b.dfp_iframe.style.display = 'block';
			//	}

				if (Math.abs(g.scrollY+g.height/2-h)<=g.height/2) {
			        	if (b.iframe && b.iframe_src) {
			               		b.iframe.src = b.iframe_src;
			       		}
					this.callEvent(b.zeropixel, b.rand_url, b.ph);
					this.removeEvent(b.ph.window, 'scroll', b.listener);
					this.removeEvent(b.ph.window, 'resize', b.listener);
				}
			//}
		},

		vis_listener : function(b) {
			var g = this.winSize(b.ph.window, b.ph.document);
			var h = this.findPos(b.ph.placeholder).top + parseInt(b.h*(4/10));

			if (Math.abs(g.scrollY + g.height) > h) { //25% visible
				b.ph.placeholder.style.visibility = 'visible';
				this.removeEvent(b.ph.window, 'scroll', b.vis_listener);
				this.removeEvent(b.ph.window, 'resize', b.vis_listener);
			}
		},

		set_site_background_image : function(b) {
			var page_height = b.ph.document.body.scrollHeight; //get options
			var screen_width = screen.width;
			var screen_height = screen.height;
			var body_width = b.ph.document.body.clientWidth;

			if (screen_width < 1280) {
				return;
			}

			var left_bg_a = b.ph.document.createElement('a');
			left_bg_a.href = b.link;
			left_bg_a.innerHtml = "_";
			left_bg_a.target = "_blank";
			var diff = (b.w.indexOf('%') > -1) ? 0: body_width - b.banner_background.content_width -2*b.banner_background.width;

			with (left_bg_a.style) {
				height = page_height + "px";
				position = "absolute";
				left = diff? Math.ceil(diff/2) + "px" : "0px";
				top = (b.h.indexOf('%') > -1) ? "0px" : b.h + "px";
				width = b.banner_background.width + "px";
				height = b.banner_background.height + "px";
				zIndex = 1;
				backgroundImage = "url('" + b.banner_background.image + "')";
				backgroundRepeat = "no-repeat";
				display = "block";
				textIndent = "-9999px";
				cursor = "pointer";
				padding = "0px";
				margin = "0px";
				border = "0px none black";
			}

			var right_bg_a = b.ph.document.createElement('a');
			right_bg_a.href = b.link;
			right_bg_a.innerHtml = "_";
			right_bg_a.target = "_blank";

			with (right_bg_a.style) {
				height = page_height + "px";
				position = "absolute";
				right = diff? Math.ceil(diff/2) + "px" : "0px";
				top = (b.h.indexOf('%') > -1) ? "0px" : b.h + "px";
				width = b.banner_background.width + "px";
				height = b.banner_background.height + "px";
				zIndex = 1;
				backgroundImage = "url('" + b.banner_background.image_r + "')";
				backgroundRepeat = "no-repeat";
				display = "block";
				textIndent = "-9999px";
				cursor = "pointer";
				padding = "0px";
				margin = "0px";
				border = "0px none black";
			}

			var s = b.ph.document.getElementsByTagName('div')[0];
			s.parentNode.insertBefore(left_bg_a, s);
			s.parentNode.insertBefore(right_bg_a, s);
		}
	};

	/* Initializing mlInline object */
	window.class_mlInline = class_mlBase.extend(ext_mlInline);
	window.obj_mlInline = new class_mlInline();

})();
