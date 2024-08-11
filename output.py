#2024-08-11 08:52:00
import os
import requests
import time
import random
import re
from urllib.parse import urlparse,parse_qs,quote
from functools import wraps
import json
import threading
from concurrent.futures import ThreadPoolExecutor,as_completed
ver="2.0.0"
code="yuer"
lock=threading.Lock()
def printf(m):
 with lock:
  print(m)
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
  print("貌似发生了什么错误 ERROR:远程公告 请检测是否为最新版本或您的ip已被风控系统拉黑")
  exit()
def get_setting():
 global list
 list=requests.get("https://gitee.com/HuaJiB/yuanshen34/raw/master/yuernum.txt").text
 list=list.split(",")
 list=[int(i)for i in list]
 print(f"🎉️从云服务器加载强检配置成功:{list}")
def retry(exceptions,tries=5,delay=2,backoff=2):
 def decorator(func):
  @wraps(func)
  def wrapper(*args,**kwargs):
   _tries,_delay=tries,delay
   while _tries>1:
    try:
     return func(*args,**kwargs)
    except exceptions as e:
     print(f"发生错误:[{e}], Retrying in {_delay} ...")
     time.sleep(_delay)
     _tries-=1
     _delay*=backoff
   try:
    return func(*args,**kwargs)
   except:
    print("重试了还失败。重开得了")
  return wrapper
 return decorator
class yuanshen():
 def __init__(self,cookie,num)->None:
  self.num=num
  self.cookie=cookie
  self.num_list=list
  if "PHPSESSID" in self.cookie:
   printf("ck格式错误呆瓜，PHPSESSID=不要给我放进去，ok？")
   exit()
  self.biz_=["MzA3MjU0NTgxOA==","MjM5MTg1NzE1OQ==","Mzk0NjIxMjA4Ng==","MzA3NDY5NzkwMQ==","MzkwMTUxODM3MA==","MzAxNzMyNzc1Mg==","MjM1NDQ5NjE0MQ==","MzA4MDQ5MTY5Ng==","MzU0MDA1MjMzNQ==","Mzg4Nzg3MDM0NQ==","MjM5Njk0OTUyMg==","MzIwOTU3MTIzOA==","MjM5MjY4NTY4NA==","Mzk0MzYxMzE3MQ==","MzA0MjQzNDYyMQ==","MzczNjM2MDA0Mw==","MzI2MzQxNTAxMQ==","MzA3NDI4MTE2MQ==","MzA5MjkwNjg4MA==","MzA5MTYzNTAzNA==","MzkzNTQ0NDcxNA==","MzIyMTU4NjI1Nw==","MzE0NDYzMjQ5Mw==","MzU2MjUzOTQ5MQ==","MzkwMDUwNzEwNA==","MzA5ODk1NTc4Nw==","Mzg5Njc0Mjk5MA==","MzgzMjAwMDUwNw==","MzIxNjM4NzkwMA==","MzQwNTAwNDg4OQ==","Mzg5NDg4MjE2Nw==","MzkzMTQ0NDcxNA==","MzAwMjExMzQ3Mg==","Mzg4OTkwMDQyMw==","MzM5NDIzMTk5Nw==","MzA0MjQzNDYyMQ==","Mzk1ODMzNjAxMg==","MzkyMTM4NTI0MA==","MzAwOTc4MzAxMA==","Mzg5NjY0NzEyNQ==","MzU1OTI5Njg5Nw==","MzUzMTczMjUyOA==","MzA1NzM0Nzk0Mw==","MzM5NDQwODQ0MQ==","MzUwOTgxMzQxNg==","Mzg0NDIyMjE1Mg==","Mzk1MzEzMTcwMQ==","MzA3OTgyOTgzMg==","MzU5NTk2NDEwNw==","MzU5NDY4OTEyNw==","MzU1NzcwOTY5NA==","MzUxNzQ0NTM0OA==","Mzg2Njg2NjI3OQ==","MjM5NDE1NDc0OQ==","MzA5MzY4MDIzNg==","MjM5MzE5OTI2Mg==","MzAxMTY3Mjc4NQ==","Mzg2ODU4MjU5NQ=="]
 @retry(exceptions=Exception,tries=5,delay=2,backoff=2)
 def getmain(self):
  headers={"Host":"h5.5rjb1a5u3w6.cn","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220053 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  url="http://h5.5rjb1a5u3w6.cn/pipa_read?upuid=1453966"
  r=requests.get(url,headers=headers,allow_redirects=False)
  redirect_url=r.headers.get('Location')
  self.mainurl=urlparse(redirect_url).netloc
  printf(f"🎉️第[{self.num}]个账号获取到主域名[{self.mainurl}]")
 def readnum(self):
  try:
   url=f"http://{self.mainurl}/pipa_read/"
   r=requests.get(url,headers=self.h3).text
   match=re.search(r'今日已读(\d+)篇',r)
   if match:
    return int(match.group(1))
   else:
    printf(f"第[{self.num}]个账号获取已读文章数失败")
  except Exception as e:
   printf(f"第[{self.num}]个账号获取已读文章数失败{e}")
   return None
 def tuisong(self):
  url=f"https://wxpusher.zjiecode.com/api/send/message/?appToken={appToken}&topicId={topicIds}&content=检测文章%0A请在20秒内完成验证!%0A%3Cbody+onload%3D%22window.location.href%3D%27{quote(self.readurl)}%27%22%3E"
  r=requests.get(url).json()
  printf(f"🎉️第[{self.num}]个账号检测文章推送结果{r}")
 def getdoamin(self):
  url=f"http://{self.mainurl}/read_task/ggg3"
  r=requests.get(url,headers=self.h).json()
  j=urlparse(r['jump'].replace('\\',''))
  self.domain,p=j.netloc,parse_qs(j.query)
  self.iu=p.get('iu')[0]if p.get('iu')else ''
  printf(f"🎉️第[{self.num}]个账号获取到阅读域名[{self.domain}][{self.iu}]")
 def read(self):
  num=self.readnum()
  jkey=None
  while True:
   r=random.random()
   if jkey is None:
    url=f"http://{self.domain}/read_task/do_read?iu={self.iu}&type=7&pageshow=&r={r}"
   else:
    url=f"http://{self.domain}/read_task/do_read?iu={self.iu}&type=7&pageshow=&r={r}&jkey={jkey}"
   r=requests.post(url,headers=self.h2).json()
   try:
    jkey,self.readurl=r['jkey'],r['url']
    k=urlparse(self.readurl)
    printf(f"✅️第[{self.num}]个账号获取文章成功[{self.readurl}]")
    biz=parse_qs(k.query).get('__biz',[''])[0]if '__biz' in parse_qs(k.query)else ''
    if biz not in self.biz_:
     if num in self.num_list:
      printf(f"第[{self.num}]个账号遇到强检文章，推送ing...")
      self.tuisong()
      time.sleep(random.randint(20,30))
     else:
      time.sleep(random.randint(10,15))
    else:
     printf(f"第[{self.num}]个账号遇到检测文章，推送ing...")
     self.tuisong()
     time.sleep(random.randint(20,30))
    printf(f"🎉️第[{self.num}]个账号第[{num}]篇文章阅读成功！")
    num+=1
   except:
    printf(f"⛔️第[{self.num}]个账号第[{num}]篇文章阅读失败！大概是本轮已经读完了，一小时再来运行俺")
    try:
     printf(f"⛔️第[{self.num}]个账号阅读失败原因：[{r['url']}]")
     url=f"http://{self.domain}/read_task/finish?iu={self.iu}&type=7&type=7&upuid=&_t=799888"
     r=requests.get(url,headers=self.h2)
     if r.status_code==200:
      printf(f"✅️第[{self.num}]个账号阅读任务完成！")
     else:
      printf(f"⛔️第[{self.num}]个账号阅读任务完成失败！")
     break
    except:
     printf(f"⛔️第[{self.num}]个账号阅读任务完成失败！未知错误")
 @retry(exceptions=Exception,tries=5,delay=2,backoff=2)
 def userinfo(self):
  h={"Host":f"{self.mainurl}","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220053 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Referer":f"http://{self.mainurl}/pipa_read/user/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  url=f"http://{self.mainurl}/withdrawal"
  r=requests.get(url,headers=h).text
  m=re.compile(r'<p class="withdraw-main-myinfo-money"><span>([\d\.]+)</span>')
  match=m.search(r)
  if match:
   printf(f"💰️第[{self.num}]个账号当前余额：[{float(match.group(1))/100}]")
   if float(match.group(1))/100>=withdrawal_money:
    url=f"http://{self.mainurl}/withdrawal/submit_withdraw"
    data={"channel":"wechat","money":f"{match.group(1)}"}
    r=requests.post(url,data=data,headers=self.h_2).json()
    if r['code']==0:
     printf(f"🎉️第[{self.num}]个账号提现[{float(match.group(1))/100}]成功[{r['msg']}]！")
    else:printf(f"⛔️第[{self.num}]个账号提现失败[{r['msg']}]！")
   else:printf(f"⛔️第[{self.num}]个账号当前余额不足[{withdrawal_money}],无法提现")
  else:printf(f"⛔️第[{self.num}]个账号获取余额失败！")
 def main(self):
  self.getmain()
  self.h={"Host":f"{self.mainurl}","Connection":"keep-alive","Accept":"*/*","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220053 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","X-Requested-With":"XMLHttpRequest","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  self.h_2={"Host":f"{self.mainurl}","Connection":"keep-alive","Content-Length":"25","Accept":"*/*","X-Requested-With":"XMLHttpRequest","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220053 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","Content-Type":"application/x-www-form-urlencoded","Origin":f"http://{self.mainurl}","Referer":f"http://{self.mainurl}/withdrawal","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  self.getdoamin()
  print("======================")
  self.h2={"Host":f"{self.domain}","Connection":"keep-alive","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/122.0.6261.120 Mobile Safari/537.36 XWEB/1220053 MMWEBSDK/20240404 MMWEBID/98 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","X-Requested-With":"XMLHttpRequest","Accept":"*/*","Referer":f"http://{self.domain}/read_task/read?iu={self.iu}&type=7","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  self.h3={"Host":f"{self.mainurl}","Connection":"keep-alive","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Linux; Android 13; 23054RA19C Build/TP1A.220624.014; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160117 MMWEBSDK/20240404 MMWEBID/9158 MicroMessenger/8.0.49.2600(0x2800313B) WeChat/arm64 Weixin NetType/5G Language/zh_CN ABI/arm64","Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/tpg,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7","X-Requested-With":"com.tencent.mm","Referer":f"http://{self.mainurl}/pipa_read/user/","Accept-Encoding":"gzip, deflate","Accept-Language":"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7","Cookie":f"PHPSESSID={self.cookie}"}
  self.read()
  print("======================")
  self.userinfo()
  print("===================")
if __name__=='__main__':
 appToken=""
 topicIds=""
 version()
 get_setting()
 if not appToken:
  appToken=os.getenv("yuanshen_apptoken")
  if not appToken:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_apptoken")
   exit()
 if not topicIds:
  topicIds=os.getenv("yuanshen_topicid")
  if not topicIds:
   print("❌你还没有设置推送,请设置环境变量:yuanshen_topicid")
   exit()
 cookie=''
 if not cookie:
  cookie=os.getenv("yuanshen_yuer")
  if not cookie:
   print("请设置环境变量:yuanshen_yuer")
   exit()
 cookies=cookie.split("@")
 print(f"一共获取到{len(cookies)}个账号")
 if max_threads!=1:
  tasks=[]
  num=1
  with ThreadPoolExecutor(max_workers=max_threads)as executor:
   futures=[]
   for ck in cookies:
    task=yuanshen(ck,num)
    future=executor.submit(task.main)
    futures.append(future)
    time.sleep(10)
    num+=1
   results=[future.result()for future in as_completed(futures)]
  print("所有任务执行完毕")
 else:
  i=1
  for cookie in cookies:
   printf(f"\n--------开始第{i}个账号--------")
   main=yuanshen(cookie,i)
   main.main()
   printf(f"--------第{i}个账号执行完毕--------")
   time.sleep(20)
   i+=1
