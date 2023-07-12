import java.util.*;

class Solution {
    public String solution(String code) {
        String answer = "";
        int mode = 0;
        
        for (int i = 0; i < code.length(); i++) {
            String str = String.valueOf(code.charAt(i));

            if ("1".equals(str)) {
                mode = mode == 0 ? 1 : 0;
                continue;
            }
            
            if (mode == 0) {
                if (i % 2 == 0) {
                    answer += str;
                }
            } else {
                if (i % 2 == 1) {
                    answer += str;
                }
            }
            
        }
        
        return "".equals(answer) ? "EMPTY" : answer;
    }
}