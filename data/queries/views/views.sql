CREATE OR REPLACE 
VIEW heroku_b7db332625d54c4.ufos_ca

AS


    SELECT *
    FROM ufos_ab

UNION

    SELECT *
    FROM ufos_bc

UNION

    SELECT *
    FROM ufos_mb

UNION

    SELECT *
    FROM ufos_nb

UNION

    SELECT *
    FROM ufos_nl

UNION

    SELECT *
    FROM ufos_ns

UNION

    SELECT *
    FROM ufos_nt

UNION

    SELECT *
    FROM ufos_nu

UNION

    SELECT *
    FROM ufos_on

UNION

    SELECT *
    FROM ufos_pe

UNION

    SELECT *
    FROM ufos_qc

UNION

    SELECT *
    FROM ufos_sk

UNION

    SELECT *
    FROM ufos_yt