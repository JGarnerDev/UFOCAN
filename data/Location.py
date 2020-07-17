# Tools for extracting location data from locationiq.com api
import ast
import requests
from ratelimiter import RateLimiter
from functools import wraps


class Location:
    """Extract info from raw location data."""
    def __init__(self, raw_location_data):
        self.location_data = ast.literal_eval(raw_location_data)

    def return_raw(self):
        return self.location_data

    def address(self):
        return self.location_data.get('display_name')

    def neighbourhood(self):
        return self.location_data.get('address').get('neighbourhood')

    def city(self):
        """City appears as city, village, town, or Null.
        This will return in order:
        city, town, village, road+county"""
        cities_search = ['city','village','town',]
        road_county = ['road', 'county']
        city_info = []

        for i in cities_search:
            if self.location_data.get('address').get(i) is not None:
                city_info.append(self.location_data.get('address').get(i))

        if len(city_info) > 0:
            return city_info[0]
        else:
            for i in road_county:
                if self.location_data.get('address').get(i) is not None:
                    city_info.append(self.location_data.get('address').get(i))
            return ','.join(city_info)

    def province(self):
        return self.location_data.get('address').get('state')

    def country_code(self):
        return self.location_data.get('address').get('country_code')

    def country(self):
        return self.location_data.get('address').get('country')


class LocationTools(Location):
    """make api requests and maintain LocationInfo functionality."""
    def __init__(self):
        self.location_data = {}

    def __str__(self):
        return 'Reverse Geocoding using locationiq.com'

    @RateLimiter(max_calls=1, period=2)
    def make_request(self, lat, lon, private_token):
        """get raw location data."""
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


def import_token(func):
    """Open file using decorator."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        with open('token.txt') as token_file:
            private_token = token_file.read()
        run = func(private_token, *args, **kwargs)
        return run

    return wrapper


@import_token
def return_location_info(private_token):
    """Take lat,lon and return address."""
    lat, lon = input('lat,lon: ').split(',')

    rev_geo_location = LocationTools()
    rev_geo_location.make_request(lat, lon, private_token)
    address = rev_geo_location.address()

    print(f'The Address is: {address}')


if __name__ == '__main__':
    return_location_info()
