import json

import pandas as pd
from sqlalchemy import create_engine

from Location import LocationTools


def get_location_data(lat, lon):
    """Get location data as a series using api."""
    with open("UFOCAN/data/token.txt") as f:
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
    ufos = pd.read_csv(  # source ->https://github.com/planetsig/ufo-reports
        r'UFOCAN/data/csv_files/scrubbed(original).csv')

    ufos.columns = ufos.columns.str.lower().str.strip()

    ufos_canada = ufos[ufos['country'] == 'ca'].copy()
    ufos_canada.reset_index(drop=True, inplace=True)
    ufos_canada.drop(columns=['state', 'city', 'country', 'date reported'],
                     inplace=True)

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
        ufos_canada[col] = ''

    ufos_canada[location_columns] = ufos_canada.apply(
        lambda x: get_location_data(x['latitude'], x['longitude']), axis=1)

    ufos_canada = ufos_canada[ufos_canada['country'] == 'Canada']

    ufos_canada = ufos_canada.applymap({
        'Northwest Territories': 'NWT',
        'British Columbia': 'BC',
        'Newfoundland and Labrador': 'Newfoundland',
        'Prince Edward Island': 'PEI',
    })
    ufos_canada.reset_index(inplace=True, drop=True)

    csv_name = 'canada_ufos_corrected.csv'
    ufos_canada.to_csv(f'{csv_name}', index=False)

    print(f'Data cleaned and output to csv titled: {csv_name}')


def load_mysql():
    """Load UFO data into mysql workbench."""
    with open('UFOCAN/data/Mysql_creds.json') as f:
        mysql_creds = json.load(f)

    ufos_canada = pd.read_csv(
        r'UFOCAN/data/csv_files/canada_ufos_corrected.csv')
    ufos_canada.columns = ufos_canada.columns.str.title()

    ufos_nunavut = ufos_canada[ufos_canada['Province'] == 'Nunavut']
    ufos_quebec = ufos_canada[ufos_canada['Province'] == 'Quebec']
    ufos_nwt = ufos_canada[ufos_canada['Province'] == 'NWT']
    ufos_ontario = ufos_canada[ufos_canada['Province'] == 'Ontario']
    ufos_bc = ufos_canada[ufos_canada['Province'] == 'BC']
    ufos_alberta = ufos_canada[ufos_canada['Province'] == 'Alberta']
    ufos_saskatchewan = ufos_canada[ufos_canada['Province'] == 'Saskatchewan']
    ufos_manitoba = ufos_canada[ufos_canada['Province'] == 'Manitoba']
    ufos_yukon = ufos_canada[ufos_canada['Province'] == 'Yukon']
    ufos_newfoundland = ufos_canada[ufos_canada['Province'] == 'Newfoundland']
    ufos_new_brunswick = ufos_canada[ufos_canada['Province'] ==
                                     'New Brunswick']
    ufos_nova_scotia = ufos_canada[ufos_canada['Province'] == 'Nova Scotia']
    ufos_pei = ufos_canada[ufos_canada['Province'] == 'PEI']

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
                            chunksize=1000)

        except Exception:
            print('Error has occured. Tables were not updated')

    print('Tables loaded')


if __name__ == "__main__":
    clean_and_fetch();  load_mysql()
