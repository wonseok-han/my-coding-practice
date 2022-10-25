SELECT SUBSTR(PRODUCT_CODE, 1, 2) AS CATEGORY
     , COUNT(PRODUCT_CODE) AS PRODUCTS
  FROM PRODUCT
 GROUP BY SUBSTR(PRODUCT_CODE, 1, 2);