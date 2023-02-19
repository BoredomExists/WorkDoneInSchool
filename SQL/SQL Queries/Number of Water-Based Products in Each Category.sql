-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT PROD_CATEGORY, COUNT(PROD_BASE) AS NUMPRODUCTS
    FROM LGPRODUCT
    WHERE PROD_BASE = 'Water'
    GROUP BY PROD_CATEGORY
    ORDER BY PROD_CATEGORY;