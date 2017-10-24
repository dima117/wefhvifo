(function (){

    if (typeof class_mlBase === 'undefined')
    {
        setTimeout(arguments.callee, 50);
        return;
    };

    if (typeof class_mlVpaidVideoBanner !== 'undefined') {
        return;
    }

    /*
 * https://github.com/MailOnline/videojs-vast-vpaid/
 * http://docs.videojs.com/docs/api/player.html
    */
    vast_vpaid_plugin = function(o) {
        var player = this;
        o.b.player = player;
        o.b.adStartFlag = false;

        player.volume(0);

        o.b.events = o.b.events || {};
        o.b.volume = 0;

        (function () {

            if (!player.isReady_ || !player.vastClient || (o.b.inlineVideoSupport && !o.b.ph.window.enableInlineVideo)) {
                setTimeout(arguments.callee, 100);
                return;
            }

            if (o.b.isMobile) {
                var el = player.el();
                el = (el.tagName.toLowerCase() == 'video') ? el : el.getElementsByTagName('VIDEO')[0];
                if (el && o.b.inlineVideoSupport) {
                    o.b.ph.window.enableInlineVideo(el, {iPad: true});
                }
            }

            o.b.vastClientFlag = true;

            var vastAd = player.vastClient({
                adTagXML: o.xmlTag,
                playAdAlways: false,
                adCancelTimeout: 7000,
                adsEnabled: true,
                preferredTech: "html5",
                vpaidFlashLoaderPath: o.self._httpUrl + '/templates_r/video-js.vpaid/VPAIDFlash.swf'
            });

            player.on('error', function() {
                stop();
                setTimeout(stop, 100);
                o.self.altCode(o.b);
            });

            player.on('vast.adError', function() {
                stop();
                setTimeout(stop, 100);

                if (o.b.events['response_empty']) o.self.callEvent(o.b.events['response_empty'], o.b.rand_url, o.b.ph);
                o.b.events['response_empty'] = [];

                o.self.altCode(o.b);
            });

            player.on('vast.adsCancel', function() {
                stop();
                setTimeout(stop, 100);

                if (o.b.events['response_empty']) o.self.callEvent(o.b.events['response_empty'], o.b.rand_url, o.b.ph);
                o.b.events['response_empty'] = [];

                o.self.altCode(o.b);
            });

            player.on('vast.reset', function() {
                stop();
                setTimeout(stop, 100);
                o.self.altCode(o.b);
            });

            player.on('play', function () {
                if (o.b.isIos) {
                    try {
                        var iOS8or9 = typeof document === 'object' && 'object-fit' in document.head.style && !matchMedia('(-webkit-video-playable-inline)').matches;
                        try {
                            var loading_spinner = o.b.player.loadingSpinner.el()
                        } catch(e) {
                            loading_spinner = o.getElementsByClassName('vjs-loading-spinner', o.ph.placeholder)[0];
                        }
                        if (iOS8or9 && loading_spinner) {
                            loading_spinner.style.display = "none";
                        }
                    } catch(e) {}
                }
            });

            player.on('vast.adStart', function() {
                o.b.adStartFlag = true;
                /* показ засчитывается вызовом пикселей из VAST xml */
                o.b.ph.placeholder.style.visibility = "visible";
                o.b.ph.placeholder.style.opacity = 1;
                o.b.ph.placeholder.style.height = "100%";

                o.self.notifyEvent(o.b, 'show', o.b.ph.window);

                if (!o.b.isMobile) {
                    player.controls(false);
                } else {
                    var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
                    volButton.show();
                    if (volButton.muteToggle) volButton.muteToggle.show();
                }
                player.volume(0.1);
                player.volume(0);

                o.b.vResize();

                if (o.b.events['response_ad']) o.self.callEvent(o.b.events['response_ad'], o.b.rand_url, o.b.ph);
                o.b.events['response_ad'] = [];

                if (!o.b.isMobile) {
                    var el = player.el().querySelector('.VPAID-container iframe');
                    if (el) {
                        o.self.addEvent(el, 'mouseover', unmute);
                        o.self.addEvent(el, 'mouseout', mute);
                    }
                }

                if (o.b.run_invisible) {
                    setTimeout(function() {
                        o.b.run_invisible = false;
                        o.b.listener();
                    }, 2000);
                }
            });

            player.on('vast.AdClickThru', function() {
                player.pause();
                player.controls(true);
                if (o.b.isMobile) {
                    var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
                    volButton.show();
                    if (volButton.muteToggle) volButton.muteToggle.show();
                }
            });

            player.on('vpaid.AdClickThru', function() {
                player.pause();
                player.controls(true);
                if (o.b.isMobile) {
                    var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
                    volButton.show();
                    if (volButton.muteToggle) volButton.muteToggle.show();
                }
            });

            player.on('vast.resumeAd', function() {
                if (!o.b.isMobile) {
                    player.controls(false);
                } else {
                    var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
                    volButton.show();
                    if (volButton.muteToggle) volButton.muteToggle.show();
                }
                player.volume(0.1);
                player.volume(0);
                setTimeout(mute, 300);
            });

            player.on('vpaid.resumeAd', function() {
                if (!o.b.isMobile) {
                    player.controls(false);
                } else {
                    var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
                    volButton.show();
                    if (volButton.muteToggle) volButton.muteToggle.show();
                }
                player.volume(0.1);
                player.volume(0);
                setTimeout(mute, 300);
            });

            player.on('vast.adSkip', function() {
                o.self.callEvent(o.b.events['skip'] , o.b.rand_url, o.b.ph)
                o.b.events['skip'] = [];
            });

            player.on('vast.contentStart', function() {
                player.controls(true);
                if (o.b.isMobile) {
                    var volButton = o.b.player.controlBar.volumeMenuButton || o.b.player.controlBar.volumePanel;
                    volButton.show();
                    if (volButton.muteToggle) volButton.muteToggle.show();
                }
            });

            player.on('vast.contentEnd', function() {
                o.self.liveTVButton(o.b);
                if (o.b.player.isFullscreen()) {
                    o.b.player.exitFullscreen();
                }
                o.self.removeEvent(o.b.ph.window, 'scroll', o.b.listener);
                o.self.removeEvent(o.b.ph.window, 'resize', o.b.listener);
                o.self.removeEvent(o.b.ph.window, 'focus', o.b.listener);
            });

            if (!o.b.isMobile) {
                o.self.addEvent(player.el(), 'mouseover', unmute);
                o.self.addEvent(player.el(), 'mouseout', mute);
            }
        })();

        function stop() {
            try { o.b.player.pause() } catch(e) {}
        }

        function volumeTimerUp() {
            o.b.timerUp = setTimeout(function () {
                o.b.volumeUpFlag = true;
                o.b.volume = (o.b.volume * 10 + 0.1 * 10) / 10;
                player.volume(o.b.volume);

                if (o.b.volume >= 0.6) {
                    clearTimeout(o.b.timerUp);
                    o.b.volumeUpFlag = false;
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

        function unmute() {
            clearTimeout(o.b.timerDown);
            o.b.volumeFlagDown = false;
            if(!player.paused() && !o.b.volumeUpFlag) {
                volumeTimerUp();
                player.muted(false);
                o.self.callEvent( o.b.events['unmute'] , o.b.rand_url, o.b.ph);
                o.b.events['unmute'] = [];
            }

        }

        function mute() {
            clearTimeout(o.b.timerUp);
            o.b.volumeUpFlag = false;
            if(!player.paused() && !o.b.volumeFlagDown) {
                volumeTimerDown();
            }
        }

    };

    /* Defining class methods */
    var ext_mlVpaidVideoBanner = {
        _useReferer : false,

        main : function(b) {
            var ua = navigator.userAgent;
            var checkIphone = /iphone/i.test(ua);
            var checkIpad = /ipad/i.test(ua);
            var checkIpod = /ipod/i.test(ua);
            var checkAndroidTablet = /(Android(?=.*?tab)|Android 3|Android(?!.*?(phone|Mobile)))/i.test(ua);
            var checkAndroid = /Android(?=.*?(Mobile))/i.test(ua);
            var checkWP = /Windows Phone/i.test(ua);

            b.isIos = (checkIphone || checkIpad || checkIpod);
            b.isAndroid = (checkAndroidTablet || checkAndroid);
            b.isMobile = (b.isIos || b.isAndroid || checkWP);
            b.cssLoad = b.cssLoad || {};

            if(this._useReferer) {
                b.place_dir = ((typeof(b.place_dir) != 'undefined' && b.place_dir.length) ? escape(b.place_dir) : this._defaultPlaceDir);
                if(b.link) b.link = this._clickServerUrl + b.place_dir + '/?' + escape(b.link);
            }
            b.production = /https?(:|%3A)\/\/[^\/]+\/reference(\?|%3F)/.test(b.link);
            b.ph = this.codeVariant(b.pid);
            if (!b.ph) {
                return;
            }

            if (b.events['banner']) this.callEvent(b.events['banner'], b.rand_url, b.ph);
            b.events['banner'] = [];

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
                    b.cssLoad.videojs = true;

                    var s = b.ph.document.createElement('script');
                    s.src = this._httpUrl + '/templates_r/video-js.vpaid/videojs_6.vast.vpaid.js?' + drnd;
                    s.type = 'text/javascript';
                    head.appendChild(s);
                    b.cssLoad.vast = true;
                } else if (!b.ph.window.videojs.getPlugin || !b.ph.window.videojs.getPlugin('vastClient')) {
                    var videojs_version = Math.min(parseInt(b.ph.window.videojs.VERSION) || 6, 6);

                    var s = b.ph.document.createElement('script');
                    s.src = this._httpUrl + '/templates_r/video-js.vpaid/videojs_' + videojs_version + '.vast.vpaid.js?' + drnd;
                    s.type = 'text/javascript';
                    head.appendChild(s);
                    b.cssLoad.vast = true;
                }
            };

            if (b.cssLoad.videojs) this.mlAddCss(b, this._httpUrl +'/templates_r/video-js.6.2/video-js.min.css');
            if (b.cssLoad.vast) this.mlAddCss(b, this._httpUrl +'/templates_r/video-js.vpaid/videojs.vast.vpaid.css');

            this.inject(b);

            /* page events */
            b.listener = this.proxy(this, this.listener, [b]);
            this.addEvent(b.ph.window, 'scroll', b.listener);
            this.addEvent(b.ph.window, 'resize', b.listener);
            this.addEvent(b.ph.window, 'focus', b.listener);

            /* check if player in visible area */
            b.listener();
            setTimeout(b.listener, 500);

            b.vResize = this.proxy(this, this.calculateHeight, [b]);
            if (b.isMobile) this.addEvent(b.ph.window, 'orientationchange', function() {setTimeout(b.vResize, 200);});

            this.addEvent(b.ph.window, 'resize', b.vResize);
            this.addEvent(b.ph.document.body, 'resize', b.vResize);

            if (b.isAndroid) {
                var volumeObj = b.player.controlBar.volumeMenuButton || b.player.controlBar.volumePanel;
                var volumeButton = volumeObj.el();
                function changeVolume() {
                    if (b.volumeFlag) return;
                    b.volumeFlag = true;
                    b.player.muted(false);
                    if (b.player.volume() > 0) {
                        b.player.volume(0.0);
                    } else {
                        b.player.volume(0.5);
                    }
                    setTimeout(function(){ b.volumeFlag=false; }, 500);
                }
                if (volumeButton) {
                    volumeButton.onclick = changeVolume;
                    volumeButton.ontouchstart = changeVolume;
                }
            }

            this.calculateHeight(b);
            /* for I - branding banner */
            setTimeout(b.vResize, b.isMobile ? 20 : 1500);
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
            this.removeEvent(b.ph.window, 'focus', b.listener);
            this.notifyEvent(b, 'hide', b.ph.window);
        },

        liveTVButton: function (b) {
            var ua = navigator.userAgent;
            var isOpera = /(Opera|OPR\/[0-9.]+|Android.*OPR\/|OPiOS\/[0-9.])/.test(ua);
            var isDesktopSafari = /Version\/\d[^\s]+\s+Safari/.test(ua) && !/Chrome\//.test(ua);
            var isHls = (parseInt(this.flVer()[0]) || isDesktopSafari) && !this.isIE();

            if (b.isMobile || isOpera || !isHls || !b.ph.window.liveTVSupport) {
                this.hideDivBanner(b.ph.placeholder);
                this.removeEvent(b.ph.window, 'resize', b.vResize);
                this.removeEvent(b.ph.document.body, 'resize', b.vResize);
                this.notifyEvent(b, 'hide', b.ph.window);
                return;
            }

            var mlph_video = b.ph.document.getElementById('top_video' + b.pid);
            if (!mlph_video) {
                this.hideDivBanner(b.ph.placeholder);
                this.removeEvent(b.ph.window, 'resize', b.vResize);
                this.removeEvent(b.ph.document.body, 'resize', b.vResize);
                this.notifyEvent(b, 'hide', b.ph.window);
                return;
            }

            var mlph_poster = b.ph.document.createElement('div');
            mlph_poster.id = 'postvideo' + b.pid;
            mlph_poster.style.cssText = 'text-align: center; position: absolute; opacity : 0.8; filter: alpha(Opacity=80); background-color : #000000;';
            mlph_poster.style.display = 'none';
            mlph_poster.style.width = '100%';
            mlph_poster.style.height = '100%';
            mlph_poster.style.visibility = 'hidden';
            mlph_poster.style.zIndex = 9;

            mlph_poster_inner = b.ph.document.createElement('div');
            mlph_poster_inner.style.display = "inline-block";
            mlph_poster_inner.style.verticalAlign = "middle";

            mlph_poster_helper = b.ph.document.createElement('div');
            mlph_poster_helper.style.display = "inline-block";
            mlph_poster_helper.style.verticalAlign = "middle";
            mlph_poster_helper.style.height = "100%";
            mlph_poster_helper.style.width = "0px";

            mlph_poster_button_w = b.ph.document.createElement('div');
            mlph_poster_button_w.style.display = 'block';
            mlph_poster_button_w.style.width = '100px';
            mlph_poster_button_w.style.height = '100px';
            mlph_poster_button_w.style.cursor = 'pointer';
            mlph_poster_button_w.style.margin = '0 auto';
            mlph_poster_button_w.style.background = 'transparent url("http://content.rbc.medialand.ru/native/button_white.png") 50% 50% no-repeat';
            mlph_poster_inner.appendChild(mlph_poster_button_w);

            mlph_poster_button_g = b.ph.document.createElement('div');
            mlph_poster_button_g.style.display = 'none';
            mlph_poster_button_g.style.width = '100px';
            mlph_poster_button_g.style.height = '100px';
            mlph_poster_button_g.style.cursor = 'pointer';
            mlph_poster_button_g.style.margin = '0 auto';
            mlph_poster_button_g.style.background = 'transparent url("http://content.rbc.medialand.ru/native/button_green.png") 50% 50% no-repeat';
            mlph_poster_inner.appendChild(mlph_poster_button_g);

            mlph_poster_span = b.ph.document.createElement('span');
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

            this.addEvent(mlph_poster_button_g, 'click', this.proxy(this, function(b) {
                try {
                    b.ph.window.liveTv.openBigPlayer();
                } catch (e) {}
                this.hideDivBanner(b.ph.placeholder);
                this.removeEvent(b.ph.window, 'resize', b.vResize);
                this.removeEvent(b.ph.document.body, 'resize', b.vResize);
                this.onReady(this.proxy(this, this.notifyEvent, [b, 'hide', b.ph.window]), b.ph.window);
            }, [b]));

            this.addEvent(mlph_poster, 'mouseover', function() {
                mlph_poster_button_g.style.display = 'block';
                mlph_poster_button_w.style.display = 'none';
            });

            this.addEvent(mlph_poster, 'mouseout', function() {
                mlph_poster_button_w.style.display = 'block';
                mlph_poster_button_g.style.display = 'none';
            });

            mlph_video.parentNode.insertBefore(mlph_poster, mlph_video);
            mlph_poster.style.height = mlph_video.style.height;

            mlph_poster.style.display = 'block';
            mlph_poster.style.visibility = 'visible';
        },

        obj : function(b) {

            var html = '<div style="position:absolute;width:100%;height:100%;background-position:center;background-image: url('+b.bg_mask+');"></div>';
            if (b.wrapper) {
                if (b.isMobile) {
                    html += '<div style="font-size: 11px; color: #acacac; margin-top: 2px; text-align: left; line-height: 23px; font-family: GraphikCy, Helvetica CY, Arial" >&#1056;&#1077;&#1082;&#1083;&#1072;&#1084;&#1072;</div>';
                }   else    {
                    html += '<div style="font-size: 11px; color: #acacac; margin-top: 4px; text-align: left; line-height: 26px; font-family: GraphikCy, Helvetica CY, Arial" >&#1056;&#1077;&#1082;&#1083;&#1072;&#1084;&#1072;</div>';
                }
            }
            html += '<div style="margin: 0 auto;">';
            html += '<video id="top_video'+b.pid+'" class="video-js vjs-default-skin" controls preload="auto" ' + (b.isMobile ? 'muted playsinline' : '') + ' style="width: 100%" width="100%" height="' + b.h + '" >';
            html += '</video>';
            html += '</div>';

            return html;
        },

        inject : function(b){

            var p = b.ph;
            b.o = this.obj(b)

            b.div_style = typeof b.div_style == 'object' ? b.div_style : {};

            p.placeholder.style.visibility = "hidden";
            p.placeholder.style.opacity = 0;
            p.placeholder.style.height = "1px";

            b.div_style['width'] = b.w;
            b.div_style['background-color'] = b.bg_color;
            b.div_style['position'] = 'relative';

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

            p.placeholder.innerHTML = b.o;

            b.destroy = this.destroy;

            this.initVideo(b);
        },

        markShown : function(ph, pid, b) {

            if (!this._super(ph, pid, b))return false;
            ph.window.ml_places[pid].width = b.w;
            ph.window.ml_places[pid].height = b.h;

        },

        randomizeEvent : function (z, rand_url) {
            var rnd = Math.round(Math.random()*1000000);
            if (!z) return "";

            if (rand_url) {
                if (this._useTrackingRandom) {
                    z = this.domainParam(z, rand_url);
                } else {
                    z += (z.indexOf('?') == -1 ? '?' : '&') + rand_url;
                }
            } else {
                z += (z.indexOf('?') == -1 ? '?' : '&') + '_r' + rnd + '=' + rnd;
            }
            return z;
        },

        notifyEvent : function(b, type, w) {
            w = w || b.ph.window || window;
            if (!b.adStartFlag && !b.altCodeFlag) return;
            this._super(b, type, w);
        },

        initVideo : function(b) {

            if (typeof vast_vpaid_plugin === 'undefined' || typeof b.ph.window.videojs === 'undefined') {
                setTimeout( this.proxy(this, this.initVideo, [b]) , 100);
                return;
            };

            if (/^https?:\/\//i.test(b.vast_url)) {

                if (/^https?:\/\/([^\/]+\.)?adfox\.ru\/.+/.test(b.vast_url)) { /* AdFox only */
                    var placement_id = b.vast_url.match(/puid30=(\d+)/)[1];
                    var random = Math.floor(Math.random() * 1000000000);
                    var session_id = (new Date()).getTime() + "" + Math.floor(Math.random() * 2147483647);
                    var pr = Math.floor((new Date()).getTime() / 1000) + Math.floor(Math.random() * 214748364);
                    var eid1 = placement_id + ":" + session_id + ":" + pr;
                    var dl = [];
                    var pref = (b.vast_url.indexOf('?') > 0) ? '&' : '?';
                    //for cut off VPAID
                    var params = pref + "puid20=999999999&puid5=4";
                    if (/&dl=.*/i.test(b.vast_url)) {
                        dl = b.vast_url.split(/&dl=/);
                        b.vast_url = dl[0] + params + '&pr=' + pr + '&random=' + random + '&eid1=' + eid1 +
                            '&dl=' + dl[1] +":" + escape(b.ph.window.location.href.substr(0,256));
                    } else {
                        b.vast_url += params + '&pr=' + pr + '&random=' + random + '&eid1=' + eid1;
                    }
                } else if (/&dl=[^&]*/.test(b.vast_url)) {
                    b.vast_url  = b.vast_url.replace(/&dl=[^&]*/, '&dl=' + escape(b.ph.window.location.href.substr(0, 256)));
                }

            } else {
                return;
            }

            var registerPlugin = b.ph.window.videojs.registerPlugin || b.ph.window.videojs.plugin;
            if (!b.ph.window.videojs.getPlugin || !b.ph.window.videojs.getPlugin('vast_vpaid_plugin')) registerPlugin('vast_vpaid_plugin', vast_vpaid_plugin);

            /* randomize Events */
            for (var i = 0; i < b.zeropixel.length; ++i) {
                b.zeropixel[i] = this.randomizeEvent(b.zeropixel[i], b.rand_url);
            }
            for (var i in b.events) {
                if (!b.events.hasOwnProperty(i)) continue;
                for (var j = 0; j < b.events[i].length; ++j) {
                    b.events[i][j] = this.randomizeEvent(b.events[i][j], b.rand_url);
                }
            }

            function xmlTag(callback) {

                var xml = '<?xml version="1.0" encoding="UTF-8"?><VAST xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" version="2.0" xsi:noNamespaceSchemaLocation="vast.xsd"><Ad>';
                xml += '<Wrapper><AdSystem>Medialand</AdSystem>';
                xml += '<VASTAdTagURI><![CDATA[' + b.vast_url + ']]></VASTAdTagURI>';
                for (var i = 0; i < b.zeropixel.length; ++i) {
                    if (!/^https?:\/\/.+/i.test(b.zeropixel[i])) continue;
                    xml += '<Impression id="medialand_imp'+i+'"><![CDATA[' + b.zeropixel[i] + ']]></Impression>';
                }
                xml += '<Creatives>';
                xml += '<Creative id="'+ b.pid +'" sequence="" adID="' + b.bid + '">';
                xml += '<Linear><TrackingEvents>';
                for (var i in b.events) {
                    if (!b.events.hasOwnProperty(i)) continue;
                    if (i == 'skip' || i == 'unmute') continue;
                    for (var j = 0; j < b.events[i].length; ++j) {
                        if (!/^https?:\/\/.+/i.test(b.events[i][j])) continue;
                        xml += '<Tracking event="' + i + '"><![CDATA[' + b.events[i][j] + ']]></Tracking>';
                    }
                }
                xml += '</TrackingEvents><VideoClicks>';
                xml += '<ClickTracking id="medialand"><![CDATA[' + b.link + ']]></ClickTracking>';
                xml += '</VideoClicks></Linear>';
                xml += '</Creative>';
                xml += '</Creatives>';
                xml += '</Wrapper></Ad></VAST>';

                setTimeout( function() {
                    callback(null, xml);
                }, 0);
            }

            b.ph.window.videojs(b.ph.document.getElementById('top_video'+b.pid), {
                controls: true,
                sources: [{'src': b.video_url, 'type': 'video/mp4'}],
                preload: 'metadata',
                poster : b.pic,
                plugins : {
                    vast_vpaid_plugin : {
                        'b' : b,
                        'self' : this,
                        'xmlTag' : xmlTag
                    }
                }
            });
        },

        listener : function(b) {
            if (!b.vastClientFlag) return;
            var visible = this.percentVisible(b);
            if (visible > 0 && !b.flag_listener_resize) {
                b.flag_listener_resize = true;
                b.vResize();
            }
            if (visible == 1 && !b.flag_fraction) {
                b.flag_fraction = true;
                if (parseFloat(b.fraction_pause)) b.fraction = b.fraction_pause;
            }
            if (visible >= b.fraction || b.run_invisible) {
                if (!b.isPlaying) {
                    b.isPlaying = true;
                    if (!b.adStartFlag) {
                        b.player.volume(0);
                        if (b.events['xml_request']) this.callEvent(b.events['xml_request'], b.rand_url, b.ph);
                        b.events['xml_request'] = [];
                    }
                    b.player.play();
                }
            } else {
                if (b.isPlaying) {
                    b.isPlaying = false;
                    b.player.pause();
                }
            }
        },

        calculateHeight : function (b) {

            var elementWidth = this.getStyle(b.ph.placeholder, 'width', b.ph.document);
            if(this.isIE() && /100%/.test(b.w)) {
                b.w = b.ph.placeholder.offsetWidth;
                elementWidth = b.w;
            }

            if (!parseInt(elementWidth)) {
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
                    if (isNaN(b.h)) return;
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
        }

    };

    class_mlVpaidVideoBanner = window.class_mlBase.extend(ext_mlVpaidVideoBanner);
    window.obj_mlVpaidVideoBanner = new class_mlVpaidVideoBanner();

})();

