function solution(id_list, report, k) {
    const users = id_list.reduce((acc, cur) => ({
        ...acc,
        [cur]: {
            cnt: 0,
            report: []
        }
    }), {});
    
    for (item of report) {
        const [user, badUser] = item.split(" ");
        if (!users[user].report.includes(badUser)) {
            users[badUser]["cnt"] = users[badUser]["cnt"] + 1;
        }
        
        users[user].report = users[user]?.report.includes(badUser) ? [...users[user]?.report] : [...users[user]?.report, badUser];
    }
    
    return Object.keys(users).reduce((acc, cur) => {
        return [
            ...acc,
            users[cur].report.filter((item) => users[item].cnt >= k).length,
        ];
    }, []);
}