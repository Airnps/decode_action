//Sun Apr 06 2025 04:07:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const C_NA = "142,140,142",
  C_UNL = "186,230,126",
  C_FAIL = "239,107,115",
  C_UNK = "92,207,230";
function handler() {
  const _0x561ef1 = {
      "Accept": "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "Cache-Control": "max-age=0",
      "Priority": "u=0, i",
      "Sec-Ch-Ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
      "Sec-Ch-Ua-Mobile": "?0",
      "Sec-Ch-Ua-Model": "\"\"",
      "Sec-Ch-Ua-Platform": "Windows",
      "Sec-Ch-Ua-Platform-Version": "10.0.0",
      "Sec-Fetch-Dest": "document",
      "Sec-Fetch-Mode": "navigate",
      "Sec-Fetch-Site": "none",
      "Sec-Fetch-User": "?1",
      "Upgrade-Insecure-Requests": "1",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
    },
    _0x369582 = fetch("https://www.netflix.com/title/81280792", {
      "headers": _0x561ef1,
      "noRedir": false,
      "retry": 3,
      "timeout": 5000
    });
  if (!_0x369582) return {
    "text": "N/A",
    "background": C_NA
  };else {
    if (_0x369582.statusCode == 403) return {
      "text": "失败",
      "background": C_FAIL
    };
  }
  const _0x4b0fba = safeParse(get(_0x369582, "body").slice(get(_0x369582, "body").indexOf("netflix.reactContext = ") + 23, get(_0x369582, "body").indexOf(";</script><script>window.__public_path__")).replace(/\\x/g, "").replace(/\\u/g, "")),
    _0x4f5ae8 = get(_0x4b0fba, "models.nmTitleGQL.data.metaData.isAvailable", null);
  let _0xaaa72d = get(_0x4b0fba, "models.geo.data.requestCountry.id", (get(_0x369582, "redirects", [])[0] || "").substr(24, 2) || "us").toLocaleUpperCase();
  if (_0x4f5ae8 === true) return {
    "text": "解锁(" + _0xaaa72d + ")",
    "background": C_UNL
  };else {
    if (_0x4f5ae8 === false) return {
      "text": "自制(" + _0xaaa72d + ")"
    };else {
      if ((get(_0x369582, "redirects", [])[0] || "").indexOf("netflix") !== -1) {
        const _0x112652 = fetch(get(_0x369582, "redirects", [])[0] || "", {
          "headers": _0x561ef1,
          "noRedir": false,
          "retry": 3,
          "timeout": 5000
        });
        if (!_0x112652) return {
          "text": "N/A",
          "background": C_NA
        };else {
          if (_0x112652.statusCode == 403) return {
            "text": "失败",
            "background": C_FAIL
          };
        }
        const _0x143a97 = safeParse(get(_0x112652, "body").slice(get(_0x112652, "body").indexOf("netflix.reactContext = ") + 23, get(_0x112652, "body").indexOf(";</script><script>window.__public_path__")).replace(/\\x/g, "")),
          _0x3dbfc5 = get(_0x143a97, "models.nmTitleGQL.data.metaData.isAvailable", null);
        _0xaaa72d = get(_0x143a97, "models.geo.data.requestCountry.id", (get(_0x369582, "redirects", [])[0] || "").substr(24, 2) || "us").toLocaleUpperCase();
        if (_0x3dbfc5 === true) return {
          "text": "解锁(" + _0xaaa72d + ")",
          "background": C_UNL
        };else {
          if (_0x3dbfc5 === false) return {
            "text": "自制(" + _0xaaa72d + ")"
          };
        }
      }
    }
  }
  const _0x5b881d = fetch("https://www.netflix.com/title/70143836", {
    "headers": _0x561ef1,
    "noRedir": false,
    "retry": 3,
    "timeout": 5000
  });
  if (!_0x5b881d) {
    return {
      "text": "N/A",
      "background": C_NA
    };
  } else {
    if (_0x5b881d.statusCode == 403) return {
      "text": "失败",
      "background": C_FAIL
    };
  }
  const _0x1b2d5c = safeParse(get(_0x5b881d, "body").slice(get(_0x5b881d, "body").indexOf("netflix.reactContext = ") + 23, get(_0x5b881d, "body").indexOf(";</script><script>window.__public_path__")).replace(/\\x/g, "")),
    _0x34a8eb = get(_0x1b2d5c, "models.nmTitleGQL.data.metaData.isAvailable", null);
  _0xaaa72d = get(_0x1b2d5c, "models.geo.data.requestCountry.id", (get(_0x5b881d, "redirects", [])[0] || "").substr(24, 2) || "us").toLocaleUpperCase();
  if (_0x34a8eb === true) return {
    "text": "解锁(" + _0xaaa72d + ")",
    "background": C_UNL
  };else {
    if (_0x34a8eb === false) return {
      "text": "自制(" + _0xaaa72d + ")"
    };else {
      if ((get(_0x5b881d, "redirects", [])[0] || "").indexOf("netflix") !== -1) {
        {
          const _0x1b2905 = fetch(get(_0x5b881d, "redirects", [])[0] || "", {
            "headers": _0x561ef1,
            "noRedir": false,
            "retry": 3,
            "timeout": 5000
          });
          if (!_0x1b2905) return {
            "text": "N/A",
            "background": C_NA
          };else {
            if (_0x1b2905.statusCode == 403) return {
              "text": "失败",
              "background": C_FAIL
            };
          }
          const _0x4d9b79 = safeParse(get(_0x1b2905, "body").slice(get(_0x1b2905, "body").indexOf("netflix.reactContext = ") + 23, get(_0x1b2905, "body").indexOf(";</script><script>window.__public_path__")).replace(/\\x/g, "")),
            _0x428ec7 = get(_0x4d9b79, "models.nmTitleGQL.data.metaData.isAvailable", null);
          _0xaaa72d = get(_0x4d9b79, "models.geo.data.requestCountry.id", (get(_0x5b881d, "redirects", [])[0] || "").substr(24, 2) || "us").toLocaleUpperCase();
          if (_0x428ec7 === true) return {
            "text": "解锁(" + _0xaaa72d + ")",
            "background": C_UNL
          };else {
            if (_0x428ec7 === false) return {
              "text": "自制(" + _0xaaa72d + ")"
            };else {
              if (_0x369582.statusCode == 404 || _0x5b881d.statusCode == 404) return {
                "text": "自制(" + _0xaaa72d + ")"
              };else {
                return {
                  "text": "未知",
                  "background": C_UNK
                };
              }
            }
          }
        }
      } else return _0x369582.statusCode == 404 || _0x5b881d.statusCode == 404 ? {
        "text": "自制(" + _0xaaa72d + ")"
      } : {
        "text": "未知",
        "background": C_UNK
      };
    }
  }
}