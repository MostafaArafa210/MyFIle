import requests,pyfiglet
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

def banner():
    text = pyfiglet.figlet_format("Js-Req")
    print(
        """ Author by  : \u001B[31m Max0x 
            \u001B[1m New Tool In request
            \u001B[34m{}
            \u001B[32m Version : 1.0
        """.format(text))

def req_java():
    try:
        input1 = input("Enter-Path-Link-Js => : ")
        with open(input1,"r") as f :
            for i in f : 
                url= requests.request('GET',"{}".format(str(i)),stream=True,allow_redirects=True,verify=True)
                print("\u001B[1mStatus-Code => : "+str( url.status_code))   
                # print("\u001B[5mTitle => : "+str(url.headers.values))   

    except OSError as msg: 
        print(msg)
    finally:
        print("printPathHer")

if __name__ == "__main__":
    banner()
    req_java()

    # E:\MyFIle\TransUnion_LLC\Domain.txt