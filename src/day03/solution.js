const findValidMultiplications = (text) => {
    // Match mul(X,Y) where X and Y are 1-3 digit numbers
    // The regex ensures we have exactly 'mul' followed by parentheses
    // and valid numbers separated by a comma
    const regex = /\bmul\((\d{1,3}),(\d{1,3})\)/g;
    const matches = [...text.matchAll(regex)];
    
    return matches.map(match => {
        const [_, num1, num2] = match;
        return parseInt(num1) * parseInt(num2);
    });
};

export const part1 = (input) => {
    const products = findValidMultiplications(input);
    return products.reduce((sum, product) => sum + product, 0);
};

export const part2 = (input) => {
    // Find all instructions with their positions
    const mulRegex = /\bmul\((\d{1,3}),(\d{1,3})\)/g;
    const doRegex = /\bdo\(\)/g;
    const dontRegex = /\bdon't\(\)/g;

    const instructions = [];

    // Collect mul instructions with their positions
    for (const match of input.matchAll(mulRegex)) {
        instructions.push({
            type: 'mul',
            position: match.index,
            num1: parseInt(match[1]),
            num2: parseInt(match[2])
        });
    }

    // Collect do() instructions with their positions
    for (const match of input.matchAll(doRegex)) {
        instructions.push({
            type: 'do',
            position: match.index
        });
    }

    // Collect don't() instructions with their positions
    for (const match of input.matchAll(dontRegex)) {
        instructions.push({
            type: 'dont',
            position: match.index
        });
    }

    // Sort instructions by position
    instructions.sort((a, b) => a.position - b.position);

    // Process instructions in order
    let enabled = true; // mul instructions are enabled at the start
    let sum = 0;

    for (const instruction of instructions) {
        switch (instruction.type) {
            case 'mul':
                if (enabled) {
                    sum += instruction.num1 * instruction.num2;
                }
                break;
            case 'do':
                enabled = true;
                break;
            case 'dont':
                enabled = false;
                break;
        }
    }

    return sum;
};