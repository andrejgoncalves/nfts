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
Knowing that SOL = 90$ and ETH = 2660$, then SOL to ETH ratio =  1:30

Hypothesis testing:
  H0 - total volume of SOL divided by total volume of ETH > ratio; 
  H1 - total volume of SOL divided by total volume of ETH <= ratio
