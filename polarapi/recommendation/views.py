from django.http import HttpResponse
import pandas as pd
import json

def index(request,lat,longt,product_name,product_price):
	if '-' in lat:
		lat = int(lat) * -1
	else:
		lat = int(lat)

	if '-' in longt:
		longt = int(longt) *-1
	else:
		longt = int(longt)

	loc = (lat,longt)
	df = read_data_set(data_path = '/Users/shunmingyau/Downloads/Sample.csv')
	#to_json_record = recommend_lowest_price_options(df,loc= (20,-99),product_name = 'Burger',product_price = 80)
	to_json_record = recommend_lowest_price_options(df,loc= loc,product_name = product_name,product_price = product_price)
	json_output = transform_json(to_json_record)
	return HttpResponse(json_output)


def read_data_set(data_path):
	df = pd.read_csv(data_path,encoding = 'ISO-8859-1')
	return df


def transform_json(to_json_record):
    json_file_path = '/Users/shunmingyau/Downloads/json_record.json'
    
    with open(json_file_path,'w') as file:
        file.write(to_json_record)
    
    loaded_json = json.load(open(json_file_path))
    loaded_json.pop('columns')
    loaded_json.pop('index')
    #loaded_json.pop('data')
    sql_table = ['user','product','product','receipt','receipt','receipt','receipt',]
    fields = ['user_name','product_name','store_name','price_per_unit','product_name','location','timestamp']

    new_json = {}
    new_json['data'] = {}
    type(loaded_json)
    
    sql_table_fields = list(zip(sql_table,fields))
    
    
    for json_list in loaded_json['data']:
        for x in json_list:
            try:
                new_json['data'][sql_table_fields[json_list.index(x)][0]].append({sql_table_fields[json_list.index(x)][1]:x})
            except KeyError:
                new_json['data'][sql_table_fields[json_list.index(x)][0]] = [{sql_table_fields[json_list.index(x)][1]:x}]
    
    json_output = json.dumps(new_json)
    
    return json_output



def recommend_lowest_price_options(df,loc,product_name,product_price):
	lat, long = loc
	df['lat_dist'] = df['latitude'] - lat
	df['long_dist'] = df['longtitude'] - long
	df['dist'] = (df['lat_dist']**2 + df['long_dist']**2).pow(1./2)
	df = df[df['product_name'].str.contains(product_name)]
	df = df[df['price_per_unit'] <= product_price]

	#sort pricing items
	fields = ['user_name','product_name','store_name','price_per_unit','product_name','location','timestamp']
	df.sort_values(['dist','price_per_unit'],ascending  =True,inplace = True)
	top_5_selection = df.head(5)[fields]
	to_json_record = top_5_selection.to_json(orient='split')
	#print(top_5_selection.to_json())
	#print(top_5_selection.to_json(orient='DataFrame'))
	print(top_5_selection)
	return to_json_record


