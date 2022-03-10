#!/usr/bin/env python
# coding: utf-8

# In[6]:


get_ipython().run_line_magic('matplotlib', 'inline')
import requests
import pandas as pd


# In[7]:


def nfts_data(collections):
    
    
    url = "https://api.opensea.io/api/v1/collection/" + str(collections) + "/stats"
    
    # Get information from API
    api_data = requests.get(url).json()
    
    # Convert to dataframe and proper format
    nfts_data = pd.DataFrame.from_dict(api_data).T
    
    # Choose only the relevant columns
    nfts_data = nfts_data[["thirty_day_volume", "thirty_day_sales", 'thirty_day_average_price',  
                          "floor_price", "count"]]
    
    # Create index table to facilitate future joins
    nfts_data["index"] = range(len(nfts_data))
    
    return nfts_data


# In[8]:


#Create dictionary with top30 observed collections

collections = {"Karafuru": nfts_data("karafuru"),
        "Azuki": nfts_data("azuki"),
        "Bored Ape": nfts_data("boredapeyachtclub"),
        "Crypto Punks": nfts_data("cryptopunks"),
        "Invisible Friends": nfts_data("invisiblefriends"),
        "Clonex": nfts_data("clonex"),
        "3Landers": nfts_data("3landers"),
        "Mutant Ape": nfts_data("mutant-ape-yacht-club"),
        "NFT Worlds": nfts_data("nft-worlds"),
        "mfers": nfts_data("mfers"),
        "Hape Prime": nfts_data("hapeprime"),
        "Cool Pets": nfts_data("coolpetsnft"),
        "RTFKT": nfts_data("rtfkt-mnlth"),
        "Tubby Cats": nfts_data("tubby-cats"),
        "Pixel Mongen": nfts_data("pixelmongen1"),
        "Sandbox": nfts_data("sandbox"),
        "Doodles": nfts_data("doodles-official"),
        "Tasty Bones": nfts_data("tastybonesxyz"),
        "Raid Party": nfts_data("raidparty"),
        "Edenhorde": nfts_data("edenhorde-official"),
        "Wonderpals": nfts_data("wonderpals"),
        "Cool Cats": nfts_data("cool-cats-nft"),
        "Cat Blox": nfts_data("catbloxgenesis"),
        "World Wide Web": nfts_data("worldwidewebbland"),
        "Super Normal": nfts_data("supernormalbyzipcy"),
        "Star Cat": nfts_data("starcatchersnft"),
        "The Other Side": nfts_data("tos-theotherside"),
        "Live of Asuna": nfts_data("livesofasuna"),
        "Star Cat": nfts_data("starcatchersnft"),
        "Hype Bear": nfts_data("hype-bears-club-official-"),
        "Decentraland": nfts_data("decentraland")} 


# In[9]:


data = pd.concat(list(collections.values()))
#data


# In[10]:


list(collections.keys())
data['Title'] = list(collections.keys())


# In[11]:


data = data.reset_index(drop=True)


# In[12]:


data.drop('index', axis=1, inplace=True)


# In[13]:


first_column = data.pop('Title')
data.insert(0, 'Title', first_column)
data = data.rename(columns=
                   {"thirty_day_volume": "30dVolume", 
                     "thirty_day_sales": "30dSales", 
                     "thirty_day_average_price": "30dAvg Price",
                     "floor_price": "Floor Price",
                     "count": "Items"})


# In[14]:


data = data.round(2)

data.head()


# In[15]:


data.to_csv('opensea.csv', index = False)


# In[ ]:




