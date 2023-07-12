import java.util.*;

class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = Arrays.copyOf(arr, arr.length);
        
        for (int i = 0; i < answer.length; i++) {
            for (int j = 0; j < queries.length; j++) {
                if (i >= queries[j][0] && i <= queries[j][1] && i % queries[j][2] == 0) {
                    answer[i] = answer[i] + 1;
                }
            }
        }
        
        return answer;
    }
}