(function () {
	var googletag = window.googletag;

	if (!googletag || !googletag.cmd || typeof googletag.cmd.push != 'function' ) {
		setTimeout(arguments.callee, 50);
		return;
	}

	if (window.rbc_dfp && window.rbc_dfp._isML) {
		return;
	}

	window.rbc_dfp = {

		_isML : true,
		_slideData : [],
		_isActiveViewForSlide: false,
		_useTrafficSplit : true,

		addEvent : function(ePtr, eventType, eventFunc) {
			if (ePtr.addEventListener){
				ePtr.addEventListener(eventType, eventFunc, false);
			}
			if (ePtr.attachEvent){
				ePtr.attachEvent('on' + eventType, eventFunc);
			}
		},

		removeEvent : function (ePtr, eventType, eventFunc) {
			if (ePtr.addEventListener) {
				ePtr.removeEventListener(eventType, eventFunc, false);
			}
			if (ePtr.detachEvent){
				ePtr.detachEvent('on' + eventType, eventFunc);
			}
		},

		throttle : function (func, wait, options) {
			var context, args, result;
			var timeout = null;
			var previous = 0;
			if (!options) options = {};
			var later = function() {
				previous = options.leading === false ? 0 : Date.now();
				timeout = null;
				result = func.apply(context, args);
				if (!timeout) context = args = null;
			};
			return function() {
				var now = Date.now();
				if (!previous && options.leading === false) previous = now;
				var remaining = wait - (now - previous);
					context = this;
					args = arguments;
					if (remaining <= 0 || remaining > wait) {
						if (timeout) {
							clearTimeout(timeout);
							timeout = null;
						}
						previous = now;
						result = func.apply(context, args);
						if (!timeout) context = args = null;
					} else if (!timeout && options.trailing !== false) {
						timeout = setTimeout(later, remaining);
					}
					return result;
				};
		},

		proxy : function (context, fn, args) {
			var ret = function() {
				return fn.apply(context, args);
			}
			return ret;
		},
	
		getOffsetRect : function (obj, win, doc) {
			if (!win) win = window;
			if (!doc) doc = document;

			var box = obj.getBoundingClientRect();
			var _width = box.width;
			var _height = box.height;

			if (!_width) {
				_width = box.right - box.left;
			}
			if (!_height) {
				_height = box.bottom - box.top;
			}

			var body = doc.body;
			var docElem = doc.documentElement;

			var scrollTop = win.pageYOffset || docElem.scrollTop || body.scrollTop;
			var scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;

			var clientTop = docElem.clientTop || body.clientTop || 0;
			var clientLeft = docElem.clientLeft || body.clientLeft || 0;

			var _top  = box.top +  scrollTop - clientTop;
			var _left = box.left + scrollLeft - clientLeft;
			var _bottom  = _top + _height;
			var _right = _left + _width;
			
			return {
				top: Math.round(_top),
				left: Math.round(_left),
				bottom : Math.round(_bottom),
				right : Math.round(_right),
			
				box: {left: box.left, top: box.top, right: box.left + _width,  bottom: box.top + _height} /* element bounds in client area */
			}
		},

		isVisible : function(obj, win) {
			if (!win) win = window;
			if (!obj) return false;
			var r;
			try {
				if (obj.ph.style.display == "none") {
					obj.cssFlag = true;
					obj.cssText = obj.ph.style.cssText;
					obj.ph.style.display = "";
					obj.ph.style.overflow = 'hidden';
				}
				
				r = this.getOffsetRect(obj.ph);
				
			        if (r.box.bottom == r.box.top || r.box.left == r.box.right) { // KOCTblJIb to avoid zero div height
					if (!obj.cssFlag) {
						obj.cssFlag = true;
						obj.cssText = obj.ph.style.cssText;
					}
					if (r.box.bottom == r.box.top) {
						obj.ph.style.height = (obj.ph.parentNode && obj.ph.parentNode.className.match(/g-banner__height-(\d+)/))? obj.ph.parentNode.className.match(/g-banner__height-(\d+)/)[1] + 'px' :  '2px';
						obj.ph.style.overflow = 'hidden';
					}
					if (r.box.left == r.box.right) {
						obj.ph.style.width = '2px';
						obj.ph.style.overflow = 'hidden';
					}
					r = this.getOffsetRect(obj.ph);
				}
				
				/* decrese height/width if height/width > 0 */
				if (r.box.right > r.box.left) --r.box.right;
				if (r.box.bottom > r.box.top) --r.box.bottom;
	
				var is_toplevel_element = false;
				
				if (win.document.elementFromPoint) {
				
					var points =  [
						{'x':r.box.left, 'y':r.box.top}, {'x':r.box.right, 'y':r.box.top}, {'x':r.box.left,'y':r.box.bottom}, {'x':r.box.right,'y':r.box.bottom},
						{'x':(r.box.left+r.box.right)/2, 'y':r.box.top}, {'x':(r.box.left+r.box.right)/2, 'y':r.box.bottom}, {'x':r.box.left,'y':(r.box.top+r.box.bottom)/2}, {'x':r.box.right,'y':(r.box.top+r.box.bottom)/2}
					];
				
					/* check if banner div is top element at least one div corner === check zIndex */
					for (var p = 0, pl = points.length; p < pl; ++p) {
						try {
							if (points[p].x < 0 || points[p].y < 0) continue;

							var pageElem = win.document.elementFromPoint(points[p].x, points[p].y);
				
							if (!pageElem) continue;
				
							if (pageElem == obj.ph || pageElem == obj.ph.parentNode /* Firefox fix */) {
								is_toplevel_element = true;
								break;
							}
				
							while (pageElem.parentNode) {
								if (pageElem.parentNode == obj.ph) {
									is_toplevel_element = true;
									break;
								}
								pageElem = pageElem.parentNode;
							}
						} catch(e) {}
					}
				}
			
				if (!is_toplevel_element) return false;
				
			} catch (e) { return false; }

			try {
				var x = (win.pageXOffset !== undefined) ? win.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
				var y = (win.pageYOffset !== undefined) ? win.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
				var winInnerWidth = win.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
				var winInnerHeight = win.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
				
				is_toplevel_element = (x <= r.right && x + winInnerWidth >= r.left) && (y <= r.bottom && y + winInnerHeight >= r.top);
				if (!is_toplevel_element) return false;

			} catch (e) {}

			if (obj.cssFlag) {
				obj.ph.style.cssText = obj.cssText;
				obj.cssFlag = false;
			}
			return true;
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
		
		getStory : function(dfpDivId) {
			if (this._getElementsByClassName('js-rbcslider-slide').length == 0 && this._getElementsByClassName('js-newsslider-slide').length == 0) {
				try {
					return window.rosbusinessconsulting.config.get('story');
				} catch (e) {}
				return false;
			}

			try {
				var element = document.getElementById(dfpDivId);
				if (!element) return;

				//adUnit inside slide
				while (element) {
					if (/js-(rbcslider|newsslider)-slide/i.test(element.className) && element.getAttribute('data-story')) {
						return element.getAttribute('data-story').split('|');
					}
					element = element.parentNode;
				}
				//adUnit outside slide
				return window.rosbusinessconsulting.config.get('story');
			} catch(e) {}
			return false;
		},

		getPageCategory : function(dfpDivId) {
			try {
				var element = document.getElementById(dfpDivId);
				if (!element) return false;
				
				if (this._getElementsByClassName('js-rbcslider-slide').length == 0 && this._getElementsByClassName('js-newsslider-slide').length == 0) {
					return false;
				}
				
				//adUnit inside slide
				while (element) {
					if (/js-(rbcslider|newsslider)-slide/i.test(element.className) && element.getAttribute('data-category-nick')) {
						return element.getAttribute('data-category-nick');
					}
					element = element.parentNode;
				}
			} catch (e) {};
			return false;
		},

		getPageUrl : function() {
			try {
				var arr = /[a-f0-9]{24}/.exec(location.pathname);
				if (arr[0]) return arr[0];
			} catch (e) {};
			return false;
		},

		getArticleTags : function(dfpDivId) {
			try {
				var element = document.getElementById(dfpDivId);
				if (!element) return false;
				
				if (this._getElementsByClassName('js-rbcslider-slide').length == 0 && this._getElementsByClassName('js-newsslider-slide').length == 0) {
					return false;
				}
				
				//adUnit inside slide
				while (element) {
					if (/js-(rbcslider|newsslider)-slide/i.test(element.className)) {
						if (element.getAttribute('data-banner-tags')) {
							return (element.getAttribute('data-banner-tags') == 'none' ? false : JSON.parse(element.getAttribute('data-banner-tags')));
						} else {
							var atags = this._getElementsByClassName('article__tags__link', element);
							if (atags.length) {
								var tags = [];
								for (var i = 0; i < atags.length; i++) {
									tags.push( this.translit( atags[i].text.replace(/^\s+/, '').replace(/\s+$/, ''), true) );
								}
								element.setAttribute('data-banner-tags', JSON.stringify(tags));
								return tags;
							} else {
								element.setAttribute('data-banner-tags', 'none');
							}
						}
						break;
					}
					element = element.parentNode;
				}
			} catch (e) {};
			return false;
		},

		getSlideIndex : function(element) {
			if (!element) return 0;
			try {
				while (element) {
					if (/js-(rbcslider|newsslider)-slide/i.test(element.className)) {
						return element.getAttribute('data-index') || 0;
					}
					element = element.parentNode;
				}
			} catch(e) {}
			return 0;
		},

		setSlideData : function(obj) {
			if (!obj || !obj.ph) return;
			if (typeof obj.slideIndex == 'undefined') {
				obj.slideIndex = this.getSlideIndex(obj.ph);

				var elId = obj.slot.getSlotElementId();
				if (!this._slideData[obj.slideIndex]) this._slideData[obj.slideIndex] = {
					'story' : this.getStory(elId),
					'category' : this.getPageCategory(elId),
					'tag' : this.getArticleTags(elId),
					'objs' : []
				};

				this._slideData[obj.slideIndex].objs.push(obj);
			}
		},

		findElement : function(ident) {
			var elements = [];
			
			if (!ident || !/^[.#].+/.test(ident)) return null;
			
			var prefix = ident.substr(0, 1);
			ident = ident.substr(1);
			
			switch (prefix) {
				case "#":
					if ( document.getElementById(ident) )
						elements.push( document.getElementById(ident) );
					break;
				case ".":
					elements = this._getElementsByClassName(ident, document);
					break;
				default:
					break;
				}
			return (elements && elements.length)? elements[0] : null;
		},

		array_indexOf : function(arr, element) {
		
			if (!arr || !arr.length || !element) return -1;
		
			if (typeof [].indexOf == "function") {
				return arr.indexOf(element);
			}
			for (var i = 0, j = arr.length; i < j; i++) {
				if (arr[i] === element) { return i; }
			}
			return -1;
		},

		translit : function (s, isLower, maxLen) {
			maxLen = maxLen || 40;
			//GOST 7.79—2000
			var rus = [
				"а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"
				,"А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"
				];
			var lat = [
				"a", "b", "v", "g", "d", "e", "e", "j", "z", "i", "y", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "f", "h", "c", "ch", "sh", "sch", "y", "y", "y", "e", "yu", "ya"
				,"A", "B", "V", "G", "D", "E", "E", "J", "Z", "I", "Y", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "F", "H", "C", "CH", "SH", "SCH", "Y", "Y", "Y", "E", "YU", "YA"
				];
			
			if (!s || typeof s != 'string') return "";
			if (isLower) s = s.toLowerCase();
			s = s.replace(/[^a-zA-Zа-яА-ЯёЁ0-9_\- ]/g, '');
			
			if (!s) return '';
			
			for (i = 0; i < rus.length / (isLower? 2 : 1); i++) {
				if (!/[а-яА-ЯёЁ]/.test(s)) break;
				s = s.replace(RegExp(rus[i], "g"), lat[i]);
			}
			return s.replace(/ {2,}/g, ' ').replace(/ \- /g, '-').replace(/ /g, '_').substr(0, maxLen);
		},

		createCloseButton : function(obj) {
			
			if (!obj.ph) return;
			
			var cb = document.createElement('div');
			cb.className = "ml-bclose" + (window.bannersVersion ? " ml-bclose-" + window.bannersVersion : "");
			cb.onclick = this.proxy(this, this.hideDivBanner, [obj]);
			setTimeout(function() {obj.ph.insertBefore(cb, obj.ph.firstChild);}, 1000);
		},

		hideDivBanner : function(obj) {

			function checkDivHeight(p) {
				var height = 0;
				for (var c=0; c < p.children.length; c++) {
					height += p.children[c].getBoundingClientRect().height;
				}
				if (0 == height) {
					p.style.display = 'none';
				}
			}

			googletag.pubads().clear([obj.slot]);

			var _parent = document.getElementById(obj.slot.getSlotElementId()) || obj.ph; //DFP removes id after slot displaying
			_parent.innerHTML = '';
			_parent.style.display = 'none';

			/* hide closest ancestor div.banner if it's children height == 0 */
			while (_parent) {
				if (/(^|\s+)banner(\s+|$)/.test(_parent.className)) {
					setTimeout( function() { checkDivHeight(_parent); }, 300);
					break;
				}
				_parent = _parent.parentNode;
			}
		},

		wndScroll : function(obj) {
			try {
				if (window.dfp_sync_var) {
					window.PREVENT_REPAINT = true;
				}
			} catch(e) {}

			if (!obj.addEventFlag) {
				obj.addEventFlag = true;
				this.addEvent(obj.eventObject, 'scroll', obj.scrollFunc);
				this.addEvent(window, 'resize', obj.scrollFunc);
				if (obj.eventName) this.addEvent(obj.eventObject, obj.eventName, obj.scrollFunc);
			}

			if (!obj.scrollFlag) {
				if (this.isVisible(obj)) {

					obj.scrollFlag = true;

					if (obj.addEventFlag) {
						obj.addEventFlag = false;
						this.removeEvent(obj.eventObject, 'scroll', obj.scrollFunc);
						this.removeEvent(window, 'resize', obj.scrollFunc);
						if (obj.eventName) this.removeEvent(obj.eventObject, obj.eventName, obj.scrollFunc);
					}

					if (window.dfp_sync_var) {
						if (obj.exclusive_vars.length && obj.slideIndex > 0) {
							if (this._isActiveViewForSlide) { // refresh all exclusive slots of slide when the 1st is visible
								var slots = [];
								var slideData = this._slideData[obj.slideIndex];
								for (var i=0, l=slideData.objs.length; i<l; ++i) {
									var o = slideData.objs[i];
									if (!o.exclusive_vars.length) continue;

									o.scrollFlag = true;

									if (o.addEventFlag) {
										o.addEventFlag = false;
										this.removeEvent(o.eventObject, 'scroll', o.scrollFunc);
										this.removeEvent(window, 'resize', o.scrollFunc);
										if (o.eventName) this.removeEvent(o.eventObject, o.eventName, o.scrollFunc);
									}

									if (o.cssFlag) {
										o.ph.style.cssText = o.cssText;
										o.cssFlag = false;
									}

									o.slot.clearTargeting(); //clear targetings set on for example prev slide
									o.slot.setTargeting("sync", ["true", window.dfp_sync_var]);
									this.setSlotParams(o);
									slots.push(o.slot);

									o.slideIndex = undefined; //fix for infiny page adUnit rotation

									//TODO: close button?
								}

								if (slots.length) {
									googletag.pubads().refresh(slots);
									delete slideData.objs;
								}
							} else {
								obj.slot.clearTargeting(); //clear targetings set on for example prev slide
								obj.slot.setTargeting("sync", ["true", window.dfp_sync_var]);
								this.setSlotParams(obj);
								googletag.pubads().refresh([obj.slot]);
								if (obj.closeButtonFlag) this.createCloseButton(obj);
							}
						} else {
							/* hide closest ancestor div.banner if it's children height == 0 */
							this.hideDivBanner(obj);
						}

					} else {
						obj.slot.clearTargeting(); //clear targetings set on for example prev slide
						this.setSlotParams(obj);
						googletag.pubads().refresh([obj.slot]);
						if (obj.closeButtonFlag) this.createCloseButton(obj);
					}
				
				}
			}
		},
	
		addSlot : function(slot, activeView, params) {
			try { 
				if (!window.dfp_places) window.dfp_places = {};
				slot.story_enable = (params && params.story_enable) ? params.story_enable : false;
				slot.category_enable = (params && params.category_enable) ? params.category_enable : false;
				window.dfp_places[slot.getSlotElementId()] = { 
						'slot'           : slot, 
						'load_attempt'   : 0,
						'activeView'     : activeView, 
						'eventObjectId'  : (params && params.eventObject) ? params.eventObject : window,
						'eventName'      : (params && params.eventName) ? params.eventName : '',
						'exclusive_vars' : (params && params.exclusive_vars) ? params.exclusive_vars : []
				};
			} catch(e) {}

			return slot;
		},

		setSlotParams : function(obj) {
			if (!obj || !obj.slot) {
				return;
			}
			var targets = {};
			targets['url'] = this.getPageUrl(); //url targeting

			if (this._slideData[obj.slideIndex]) {
				if (obj.slot.story_enable && this._slideData[obj.slideIndex]['story']) {
					targets['story'] = this._slideData[obj.slideIndex]['story'];
				}
				if (obj.slot.category_enable && this._slideData[obj.slideIndex]['category']) {
					targets['category'] = this._slideData[obj.slideIndex]['category'];
				}
				if (this._slideData[obj.slideIndex]['tag']) {
					targets['tag'] = this._slideData[obj.slideIndex]['tag'];
				}
			}
			if (this._useTrafficSplit) {
				targets['split_version'] = this.trafficSplit.getSplitVersion();
			}

			try {
				for (var t in targets) {
					if (!targets.hasOwnProperty(t) || !targets[t]) continue;
					obj.slot.setTargeting(t, targets[t]);
				}
			} catch(e) {}
		},

		display : function (dfpDivId, activeView, params) {
			var slot_arr = [];
			var element;
			if (typeof dfpDivId == 'object' && dfpDivId.length) {
				for (var j = 0, jl = dfpDivId.length; j < jl; j++) {
					if (typeof window.dfp_places[dfpDivId[j]] == 'undefined') return;
					element = document.getElementById(dfpDivId[j]);
					if (!element) {
						if (++window.dfp_places[dfpDivId[j]]['load_attempt'] > 20) continue;
						setTimeout(this.proxy(this, this.display, [dfpDivId, activeView, params]), 100);
						return;
					} else {
						window.dfp_places[dfpDivId[j]].dfpDivId = dfpDivId[j];
						window.dfp_places[dfpDivId[j]].ph = element;
						slot_arr.push(window.dfp_places[dfpDivId[j]].slot);

						this.setSlideData(window.dfp_places[dfpDivId[j]]);
					}
				}
			} else {
				if (typeof window.dfp_places[dfpDivId] == 'undefined') return;
				element = document.getElementById(dfpDivId);
				if (!element) {
					if (++window.dfp_places[dfpDivId]['load_attempt'] > 20) return;
					setTimeout(this.proxy(this, this.display, [dfpDivId, activeView, params]), 100);
					return;
				} else {
					window.dfp_places[dfpDivId].dfpDivId = dfpDivId;
					window.dfp_places[dfpDivId].ph = element;
					window.dfp_places[dfpDivId].closeButtonFlag = (typeof params == 'object') ? !!params.closeButton : false;
					slot_arr.push(window.dfp_places[dfpDivId].slot);

					this.setSlideData(window.dfp_places[dfpDivId]);
				}
			}

			/* check AddUnit initing (googletag.display shoud be run only once time for each AdUnit) */
			if (typeof dfpDivId == 'object' && dfpDivId.length) {
				for (var j = 0, jl = dfpDivId.length; j < jl; j++) {
					if (!window.dfp_places[dfpDivId[j]].inited) {
						googletag.display(dfpDivId[j]);
						window.dfp_places[dfpDivId[j]].inited = true;
					}
				}
			} else {
				if (!window.dfp_places[dfpDivId].inited) {
					googletag.display(dfpDivId);
					window.dfp_places[dfpDivId].inited = true;
				}
			}

			if (slot_arr.length) {
				if (typeof dfpDivId != 'object' && (typeof activeView != 'undefined' ? activeView : window.dfp_places[dfpDivId].activeView)) {
				
					var obj = window.dfp_places[dfpDivId];
					obj.scrollFlag = false;
					obj.addEventFlag = false;
					if (typeof obj.eventObjectId == 'string') {
						obj.eventObject = this.findElement(obj.eventObjectId) || window;
					} else {
						obj.eventObject = obj.eventObjectId ? obj.eventObjectId : window;
					}
					obj.scrollFunc = this.throttle(this.proxy(this, this.wndScroll, [obj]), 300);
					setTimeout(obj.scrollFunc, 300);
				} else {
					for (var i=0, l=slot_arr.length; i<l; ++i) {

						var idx = slot_arr[i].getSlotElementId();
						var obj = window.dfp_places[idx];

						slot_arr[i].clearTargeting(); //clear targetings set on for example prev slide
						this.setSlotParams(obj);
					}
					googletag.pubads().refresh(slot_arr);
				}
			}
		},

		trafficSplit : {

			_uidName : '_ml_uid',

			init : function() {
				var uid = this._getCookie(this._uidName);
				if (!uid) {
					uid = Date.now() + Math.random().toFixed(6);
					this._setCookie(this._uidName, uid, {'expires': 30*24*3600, 'path' : '/', 'domain': this._getCookieDomain()});
				}
				var percents = [70, 15, 15];
				var rnd = uid.split('').slice(-2).join('');
				for (var i=0, percent=0; i<percents.length; i++) {
					percent += percents[i];
					if (rnd < percent) {
						this._split_version = i;
						break;
					}
				}
			},

			getSplitVersion: function() {
				var split_version = googletag.pubads().getTargeting('split_version');
				if (typeof split_version == 'object' && split_version.length ) {
					if (this._split_version) split_version.push(this._split_version.toString());
				} else {
					split_version = this._split_version ? this._split_version.toString() : '';
				}
				return split_version;
			},

			_getCookieDomain : function() {
				return location.hostname.split('.').slice(-2).join('.');
			},

			_getCookie : function(name) {
				var matches = document.cookie.match(new RegExp(
					"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
				));
				return matches ? decodeURIComponent(matches[1]) : undefined;
			},

			// устанавливает cookie с именем name и значением value
			// options - объект с свойствами cookie (expires, path, domain, secure)
			_setCookie : function(name, value, options) {
				options = options || {};
				
				var expires = options.expires;
				
				if (typeof expires == "number" && expires) {
					var d = new Date();
					d.setTime(d.getTime() + expires * 1000);
					expires = options.expires = d;
				}
				if (expires && expires.toUTCString) {
					options.expires = expires.toUTCString();
				}
				
				value = encodeURIComponent(value);
				
				var updatedCookie = name + "=" + value;
				for (var propName in options) {
					updatedCookie += "; " + propName;
					var propValue = options[propName];
					if (propValue !== true) {
						updatedCookie += "=" + propValue;
					}
				}

				document.cookie = updatedCookie;
			}
		}
	};

	if (rbc_dfp._useTrafficSplit) rbc_dfp.trafficSplit.init();

})();
