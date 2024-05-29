#! /bin/bash

declaer -A seen_sizes 

while IFS= read -r line; do 
     size=$(echo "$line" | grep -oP 'Words: \K\d+') 
     if [[ -z "${seen_sizes[$size]}" ]]; then
     echo "$line" 
        seen_sizes[$size]=1 
      fi
done



for i in $(cat /home/max0x/MyFIle/Assrunat/live.txt); do fuff -u $i/FUZZ -w /home/max0x/OneListForAll/onelistforallmicro.txt | tee -a /home/max0x/MyFIle/Assrunat/out.txt | UniFuff.sh | cat out.txt | notify -p discord -id Fuzz -bulk | rm out.txt ; done

ffuf -u https://www.greengadgetstradein.net.au -w /home/max0x/OneListForAll/onelistforallmicro.txt |UniFuff.sh 


for i in $(cat ~/MyFIle/Assrunat/live.txt); do ffuf -c  -u $i/FUZZ -w ~/OneListForAll/onelistforallshort.txt ;done

ffuf -u https://www.greengadgetstradein.net.au/FUZZ -w /home/max0x/OneListForAll/onelistforallmicro.txt  | UniFuff.sh | tee out.txt ; done | notify -data out.txt -p discord -id api -bulk


while IFS= read -r url; do
    ffuf -u "$url/FUZZ" -w ~/OneListForAll/onelistforallmicro.txt | ~/UniFuff.sh | tee -a ~/out.txt
done < ~/MyFile/Assrunat/live.txt