-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT D.DEPT_NUM, EMP_HIREDATE AS MOSTRECENT
    FROM LGDEPARTMENT AS D JOIN LGEMPLOYEE AS E ON D.EMP_NUM = E.EMP_NUM
    ORDER BY DEPT_NUM;