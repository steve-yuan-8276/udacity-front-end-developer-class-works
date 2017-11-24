import json, requests
url = 'https://api.foursquare.com/v2/venues/explore'
clientID = "MAFEGHOG3CCWFPDQLZFDVZ4I52SBTZH1IAUDSTCGIVLG3UTK";
clientSecret = "SU0IVSZEPOJGDK1VKOY1524VHR2UYKFYF5OBYJPTOH0J3SWF";

params = dict(
  client_id='CLIENT_ID',
  client_secret='CLIENT_SECRET',
  v='20170801',
  ll='39.90872,116.39748',
  query='coffee',
  limit=1
)
resp = requests.get(url=url, params=params)
data = json.loads(resp.text)
