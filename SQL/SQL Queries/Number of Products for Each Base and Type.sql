-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT PROD_BASE, PROD_TYPE, COUNT(PROD_SKU) AS NUMPRODUCTS
    FROM LGPRODUCT
    GROUP BY PROD_BASE, PROD_TYPE
    ORDER BY PROD_BASE, PROD_TYPE;