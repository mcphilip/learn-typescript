export {}
// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let result = 0;

    for( let i = 0; i < ar.length - 1; i++) {
        for( let j = i + 1; j < ar.length; j++ ) {
            if( (ar[i] + ar[j]) % k == 0 ) {
                console.log([ar[i], ar[j]]);
                result++;
            }
        }
    }

    return result;
}

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]));