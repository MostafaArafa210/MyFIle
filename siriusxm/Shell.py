import subprocess,time


def httpx_run(input_file,output_file):
    subprocess.Popen(
        "cat {} | httpx -status-code -web-server -title -cname -t 50 -ports 8080,443,80,8888,5000,5555,51,53,57431,21,8443,8008,5543,5521,55571,21441,2222,5555,10000,4567,9100,1337,60001 -o {}".format(input_file,output_file),shell=True)
httpx_run("E:\MyFIle\siriusxm\domins.txt","E:\MyFIle\siriusxm\livedomain.txt")