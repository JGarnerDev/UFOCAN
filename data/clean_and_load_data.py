import json
from datetime import datetime

import pandas as pd
from sqlalchemy import create_engine

from Location import LocationTools


def get_location_data(lat, lon):
    """Get location data as a series using api."""
    with open("token.txt") as f:
        private_token = f.read()

    location = LocationTools()
    location.make_request(lat, lon, private_token)

    location_as_series = pd.Series([
        location.address(),
        location.neighbourhood(),
        location.city(),
        location.province(),
        location.country_code(),
        location.country(),
        location.return_raw(),
    ])

    return location_as_series


def clean_and_fetch():
    """Clean and reverse geolocate raw data.
    Operation:
    1- Clean up raw data source
    2- Make API call for reverse geolocation
    3- Create csv file with output
    """
    print("Data cleaning and reverse geolocation started at {}".format(
        datetime.now()))

    # source ->https://github.com/planetsig/ufo-reports
    ufos = pd.read_csv(r'csv_files/scrubbed(original).csv',
                       low_memory=False,
                       usecols=[
                           'datetime',
                           'shape',
                           'seconds',
                           'duration',
                           'comments',
                           'latitude',
                           'longitude',
                           'country',
                       ])


    ufos_can = ufos[ufos['country'] == 'ca'].copy()
    ufos_cam.drop(columns='country', inplace=True)
    ufos_can.reset_index(drop=True, inplace=True)

    location_columns = [
        'full_address',
        'neighbourhood',
        'city',
        'province',
        'country_code',
        'country',
        'location_data_raw',
    ]

    for col in location_columns:
        ufos_can[col] = ''

    ufos_can[location_columns] = ufos_can.apply(
        lambda x: get_location_data(x['latitude'], x['longitude']), axis=1)

    ufos_can = ufos_can[ufos_can['country'] == 'Canada']

    ufos_can.province.replace(to_replace={
        'Northwest Territories': 'NWT',
        'British Columbia': 'BC',
        'Newfoundland and Labrador': 'Newfoundland',
        'Prince Edward Island': 'PEI',
    },
                              inplace=True)
    ufos_can.reset_index(inplace=True, drop=True)
    ufos.columns = ufos.columns.str.lower().str.strip()

    csv_name = 'csv_files/canada_ufos_corrected.csv'
    ufos_can.to_csv(f'{csv_name}', index=False)

    print('Data cleaned and output to csv titled: {csv_name} at {time}'.format(
        csv_name=csv_name, time=datetime.now()))


def load_mysql():
    """Load UFO data into mysql workbench."""
    with open('Mysql_creds.json') as f:
        mysql_creds = json.load(f)

    ufos_can = pd.read_csv(r'csv_files/canada_ufos_corrected.csv')

    ufos_nunavut = ufos_can[ufos_can['province'] == 'Nunavut']
    ufos_quebec = ufos_can[ufos_can['province'] == 'Quebec']
    ufos_nwt = ufos_can[ufos_can['province'] == 'NWT']
    ufos_ontario = ufos_can[ufos_can['province'] == 'Ontario']
    ufos_bc = ufos_can[ufos_can['province'] == 'BC']
    ufos_alberta = ufos_can[ufos_can['province'] == 'Alberta']
    ufos_saskatchewan = ufos_can[ufos_can['province'] == 'Saskatchewan']
    ufos_manitoba = ufos_can[ufos_can['province'] == 'Manitoba']
    ufos_yukon = ufos_can[ufos_can['province'] == 'Yukon']
    ufos_newfoundland = ufos_can[ufos_can['province'] == 'Newfoundland']
    ufos_new_brunswick = ufos_can[ufos_can['province'] == 'New Brunswick']
    ufos_nova_scotia = ufos_can[ufos_can['province'] == 'Nova Scotia']
    ufos_pei = ufos_can[ufos_can['province'] == 'PEI']

    table_list = (
        [ufos_nunavut, 'ufos_nunavut'],
        [ufos_quebec, 'ufos_quebec'],
        [ufos_nwt, 'ufos_nwt'],
        [ufos_ontario, 'ufos_ontario'],
        [ufos_bc, 'ufos_bc'],
        [ufos_alberta, 'ufos_alberta'],
        [ufos_saskatchewan, 'ufos_saskatchewan'],
        [ufos_manitoba, 'ufos_manitoba'],
        [ufos_yukon, 'ufos_yukon'],
        [ufos_newfoundland, 'ufos_newfoundland'],
        [ufos_new_brunswick, 'ufos_new_brunswick'],
        [ufos_nova_scotia, 'ufos_nova_scotia'],
        [ufos_pei, 'ufos_pei'],
    )

    engine = create_engine(
        'mysql+pymysql://{user}:{pw}@us-cdbr-east-05.cleardb.net:3306/{db}'.
        format(user=mysql_creds['user'],
               pw=mysql_creds['pw'],
               db=mysql_creds['db']))

    for table in table_list:
        try:

            table[0].to_sql(table[1],
                            con=engine,
                            if_exists='replace',
                            chunksize=1000,
                            index=False)

        except Exception:
            print('Error has occured. Tables were not updated')

    print('Tables loaded at {}'.format(datetime.now()))


if __name__ == '__main__':
    clean_and_fetch()
    load_mysql()
