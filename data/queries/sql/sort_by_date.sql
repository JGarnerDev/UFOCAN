WITH
    province
    AS
    (
        SELECT *
        FROM {user_choice}
        --should be replaced with the table for prov user selects
    )


SELECT *
FROM province
order BY province.datetime --{user choice for direction <asc or desc>}
