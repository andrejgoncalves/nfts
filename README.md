# NFTs - markeplaces project

Step1:
select datasource for solana and ethereum networks (solsea and opensea)

Step2: 
extract data for the NFTs with highst voilume - last 30days

- data from solsea extracted using selenium
- data from opensea extracted via API

Step2: 
clean data and compare both dataframes

Step3:
Knowing that SOL <100$ and ETH >2500$ (price in Mar2022) , then hypothesis testing:

  H0 - growth in SOL collections greater than ETH ; 
  H1 - growth in SOL collections less than or equal ETH
