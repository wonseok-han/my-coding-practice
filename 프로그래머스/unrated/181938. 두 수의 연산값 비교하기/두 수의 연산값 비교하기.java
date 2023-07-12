class Solution {
    public int solution(int a, int b) {
        int cal1 = Integer.parseInt(Integer.toString(a) + Integer.toString(b));
        int cal2 = 2 * a * b;
        
        return cal1 >= cal2 ? cal1 : cal2;
    }
}