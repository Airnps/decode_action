#2024-07-27 15:55:35
Withdrawal_auto=True
Withdrawal_amount=0.3
import requests
import os
import time
import random
import re
import json
from urllib.parse import urlparse
code="xzb"
ver="1.3.0"
def version():
 try:
  print(requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/pubilc.txt").text)
  url=f"http://101.132.127.171/api/huaji/?version={ver}&code={code}"
  r=json.loads(requests.get(url).text)
  if "error" in r:
   print(r)
  if r["ok"]:
   if r["update"]:
    print(f"🎉️有新版本请更新,当前版本:{ver},最新版本:",r["latest_version"])
    exit()
   else:
    print(f"🎉️当前版本为最新版本,当前版本:{ver},最新版本:",r["latest_version"])
    print("🎉️更新日志:",r["data"]["update_note"])
  else:
   print("🎉️更新日志:",r["data"]["update_note"])
   print("脚本已关闭")
   exit()
 except:
  print("貌似发生了什么错误")
  exit()
def getpoxry():
 time.sleep(2)
 url=''
 if not url:
  url=os.getenv("yuanshen_xzb_porxy")
 if not url:
  print("获取不到代理,请检测是否填写代理api地址")
  return
 r=requests.get(url)
 if r.status_code==200:
  print("获取代理成功")
  return r.text.replace("\r\n","")
 else:
  print("获取代理失败")
  exit()
class yuanshen():
 def __init__(self,cookie)->None:
  self.readfrequency=0
  try:
   self.cookie=cookie.split("#")[0]
   self.userid=cookie.split("#")[1]
   self.realname=cookie.split("#")[2]
  except:
   print("貌似发生了什么错误 CK填对了吗？孩子")
   exit()
  self.phone=cookie.split("#")[3]if len(cookie.split("#"))==4 else ""
  if self.phone=="":
   print("当前账号提现模式:微信提现")
   self.wx=True
  else:
   self.wx=False
   print("当前账号提现模式:支付宝提现")
  self.porxy=getpoxry()
  if not self.porxy:
   self.proxies=False
  else:
   self.porxy={'http':f'http://{self.porxy}','https':f'https://{self.porxy}'}
   self.proxies=True
  self.url=f"http://{self.userid}.start.cmgjdlsowxsa.asia"
  self.headers={"Host":f"{self.userid}.start.cmgjdlsowxsa.asia","Connection":"keep-alive","Content-Length":"0","Accept":"application/json, text/plain, */*","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220033 MMWEBSDK/20240301 MMWEBID/98 MicroMessenger/8.0.48.2580(0x28003036) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","Origin":f"{self.url}","X-Requested-With":"com.tencent.mm","Referer":f"{self.url}/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"{self.cookie}"}
  if self.getreadurl():
   exit()
  self.headers2={"Host":f"{self.domain}","Connection":"keep-alive","Cache-Control":"max-age=0","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220033 MMWEBSDK/20240301 MMWEBID/98 MicroMessenger/8.0.48.2580(0x28003036) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Referer":f"{self.readurl}","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"{self.cookie}"}
  self.headers3={"Host":"api.jianyuekeji.cn","Connection":"keep-alive","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20240301 MMWEBID/5295 MicroMessenger/8.0.48.2580(0x28003036) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","Accept":"*/*","X-Requested-With":"com.tencent.mm","Sec-Fetch-Site":"cross-site","Sec-Fetch-Mode":"no-cors","Sec-Fetch-Dest":"script","Referer":f"http://{self.userid}.read.jfeigms5de.asia/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"}
 def getreadurl(self):
  url=f"{self.url}/read.link.index"
  r=requests.post(url,headers=self.headers).json()
  if r['code']==200:
   self.readurl=r['data']
   parsed_url=urlparse(url)
   self.domain=f"{parsed_url.netloc}"
   print(f"🎉️获取阅读域名成功[{self.readurl}]")
  else:
   print(f"⛔️获取阅读域名失败:[{r['msg']}]")
   return True
  time.sleep(random.randint(2,5))
 def read(self):
  r=requests.get(self.readurl,headers=self.headers2)
  if r.status_code==200:
   rule=r'https://api\.jianyuekeji\.cn/api/getJsDomain/[^"]+'
   m=re.search(rule,r.text)
   rule2=r'axios\.post\("([^"]+)"'
   m2=re.search(rule2,r.text)
   if m and m2:
    self.url2=m.group(0)
    self.posturl=m2.group(1)
    r=requests.get(self.url2,headers=self.headers3)
    if r.status_code==200:
     rdata=r.text.replace("var _nbackurl = '","").replace("';","")
     self.articleurl=rdata
     data={"data_id":"","link_url":f"{self.articleurl}"}
     if self.proxies:
      try:
       r=requests.post(self.posturl,headers=self.headers2,json=data,proxies=self.porxy,timeout=6).json()
      except:
       print("阅读出错，尝试重新获取代理")
       self.porxy=getpoxry()
       self.porxy={'http':f'http://{self.porxy}','https':f'https://{self.porxy}'}
       return
     else:
      r=requests.post(self.posturl,headers=self.headers2,json=data).json()
     if r['code']==200:
      self.readfrequency+=1
      print(f"🎉️第[{self.readfrequency}]次阅读成功")
      if r['data']['status']==2:
       print(f"🎉️阅读完成！[{r['msg']}]")
       return True
     else:
      print(f"⛔️第[{self.readfrequency}]次阅读失败[{r['msg']}]")
      return True
    else:
     print("⛔️获取文章失败")
     return True
   else:
    print("⛔️匹配阅读接口 ERROR:1")
    return True
  else:
   print("⛔️获取阅读接口 ERROR:2")
   return True
 def uesrinfo(self):
  url=f"{self.url}/wallet"
  r=requests.get(url,headers=self.headers)
  if r.status_code==200:
   rule=r'<div class="balance-title-text" id="exchange_money" data-money="([^"]+)">'
   match=re.search(rule,r.text)
   if match:
    self.balance=match.group(1)
    print(f"💰用户ID:[{self.userid}]  当前余额:[{self.balance}]")
    if float(self.balance)>=Withdrawal_amount:
     if Withdrawal_auto:
      if self.wx:
       url=f"{self.url}/wallet.encash.wechat"
       data={"real_name":f"{self.realname}","idcard":"","alipay_account":"","money":f"{self.balance}"}
       r=requests.post(url,headers=self.headers,json=data).json()
      else:
       url=f"{self.url}/wallet.encash.alipay"
       data={"real_name":f"{self.realname}","idcard":"","alipay_account":f"{self.phone}","money":f"{self.balance}"}
       r=requests.post(url,headers=self.headers,json=data).json()
      if r['code']==200:
       print(f"💰提现成功:[{r['msg']}]")
      else:
       print(f"⛔️提现失败:[{r['msg']}]")
     else:
      print("不给自动提现，自己手动导导管子吧")
    else:
     print(f"金额不足[{Withdrawal_amount}]，提现你妹")
   else:
    print("获取用户信息失败 ERROR:2")
  else:
   print("获取用户信息失败 ERROR:1")
 def main(self):
  while True:
   if self.read():
    break
   time.sleep(random.randint(8,15))
  print("=============================")
  self.uesrinfo()
if __name__=='__main__':
 version()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_xzb")
  if not cookie:
   print("⛔️请设置环境变量:yuanshen_xzb")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 i=1
 for cookie in cookies:
  print(f"\n--------开始第{i}个账号--------")
  main=yuanshen(cookie)
  main.main()
  print(f"--------第{i}个账号执行完毕--------")
  i+=1
