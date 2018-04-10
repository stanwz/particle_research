function (t, e, i) {
    (function (n) {
        var r, o, a;
        !function (n) {
            "use strict";

            function s(t, e) {
                this.options = {}, t = t || this.options;
                var i = {
                    frequency: 350,
                    peak: 1
                };
                this.inputNode = this.filterNode = l.context.createBiquadFilter(), this.filterNode.type = e, this.outputNode = u.context.createGain(), this.filterNode.connect(this.outputNode);
                for (var n in i) this[n] = t[n], this[n] = void 0 === this[n] || null === this[n] ? i[n] : this[n]
            }

            function h() {
                var t, e, i = l.context.sampleRate * this.time,
                    n = u.context.createBuffer(2, i, l.context.sampleRate),
                    r = n.getChannelData(0),
                    o = n.getChannelData(1);
                for (e = 0; i > e; e++) t = this.reverse ? i - e : e, r[e] = (2 * Math.random() - 1) * Math.pow(1 - t / i, this.decay), o[e] = (2 * Math.random() - 1) * Math.pow(1 - t / i, this.decay);
                this.reverbNode.buffer = n
            }

            function c(t) {
                for (var e = l.context.sampleRate, i = new Float32Array(e), n = Math.PI / 180, r = 0; e > r; r++) {
                    var o = 2 * r / e - 1;
                    i[r] = (3 + t) * o * 20 * n / (Math.PI + t * Math.abs(o))
                }
                return i
            }

            var u = {},
                l = u,
                p = "object" == typeof t && t.exports,
                f = i(57);
            p ? t.exports = u : f ? (o = [], r = u, void 0 !== (a = "function" == typeof r ? r.apply(e, o) : r) && (t.exports = a)) : n.Pizzicato = n.Pz = u;
            var d = n.AudioContext || n.webkitAudioContext;
            if (d) {
                u.context = new d;
                var m = u.context.createGain();
                m.connect(u.context.destination), u.Util = {
                    isString: function (t) {
                        return "[object String]" === toString.call(t)
                    },
                    isObject: function (t) {
                        return "[object Object]" === toString.call(t)
                    },
                    isFunction: function (t) {
                        return "[object Function]" === toString.call(t)
                    },
                    isNumber: function (t) {
                        return "[object Number]" === toString.call(t) && t === +t
                    },
                    isArray: function (t) {
                        return "[object Array]" === toString.call(t)
                    },
                    isInRange: function (t, e, i) {
                        return !!(l.Util.isNumber(t) && l.Util.isNumber(e) && l.Util.isNumber(i)) && (t >= e && i >= t)
                    },
                    isBool: function (t) {
                        return "boolean" == typeof t
                    },
                    isOscillator: function (t) {
                        return t && "[object OscillatorNode]" === t.toString()
                    },
                    isAudioBufferSourceNode: function (t) {
                        return t && "[object AudioBufferSourceNode]" === t.toString()
                    },
                    isSound: function (t) {
                        return t instanceof l.Sound
                    },
                    isEffect: function (t) {
                        for (var e in u.Effects)
                            if (t instanceof u.Effects[e]) return !0;
                        return !1
                    },
                    normalize: function (t, e, i) {
                        return l.Util.isNumber(t) && l.Util.isNumber(e) && l.Util.isNumber(i) ? (i - e) * t / 1 + e : void 0
                    },
                    getDryLevel: function (t) {
                        return !l.Util.isNumber(t) || t > 1 || 0 > t ? 0 : .5 >= t ? 1 : 1 - 2 * (t - .5)
                    },
                    getWetLevel: function (t) {
                        return !l.Util.isNumber(t) || t > 1 || 0 > t ? 0 : t >= .5 ? 1 : 1 - 2 * (.5 - t)
                    }
                };
                var v = u.context.createGain(),
                    g = Object.getPrototypeOf(Object.getPrototypeOf(v)),
                    y = g.connect;
                g.connect = function (t) {
                    var e = l.Util.isEffect(t) ? t.inputNode : t;
                    return y.call(this, e), t
                }, Object.defineProperty(u, "volume", {
                    enumerable: !0,
                    get: function () {
                        return m.gain.value
                    },
                    set: function (t) {
                        l.Util.isInRange(t, 0, 1) && m && (m.gain.value = t)
                    }
                }), Object.defineProperty(u, "masterGainNode", {
                    enumerable: !1,
                    get: function () {
                        return m
                    },
                    set: function (t) {
                    }
                }), u.Events = {
                    on: function (t, e, i) {
                        if (t && e) {
                            this._events = this._events || {};
                            (this._events[t] || (this._events[t] = [])).push({
                                callback: e,
                                context: i || this,
                                handler: this
                            })
                        }
                    },
                    trigger: function (t) {
                        if (t) {
                            var e, i, n, r;
                            if (this._events = this._events || {}, e = this._events[t] || (this._events[t] = [])) {
                                for (i = Math.max(0, arguments.length - 1), n = [], r = 0; i > r; r++) n[r] = arguments[r + 1];
                                for (r = 0; r < e.length; r++) e[r].callback.apply(e[r].context, n)
                            }
                        }
                    },
                    off: function (t) {
                        t ? this._events[t] = void 0 : this._events = {}
                    }
                }, u.Sound = function (t, e) {
                    function i(t, e) {
                        t = t || {}, this.getRawSourceNode = function () {
                            var e = this.sourceNode ? this.sourceNode.frequency.value : t.frequency,
                                i = u.context.createOscillator();
                            return i.type = t.type || "sine", i.frequency.value = e || 440, i
                        }, this.sourceNode = this.getRawSourceNode(), this.sourceNode.gainSuccessor = l.context.createGain(), this.sourceNode.connect(this.sourceNode.gainSuccessor), h.isFunction(e) && e()
                    }

                    function n(t, e) {
                        t = h.isArray(t) ? t : [t];
                        var i = new XMLHttpRequest;
                        i.open("GET", t[0], !0), i.responseType = "arraybuffer", i.onload = function (i) {
                            u.context.decodeAudioData(i.target.response, function (t) {
                                s.getRawSourceNode = function () {
                                    var e = u.context.createBufferSource();
                                    return e.loop = this.loop, e.buffer = t, e
                                }, h.isFunction(e) && e()
                            }.bind(s), function (i) {
                                return t.length > 1 ? (t.shift(), void n(t, e)) : (i = i || new Error("Error decoding audio file " + t[0]), void(h.isFunction(e) && e(i)))
                            }.bind(s))
                        }, i.onreadystatechange = function (t) {
                            4 === i.readyState && i.status
                        }, i.send()
                    }

                    function r(t, e) {
                        if (navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, navigator.getUserMedia || navigator.mediaDevices.getUserMedia) {
                            var i = function (t) {
                                    s.getRawSourceNode = function () {
                                        return u.context.createMediaStreamSource(t)
                                    }, h.isFunction(e) && e()
                                }.bind(s),
                                n = function (t) {
                                    h.isFunction(e) && e(t)
                                };
                            navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
                                audio: !0
                            }).then(i).catch(n) : navigator.getUserMedia({
                                audio: !0
                            }, i, n)
                        }
                    }

                    function o(t, e) {
                        var i = h.isFunction(t) ? t : t.audioFunction,
                            n = h.isObject(t) && t.bufferSize ? t.bufferSize : null;
                        if (!n) try {
                            u.context.createScriptProcessor()
                        } catch (t) {
                            n = 2048
                        }
                        this.getRawSourceNode = function () {
                            var t = u.context.createScriptProcessor(n, 1, 1);
                            return t.onaudioprocess = i, t
                        }
                    }

                    function a(t, e) {
                        this.getRawSourceNode = t.sound.getRawSourceNode, t.sound.sourceNode && l.Util.isOscillator(t.sound.sourceNode) && (this.sourceNode = this.getRawSourceNode(), this.frequency = t.sound.frequency)
                    }

                    var s = this,
                        h = u.Util,
                        c = function (t) {
                            var e = ["wave", "file", "input", "script", "sound"];
                            if (t && !h.isFunction(t) && !h.isString(t) && !h.isObject(t)) return "Description type not supported. Initialize a sound using an object, a function or a string.";
                            if (h.isObject(t)) {
                                if (!h.isString(t.source) || -1 === e.indexOf(t.source)) return "Specified source not supported. Sources can be wave, file, input or script";
                                if (!("file" !== t.source || t.options && t.options.path)) return "A path is needed for sounds with a file source";
                                if (!("script" !== t.source || t.options && t.options.audioFunction)) return "An audio function is needed for sounds with a script source"
                            }
                        }(t),
                        p = h.isObject(t) && h.isObject(t.options);
                    if (c) throw new Error("Error initializing Pizzicato Sound: " + c);
                    this.detached = p && t.options.detached, this.masterVolume = u.context.createGain(), this.fadeNode = u.context.createGain(), this.fadeNode.gain.value = 0, this.detached || this.masterVolume.connect(u.masterGainNode), this.lastTimePlayed = 0, this.effects = [], this.effectConnectors = [], this.playing = this.paused = !1, this.loop = p && t.options.loop, this.attack = p && h.isNumber(t.options.attack) ? t.options.attack : .04, this.volume = p && h.isNumber(t.options.volume) ? t.options.volume : 1, p && h.isNumber(t.options.release) ? this.release = t.options.release : p && h.isNumber(t.options.sustain) ? this.release = t.options.sustain : this.release = .04, t ? h.isString(t) ? n.bind(this)(t, e) : h.isFunction(t) ? o.bind(this)(t, e) : "file" === t.source ? n.bind(this)(t.options.path, e) : "wave" === t.source ? i.bind(this)(t.options, e) : "input" === t.source ? r.bind(this)(t, e) : "script" === t.source ? o.bind(this)(t.options, e) : "sound" === t.source && a.bind(this)(t.options, e) : i.bind(this)({}, e)
                }, u.Sound.prototype = Object.create(u.Events, {
                    play: {
                        enumerable: !0,
                        value: function (t, e) {
                            this.playing || (l.Util.isNumber(e) || (e = this.offsetTime || 0), l.Util.isNumber(t) || (t = 0), this.playing = !0, this.paused = !1, this.sourceNode = this.getSourceNode(), this.applyAttack(), l.Util.isFunction(this.sourceNode.start) && (this.lastTimePlayed = u.context.currentTime - e, this.sourceNode.start(l.context.currentTime + t, e)), this.trigger("play"))
                        }
                    },
                    stop: {
                        enumerable: !0,
                        value: function () {
                            (this.paused || this.playing) && (this.paused = this.playing = !1, this.stopWithRelease(), this.offsetTime = 0, this.trigger("stop"))
                        }
                    },
                    pause: {
                        enumerable: !0,
                        value: function () {
                            if (!this.paused && this.playing) {
                                this.paused = !0, this.playing = !1, this.stopWithRelease();
                                var t = l.context.currentTime - this.lastTimePlayed;
                                this.sourceNode.buffer ? this.offsetTime = t % (this.sourceNode.buffer.length / l.context.sampleRate) : this.offsetTime = t, this.trigger("pause")
                            }
                        }
                    },
                    clone: {
                        enumerable: !0,
                        value: function () {
                            for (var t = new u.Sound({
                                source: "sound",
                                options: {
                                    loop: this.loop,
                                    attack: this.attack,
                                    release: this.release,
                                    volume: this.volume,
                                    sound: this
                                }
                            }), e = 0; e < this.effects.length; e++) t.addEffect(this.effects[e]);
                            return t
                        }
                    },
                    onEnded: {
                        enumerable: !0,
                        value: function (t) {
                            return function () {
                                this.sourceNode && this.sourceNode !== t || (this.playing && this.stop(), this.paused || this.trigger("end"))
                            }
                        }
                    },
                    addEffect: {
                        enumerable: !0,
                        value: function (t) {
                            if (!l.Util.isEffect(t)) return this;
                            this.effects.push(t);
                            var e = this.effectConnectors.length > 0 ? this.effectConnectors[this.effectConnectors.length - 1] : this.fadeNode;
                            e.disconnect(), e.connect(t);
                            var i = l.context.createGain();
                            return this.effectConnectors.push(i), t.connect(i), i.connect(this.masterVolume), this
                        }
                    },
                    removeEffect: {
                        enumerable: !0,
                        value: function (t) {
                            var e = this.effects.indexOf(t);
                            if (-1 === e) return this;
                            var i = this.playing;
                            i && this.pause();
                            var n = 0 === e ? this.fadeNode : this.effectConnectors[e - 1];
                            n.disconnect();
                            var r = this.effectConnectors[e];
                            r.disconnect(), t.disconnect(r), this.effectConnectors.splice(e, 1), this.effects.splice(e, 1);
                            var o;
                            return o = e > this.effects.length - 1 || 0 === this.effects.length ? this.masterVolume : this.effects[e], n.connect(o), i && this.play(), this
                        }
                    },
                    connect: {
                        enumerable: !0,
                        value: function (t) {
                            return this.masterVolume.connect(t), this
                        }
                    },
                    disconnect: {
                        enumerable: !0,
                        value: function (t) {
                            return this.masterVolume.disconnect(t), this
                        }
                    },
                    connectEffects: {
                        enumerable: !0,
                        value: function () {
                            for (var t = [], e = 0; e < this.effects.length; e++) {
                                var i = e === this.effects.length - 1,
                                    n = i ? this.masterVolume : this.effects[e + 1].inputNode;
                                t[e] = l.context.createGain(), this.effects[e].outputNode.disconnect(this.effectConnectors[e]), this.effects[e].outputNode.connect(n)
                            }
                        }
                    },
                    volume: {
                        enumerable: !0,
                        get: function () {
                            return this.masterVolume ? this.masterVolume.gain.value : void 0
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && this.masterVolume && (this.masterVolume.gain.value = t)
                        }
                    },
                    frequency: {
                        enumerable: !0,
                        get: function () {
                            return this.sourceNode && l.Util.isOscillator(this.sourceNode) ? this.sourceNode.frequency.value : null
                        },
                        set: function (t) {
                            this.sourceNode && l.Util.isOscillator(this.sourceNode) && (this.sourceNode.frequency.value = t)
                        }
                    },
                    sustain: {
                        enumerable: !0,
                        get: function () {
                            return this.release
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 10) && (this.release = t)
                        }
                    },
                    getSourceNode: {
                        enumerable: !0,
                        value: function () {
                            if (this.sourceNode) {
                                var t = this.sourceNode;
                                t.gainSuccessor.gain.setValueAtTime(t.gainSuccessor.gain.value, l.context.currentTime), t.gainSuccessor.gain.linearRampToValueAtTime(1e-4, l.context.currentTime + .2), setTimeout(function () {
                                    t.disconnect(), t.gainSuccessor.disconnect()
                                }, 200)
                            }
                            var e = this.getRawSourceNode();
                            return e.gainSuccessor = l.context.createGain(), e.connect(e.gainSuccessor), e.gainSuccessor.connect(this.fadeNode), this.fadeNode.connect(this.getInputNode()), l.Util.isAudioBufferSourceNode(e) && (e.onended = this.onEnded(e).bind(this)), e
                        }
                    },
                    getInputNode: {
                        enumerable: !0,
                        value: function () {
                            return this.effects.length > 0 ? this.effects[0].inputNode : this.masterVolume
                        }
                    },
                    applyAttack: {
                        enumerable: !1,
                        value: function () {
                            if (this.fadeNode.gain.value, this.fadeNode.gain.cancelScheduledValues(l.context.currentTime), !this.attack) return void this.fadeNode.gain.setTargetAtTime(1, l.context.currentTime, .001);
                            var t = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                                e = this.attack;
                            t || (e = (1 - this.fadeNode.gain.value) * this.attack), this.fadeNode.gain.setTargetAtTime(1, l.context.currentTime, 2 * e)
                        }
                    },
                    stopWithRelease: {
                        enumerable: !1,
                        value: function (t) {
                            var e = this.sourceNode,
                                i = function () {
                                    return l.Util.isFunction(e.stop) ? e.stop(0) : e.disconnect()
                                };
                            if (this.fadeNode.gain.value, this.fadeNode.gain.cancelScheduledValues(l.context.currentTime), !this.release) return this.fadeNode.gain.setTargetAtTime(0, l.context.currentTime, .001), void i();
                            var n = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
                                r = this.release;
                            n || (r = this.fadeNode.gain.value * this.release), this.fadeNode.gain.setTargetAtTime(1e-5, l.context.currentTime, r / 5), window.setTimeout(function () {
                                i()
                            }, 1e3 * r)
                        }
                    }
                }), u.Group = function (t) {
                    t = t || [], this.mergeGainNode = l.context.createGain(), this.masterVolume = l.context.createGain(), this.sounds = [], this.effects = [], this.effectConnectors = [], this.mergeGainNode.connect(this.masterVolume), this.masterVolume.connect(l.masterGainNode);
                    for (var e = 0; e < t.length; e++) this.addSound(t[e])
                }, u.Group.prototype = Object.create(l.Events, {
                    connect: {
                        enumerable: !0,
                        value: function (t) {
                            return this.masterVolume.connect(t), this
                        }
                    },
                    disconnect: {
                        enumerable: !0,
                        value: function (t) {
                            return this.masterVolume.disconnect(t), this
                        }
                    },
                    addSound: {
                        enumerable: !0,
                        value: function (t) {
                            return l.Util.isSound(t) ? this.sounds.indexOf(t) > -1 ? void 0 : t.detached ? void 0 : (t.disconnect(l.masterGainNode), t.connect(this.mergeGainNode), void this.sounds.push(t)) : void 0
                        }
                    },
                    removeSound: {
                        enumerable: !0,
                        value: function (t) {
                            var e = this.sounds.indexOf(t);
                            return -1 === e ? void 0 : (t.disconnect(this.mergeGainNode), t.connect(l.masterGainNode), void this.sounds.splice(e, 1))
                        }
                    },
                    volume: {
                        enumerable: !0,
                        get: function () {
                            return this.masterVolume ? this.masterVolume.gain.value : void 0
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.masterVolume.gain.value = t)
                        }
                    },
                    play: {
                        enumerable: !0,
                        value: function () {
                            for (var t = 0; t < this.sounds.length; t++) this.sounds[t].play();
                            this.trigger("play")
                        }
                    },
                    stop: {
                        enumerable: !0,
                        value: function () {
                            for (var t = 0; t < this.sounds.length; t++) this.sounds[t].stop();
                            this.trigger("stop")
                        }
                    },
                    pause: {
                        enumerable: !0,
                        value: function () {
                            for (var t = 0; t < this.sounds.length; t++) this.sounds[t].pause();
                            this.trigger("pause")
                        }
                    },
                    addEffect: {
                        enumerable: !0,
                        value: function (t) {
                            if (!l.Util.isEffect(t)) return this;
                            this.effects.push(t);
                            var e = this.effectConnectors.length > 0 ? this.effectConnectors[this.effectConnectors.length - 1] : this.mergeGainNode;
                            e.disconnect(), e.connect(t);
                            var i = l.context.createGain();
                            return this.effectConnectors.push(i), t.connect(i), i.connect(this.masterVolume), this
                        }
                    },
                    removeEffect: {
                        enumerable: !0,
                        value: function (t) {
                            var e = this.effects.indexOf(t);
                            if (-1 === e) return this;
                            var i = 0 === e ? this.mergeGainNode : this.effectConnectors[e - 1];
                            i.disconnect();
                            var n = this.effectConnectors[e];
                            n.disconnect(), t.disconnect(n), this.effectConnectors.splice(e, 1), this.effects.splice(e, 1);
                            var r;
                            return r = e > this.effects.length - 1 || 0 === this.effects.length ? this.masterVolume : this.effects[e], i.connect(r), this
                        }
                    }
                }), u.Effects = {};
                var _ = Object.create(null, {
                    connect: {
                        enumerable: !0,
                        value: function (t) {
                            return this.outputNode.connect(t), this
                        }
                    },
                    disconnect: {
                        enumerable: !0,
                        value: function (t) {
                            return this.outputNode.disconnect(t), this
                        }
                    }
                });
                u.Effects.Delay = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        feedback: .5,
                        time: .3,
                        mix: .5
                    };
                    this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.feedbackGainNode = u.context.createGain(), this.delayNode = u.context.createDelay(), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.delayNode.connect(this.feedbackGainNode), this.feedbackGainNode.connect(this.delayNode), this.inputNode.connect(this.delayNode), this.delayNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.Delay.prototype = Object.create(_, {
                    mix: {
                        enumerable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    },
                    time: {
                        enumerable: !0,
                        get: function () {
                            return this.options.time
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNode.delayTime.value = t)
                        }
                    },
                    feedback: {
                        enumerable: !0,
                        get: function () {
                            return this.options.feedback
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback)
                        }
                    }
                }), u.Effects.Compressor = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        threshold: -24,
                        knee: 30,
                        attack: .003,
                        release: .25,
                        ratio: 12
                    };
                    this.inputNode = this.compressorNode = u.context.createDynamicsCompressor(), this.outputNode = u.context.createGain(), this.compressorNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.Compressor.prototype = Object.create(_, {
                    threshold: {
                        enumerable: !0,
                        get: function () {
                            return this.compressorNode.threshold.value
                        },
                        set: function (t) {
                            u.Util.isInRange(t, -100, 0) && (this.compressorNode.threshold.value = t)
                        }
                    },
                    knee: {
                        enumerable: !0,
                        get: function () {
                            return this.compressorNode.knee.value
                        },
                        set: function (t) {
                            u.Util.isInRange(t, 0, 40) && (this.compressorNode.knee.value = t)
                        }
                    },
                    attack: {
                        enumerable: !0,
                        get: function () {
                            return this.compressorNode.attack.value
                        },
                        set: function (t) {
                            u.Util.isInRange(t, 0, 1) && (this.compressorNode.attack.value = t)
                        }
                    },
                    release: {
                        enumerable: !0,
                        get: function () {
                            return this.compressorNode.release.value
                        },
                        set: function (t) {
                            u.Util.isInRange(t, 0, 1) && (this.compressorNode.release.value = t)
                        }
                    },
                    ratio: {
                        enumerable: !0,
                        get: function () {
                            return this.compressorNode.ratio.value
                        },
                        set: function (t) {
                            u.Util.isInRange(t, 1, 20) && (this.compressorNode.ratio.value = t)
                        }
                    },
                    getCurrentGainReduction: function () {
                        return this.compressorNode.reduction
                    }
                }), u.Effects.LowPassFilter = function (t) {
                    s.call(this, t, "lowpass")
                }, u.Effects.HighPassFilter = function (t) {
                    s.call(this, t, "highpass")
                };
                var x = Object.create(_, {
                    frequency: {
                        enumerable: !0,
                        get: function () {
                            return this.filterNode.frequency.value
                        },
                        set: function (t) {
                            u.Util.isInRange(t, 10, 22050) && (this.filterNode.frequency.value = t)
                        }
                    },
                    peak: {
                        enumerable: !0,
                        get: function () {
                            return this.filterNode.Q.value
                        },
                        set: function (t) {
                            u.Util.isInRange(t, 1e-4, 1e3) && (this.filterNode.Q.value = t)
                        }
                    }
                });
                u.Effects.LowPassFilter.prototype = x, u.Effects.HighPassFilter.prototype = x, u.Effects.Distortion = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        gain: .5
                    };
                    this.waveShaperNode = u.context.createWaveShaper(), this.inputNode = this.outputNode = this.waveShaperNode;
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.Distortion.prototype = Object.create(_, {
                    gain: {
                        enumerable: !0,
                        get: function () {
                            return this.options.gain
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.gain = t, this.adjustGain())
                        }
                    },
                    adjustGain: {
                        writable: !1,
                        configurable: !1,
                        enumerable: !1,
                        value: function () {
                            for (var t, e = l.Util.isNumber(this.options.gain) ? parseInt(100 * this.options.gain, 10) : 50, i = 44100, n = new Float32Array(i), r = Math.PI / 180, o = 0; i > o; ++o) t = 2 * o / i - 1, n[o] = (3 + e) * t * 20 * r / (Math.PI + e * Math.abs(t));
                            this.waveShaperNode.curve = n
                        }
                    }
                }), u.Effects.Flanger = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        time: .45,
                        speed: .2,
                        depth: .1,
                        feedback: .1,
                        mix: .5
                    };
                    this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.inputFeedbackNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.delayNode = u.context.createDelay(), this.oscillatorNode = u.context.createOscillator(), this.gainNode = u.context.createGain(), this.feedbackNode = u.context.createGain(), this.oscillatorNode.type = "sine", this.inputNode.connect(this.inputFeedbackNode), this.inputNode.connect(this.dryGainNode), this.inputFeedbackNode.connect(this.delayNode), this.inputFeedbackNode.connect(this.wetGainNode), this.delayNode.connect(this.wetGainNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.inputFeedbackNode), this.oscillatorNode.connect(this.gainNode), this.gainNode.connect(this.delayNode.delayTime), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode), this.oscillatorNode.start(0);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.Flanger.prototype = Object.create(_, {
                    time: {
                        enumberable: !0,
                        get: function () {
                            return this.options.time
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.time = t, this.delayNode.delayTime.value = l.Util.normalize(t, .001, .02))
                        }
                    },
                    speed: {
                        enumberable: !0,
                        get: function () {
                            return this.options.speed
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.speed = t, this.oscillatorNode.frequency.value = l.Util.normalize(t, .5, 5))
                        }
                    },
                    depth: {
                        enumberable: !0,
                        get: function () {
                            return this.options.depth
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.depth = t, this.gainNode.gain.value = l.Util.normalize(t, 5e-4, .005))
                        }
                    },
                    feedback: {
                        enumberable: !0,
                        get: function () {
                            return this.options.feedback
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.feedback = t, this.feedbackNode.gain.value = l.Util.normalize(t, 0, .8))
                        }
                    },
                    mix: {
                        enumberable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    }
                }), u.Effects.StereoPanner = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        pan: 0
                    };
                    this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), u.context.createStereoPanner ? (this.pannerNode = u.context.createStereoPanner(), this.inputNode.connect(this.pannerNode), this.pannerNode.connect(this.outputNode)) : u.context.createPanner ? (this.pannerNode = u.context.createPanner(), this.pannerNode.type = "equalpower", this.inputNode.connect(this.pannerNode), this.pannerNode.connect(this.outputNode)) : this.inputNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.StereoPanner.prototype = Object.create(_, {
                    pan: {
                        enumerable: !0,
                        get: function () {
                            return this.options.pan
                        },
                        set: function (t) {
                            if (l.Util.isInRange(t, -1, 1) && (this.options.pan = t, this.pannerNode)) {
                                this.pannerNode.toString().indexOf("StereoPannerNode") > -1 ? this.pannerNode.pan.value = t : this.pannerNode.setPosition(t, 0, 1 - Math.abs(t))
                            }
                        }
                    }
                }), u.Effects.Convolver = function (t, e) {
                    this.options = {}, t = t || this.options;
                    var i = this,
                        n = new XMLHttpRequest,
                        r = {
                            mix: .5
                        };
                    this.callback = e, this.inputNode = u.context.createGain(), this.convolverNode = u.context.createConvolver(), this.outputNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.inputNode.connect(this.convolverNode), this.convolverNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode);
                    for (var o in r) this[o] = t[o], this[o] = void 0 === this[o] || null === this[o] ? r[o] : this[o];
                    return t.impulse ? (n.open("GET", t.impulse, !0), n.responseType = "arraybuffer", n.onload = function (t) {
                        var e = t.target.response;
                        u.context.decodeAudioData(e, function (t) {
                            i.convolverNode.buffer = t, i.callback && l.Util.isFunction(i.callback) && i.callback()
                        }, function (t) {
                            t = t || new Error("Error decoding impulse file"), i.callback && l.Util.isFunction(i.callback) && i.callback(t)
                        })
                    }, n.onreadystatechange = function (t) {
                        4 === n.readyState && n.status
                    }, void n.send()) : void 0
                }, u.Effects.Convolver.prototype = Object.create(_, {
                    mix: {
                        enumerable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    }
                }), u.Effects.PingPongDelay = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        feedback: .5,
                        time: .3,
                        mix: .5
                    };
                    this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.delayNodeLeft = u.context.createDelay(), this.delayNodeRight = u.context.createDelay(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.feedbackGainNode = u.context.createGain(), this.channelMerger = u.context.createChannelMerger(2), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.delayNodeLeft.connect(this.channelMerger, 0, 0), this.delayNodeRight.connect(this.channelMerger, 0, 1), this.delayNodeLeft.connect(this.delayNodeRight), this.feedbackGainNode.connect(this.delayNodeLeft), this.delayNodeRight.connect(this.feedbackGainNode), this.inputNode.connect(this.feedbackGainNode), this.channelMerger.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.PingPongDelay.prototype = Object.create(_, {
                    mix: {
                        enumerable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    },
                    time: {
                        enumerable: !0,
                        get: function () {
                            return this.options.time
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNodeLeft.delayTime.value = t, this.delayNodeRight.delayTime.value = t)
                        }
                    },
                    feedback: {
                        enumerable: !0,
                        get: function () {
                            return this.options.feedback
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback)
                        }
                    }
                }), u.Effects.Reverb = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        mix: .5,
                        time: .01,
                        decay: .01,
                        reverse: !1
                    };
                    this.inputNode = u.context.createGain(), this.reverbNode = u.context.createConvolver(), this.outputNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.inputNode.connect(this.reverbNode), this.reverbNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.wetGainNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i];
                    h.bind(this)()
                }, u.Effects.Reverb.prototype = Object.create(_, {
                    mix: {
                        enumerable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    },
                    time: {
                        enumerable: !0,
                        get: function () {
                            return this.options.time
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 1e-4, 10) && (this.options.time = t, h.bind(this)())
                        }
                    },
                    decay: {
                        enumerable: !0,
                        get: function () {
                            return this.options.decay
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 1e-4, 10) && (this.options.decay = t, h.bind(this)())
                        }
                    },
                    reverse: {
                        enumerable: !0,
                        get: function () {
                            return this.options.reverse
                        },
                        set: function (t) {
                            l.Util.isBool(t) && (this.options.reverse = t, h.bind(this)())
                        }
                    }
                }), u.Effects.Tremolo = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        speed: 4,
                        depth: 1,
                        mix: .8
                    };
                    this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.tremoloGainNode = u.context.createGain(), this.tremoloGainNode.gain.value = 0, this.lfoNode = u.context.createOscillator(), this.shaperNode = u.context.createWaveShaper(), this.shaperNode.curve = new Float32Array([0, 1]), this.shaperNode.connect(this.tremoloGainNode.gain), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.lfoNode.connect(this.shaperNode), this.lfoNode.type = "sine", this.lfoNode.start(0), this.inputNode.connect(this.tremoloGainNode), this.tremoloGainNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.Tremolo.prototype = Object.create(_, {
                    mix: {
                        enumerable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    },
                    speed: {
                        enumerable: !0,
                        get: function () {
                            return this.options.speed
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 20) && (this.options.speed = t, this.lfoNode.frequency.value = t)
                        }
                    },
                    depth: {
                        enumerable: !0,
                        get: function () {
                            return this.options.depth
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.depth = t, this.shaperNode.curve = new Float32Array([1 - t, 1]))
                        }
                    }
                }), u.Effects.DubDelay = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        feedback: .6,
                        time: .7,
                        mix: .5,
                        cutoff: 700
                    };
                    this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.feedbackGainNode = u.context.createGain(), this.delayNode = u.context.createDelay(), this.bqFilterNode = u.context.createBiquadFilter(), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.inputNode.connect(this.wetGainNode), this.inputNode.connect(this.feedbackGainNode), this.feedbackGainNode.connect(this.bqFilterNode), this.bqFilterNode.connect(this.delayNode), this.delayNode.connect(this.feedbackGainNode), this.delayNode.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                }, u.Effects.DubDelay.prototype = Object.create(_, {
                    mix: {
                        enumerable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    },
                    time: {
                        enumerable: !0,
                        get: function () {
                            return this.options.time
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 180) && (this.options.time = t, this.delayNode.delayTime.value = t)
                        }
                    },
                    feedback: {
                        enumerable: !0,
                        get: function () {
                            return this.options.feedback
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.feedback = parseFloat(t, 10), this.feedbackGainNode.gain.value = this.feedback)
                        }
                    },
                    cutoff: {
                        enumerable: !0,
                        get: function () {
                            return this.options.cutoff
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 4e3) && (this.options.cutoff = t, this.bqFilterNode.frequency.value = this.cutoff)
                        }
                    }
                }), u.Effects.RingModulator = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        speed: 30,
                        distortion: 1,
                        mix: .5
                    };
                    this.inputNode = u.context.createGain(), this.outputNode = u.context.createGain(), this.dryGainNode = u.context.createGain(), this.wetGainNode = u.context.createGain(), this.vIn = u.context.createOscillator(), this.vIn.start(0), this.vInGain = u.context.createGain(), this.vInGain.gain.value = .5, this.vInInverter1 = u.context.createGain(), this.vInInverter1.gain.value = -1, this.vInInverter2 = u.context.createGain(), this.vInInverter2.gain.value = -1, this.vInDiode1 = new b(u.context), this.vInDiode2 = new b(u.context), this.vInInverter3 = u.context.createGain(), this.vInInverter3.gain.value = -1, this.vcInverter1 = u.context.createGain(), this.vcInverter1.gain.value = -1, this.vcDiode3 = new b(u.context), this.vcDiode4 = new b(u.context), this.outGain = u.context.createGain(), this.outGain.gain.value = 3, this.compressor = u.context.createDynamicsCompressor(), this.compressor.threshold.value = -24, this.compressor.ratio.value = 16, this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode), this.inputNode.connect(this.vcInverter1), this.inputNode.connect(this.vcDiode4.node), this.vcInverter1.connect(this.vcDiode3.node), this.vIn.connect(this.vInGain), this.vInGain.connect(this.vInInverter1), this.vInGain.connect(this.vcInverter1), this.vInGain.connect(this.vcDiode4.node), this.vInInverter1.connect(this.vInInverter2), this.vInInverter1.connect(this.vInDiode2.node), this.vInInverter2.connect(this.vInDiode1.node), this.vInDiode1.connect(this.vInInverter3), this.vInDiode2.connect(this.vInInverter3), this.vInInverter3.connect(this.compressor), this.vcDiode3.connect(this.compressor), this.vcDiode4.connect(this.compressor), this.compressor.connect(this.outGain), this.outGain.connect(this.wetGainNode), this.wetGainNode.connect(this.outputNode);
                    for (var i in e) this[i] = t[i], this[i] = void 0 === this[i] || null === this[i] ? e[i] : this[i]
                };
                var b = function (t) {
                    this.context = t, this.node = this.context.createWaveShaper(), this.vb = .2, this.vl = .4, this.h = 1, this.setCurve()
                };
                b.prototype.setDistortion = function (t) {
                    return this.h = t, this.setCurve()
                }, b.prototype.setCurve = function () {
                    var t, e, i, n, r, o, a;
                    for (e = 1024, r = new Float32Array(e), t = o = 0, a = r.length; a >= 0 ? a > o : o > a; t = a >= 0 ? ++o : --o) i = (t - e / 2) / (e / 2), i = Math.abs(i), n = i <= this.vb ? 0 : this.vb < i && i <= this.vl ? this.h * (Math.pow(i - this.vb, 2) / (2 * this.vl - 2 * this.vb)) : this.h * i - this.h * this.vl + this.h * (Math.pow(this.vl - this.vb, 2) / (2 * this.vl - 2 * this.vb)), r[t] = n;
                    return this.node.curve = r
                }, b.prototype.connect = function (t) {
                    return this.node.connect(t)
                }, u.Effects.RingModulator.prototype = Object.create(_, {
                    mix: {
                        enumerable: !0,
                        get: function () {
                            return this.options.mix
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.mix = t, this.dryGainNode.gain.value = u.Util.getDryLevel(this.mix), this.wetGainNode.gain.value = u.Util.getWetLevel(this.mix))
                        }
                    },
                    speed: {
                        enumerable: !0,
                        get: function () {
                            return this.options.speed
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 2e3) && (this.options.speed = t, this.vIn.frequency.value = t)
                        }
                    },
                    distortion: {
                        enumerable: !0,
                        get: function () {
                            return this.options.distortion
                        },
                        set: function (t) {
                            if (l.Util.isInRange(t, .2, 50)) {
                                this.options.distortion = parseFloat(t, 10);
                                for (var e = [this.vInDiode1, this.vInDiode2, this.vcDiode3, this.vcDiode4], i = 0, n = e.length; n > i; i++) e[i].setDistortion(t)
                            }
                        }
                    }
                }), u.Effects.Quadrafuzz = function (t) {
                    this.options = {}, t = t || this.options;
                    var e = {
                        lowGain: .6,
                        midLowGain: .8,
                        midHighGain: .5,
                        highGain: .6
                    };
                    this.inputNode = l.context.createGain(), this.outputNode = l.context.createGain(), this.dryGainNode = l.context.createGain(), this.wetGainNode = l.context.createGain(), this.lowpassLeft = l.context.createBiquadFilter(), this.lowpassLeft.type = "lowpass", this.lowpassLeft.frequency.value = 147, this.lowpassLeft.Q.value = .7071, this.bandpass1Left = l.context.createBiquadFilter(), this.bandpass1Left.type = "bandpass", this.bandpass1Left.frequency.value = 587, this.bandpass1Left.Q.value = .7071, this.bandpass2Left = l.context.createBiquadFilter(), this.bandpass2Left.type = "bandpass", this.bandpass2Left.frequency.value = 2490, this.bandpass2Left.Q.value = .7071, this.highpassLeft = l.context.createBiquadFilter(), this.highpassLeft.type = "highpass", this.highpassLeft.frequency.value = 4980, this.highpassLeft.Q.value = .7071, this.overdrives = [];
                    for (var i = 0; 4 > i; i++) this.overdrives[i] = l.context.createWaveShaper(), this.overdrives[i].curve = c();
                    this.inputNode.connect(this.wetGainNode), this.inputNode.connect(this.dryGainNode), this.dryGainNode.connect(this.outputNode);
                    var n = [this.lowpassLeft, this.bandpass1Left, this.bandpass2Left, this.highpassLeft];
                    for (i = 0; i < n.length; i++) this.wetGainNode.connect(n[i]), n[i].connect(this.overdrives[i]), this.overdrives[i].connect(this.outputNode);
                    for (var r in e) this[r] = t[r], this[r] = void 0 === this[r] || null === this[r] ? e[r] : this[r]
                }, u.Effects.Quadrafuzz.prototype = Object.create(_, {
                    lowGain: {
                        enumerable: !0,
                        get: function () {
                            return this.options.lowGain
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.lowGain = t, this.overdrives[0].curve = c(l.Util.normalize(this.lowGain, 0, 150)))
                        }
                    },
                    midLowGain: {
                        enumerable: !0,
                        get: function () {
                            return this.options.midLowGain
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.midLowGain = t, this.overdrives[1].curve = c(l.Util.normalize(this.midLowGain, 0, 150)))
                        }
                    },
                    midHighGain: {
                        enumerable: !0,
                        get: function () {
                            return this.options.midHighGain
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.midHighGain = t, this.overdrives[2].curve = c(l.Util.normalize(this.midHighGain, 0, 150)))
                        }
                    },
                    highGain: {
                        enumerable: !0,
                        get: function () {
                            return this.options.highGain
                        },
                        set: function (t) {
                            l.Util.isInRange(t, 0, 1) && (this.options.highGain = t, this.overdrives[3].curve = c(l.Util.normalize(this.highGain, 0, 150)))
                        }
                    }
                })
            }
        }("undefined" != typeof window ? window : n)
    }).call(e, i(4))
}