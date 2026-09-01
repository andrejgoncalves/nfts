# NFT Market Analysis: Ethereum vs Solana Growth Dynamics

A comparative analysis of NFT market growth across Ethereum and Solana blockchains, examining market structure, transaction patterns, and growth drivers.

## 📊 Project Overview

This research project investigates how two major blockchain networks have captured NFT market share and identifies the key factors driving adoption and trading activity. The analysis combines on-chain data, market metrics, and network economics to understand ecosystem dynamics.

**Research Questions:**
- How did Ethereum and Solana's NFT markets diverge in growth trajectories?
- What network characteristics drive user adoption and trading volume?
- How do transaction costs, speed, and ecosystem maturity affect market participation?

## 🔍 Key Findings

- **Market Dynamics**: Detailed breakdown of NFT volume, user base, and trading activity across chains
- **Economics Impact**: Cost structure analysis showing Solana's transaction fee advantage and trade-off implications
- **Ecosystem Maturity**: Comparative analysis of marketplace fragmentation, tooling, and developer activity
- **Growth Patterns**: Identification of adoption cycles and speculative vs. utility-driven trading periods

## 📁 Repository Structure

```
├── data/                    # Raw and processed datasets
│   ├── ethereum_nft_data/  # Ethereum blockchain queries & exports
│   ├── solana_nft_data/    # Solana blockchain queries & exports
│   └── csv/                # Cleaned, aggregated datasets
├── jupyter/                # Analysis notebooks
│   ├── data_exploration.ipynb
│   ├── market_comparison.ipynb
│   └── network_analysis.ipynb
├── images/                 # Charts, visualizations, figures
├── code_snippets/          # Reusable analysis functions
└── .DS_Store
```

## 🛠️ Tech Stack

- **Data Collection**: Blockchain APIs (Etherscan, Solscan), public datasets
- **Analysis**: Python (Pandas, NumPy)
- **Visualization**: Matplotlib, Seaborn
- **Notebooks**: Jupyter
- **Data Storage**: CSV exports, local checkpoints

## 🚀 How to Use

1. **Explore the data**: Start with `/jupyter/data_exploration.ipynb` for an overview
2. **Deep dive**: See `/jupyter/market_comparison.ipynb` for side-by-side analysis
3. **View findings**: Check `/images/` for key visualizations
4. **Reuse code**: Reference `/code_snippets/` for data cleaning and aggregation patterns
5. **Interactive Dashboard**: View the [Tableau visualization](https://public.tableau.com/app/profile/andrejgoncalves/viz/nfts_market/marketplaces?publish=yes)

## 📋 Project Roadmap

* **Step 1**: 
    * select data sources:
        * [opensea](https://opensea.io/) - for ethereum NFTs  
        * [solsea](https://solsea.io/collection-statistics) - for solana NFTs
* **Step 2**: 
    * extract data for the NFTs with the highest transactional volume in the last 30days (as of March22):
        * data from solsea extracted using [selenium](https://www.selenium.dev/)
        * data from opensea extracted via [API](https://docs.opensea.io/reference/api-overview)
* **Step 3**: 
   * data wrangling with pydata stack 
* **Step 4**: 
   * Hypothesis testing: knowing that SOL <100$ and ETH >2500$ (as of March22), then:
      * H0 - growth in SOL collections lesser than ETH 
      * H1 - growth in SOL collections greater than or equal ETH
* **Step 5**: 
   * Build a [tableau viz](https://public.tableau.com/app/profile/andrejgoncalves/viz/nfts_market/marketplaces?publish=yes) with relevant info

![NFT Market Analysis](https://user-images.githubusercontent.com/56920684/157866463-8e0921e1-f266-416b-9029-9311ae456045.png)

**Notes**: OpenSea logo and colour palette can be found in this [source](https://docs.opensea.io/docs/logos)

## 📈 Key Metrics Analyzed

- **Trading Volume**: Daily/weekly/monthly transaction counts and USD value
- **Active Users**: Unique wallet addresses, transaction frequency
- **Fee Economics**: Average transaction costs and impact on trading behavior
- **Market Concentration**: Marketplace share, collection diversity
- **Network Health**: Transaction latency, confirmation times, ecosystem growth

## 💡 Insights for Practitioners

This analysis is useful for:
- **Investors**: Understanding market selection and timing across chains
- **Developers**: Choosing deployment targets based on user adoption and economics
- **Platforms**: Identifying market gaps and opportunity areas
- **Researchers**: Understanding blockchain network effects and adoption patterns

## 📝 Notes

- Data reflects conditions up to the analysis date (see commit history)
- Analysis focuses on on-chain metrics; market sentiment/social data not included
- Solana network outages during 2021-2022 period noted in findings
- Market highly cyclical; results should be contextualized by time period

## 📧 Questions?

This was a research project to understand blockchain market dynamics. Findings and methodologies are available for discussion.

---

**Last Updated**: See commit history  
**Data Coverage**: See individual notebooks for exact ranges
