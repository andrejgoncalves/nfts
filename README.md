# Project Roadmap

* **Step 1**: 
*    * select data sources:
        * [opensea](https://opensea.io/) for ethereum NFTs  
        * [solsea](https://solsea.io/collection-statistics) - for solana NFTs

* **Step 2**:  
extract data for the NFTs with the highest transactional volume in the last 30days (as of March22)
  * data from solsea extracted using [selenium](https://www.selenium.dev/)
  * data from opensea extracted via [API](https://docs.opensea.io/reference/api-overview)

* **Step 3**: 
data wragling with pydata stack 

* **Step 4**: 
Hypothesis testing: knowing that SOL <100$ and ETH >2500$ (as of March22), then:

  H0 - growth in SOL collections greater than ETH ; 
  H1 - growth in SOL collections less than or equal ETH

* **Step 5**: 
Build a [tableau viz](https://public.tableau.com/app/profile/andrejgoncalves/viz/nfts_market/marketplaces?publish=yes) with relevant info

![image](https://user-images.githubusercontent.com/56920684/157866463-8e0921e1-f266-416b-9029-9311ae456045.png)


Notes: 

opensea logo and colour palette can be found in this [source](https://docs.opensea.io/docs/logos)

