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
WHERE province.comments like "%{}%"