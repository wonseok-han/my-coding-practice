import java.util.*;

class Solution {
    public int solution(String[] strArr) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        for (String str : strArr) {
            map.put(str.length(), map.get(str.length()) == null ? 1 : map.get(str.length()) + 1);
        }
        
        return Collections.max(map.values());
    }
}