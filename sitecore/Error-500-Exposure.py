import requests as req 
from colorama import Fore
import urllib3
import json

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def Exposure_error():
    url = "https://uat-production.ordercloud.io/v1/"
    with open("E:\MyFIle\sitecore\endpoints.txt","r") as file:
        read = file.readlines()
        for end_point in read :
            data = {"\r\n"
                "Usernname":"admin",
                "ID":25,
                "ApiKey":"tetapi",
                "ClientID":"12251669851-88411254",
                "Secret":"12251669851",
            }
            Header = {
                    "Content-Type":"application/json",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0",
                    "Connection": "keep-alive","Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"}
            Proxes = {"https://":"127.0.0.1:8080","http://":"127.0.0.1:8080"}
            Full_Url  = url + end_point.strip()
            print(Full_Url)
            new_req = req.post(Full_Url,data=json.dumps(data),headers=Header,verify=False)
            resp = new_req
            if "SqlException:" in resp.text and resp.status_code == 500 :
                data = json.loads(resp.text)
                print(f" Exposure Data Leak   =>: {data} : {Fore.BLUE} {resp.status_code}")
            else : 
                print(F" End-Point-Not-Valun => : {Fore.GREEN} {resp.status_code}")

            

Exposure_error()