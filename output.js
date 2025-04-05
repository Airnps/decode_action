//Sat Apr 05 2025 00:08:02 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const C_NA = "142,140,142",
  C_UNL = "186,230,126",
  C_FAIL = "239,107,115",
  C_UNK = "92,207,230";
function handler() {
  const _0x165afd = fetch("https://www.netflix.com/title/81280792", {
    "headers": {
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
    "noRedir": false,
    "retry": 3,
    "timeout": 5000
  });
  if (!_0x165afd) return {
    "text": "N/A",
    "background": C_NA
  };else {
    if (_0x165afd.statusCode == 403) return {
      "text": "失败",
      "background": C_FAIL
    };
  }
  const _0x358b6d = safeParse(get(_0x165afd, "body").slice(get(_0x165afd, "body").indexOf("netflix.reactContext = ") + 23, get(_0x165afd, "body").indexOf(";</script><script>window.__public_path__")).replace(/\\x/g, "")),
    _0x31e19b = get(_0x358b6d, "models.nmTitleGQL.data.metaData.isAvailable", null);
  let _0x69013d = get(_0x358b6d, "models.geo.data.requestCountry.id", (get(_0x165afd, "redirects", [])[0] || "").substr(24, 2) || "us").toLocaleUpperCase();
  if (_0x31e19b === true) return {
    "text": "解锁(" + _0x69013d + ")",
    "background": C_UNL
  };else {
    if (_0x31e19b === false) return {
      "text": "自制(" + _0x69013d + ")"
    };
  }
  const _0x2e3e7f = fetch("https://www.netflix.com/title/70143836", {
    "headers": {
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
    "noRedir": false,
    "retry": 3,
    "timeout": 5000
  });
  if (!_0x2e3e7f) return {
    "text": "N/A",
    "background": C_NA
  };else {
    if (_0x2e3e7f.statusCode == 403) return {
      "text": "失败",
      "background": C_FAIL
    };
  }
  const _0x1ed383 = safeParse(get(_0x2e3e7f, "body").slice(get(_0x2e3e7f, "body").indexOf("netflix.reactContext = ") + 23, get(_0x2e3e7f, "body").indexOf(";</script><script>window.__public_path__")).replace(/\\x/g, "")),
    _0x3ee583 = get(_0x1ed383, "models.nmTitleGQL.data.metaData.isAvailable", null);
  _0x69013d = get(_0x1ed383, "models.geo.data.requestCountry.id", (get(_0x2e3e7f, "redirects", [])[0] || "").substr(24, 2) || "us").toLocaleUpperCase();
  if (_0x3ee583 === true) return {
    "text": "解锁(" + _0x69013d + ")",
    "background": C_UNL
  };else {
    if (_0x3ee583 === false) return {
      "text": "自制(" + _0x69013d + ")"
    };else {
      if (_0x165afd.statusCode == 404 || _0x2e3e7f.statusCode == 404) {
        return {
          "text": "自制(" + _0x69013d + ")"
        };
      } else {
        if (_0x165afd.statusCode == 302 || _0x2e3e7f.statusCode == 302) return {
          "text": "解锁(" + _0x69013d + ")",
          "background": C_UNL
        };else {
          return {
            "text": "未知",
            "background": C_UNK
          };
        }
      }
    }
  }
}