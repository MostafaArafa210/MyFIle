for url in $(cat /home/max0x/MyFIle/my_Work/Guggenheim/brute.txt); do ffuf -w /usr/share/seclists/Discovery/Web-Content/dirsearch.txt -u $url/FUZZ -H "X-Forwarded-For:127.0.0.1" -fc 403,404,401  ; done 