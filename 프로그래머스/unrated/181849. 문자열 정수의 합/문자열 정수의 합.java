class Solution {
    public int solution(String num_str) {
        int answer = 0;
        
        for (String strNum : num_str.split("")) {
            answer += Integer.parseInt(strNum);
        }
        
        return answer;
    }
}