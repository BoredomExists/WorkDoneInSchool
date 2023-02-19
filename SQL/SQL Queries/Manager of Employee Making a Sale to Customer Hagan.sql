-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT M.EMP_FNAME AS 'Manager FName', M.EMP_LNAME AS 'Manager LName', DEPT_NAME, DEPT_PHONE, E.EMP_FNAME AS 'Employee FName', E.EMP_LNAME AS 'Employee LName', CUST_FNAME AS 'Customer FName', CUST_LNAME AS 'Customer LName', INV_DATE, INV_TOTAL
    FROM LGEMPLOYEE AS M JOIN LGEMPLOYEE AS E JOIN LGDEPARTMENT AS D JOIN LGCUSTOMER AS C JOIN LGINVOICE AS I
    WHERE M.EMP_NUM = D.EMP_NUM AND E.EMP_NUM = I.EMPLOYEE_ID AND D.DEPT_NUM = E.DEPT_NUM AND C.CUST_CODE = I.CUST_CODE
    AND C.CUST_LNAME = 'HAGAN' AND I.INV_DATE = '2015-05-18';