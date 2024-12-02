const isValidReport = (levels) => {
    if (levels.length < 2) return true;
    
    // Check if sequence is increasing or decreasing
    let isIncreasing = true;
    let isDecreasing = true;
    
    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i-1];
        
        // Check if difference is between 1 and 3
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }
        
        // Check if sequence maintains direction
        if (diff > 0) isDecreasing = false;
        if (diff < 0) isIncreasing = false;
        
        // If neither increasing nor decreasing, invalid
        if (!isIncreasing && !isDecreasing) {
            return false;
        }
    }
    
    return true;
};

export const part1 = (input) => {
    const reports = input.trim().split('\n').map(line => 
        line.trim().split(/\s+/).map(Number)
    );
    
    return reports.filter(isValidReport).length;
};

export const part2 = (input) => {
    const reports = input.trim().split('\n').map(line => 
        line.trim().split(/\s+/).map(Number)
    );
    
    return reports.filter(report => {
        // If already safe, no need to remove anything
        if (isValidReport(report)) return true;
        
        // Try removing each number one at a time
        for (let i = 0; i < report.length; i++) {
            const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
            if (isValidReport(modifiedReport)) {
                return true;
            }
        }
        
        return false;
    }).length;
};