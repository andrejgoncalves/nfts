# NFTs - markeplaces project

Step1:
select datasource for solana and ethereum networks (solsea and opensea)

Step2: 
extract data for the NFTs with the highest transactional volume in the last 30days (as of March22)

- data from solsea extracted using selenium
- data from opensea extracted via API

Step2: 
clean data and compare both dataframes

Step3:
Knowing that SOL <100$ and ETH >2500$ (as of March22) , then hypothesis testing:

  H0 - growth in SOL collections greater than ETH ; 
  H1 - growth in SOL collections less than or equal ETH

Step4:
Build a [tableau viz](https://public.tableau.com/app/profile/andrejgoncalves/viz/nfts_market/marketplaces?publish=yes) with relevant info

![image](https://user-images.githubusercontent.com/56920684/157866463-8e0921e1-f266-416b-9029-9311ae456045.png)


Notes: 

opensea logo source: https://docs.opensea.io/docs/logos and colour palette ("hacked" usign https://help.tableau.com/current/pro/desktop/en-us/formatting_create_custom_colors.htm)
solsea logo source: hard coded with similar colour palette
