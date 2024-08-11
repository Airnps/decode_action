//Sun Aug 11 2024 08:48:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("阅读自动返回");
!(async () => {
  if (typeof $request !== "undefined") {
    if ($request.url.indexOf("/mock/read") > 0) {
      let _0x10a9b0 = "\n      <html>\n      <head>\n          <meta charset=\"UTF-8\">\n      </head>\n      <style>\n          div {position:absolute; top:50%; left:50%; margin:0 0 0 -234px; width:auto; height:auto; border:0px solid #008800; font-size: 7vw}\n      </style>\n      <body><div id=\"timer\"></div></body>\n      <script>\n          var oBox= document.getElementById('timer');\n          var maxtime = parseInt(Math.random() * (10 - 9 + 1) + 9 + 1, 12)- 6;\n          setTimeout(()=>window.history.back(),maxtime*800);\n          function CountDown() {\n              if (maxtime >= 0) {\n                  oBox.innerHTML = '返回倒计时'+maxtime+'秒';\n                  --maxtime;\n              } else{\n                  clearInterval(timer);\n                  window.history.back();\n              }\n          }\n          timer = setInterval(\"CountDown()\", 1000);\n        </script>\n      </html>\n      ";
      const _0x4f0717 = {
        "Connection": "Close",
        "Content-Type": "text/html; charset=utf-8"
      };
      if ($.isSurge() || $.isLoon()) {
        $.done({
          "response": {
            "status": 200,
            "headers": _0x4f0717,
            "body": _0x10a9b0
          }
        });
      } else if ($.isQuanX()) {
        $.done({
          "status": "HTTP/1.1 200 OK",
          "headers": _0x4f0717,
          "body": _0x10a9b0
        });
      }
    } else if (typeof $response !== "undefined") {
      let _0x1dfcc4 = $request.url;
      let _0x10a9b0 = $response.body || "";
      let _0x5b9697 = $response.headers && $response.headers.Location || "";
      let _0xa9079d = "http://www.wx.read.com/mock/read";
      if (_0x5b9697.match(/https?:\/\/mp\.weixin\.qq\.com\/s/)) {
        $response.headers.Location = _0xa9079d;
        $.done({
          "headers": $response.headers
        });
      } else if (_0x1dfcc4.indexOf("/t/show.html?ch=") > 0 && _0x10a9b0) {
        _0x10a9b0 = _0x10a9b0.replace("if(check_times()){", "if(1){");
        $.done({
          "body": _0x10a9b0
        });
      } else {
        let [, _0x10970d, _0x52fda8] = _0x10a9b0.match(/^(\w+)\(({[^()]+})\)$/) || ["", "", ""];
        if (_0x10970d && _0x52fda8) {
          _0x52fda8 = $.toObj(_0x52fda8, {});
          if (_0x52fda8.url) {
            _0x52fda8.url = _0xa9079d;
            _0x10a9b0 = _0x10970d + "(" + $.toStr(_0x52fda8) + ")";
            $.done({
              "body": _0x10a9b0
            });
          } else {
            $.msg($.name, "修改url失败", _0x10a9b0);
          }
        } else {
          $.log("未检查到待跳转的微信文章url：\n" + JSON.stringify($response.headers, null, 2));
        }
      }
    }
  }
})().catch(_0xbcc0ab => $.logErr(_0xbcc0ab)).finally(() => $.done());
_0xodK = "jsjiami.com.v6";