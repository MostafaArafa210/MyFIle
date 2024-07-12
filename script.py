import subprocess,sys,pyfiglet,os
global inpu 
global out
def banner():
    text = pyfiglet.figlet_format("linkfinder")
    print(
        """ Author by  : \u001B[31m Max0x 
            \u001B[1m New Tool In linkfinder
            \u001B[34m{}
            \u001B[32m Version : 1.0
        """.format(text))

def linkfinder():
    
        try:
            dir= r"E:\\MyFIle\\TransUnion_LLC\\js"
            listdir = os.listdir(dir)
            for i in listdir :
                    cd=subprocess.run("['py','E:\\Tools\\LinkFinder\\linkfinder.py','-i','{}','-o','cli']".format(i))
                    print("Error-Her" + str(cd.stdout))
        except OSError as err:
            print(err)
            
if __name__ == "__main__":
    banner()
    linkfinder()