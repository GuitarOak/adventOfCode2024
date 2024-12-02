const parseInput = (input) => {
    return input.trim().split('\n').reduce((acc, line) => {
        const [left, right] = line.trim().split(/\s+/).map(Number);
        acc[0].push(left);
        acc[1].push(right);
        return acc;
    }, [[], []]);
};

export const part1 = (input) => {
    const [leftList, rightList] = parseInput(input);
    
    const sortedLeft = [...leftList].sort((a, b) => a - b);
    const sortedRight = [...rightList].sort((a, b) => a - b);

    return sortedLeft.reduce((sum, num, index) => 
        sum + Math.abs(num - sortedRight[index]), 0);
};

export const part2 = (input) => {
    const [leftList, rightList] = parseInput(input);

    const rightFrequencies = rightList.reduce((freq, num) => {
        freq[num] = (freq[num] || 0) + 1;
        return freq;
    }, {});

    return leftList.reduce((score, num) => 
        score + (num * (rightFrequencies[num] || 0)), 0);
};
