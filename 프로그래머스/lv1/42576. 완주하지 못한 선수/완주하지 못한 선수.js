function solution(participant, completion) {
    const participantMap = participant.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    const completionMap = completion.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
    
    const completionKeys = Object.keys(completionMap);
    
    for (key of Object.keys(participantMap)) {
        if (!completionMap[key]) {
            return key;
        }
        else {
            if (participantMap[key] !== completionMap[key]) {
                return key;
            }
        }
    }
}