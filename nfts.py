#!/usr/bin/env python
# coding: utf-8

# In[1]:


import matplotlib.pyplot as plt
import numpy as np
import pandas as pd


# In[2]:


solsea = pd.read_csv("solsea.csv")


# In[3]:


opensea = pd.read_csv("opensea.csv")


# In[4]:


solsea.drop('Unnamed: 0', axis=1, inplace=True)


# In[50]:


#solsea_sample = solsea.sample(15)
solsea = solsea.dropna()
solsea['Growth in %'] = solsea.apply(lambda row: row['30dAvg Price']  / row['Floor Price'] * 100 , axis=1).round(2)
solsea.head()


# In[51]:


#opensea_sample = opensea.sample(15)
opensea = opensea.dropna()
opensea['Growth in %'] = opensea.apply(lambda row: row['30dAvg Price']  / row['Floor Price'] * 100 , axis=1).round(2)
opensea.head()


# In[67]:


#https://www.pythonfordatascience.org/independent-samples-t-test-python/

import researchpy as rp

summary, results = rp.ttest(group1= solsea['Growth in %'], group1_name= "Solsea",
                         group2= opensea['Growth in %'], group2_name= "Opensea")
print(summary)


# In[68]:


#H0 - growth in SOL collections greater than ETH ; H1 - growth in SOL collections less than or equal ETH
ttest_ind(solsea['Growth in %'], opensea['Growth in %'], alternative = "less")


# In[74]:


from scipy.stats import ttest_ind

alpha = 0.05
sample = 20
a = np.random.choice(solsea['Growth in %'], sample)
b = np.random.choice(opensea['Growth in %'], sample)


def compare_2_groups(a, b, alpha, sample):
    stat, p = ttest_ind(a, b, alternative = "less")
    print('Statistics=%.3f, p=%.3f' % (stat, p))
    if p > alpha:
        print('fail to reject H0')
    else:
        print('reject H0')

compare_2_groups(a, b, alpha, sample)


# In[71]:


#H0 - growth in ETH collections greater than SOL ; H1 - growth in ETH collections less than or equal SOL
#ttest_ind(opensea['Growth in %'], solsea['Growth in %'], alternative = "less")


# In[ ]:




