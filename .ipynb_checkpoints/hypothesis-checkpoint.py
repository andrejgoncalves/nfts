#!/usr/bin/env python
# coding: utf-8
# %%
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


# %%
opensea = pd.read_csv("/Users/jungle/Documents/GitHub/nfts/csv/opensea.csv")


# %%
solsea = pd.read_csv("/Users/jungle/Documents/GitHub/nfts/csv/solsea.csv")


# %%
solsea.drop('Unnamed: 0', axis=1, inplace=True)


# %%
#solsea_sample = solsea.sample(15)
solsea = solsea.dropna()
solsea['Growth in %'] = solsea.apply(lambda row: row['30dAvg Price']  / row['Floor Price'] * 100 , axis=1).round(2)
solsea.head()


# %%
#opensea_sample = opensea.sample(15)
opensea = opensea.dropna()
opensea['Growth in %'] = opensea.apply(lambda row: row['30dAvg Price']  / row['Floor Price'] * 100 , axis=1).round(2)
opensea.head()


# %%
import researchpy as rp
#https://www.pythonfordatascience.org/independent-samples-t-test-python/

summary, results = rp.ttest(group1= solsea['Growth in %'], group1_name= "Solsea",
                         group2= opensea['Growth in %'], group2_name= "Opensea")
print(summary)


# %%
from scipy.stats import ttest_ind
#H0 - growth in SOL collections lesser than ETH ; H1 - growth in SOL collections greater than or equal ETH

ttest_ind(solsea['Growth in %'], opensea['Growth in %'], alternative = "greater")


# %%


alpha = 0.05
sample = 20
a = np.random.choice(solsea['Growth in %'], sample)
b = np.random.choice(opensea['Growth in %'], sample)


def compare_2_groups(a, b, alpha, sample):
    stat, p = ttest_ind(a, b, alternative = "greater")
    print('Statistics=%.3f, p=%.3f' % (stat, p))
    if p > alpha:
        print('fail to reject H0')
    else:
        print('reject H0')

compare_2_groups(a, b, alpha, sample)


# %%

