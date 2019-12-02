export {}
// https://www.hackerrank.com/challenges/the-birthday-bar/problem
function birthday(s: number[], d: number, m: number): number {
    let result = 0;
    for( let i = 0; i + m <= s.length; i++ ) {
        if( s.slice(i,i+m).reduce((a: number,b: number) => a + b, 0) == d ) {
            result++;
        }
    }

    return result;
}

const s = [1,2,1,3,2];
console.log(birthday(s, 3, 2));