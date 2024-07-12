for url in $(cat /MyFIle/my_Work/redox/main.txt);do
	subfinder -d $url | tee -a /MyFIle/my_Work/redox/maindomain.txt
done
