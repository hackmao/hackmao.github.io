ache_version = '1.0';

/*\
|*|
|*|  :: cookies.js ::
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  https://developer.mozilla.org/zh-CN/docs/DOM/document.cookie
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * docCookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * docCookies.getItem(name)
|*|  * docCookies.removeItem(name[, path], domain)
|*|  * docCookies.hasItem(name)
|*|  * docCookies.keys()
|*|
\*/

var docCookies = {
    getItem: function(sKey) {
        return (
            decodeURIComponent(
                document.cookie.replace(
                    new RegExp(
                        "(?:(?:^|.*;)\\s*" +
                        encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
                        "\\s*\\=\\s*([^;]*).*$)|^.*$",
                    ),
                    "$1",
                ),
            ) || null
        );
    },
    setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires =
                        vEnd === Infinity ?
                        "; expires=Fri, 31 Dec 9999 23:59:59 GMT" :
                        "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie =
            encodeURIComponent(sKey) +
            "=" +
            encodeURIComponent(sValue) +
            sExpires +
            (sDomain ? "; domain=" + sDomain : "") +
            (sPath ? "; path=" + sPath : "") +
            (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function(sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) {
            return false;
        }
        document.cookie =
            encodeURIComponent(sKey) +
            "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            (sDomain ? "; domain=" + sDomain : "") +
            (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function(sKey) {
        return new RegExp(
            "(?:^|;\\s*)" +
            encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
            "\\s*\\=",
        ).test(document.cookie);
    },
    keys: /* optional method: you can safely remove it! */ function() {
        var aKeys = document.cookie
            .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "")
            .split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    },
};

async function start_ache() {
    document.getElementsByClassName('button_outlined-button_2f510')[0].parentNode.remove() // remove save&publish&cover btn
    document.getElementsByClassName('backpack_backpack-header_Vteeu')[0].parentNode.remove() // remove backpack btn
    if (!(ache_has_cookie('version') && ache_cookie('version') == ache_version)) {
        ache_add_cookie('version', ache_version);
        ache_update();
        console.log('Ache is update:' + ache_version)
    }
}

async function ache_update() {
    layui_window(['300px', '200px'], `ache - 图形化编程编辑器`, '<div style="margin:10px"><p>&nbspache ' + ache_version + ' 更新日志:</p><ul><li>+ 添加了一些创作资源</li><li>+ 更换了默认作品</li><li>+ 增加了自定义积木中的"返回积木"</li></ul></div>')
}

async function layui_window(area, title, content) {
    layer.open({
        type: 1,
        area: area,
        title: title,
        shade: 0.7, // 遮罩透明度
        anim: -1,
        content: content
    });
}

async function ache_add_cookie(key, value) {
    document.cookie = key + "=" + value;
}

async function ache_has_cookie(key) {
    return docCookies.hasItem(key)
}

async function ache_cookie(key) {
    return docCookies.getItem(key)
}

start_ache()