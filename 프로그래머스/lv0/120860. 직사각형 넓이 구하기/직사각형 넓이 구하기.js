function solution(dots) {
    const getPoints = (point) => [...new Set(dots.reduce((acc, cur) => [...acc, cur[point]], []))].sort((a, b) => b - a);
    
    const distanceX = getPoints(0);
    const distanceY = getPoints(1);
    const [x2, x1] = distanceX;
    const [y2, y1] = distanceY;
    
    return (x2 - x1) * (y2 - y1);
}