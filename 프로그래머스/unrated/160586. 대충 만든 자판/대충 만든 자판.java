import java.util.*;

class Solution {
    public int[] solution(String[] keymap, String[] targets) {
        int[] answer = new int[targets.length];
        Map<String, Integer> map = new HashMap<String, Integer>();
        
        for (String keys : keymap) {
            String[] splitKey = keys.split("");
            for (int i = 1; i <= splitKey.length; i++) {
                int index = i - 1;
            map.put(splitKey[index], map.get(splitKey[index]) == null ? i : i < map.get(splitKey[index]) ? i : map.get(splitKey[index]));
            }
        }
        
        int answerIndex = 0;
        for (String target : targets) {
            String[] splitKey = target.split("");
            int sum = 0;
            
            for (int i = 0; i < splitKey.length; i++) {
                if (map.get(splitKey[i]) == null) {
                    sum = -1;
                    break;
                }
                
                sum += map.get(splitKey[i]);
            }
            
            answer[answerIndex] = sum;
            answerIndex++;
        }
        
        return answer;
    }
}