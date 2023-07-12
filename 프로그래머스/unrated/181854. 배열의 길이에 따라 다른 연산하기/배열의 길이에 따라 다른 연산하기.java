import java.util.*;

class Solution {
    public int[] solution(int[] arr, int n) {
        int[] answer = new int[arr.length];
        
        if (arr.length % 2 != 0) {
            for (int i = 0; i < arr.length; i++) {
                answer[i] = i % 2 == 0 ? arr[i] + n : arr[i];
            }
        } else {
            for (int i = 0; i < arr.length; i++) {
                answer[i] = i % 2 == 1 ? arr[i] + n : arr[i];
            }
        }
        
        return answer;
    }
}