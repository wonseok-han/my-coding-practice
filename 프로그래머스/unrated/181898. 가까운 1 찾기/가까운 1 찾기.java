import java.util.*;

class Solution {
    public int solution(int[] arr, int idx) {
        int answer = -1;
        
        for (int i = idx; i < arr.length; i++) {
            if (arr[i] != 1) {
                continue;
            } else {
                answer = i;
                break;
            }
        }
        
        return answer;
    }
}