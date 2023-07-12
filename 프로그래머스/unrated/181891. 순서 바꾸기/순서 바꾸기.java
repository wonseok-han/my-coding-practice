import java.util.*;

class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = new int[num_list.length];
        int[] first = Arrays.copyOfRange(num_list, 0, n);
        int[] second = Arrays.copyOfRange(num_list, n, num_list.length);
        int i = 0;
        
        for (int number : second) {
            answer[i] = number;
            i++;
        }
        
        for (int number : first) {
            answer[i] = number;
            i++;
        }
        
        return answer;
    }
}