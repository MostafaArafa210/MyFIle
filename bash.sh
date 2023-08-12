#! /bin/bash
for i in $(cat /H.txt);do
    curl -k -s -o /dev/null -iL -w "%{http_code}","%{size_download}" $1$i$2
    echo "  --> ${1} ${i} ${2}"
done;