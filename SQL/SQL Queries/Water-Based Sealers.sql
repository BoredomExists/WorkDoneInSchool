-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT PROD_SKU, PROD_DESCRIPT, PROD_TYPE, PROD_BASE, PROD_CATEGORY, PROD_PRICE 
    FROM LGPRODUCT 
    WHERE PROD_BASE = 'Water' AND PROD_CATEGORY = 'Sealer';