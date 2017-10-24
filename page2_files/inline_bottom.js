/* Creating new mlText object (if not already exists) */
(function(){

	if (typeof class_mlBase === 'undefined') {
		setTimeout(arguments.callee, 50);
		return;
	}

	if (typeof class_mlBottom !== 'undefined') {
		return;
	}

	/* Defining mlText class methods */
	var ext_mlBottom = {

		getTeaserPh : function(pid) {
			var p = this._super(pid);
			var div = p.document.createElement('div');
			div.id = p.placeholder.id + '_bottom';
			p.placeholder = p.document.body.insertBefore(div, p.document.body.firstChild);
			return p;
		},

		init : function (b) {
			var ua = navigator.userAgent;
			checkIphone = /iphone/i.test(ua);
			checkIpad = /ipad/i.test(ua);
			checkAndroidTablet = /(Android(?=.*?tab)|Android 3|Android(?!.*?(phone|Mobile)))/i.test(ua);
			checkAndroid = /Android(?=.*?(Mobile))/i.test(ua);
			checkWP = /Windows Phone/i.test(ua);
				
			isMobile = (checkIphone || checkAndroid || checkWP);
			isTablet = (checkAndroidTablet || checkIpad);

			if (!isMobile && !isTablet) return;

			var mw = window;
			try {
				if (parent.document) mw = parent;
				if (!mw) mw = window;
			} catch(e) { mw = window; }

			if ("https:" == mw.location.protocol) {
				var change_protocol = this.proxy(this, this.changeProtocol, [b]);
				change_protocol();
			}

			if(typeof b.cookie.postfix == 'undefined') {
				b.cookie.postfix = '';
			}

			this.init_banner(b);
			b.ph.placeholder.style.display = "none";
			
			if (this.getCookie(b.ph.document, b.name + b.cookie.postfix)) return;
			
			var finance_block = this._getElementsByClassName("finance", b.ph.document)[0];
			
			if (finance_block) {
				var finance_block_open_button = this._getElementsByClassName("navbar__fullscreen", b.ph.document)[0];
				var finance_block_cloas_button = this._getElementsByClassName("finance__close", b.ph.document)[0];
				
				b.checkFinanceBlock = this.proxy(this, this.checkFinanceBlock, [b]);
				if (finance_block_open_button) this.addEvent(finance_block_open_button, 'click', b.checkFinanceBlock);
				if (finance_block_cloas_button) this.addEvent(finance_block_cloas_button, 'click', b.checkFinanceBlock);
			}
			
			if (isMobile || isTablet) {
				b.ph.placeholder.style.width = "100%";
				var news_feed_hide = this._getElementsByClassName('news-feed_hide', b.ph.document)[0];
				b.checkNewsBlock = this.proxy(this, this.checkNewsBlock, [b]);
				if (news_feed_hide) this.addEvent(news_feed_hide, 'click', b.checkNewsBlock);
			}
			
			b.scrollPage = this.proxy(this, this.scrollPage, [b]);
			b.scrollPage(b);
			this.addEvent(b.ph.window, 'scroll', b.scrollPage);
			this.addEvent(b.ph.window, 'resize', b.scrollPage);
		
			b.call_event = this.proxy(this, this.callEvent, [b]);
			b.call_event(b);
			this.addEvent(b.ph.window, 'scroll', b.call_event);
			this.addEvent(b.ph.window, 'resize', b.call_event);
	
			b.close_button = this._getElementsByClassName("banners__bottom__button", b.ph.document)[0];
			if (b.close_button) {
				b.close = this.proxy(this, this.close, [b]);
				this.addEvent(b.close_button, 'click', b.close);
			}
			
		},

		init_banner : function (b) {
			var ph = this.getTeaserPh(b.pid);
			b.ph = ph;
			if (!b.items.length) return;
			for (var i = 0, il = b.items.length; i < il; i++) {
				if (this._useReferer) {
					b.items[i].place_dir = ((typeof(b.items[i].place_dir) != 'undefined' && b.items[i].place_dir.length) ? escape(b.items[i].place_dir) : this._defaultPlaceDir);
					b.items[i].link = this._clickServerUrl + b.items[i].place_dir + '/?' + escape(b.items[i].link);
				}
				try {
					//rray of texts
					if (!b.items[i].text.length) continue;
					for (var j = 0, jl = b.items[i].text.length; j < jl; j++) { 
						var cut_text = this.teaserTextCut(this.fromHtmlEntities(b.items[i].text[j]) , b.max_letters);
						b.items[i].text[j] = this.toHtmlEntities(cut_text);
					}
				} catch (e) {}
			}
			var banner_str ='';
			if (typeof b.print == 'function') {
				banner_str += b.print(b);
			} else {
				banner_str += this.print(b);
			}

			if(typeof b.div_style == "object") {
				for(prop in b.div_style) {
					with(b.ph.placeholder.style) {
						try{
							eval(prop + '="' + b.div_style[prop] + '"');
						}catch(e){}
					}
				}
			}

			ph.placeholder.innerHTML = ph.placeholder.innerHTML +  banner_str;
			ph.window["destroy_"+b.pid] = this.proxy(this, this.destroy, [b]);
			ph.window["repaint_"+b.pid] = this.proxy(this, this.repaint, [b]);
			this.markShown(ph, b.pid, b);
		},
	
		checkNewsBlock : function (b) {
			var news_feed = this._getElementsByClassName("news-feed", b.ph.document)[0];
			setTimeout( this.proxy(this, function () {
				var rect = news_feed.getBoundingClientRect();
				if (parseInt(rect.width) <= 50) {
					this.scrollPage(b);
				} else {
					b.ph.placeholder.style.display = "none";
				}
			}, []), 500);
			
		},
		
		checkFinanceBlock : function (b) {
			var finance = this._getElementsByClassName("finance", b.ph.document)[0];
			var finance_display = finance.style.display;

			if (finance_display == "block") {
				b.ph.placeholder.style.display = "none";
			} else {
				this.scrollPage(b);
			}
			
		},
		
		close : function (b) {
			b.ph.placeholder.style.display = "none";
			
			if (typeof b.cookie == "object" ) {
				this.setCookie(b.ph.document, b.name + b.cookie.postfix, 1, b.cookie.timeout * 60);
			}
			
			this.removeEvent(b.ph.window, 'scroll', b.scrollPage);
			this.removeEvent(b.ph.window, 'resize', b.scrollPage);
			
			this.removeEvent(b.close_button, 'click', b.close);
		},
			
		getDocumentScrollBottom : function (doc) {
			if (!doc) doc = document;
			return this.wndScroll(doc).top + doc.documentElement.clientHeight;
		},

		getDocumentBottomY : function (doc) {
			if (!doc) doc = document;
			return doc.documentElement.scrollHeight;
		},
		
		scrollPage : function (b) {

			if (b.ph.window.dfp_sync_var) { /* check synchron */
				b.ph.placeholder.style.display = "none";
				this.removeEvent(b.ph.window, 'scroll', b.scrollPage);
				this.removeEvent(b.ph.window, 'resize', b.scrollPage);
				return false;
			}

			if (this.getDocumentBottomY(b.ph.document) <= this.getDocumentScrollBottom(b.ph.document) + 100) {
				if (b.ph.placeholder.style.display == "block") {
					return;
				}
			}

			var win_size = this.winSize(b.ph.window, b.ph.document);

			if (b.scrollY && b.scrollY > win_size.scrollY + 5) {
				b.scrollY = win_size.scrollY;
				b.ph.placeholder.style.display = "none";
				return false;
			} else if (b.ph.placeholder.style.display == "none" && b.scrollY + 10 > win_size.scrollY) {
				return false;
			}
			b.scrollY = win_size.scrollY;

			if (!b.dont_calc_position) {
				var content_element = this._getElementsByClassName("l-content-body", b.ph.document)[0];
				var news_feed = this._getElementsByClassName("news-feed", b.ph.document)[0];
				var content_element_width, news_feed_width, element;
				if (content_element) {
					content_element_width = content_element.offsetWidth;
				}

				if (news_feed) {
					news_feed_width = news_feed.getBoundingClientRect().width;
					if (innerWidth < innerHeight && news_feed_width >= 20) {
						b.ph.placeholder.style.display = "none";
						return;
					}
				}

				var margin_left = isNaN(parseInt(b.div_style.marginLeft)) ? 0 : parseInt(b.div_style.marginLeft);
				if (win_size.width > content_element_width + 20) {
					b.ph.placeholder.style.left = (256 - margin_left) + "px";
					if (!isMobile && content_element_width) {
						b.ph.placeholder.style.width = content_element_width + "px";
					}
				} else {
					b.ph.placeholder.style.left = "0px";
					if (!isMobile && content_element_width) {
						b.ph.placeholder.style.width = (content_element_width - margin_left) + "px";
					}
				}
			}


			var element;
			if (b.content_hide) {
				if (typeof b.content_hide == 'string') {
					element = b.ph.document.querySelector ? b.ph.document.querySelector(b.content_hide) : null;
					if (element) {
						if (!this.isHidden(element, b.ph.window, b.ph.document)) {
							var pos = this.findPos(element);
							if (win_size.scrollX <= pos.right && pos.left <= win_size.scrollX + win_size.width &&
							    win_size.scrollY + win_size.height/2 <= pos.bottom && pos.top <= win_size.scrollY + win_size.height) {
								b.ph.placeholder.style.display = "none";
								return false;
							}
						}
					}
				} else if (typeof b.content_hide == 'object' && b.content_hide.length) {
					for (var i=0,l=b.content_hide.length; i<l; i++) {
						element = b.ph.document.querySelector ? b.ph.document.querySelector(b.content_hide[i]) : null;
						if (element) {
							if (this.isHidden(element, b.ph.window, b.ph.document)) continue;
							var pos = this.findPos(element);
							if (win_size.scrollX <= pos.right && pos.left <= win_size.scrollX + win_size.width &&
							    win_size.scrollY + win_size.height/2 <= pos.bottom && pos.top <= win_size.scrollY + win_size.height) {
								b.ph.placeholder.style.display = "none";
								return false;
							}
						}
					}
				}
			}

			var content_offset = 0;
			var content_size_ignore = false;
			if (b.content) {
				if (typeof b.content == 'string') {
					element = b.ph.document.querySelector ? b.ph.document.querySelector(b.content) : null;
				} else if (typeof b.content == 'object' && b.content.length) { // [ elem, elem, ..]
					for (var i=0,l=b.content.length; i<l; i++) {
						element = b.ph.document.querySelector ? b.ph.document.querySelector(b.content[i]) : null;
						if (element) {
							if (this.isHidden(element, b.ph.window, b.ph.document)) continue;
							if (b.content_offset && typeof b.content_offset == 'object' && b.content_offset[i]) {
								content_offset = isNaN(parseInt(b.content_offset[i])) ? 0 : parseInt(b.content_offset[i]);
							}
							if (b.content_size_ignore && typeof b.content_size_ignore == 'object' && b.content_size_ignore[i]) {
								content_size_ignore = b.content_size_ignore[i];
							}
							break;
						}
					}
				}
			}

			if (element) {
				var pos = this.findPos(element);
				if (win_size.height >= pos.box.height && !content_size_ignore) {
					b.ph.placeholder.style.display = "none";
					return false;
				}
				if (win_size.scrollY && win_size.scrollY + win_size.height > pos.top + pos.box.height / 2 + content_offset) {
					b.ph.placeholder.style.display = "block";
					return true;
				}
			}

			b.ph.placeholder.style.display = "none";
			return false;
		},

		callEvent : function (b) {
			if (this.scrollPage(b)) {
				for (var i = 0, l = b.items.length; i < l; i++) {
					try {
						this._super(b.items[i].zpx, b.rand_url, b.ph);
					} catch (e) {}
				}
				this.removeEvent(b.ph.window, 'scroll', b.call_event);
				this.removeEvent(b.ph.window, 'resize', b.call_event);
			}
		},
		
		markShown : function (ph, pid, b) {
			if (typeof ph.window.ml_places == 'undefined')
				ph.window.ml_places = {};
			try {
				ph.window.ml_places[pid] = {};
				if (b.items.length > 1) {
					ph.window.ml_places[pid].bid = [];
					for (i =0, il = b.items.length; i < il; ++i) {
						ph.window.ml_places[pid].bid.push(b.items[i].bid);
					}
				} else {
					ph.window.ml_places[pid].bid = b.items[0].bid;
				}
				
				ph.window.ml_places[pid].ph = ph.placeholder;
				ph.window.ml_places[pid]["repaint_"+b.pid] = this.proxy(this, this.repaint, [b]);
				return true;
			} catch (e) {}
			return false;
		},

		destroy : function (banner) {
			this._super(banner);
			if (banner.ph.placeholder.parentNode)
				banner.ph.placeholder.parentNode.removeChild(banner.ph.placeholder);
		},
	
		print : function (b) {
			if (!b.items || !b.items.length) return '';
			var banner_str = '';
			for (var i = 0, l = b.items.length; i < l; i++) {
				if(typeof b.print_item == 'function') {
					banner_str += b.print_item(b.items[i]);
				} else {
					banner_str += this.print_item(b.items[i]);
				}
			}
			return banner_str;
		},
		
		print_item : function (item) {
			var s = '<a href="' + item.link + '" class="banners__bottom__item last" target = "_blank">';
			s += '<span class="banners__bottom__item-inner">';
			if (item.img)     s += '<img src="' + item.img + '" alt="" class="banners__bottom__img" />';
			if (item.text[0]) s += '<span class = "banners__bottom__title">' + item.text[0] + '</span>';
			s += '</span>';
			s += '</a>';
			return s;
		}
	};

	/* Initializing mlText object */
	window.class_mlBottom = class_mlBase.extend(ext_mlBottom);
	window.obj_mlBottom = new class_mlBottom();

})();
