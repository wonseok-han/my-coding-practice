SELECT HALF.FLAVOR
  FROM FIRST_HALF HALF
 INNER JOIN ICECREAM_INFO INFO ON (INFO.FLAVOR = HALF.FLAVOR AND INGREDIENT_TYPE = 'fruit_based')
 WHERE HALF.TOTAL_ORDER > 3000
 ORDER BY HALF.TOTAL_ORDER DESC;