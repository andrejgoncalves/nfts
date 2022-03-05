#!/usr/bin/env python
# coding: utf-8

# In[9]:


from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service


# In[10]:


# Create webdriver object

chromedriver = "/Users/jungle/Downloads/chromedriver"

option = webdriver.ChromeOptions()

option.binary_location = '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'

s = Service(chromedriver)

driver = webdriver.Chrome(service=s, options=option)


# In[11]:


# Get the website

driver.get("https://solsea.io/collection-statistics")


# In[40]:


headers = driver.find_elements_by_xpath('//th[@class="table-header__StatisticsTable_2uROi "]')
nfts = driver.find_elements_by_xpath('//td[@class="table-data__StatisticsRow_1rG9E undefined"]')


# In[41]:


headers_list = []
for header in range(len(headers)):
    headers_list.append(headers[header].text)

nfts_list = []
for nft in range(len(nfts)):
    nfts_list.append(nfts[nft].text)


# In[88]:


headers_list


# In[55]:


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


# In[87]:


import pandas as pd
data = pd.DataFrame(df)


# In[ ]:


data.set_index('Title   ')
data = data.drop(['#   '], axis=1)
data = data.rename(columns=
                   {"Floor   ": "Floor Price"})


# In[86]:


data.head()


# In[ ]:




