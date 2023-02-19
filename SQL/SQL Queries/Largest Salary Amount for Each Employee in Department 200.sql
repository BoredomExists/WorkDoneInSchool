-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT E.EMP_NUM, EMP_FNAME, EMP_LNAME, ROUND(MAX(SAL_AMOUNT)) AS LARGESTSALARY
    FROM LGEMPLOYEE AS E JOIN LGSALARY_HISTORY AS S ON E.EMP_NUM = S.EMP_NUM
    WHERE E.DEPT_NUM = 200
    GROUP BY EMP_NUM
    ORDER BY LARGESTSALARY DESC;