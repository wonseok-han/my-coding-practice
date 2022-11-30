function solution(sizes) {
    const sortedSizes = sizes.reduce((acc, cur) => {
        const [width, height] = cur;
        const [widths, heights] = acc;
        
        return height > width ? [[...widths, height], [...heights, width]] : [[...widths, width], [...heights, height]];
    }, [[], []]);
    
    return Math.max(...sortedSizes[0]) * Math.max(...sortedSizes[1]);
}