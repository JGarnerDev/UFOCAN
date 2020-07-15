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
            province,
            country_code,
            location_data_raw
        FROM
            ufos_ ${region}
    ) r
ORDER BY
    r.seconds ${sorting_direction}
LIMIT
    ${amount};