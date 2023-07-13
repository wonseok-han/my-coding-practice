import java.util.*;

class Solution {
    public String solution(String s, String skip, int index) {
        String answer = "";
        String[] skips = skip.split("");
        
        for (int i = 0; i < s.length(); i++) {
            int asciiCh = (int) s.charAt(i);
            
            for (int j = 0; j < index; j++) {
                asciiCh++;
                
                if (asciiCh > 122) {
                    asciiCh = 97;
                }
                
                while (true) {
                    if (!Arrays.asList(skips).contains(String.valueOf((char) asciiCh))) break;
                    asciiCh++;
                    
                    if (asciiCh > 122) {
                        asciiCh = 97;
                    }
                }
            }
            
            answer += String.valueOf((char) asciiCh);
        }
        
        return answer;
    }
}