WITH
    my_table
    AS
    (
        SELECT
            *
        FROM
            { my_big_table_name }
    ),
satement_2 AS () {
SELECT
    statement
}
--newest
SELECT
    *
FROM
    my_table
ORDER BY
    date DESC --write separate sql queries for what shows on website