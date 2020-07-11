import json

import pandas as pd
from sqlalchemy import create_engine

#load provinces info database
with open('UFOCAN/data/Mysql_creds.json') as f:
    mysql_creds = json.load(f)

ufos_canada = pd.read_csv(r'UFOCAN/data/csv_files/canada_ufos_corrected.csv')
ufos_canada.columns = ufos_canada.columns.str.title()

ufos_nunavut = ufos_canada[ufos_canada['Province'] == 'Nunavut']
ufos_quebec = ufos_canada[ufos_canada['Province'] == 'Quebec']
ufos_northwest_territories = ufos_canada[ufos_canada['Province'] == 'NWT']
ufos_ontario = ufos_canada[ufos_canada['Province'] == 'Ontario']
ufos_british_columbia = ufos_canada[ufos_canada['Province'] == 'BC']
ufos_alberta = ufos_canada[ufos_canada['Province'] == 'Alberta']
ufos_saskatchewan = ufos_canada[ufos_canada['Province'] == 'Saskatchewan']
ufos_manitoba = ufos_canada[ufos_canada['Province'] == 'Manitoba']
ufos_yukon = ufos_canada[ufos_canada['Province'] == 'Yukon']
ufos_newfoundland = ufos_canada[ufos_canada['Province'] == 'Newfoundland']
ufos_new_brunswick = ufos_canada[ufos_canada['Province'] == 'New Brunswick']
ufos_nova_scotia = ufos_canada[ufos_canada['Province'] == 'Nova Scotia']
ufos_prince_edward_island = ufos_canada[ufos_canada['Province'] == 'PEI']

table_list = (
    [ufos_nunavut, 'ufos_nunavut'],
    [ufos_quebec, 'ufos_quebec'],
    [ufos_northwest_territories, 'ufos_northwest_territories'],
    [ufos_ontario, 'ufos_ontario'],
    [ufos_british_columbia, 'ufos_british_columbia'],
    [ufos_alberta, 'ufos_alberta'],
    [ufos_saskatchewan, 'ufos_saskatchewan'],
    [ufos_manitoba, 'ufos_manitoba'],
    [ufos_yukon, 'ufos_yukon'],
    [ufos_newfoundland, 'ufos_newfoundland'],
    [ufos_new_brunswick, 'ufos_new_brunswick'],
    [ufos_nova_scotia, 'ufos_nova_scotia'],
    [ufos_prince_edward_island, 'ufos_prince_edward_island'],
)

engine = create_engine(
    'mysql+pymysql://{user}:{pw}@us-cdbr-east-05.cleardb.net:3306/{db}'.format(
        user=mysql_creds['user'], pw=mysql_creds['pw'], db=mysql_creds['db']))

for table in table_list:
    table[0].to_sql(table[1], con=engine, if_exists='replace', chunksize=1000)

print('Tables loaded')
