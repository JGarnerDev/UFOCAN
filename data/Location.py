import requests
import pandas as pd
from ratelimiter import RateLimiter


"""  Tools for extracting location data from locationiq.com api  """


class Location:
    def __init__(self):
        self.reverse_geocode_response = []

    def __str__(self):
        return "Reverse Geocoding using locationiq.com"

    @RateLimiter(max_calls=1, period=2)
    def make_request(self, lat, lon, private_token, *args, **kwargs):
        # get raw location data
        params = {
            "key": private_token,
            "lat": str(lat),
            "lon": str(lon),
            "format": "json",
        }
        response = requests.get(
            "https://us1.locationiq.com/v1/reverse.php", params=params
        )
        content = response.json()
        self.reverse_geocode_response.append(content)

    def return_raw(self):
        return self.reverse_geocode_response[0]

    def address(self):
        address = self.reverse_geocode_response[0].get("display_name")
        return address

    def neighbourhood(self):
        neighbourhood = self.reverse_geocode_response[0]["address"].get("neighbourhood")
        return neighbourhood

    def city(self):
        city = self.reverse_geocode_response[0]["address"].get("city")
        return city

    def province(self, raw_location_info):
        province = self.reverse_geocode_response[0]["address"].get("state")
        return province

    def country_code(self, raw_location_info):
        country_code = self.reverse_geocode_response[0]["address"].get("country_code")
        return country_code

    def country(self, raw_location_info):
        country = self.reverse_geocode_response[0]["address"].get("country")
        return country


# This is for applying to a dataframe, if raw output is in a column
def get_all(self, raw_location_info):
    try:
        all_info = pd.Series(
            [
                raw_location_info.get("display_name"),  # address
                raw_location_info["address"].get("neighbourhood"),  # neighbourhood
                raw_location_info["address"].get("city"),  # city
                raw_location_info["address"].get("state"),  # province
                raw_location_info["address"].get("country_code"),  # country_code
                raw_location_info["address"].get("country"),  # country
            ]
        )
    except:
        all_info = pd.Series(["", "", "", "", "", ""])
    return all_info


def return_location_info():
    with open("/Users/kellan/Documents/GitHub/UFOCAN/data/token.txt") as f:
        private_token = f.read()

    lat, lon = input("lat,lon: ").split(",")

    reverse_geocode = Location()
    reverse_geocode.make_request(lat, lon, private_token)
    address = reverse_geocode.address()

    print(f"The Address is: {address}")


if __name__ == "__main__":
    return_location_info()
