/* Creating new mlText object (if not already exists) */
(function(){

	if (typeof class_mlBase === 'undefined') {
		setTimeout(arguments.callee, 50);
		return;
	}

	if (typeof class_mlText !== 'undefined') {
		return;
	}

	/* Defining mlText class methods */
	var ext_mlText = {
		init : function (b) {
			var mw = window;
            		try {
                		if (parent.document) mw = parent;
                		if (!mw) mw = window;
            		} catch(e) { mw = window; }

            		if ("https:" == mw.location.protocol) {
                		var change_protocol = this.proxy(this, this.changeProtocol, [b]);
                		change_protocol();
            		}
			var ph = this.getTeaserPh(b.pid);
			b.ph = ph;
                        b._self = this;
			if (!b.items.length) return;
			for (var i = 0, il = b.items.length; i < il; i++) {

				if (this._useReferer) {
					b.items[i].place_dir = ((typeof(b.items[i].place_dir) != 'undefined' && b.items[i].place_dir.length) ? escape(b.items[i].place_dir) : this._defaultPlaceDir);
					b.items[i].link = this._clickServerUrl + b.items[i].place_dir.replace(/\/+$/, '') + '/?' + escape(b.items[i].link);
				}

				if(typeof b.items[i].more_links  != 'undefined') {
					for (var k = 0, kl = b.items[i].more_links.length; k < kl; k++) { 
						if (this._useReferer) b.items[i].more_links[k] = this._clickServerUrl + b.items[i].place_dir.replace(/\/+$/, '') + '/?' + escape(b.items[i].more_links[k]);
						if(/http(:|%3A)\/\/[^\/]+\/reference(\?|%3F)/.test(b.items[i].link)) {
							if (/^https?:\/\//i.test(b.items[i].more_links[k])) {
								var t = '&reference=' + escape(b.items[i].more_links[k]);
								if (this._useReferer) t = escape(t);
								b.items[i].more_links[k] = b.items[i].link + t;
							}
						}
					}
				}

				try {
					//array of texts
					if (!b.items[i].text.length) continue;
					for (var j = 0, jl = b.items[i].text.length; j < jl; j++) {
						var max_letters = b.items[i].max_letters ? b.items[i].max_letters : b.max_letters;
						var cut_text = this.teaserTextCut(this.fromHtmlEntities(b.items[i].text[j]) , max_letters);
						b.items[i].text[j] = this.toHtmlEntities(cut_text);
					}
				} catch (e) {}
			}
			if (typeof b.params == 'function') {
			    b.params(b);
			}
			var banner_str ='';
			if (typeof b.print == 'function') {
				banner_str += b.print(b);
			} else {
				banner_str += this.print(b);
			}
			ph.placeholder.innerHTML = banner_str;
			if (!b.disble_refresh) {
				ph.window["destroy_"+b.pid] = this.proxy(this, this.destroy, [b]);
				ph.window["repaint_"+b.pid] = this.proxy(this, this.repaint, [b]);

				var element = document.createElement("method");
				element.style.display = "none";
				element.innerHTML = "repaint_"+b.pid;
				b.ph.placeholder.insertBefore(element, b.ph.placeholder.firstChild);
			}

			if (this._useDataSpan && b.ph.placeholder.parentNode && !this._getElementsByClassName('js-ml-places-id', b.ph.placeholder.parentNode).length) {
				var _span = b.ph.document.createElement('span');
				_span.setAttribute('class', 'js-ml-places-id');
				_span.setAttribute('data-pid', b.pid);
				b.ph.placeholder.parentNode.insertBefore(_span, b.ph.placeholder);
			}

			if (this.isHidden(b.ph.placeholder, b.ph.window, b.ph.document)) { //check element or its ancestors hasn't display=none
				ph.eventObject = this.scrollParent(ph.placeholder, ph.document, ph.window);
				b.listener = this.proxy(this, this.listener, [b]);
				this.addEvent(ph.eventObject, 'scroll', b.listener);
				this.addEvent(ph.eventObject, 'resize', b.listener);
			} else {
				this.callEvent(b, b.rand_url, ph);
				this.markShown(ph, b.pid, b);
			}

			if (typeof b.callback == 'function') {
				this.onReady(this.proxy(this, b.callback, [b]), b.ph.window);
			}

			/* banner-show notification */
			this.onReady(this.proxy(this, this.notifyEvent, [b, 'show', b.ph.window]), b.ph.window);
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
				if (!b.disble_refresh) {
					ph.window.ml_places[pid]["repaint_"+b.pid] = this.proxy(this, this.repaint, [b]);
				}
				return true;
			} catch (e) {}
			return false;
		},
		
		callEvent : function (b, rand_url, ph) {
			for (var i = 0, l = b.items.length; i < l; i++) {
				try {
					this._super(b.items[i].zpx, rand_url, ph);
				} catch (e) {}
			}
		},
		
		print : function (b) {
			if (!b.items || !b.items.length) return '';
			var banner_str = '';
			for (var i = 0, l = b.items.length; i < l; i++) {
				if(typeof b.print_item == 'function') {
					banner_str += b.print_item(b.items[i], i);
				} else {
					banner_str += this.print_item(b.items[i], i);
				}
			}
			return banner_str;
		},
		
		print_item : function (item, i) {
			var s = '<a href="' + item.link + '" target="_blank" >';
			if (item.img) s += '<img src="' + item.img + '" />';
			if (item.text[0]) s += '<span>' + item.text[0] + '</span>';
			s += '<span>' + item.text[1] + '</span>';
			s += '</a>';
			return s;
		},

		listener : function(b) {
			if (this.isHidden(b.ph.placeholder, b.ph.window, b.ph.document)) //check element or its ancestors hasn't display=none
				return;
			
			this.removeEvent(b.ph.eventObject, 'scroll', b.listener);
			this.removeEvent(b.ph.eventObject, 'resize', b.listener);
			this.callEvent(b, b.rand_url, b.ph);
			this.markShown(b.ph, b.pid, b);
		}

	};

	/* Initializing mlText object */
	window.class_mlText = class_mlBase.extend(ext_mlText);
	window.obj_mlText = new class_mlText();

})();
