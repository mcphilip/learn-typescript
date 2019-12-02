export {}
// https://www.hackerrank.com/challenges/migratory-birds/problem
function mostCommonBird(arr: number[]): number {
    const sightings: number[] = [0,0,0,0,0];

    arr.map((n: number) => sightings[n-1]++);
    let result = sightings[0];

    result = sightings.indexOf(Math.max(...sightings)) + 1;
    
    return result;
}

console.log(mostCommonBird([1,4,4,4,5,3]));