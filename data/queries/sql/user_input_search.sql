SELECT
    r.*
FROM
    (
        SELECT
            STR_TO_DATE(datetime, '%m/%e/%Y') AS dt,
            country,
            shape,
            seconds,
            duration,
            comments,
            latitude,
            longitude,
            full_address,
            neighbourhood,
            city,
            province,~
            country_code,
            location_data_raw
        FROM
            ufos_ ${region}
    ) r
WHERE
    r.comments LIKE ${search_string} -- needs % before and after user input
LIMIT
    ${amount};~