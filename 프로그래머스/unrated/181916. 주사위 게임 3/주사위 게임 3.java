import java.util.*;

class Solution {
    public int solution(int a, int b, int c, int d) {
        int[] dices = {a, b, c, d};
        Map<Integer, Integer> diceMap = new HashMap<Integer, Integer>();
        int answer = 0;
        
        for (int dice : dices) {
            diceMap.put(dice, diceMap.get(dice) == null ? 1 : diceMap.get(dice) + 1);
        }
        
        // 4 패턴
        if (diceMap.size() == 1) {
            answer = 1111 * a;
        } else if (diceMap.size() == 2) {
            List<String> values = new ArrayList<String>();
            int p = 0;
            int q = 0;
            
            for (int key : diceMap.keySet()) {
                if (diceMap.get(key) == 3) {
                    p = key;
                } else if (diceMap.get(key) == 2) {
                    if (p == 0) {
                        p = key;
                    } else {
                        q = key;
                    }
                } else {
                    q = key;
                }
                values.add(String.valueOf(diceMap.get(key)));
            }
            
            // 1, 3패턴
            if (values.indexOf("3") > -1) {
                answer = (int) Math.pow(10 * p + q, 2);
            }
            // 2, 2 패턴
            else {
                answer = (p + q) * Math.abs(p - q);
            }

        }
        // 1, 1, 2 패턴
        else if (diceMap.size() == 3) {
            int q = 0;
            int r = 0;
            
            for (int key : diceMap.keySet()) {
                if (diceMap.get(key) != 2) {
                    if (q == 0) {
                        q = key;
                    } else {
                        r = key;
                    }
                }
            }
            
            answer = q * r;
        }
        // 1, 1, 1, 1 패턴
        else {
            answer = Collections.min(diceMap.keySet());
        }
        
        return answer;
    }
}