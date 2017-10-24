if (typeof video_banner_plugin == 'undefined') {

video_banner_plugin = function (o)
{
	if (o.b.altCodeFlag) return;
	var player = this;
	o.b.player = player;

	if (!o.b.player.isReady_ || (o.b.inlineVideoSupport && !o.b.ph.window.enableInlineVideo)) {
		setTimeout( o.self.proxy(this, video_banner_plugin, [o]) , 50);
		return;
	}

	//hide controls
	var ua = navigator.userAgent;
	var checkAndroid = /Android(?=.*?(Mobile))/i.test(ua);
	var checkAndroidTablet = /(Android(?=.*?tab)|Android 3|Android(?!.*?(phone|Mobile)))/i.test(ua);
	var checkIphone = /iphone/i.test(ua);
	var checkIpad = /ipad/i.test(ua);
	var checkIpod = /ipod/i.test(ua);
	var checkWinPhone = /Windows Phone|WPDesktop|IEMobile|WP7/i.test(ua);
	var isMobile = (checkAndroid || checkIphone || checkWinPhone);
	var isTablet = (checkAndroidTablet || checkIpad);
	var isOpera = /(Opera|OPR\/[0-9.]+|Android.*OPR\/|OPiOS\/[0-9.])/.test(ua);
	var isDesktopSafari = /Version\/\d[^\s]+\s+Safari/.test(ua) && !/Chrome\//.test(ua);
	var default_android_browsers = (/.*Version\/[.0-9]+.*(Chrome\/[.0-9]+)?/i.test(ua) || /SamsungBrowser\/[.0-9]+/i.test(ua)) && !checkIphone && !checkIpad;
	var isHls = (parseInt(o.self.flVer()[0]) || isDesktopSafari) && !o.self.isIE();
	var ie9and10 = /MSIE\s(9|10)/i.test(ua);
	
	if (o.b.isMobile) {
		var el = player.el();
		el = (el.tagName.toLowerCase() == 'video') ? el : el.getElementsByTagName('VIDEO')[0];
		if (el && o.b.inlineVideoSupport) {
			o.b.ph.window.enableInlineVideo(el, {iPad: true});
		}
	}

	try {
		var bpb = o.b.player.bigPlayButton.el();
	} catch (e) {
		bpb = o.getElementsByClassName('vjs-big-play-button',o.ph.placeholder)[0]
	}

	//if(!checkAndroid) bpb.firstChild.style.visibility = 'hidden';
	var videoTag = o.ph.placeholder.getElementsByTagName('video')[0];
	try {
		var controlBar = o.b.player.controlBar.el();
	} catch(e) {
		controlBar = o.getElementsByClassName('vjs-control-bar',o.ph.placeholder)[0];
	}

	try {
		var controlBar_current_time = o.b.player.controlBar.currentTimeDisplay.el();
	} catch(e) {
		controlBar_current_time = o.getElementsByClassName('vjs-current-time', o.ph.placeholder)[0];
	}
	try {
		var controlBar_duration = o.b.player.controlBar.durationDisplay.el();
	} catch(e) {
		controlBar_duration = o.getElementsByClassName('vjs-duration', o.ph.placeholder)[0];
	}
	try {
		var controlBar_time_devider = o.b.player.controlBar.timeDivider.el();
	} catch(e) {
		controlBar_time_devider = o.getElementsByClassName('vjs-time-divider', o.ph.placeholder)[0];
	}
	try {
		var controlBar_fullscreen = o.b.player.controlBar.fullscreenToggle.el();
	} catch(e) {
		controlBar_fullscreen = o.getElementsByClassName('vjs-fullscreen-control', o.ph.placeholder)[0];
	}
	try {
		var controlBar_volume = o.b.player.controlBar.volumeMenuButton.el()
	} catch(e) {
		controlBar_volume = o.getElementsByClassName('vjs-volume-control', o.ph.placeholder)[0];
	}

	var playControl = o.getElementsByClassName('vjs-play-control',o.ph.placeholder)[0];
	try {
		var loading_spinner = o.b.player.loadingSpinner.el()
	} catch(e) {
		loading_spinner = o.getElementsByClassName('vjs-loading-spinner', o.ph.placeholder)[0];
	}
	var video_table = o.ph.document.getElementById('video_table_' + o.b.pid);
	var mlph = o.ph.placeholder;
	var mlph_background = o.ph.document.getElementById('background' + o.b.pid);
	var mlph_video = o.ph.document.getElementById('top_video' + o.b.pid);
	var mlph_link;
	var mlph_textDiv;
	var mlph_poster;
	var mlph_poster_inner;
	var mlph_poster_helper;
	var mlph_poster_span;
	var mlph_poster_button_w;
	var mlph_poster_button_g;
	var mlph_overlay_div;
	var window_play_flag = false;
	var source_flag = true;
	var load_flag = false;
	var transitionFlag = false;
	var link_flag = /^https?:\/\//i.test(o.b.link);
	var isClick = false;
	o.b.volume = 0;
	o.b.volumeFlag = false;
	o.b.volumeFlagDown = false;
	o.b.isPlay = false;
	o.b.isPaused = false;
	o.b.isTimeoutClose = false;
	
	controlBar.style.zIndex = "10";
	player.controls(false);

	if (isMobile || isTablet) {
		player.volume(0.5);
	} else {
		player.volume(o.b.volume);
	}

	var fraction = !isNaN(parseFloat(o.b.fraction)) ? o.b.fraction : 0.2;
	o.b.playStarted = false;
	if (o.b.postvideo_on) {
		o.b.postvideo_on = /^https?:\/\/.+/i.test(o.b.postvideo_url);
	}

	if(!checkAndroid) player.muted(true);

	bpb.style.left = '50%';
	bpb.style.top = '50%';
	bpb.style.cssText += (isMobile || isTablet) ? 'margin-left: -24px; margin-top: -24px;' : 'margin-left: -45px; margin-top: -22px;';
	if (!default_android_browsers) bpb.style.display = 'block';
	
	//add <a> element
	mlph_link = o.ph.document.createElement('a');
	mlph_link.style.cssText = 'display: none; position: absolute; width: 100%; height:' + ((isTablet || isMobile) ?  '87%' : '100%') + '; z-index: 9; left: 0px; top: 0px; line-decoration: none; cursor: pointer; background: transparent;';
	mlph_link.href = o.b.link ? o.b.link : 'javascript:';
	mlph_link.target = '_blank';

	if(o.b.flag_click && link_flag) {

		mlph_video.insertBefore(mlph_link, mlph_video.firstChild);
		mlph_link.onclick = function () {
			isClick = true;
			setTimeout(function () {
				isClick = false;
			}, 100);
			player.pause();
			if (o.b.videoClickTracking && o.b.videoClickTracking.length) {
				o.self.callEvent(o.b.videoClickTracking, o.b.rand_url, o.b.ph);
			}
		}
	}

	if (isMobile) {
		mlph_overlay_div = o.ph.document.createElement('div');
		mlph_overlay_div.style.cssText = 'display: block; position: absolute; width: 100%; height: 100%; z-index: 10;';
		mlph_video.insertBefore(mlph_overlay_div, mlph_video.firstChild);

		o.self.addEvent(videoTag, 'loadedmetadata', function() {
			mlph_overlay_div.style.display = "none";
		});
	}

	if (o.b.flag_text && link_flag && !isMobile && !isTablet) {
		mlph_textDiv = o.ph.document.createElement('div');
		mlph_textDiv.style.cssText = 'display : none; position: absolute; width: 100%; bottom: 15px;  text-align: center; z-index: 1;';
		mlph_textDiv.setAttribute('id', 'textLink'+o.b.pid);
		mlph_textDiv.innerHTML = "&#1050;&#1083;&#1080;&#1082;&#1085;&#1080;&#1090;&#1077;&#32;&#1085;&#1072;&#32;&#1074;&#1080;&#1076;&#1077;&#1086;&#32;&#1076;&#1083;&#1103;&#32;&#1087;&#1077;&#1088;&#1077;&#1093;&#1086;&#1076;&#1072;&#32;&#1085;&#1072;&#32;&#1089;&#1072;&#1081;&#1090;&#32;&#1088;&#1077;&#1082;&#1083;&#1072;&#1084;&#1086;&#1076;&#1072;&#1090;&#1077;&#1083;&#1103;";
		mlph_textDiv.style.opacity = 0;
		mlph_video.insertBefore(mlph_textDiv, mlph_video.firstChild);
	}
	
	//if ie - insert invisible picture, to make <a> element enlarge
	if(o.self.isIE() || ie9and10) {
		mlph_link.innerHTML = '<img style="filter: alpha(opacity=1);opacity=0.01" width="100%" height="100%">';
	};

	//calc banner load
	if (o.b.eshows_type == 'creativeview') {
		o.self.callEvent( o.b.events['start'] , o.b.rand_url, o.b.ph);
		o.b.events['start'] = [];
		o.b.eshows_type = o.b.eshows_type_save;
	}
	if (o.b.events['creativeview']) {
		o.self.callEvent( o.b.events['creativeview'] , o.b.rand_url, o.b.ph);
		o.b.events['creativeview'] = [];
	}

	player.on('play', function ()
	{
		o.b.isPlay = true;
		o.b.isPaused = false;
		if (o.b.isMobile) {
			player.controls(true);
			var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
			volButton.show();
			if (volButton.muteToggle) volButton.muteToggle.show();
			if (volButton.volumeControl) volButton.volumeControl.show();
		}

		if (checkIphone || checkIpad || checkIpod) {
			try {
				var iOS8or9 = typeof document === 'object' && 'object-fit' in document.head.style && !matchMedia('(-webkit-video-playable-inline)').matches;
			
				if (iOS8or9) {
					loading_spinner.style.display = "none";
				}
			} catch(e) {}
			
			if (mlph.style.display == "none") {
				player.pause();
				return;
			}
		}

		if (checkWinPhone) {
			videoTag.removeAttribute('controls');
			if (!window_play_flag) {
				if (parseInt(player.currentTime()) > 0) {
					loading_spinner.style.display = "none";
					player.currentTime(0);
				}
				window_play_flag = true;
			}
		}

		if (!o.b.playStarted) {
			o.b.playStarted = true;
			/*fraction = 0; TASK-8797*/
		}

		o.self.callEvent( o.b.events['start'] , o.b.rand_url, o.b.ph);
		o.b.events['start'] = []; 
		bpb.style.display = 'none';
		mlph_link.style.display = 'block';
		if (o.b.flag_text && link_flag && !isMobile && !isTablet) mlph_textDiv.style.display = 'block';

	});
	
	player.on('pause', function ()
	{
		o.b.isPaused = true;
		bpb.style.display = 'none';
		player.volume(0);
		if (o.b.isMobile) {
			player.controls(true);
			var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
			volButton.show();
			if (volButton.muteToggle) volButton.muteToggle.show();
			if (volButton.volumeControl) volButton.volumeControl.show();
		}
		if (default_android_browsers) mlph_link.style.display = 'none';
	});
	
	player.on('ended', function ()
	{
		if (!o.b.postvideo_state) {
			o.b.postvideo_state = 'NONE';
			if (o.b.postvideo_on) {
				o.b.postvideo_state = 'AD';

				mlph_poster = o.ph.document.createElement('div');
				mlph_poster.id = 'postvideo' + o.b.pid;
				mlph_poster.style.cssText = 'text-align: center; position: absolute; opacity : 0.8; filter: alpha(Opacity=80); background-color : #000000;';
				mlph_poster.style.display = 'none';
				mlph_poster.style.width = '100%';
				mlph_poster.style.height = '100%';
				mlph_poster.style.visibility = 'hidden';
				mlph_poster.style.zIndex = 9;

				mlph_poster_inner = o.ph.document.createElement('div');
				mlph_poster_inner.style.display = "inline-block";
				mlph_poster_inner.style.verticalAlign = "middle";
                       
				mlph_poster_helper = o.ph.document.createElement('div');
				mlph_poster_helper.style.display = "inline-block";
				mlph_poster_helper.style.verticalAlign = "middle";
				mlph_poster_helper.style.height = "100%";
				mlph_poster_helper.style.width = "0px";

				mlph_poster_button_w = o.ph.document.createElement('div');
				mlph_poster_button_w.style.display = 'block';
				mlph_poster_button_w.style.width = '100px';
				mlph_poster_button_w.style.height = '100px';
				mlph_poster_button_w.style.cursor = 'pointer';
				mlph_poster_button_w.style.margin = '0 auto';
				mlph_poster_button_w.style.background = 'transparent url("http://content.rbc.medialand.ru/native/button_white.png") 50% 50% no-repeat';
				mlph_poster_inner.appendChild(mlph_poster_button_w);

				mlph_poster_button_g = o.ph.document.createElement('div');
				mlph_poster_button_g.style.display = 'none';
				mlph_poster_button_g.style.width = '100px';
				mlph_poster_button_g.style.height = '100px';
				mlph_poster_button_g.style.cursor = 'pointer';
				mlph_poster_button_g.style.margin = '0 auto';
				mlph_poster_button_g.style.background = 'transparent url("http://content.rbc.medialand.ru/native/button_green.png") 50% 50% no-repeat';
				mlph_poster_inner.appendChild(mlph_poster_button_g);

				mlph_poster_span = o.ph.document.createElement('span');
				mlph_poster_span.innerHTML = '&#1055;&#1088;&#1103;&#1084;&#1086;&#1081;&#32;&#1101;&#1092;&#1080;&#1088;<br/>&#1090;&#1077;&#1083;&#1077;&#1082;&#1072;&#1085;&#1072;&#1083;&#1072;&#32;&#1056;&#1041;&#1050;';
				mlph_poster_span.style.textAlign = 'center';
				mlph_poster_span.style.display = 'block';
				mlph_poster_span.style.marginTop = '15px';
				mlph_poster_span.style.fontSize = '21px';
				mlph_poster_span.style.fontFamily = 'ALSStory, Arial';
				mlph_poster_span.style.color = '#fff';
				mlph_poster_span.style.lineHeight = '115%';
				mlph_poster_span.style.whiteSpace = 'nowrap';
				mlph_poster_inner.appendChild(mlph_poster_span);

				mlph_poster.appendChild(mlph_poster_inner);
				mlph_poster.appendChild(mlph_poster_helper);

				o.self.addEvent(mlph_poster_button_g, 'click', function() {
					try {
						o.ph.window.liveTv.openBigPlayer();
					} catch (e) {}
					mlph.style.display = 'none';
					mlph.style.visibility = 'hidden';
					o.self.onReady(o.self.proxy(o.self, o.self.notifyEvent, [o.b, 'hide', o.b.ph.window]), o.b.ph.window);
				});

				o.self.addEvent(mlph_poster, 'mouseover', function() {
					mlph_poster_button_g.style.display = 'block';
					mlph_poster_button_w.style.display = 'none';
				});

				o.self.addEvent(mlph_poster, 'mouseout', function() {
					mlph_poster_button_w.style.display = 'block';
					mlph_poster_button_g.style.display = 'none';
				});

				if (mlph_video) {
					mlph_video.parentNode.insertBefore(mlph_poster, mlph_video);
					mlph_poster.style.height = mlph_video.style.height;
				}
			}
		}

		switch (o.b.postvideo_state) {
			case 'NONE':
				o.self.callEvent( o.b.events['complete'] , o.b.rand_url, o.b.ph);

				if (o.b.fix_scroll) { /* fix scroll when hide */
					try {
						g = o.self.winSize(o.ph.window, o.ph.document);
						scrollY = o.self.getBodyScrollTop(o.ph.window, o.ph.document);
						mlph_rect = o.self.getOffsetRect(mlph, o.ph.window, o.ph.document);
						h = mlph_rect.box.bottom - mlph_rect.box.top
						if (mlph_rect.top + h/2 < scrollY + g.height/2) {
							o.ph.window.scrollBy(0, -h);
						}
					} catch (e) {}
				}

				bpb.style.display = 'none';
				o.self.hideDivBanner(o.ph.placeholder);

				o.self.notifyEvent(o.b, 'hide', o.ph.window);

				clearTimeout(o.b.timerUp);
				o.b.volumeFlag = false;
				o.b.isPlay = false;

				clearTimeout(o.b.timerDown);
				o.b.volumeFlagDown = false;
				//go to start position
				setTimeout(function() {
					player.currentTime(0);
					player.pause();

					if(checkAndroid) bpb.style.display = 'block';
				}, 1000);

				if (!isMobile && !isTablet) {
					o.self.removeEvent(o.ph.window, 'scroll', checkScroll);
					o.self.removeEvent(o.ph.window, 'resize', checkScroll);
				}

				break;
			case 'AD':
				o.self.callEvent( o.b.events['complete'] , o.b.rand_url, o.b.ph);
				try {
					if (this.isIE()) {
						var mlphWidth = mlph.clientWidth || mlph.offsetWidth;
						mlph_video.style.height = (mlphWidth * 9) / 16 + "px";
						player.height(parseInt(mlphWidth)*9/16);
					} else {
						mlph_video.style.height = parseInt(o.self.getStyle(mlph, 'width'))*9/16 + "px";
						player.height(parseInt(o.self.getStyle(mlph, 'width'))*9/16);
					}
				} catch(e) {}

				bpb.style.display = 'none';

				if (mlph_link) {
					mlph_link.style.display = 'none';
					mlph_link.style.visibility = 'hidden';
				}
				if (mlph_textDiv) {
					mlph_textDiv.style.display = 'none';
					mlph_textDiv.style.visibility = 'hidden';
				}

				player.off('timeupdate', o.self.timeupdate);

				setTimeout(function() {
					player.pause();

					player.src({ 'type' : 'video/mp4', src : o.b.postvideo_url });
					player.controls(true);

					source_flag = false;
					load_flag = true;
					fraction = 0.01;

					checkScroll();

					try {
						if (this.isIE()) {
							var mlphWidth = mlph.clientWidth || mlph.offsetWidth;
							mlph_video.style.height = (mlphWidth * 9) / 16 + "px";
							player.height(parseInt(mlphWidth)*9/16);
						} else {
							mlph_video.style.height = parseInt(o.self.getStyle(mlph, 'width'))*9/16 + "px";
							player.height(parseInt(o.self.getStyle(mlph, 'width'))*9/16);
						}
					} catch (e) {}
				}, 100);

				o.b.postvideo_state = 'VIDEO';

				break;

			case 'VIDEO':

				if (mlph_link) {
					mlph_link.style.display = 'none';
					mlph_link.style.visibility = 'hidden';
				}
				if (mlph_textDiv) {
					mlph_textDiv.style.display = 'none';
					mlph_textDiv.style.visibility = 'hidden';
				}
				player.pause();

				clearTimeout(o.b.timerUp);
				o.b.volumeFlag = false;

				clearTimeout(o.b.timerDown);
				o.b.volumeFlagDown = false;

				if (mlph_poster && o.b.postvideo_on && isHls && !(isMobile || isTablet) && !isOpera && o.ph.window.liveTVSupport) {
					mlph_poster.style.display = 'block';
					mlph_poster.style.visibility = 'visible';
				} else {
					o.self.hideDivBanner(o.ph.placeholder);
					o.self.removeEvent(o.ph.window, 'scroll', checkScroll);
					o.self.removeEvent(o.ph.window, 'resize', checkScroll);
					o.self.notifyEvent(o.b, 'hide', o.ph.window);
				}

				break;
		}
	});

	function getDocumentScrollBottom(doc) {
		if (!doc) doc = document;
		return o.self.wndScroll(doc).top + doc.documentElement.clientHeight;
	}

	function checkScroll() {
		if (isClick) return;
		try {
			if (window.dfp_sync_var && !o.b.isPlay) {
				o.self.hideDivBanner(o.ph.placeholder);
				o.self.removeEvent(o.ph.window, 'scroll', checkScroll);
				o.self.removeEvent(o.ph.window, 'resize', checkScroll);
			}
		} catch (e) {}

		if (o.b.flag_animate_open) {
			var sc = getDocumentScrollBottom(o.ph.document);
			if (sc <= y + 200) {
				return;
			} else {
				video.style.display = 'block';
			}
		}

		var b = {'pid': o.b.pid, 'ph' : {'placeholder': mlph_video, 'window': o.ph.window, 'document': o.ph.document}};
		var visible = o.self.percentVisible(b);

		if (visible > 0 && source_flag) {
			player.src(o.source);
			player.load();
			o.b.vResize();
			source_flag = false;
		}

		if (visible == 1 && !o.b.fraction_flag) {
			o.b.fraction_flag = true;
			if (parseFloat(o.b.fraction_pause)) fraction = o.b.fraction_pause;
		}

		if (visible >= fraction) {
			try {
				if (load_flag) {
					player.load();
					load_flag = false;
				}
				player.ready(player.play);
			} catch (e) {}
		} else {
			if (o.b.isTimeoutClose || o.b.isPaused) return;
			if (o.b.close_timeout && o.b.isPlay) {
				o.b.isTimeoutClose = true;
				setTimeout(function () {
					visible = o.self.percentVisible(b);
					o.b.isTimeoutClose = false;
					if (visible >= fraction) return;
					player.pause();
				}, o.b.close_timeout * 1000);
			} else {
				player.pause();
			}
		}
	}

	/*
	 * animate function for iOS
	 * not used
	 */
	function checkIScroll() {
		var s = getDocumentScrollBottom(o.ph.document);
		var winOffset = o.self.getOffsetRect(mlph, o.ph.window, o.ph.document);	
		var y = winOffset.top;
		if (s >= (y + 0.7*(o.b.h + 81)) && !transitionFlag) {
			if(checkIphone || checkIpad) {
				player.src(o.source);
				source_flag = false;
			}
			mlph.style.marginTop = o.b.div_style.marginTop;
			mlph.style.marginBottom = o.b.div_style.marginBottom;
			mlph.style.height =  o.b.h + 81 + 'px';
			setTimeout(function () { 
				try {
					player.play();
				} catch (e) {}
			}, 2000);
			transitionFlag = true;
		}
	}

	checkScroll();
	o.self.addEvent(o.ph.window, 'scroll', checkScroll);
	o.self.addEvent(o.ph.window, 'resize', checkScroll);

	function fadeIn(elem) {
		elem.style.opacity = 1;
		elem.style.transition = "opacity 2s linear";
	}

	function fadeOut(elem) {
		elem.style.opacity = 0;
		elem.style.transition = "visibility 0s 2s, opacity 2s linear";
	}

	function volumeTimerUp() {
		o.b.timerUp = setTimeout(function () { 
			o.b.volumeFlag = true;
			o.b.volume = (o.b.volume * 10 + 0.1 * 10) / 10; 
			player.volume(o.b.volume);

			if (o.b.volume >= 0.6) {
				clearTimeout(o.b.timerUp);
				o.b.volumeFlag = false;
			} else {
				volumeTimerUp();
			}
		}, 100);
	}

	function volumeTimerDown(count) {
		if (!count) count = 0;
		o.b.timerDown = setTimeout(function () { 
				o.b.volumeFlagDown = true;
				o.b.volume = (o.b.volume * 100 - 5) / 100; 
				player.volume(o.b.volume);
				
				if (o.b.volume <= 0.01) {
					o.b.volume = 0;
					clearTimeout(o.b.timerDown);
					o.b.volumeFlagDown = false;
				} else {
					volumeTimerDown(count);
				}
		}, 21 * ++count);
	}

	function vol() {
		clearTimeout(o.b.timerDown);
		o.b.volumeFlagDown = false;
		if (o.b.flag_text && link_flag && !isMobile && !isTablet) fadeIn(mlph_textDiv);
		if(!player.paused() && !o.b.volumeFlag) {
			volumeTimerUp();
			player.muted(false);
			o.self.callEvent( o.b.events['unmute'] , o.b.rand_url, o.b.ph);
			o.b.events['unmute'] = [];
		}
	}

	function mute() {
		clearTimeout(o.b.timerUp);
		o.b.volumeFlag = false;
		if (o.b.flag_text && link_flag && !isMobile && !isTablet) fadeOut(mlph_textDiv);
		if(!player.paused() && !o.b.volumeFlagDown) {
			volumeTimerDown();
		}
	}

	if (!isMobile && !isTablet) {
		o.self.addEvent(mlph_video, 'mouseover', vol);
		o.self.addEvent(mlph_video, 'mouseout', mute);
	}

	function timeupdate () {
		var playerDuration = player.duration();
		if (parseInt(playerDuration) == 0) return;
		var seconds = parseInt(o.b.eshows_type);
		var duration = playerDuration;
		var firstquartile, midpoint, thirdquartile;

		if (o.b.custom_mode == 'custom_finish') {
			if (isNaN(parseInt(o.b.eshows_type))) {
				//decrease duration in N times
				switch(o.b.eshows_type) {
					case 'start':
						o.b.custom_mode = ''; /* none */
						break;
					case 'firstquartile':
						duration = (1/4) * playerDuration;
						break;
					case 'midpoint':
						duration = (1/2) * playerDuration;
						break;
					case 'thirdquartile':
						duration = (3/4) * playerDuration;
						break;
					case 'complete':
						duration = playerDuration;
						break;
					default: 
						duration = playerDuration;
						break;
				}
			} else {
				//limit duration to N sec
				duration = parseInt(o.b.eshows_type) > playerDuration ? playerDuration : parseInt(o.b.eshows_type);
			}

			if (parseInt(player.currentTime()) == parseInt(duration)) {
				o.self.callEvent( o.b.events['complete'] , o.b.rand_url, o.b.ph);
				o.b.events['complete'] = [];
			}
		}

		if (duration) {
			if (seconds > duration) seconds = parseInt(duration);
			
			firstquartile = parseInt(duration / 4), 
			midpoint = parseInt(duration / 2), 
			thirdquartile = parseInt(3 * duration / 4);
		}

		var nsec = parseInt(player.currentTime());
		if (nsec === seconds && o.b.custom_mode != 'custom_finish') {
			o.self.callEvent( o.b.events[o.b.eshows_type] , o.b.rand_url, o.b.ph);
			o.b.events[o.b.eshows_type] = [];
		}
		//if devices do not support play event and accordingly we call start event in 0 second(windows phone)
		if (nsec === 0) {
			o.self.callEvent( o.b.events['start'] , o.b.rand_url, o.b.ph);
			o.b.events['start'] = [];
		}
		
		if (nsec === firstquartile) {
			o.self.callEvent( o.b.events['firstquartile'] , o.b.rand_url, o.b.ph);
			o.b.events['firstquartile'] = [];
		}
		
		if (nsec === midpoint) {
			o.self.callEvent( o.b.events['midpoint'] , o.b.rand_url, o.b.ph);
			o.b.events['midpoint'] = [];
		}
		
		if (nsec === thirdquartile) {
			o.self.callEvent( o.b.events['thirdquartile'] , o.b.rand_url, o.b.ph);
			o.b.events['thirdquartile'] = [];
		}
	}

	player.on('timeupdate', timeupdate); 

}

}
