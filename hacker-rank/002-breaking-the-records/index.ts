export {}
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
function breakingRecords(scores: number[]): number[] {
    const records: number[] = [0,0];
    let minScore = scores[0];
    let maxScore = scores[0];

    for( let i = 1; i < scores.length; i++ ) {
        if( scores[i] < minScore ) {
            records[1] += 1;
            minScore = scores[i];
        }
        if( scores[i] > maxScore ) {
            records[0] += 1;
            maxScore = scores[i];
        }
    }

    return records;
}

const scores: number[] = [3,4,21,36,10,28,35,5,24,42];
console.log(breakingRecords(scores));