class Solution {
    public int solution(String number) {
        int answer = 0;
        String[] numbers = number.split("");
        
        for (int i = 0; i < numbers.length; i++) {
            int num = Integer.parseInt(numbers[i]);
            answer += num;
        }
        
        return answer % 9;
    }
}