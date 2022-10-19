function solution(emergency) {
    const copyEmergency = [...emergency];
    const sorted = copyEmergency.sort((a, b) => b - a).reduce((acc, cur, index) => ({
        ...acc,
        [cur]: index + 1
    }), {});
    
    return emergency.reduce((acc, cur) => [
        ...acc,
        sorted[cur],
    ], []);
}