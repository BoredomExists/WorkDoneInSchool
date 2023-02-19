-- Active: 1657835453971@@localhost@3306@vscodedb

SELECT E.EMP_NUM, EMP_LNAME, EMP_EMAIL, EMP_TITLE, DEPT_NAME
    FROM LGEMPLOYEE AS E JOIN LGDEPARTMENT AS D ON E.DEPT_NUM = D.DEPT_NUM
    WHERE EMP_TITLE = 'ASSOCIATE'
    ORDER BY DEPT_NAME, EMP_TITLE;