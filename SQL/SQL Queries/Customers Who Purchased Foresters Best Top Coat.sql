-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT DISTINCT CUST_FNAME, CUST_LNAME, CUST_STREET, CUST_CITY, CUST_STATE, CUST_ZIP, INV_DATE
    FROM LGCUSTOMER AS C JOIN LGINVOICE AS I ON C.CUST_CODE = I.CUST_CODE
    JOIN LGLINE AS L ON I.INV_NUM = L.INV_NUM JOIN LGPRODUCT AS P ON L.PROD_SKU = P.PROD_SKU JOIN LGBRAND AS B ON P.BRAND_ID = B.BRAND_ID
    WHERE BRAND_NAME = 'FORESTERS BEST' AND PROD_CATEGORY = 'TOP COAT' AND INV_DATE BETWEEN '07/15/2015' AND '07/31/2015'
    ORDER BY CUST_STATE, CUST_LNAME, CUST_FNAME;