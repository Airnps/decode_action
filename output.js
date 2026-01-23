//Fri Jan 23 2026 10:32:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var for_task = 0,
  error_num = 0,
  china_node_num = 0,
  ct_node_num = 0,
  cu_node_num = 0,
  cm_node_num = 0,
  huadong_node_num = 0,
  huanan_node_num = 0,
  huazhong_node_num = 0,
  huabei_node_num = 0,
  xinan_node_num = 0,
  xibei_node_num = 0,
  dongbei_node_num = 0,
  gangaotai_node_num = 0,
  global_node_num = 0,
  asia_node_num = 0,
  europe_node_num = 0,
  north_node_num = 0,
  south_node_num = 0,
  africa_node_num = 0,
  oceania_node_num = 0,
  china_fastping = 9999,
  china_slow = 0,
  china_allping = 0,
  ct_fast = 9999,
  ct_slow = 0,
  ct_allping = 0,
  cu_fast = 9999,
  cu_slow = 0,
  cu_allping = 0,
  cm_fast = 9999,
  cm_slow = 0,
  cm_allping = 0,
  huadong_fast = 9999,
  huadong_slow = 0,
  huadong_allping = 0,
  huanan_fast = 9999,
  huanan_slow = 0,
  huanan_allping = 0,
  huazhong_fast = 9999,
  huazhong_slow = 0,
  huazhong_allping = 0,
  huabei_fast = 9999,
  huabei_slow = 0,
  huabei_allping = 0,
  xinan_fast = 9999,
  xinan_slow = 0,
  xinan_allping = 0,
  xibei_fast = 9999,
  xibei_slow = 0,
  xibei_allping = 0,
  dongbei_fast = 9999,
  dongbei_slow = 0,
  dongbei_allping = 0,
  gangaotai_fast = 9999,
  gangaotai_slow = 0,
  gangaotai_allping = 0,
  global_fast = 9999,
  global_slow = 0,
  global_allping = 0,
  asia_fast = 9999,
  asia_slow = 0,
  asia_allping = 0,
  europe_fast = 9999,
  europe_slow = 0,
  europe_allping = 0,
  north_fast = 9999,
  north_slow = 0,
  north_allping = 0,
  south_fast = 9999,
  south_slow = 0,
  south_allping = 0,
  africa_fast = 9999,
  africa_slow = 0,
  africa_allping = 0,
  oceania_fast = 9999,
  oceania_slow = 0,
  oceania_allping = 0,
  mydata_temp = [{
    "name": "北京",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 北京：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 北京：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 北京：70ms</p>"
  }, {
    "name": "天津",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 天津：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 天津：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 天津：70ms</p>"
  }, {
    "name": "上海",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 上海：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 上海：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 上海：70ms</p>"
  }, {
    "name": "重庆",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 重庆：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 重庆：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 重庆：70ms</p>"
  }, {
    "name": "河北",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 河北石家庄：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 河北唐山：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 河北廊坊：70ms</p>"
  }, {
    "name": "河南",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 河南郑州：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 河南新乡：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 河南洛阳：70ms</p>"
  }, {
    "name": "云南",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 云南昆明：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 云南丽江：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 云南玉溪：70ms</p>"
  }, {
    "name": "辽宁",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 辽宁大连：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 辽宁沈阳：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 辽宁鞍山：70ms</p>"
  }, {
    "name": "黑龙江",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 黑龙江哈尔滨：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 黑龙江大庆：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 黑龙江鹤岗：70ms</p>"
  }, {
    "name": "湖南",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 湖南长沙：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 湖南株洲：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 湖南湘潭：70ms</p>"
  }, {
    "name": "安徽",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 安徽合肥：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 安徽芜湖：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 安徽黄山：70ms</p>"
  }, {
    "name": "山东",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山东青岛：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山东枣庄：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山东济南：70ms</p>"
  }, {
    "name": "新疆",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 新疆乌鲁木齐：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 新疆吐鲁番：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 新疆哈密：70ms</p>"
  }, {
    "name": "江苏",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 江苏南京：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 江苏镇江：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 江苏宿迁：70ms</p>"
  }, {
    "name": "浙江",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 浙江杭州：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 浙江宁波：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 浙江温州：70ms</p>"
  }, {
    "name": "江西",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 江西南昌：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 江西赣州：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 江西宜春：70ms</p>"
  }, {
    "name": "湖北",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 湖北武汉：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 湖北恩施：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 湖北孝感：70ms</p>"
  }, {
    "name": "广西",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 广西柳州：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 广西南宁：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 广西桂林：70ms</p>"
  }, {
    "name": "甘肃",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 甘肃兰州：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 甘肃天水：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 甘肃平凉：70ms</p>"
  }, {
    "name": "山西",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 山西太原：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 山西大同：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 山西阳泉：70ms</p>"
  }, {
    "name": "内蒙古",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 内蒙古包头：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 内蒙古赤峰：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 内蒙古乌海：70ms</p>"
  }, {
    "name": "陕西",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 陕西西安：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 陕西宝鸡：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 陕西咸阳：70ms</p>"
  }, {
    "name": "吉林",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 吉林长春：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 吉林通化：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 吉林辽源：70ms</p>"
  }, {
    "name": "福建",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 福建厦门：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 福建宁德：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 福建福州：70ms</p>"
  }, {
    "name": "贵州",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 贵州贵阳：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 贵州遵义：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 贵州安顺：70ms</p>"
  }, {
    "name": "广东",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 广东深圳：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 广东东莞：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 广东广州：70ms</p>"
  }, {
    "name": "青海",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 青海西宁：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 青海玉树：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 青海海东：70ms</p>"
  }, {
    "name": "西藏",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 西藏拉萨：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 西藏林芝：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 西藏阿里：70ms</p>"
  }, {
    "name": "四川",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 四川成都：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 四川绵阳：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 四川南充：70ms</p>"
  }, {
    "name": "宁夏",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 宁夏中卫：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 宁夏银川：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 宁夏固原：70ms</p>"
  }, {
    "name": "海南",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\"><font color=#9ccc65>[电信]</font> 海南三亚：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#ffba57>[联通]</font> 海南海口：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\"><font color=#00acc1>[移动]</font> 海南三沙：70ms</p>"
  }, {
    "name": "台湾",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\">中国台湾台北：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国台湾高雄：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国台湾基隆：70ms</p>"
  }, {
    "name": "香港",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\">中国香港PCCW：50ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国香港HGC：60ms</p><p style=\"line-height: 10px; padding: 0 10px;\">中国香港HKBN：70ms</p>"
  }, {
    "name": "澳门",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\">中国澳门：50ms</p>"
  }, {
    "name": "南海诸岛",
    "value": 50,
    "datas": "<p style=\"line-height: 10px; padding: 0 10px;\">南海诸岛：50ms</p>"
  }];
function echarts_block() {
  marker_list = [];
  china_fast = new Array();
  china_data = new Array();
  for (var _0x12e686 = 0; _0x12e686 < 34; _0x12e686++) {
    china_fast[_0x12e686] = 9999;
    china_data[_0x12e686] = "";
  }
  splitList = [{
    "start": 0,
    "end": 50,
    "label": "<=50ms",
    "color": "#24aa1d"
  }, {
    "start": 51,
    "end": 100,
    "label": "51ms-100ms",
    "color": "#42dd3f"
  }, {
    "start": 101,
    "end": 200,
    "label": "101ms-200ms",
    "color": "#bef663"
  }, {
    "start": 201,
    "end": 250,
    "label": "201ms-250ms",
    "color": "#f6ed44"
  }, {
    "start": 251,
    "end": 3000,
    "label": ">250ms",
    "color": "#f69833"
  }, {
    "start": 3001,
    "end": 99999,
    "label": "超时",
    "color": "#e61610"
  }];
  option = {
    "title": [{
      "text": "",
      "top": "5px",
      "left": "15px",
      "x": "left",
      "subtext": "{logo|}",
      "subtextStyle": {
        "fontSize": 12,
        "color": "#333",
        "rich": {
          "logo": {
            "fontSize": 20,
            "fontWeight": 700,
            "color": "#EEA644",
            "backgroundColor": {
              "image": "../frame/images/logo.png"
            }
          }
        }
      }
    }],
    "tooltip": {
      "trigger": "item",
      "formatter": function (_0x10f10f) {
        {
          if (isNaN(_0x10f10f.value)) return "\n                        <div>\n                            <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x10f10f.name + "</p>\n                            <p  style=\"line-height: 20px; padding: 0 10px;\">此区域暂时没有数据</p>\n                      </div>\n                      ";
          if (_0x10f10f.value == 0) province_value = "<1ms";else _0x10f10f.value > 3000 ? province_value = "<font color=#e61610>超时</font>" : province_value = _0x10f10f.value + "ms";
          return "\n                    <div>\n                        <p  style=\"width:100%;height:30px;background-color:#4680ff;text-align: center;line-height: 30px;\">" + _0x10f10f.name + "</p>\n                        <p  style=\"line-height: 20px; padding: 0 10px;\">最快响应：" + province_value + "</p>\n                        " + _0x10f10f.data.datas + "\n                        <p class=\"pl-2\">--- 点击可筛选数据 ---</p>\n                  </div>\n                  ";
        }
      }
    },
    "visualMap": {
      "top": "380px",
      "show": true,
      "min": 0,
      "max": 99999,
      "x": "5%",
      "y": "70%",
      "hoverLink": false,
      "splitList": splitList,
      "outOfRange": {
        "color": "#eee"
      }
    },
    "series": [{
      "z": 1,
      "name": "",
      "type": "map",
      "mapType": "china",
      "backgroundColor": "#ccc",
      "mapLocation": {
        "x": "center",
        "y": "top"
      },
      "emphasis": {
        "show": true,
        "textStyle": {
          "color": "#70ccef"
        }
      },
      "top": "60px",
      "hoverable": false,
      "roam": false,
      "width": "95%",
      "itemStyle": {
        "normal": {
          "label": {
            "show": false,
            "textStyle": {
              "color": "rgb(249, 249, 249)"
            }
          },
          "areaStyle": {
            "color": "#fff4e7"
          },
          "borderColor": "rgba(255, 255, 255, .5)",
          "borderWidth": 1,
          "shadowColor": "rgba(255, 255, 255, .5)"
        },
        "emphasis": {
          "label": {
            "show": false
          }
        }
      },
      "data": mydata
    }, {
      "z": 100,
      "name": "异常标记",
      "type": "effectScatter",
      "coordinateSystem": "geo",
      "showEffectOn": "emphasis",
      "animation": false,
      "symbol": "path://M566.125714 0L256 535.405714h226.084571l-103.350857 435.931429 352.109715-575.926857H472.429714L566.052571 0z",
      "tooltip": {
        "show": false
      },
      "silent": true,
      "data": marker_list,
      "symbolSize": [6, 9],
      "rippleEffect": {
        "brushType": "stroke"
      },
      "itemStyle": {
        "color": "#ff0000"
      },
      "show": false
    }],
    "geo": {}
  };
  china_map = echarts.init(document.getElementById("china_map"));
  china_map.on("click", function (_0x1ab9c4) {
    if (_0x1ab9c4.name == "") {
      return false;
    }
    $("input[name='filter_line']").prop("checked", false);
    $(".filter_ip").text(_0x1ab9c4.name);
    $(".label_filter_ip").show();
    filter_map_count = 0;
    $(".node_tr").each(function () {
      $(this).children(".text-left").text().indexOf(_0x1ab9c4.name) != -1 ? (filter_map_count++, $(this).show()) : $(this).hide();
    });
    $(".show_record").text(filter_map_count);
    $("html,body").animate({
      "scrollTop": $("#return_info").offset().top
    }, 300);
  });
  china_map.setOption(option);
  china_map.resize();
}
var marker_arr = [{
  "name": "北京",
  "x_y": "420,228",
  "show": false
}, {
  "name": "天津",
  "x_y": "429,240",
  "show": false
}, {
  "name": "上海",
  "x_y": "468,340",
  "show": false
}, {
  "name": "重庆",
  "x_y": "338,358",
  "show": false
}, {
  "name": "河北",
  "x_y": "410,250",
  "show": false
}, {
  "name": "河南",
  "x_y": "390,305",
  "show": false
}, {
  "name": "云南",
  "x_y": "280,425",
  "show": false
}, {
  "name": "辽宁",
  "x_y": "485,210",
  "show": false
}, {
  "name": "黑龙江",
  "x_y": "530,140",
  "show": false
}, {
  "name": "湖南",
  "x_y": "373,382",
  "show": false
}, {
  "name": "安徽",
  "x_y": "427,333",
  "show": false
}, {
  "name": "山东",
  "x_y": "435,275",
  "show": false
}, {
  "name": "新疆",
  "x_y": "125,225",
  "show": false
}, {
  "name": "江苏",
  "x_y": "453,315",
  "show": false
}, {
  "name": "浙江",
  "x_y": "457,365",
  "show": false
}, {
  "name": "江西",
  "x_y": "411,382",
  "show": false
}, {
  "name": "湖北",
  "x_y": "383,342",
  "show": false
}, {
  "name": "广西",
  "x_y": "349,433",
  "show": false
}, {
  "name": "甘肃",
  "x_y": "225,227",
  "show": false
}, {
  "name": "山西",
  "x_y": "380,260",
  "show": false
}, {
  "name": "内蒙古",
  "x_y": "340,220",
  "show": false
}, {
  "name": "陕西",
  "x_y": "342,307",
  "show": false
}, {
  "name": "吉林",
  "x_y": "510,182",
  "show": false
}, {
  "name": "福建",
  "x_y": "436,404",
  "show": false
}, {
  "name": "贵州",
  "x_y": "329,396",
  "show": false
}, {
  "name": "广东",
  "x_y": "392,437",
  "show": false
}, {
  "name": "青海",
  "x_y": "222,283",
  "show": false
}, {
  "name": "西藏",
  "x_y": "148,338",
  "show": false
}, {
  "name": "四川",
  "x_y": "290,346",
  "show": false
}, {
  "name": "宁夏",
  "x_y": "323,263",
  "show": false
}, {
  "name": "海南",
  "x_y": "357,491",
  "show": false
}, {
  "name": "台湾",
  "x_y": "462,433",
  "show": false
}, {
  "name": "香港",
  "x_y": "399,451",
  "show": false
}, {
  "name": "澳门",
  "x_y": "0,0",
  "show": false
}, {
  "name": "南海诸岛",
  "x_y": "0,0",
  "show": false
}];
function refreshData() {
  marker_list = marker_arr.filter(function (_0x270e8f) {
    return _0x270e8f.show === true;
  }).filter(function (_0x27bfbf) {
    var _0x427206 = mydata.find(_0x3fc067 => _0x3fc067.name == _0x27bfbf.name);
    return _0x427206.value !== 5000;
  }).map(function (_0x58f4ab) {
    {
      var [_0x5068ff, _0x1d1743] = _0x58f4ab.x_y.split(",").map(Number),
        _0x487ae4 = "#fff";
      return {
        "value": [_0x5068ff, _0x1d1743, _0x487ae4]
      };
    }
  });
  option.series[0].data = mydata;
  if (marker_switch) {
    option.series[1].data = marker_list;
  }
  china_map.setOption(option);
}
function str_num(_0x2002b1, _0x37ae7a) {
  return _0x2002b1.split(_0x37ae7a).length - 1;
}
function left(_0x37643a, _0x3ec3a3) {
  if (_0x3ec3a3 > 0) return _0x37643a.substring(0, _0x3ec3a3);else {
    return null;
  }
}
function right(_0x21bba2, _0x232096) {
  if (_0x21bba2.length - _0x232096 >= 0 && _0x21bba2.length >= 0 && _0x21bba2.length - _0x232096 <= _0x21bba2.length) {
    return _0x21bba2.substring(_0x21bba2.length - _0x232096, _0x21bba2.length);
  } else return null;
}
function sortByDescNum(_0x3301ed, _0xdee30a) {
  _0x3301ed.sort(function (_0x1cec89, _0x49dbb5) {
    return _0x49dbb5[_0xdee30a] - _0x1cec89[_0xdee30a];
  });
  return _0x3301ed;
}
function filter_ip(_0x541b84) {
  $(".filter_ip").text(_0x541b84);
  $(".label_filter_ip").show();
  $("input[name='filter_line']").prop("checked", false);
  var _0x51a960 = 0;
  $(".node_tr").each(function () {
    $("#real_ip_" + $(this).attr("node")).text() == _0x541b84 ? (_0x51a960++, $(this).show()) : $(this).hide();
  });
  $(".show_record").text(_0x51a960);
}
$("input[name='filter_line']").click(function () {
  $(".label_filter_ip").hide();
  var _0x4150cd = $(this).val(),
    _0x490212 = 0,
    _0x4034c2 = 0,
    _0x2be4b3 = 0,
    _0x3c15a3 = 0,
    _0x2a8e40 = 0,
    _0x6458b1 = 0,
    _0x571e40 = 0;
  $(".node_tr").each(function () {
    _0x490212++;
    if ($(this).attr("node_type") == _0x4150cd || _0x4150cd == "all") {
      $(this).show();
      if (_0x4150cd == "1") _0x4034c2++;else {
        if (_0x4150cd == "2") _0x2be4b3++;else {
          if (_0x4150cd == "3") _0x3c15a3++;else {
            if (_0x4150cd == "4") _0x2a8e40++;else _0x4150cd == "5" && _0x6458b1++;
          }
        }
      }
    } else $(this).hide();
    _0x4150cd == "6" && $(this).attr("time_out") == "true" && ($(this).show(), _0x571e40++);
    if (_0x4150cd == "all") $(".show_record").text(_0x490212);else {
      if (_0x4150cd == "1") $(".show_record").text(_0x4034c2);else {
        if (_0x4150cd == "2") $(".show_record").text(_0x2be4b3);else {
          if (_0x4150cd == "3") $(".show_record").text(_0x3c15a3);else {
            if (_0x4150cd == "4") $(".show_record").text(_0x2a8e40);else {
              if (_0x4150cd == "5") $(".show_record").text(_0x6458b1);else _0x4150cd == "6" && $(".show_record").text(_0x571e40);
            }
          }
        }
      }
    }
  });
});
function ipv4_list_sh() {
  $(".ipv4_list").is(":hidden") == false ? ($(".ipv4_list").hide(), $(".show_hide").html("展开<i class=\"feather icon-chevrons-down\"></i>")) : ($(".ipv4_list").show(), $(".show_hide").html("收起<i class=\"feather icon-chevrons-up\"></i>"));
}
function debounce(_0x383c8d, _0x4ad2f7) {
  let _0x54df7e;
  return function () {
    {
      const _0x46d79e = this,
        _0x454d64 = arguments;
      clearTimeout(_0x54df7e);
      _0x54df7e = setTimeout(function () {
        _0x383c8d.apply(_0x46d79e, _0x454d64);
      }, _0x4ad2f7);
    }
  };
}
const refreshData_slow = debounce(function () {
    refreshData();
  }, 0),
  refresh_ip_list_slow = debounce(function (_0x46ea1b) {
    refresh_ip_list(_0x46ea1b);
  }, 0);
function refresh_ip_list(_0x121f07) {
  $(".ip_list").html("");
  $(".copy_ip").attr("copy-text", "");
  for (var _0x102aa0 = 0; _0x102aa0 < _0x121f07.length; _0x102aa0++) {
    if (isip(_0x121f07[_0x102aa0].ip)) {
      var _0x4fec25 = _0x121f07[_0x102aa0].ip;
    } else {
      var _0x4fec25 = "解析失败";
    }
    $(".ip_list").append(" <a title=\"点击筛选\" class=\"pointer noselect\" onclick=\"filter_ip('" + _0x4fec25 + "')\"><li><span class=\"real_ip ml-3\">" + _0x4fec25 + "</span><span class=\"text-primary float-right mr-3\">" + _0x121f07[_0x102aa0].pre + "%</span></li></a>");
    $(".copy_ip").attr("copy-text") == "" ? $(".copy_ip").attr("copy-text", _0x4fec25) : $(".copy_ip").attr("copy-text", $(".copy_ip").attr("copy-text") + "\n" + _0x4fec25);
  }
}
function ping_once(_0x5b4391) {
  var _0x4e8de4 = _0x5b4391.node_id;
  complete_node_num = complete_node_num + 1;
  if (complete_node_num > check_node_num) return false;
  complete_node_num == check_node_num && $(".checking").hide();
  var _0x34f287 = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
  $("#complete_progress").html(_0x34f287);
  if (isip(_0x5b4391.ip)) {
    {
      $("#real_ip_" + _0x4e8de4).text(_0x5b4391.ip);
      $("#address_" + _0x4e8de4).text(_0x5b4391.address);
      $("#address_" + _0x4e8de4).attr("title", _0x5b4391.address);
      $("#hover_button_" + _0x4e8de4).attr("style", "");
      ip = _0x5b4391.ip;
      var _0x47cccd = parseInt(_0x5b4391.result);
      if (_0x47cccd == 0) $("#ping_" + _0x4e8de4).html("<1ms");else {
        if (_0x47cccd == -1) {
          $("#ping_" + _0x4e8de4).html("<span class=\"text-danger\">超时</span>");
          $(".node_tr[node='" + _0x4e8de4 + "']").attr("time_out", "true");
          time_out_num = time_out_num + 1;
          $(".time_out").text(time_out_num);
          $(".time_out").show();
        } else $("#ping_" + _0x4e8de4).html(_0x47cccd + "ms");
      }
    }
  } else $("#real_ip_" + _0x4e8de4).html("<span class=\"text-danger\">解析失败</span>"), $(".node_tr[node='" + _0x4e8de4 + "']").attr("time_out", "true"), time_out_num = time_out_num + 1, $(".time_out").text(time_out_num), $(".time_out").show();
  var _0x2fad6c = {
    "ip": _0x5b4391.ip
  };
  ipv4_list_arr.push(_0x2fad6c);
  var _0x3bfd91 = 100 / ipv4_list_arr.length;
  let _0x2f2b4e = {};
  ipv4_list_arr.forEach(_0x480244 => {
    _0x2f2b4e[_0x480244.ip] = _0x2f2b4e[_0x480244.ip] || [];
    _0x480244.pre = _0x3bfd91;
    _0x2f2b4e[_0x480244.ip].push(_0x480244);
  });
  var _0xc8a4e3 = [];
  Object.keys(_0x2f2b4e).forEach(function (_0x34b388) {
    {
      let _0x47e721 = {};
      _0x47e721.ip = _0x34b388;
      _0x47e721.pre = (_0x3bfd91 * _0x2f2b4e[_0x34b388].length).toFixed(2);
      _0xc8a4e3.push(_0x47e721);
    }
  });
  _0xc8a4e3 = sortByDescNum(_0xc8a4e3, "pre");
  refresh_ip_list_slow(_0xc8a4e3);
  default_show_ip == 1 & _0xc8a4e3.length > 18 && (!ip_list_mark && ($(".ip_list").css({
    "max-height": "100px",
    "overflow": "hidden"
  }), $(".show_hide").html("全部展开<i class=\"feather icon-chevrons-down\"></i>")), ip_list_mark = true);
  $("#ipv4_num").text(_0xc8a4e3.length);
  if (_0x5b4391.province != 99) {
    _0x5b4391.result == "-1" && china_fast[_0x5b4391.province] != "5000" && (marker_arr[_0x5b4391.province].show = true);
    isip(_0x5b4391.ip) == false && china_fast[_0x5b4391.province] != "5000" && (marker_arr[_0x5b4391.province].show = true);
    if (_0x5b4391.result != "-1" && isip(_0x5b4391.ip) == true && china_fast[_0x5b4391.province] > parseInt(_0x5b4391.result)) china_fast[_0x5b4391.province] = parseInt(_0x5b4391.result);else (_0x5b4391.result == "-1" && china_fast[_0x5b4391.province] == "9999" || isip(_0x5b4391.ip) == false && china_fast[_0x5b4391.province] == "9999") && (china_fast[_0x5b4391.province] = 5000);
    if (_0x5b4391.line == "1") var _0x5b7636 = "<font color=#9ccc65>[电信]</font>",
      _0xc98931 = _0x5b4391.name.replace("电信", "");else {
      if (_0x5b4391.line == "2") {
        var _0x5b7636 = "<font color=#ffba57>[联通]</font>",
          _0xc98931 = _0x5b4391.name.replace("联通", "");
      } else {
        if (_0x5b4391.line == "3") var _0x5b7636 = "<font color=#00acc1>[移动]</font>",
          _0xc98931 = _0x5b4391.name.replace("移动", "");else {
          if (_0x5b4391.line == "5") var _0x5b7636 = "",
            _0xc98931 = _0x5b4391.name.replace("海外", "");
        }
      }
    }
    if (_0x5b4391.result == "0") {
      var _0x4149b4 = "<1ms";
    } else {
      if (parseInt(_0x5b4391.result) < 1) var _0x4149b4 = "<font color=#e61610>超时</font>";else {
        if (isip(_0x5b4391.ip) == false) {
          var _0x4149b4 = "<font color=#e61610>解析失败</font>";
        } else var _0x4149b4 = _0x5b4391.result + "ms";
      }
    }
    china_data[_0x5b4391.province] == "" ? china_data[_0x5b4391.province] = "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x5b7636 + " " + _0xc98931 + "：" + _0x4149b4 + "</p>" : china_data[_0x5b4391.province] = china_data[_0x5b4391.province] + "<p style=\"line-height: 10px; padding: 0 10px;\">" + _0x5b7636 + " " + _0xc98931 + "：" + _0x4149b4 + "</p>";
  }
  mydata = [];
  for (var _0x588bca = 0; _0x588bca < 34; _0x588bca++) {
    if (_0x588bca == 0) var _0x41952f = {
      "name": "北京",
      "value": china_fast[0],
      "datas": china_data[0]
    };else {
      if (_0x588bca == 1) {
        var _0x41952f = {
          "name": "天津",
          "value": china_fast[1],
          "datas": china_data[1]
        };
      } else {
        if (_0x588bca == 2) var _0x41952f = {
          "name": "上海",
          "value": china_fast[2],
          "datas": china_data[2]
        };else {
          if (_0x588bca == 3) {
            var _0x41952f = {
              "name": "重庆",
              "value": china_fast[3],
              "datas": china_data[3]
            };
          } else {
            if (_0x588bca == 4) var _0x41952f = {
              "name": "河北",
              "value": china_fast[4],
              "datas": china_data[4]
            };else {
              if (_0x588bca == 5) {
                var _0x41952f = {
                  "name": "河南",
                  "value": china_fast[5],
                  "datas": china_data[5]
                };
              } else {
                if (_0x588bca == 6) var _0x41952f = {
                  "name": "云南",
                  "value": china_fast[6],
                  "datas": china_data[6]
                };else {
                  if (_0x588bca == 7) {
                    var _0x41952f = {
                      "name": "辽宁",
                      "value": china_fast[7],
                      "datas": china_data[7]
                    };
                  } else {
                    if (_0x588bca == 8) var _0x41952f = {
                      "name": "黑龙江",
                      "value": china_fast[8],
                      "datas": china_data[8]
                    };else {
                      if (_0x588bca == 9) {
                        var _0x41952f = {
                          "name": "湖南",
                          "value": china_fast[9],
                          "datas": china_data[9]
                        };
                      } else {
                        if (_0x588bca == 10) var _0x41952f = {
                          "name": "安徽",
                          "value": china_fast[10],
                          "datas": china_data[10]
                        };else {
                          if (_0x588bca == 11) {
                            var _0x41952f = {
                              "name": "山东",
                              "value": china_fast[11],
                              "datas": china_data[11]
                            };
                          } else {
                            if (_0x588bca == 12) {
                              var _0x41952f = {
                                "name": "新疆",
                                "value": china_fast[12],
                                "datas": china_data[12]
                              };
                            } else {
                              if (_0x588bca == 13) var _0x41952f = {
                                "name": "江苏",
                                "value": china_fast[13],
                                "datas": china_data[13]
                              };else {
                                if (_0x588bca == 14) {
                                  var _0x41952f = {
                                    "name": "浙江",
                                    "value": china_fast[14],
                                    "datas": china_data[14]
                                  };
                                } else {
                                  if (_0x588bca == 15) var _0x41952f = {
                                    "name": "江西",
                                    "value": china_fast[15],
                                    "datas": china_data[15]
                                  };else {
                                    if (_0x588bca == 16) var _0x41952f = {
                                      "name": "湖北",
                                      "value": china_fast[16],
                                      "datas": china_data[16]
                                    };else {
                                      if (_0x588bca == 17) {
                                        var _0x41952f = {
                                          "name": "广西",
                                          "value": china_fast[17],
                                          "datas": china_data[17]
                                        };
                                      } else {
                                        if (_0x588bca == 18) var _0x41952f = {
                                          "name": "甘肃",
                                          "value": china_fast[18],
                                          "datas": china_data[18]
                                        };else {
                                          if (_0x588bca == 19) {
                                            var _0x41952f = {
                                              "name": "山西",
                                              "value": china_fast[19],
                                              "datas": china_data[19]
                                            };
                                          } else {
                                            if (_0x588bca == 20) var _0x41952f = {
                                              "name": "内蒙古",
                                              "value": china_fast[20],
                                              "datas": china_data[20]
                                            };else {
                                              if (_0x588bca == 21) var _0x41952f = {
                                                "name": "陕西",
                                                "value": china_fast[21],
                                                "datas": china_data[21]
                                              };else {
                                                if (_0x588bca == 22) var _0x41952f = {
                                                  "name": "吉林",
                                                  "value": china_fast[22],
                                                  "datas": china_data[22]
                                                };else {
                                                  if (_0x588bca == 23) {
                                                    var _0x41952f = {
                                                      "name": "福建",
                                                      "value": china_fast[23],
                                                      "datas": china_data[23]
                                                    };
                                                  } else {
                                                    if (_0x588bca == 24) var _0x41952f = {
                                                      "name": "贵州",
                                                      "value": china_fast[24],
                                                      "datas": china_data[24]
                                                    };else {
                                                      if (_0x588bca == 25) var _0x41952f = {
                                                        "name": "广东",
                                                        "value": china_fast[25],
                                                        "datas": china_data[25]
                                                      };else {
                                                        if (_0x588bca == 26) var _0x41952f = {
                                                          "name": "青海",
                                                          "value": china_fast[26],
                                                          "datas": china_data[26]
                                                        };else {
                                                          if (_0x588bca == 27) {
                                                            var _0x41952f = {
                                                              "name": "西藏",
                                                              "value": china_fast[27],
                                                              "datas": china_data[27]
                                                            };
                                                          } else {
                                                            if (_0x588bca == 28) var _0x41952f = {
                                                              "name": "四川",
                                                              "value": china_fast[28],
                                                              "datas": china_data[28]
                                                            };else {
                                                              if (_0x588bca == 29) var _0x41952f = {
                                                                "name": "宁夏",
                                                                "value": china_fast[29],
                                                                "datas": china_data[29]
                                                              };else {
                                                                if (_0x588bca == 30) var _0x41952f = {
                                                                  "name": "海南",
                                                                  "value": china_fast[30],
                                                                  "datas": china_data[30]
                                                                };else {
                                                                  if (_0x588bca == 31) var _0x41952f = {
                                                                    "name": "台湾",
                                                                    "value": china_fast[31],
                                                                    "datas": china_data[31]
                                                                  };else {
                                                                    if (_0x588bca == 32) var _0x41952f = {
                                                                      "name": "香港",
                                                                      "value": china_fast[32],
                                                                      "datas": china_data[32]
                                                                    };else {
                                                                      if (_0x588bca == 33) {
                                                                        var _0x41952f = {
                                                                          "name": "澳门",
                                                                          "value": china_fast[33],
                                                                          "datas": china_data[33]
                                                                        };
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (china_fast[_0x588bca] != 9999) {
      mydata[mydata.length] = _0x41952f;
    } else mydata[mydata.length] = {
      "name": "北京"
    };
  }
  refreshData_slow();
  if (isip(_0x5b4391.ip) == false) return false;
  if (_0x5b4391.province != 99 && _0x5b4391.result != "-1") {
    {
      china_node_num = china_node_num + 1;
      china_allping = china_allping + parseInt(_0x5b4391.result);
      if (china_fastping > parseInt(_0x5b4391.result)) {
        china_fastping = _0x5b4391.result;
        _0x5b4391.result == 0 ? $("#china_fast").text(_0x5b4391.name + " <1ms") : $("#china_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
      }
      china_slow < parseInt(_0x5b4391.result) && (china_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#china_slow").text(_0x5b4391.name + " <1ms") : $("#china_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      var _0x39a938 = parseInt(china_allping / china_node_num);
      _0x39a938 == 0 ? $("#china_avg").text("<1ms") : $("#china_avg").text(_0x39a938 + "ms");
    }
  }
  if (_0x5b4391.line == "1" && _0x5b4391.result != "-1") {
    ct_node_num = ct_node_num + 1;
    ct_allping = ct_allping + parseInt(_0x5b4391.result);
    ct_fast > parseInt(_0x5b4391.result) && (ct_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#ct_fast").text(_0x5b4391.name + " <1ms") : $("#ct_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    ct_slow < parseInt(_0x5b4391.result) && (ct_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#ct_slow").text(_0x5b4391.name + " <1ms") : $("#ct_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x4d663b = parseInt(ct_allping / ct_node_num);
    _0x4d663b == 0 ? $("#ct_avg").text("<1ms") : $("#ct_avg").text(_0x4d663b + "ms");
  }
  if (_0x5b4391.line == "2" && _0x5b4391.result != "-1") {
    cu_node_num = cu_node_num + 1;
    cu_allping = cu_allping + parseInt(_0x5b4391.result);
    cu_fast > parseInt(_0x5b4391.result) && (cu_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#cu_fast").text(_0x5b4391.name + " <1ms") : $("#cu_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    cu_slow < parseInt(_0x5b4391.result) && (cu_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#cu_slow").text(_0x5b4391.name + " <1ms") : $("#cu_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x27e9be = parseInt(cu_allping / cu_node_num);
    _0x27e9be == 0 ? $("#cu_avg").text("<1ms") : $("#cu_avg").text(_0x27e9be + "ms");
  }
  if (_0x5b4391.line == "3" && _0x5b4391.result != "-1") {
    {
      cm_node_num = cm_node_num + 1;
      cm_allping = cm_allping + parseInt(_0x5b4391.result);
      if (cm_fast > parseInt(_0x5b4391.result)) {
        cm_fast = _0x5b4391.result;
        if (_0x5b4391.result == 0) {
          $("#cm_fast").text(_0x5b4391.name + " <1ms");
        } else $("#cm_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
      }
      cm_slow < parseInt(_0x5b4391.result) && (cm_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#cm_slow").text(_0x5b4391.name + " <1ms") : $("#cm_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      var _0x5be078 = parseInt(cm_allping / cm_node_num);
      _0x5be078 == 0 ? $("#cm_avg").text("<1ms") : $("#cm_avg").text(_0x5be078 + "ms");
    }
  }
  if (_0x5b4391.region == "1" && _0x5b4391.result != "-1") {
    huadong_node_num = huadong_node_num + 1;
    huadong_allping = huadong_allping + parseInt(_0x5b4391.result);
    huadong_fast > parseInt(_0x5b4391.result) && (huadong_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#huadong_fast").text(_0x5b4391.name + " <1ms") : $("#huadong_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    huadong_slow < parseInt(_0x5b4391.result) && (huadong_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#huadong_slow").text(_0x5b4391.name + " <1ms") : $("#huadong_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x4ba6b7 = parseInt(huadong_allping / huadong_node_num);
    _0x4ba6b7 == 0 ? $("#huadong_avg").text("<1ms") : $("#huadong_avg").text(_0x4ba6b7 + "ms");
  }
  if (_0x5b4391.region == "2" && _0x5b4391.result != "-1") {
    {
      huanan_node_num = huanan_node_num + 1;
      huanan_allping = huanan_allping + parseInt(_0x5b4391.result);
      if (huanan_fast > parseInt(_0x5b4391.result)) {
        {
          huanan_fast = _0x5b4391.result;
          if (_0x5b4391.result == 0) {
            $("#huanan_fast").text(_0x5b4391.name + " <1ms");
          } else $("#huanan_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
        }
      }
      if (huanan_slow < parseInt(_0x5b4391.result)) {
        huanan_slow = _0x5b4391.result;
        _0x5b4391.result == 0 ? $("#huanan_slow").text(_0x5b4391.name + " <1ms") : $("#huanan_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
      }
      var _0x48fb2b = parseInt(huanan_allping / huanan_node_num);
      _0x48fb2b == 0 ? $("#huanan_avg").text("<1ms") : $("#huanan_avg").text(_0x48fb2b + "ms");
    }
  }
  if (_0x5b4391.region == "3" && _0x5b4391.result != "-1") {
    huazhong_node_num = huazhong_node_num + 1;
    huazhong_allping = huazhong_allping + parseInt(_0x5b4391.result);
    if (huazhong_fast > parseInt(_0x5b4391.result)) {
      huazhong_fast = _0x5b4391.result;
      _0x5b4391.result == 0 ? $("#huazhong_fast").text(_0x5b4391.name + " <1ms") : $("#huazhong_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
    }
    huazhong_slow < parseInt(_0x5b4391.result) && (huazhong_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#huazhong_slow").text(_0x5b4391.name + " <1ms") : $("#huazhong_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x1f29fc = parseInt(huazhong_allping / huazhong_node_num);
    if (_0x1f29fc == 0) {
      $("#huazhong_avg").text("<1ms");
    } else $("#huazhong_avg").text(_0x1f29fc + "ms");
  }
  if (_0x5b4391.region == "4" && _0x5b4391.result != "-1") {
    huabei_node_num = huabei_node_num + 1;
    huabei_allping = huabei_allping + parseInt(_0x5b4391.result);
    if (huabei_fast > parseInt(_0x5b4391.result)) {
      huabei_fast = _0x5b4391.result;
      if (_0x5b4391.result == 0) $("#huabei_fast").text(_0x5b4391.name + " <1ms");else {
        $("#huabei_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
      }
    }
    huabei_slow < parseInt(_0x5b4391.result) && (huabei_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#huabei_slow").text(_0x5b4391.name + " <1ms") : $("#huabei_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x7ddb84 = parseInt(huabei_allping / huabei_node_num);
    _0x7ddb84 == 0 ? $("#huabei_avg").text("<1ms") : $("#huabei_avg").text(_0x7ddb84 + "ms");
  }
  if (_0x5b4391.region == "5" && _0x5b4391.result != "-1") {
    {
      xinan_node_num = xinan_node_num + 1;
      xinan_allping = xinan_allping + parseInt(_0x5b4391.result);
      if (xinan_fast > parseInt(_0x5b4391.result)) {
        xinan_fast = _0x5b4391.result;
        if (_0x5b4391.result == 0) $("#xinan_fast").text(_0x5b4391.name + " <1ms");else {
          $("#xinan_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
        }
      }
      xinan_slow < parseInt(_0x5b4391.result) && (xinan_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#xinan_slow").text(_0x5b4391.name + " <1ms") : $("#xinan_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      var _0x2d3fb8 = parseInt(xinan_allping / xinan_node_num);
      _0x2d3fb8 == 0 ? $("#xinan_avg").text("<1ms") : $("#xinan_avg").text(_0x2d3fb8 + "ms");
    }
  }
  if (_0x5b4391.region == "6" && _0x5b4391.result != "-1") {
    {
      xibei_node_num = xibei_node_num + 1;
      xibei_allping = xibei_allping + parseInt(_0x5b4391.result);
      xibei_fast > parseInt(_0x5b4391.result) && (xibei_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#xibei_fast").text(_0x5b4391.name + " <1ms") : $("#xibei_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      if (xibei_slow < parseInt(_0x5b4391.result)) {
        {
          xibei_slow = _0x5b4391.result;
          if (_0x5b4391.result == 0) {
            $("#xibei_slow").text(_0x5b4391.name + " <1ms");
          } else $("#xibei_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
        }
      }
      var _0x406679 = parseInt(xibei_allping / xibei_node_num);
      _0x406679 == 0 ? $("#xibei_avg").text("<1ms") : $("#xibei_avg").text(_0x406679 + "ms");
    }
  }
  if (_0x5b4391.region == "7" && _0x5b4391.result != "-1") {
    dongbei_node_num = dongbei_node_num + 1;
    dongbei_allping = dongbei_allping + parseInt(_0x5b4391.result);
    if (dongbei_fast > parseInt(_0x5b4391.result)) {
      dongbei_fast = _0x5b4391.result;
      if (_0x5b4391.result == 0) $("#dongbei_fast").text(_0x5b4391.name + " <1ms");else {
        $("#dongbei_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
      }
    }
    dongbei_slow < parseInt(_0x5b4391.result) && (dongbei_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#dongbei_slow").text(_0x5b4391.name + " <1ms") : $("#dongbei_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x1756ac = parseInt(dongbei_allping / dongbei_node_num);
    _0x1756ac == 0 ? $("#dongbei_avg").text("<1ms") : $("#dongbei_avg").text(_0x1756ac + "ms");
  }
  if (_0x5b4391.region == "8" && _0x5b4391.result != "-1") {
    gangaotai_node_num = gangaotai_node_num + 1;
    gangaotai_allping = gangaotai_allping + parseInt(_0x5b4391.result);
    if (gangaotai_fast > parseInt(_0x5b4391.result)) {
      gangaotai_fast = _0x5b4391.result;
      if (_0x5b4391.result == 0) $("#gangaotai_fast").text(_0x5b4391.name + " <1ms");else {
        $("#gangaotai_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
      }
    }
    if (gangaotai_slow < parseInt(_0x5b4391.result)) {
      gangaotai_slow = _0x5b4391.result;
      _0x5b4391.result == 0 ? $("#gangaotai_slow").text(_0x5b4391.name + " <1ms") : $("#gangaotai_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
    }
    var _0x37d5ac = parseInt(gangaotai_allping / gangaotai_node_num);
    _0x37d5ac == 0 ? $("#gangaotai_avg").text("<1ms") : $("#gangaotai_avg").text(_0x37d5ac + "ms");
  }
  if (_0x5b4391.province == "99" && _0x5b4391.result != "-1") {
    global_node_num = global_node_num + 1;
    global_allping = global_allping + parseInt(_0x5b4391.result);
    global_fast > parseInt(_0x5b4391.result) && (global_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#global_fast").text(_0x5b4391.name + " <1ms") : $("#global_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    global_slow < parseInt(_0x5b4391.result) && (global_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#global_slow").text(_0x5b4391.name + " <1ms") : $("#global_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x102426 = parseInt(global_allping / global_node_num);
    _0x102426 == 0 ? $("#global_avg").text("<1ms") : $("#global_avg").text(_0x102426 + "ms");
  }
  if (_0x5b4391.region == "9" && _0x5b4391.result != "-1") {
    asia_node_num = asia_node_num + 1;
    asia_allping = asia_allping + parseInt(_0x5b4391.result);
    if (asia_fast > parseInt(_0x5b4391.result)) {
      asia_fast = _0x5b4391.result;
      _0x5b4391.result == 0 ? $("#asia_fast").text(_0x5b4391.name + " <1ms") : $("#asia_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
    }
    if (asia_slow < parseInt(_0x5b4391.result)) {
      {
        asia_slow = _0x5b4391.result;
        if (_0x5b4391.result == 0) $("#asia_slow").text(_0x5b4391.name + " <1ms");else {
          $("#asia_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
        }
      }
    }
    var _0x20e469 = parseInt(asia_allping / asia_node_num);
    _0x20e469 == 0 ? $("#asia_avg").text("<1ms") : $("#asia_avg").text(_0x20e469 + "ms");
  }
  if (_0x5b4391.region == "10" && _0x5b4391.result != "-1") {
    {
      europe_node_num = europe_node_num + 1;
      europe_allping = europe_allping + parseInt(_0x5b4391.result);
      europe_fast > parseInt(_0x5b4391.result) && (europe_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#europe_fast").text(_0x5b4391.name + " <1ms") : $("#europe_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      europe_slow < parseInt(_0x5b4391.result) && (europe_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#europe_slow").text(_0x5b4391.name + " <1ms") : $("#europe_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      var _0x37ca80 = parseInt(europe_allping / europe_node_num);
      _0x37ca80 == 0 ? $("#europe_avg").text("<1ms") : $("#europe_avg").text(_0x37ca80 + "ms");
    }
  }
  if (_0x5b4391.region == "11" && _0x5b4391.result != "-1") {
    {
      north_node_num = north_node_num + 1;
      north_allping = north_allping + parseInt(_0x5b4391.result);
      north_fast > parseInt(_0x5b4391.result) && (north_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#north_fast").text(_0x5b4391.name + " <1ms") : $("#north_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      north_slow < parseInt(_0x5b4391.result) && (north_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#north_slow").text(_0x5b4391.name + " <1ms") : $("#north_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      var _0x273a0e = parseInt(north_allping / north_node_num);
      _0x273a0e == 0 ? $("#north_avg").text("<1ms") : $("#north_avg").text(_0x273a0e + "ms");
    }
  }
  if (_0x5b4391.region == "12" && _0x5b4391.result != "-1") {
    south_node_num = south_node_num + 1;
    south_allping = south_allping + parseInt(_0x5b4391.result);
    south_fast > parseInt(_0x5b4391.result) && (south_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#south_fast").text(_0x5b4391.name + " <1ms") : $("#south_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    if (south_slow < parseInt(_0x5b4391.result)) {
      south_slow = _0x5b4391.result;
      _0x5b4391.result == 0 ? $("#south_slow").text(_0x5b4391.name + " <1ms") : $("#south_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms");
    }
    var _0x27e0d0 = parseInt(south_allping / south_node_num);
    _0x27e0d0 == 0 ? $("#south_avg").text("<1ms") : $("#south_avg").text(_0x27e0d0 + "ms");
  }
  if (_0x5b4391.region == "13" && _0x5b4391.result != "-1") {
    africa_node_num = africa_node_num + 1;
    africa_allping = africa_allping + parseInt(_0x5b4391.result);
    africa_fast > parseInt(_0x5b4391.result) && (africa_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#africa_fast").text(_0x5b4391.name + " <1ms") : $("#africa_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    africa_slow < parseInt(_0x5b4391.result) && (africa_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#africa_slow").text(_0x5b4391.name + " <1ms") : $("#africa_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
    var _0x1750b2 = parseInt(africa_allping / africa_node_num);
    _0x1750b2 == 0 ? $("#africa_avg").text("<1ms") : $("#africa_avg").text(_0x1750b2 + "ms");
  }
  if (_0x5b4391.region == "14" && _0x5b4391.result != "-1") {
    {
      oceania_node_num = oceania_node_num + 1;
      oceania_allping = oceania_allping + parseInt(_0x5b4391.result);
      oceania_fast > parseInt(_0x5b4391.result) && (oceania_fast = _0x5b4391.result, _0x5b4391.result == 0 ? $("#oceania_fast").text(_0x5b4391.name + " <1ms") : $("#oceania_fast").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      oceania_slow < parseInt(_0x5b4391.result) && (oceania_slow = _0x5b4391.result, _0x5b4391.result == 0 ? $("#oceania_slow").text(_0x5b4391.name + " <1ms") : $("#oceania_slow").text(_0x5b4391.name + " " + _0x5b4391.result + "ms"));
      var _0x51028a = parseInt(oceania_allping / oceania_node_num);
      _0x51028a == 0 ? $("#oceania_avg").text("<1ms") : $("#oceania_avg").text(_0x51028a + "ms");
    }
  }
}
function ping_many(_0x2199ef, _0xc2407, _0x8101f3, _0x3edc34) {
  if ($("#address_" + _0x8101f3).text() == "--") {
    if (_0x2199ef != "Not Found") $("#real_ip_" + _0x8101f3).text(_0x2199ef), $("#address_" + _0x8101f3).text(_0xc2407), $("#address_" + _0x8101f3).attr("title", _0xc2407), $("#hover_button_" + _0x8101f3).attr("style", "");else return $("#real_ip_" + _0x8101f3).html("<span class=\"text-danger\">解析失败</span>"), false;
  }
  var _0x3a8266 = parseInt($(".node_tr[node=" + _0x8101f3 + "]").attr("send_num")),
    _0x3edc34 = parseInt(_0x3edc34);
  _0x3a8266 = _0x3a8266 + 1;
  $(".node_tr[node=" + _0x8101f3 + "]").attr("send_num", _0x3a8266);
  $("#send_" + _0x8101f3).text(_0x3a8266);
  var _0x4133bb = parseInt($(".node_tr[node=" + _0x8101f3 + "]").attr("all_ping"));
  if (_0x3edc34 != -1) {
    _0x4133bb = _0x4133bb + _0x3edc34;
    $(".node_tr[node=" + _0x8101f3 + "]").attr("all_ping", _0x4133bb);
  }
  _0x3edc34 == "-1" && $(".node_tr[node=" + _0x8101f3 + "]").attr("loss_num", parseInt($(".node_tr[node=" + _0x8101f3 + "]").attr("loss_num")) + 1);
  var _0x2076b2 = parseInt($(".node_tr[node=" + _0x8101f3 + "]").attr("loss_num"));
  if (_0x3a8266 == "1" && _0x3edc34 != "-1") $("#loss_" + _0x8101f3).text("0%");else {
    if (_0x3a8266 == "1" && _0x3edc34 == "-1") $("#loss_" + _0x8101f3).text("100%");else _0x2076b2 == "0" ? $("#loss_" + _0x8101f3).text("0%") : $("#loss_" + _0x8101f3).text(GetPercent(_0x2076b2, _0x3a8266));
  }
  if (_0x3edc34 == 0) $("#last_ping_" + _0x8101f3).text("<1");else _0x3edc34 == -1 ? $("#last_ping_" + _0x8101f3).html("<span class=\"text-danger\">超时</span>") : $("#last_ping_" + _0x8101f3).text(_0x3edc34);
  if (_0x4133bb == "0") _0x3a8266 != "1" && _0x3edc34 != -1 ? $("#avg_ping_" + _0x8101f3).text("<1") : $("#avg_ping_" + _0x8101f3).text("--");else {
    var _0x25d95c = parseInt(_0x4133bb / (_0x3a8266 - _0x2076b2));
    if (_0x25d95c == 0) $("#avg_ping_" + _0x8101f3).text("<1");else {
      $("#avg_ping_" + _0x8101f3).text(_0x25d95c);
    }
  }
  _0x3a8266 == "1" || $("#best_ping_" + _0x8101f3).text() == "--" ? _0x3edc34 != "-1" ? _0x3edc34 == 0 ? $("#best_ping_" + _0x8101f3).text("<1") : $("#best_ping_" + _0x8101f3).text(_0x3edc34) : $("#best_ping_" + _0x8101f3).text("--") : _0x3edc34 < parseInt($("#best_ping_" + _0x8101f3).text()) && _0x3edc34 != "-1" && (_0x3edc34 == 0 ? $("#best_ping_" + _0x8101f3).text("<1") : $("#best_ping_" + _0x8101f3).text(_0x3edc34));
  if (_0x3a8266 == "1" || $("#worst_ping_" + _0x8101f3).text() == "--") {
    {
      if (_0x3edc34 != "-1") {
        if (_0x3edc34 == 0) $("#worst_ping_" + _0x8101f3).text("<1");else {
          $("#worst_ping_" + _0x8101f3).text(_0x3edc34);
        }
      } else {
        $("#worst_ping_" + _0x8101f3).text("--");
      }
    }
  } else _0x3edc34 > parseInt($("#worst_ping_" + _0x8101f3).text()) && (_0x3edc34 == 0 ? $("#worst_ping_" + _0x8101f3).text("<1") : $("#worst_ping_" + _0x8101f3).text(_0x3edc34));
  update_canvas(_0x8101f3, _0x3a8266, _0x3edc34);
}
function GetPercent(_0x58535b, _0x384ce5) {
  _0x58535b = parseFloat(_0x58535b);
  _0x384ce5 = parseFloat(_0x384ce5);
  if (isNaN(_0x58535b) || isNaN(_0x384ce5)) return "-";
  return _0x384ce5 <= 0 ? "0%" : Math.round(_0x58535b / _0x384ce5 * 100) + "%";
}
function check_complete() {
  var _0x408f2e = true;
  $.each($("tr.node_tr"), function () {
    var _0x377299 = $(this).attr("node");
    if ($("#send_" + _0x377299).text() != "100") {
      _0x408f2e = false;
      return false;
    }
  });
  return _0x408f2e;
}
function update_canvas(_0x3546a5, _0x11ad3e, _0x80b9ff) {
  var _0x14472f = document.getElementById("canvas_" + _0x3546a5),
    _0x8891b = _0x14472f.getContext("2d"),
    _0x11ad3e = _0x11ad3e - 1;
  if (_0x80b9ff >= 350) _0x8891b.fillStyle = "orange";else _0x80b9ff == "-1" ? _0x8891b.fillStyle = "red" : _0x8891b.fillStyle = "green";
  if (_0x80b9ff == "-1") {
    var _0x1a43a5 = 20;
  } else {
    var _0x1a43a5 = parseInt(_0x80b9ff / 15);
  }
  _0x1a43a5 < 1 && (_0x1a43a5 = 1);
  var _0x3c3d0d = _0x11ad3e * 2,
    _0x4170fa = 20 - _0x1a43a5;
  _0x8891b.fillRect(_0x3c3d0d, _0x4170fa, 2, _0x1a43a5);
}
function check_post(_0x4bdcf1, _0x38cc5c) {
  var _0x108fc7 = document.createElement("form");
  _0x108fc7.action = _0x4bdcf1;
  _0x108fc7.method = "post";
  _0x108fc7.style.display = "none";
  for (var _0x37802b in _0x38cc5c) {
    var _0x51a774 = document.createElement("textarea");
    _0x51a774.name = _0x37802b;
    _0x51a774.value = _0x38cc5c[_0x37802b];
    _0x108fc7.appendChild(_0x51a774);
  }
  document.body.appendChild(_0x108fc7);
  _0x108fc7.submit();
  return _0x108fc7;
}
function check_post_blank(_0x291c34, _0x3f322e) {
  var _0x1eb7c3 = document.createElement("form");
  _0x1eb7c3.action = _0x291c34;
  _0x1eb7c3.method = "post";
  _0x1eb7c3.target = Math.random() + "_blank";
  _0x1eb7c3.style.display = "none";
  for (var _0x23558a in _0x3f322e) {
    {
      var _0x31312f = document.createElement("textarea");
      _0x31312f.name = _0x23558a;
      _0x31312f.value = _0x3f322e[_0x23558a];
      _0x1eb7c3.appendChild(_0x31312f);
    }
  }
  document.body.appendChild(_0x1eb7c3);
  _0x1eb7c3.submit();
  return _0x1eb7c3;
}
function ping_button(_0x33e36e, _0x43d18b) {
  var _0x575b8d = $("#real_ip_" + _0x33e36e).text();
  _0x43d18b == "many" ? check_post_blank("/ping/" + _0x575b8d, {
    "mode": "many",
    "button_click": "yes"
  }) : check_post_blank("/ping/" + _0x575b8d, {
    "button_click": "yes"
  });
}
function tcping_button(_0x1c25e2, _0x879893) {
  var _0x207222 = $("#real_ip_" + _0x1c25e2).text();
  _0x879893 == "many" ? check_post_blank("/tcping/" + _0x207222, {
    "mode": "many",
    "button_click": "yes"
  }) : check_post_blank("/tcping/" + _0x207222, {
    "button_click": "yes"
  });
}
function tracert_button(_0x17c323) {
  var _0x47ba3d = $("#real_ip_" + _0x17c323).text();
  check_post_blank("/traceroute/" + _0x47ba3d, {
    "node": _0x17c323
  });
}
function http_button(_0x1d7527) {
  var _0x8cc91c = $("#real_ip_" + _0x1d7527).text();
  check_post_blank("/http/", {
    "host": _0x8cc91c
  });
}
function feedback_button(_0x3760d8) {
  var _0x2c0772 = $("#real_ip_" + _0x3760d8).text();
  check_post_blank("/help/feedback.php", {
    "ip": _0x2c0772
  });
}
function check_form(_0x1655c9) {
  var _0x353654 = $("#host").val();
  _0x353654 = _0x353654.split("/");
  _0x353654[2] ? _0x353654 = _0x353654[2] : (_0x353654 = $("#host").val().replace(/\//g, ""), _0x353654 = _0x353654.replace(/。/g, "."), _0x353654 = _0x353654.replace(/\\/g, ""), _0x353654 = _0x353654.replace(/：/g, ":"));
  var _0x5678cb = check_line();
  var _0x5730e3 = $("input[name='dns_server_type']:checked").val();
  var _0x1052c2 = $("#dns_server").val();
  if (_0x5730e3 == "custom" && isipv4(_0x1052c2) == false) return err_tip_more("<li>指定的DNS服务器必须是IPv4</li>"), false;
  if ($("#host").val() == "") return err_tip_more("<li>请输入检测目标（域名、IPv4）</li>"), false;
  _0x1655c9 == "many" ? check_post("/ping/" + _0x353654, {
    "line": _0x5678cb,
    "mode": "many",
    "button_click": "yes",
    "dns_server_type": _0x5730e3,
    "dns_server": _0x1052c2
  }) : check_post("/ping/" + _0x353654, {
    "line": _0x5678cb,
    "button_click": "yes",
    "dns_server_type": _0x5730e3,
    "dns_server": _0x1052c2
  });
}
function down_screenshot(_0x8192a9) {
  ad_hide();
  setTimeout(function () {
    $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
    $("#takeScreenshot").attr("disabled", true);
    domtoimage.toBlob(document.getElementById("screenshots")).then(function (_0x884eab) {
      window.saveAs(_0x884eab, _0x8192a9 + "_多地Ping值测试.png");
      unmosaic();
      $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
      $("#takeScreenshot").attr("disabled", false);
    });
  }, 10);
}
function copy_screenshot_tip() {
  layer.confirm("点击开始后，不要操作鼠标，保持当前页面获焦状态！<br><div class=\"mt-2 text-muted\">1、Firefox 需手动开启复制图片功能 > <a class=\"text-primary\" target=\"view_open_blank\" href=\"/article/content-278.html\">查看教程</a><br>2、少数浏览器不支持复制图片，请选择下载图片</div>", {
    "title": "",
    "anim": -1,
    "isOutAnim": false,
    "btnAlign": "c",
    "btn": ["<i class=\"feather icon-play\"></i> 开始复制截图"],
    "yes": function () {
      $(".layui-layer-btn0").text("正在生成截图 ···");
      $(".layui-layer-btn0").attr("disabled", true);
      $(".layui-layer-btn0").css("pointer-events", "none");
      $(".layui-layer-btn0").css("background-color", "#bbb");
      $(".layui-layer-btn0").css("border-color", "#bbb");
      copy_screenshot();
    },
    "cancel": function () {
      unmosaic();
    }
  });
}
function copy_screenshot() {
  ad_hide();
  setTimeout(function () {
    {
      $("#takeScreenshot").html("<div class=\"spinner-border spinner-border-sm\" role=\"status\"></div> 正在生成");
      $("#takeScreenshot").attr("disabled", true);
      var _0x11d6e2 = document.getElementById("screenshots");
      domtoimage.toPng(_0x11d6e2).then(function (_0x2e2650) {
        get_img(_0x2e2650.replace(/data:image\/png;base64,/g, ""));
      }).catch(function (_0x3f24c0) {
        console.error("oops, something went wrong!", _0x3f24c0);
      });
    }
  }, 10);
}
function get_img(_0x511609) {
  try {
    var _0x511609 = _0x511609;
    const _0x3157ce = convertBase64ToBlob(_0x511609, "image/png"),
      _0x5efb31 = new ClipboardItem({
        "image/png": _0x3157ce
      });
    navigator.clipboard.write([_0x5efb31]);
    $("#takeScreenshot").html("<i class=\"feather icon-camera\"></i> 完整截图");
    $("#takeScreenshot").attr("disabled", false);
    layer.msg("<i class=\"fas fa-check-circle text-success\"></i> 截图复制成功，可以粘贴到ＱＱ、Word等编辑器");
    unmosaic();
  } catch (_0x4f9177) {
    console.log(_0x4f9177);
  }
}
function convertBase64ToBlob(_0x306605, _0x95fc6d) {
  var _0x470700 = window.atob(_0x306605);
  var _0x108204 = new ArrayBuffer(_0x470700.length);
  var _0x2024af = new Uint8Array(_0x108204);
  for (var _0x5a9624 = 0; _0x5a9624 < _0x470700.length; _0x5a9624++) {
    _0x2024af[_0x5a9624] = _0x470700.charCodeAt(_0x5a9624);
  }
  return new Blob([_0x108204], {
    "type": _0x95fc6d
  });
}
function ad_hide() {
  $(".gg_link").remove();
  $(".address-hidden").css("max-width", "200px");
  $(".hover-button").addClass("d-none");
}
function mosaic() {
  $("input[name='mosaic']:checked").each(function (_0x11775f, _0x11c306) {
    if ($(this).val() == "ip") {
      $(".real_ip").addClass("mosaic");
      close_ip_list();
    } else $(this).val() == "address" && $(".ip_address").addClass("mosaic");
  });
}
function unmosaic() {
  $(".real_ip").removeClass("mosaic");
  $(".ip_address").removeClass("mosaic");
  $(".hover-button").removeClass("d-none");
}
function select_screenshot(_0xab9c50) {
  layer.open({
    "type": 1,
    "anim": -1,
    "title": "",
    "isOutAnim": false,
    "closeBtn": 2,
    "area": "350px",
    "content": "<div class=\"p-4\" style=\"background-color: #ecf0f5;\"> <div class=\"text-center\"> <div style=\"border: 1px dashed #4680ff;padding: 10px 0;height: 75px;display: flex;\"><i class=\"fas fa-chess-board\" style=\"font-size: 46px;padding: 3px 10px;color: #7c9eff;width: 70px;height: 70px;\"></i> <div><div><i class=\"fas fa-info-circle\" style=\"font-size:15px;\"></i>  哪些地方需要打码? (可选)</div> <div class=\"text-center mt-2\" style=\"display: inline-flex;\"><label class=\"custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"ip\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\" style=\" \"> 域名或IP</span> </label> <label class=\"ml-3 custom-control custom-checkbox done-task\"> <input type=\"checkbox\" name=\"mosaic\" value=\"address\" class=\"custom-control-input\"> <span class=\"custom-control-label text-secondary\"> 地理位置</span> </label> </div></div></div> <div class=\"mt-3\" style=\"display: inline-flex;\"><button class=\"btn btn-primary btn-sm\" onclick=\"mosaic();layer.closeAll();down_screenshot('" + _0xab9c50 + "')\" style=\"display: inline-block;\"><i class=\"feather icon-download\"></i> 下载截图</button> <button class=\"btn btn-primary btn-sm ml-4\" onclick=\"mosaic();layer.closeAll();copy_screenshot_tip();\" style=\" display: inline-block; \"><i class=\"feather icon-copy\"></i> 复制截图</button> </div> </div>   </div>"
  });
}
function isip(_0x227815) {
  var _0x147c25 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x147c25.test(_0x227815);
}
function create_websocket(_0x471b46, _0x1c8edf, _0x39c43d) {
  if ("WebSocket" in window) {
    ws = new WebSocket(_0x471b46);
    ws.onerror = function () {
      clearInterval(for_task);
      if (error_num < 1) return error_num++, setTimeout(() => {
        create_websocket(_0x471b46, _0x1c8edf, _0x39c43d);
      }, 2000), false;else {
        $.get("/public/ajax.php?type=error_feedback&task_id=" + _0x1c8edf);
        err_tip("WebSocket服务器连接失败，请重试 !");
        return false;
      }
    };
    ws.onopen = function () {
      ws.send("{\"task_id\":\"" + _0x1c8edf + "\",\"task_token\":\"" + md5(_0x1c8edf + "token_20230313000136kwyktxb0tgspm00yo5", 16) + "\"}");
    };
    ws.onmessage = function (_0x56dea5) {
      var _0x1fd3d8 = JSON.parse(_0x56dea5.data);
      _0x1fd3d8.type == "finished" && clearInterval(for_task);
      if (_0x39c43d == "once") {
        if (_0x1fd3d8.type == "node_error") {
          $("#real_ip_" + _0x1fd3d8.node_id).html("<i class=\"fas fa-minus-circle text-danger\"></i> 监测点异常");
          complete_node_num = complete_node_num + 1;
          if (complete_node_num > check_node_num) return false;
          complete_node_num == check_node_num && $(".checking").hide();
          var _0x2dc92d = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width:" + GetPercent(complete_node_num, check_node_num) + ";\" aria-valuenow=\"" + complete_node_num + "\" aria-valuemin=\"0\" aria-valuemax=\"" + check_node_num + "\">" + GetPercent(complete_node_num, check_node_num) + "</div>";
          $("#complete_progress").html(_0x2dc92d);
          return false;
        }
        ping_once(_0x1fd3d8);
      } else {
        if (_0x1fd3d8.type == "node_error") return false;
        ping_many(_0x1fd3d8.ip, _0x1fd3d8.address, _0x1fd3d8.node_id, _0x1fd3d8.result);
      }
    };
    ws.onclose = function () {};
    _0x39c43d == "many" && (for_task = setInterval(function () {
      ws.send("{\"task_id\":\"" + _0x1c8edf + "\",\"task_token\":\"" + md5(_0x1c8edf + "token_20230313000136kwyktxb0tgspm00yo5", 16) + "\"}");
    }, 1000));
  } else {
    err_tip("您的浏览器不支持WebSocket !");
  }
}
$(function () {
  var _0x23b142;
  $("#takeScreenshot").mouseover(function () {
    _0x23b142 = layer.tips("1、将关键数据截图并同时去除广告<br>2、可以选择指定数据进行打码处理<br>3、首次生成截图可能需要较长时间", "#takeScreenshot", {
      "tips": [1, "#6c757d"],
      "time": 0,
      "anim": -1,
      "tipsMore": true,
      "isOutAnim": false
    });
  });
  $("#takeScreenshot").mouseout(function () {
    layer.close(_0x23b142);
  });
  $("#host").bind("keyup", function (_0x4fd366) {
    _0x4fd366.keyCode == "13" && check_form(default_enter);
  });
});
function isipv4(_0x1ff714) {
  var _0x40a234 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return _0x40a234.test(_0x1ff714);
}