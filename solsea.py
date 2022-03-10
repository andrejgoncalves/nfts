#!/usr/bin/env python
# coding: utf-8

# In[1]:


from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service


# In[2]:


# Create webdriver object

chromedriver = "/Users/jungle/Downloads/chromedriver"

option = webdriver.ChromeOptions()

option.binary_location = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'

s = Service(chromedriver)

driver = webdriver.Chrome(service=s, options=option)


# In[3]:


# Get the website

driver.get("https://solsea.io/collection-statistics")


# In[11]:


headers = driver.find_elements_by_xpath('//th[@class="table-header__StatisticsTable_2uROi "]')
nfts = driver.find_elements_by_xpath('//td[@class="table-data__StatisticsRow_1rG9E undefined"]')


# In[12]:


headers_list = []
for header in range(len(headers)):
    headers_list.append(headers[header].text)

nfts_list = []
for nft in range(len(nfts)):
    nfts_list.append(nfts[nft].text)


# In[13]:


headers_list


# In[14]:


df = {element:[] for element in headers_list} 
counter = 0 

for element in nfts_list:
    if counter == 8: 
        counter = 0

    if counter == 0: 
        df[headers_list[0]].append(element)
    elif counter == 1: 
        df[headers_list[1]].append(element)
    elif counter == 2: 
        df[headers_list[2]].append(element)  
    elif counter == 3:
        df[headers_list[3]].append(element)
    elif counter == 4: 
        df[headers_list[4]].append(element)
    elif counter == 5: 
        df[headers_list[5]].append(element)
    elif counter == 6: 
        df[headers_list[6]].append(element)
    else: 
        df[headers_list[7]].append(element)
   
    counter += 1 


# In[15]:


import pandas as pd
import numpy as np
data = pd.DataFrame(df)


# In[16]:


data.set_index('Title   ')
data = data.drop(['#   '], axis=1)
data = data.rename(columns=
                   {"Title   ": "Title", 
                   "30dSales   ": "30dSales",
                    "30dAvg Price   ": "30dAvg Price",
                    "Floor   ": "Floor Price",
                   "Items   ": "Items"})


# In[18]:


data['30dVolume'] = data['30dVolume'].apply(
    lambda x: x.replace(' Ⓞ', ''))
data['30dAvg Price'] = data['30dAvg Price'].apply(
    lambda x: x.replace(' Ⓞ', ''))
data['Floor Price'] = data['Floor Price'].apply(
    lambda x: x.replace(' Ⓞ', '')) 


# In[19]:


data = data.round(1)

data.head()


# In[20]:


data.to_csv('solsea.csv', index = False)


# In[ ]:




