--ufos_canada ( all entries from all tables)

CREATE OR REPLACE 
VIEW heroku_b7db332625d54c4.ufos_canada 

AS 


    SELECT *
    FROM ufos_alberta

UNION

    SELECT *
    FROM ufos_bc

UNION

    SELECT *
    FROM ufos_manitoba

UNION

    SELECT *
    FROM ufos_new_brunswick

UNION

    SELECT *
    FROM ufos_newfoundland

UNION

    SELECT *
    FROM ufos_nova_scotia

UNION

    SELECT *
    FROM ufos_nunavut

UNION

    SELECT *
    FROM ufos_nwt

UNION

    SELECT *
    FROM ufos_ontario

UNION

    SELECT *
    FROM ufos_pei

UNION

    SELECT *
    FROM ufos_saskatchewan

UNION

    SELECT *
    FROM ufos_yukon;