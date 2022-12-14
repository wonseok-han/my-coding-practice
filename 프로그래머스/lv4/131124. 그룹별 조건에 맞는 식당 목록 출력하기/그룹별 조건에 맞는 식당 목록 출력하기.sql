WITH REVIWER AS (
    SELECT MEMBER_ID
         , COUNT(MEMBER_ID) AS MEMBERS
      FROM REST_REVIEW
     GROUP BY MEMBER_ID
)
SELECT MEMBER.MEMBER_NAME
     , REVIEW.REVIEW_TEXT
     , DATE_FORMAT(REVIEW.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE
  FROM MEMBER_PROFILE MEMBER
 INNER JOIN ( SELECT MEMBER_ID
                   , MEMBERS
                FROM REVIWER
               WHERE MEMBERS IN (SELECT MAX(MEMBERS) FROM REVIWER) ) MAX_REVIWER ON (MAX_REVIWER.MEMBER_ID = MEMBER.MEMBER_ID)
 INNER JOIN REST_REVIEW REVIEW ON (REVIEW.MEMBER_ID = MAX_REVIWER.MEMBER_ID)
 ORDER BY REVIEW.REVIEW_DATE, REVIEW.REVIEW_TEXT;