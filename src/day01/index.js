import { readFileSync } from 'fs';
import { part1, part2 } from './solution.js';

const input = readFileSync('src/day01/input.txt', 'utf8');

console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
