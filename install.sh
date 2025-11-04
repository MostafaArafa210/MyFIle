#!/bin/bash
GO_Install () {
    
    verf_go=$(command -V go > /dev/null ; echo $?)
    if [ "${verf_go}" -ne 0 ]  ;
    
    then
        sudo apt install -y golang
    else
        go version
    fi
    
}
GO_Install

mangement_tool () {
    TOOL1="subfinder,nuclei,alterx,notify,shuffledns,asnmap,naabu,urlfinder,katana,dnsx"
    verf_ptdm=$(which pdtm > /dev/null ; echo $?)
    if  [[ "${verf_ptdm}" -ne 0 ]] ;
    then
        go install -v github.com/projectdiscovery/pdtm/cmd/pdtm@latest
        echo export GOPATH="$HOME/go" >> ~/.zshrc
        echo export PATH="$PATH:$GOPATH/bin" >> ~/.zshrc
    else
        pdtm -version
        read -rp "Need Install All Tool ? Y/N " input
        if [ "${input}" == "Y" ] ; then
            pdtm -i "${TOOL1}"
        else
            echo "Usage pdtm -i <ToolName> "
        fi
        
    fi
}

mangement_tool

python_Install () {
    verf_python=$(command -V python3 > /dev/null ; echo $?)
    if [ "${verf_python}" -ne 0 ]  ;
    then
        sudo apt install -y python3
    else
        python --version
    fi
}

python_Install

verf_httpx=$(command -V httpx-toolkit > /dev/null ; echo $?)
if [ "${verf_httpx}" -ne 0 ]  ;

then
    sudo apt install -y httpx-toolkit
else
    httpx-toolkit --version
fi

verf_nmap=$(command -V nmap > /dev/null ; echo $?)
if [ "${verf_nmap}" -ne 0 ]  ;

then
    sudo apt install -y nmap
else
    nmap --version
fi

verf_paramspider=$(command -V paramspider > /dev/null ; echo $?)
if [ "${verf_paramspider}" -ne 0 ]  ;

then
    sudo apt install -y paramspider
else
    paramspider --help
fi

verf_arjun=$(command -V arjun > /dev/null ; echo $?)
if [ "${verf_arjun}" -ne 0 ]  ;

then
    sudo apt install -y arjun
else
    arjun --help
fi

verf_assetfinder=$(command -V assetfinder > /dev/null ; echo $?)
if [ "${verf_assetfinder}" -ne 0 ]  ;

then
    sudo apt install -y assetfinder
else
    assetfinder --help
fi



