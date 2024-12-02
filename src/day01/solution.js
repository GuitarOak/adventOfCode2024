export const part1 = (input) => {
    // Your solution for part 1
    return 0;
};

export const part2 = (input) => {
    // Your solution for part 2
    return 0;
};

// If running directly (node solution.js)
if (process.argv[1] === new URL(import.meta.url).pathname) {
    const fs = await import('fs');
    const input = fs.readFileSync('src/day01/input.txt', 'utf8').trim();
    
    console.log('Part 1:', part1(input));
    console.log('Part 2:', part2(input));
}
