import java.util.*;

class Solution {
    public String[] solution(String[] names) {
        String[] answer;
        List<String> queue = new ArrayList<String>();
        int answerCnt = 0;
        
        for (int i = 0; i < names.length / 5 + (names.length % 5 > 0 ? 1 : 0); i++) {
            queue.add(names[i*5]);
            answerCnt++;
        }
        
        answer = new String[queue.size()];
        
        for (int i = 0; i < queue.size(); i++) {
            answer[i] = queue.get(i);
        }
        
        return answer;
    }
}