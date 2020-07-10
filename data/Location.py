# Tools for extracting location data from locationiq.com api
import pandas as pd
from ratelimiter import RateLimiter
import requests


class LocationTools:
    """Extract info from raw location data."""
    
    def __init__(self, raw_location_data):
        self.location_data = raw_location_data

    def return_raw(self):
        return self.location_data

    def address(self):
        return self.location_data.get('display_name')

    def neighbourhood(self):
        return self.location_data['address'].get('neighbourhood')

    def city(self):
        return self.location_data['address'].get('city')

    def province(self, raw_location_info):
        return self.location_data['address'].get('state')

    def country_code(self, raw_location_info):
        return self.location_data['address'].get('country_code')

    def country(self, raw_location_info):
        return self.location_data['address'].get('country')

    def get_all(self, raw_location_info):
        try:
            all_info = pd.Series([
                raw_location_info.get('display_name'),
                raw_location_info['address'].get('neighbourhood'),
                raw_location_info['address'].get('city'),
                raw_location_info['address'].get('state'),
                raw_location_info['address'].get('country_code'),
                raw_location_info['address'].get('country'),
            ])
        except Exception:
            all_info = pd.Series(['', '', '', '', '', ''])
        return all_info


class Location(LocationTools):
    def __init__(self):
        self.location_data = {}

    def __str__(self):
        return 'Reverse Geocoding using locationiq.com'

    @RateLimiter(max_calls=1, period=2)
    def make_request(self, lat, lon, private_token):
        # get raw location data
        request_param = {
            'key': private_token,
            'lat': str(lat),
            'lon': str(lon),
            'format': 'json',
        }
        response = requests.get('https://us1.locationiq.com/v1/reverse.php',
                                params=request_param)
        raw_location_content = response.json()
        self.location_data.update(raw_location_content)


def main():
    def import_token(func):
        """Open file decorator."""
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
    main()
