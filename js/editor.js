var GUI = function(e) {
    function t(t) { for (var o, i, s = t[0], c = t[1], d = t[2], u = 0, p = []; u < s.length; u++) i = s[u], Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]), r[i] = 0; for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]); for (l && l(t); p.length;) p.shift()(); return a.push.apply(a, d || []), n() }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], o = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== r[c] && (o = !1)
            }
            o && (a.splice(t--, 1), e = i(i.s = n[0]))
        }
        return e
    }
    var o = {},
        r = { 75: 0 },
        a = [];

    function i(t) { if (o[t]) return o[t].exports; var n = o[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports }
    i.e = function(e) {
        var t = [],
            n = r[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var o = new Promise((function(t, o) { n = r[e] = [t, o] }));
                t.push(n[2] = o);
                var a, s = document.createElement("script");
                s.charset = "utf-8", s.timeout = 120, i.nc && s.setAttribute("nonce", i.nc), s.src = function(e) { return i.p + "./js/" + ({ 4: "addon-default-entry", 5: "addon-entry-2d-color-picker", 6: "addon-entry-better-img-uploads", 7: "addon-entry-block-count", 8: "addon-entry-block-palette-icons", 9: "addon-entry-blocks2image", 10: "addon-entry-cat-blocks", 11: "addon-entry-clones", 12: "addon-entry-columns", 13: "addon-entry-custom-block-shape", 14: "addon-entry-custom-block-text", 15: "addon-entry-custom-zoom", 16: "addon-entry-data-category-tweaks-v2", 17: "addon-entry-debugger", 18: "addon-entry-default-costume-editor-color", 19: "addon-entry-disable-paste-offset", 20: "addon-entry-disable-stage-drag-select", 21: "addon-entry-editor-buttons-reverse-order", 22: "addon-entry-editor-colored-context-menus", 23: "addon-entry-editor-extra-keys", 24: "addon-entry-editor-sounds", 25: "addon-entry-editor-stage-left", 26: "addon-entry-editor-stepping", 27: "addon-entry-editor-theme3", 28: "addon-entry-fullscreen", 29: "addon-entry-gamepad", 30: "addon-entry-hide-delete-button", 31: "addon-entry-hide-flyout", 32: "addon-entry-hide-new-variables", 33: "addon-entry-hide-stage", 34: "addon-entry-initialise-sprite-position", 35: "addon-entry-load-extensions", 36: "addon-entry-mediarecorder", 37: "addon-entry-mouse-pos", 38: "addon-entry-no-script-bumping", 39: "addon-entry-number-pad", 40: "addon-entry-paint-by-default", 41: "addon-entry-paint-snap", 42: "addon-entry-remove-curved-stage-border", 43: "addon-entry-remove-sprite-confirm", 44: "addon-entry-script-snap", 45: "addon-entry-search-sprites", 46: "addon-entry-sprite-properties", 47: "addon-entry-swap-local-global", 48: "addon-entry-transparent-orphans", 49: "addon-entry-tw-disable-cloud-variables", 50: "addon-entry-tw-disable-compiler", 51: "addon-entry-tw-remove-backpack", 52: "addon-entry-tw-remove-feedback", 53: "addon-entry-tw-straighten-comments", 54: "addon-entry-variable-manager", 55: "addon-entry-vol-slider", 56: "addon-entry-zebra-striping", 57: "addon-l10n-de", 58: "addon-l10n-es", 59: "addon-l10n-fr", 60: "addon-l10n-hu", 61: "addon-l10n-it", 62: "addon-l10n-ja", 63: "addon-l10n-ko", 64: "addon-l10n-nl", 65: "addon-l10n-pl", 66: "addon-l10n-pt", 67: "addon-l10n-ro", 68: "addon-l10n-ru", 69: "addon-l10n-sl", 70: "addon-l10n-tr", 71: "addon-l10n-zh-tw", 73: "addons", 78: "iframe-extension-worker", 79: "library-backdrops", 80: "library-costumes", 81: "library-sounds", 82: "library-sprites", 84: "sb" }[e] || e) + "." + { 4: "4187e36838a4d8aa5d4f", 5: "a91769e0323364db6767", 6: "0eeee1000018bee75318", 7: "7c11f09f9027be38b800", 8: "f9a0cd1c7001afbf1e65", 9: "720aad425577f7d5f897", 10: "d52f4bf06850f3f86ba2", 11: "81180521532534f4093c", 12: "734c08afd30446bbf997", 13: "cc8f90b237ec33ae8b64", 14: "91e830cbe3bbdf4fe175", 15: "205b9c2a966946f81ba4", 16: "23c0bd6ccc32c8e13c07", 17: "42a4b9bcaf9ba8aef725", 18: "1201ac7bcaa681d22513", 19: "80756b6658551577db2d", 20: "a129a7bc69bea3d6e495", 21: "30fd920775ba224a9d6a", 22: "b842a5691010df0f5a0e", 23: "392bddab85449821811e", 24: "fcb1e1c5d46d7c393869", 25: "6b173ea7217e206e9f13", 26: "b83cefb41fd570dff0cb", 27: "fd38e51c8b02de108684", 28: "80c6790cd8817aa92b8d", 29: "ec02e2a5bdea0f32a3b0", 30: "ea9329ba014955a2e8aa", 31: "a9a4efab3bb073d8c053", 32: "698e58fbf2fd40ee6ce1", 33: "822dfaa20694746db748", 34: "3130ab4e1ca4e834074c", 35: "e7041b7d9c96fbea08bf", 36: "af2d1a746f13fa8b8427", 37: "bf7c2f5b404fa107b5ab", 38: "0d5efca42f01602ec264", 39: "ad3ef61e22a02858bd60", 40: "0fe61d1bcac2fc7435f7", 41: "3ae79638fa79512bb0fa", 42: "b9373b0e447ecc9c4053", 43: "12f2a6b6359852fd42b7", 44: "ed3f30e5abed14bbe3a5", 45: "cfa8277205737839fee3", 46: "a3f35f195582e937850e", 47: "7f72328407fc9e1a8ae8", 48: "c44e0c4b7bd6906a5c52", 49: "346ba1b6a73659ce6aad", 50: "f649732592f53577d3aa", 51: "cf6bf1540f0f9b4468e1", 52: "38ace4473a1f084ffe6f", 53: "1e12e8cc874d62f38311", 54: "d28ef519bb724e877b80", 55: "8273083ebf9e3b259c65", 56: "fc584c344d8b4c136782", 57: "1ce4e1a9e9019ed12227", 58: "1876b49ac13538e7b5f1", 59: "da695c60d51366cf90d4", 60: "6357b2f4041cfcd3660c", 61: "b8b2e73057f7d8867a8d", 62: "cdd3d0e343385d4cae6f", 63: "331089d4cc907f4a9e95", 64: "d7f480f78319f99fe9cd", 65: "0c3bb53c8c0d2ee05cb8", 66: "f99e02053fd9699a9a96", 67: "cdfc53240c0be795b736", 68: "186ee1a2c3c1ef30c7bf", 69: "370cfaccc644cb5ba930", 70: "7b99d61c16bd8e3a5cfe", 71: "6aae8a896d985fcb8a44", 73: "dcaa95331bc8b0a6bd3d", 78: "1ec84a4eb111cbc994eb", 79: "5bc4418e6f3a240599c7", 80: "af69db2abfe96042bba0", 81: "f4a1035be0af483e83fc", 82: "5fe2c6ee72c02215a867", 84: "785b367628745112ec19" }[e] + ".js" }(e);
                var c = new Error;
                a = function(t) {
                    s.onerror = s.onload = null, clearTimeout(d);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", c.name = "ChunkLoadError", c.type = o, c.request = a, n[1](c)
                        }
                        r[e] = void 0
                    }
                };
                var d = setTimeout((function() { a({ type: "timeout", target: s }) }), 12e4);
                s.onerror = s.onload = a, document.head.appendChild(s)
            }
        return Promise.all(t)
    }, i.m = e, i.c = o, i.d = function(e, t, n) { i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }) }, i.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(n, o, function(t) { return e[t] }.bind(null, o));
        return n
    }, i.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return i.d(t, "a", t), t }, i.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, i.p = "https://40code-cdn.zq990.com/scratch/", i.oe = function(e) { throw console.error(e), e };
    var s = window.webpackJsonpGUI = window.webpackJsonpGUI || [],
        c = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var d = 0; d < s.length; d++) t(s[d]);
    var l = c;
    return a.push([888, 0, 3, 1, 2]), n()
}({
    119: function(e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    123: function(e, t, n) {
        var o = n(257);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        var r = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(12)(o, r);
        o.locals && (e.exports = o.locals)
    },
    162: function(e, t, n) {
        (function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(this, n(42))
    },
    163: function(e, t, n) { e.exports = n.p + "static/assets/33b737193edfe1730f38112ad35a84b4.svg" },
    164: function(e, t, n) { e.exports = n.p + "sw.js" },
    165: function(e, t, n) {
        "use strict";
        var o = n(6),
            r = n.n(o),
            a = n(0),
            i = n.n(a),
            s = n(1),
            c = n.n(s),
            d = n(9),
            l = n(52),
            u = n(3),
            p = n(13),
            h = (n(166), n(167)),
            f = n(80),
            m = n(17),
            b = n(71),
            v = n(29);
        const g = ["projectId", "onSetAuthor", "onSetDescription", "onSetProjectTitle"];

        function w(e, t) {
            if (null == e) return {};
            var n, o, r = function(e, t) {
                if (null == e) return {};
                var n, o, r = {},
                    a = Object.keys(e);
                for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]) }
            return r
        }
        const y = () => document.querySelector('meta[name="robots"][content="noindex"]'),
            _ = e => {
                if (e) {
                    const e = y();
                    e && e.remove()
                } else if (!y()) {
                    const e = document.createElement("meta");
                    e.name = "robots", e.content = "noindex", document.head.appendChild(e)
                }
            };
        var j = n(170),
            x = n(93),
            k = n(171);
        const E = ["canOpenPackager"];

        function P() { return (P = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }).apply(this, arguments) }

        function O(e, t) {
            if (null == e) return {};
            var n, o, r = function(e, t) {
                if (null == e) return {};
                var n, o, r = {},
                    a = Object.keys(e);
                for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]) }
            return r
        }
        const S = "https://packager.turbowarp.org",
            C = e => new Promise((t, n) => {
                const o = new FileReader;
                o.onload = () => t(o.result), o.onerror = () => n(new Error("Cannot read blob as array buffer")), o.readAsArrayBuffer(e)
            }),
            T = function(e) {
                class t extends c.a.Component {
                    constructor(e) { super(e), this.handleClickPackager = this.handleClickPackager.bind(this), this.handleMessage = this.handleMessage.bind(this) }
                    componentDidMount() { window.addEventListener("message", this.handleMessage) }
                    componentWillUnmount() { window.removeEventListener("message", this.handleMessage) }
                    handleClickPackager() { this.props.canOpenPackager && window.open("".concat(S, "/?import_from=").concat(location.origin)) }
                    handleMessage(e) {
                        e.origin === S && this.props.canOpenPackager && (e.source.postMessage({ p4: { type: "start-import" } }, S), this.props.vm.saveProjectSb3().then(C).then(t => {
                            const n = "".concat(this.props.reduxProjectTitle, ".sb3");
                            e.source.postMessage({ p4: { type: "finish-import", data: t, name: n } }, S, [t])
                        }).catch(t => { m.default.error(t), e.source.postMessage({ p4: { type: "cancel-import" } }, S) }))
                    }
                    render() {
                        const t = this.props,
                            { canOpenPackager: n } = t,
                            o = O(t, E);
                        return c.a.createElement(e, P({ onClickPackager: this.handleClickPackager }, o))
                    }
                }
                t.propTypes = { canOpenPackager: i.a.bool, reduxProjectTitle: i.a.string, vm: i.a.shape({ saveProjectSb3: i.a.func }) };
                return Object(d.b)(e => ({ canOpenPackager: Object(p.r)(e.scratchGui.projectState.loadingState), reduxProjectTitle: e.scratchGui.projectTitle, vm: e.scratchGui.vm }), () => ({}))(t)
            };
        var I = n(25),
            N = n(7),
            A = n.n(N),
            F = n(14),
            L = n.n(F),
            R = n(172);
        const M = ["projectChanged", "onAutosavingStart", "onAutosavingFinish", "vm"];

        function D(e, t) {
            if (null == e) return {};
            var n, o, r = function(e, t) {
                if (null == e) return {};
                var n, o, r = {},
                    a = Object.keys(e);
                for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]) }
            return r
        }
        let U = !1;
        var G = n(55);
        const z = history.replaceState;
        history.replaceState = function(...e) { try { return z.call(this, ...e) } catch (e) { m.default.error(e) } };
        const B = history.pushState;
        history.pushState = function(...e) { try { return B.call(this, ...e) } catch (e) { m.default.error(e) } };
        var q = n(181),
            V = n(182),
            H = n(69),
            W = n.n(H),
            $ = n(123),
            X = n.n($),
            Z = n(95);
        const J = Object(u.d)({ tooltip: { id: "tw.input.tooltip", defaultMessage: "Copy and paste a Scratch project link here!" } });
        class Q extends c.a.Component {
            constructor(e) { super(e), A()(this, ["handleKeyDown", "handleChange", "handleBlur", "handleFocus", "inputRef", "tooltipRef"]), this.state = { projectId: this.props.projectId } }
            componentDidUpdate(e) { this.props.projectId !== e.projectId && (this.props.projectId === p.e ? (this.input.focus(), this.input.selectionStart = this.input.value.length) : this.input.blur(), this.setState({ projectId: this.props.projectId })) }
            extractProjectId(e) { const t = e.match(/\d+/); return t ? t[0] : null }
            readProjectId(e) { return this.extractProjectId(e.target.value) || p.e }
            handleKeyDown(e) { "Enter" === e.key && this.state.projectId && this.input.blur() }
            handleChange(e) { this.setState({ projectId: this.readProjectId(e) || p.e }) }
            handleBlur() { this.state.projectId && this.state.projectId !== this.props.projectId && this.props.setProjectId(this.state.projectId), W.a.hide(this.tooltip) }
            handleFocus(e) { this.extractProjectId(e.target.value) && e.target.select(), W.a.show(this.tooltip) }
            inputRef(e) { this.input = e }
            tooltipRef(e) { this.tooltip = e }
            render() { const e = this.state.projectId === p.e ? "" : this.state.projectId || ""; return c.a.createElement("div", { ref: this.tooltipRef, "data-tip": this.props.intl.formatMessage(J.tooltip) }, c.a.createElement(W.a, { className: X.a.tooltip, effect: "solid" }), c.a.createElement("input", { ref: this.inputRef, spellCheck: "false", type: "text", value: "".concat("https://scratch.mit.edu/projects/").concat(e), className: X.a.input, onKeyDown: this.handleKeyDown, onChange: this.handleChange, onBlur: this.handleBlur, onFocus: this.handleFocus })) }
        }
        Q.propTypes = { intl: u.f, projectId: i.a.string, setProjectId: i.a.func };
        var K = Object(u.e)(Object(d.b)(e => ({ projectId: e.scratchGui.projectState.projectId }), e => ({ setProjectId: t => Object(Z.a)(e, t) }))(Q)),
            Y = n(28),
            ee = n.n(Y),
            te = function(e) { this.studioId = e, this.offset = 0, this.ended = !1, this.loadingPage = !1, this.unusedPlaceholders = [], this.root = document.createElement("div"), this.root.className = ee.a.studioviewRoot, this.projectList = document.createElement("div"), this.projectList.className = ee.a.studioviewList, this.root.appendChild(this.projectList), "IntersectionObserver" in window ? (this.intersectionObserver = new IntersectionObserver(this.handleIntersection.bind(this), { root: this.projectList }), this.loadNextPageObserver = new IntersectionObserver(this.handleLoadNextPageIntersection.bind(this), { root: this.projectList })) : (this.intersectionObserver = null, this.loadNextPageObserver = null), this.messages = { AUTHOR_ATTRIBUTION: "", PROJECT_HOVER_TEXT: "", LOAD_ERROR: "" } };
        te.prototype.addProject = function(e) {
            var t;
            this.unusedPlaceholders.length ? t = this.unusedPlaceholders.shift() : (t = this.createPlaceholder(), this.projectList.appendChild(t)), this.placeholderToProject(t, e.id, e.title, e.author)
        }, te.prototype.createLazyImage = function(e) { var t = document.createElement("img"); return this.intersectionObserver ? (this.intersectionObserver.observe(t), t.dataset.src = e) : t.src = e, t }, te.prototype.createPlaceholder = function() {
            var e = document.createElement("a");
            e.className = r()(ee.a.studioviewProject, ee.a.studioviewPlaceholder);
            var t = document.createElement("div");
            t.className = ee.a.studioviewThumbnail;
            var n = document.createElement("div");
            n.className = ee.a.studioviewTitle;
            var o = document.createElement("div");
            return o.className = ee.a.studioviewAuthor, e.thumbnailEl = t, e.titleEl = n, e.authorEl = o, e.appendChild(t), e.appendChild(n), e.appendChild(o), e
        }, te.prototype.placeholderToProject = function(e, t, n, o) {
            e.className = r()(ee.a.studioviewProject, ee.a.studioviewLoaded), e.dataset.id = t, e.dataset.title = n, e.dataset.author = o, e.title = this.messages.PROJECT_HOVER_TEXT.replace("$author", o).replace("$title", n), e.href = te.PROJECT_PAGE.replace("$id", t);
            var a = te.THUMBNAIL_SRC.replace("$id", t),
                i = this.createLazyImage(a);
            return e.thumbnailEl.appendChild(i), e.titleEl.innerText = n, e.authorEl.innerText = this.messages.AUTHOR_ATTRIBUTION.replace("$author", o), e.addEventListener("click", this.handleClick.bind(this), !0), e.addEventListener("keydown", this.handleKeyDown.bind(this), !0), e
        }, te.prototype.addErrorElement = function() {
            var e = document.createElement("div");
            e.innerText = this.messages.LOAD_ERROR, e.className = ee.a.studioviewError, this.projectList.appendChild(e)
        }, te.prototype.handleLoadNextPageIntersection = function(e) { for (var t = 0; t < e.length; t++) { e[t].isIntersecting && this.canLoadNext() && this.loadNextPage() } }, te.prototype.clickProject = function(e) {
            for (; !e.classList.contains(ee.a.studioviewProject);) e = e.parentNode;
            var t = e.dataset.id;
            this.onselect(t, e)
        }, te.prototype.handleClick = function(e) { e.preventDefault(), this.clickProject(e.target) }, te.prototype.handleKeyDown = function(e) { 13 === e.keyCode && (e.preventDefault(), this.clickProject(e.target)) }, te.prototype.handleIntersection = function(e, t) {
            e.forEach((function(e) {
                if (e.isIntersecting) {
                    var n = e.target;
                    n.src = n.dataset.src, n.dataset.src = "", n.className = "", t.unobserve(n)
                }
            }))
        }, te.prototype.canLoadNext = function() { return !this.loadingPage && !this.ended }, te.prototype.cleanupPlaceholders = function() {
            for (; this.unusedPlaceholders.length;) {
                var e = this.unusedPlaceholders.pop();
                this.projectList.removeChild(e)
            }
        }, te.prototype.addPlaceholders = function() {
            for (var e = 0; e < te.PLACEHOLDER_COUNT; e++) {
                var t = this.createPlaceholder();
                this.unusedPlaceholders.push(t), this.projectList.appendChild(t)
            }
        }, te.prototype.shuffler = function(e) { return e }, te.prototype.loadNextPage = function() {
            if (this.loadingPage) throw new Error("Already loading the next page");
            if (this.ended) throw new Error("There are no more pages to load");
            0 === this.unusedPlaceholders.length && this.addPlaceholders(), this.loadNextPageObserver && this.loadNextPageObserver.disconnect(), this.root.setAttribute("loading", ""), this.loadingPage = !0;
            var e = new XMLHttpRequest;
            e.responseType = "json", e.onload = function() {
                var t = e.response;
                if (Array.isArray(t)) {
                    for (var n = [], o = 0; o < t.length; o++) {
                        var r = t[o];
                        n.push({ id: r.id, title: r.title, author: r.username })
                    }
                    n = this.shuffler(n);
                    for (o = 0; o < n.length; o++) this.addProject(n[o]);
                    this.cleanupPlaceholders(), 40 === t.length ? this.loadNextPageObserver && this.loadNextPageObserver.observe(this.projectList.lastChild) : (this.ended = !0, this.onend()), this.offset += n.length, this.loadingPage = !1, this.root.removeAttribute("loading"), this.onpageload()
                } else e.onerror()
            }.bind(this), e.onerror = function() { this.root.setAttribute("error", ""), this.cleanupPlaceholders(), this.addErrorElement(), this.ended = !0 }.bind(this);
            var t = te.STUDIO_API.replace("$id", this.studioId).replace("$offset", "" + this.offset);
            e.open("GET", t), e.send()
        }, te.prototype.getURL = function() { return te.STUDIO_PAGE.replace("$id", this.studioId) }, te.prototype.onselect = function(e, t) {}, te.prototype.onpageload = function() {}, te.prototype.onend = function() {}, te.STUDIO_API = "https://trampoline.turbowarp.org/proxy/studios/$id/projects?offset=$offset", te.THUMBNAIL_SRC = "https://trampoline.turbowarp.org/thumbnails/$id?width=144&height=108", te.PROJECT_PAGE = "https://turbowarp.org/$id", te.STUDIO_PAGE = "https://scratch.mit.edu/studios/$id/", te.PLACEHOLDER_COUNT = 9;
        var ne = te;
        const oe = Object(u.d)({ authorAttribution: { id: "tw.studioview.authorAttribution", defaultMessage: "by {author}" }, hoverText: { id: "tw.studioview.hoverText", defaultMessage: "{title} by {author}" }, error: { id: "tw.studioview.error", defaultMessage: "There was an error loading the next page of projects." } });
        class re extends c.a.Component {
            constructor(e) { super(e), A()(this, ["handleSelect", "ref"]) }
            componentDidMount() { this.studioView = new ne(this.props.id), this.studioView.messages.AUTHOR_ATTRIBUTION = this.props.intl.formatMessage(oe.authorAttribution, { author: "$author" }), this.studioView.messages.PROJECT_HOVER_TEXT = this.props.intl.formatMessage(oe.hoverText, { author: "$author", title: "$title" }), this.studioView.messages.LOAD_ERROR = this.props.intl.formatMessage(oe.error), this.props.placeholder ? this.studioView.addPlaceholders() : this.studioView.loadNextPage(), this.studioView.onselect = this.handleSelect, this.el.appendChild(this.studioView.root) }
            componentDidUpdate(e) { e.placeholder && !this.props.placeholder && this.studioView.loadNextPage() }
            handleSelect(e) { this.props.onSelect(e) }
            ref(e) { this.el = e }
            render() { return c.a.createElement("div", { className: r()(ee.a.wrapper), ref: this.ref }) }
        }
        re.propTypes = { id: i.a.string.isRequired, intl: u.f.isRequired, placeholder: i.a.bool, onSelect: i.a.func.isRequired };
        var ae = Object(u.e)(re),
            ie = n(50),
            se = n.n(ie);
        class ce extends c.a.Component {
            constructor(e) { super(e), A()(this, ["handleSelect", "handleOpenProjects"]), this.state = { opened: !1, transition: !0 } }
            componentDidUpdate(e) { "0" === this.props.projectId && null === e.projectId && this.setState({ opened: !0, transition: !1 }) }
            handleSelect(e) { this.props.setProjectId(e) }
            handleOpenProjects() { this.setState({ opened: !0 }) }
            render() {
                const e = this.state.opened;
                return c.a.createElement("div", { className: se.a.container }, c.a.createElement("div", {
                    className: r()(se.a.projects, {
                        [se.a.opened]: e,
                        [se.a.transition]: this.state.transition
                    })
                }, c.a.createElement(ae, { id: this.props.studio, onSelect: this.handleSelect, placeholder: !e }), e ? null : c.a.createElement("div", { className: se.a.openerContainer, onClick: this.handleOpenProjects }, c.a.createElement("div", { className: se.a.openerContent }, c.a.createElement(u.a, { defaultMessage: "Click to view featured projects.", id: "tw.viewFeaturedProjects" })))), c.a.createElement("div", { className: se.a.footer }, c.a.createElement("a", { target: "_blank", rel: "noopener noreferrer", href: "https://scratch.mit.edu/studios/".concat(this.props.studio, "/") }, c.a.createElement(u.a, { defaultMessage: "View studio on Scratch.", id: "tw.featuredProjectsStudio" }))))
            }
        }
        ce.propTypes = { setProjectId: i.a.func, projectId: i.a.string, studio: i.a.string };
        var de = Object(d.b)(e => ({ projectId: e.scratchGui.projectState.projectId }), e => ({ setProjectId: t => Object(Z.a)(e, t) }))(ce),
            le = n(64),
            ue = n.n(le),
            pe = n(97),
            he = n.n(pe);
        const fe = e => { e = he()(e, /@([\w-]+)/, (e, t) => c.a.createElement("a", { href: "https://scratch.mit.edu/users/".concat(e, "/"), rel: "noreferrer", key: e + t }, "@".concat(e))); return e = he()(e, /(https?:\/\/[\w\d_\-.]{1,256}(?:\/(?:\S*[\w:/#[\]@$&'()*+=])?)?(?![^?!,:;\w\s]\S))/g, (e, t) => c.a.createElement("a", { href: e, rel: "noreferrer", key: e + t }, e)), e = he()(e, /#([\w-]+)/g, (e, t) => c.a.createElement("a", { href: "https://scratch.mit.edu/search/projects?q=".concat(e), key: e + t }, "#".concat(e))) },
            me = ({ instructions: e, credits: t, projectId: n }) => "unshared" !== e && "unshared" !== t && c.a.createElement("div", { className: ue.a.description }, c.a.createElement("div", { className: ue.a.projectLink }, c.a.createElement("a", { href: "https://scratch.mit.edu/projects/".concat(n, "/"), target: "_blank", rel: "noreferrer" }, c.a.createElement(u.a, { defaultMessage: "View project on Scratch", id: "tw.viewOnScratch" }))), e ? c.a.createElement("div", null, c.a.createElement("h2", { className: ue.a.header }, c.a.createElement(u.a, { defaultMessage: "Instructions", id: "tw.home.instructions" })), fe(e)) : null, e && t ? c.a.createElement("div", { className: ue.a.divider }) : null, t && c.a.createElement("div", null, c.a.createElement("h2", { className: ue.a.header }, c.a.createElement(u.a, { defaultMessage: "Notes and Credits", id: "tw.home.credit" })), fe(t)));
        me.propTypes = { instructions: i.a.string, credits: i.a.string, projectId: i.a.string };
        var be = me,
            ve = n(183),
            ge = n(179),
            we = n(163),
            ye = n.n(we),
            _e = n(98),
            je = n.n(_e);
        var xe = () => c.a.createElement("div", { className: je.a.badge }, c.a.createElement("div", { className: je.a.icon }, c.a.createElement("img", { src: ye.a, alt: "Cloud", width: "32", height: "32" })), c.a.createElement("div", { className: je.a.text }, c.a.createElement(u.a, { defaultMessage: "This project uses cloud variables. TurboWarp uses its own cloud variable server independent of Scratch. Beware of impersonation as anyone can change their username to anything. {learnMore}", id: "tw.cloudVariableBadge", values: { learnMore: c.a.createElement("a", { href: "https://docs.turbowarp.org/cloud-variables", target: "_blank", rel: "noreferrer" }, c.a.createElement(u.a, { defaultMessage: "Learn more.", id: "gui.alerts.cloudInfoLearnMore" })) } }))),
            ke = n(82),
            Ee = n(54);
        n(164);
        var Pe = n(180),
            Oe = n(20),
            Se = n.n(Oe);
        const Ce = ["intl", "hasCloudVariables", "description", "isFullScreen", "isLoading", "isPlayerOnly", "isRtl", "onClickTheme", "projectId"];

        function Te() { return (Te = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }).apply(this, arguments) }

        function Ie(e, t) {
            if (null == e) return {};
            var n, o, r = function(e, t) {
                if (null == e) return {};
                var n, o, r = {},
                    a = Object.keys(e);
                for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n]);
                return r
            }(e, t);
            if (Object.getOwnPropertySymbols) { var a = Object.getOwnPropertySymbols(e); for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]) }
            return r
        }
        if (window.parent !== window) throw alert("This page is embedding 40code in a way that is unsupported and will cease to function in the near future. Please read https://docs.40code.org/embedding"), new Error("Invalid embed");
        const Ne = () => { window.open("".concat("").concat("addons.html")) },
            Ae = Object(u.d)({ defaultTitle: { id: "tw.guiDefaultTitle", defaultMessage: "Run Scratch projects faster" } }),
            Fe = Object(l.d)(k.a, T)(V.a);
        Ee.a.reloadChannel && Ee.a.reloadChannel.addEventListener("message", () => { location.reload() }), Ee.a.changeChannel && Ee.a.changeChannel.addEventListener("message", e => { G.a.setStoreWithVersionCheck(e.data) }), Object(Pe.a)();
        const Le = () => c.a.createElement("footer", { className: Se.a.footer }, c.a.createElement("div", { className: Se.a.footerContent }, c.a.createElement("div", { className: Se.a.footerText }, c.a.createElement(u.a, { defaultMessage: "40code is not affiliated with Scratch, the Scratch Team, or the Scratch Foundation.", id: "tw.footer.disclaimer" })), c.a.createElement("div", { className: Se.a.footerColumns }, c.a.createElement("div", { className: Se.a.footerSection }, c.a.createElement("a", { href: "https://fosshost.org/" }, c.a.createElement(u.a, { defaultMessage: "Hosting provided by Fosshost", id: "tw.footer.fosshost" })), c.a.createElement("a", { href: "credits.html" }, c.a.createElement(u.a, { defaultMessage: "Credits", id: "tw.footer.credits" }))), c.a.createElement("div", { className: Se.a.footerSection }, c.a.createElement("a", { href: "https://desktop.40code.org/" }, "40code Desktop"), c.a.createElement("a", { href: "https://packager.40code.org/" }, "40code Packager"), c.a.createElement("a", { href: "https://docs.40code.org/embedding" }, c.a.createElement(u.a, { defaultMessage: "Embedding", id: "tw.footer.embed" })), c.a.createElement("a", { href: "https://docs.40code.org/url-parameters" }, c.a.createElement(u.a, { defaultMessage: "URL Parameters", id: "tw.footer.parameters" })), c.a.createElement("a", { href: "https://docs.40code.org/translate" }, c.a.createElement(u.a, { defaultMessage: "Help Translate 40code", id: "tw.footer.translate" }))), c.a.createElement("div", { className: Se.a.footerSection }, c.a.createElement("a", { href: "https://scratch.mit.edu/users/GarboMuffin/#comments" }, c.a.createElement(u.a, { defaultMessage: "Feedback & Bugs", id: "tw.feedback" })), c.a.createElement("a", { href: "https://github.com/40code/" }, c.a.createElement(u.a, { defaultMessage: "Source Code", id: "tw.code" })), c.a.createElement("a", { href: "privacy.html" }, c.a.createElement(u.a, { defaultMessage: "Privacy Policy", id: "tw.privacy" }))))));
        class Re extends c.a.Component {
            constructor(e) { super(e), this.handleUpdateProjectTitle = this.handleUpdateProjectTitle.bind(this) }
            componentDidUpdate(e) { e.isLoading && this.props.isLoading }
            handleUpdateProjectTitle(e, t) { document.title = "ache - 图形化编程编辑器" }
            render() {
                const e = this.props,
                    { intl: t, hasCloudVariables: n, description: o, isFullScreen: a, isLoading: i, isPlayerOnly: s, isRtl: d, onClickTheme: l, projectId: p } = e,
                    h = Ie(e, Ce),
                    f = s && !a,
                    m = !s;
                return c.a.createElement("div", {
                    className: r()(Se.a.container, {
                        [Se.a.playerOnly]: f,
                        [Se.a.editor]: m
                    })
                }, f ? c.a.createElement("div", { className: Se.a.menu }, c.a.createElement(Fe, { canChangeLanguage: !0, canManageFiles: !0, enableSeeInside: !0, onClickAddonSettings: Ne, onClickTheme: l })) : null, c.a.createElement("div", { className: Se.a.center, style: s ? { width: "".concat(Math.max(480, h.customStageSize.width) + 2, "px") } : null }, null, c.a.createElement(q.a, Te({ onClickAddonSettings: Ne, onClickTheme: l, onUpdateProjectTitle: this.handleUpdateProjectTitle, backpackVisible: !0, backpackHost: "_local_" }, h)), f ? c.a.createElement(c.a.Fragment, null, Object(ke.c)() ? null : c.a.createElement(ve.a, { isRtl: d }), Object(ke.b)() ? null : c.a.createElement(ge.a, { isRtl: d }), c.a.createElement("div", { className: Se.a.section }, c.a.createElement(K, null)), ("0" === p || "unshared" === o.instructions || "unshared" === o.credits) && c.a.createElement("div", { className: Se.a.unsharedUpdate }, c.a.createElement("p", null, c.a.createElement("i", null, "Updated June 1, 2022")), c.a.createElement("p", null, "Unshared projects will no longer be accessible using just their project ID **at some point in the future** due to upcoming Scratch API changes."), c.a.createElement("p", null, "Instead, you can either share the project or save the project to your computer (File > Save to your computer) and load the file instead."), c.a.createElement("p", null, "For more information, visit: ", c.a.createElement("a", { href: "https://docs.40code.org/unshared-projects", target: "_blank", rel: "noopener noreferrer" }, "https://docs.40code.org/unshared-projects")), ("unshared" === o.instructions || "unshared" === o.credits) && c.a.createElement("p", null, "If this project was recently shared, this message may incorrectly appear for up to an hour.")), n && "0" !== p && c.a.createElement("div", { className: Se.a.section }, c.a.createElement(xe, null)), o.instructions || o.credits ? c.a.createElement("div", { className: Se.a.section }, c.a.createElement(be, { instructions: o.instructions, credits: o.credits, projectId: p })) : null, c.a.createElement("div", { className: Se.a.section }, c.a.createElement("p", null, c.a.createElement(u.a, { defaultMessage: "40code is a Scratch mod that compiles projects to JavaScript to make them run really fast. Try it out by inputting a project ID or URL above or choosing a featured project below.", id: "tw.home.description" }))), c.a.createElement("div", { className: Se.a.section }, c.a.createElement(de, { studio: "27205657" }))) : null), f && c.a.createElement(Le, null))
            }
        }
        Re.propTypes = { intl: u.f, hasCloudVariables: i.a.bool, customStageSize: i.a.shape({ width: i.a.number, height: i.a.number }), description: i.a.shape({ credits: i.a.string, instructions: i.a.string }), isFullScreen: i.a.bool, isLoading: i.a.bool, isPlayerOnly: i.a.bool, isRtl: i.a.bool, onClickTheme: i.a.func, projectId: i.a.string };
        const Me = Object(u.e)(Object(d.b)(e => ({ hasCloudVariables: e.scratchGui.tw.hasCloudVariables, customStageSize: e.scratchGui.customStageSize, description: e.scratchGui.tw.description, isFullScreen: e.scratchGui.mode.isFullScreen, isLoading: Object(p.m)(e.scratchGui.projectState.loadingState), isPlayerOnly: e.scratchGui.mode.isPlayerOnly, isRtl: e.locales.isRtl, projectId: e.scratchGui.projectState.projectId }), () => ({}))(Re)),
            De = Object(l.d)(h.a, Object(f.a)("TW Interface"), (function(e) {
                class t extends c.a.Component {
                    shouldComponentUpdate(e) { return this.props.projectId !== e.projectId }
                    componentDidUpdate() {
                        this.props.onSetAuthor("", ""), this.props.onSetDescription("", "");
                        const e = this.props.projectId;
                        "0" !== e && (e => fetch("https://trampoline.turbowarp.org/proxy/projects/$id".replace("$id", e)).then(e => { if (404 === e.status) throw new Error("Probably unshared (API returned 404)"); if (200 !== e.status) throw new Error("Unexpected status code: ".concat(e.status)); return e.json() }))(e).then(t => {
                            if (this.props.projectId !== e) return;
                            const n = t.title;
                            n && this.props.onSetProjectTitle(n);
                            const o = t.author.username,
                                r = "https://trampoline.turbowarp.org/avatars/".concat(t.author.id);
                            this.props.onSetAuthor(o, r);
                            const a = t.instructions || "",
                                i = t.description || "";
                            (a || i) && this.props.onSetDescription(a, i), _(!0)
                        }).catch(e => { _(!1), "".concat(e).includes("unshared") && this.props.onSetDescription("unshared", "unshared"), m.default.warn("cannot fetch project meta", e) })
                    }
                    render() {
                        const t = this.props,
                            { projectId: n, onSetAuthor: o, onSetDescription: r, onSetProjectTitle: a } = t,
                            i = w(t, g);
                        return c.a.createElement(e, i)
                    }
                }
                t.propTypes = { projectId: i.a.string, onSetAuthor: i.a.func, onSetDescription: i.a.func, onSetProjectTitle: i.a.func };
                return Object(d.b)(e => ({ projectId: e.scratchGui.projectState.projectId }), e => ({ onSetAuthor: (t, n) => e(Object(v.d)({ username: t, thumbnail: n })), onSetDescription: (t, n) => e(Object(v.g)({ instructions: t, credits: n })), onSetProjectTitle: t => e(Object(b.c)(t)) }))(t)
            }), j.a, x.a, (function(e) {
                class t extends c.a.Component {
                    constructor(e) { super(e), A()(this, ["createRestorePoint"]), this.timeout = null }
                    componentDidUpdate(e) { U || this.props.projectChanged === e.projectChanged && this.props.isShowingProject === e.isShowingProject || (this.props.projectChanged && this.props.isShowingProject ? this.timeout = setTimeout(this.createRestorePoint, 3e5) : (clearTimeout(this.timeout), this.timeout = null)) }
                    componentWillUnmount() { clearTimeout(this.timeout) }
                    async createRestorePoint() {
                        try { this.props.onAutosavingStart(), await R.a.save(this.props.vm) } catch (e) { U = !0 }
                        this.timeout = null, setTimeout(() => { this.props.onAutosavingFinish(), null === this.timeout && !U && this.props.projectChanged && this.props.isShowingProject && (this.timeout = setTimeout(this.createRestorePoint, 3e5)) }, 250)
                    }
                    render() {
                        const t = this.props,
                            { projectChanged: n, onAutosavingStart: o, onAutosavingFinish: r, vm: a } = t,
                            i = D(t, M);
                        return c.a.createElement(e, i)
                    }
                }
                t.propTypes = { isShowingProject: i.a.bool, projectChanged: i.a.bool, onAutosavingStart: i.a.func, onAutosavingFinish: i.a.func, vm: i.a.instanceOf(L.a) };
                return Object(d.b)(e => ({ isShowingProject: Object(p.r)(e.scratchGui.projectState.loadingState), projectChanged: e.scratchGui.projectChanged, vm: e.scratchGui.vm }), e => ({ onAutosavingStart: () => e(Object(I.i)("twAutosaving")), onAutosavingFinish: () => e(Object(I.c)("twAutosaving")) }))(t)
            }), T)(Me);
        t.a = De
    },
    20: function(e, t, n) {
        var o = n(281);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        var r = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(12)(o, r);
        o.locals && (e.exports = o.locals)
    },
    257: function(e, t, n) {
        (t = e.exports = n(11)(!1)).push([e.i, '/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ /*\n    Contains constants for the z-index values of elements that are part of the global stack context.\n    In other words, z-index values that are "inside" a component are not added here.\n    This prevents conflicts between identical z-index values in different components.\n*/ /* Toolbox z-index: 40; set in scratch-blocks */ /* tooltips should go over add buttons if they overlap */ /* monitors go over add buttons */ /* "ask" block text input goes above monitors */ /* menu-bar should go over monitors, alerts and tutorials */ /* tw: show below menu bar normally */ /* Block drag z-index: 1000; default 50 is overriden in blocks.css */ /* so it is draggable into other panes */ /* in most interfaces, the context menu is always on top */ .project-input_input_1gT4y {\n    border: none;\n    width: 100%;\n    font-size: 23px;\n    line-height: 32px;\n    opacity: 0.5;\n    background-color: transparent;\n    color: inherit;\n} .project-input_input_1gT4y:focus {\n    opacity: 1;\n} .project-input_input_1gT4y:disabled {\n    opacity: 0.8;\n} .project-input_tooltip_3y9t4 {\n    opacity: 1 !important;\n    background-color: hsla(10, 85%, 65%, 1) !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    box-shadow: 0 0 .5rem hsla(0, 0%, 0%, .25) !important;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important;\n    border: 1px solid hsla(0, 0%, 0%, .1) !important;\n    z-index: 491 !important;\n} .project-input_tooltip_3y9t4:after {\n    border-top-color: hsla(10, 85%, 65%, 1) !important;\n}\n', ""]), t.locals = { input: "project-input_input_1gT4y", tooltip: "project-input_tooltip_3y9t4" }
    },
    258: function(e, t, n) {
        (t = e.exports = n(11)(!1)).push([e.i, "/*\nImported from:\nhttps://github.com/forkphorus/forkphorus/tree/master/studioview\nWith changes to make it work properly in the scratch-gui environment.\n*/\n\n/* we wrap it in a <div> */\n\n.studioview_wrapper_GWWqn {\n  height: 100%;\n}\n\n/* fix some styles that can be messed up by scratch-gui */\n\n.studioview_studioview-root_z_auP * {\n  box-sizing: content-box !important;\n}\n\n.studioview_studioview-root_z_auP {\n  height: 100%;\n}\n\n.studioview_studioview-list_1X1Hw {\n  width: 100%;\n  height: 100%;\n  overflow-y: scroll;\n  overflow-anchor: none;\n}\n\n.studioview_studioview-project_2kPXX, .studioview_studioview-placeholder__NrP7 {\n  display: inline-block;\n  width: 144px;\n  padding: 3px;\n  margin-bottom: 1px;\n  margin-right: 1px;\n}\n\n.studioview_studioview-root_z_auP .studioview_studioview-project_2kPXX {\n  color: inherit;\n  position: relative;\n  text-decoration: none;\n}\n\n.studioview_studioview-loaded_mx24q:hover::before, .studioview_studioview-loaded_mx24q:active::before {\n  content: '';\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-root_z_auP .studioview_studioview-loaded_mx24q:active::before {\n  opacity: 0.2;\n}\n\n.studioview_studioview-root_z_auP .studioview_studioview-title_1eZiq,\n.studioview_studioview-root_z_auP .studioview_studioview-author_Bs0a5 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: inherit;\n  text-decoration: none;\n}\n\n.studioview_studioview-title_1eZiq {\n  font-size: 0.8em;\n  font-weight: bold;\n}\n\n.studioview_studioview-author_Bs0a5 {\n  font-size: 0.75em;\n}\n\n.studioview_studioview-error_ZX8-M {\n  width: 100%;\n}\n\n.studioview_studioview-thumbnail_2nU6_, .studioview_studioview-placeholder-thumbnail_4Fi8w {\n  position: relative;\n  width: 144px;\n  height: 108px;\n}\n\n.studioview_studioview-thumbnail_2nU6_::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-thumbnail_2nU6_ img {\n  width: 100%;\n  height: 100%;\n}\n\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-thumbnail_2nU6_,\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-title_1eZiq,\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-author_Bs0a5 {\n  background-color: currentColor;\n  opacity: 0.1;\n}\n\n.studioview_studioview-title_1eZiq {\n  height: 20px;\n  margin-top: 2px;\n}\n\n.studioview_studioview-author_Bs0a5 {\n  height: 18px;\n}\n\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-title_1eZiq {\n  border-radius: 2px 2px 2px 0;\n  width: 100%;\n}\n\n.studioview_studioview-placeholder__NrP7 .studioview_studioview-author_Bs0a5 {\n  border-radius: 0 0 2px 2px;\n  width: 50%;\n}\n", ""]), t.locals = { wrapper: "studioview_wrapper_GWWqn", "studioview-root": "studioview_studioview-root_z_auP", studioviewRoot: "studioview_studioview-root_z_auP", "studioview-list": "studioview_studioview-list_1X1Hw", studioviewList: "studioview_studioview-list_1X1Hw", "studioview-project": "studioview_studioview-project_2kPXX", studioviewProject: "studioview_studioview-project_2kPXX", "studioview-placeholder": "studioview_studioview-placeholder__NrP7", studioviewPlaceholder: "studioview_studioview-placeholder__NrP7", "studioview-loaded": "studioview_studioview-loaded_mx24q", studioviewLoaded: "studioview_studioview-loaded_mx24q", "studioview-title": "studioview_studioview-title_1eZiq", studioviewTitle: "studioview_studioview-title_1eZiq", "studioview-author": "studioview_studioview-author_Bs0a5", studioviewAuthor: "studioview_studioview-author_Bs0a5", "studioview-error": "studioview_studioview-error_ZX8-M", studioviewError: "studioview_studioview-error_ZX8-M", "studioview-thumbnail": "studioview_studioview-thumbnail_2nU6_", studioviewThumbnail: "studioview_studioview-thumbnail_2nU6_", "studioview-placeholder-thumbnail": "studioview_studioview-placeholder-thumbnail_4Fi8w", studioviewPlaceholderThumbnail: "studioview_studioview-placeholder-thumbnail_4Fi8w" }
    },
    259: function(e, t, n) {
        (t = e.exports = n(11)(!1)).push([e.i, ".featured-projects_container_bte5t {\n    margin-bottom: 8px;\n}\n\n.featured-projects_opener-container_2VEwo {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: 0.8;\n    color: #222;\n}\n\n.featured-projects_opener-container_2VEwo:hover {\n    opacity: 1;\n}\n\n.featured-projects_opener-content_2nRNs {\n    background-color: white;\n    padding: 4px;\n    border: 1px solid black;\n    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);\n}\n\n.featured-projects_projects_3USxm {\n    position: relative;\n    height: 155px;\n}\n\n.featured-projects_projects_3USxm.featured-projects_transition_2s3rd {\n    transition: .2s height;\n}\n\n.featured-projects_projects_3USxm.featured-projects_opened_1ALXH {\n    height: 310px;\n}\n\n.featured-projects_footer_UQGNp {\n    \n}\n", ""]), t.locals = { container: "featured-projects_container_bte5t", "opener-container": "featured-projects_opener-container_2VEwo", openerContainer: "featured-projects_opener-container_2VEwo", "opener-content": "featured-projects_opener-content_2nRNs", openerContent: "featured-projects_opener-content_2nRNs", projects: "featured-projects_projects_3USxm", transition: "featured-projects_transition_2s3rd", opened: "featured-projects_opened_1ALXH", footer: "featured-projects_footer_UQGNp" }
    },
    260: function(e, t, n) {
        (t = e.exports = n(11)(!1)).push([e.i, '.description_description_TJxeu {\n    max-height: 250px;\n    overflow: auto;\n    white-space: pre-line;\n    overflow-wrap: break-word;\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n}\n\n.description_description_TJxeu a {\n    font-weight: bold;\n    text-decoration: none;\n}\n\n[theme="dark"] .description_description_TJxeu {\n    border-color: #203652;\n    background-color: #16202c;\n}\n\n.description_header_3Bv2V {\n    font-weight: bold;\n    font-size: 1em;\n    margin: 0;\n    padding: 0;\n}\n\n.description_divider_NGZle {\n    margin-top: 8px;\n}\n\n.description_project-link_2xt5_ {\n    margin-bottom: 2px;\n}\n', ""]), t.locals = { description: "description_description_TJxeu", header: "description_header_3Bv2V", divider: "description_divider_NGZle", "project-link": "description_project-link_2xt5_", projectLink: "description_project-link_2xt5_" }
    },
    261: function(e, t, n) {
        var o = n(262),
            r = n(266),
            a = n(267),
            i = a && a.isRegExp,
            s = i ? r(i) : o;
        e.exports = s
    },
    262: function(e, t, n) {
        var o = n(91),
            r = n(75);
        e.exports = function(e) { return r(e) && "[object RegExp]" == o(e) }
    },
    263: function(e, t, n) {
        var o = n(162),
            r = "object" == typeof self && self && self.Object === Object && self,
            a = o || r || Function("return this")();
        e.exports = a
    },
    264: function(e, t, n) {
        var o = n(92),
            r = Object.prototype,
            a = r.hasOwnProperty,
            i = r.toString,
            s = o ? o.toStringTag : void 0;
        e.exports = function(e) {
            var t = a.call(e, s),
                n = e[s];
            try { e[s] = void 0; var o = !0 } catch (e) {}
            var r = i.call(e);
            return o && (t ? e[s] = n : delete e[s]), r
        }
    },
    265: function(e, t) {
        var n = Object.prototype.toString;
        e.exports = function(e) { return n.call(e) }
    },
    266: function(e, t) { e.exports = function(e) { return function(t) { return e(t) } } },
    267: function(e, t, n) {
        (function(e) {
            var o = n(162),
                r = t && !t.nodeType && t,
                a = r && "object" == typeof e && e && !e.nodeType && e,
                i = a && a.exports === r && o.process,
                s = function() { try { var e = a && a.require && a.require("util").types; return e || i && i.binding && i.binding("util") } catch (e) {} }();
            e.exports = s
        }).call(this, n(197)(e))
    },
    268: function(e, t, n) {
        var o = n(269),
            r = /[\\^$.*+?()[\]{}|]/g,
            a = RegExp(r.source);
        e.exports = function(e) { return (e = o(e)) && a.test(e) ? e.replace(r, "\\$&") : e }
    },
    269: function(e, t, n) {
        var o = n(270);
        e.exports = function(e) { return null == e ? "" : o(e) }
    },
    270: function(e, t, n) {
        var o = n(92),
            r = n(271),
            a = n(119),
            i = n(272),
            s = o ? o.prototype : void 0,
            c = s ? s.toString : void 0;
        e.exports = function e(t) { if ("string" == typeof t) return t; if (a(t)) return r(t, e) + ""; if (i(t)) return c ? c.call(t) : ""; var n = t + ""; return "0" == n && 1 / t == -1 / 0 ? "-0" : n }
    },
    271: function(e, t) { e.exports = function(e, t) { for (var n = -1, o = null == e ? 0 : e.length, r = Array(o); ++n < o;) r[n] = t(e[n], n, e); return r } },
    272: function(e, t, n) {
        var o = n(91),
            r = n(75);
        e.exports = function(e) { return "symbol" == typeof e || r(e) && "[object Symbol]" == o(e) }
    },
    273: function(e, t, n) {
        var o = n(91),
            r = n(119),
            a = n(75);
        e.exports = function(e) { return "string" == typeof e || !r(e) && a(e) && "[object String]" == o(e) }
    },
    274: function(e, t, n) {
        var o = n(275);
        e.exports = function(e) { return (null == e ? 0 : e.length) ? o(e, 1) : [] }
    },
    275: function(e, t, n) {
        var o = n(276),
            r = n(277);
        e.exports = function e(t, n, a, i, s) {
            var c = -1,
                d = t.length;
            for (a || (a = r), s || (s = []); ++c < d;) {
                var l = t[c];
                n > 0 && a(l) ? n > 1 ? e(l, n - 1, a, i, s) : o(s, l) : i || (s[s.length] = l)
            }
            return s
        }
    },
    276: function(e, t) { e.exports = function(e, t) { for (var n = -1, o = t.length, r = e.length; ++n < o;) e[r + n] = t[n]; return e } },
    277: function(e, t, n) {
        var o = n(92),
            r = n(278),
            a = n(119),
            i = o ? o.isConcatSpreadable : void 0;
        e.exports = function(e) { return a(e) || r(e) || !!(i && e && e[i]) }
    },
    278: function(e, t, n) {
        var o = n(279),
            r = n(75),
            a = Object.prototype,
            i = a.hasOwnProperty,
            s = a.propertyIsEnumerable,
            c = o(function() { return arguments }()) ? o : function(e) { return r(e) && i.call(e, "callee") && !s.call(e, "callee") };
        e.exports = c
    },
    279: function(e, t, n) {
        var o = n(91),
            r = n(75);
        e.exports = function(e) { return r(e) && "[object Arguments]" == o(e) }
    },
    28: function(e, t, n) {
        var o = n(258);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        var r = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(12)(o, r);
        o.locals && (e.exports = o.locals)
    },
    280: function(e, t, n) {
        (t = e.exports = n(11)(!1)).push([e.i, '.cloud-variable-badge_badge_1n_s5 {\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    display: flex;\n    align-items: center;\n    border-radius: 0.5rem;\n}\n[theme="dark"] .cloud-variable-badge_badge_1n_s5 {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.cloud-variable-badge_icon_3ph5l {\n    margin-right: 0.25rem;\n}\n[theme="dark"] .cloud-variable-badge_icon_3ph5l {\n    filter: invert(100%);\n}\n.cloud-variable-badge_text_2zFOB {\n\n}\n', ""]), t.locals = { badge: "cloud-variable-badge_badge_1n_s5", icon: "cloud-variable-badge_icon_3ph5l", text: "cloud-variable-badge_text_2zFOB" }
    },
    281: function(e, t, n) {
        (t = e.exports = n(11)(!1)).push([e.i, '/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n    font-weight: bold;\n    line-height: 1.7em;\n}\nh1 {\n    font-weight: 2.5rem;\n}\nh2 {\n    font-weight: 2rem;\n}\nh3 {\n    font-size: 1.4rem;\n}\nh4 {\n    font-size: 1rem;\n}\na {\n    color: #25d;\n    cursor: pointer;\n    text-decoration: underline;\n}\n.interface_container_1cGgE {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.interface_editor_3WnQ8 {\n    min-width: 1024px;\n    min-height: 640px;\n    height: 100%;\n}\n.interface_editor_3WnQ8 .interface_center_2vEJw {\n    height: 100%;\n}\n.interface_player-only_1YGqr .interface_center_2vEJw {\n    margin: auto;\n}\n.interface_menu_2TZCG {\n    margin-bottom: 8px;\n}\n.interface_section_3f_bi {\n    margin: 8px 0 8px 0;\n}\n.interface_footer_vF3nx {\n    padding: 10px 0;\n    margin-top: 10px;\n    border-top: 2px solid #ddd;\n}\n.interface_footer_vF3nx a {\n    font-weight: bold;\n    text-decoration: none;\n}\n[theme="dark"] .interface_footer_vF3nx {\n    border-color: #1a1a1a;\n}\n.interface_footer-content_2-VDh {\n    max-width: 600px;\n    margin: auto;\n}\n.interface_footer-text_2qZPP {\n    text-align: center;\n    margin: 5px 0 10px 0;\n}\n.interface_footer-columns_22Cpb {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    flex-wrap: wrap;\n}\n.interface_footer-section_vgGzW {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    margin-bottom: 10px;\n}\n.interface_footer-section_vgGzW > * {\n    margin-bottom: 10px;\n}\n[theme="dark"] .interface_container_1cGgE {\n    background-color: #111;\n}\n[theme="dark"] .interface_player-only_1YGqr {\n    color: #ddd;\n}\n[theme="dark"] a {\n    color: #4af;\n}\n.interface_unshared-update_zPoHa {\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n}\n[theme="dark"] .interface_unshared-update_zPoHa {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.interface_unshared-update_zPoHa p {\n    margin: 4px 0;\n}\n.interface_unshared-update_zPoHa a {\n    font-weight: bold;\n    text-decoration: none;\n}\n', ""]), t.locals = { container: "interface_container_1cGgE", editor: "interface_editor_3WnQ8", center: "interface_center_2vEJw", "player-only": "interface_player-only_1YGqr", playerOnly: "interface_player-only_1YGqr", menu: "interface_menu_2TZCG", section: "interface_section_3f_bi", footer: "interface_footer_vF3nx", "footer-content": "interface_footer-content_2-VDh", footerContent: "interface_footer-content_2-VDh", "footer-text": "interface_footer-text_2qZPP", footerText: "interface_footer-text_2qZPP", "footer-columns": "interface_footer-columns_22Cpb", footerColumns: "interface_footer-columns_22Cpb", "footer-section": "interface_footer-section_vgGzW", footerSection: "interface_footer-section_vgGzW", "unshared-update": "interface_unshared-update_zPoHa", unsharedUpdate: "interface_unshared-update_zPoHa" }
    },
    50: function(e, t, n) {
        var o = n(259);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        var r = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(12)(o, r);
        o.locals && (e.exports = o.locals)
    },
    54: function(e, t, n) { "use strict"; let o, r; "undefined" != typeof BroadcastChannel && (o = new BroadcastChannel("addons-change"), r = new BroadcastChannel("addons-reload")), t.a = { changeChannel: o, reloadChannel: r } },
    64: function(e, t, n) {
        var o = n(260);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        var r = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(12)(o, r);
        o.locals && (e.exports = o.locals)
    },
    75: function(e, t) { e.exports = function(e) { return null != e && "object" == typeof e } },
    888: function(e, t, n) {
        "use strict";
        n.r(t);
        n(304);
        var o = n(57),
            r = n.n(o),
            a = n(1),
            i = n.n(a),
            s = n(68),
            c = n(165),
            d = n(72);
        Object(s.setAppElement)(d.a), r.a.render(i.a.createElement(c.a, null), d.a)
    },
    91: function(e, t, n) {
        var o = n(92),
            r = n(264),
            a = n(265),
            i = o ? o.toStringTag : void 0;
        e.exports = function(e) { return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? r(e) : a(e) }
    },
    92: function(e, t, n) {
        var o = n(263).Symbol;
        e.exports = o
    },
    93: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() { return d })), n.d(t, "a", (function() { return u }));
        var o = n(1),
            r = n.n(o),
            a = n(94),
            i = n.n(a);

        function s() { return (s = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }).apply(this, arguments) }
        const c = window.matchMedia("(prefers-color-scheme: dark)"),
            d = () => { try { const e = localStorage.getItem("tw:theme"); if (null !== e) return "dark" === e } catch (e) {} return c.matches },
            l = document.createElement("style");
        l.textContent = i.a;
        const u = function(e) {
            class t extends r.a.Component {
                constructor(e) { super(e), this.handleQueryChange = this.handleQueryChange.bind(this), this.handleClickTheme = this.handleClickTheme.bind(this), this.state = { dark: d() } }
                componentDidMount() { c.addEventListener && c.addEventListener("change", this.handleQueryChange), this.updateDark() }
                componentDidUpdate() {
                    try { localStorage.setItem("tw:theme", this.state.dark ? "dark" : "light") } catch (e) {}
                    this.updateDark()
                }
                componentWillUnmount() { c.removeEventListener && c.removeEventListener("change", this.handleQueryChange) }
                updateDark() {
                    const e = this.state.dark;
                    document.body.setAttribute("theme", e ? "dark" : "light"), e && !l.parentNode ? document.body.insertBefore(l, document.body.firstChild) : !e && l.parentNode && l.parentNode.removeChild(l)
                }
                handleQueryChange() { this.setState({ dark: c.matches }) }
                handleClickTheme() { this.setState(e => ({ dark: !e.dark })) }
                render() { return r.a.createElement(e, s({ onClickTheme: this.handleClickTheme, isDark: this.state.dark }, this.props)) }
            }
            return t
        }
    },
    94: function(e, t) { e.exports = '/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n.title ,.s3devLabel,[class*="label_input-label"],[class*="labeled-icon"],[class*="sound-editor"]{\n    color:#eee;\n}\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^="blocklyGridPattern"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n    border-width: 0px!important;\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n' },
    97: function(e, t, n) {
        var o = n(261),
            r = n(268),
            a = n(273),
            i = n(274);
        e.exports = function(e, t, n) {
            return Array.isArray(e) || (e = [e]), i(e.map((function(e) {
                return a(e) ? function(e, t, n) {
                    var i = 0,
                        s = 0;
                    if ("" === e) return e;
                    if (!e || !a(e)) throw new TypeError("First argument to react-string-replace#replaceString must be a string");
                    var c = t;
                    o(c) || (c = new RegExp("(" + r(c) + ")", "gi"));
                    for (var d = e.split(c), l = 1, u = d.length; l < u; l += 2) s = d[l].length, i += d[l - 1].length, d[l] = n(d[l], l, i), i += s;
                    return d
                }(e, t, n) : e
            })))
        }
    },
    98: function(e, t, n) {
        var o = n(280);
        "string" == typeof o && (o = [
            [e.i, o, ""]
        ]);
        var r = { hmr: !0, transform: void 0, insertInto: void 0 };
        n(12)(o, r);
        o.locals && (e.exports = o.locals)
    }
});