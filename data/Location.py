import pandas as pd
from ratelimiter import RateLimiter
import requests


# Tools for extracting location data from locationiq.com api

class LocationTools:
    """Extract info from raw location data"""

    def __init__(self, raw_location_data):
        self.reverse_geocode_response = raw_location_data

    def return_raw(self):
        return self.reverse_geocode_response

    def address(self):
        address = self.reverse_geocode_response.get('display_name')
        return address

    def neighbourhood(self):
        neighbourhood = self.reverse_geocode_response['address'].get(
            'neighbourhood')
        return neighbourhood

    def city(self):
        city = self.reverse_geocode_response['address'].get('city')
        return city

    def province(self, raw_location_info):
        province = self.reverse_geocode_response['address'].get('state')
        return province

    def country_code(self, raw_location_info):
        country_code = self.reverse_geocode_response['address'].get(
            'country_code')
        return country_code

    def country(self, raw_location_info):
        country = self.reverse_geocode_response['address'].get('country')
        return country

    def get_all(self, raw_location_info):
        try:
            all_info = pd.Series(
                [
                    raw_location_info.get('display_name'),
                    raw_location_info['address'].get('neighbourhood'),
                    raw_location_info['address'].get('city'),
                    raw_location_info['address'].get('state'),
                    raw_location_info['address'].get('country_code'),
                    raw_location_info['address'].get('country'),
                ]
            )
        except Exception:
            all_info = pd.Series(['', '', '', '', '', ''])
        return all_info


class Location(LocationTools):

    def __init__(self):
        self.reverse_geocode_response = {}

    def __str__(self):
        return 'Reverse Geocoding using locationiq.com'

    @RateLimiter(max_calls=1, period=2)
    def make_request(self, lat, lon, private_token, *args, **kwargs):
        # get raw location data
        params = {
            'key': private_token,
            'lat': str(lat),
            'lon': str(lon),
            'format': 'json',
        }
        response = requests.get(
            'https://us1.locationiq.com/v1/reverse.php',
            params=params,
        )
        content = response.json()
        self.reverse_geocode_response.update(content)


def import_token(func):
    """open file decorator."""
    with open('token.txt') as token_file:
        private_token = token_file.read()
    func(private_token)


@import_token
def return_location_info(private_token):
    """Take lat,lon and return address."""
    lat, lon = input('lat,lon: ').split(',')
    
    reverse_geocode = Location()
    reverse_geocode.make_request(lat, lon, private_token)
    address = reverse_geocode.address()
    
    print(f'The Address is: {address}')


if __name__ == '__main__':
    return_location_info
