
import requests
from ratelimiter import RateLimiter


'''  Tools for extracting location data from locationiq.com api  '''


class Location:

    def __str__(self):
        return "Reverse Geocoding using locationiq.com"

    @RateLimiter(max_calls=1, period=2)
    def make_request(lat, lon, private_token, *args, **kwargs):
        #get raw location data
        params = {'key': private_token, "lat": str(
            lat), "lon": str(lon), "format": "json"}
        response = requests.get(
            "https://us1.locationiq.com/v1/reverse.php", params=params)
        content = response.json()

        return content

    def address(self, raw_location_info: dict):
        address = raw_location_info.get('display_name')
        return address

    def neighbourhood(self, raw_location_info: dict):
        neighbourhood = raw_location_info['address'].get('neighbourhood')
        return neighbourhood

    def city(self, raw_location_info: dict):
        city = raw_location_info['address'].get('city')
        return city

    def province(self, raw_location_info: dict):
        province = raw_location_info['address'].get('state')
        return province

    def country_code(self, raw_location_info: dict):
        country_code = raw_location_info['address'].get('country_code')
        return country_code

    def country(self, raw_location_info: dict):
        country = raw_location_info['address'].get('country')
        return country

    def get_all(self, raw_location_info: dict):
        try:
            all_info = pd.Series([
                raw_location_info.get('display_name'),  # address
                raw_location_info['address'].get(
                    'neighbourhood'),  # neighbourhood
                raw_location_info['address'].get('city'),  # city
                raw_location_info['address'].get('state'),  # province
                raw_location_info['address'].get(
                    'country_code'),  # country_code
                raw_location_info['address'].get('country')  # country
            ])
        except:
            all_info = pd.Series(['', '', '', '', '', ''])
        return all_info
