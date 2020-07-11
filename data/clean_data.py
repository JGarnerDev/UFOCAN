import pandas as pd
from Location import Location, LocationTools


def get_location_data(lat, lon):
    """get location data as a series"""
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
        location.return_raw()
    ])

    return location_as_series


ufos = pd.read_csv(  # source ->https://github.com/planetsig/ufo-reports
    r'UFOCAN/data/csv_files/scrubbed.csv')

ufos_canada = ufos[ufos['Country'] == 'ca']
ufos_canada.reset_index(drop=True, inplace=True)
ufos_canada.drop(columns=['State', 'City', 'Country', 'Date added'],
                 inplace=True)

location_columns = [
    'full_address', 'neighbourhood', 'city', 'province', 'country_code',
    'country', 'location_data_raw'
]

for col in location_columns:
    ufos_canada[col] = ''

ufos_canada[location_columns] = ufos_canada.apply(
    lambda x: get_location_data(x['Lat'], x['Lon'], private_token), axis=1)

ufos_canada = ufos_canada[ufos_canada['Country'] == 'Canada']
ufos_canada.columns = ufos_canada.columns.str.title().str.strip()
ufos_canada = ufos_canada.applymap({
    'Northwest Territories': 'NWT',
    'British Columbia': 'BC',
    'Newfoundland and Labrador': 'Newfoundland',
    'Prince Edward Island': 'PEI',
})

ufos_canada.reset_index(inplace=True, drop=True)
ufos_canada.to_csv('canada_ufos_corrected.csv', index=False)